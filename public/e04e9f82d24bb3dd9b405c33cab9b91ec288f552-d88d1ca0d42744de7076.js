(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"33TZ":function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("q1tI"),i=n.n(a),c=n("TSYQ"),s=n.n(c),l=n("17x9"),u=n.n(l),f=n("i8i4"),p=n.n(f);function d(){return Object(a.useState)(null)}var m=n("lcWJ"),b="top",v="bottom",h="right",g="left",y=[b,v,h,g],O=y.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),w=[].concat(y,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),j=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"],x=n("XcHJ");var E=function(e){var t=Object(x.a)();return[e[0],Object(a.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function C(e){return e.split("-")[0]}function k(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function P(e){var t=k(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function D(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function N(e){return e instanceof D(e).Element||e instanceof Element}function R(e){return e instanceof D(e).HTMLElement||e instanceof HTMLElement}function T(e){return"undefined"!=typeof ShadowRoot&&(e instanceof D(e).ShadowRoot||e instanceof ShadowRoot)}function A(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&T(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function M(e){return e?(e.nodeName||"").toLowerCase():null}function S(e){return D(e).getComputedStyle(e)}function L(e){return["table","td","th"].indexOf(M(e))>=0}function W(e){return((N(e)?e.ownerDocument:e.document)||window.document).documentElement}function B(e){return"html"===M(e)?e:e.assignedSlot||e.parentNode||(T(e)?e.host:null)||W(e)}function I(e){return R(e)&&"fixed"!==S(e).position?e.offsetParent:null}function H(e){for(var t=D(e),n=I(e);n&&L(n)&&"static"===S(n).position;)n=I(n);return n&&("html"===M(n)||"body"===M(n)&&"static"===S(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&R(e)&&"fixed"===S(e).position)return null;for(var n=B(e);R(n)&&["html","body"].indexOf(M(n))<0;){var r=S(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function q(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var z=Math.max,F=Math.min,U=Math.round;function _(e,t,n){return z(e,F(t,n))}function V(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function J(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var K={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,c=C(n.placement),s=q(c),l=[g,h].indexOf(c)>=0?"height":"width";if(a&&i){var u=function(e,t){return V("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:J(e,y))}(o.padding,n),f=P(a),p="y"===s?b:g,d="y"===s?v:h,m=n.rects.reference[l]+n.rects.reference[s]-i[s]-n.rects.popper[l],O=i[s]-n.rects.reference[s],w=H(a),j=w?"y"===s?w.clientHeight||0:w.clientWidth||0:0,x=m/2-O/2,E=u[p],k=j-f[l]-u[d],D=j/2-f[l]/2+x,N=_(E,D,k),R=s;n.modifiersData[r]=((t={})[R]=N,t.centerOffset=N-D,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!=typeof r||(r=t.elements.popper.querySelector(r)))&&A(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Y(e){return e.split("-")[1]}var Q={top:"auto",right:"auto",bottom:"auto",left:"auto"};function X(e){var t,n=e.popper,r=e.popperRect,o=e.placement,a=e.variation,i=e.offsets,c=e.position,s=e.gpuAcceleration,l=e.adaptive,u=e.roundOffsets,f=!0===u?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:U(U(t*r)/r)||0,y:U(U(n*r)/r)||0}}(i):"function"==typeof u?u(i):i,p=f.x,d=void 0===p?0:p,m=f.y,y=void 0===m?0:m,O=i.hasOwnProperty("x"),w=i.hasOwnProperty("y"),j=g,x=b,E=window;if(l){var C=H(n),k="clientHeight",P="clientWidth";C===D(n)&&"static"!==S(C=W(n)).position&&"absolute"===c&&(k="scrollHeight",P="scrollWidth"),C=C,o!==b&&(o!==g&&o!==h||"end"!==a)||(x=v,y-=C[k]-r.height,y*=s?1:-1),o!==g&&(o!==b&&o!==v||"end"!==a)||(j=h,d-=C[P]-r.width,d*=s?1:-1)}var N,R=Object.assign({position:c},l&&Q);return s?Object.assign({},R,((N={})[x]=w?"0":"",N[j]=O?"0":"",N.transform=(E.devicePixelRatio||1)<=1?"translate("+d+"px, "+y+"px)":"translate3d("+d+"px, "+y+"px, 0)",N)):Object.assign({},R,((t={})[x]=w?y+"px":"",t[j]=O?d+"px":"",t.transform="",t))}var Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,a=n.adaptive,i=void 0===a||a,c=n.roundOffsets,s=void 0===c||c,l={placement:C(t.placement),variation:Y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,X(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,X(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},G={passive:!0};var $={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,a=void 0===o||o,i=r.resize,c=void 0===i||i,s=D(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach((function(e){e.addEventListener("scroll",n.update,G)})),c&&s.addEventListener("resize",n.update,G),function(){a&&l.forEach((function(e){e.removeEventListener("scroll",n.update,G)})),c&&s.removeEventListener("resize",n.update,G)}},data:{}},ee={left:"right",right:"left",bottom:"top",top:"bottom"};function te(e){return e.replace(/left|right|bottom|top/g,(function(e){return ee[e]}))}var ne={start:"end",end:"start"};function re(e){return e.replace(/start|end/g,(function(e){return ne[e]}))}function oe(e){var t=D(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ae(e){return k(W(e)).left+oe(e).scrollLeft}function ie(e){var t=S(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ce(e,t){var n;void 0===t&&(t=[]);var r=function e(t){return["html","body","#document"].indexOf(M(t))>=0?t.ownerDocument.body:R(t)&&ie(t)?t:e(B(t))}(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),a=D(r),i=o?[a].concat(a.visualViewport||[],ie(r)?r:[]):r,c=t.concat(i);return o?c:c.concat(ce(B(i)))}function se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function le(e,t){return"viewport"===t?se(function(e){var t=D(e),n=W(e),r=t.visualViewport,o=n.clientWidth,a=n.clientHeight,i=0,c=0;return r&&(o=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=r.offsetLeft,c=r.offsetTop)),{width:o,height:a,x:i+ae(e),y:c}}(e)):R(t)?function(e){var t=k(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):se(function(e){var t,n=W(e),r=oe(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=z(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),i=z(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+ae(e),s=-r.scrollTop;return"rtl"===S(o||n).direction&&(c+=z(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:i,x:c,y:s}}(W(e)))}function ue(e,t,n){var r="clippingParents"===t?function(e){var t=ce(B(e)),n=["absolute","fixed"].indexOf(S(e).position)>=0&&R(e)?H(e):e;return N(n)?t.filter((function(e){return N(e)&&A(e,n)&&"body"!==M(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),a=o[0],i=o.reduce((function(t,n){var r=le(e,n);return t.top=z(r.top,t.top),t.right=F(r.right,t.right),t.bottom=F(r.bottom,t.bottom),t.left=z(r.left,t.left),t}),le(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function fe(e){var t,n=e.reference,r=e.element,o=e.placement,a=o?C(o):null,i=o?Y(o):null,c=n.x+n.width/2-r.width/2,s=n.y+n.height/2-r.height/2;switch(a){case b:t={x:c,y:n.y-r.height};break;case v:t={x:c,y:n.y+n.height};break;case h:t={x:n.x+n.width,y:s};break;case g:t={x:n.x-r.width,y:s};break;default:t={x:n.x,y:n.y}}var l=a?q(a):null;if(null!=l){var u="y"===l?"height":"width";switch(i){case"start":t[l]=t[l]-(n[u]/2-r[u]/2);break;case"end":t[l]=t[l]+(n[u]/2-r[u]/2)}}return t}function pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,a=n.boundary,i=void 0===a?"clippingParents":a,c=n.rootBoundary,s=void 0===c?"viewport":c,l=n.elementContext,u=void 0===l?"popper":l,f=n.altBoundary,p=void 0!==f&&f,d=n.padding,m=void 0===d?0:d,g=V("number"!=typeof m?m:J(m,y)),O="popper"===u?"reference":"popper",w=e.rects.popper,j=e.elements[p?O:u],x=ue(N(j)?j:j.contextElement||W(e.elements.popper),i,s),E=k(e.elements.reference),C=fe({reference:E,element:w,strategy:"absolute",placement:o}),P=se(Object.assign({},w,C)),D="popper"===u?P:E,R={top:x.top-D.top+g.top,bottom:D.bottom-x.bottom+g.bottom,left:x.left-D.left+g.left,right:D.right-x.right+g.right},T=e.modifiersData.offset;if("popper"===u&&T){var A=T[o];Object.keys(R).forEach((function(e){var t=[h,v].indexOf(e)>=0?1:-1,n=[b,v].indexOf(e)>=0?"y":"x";R[e]+=A[n]*t}))}return R}var de={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,a=void 0===o||o,i=n.altAxis,c=void 0===i||i,s=n.fallbackPlacements,l=n.padding,u=n.boundary,f=n.rootBoundary,p=n.altBoundary,d=n.flipVariations,m=void 0===d||d,j=n.allowedAutoPlacements,x=t.options.placement,E=C(x),k=s||(E===x||!m?[te(x)]:function(e){if("auto"===C(e))return[];var t=te(e);return[re(e),t,re(t)]}(x)),P=[x].concat(k).reduce((function(e,n){return e.concat("auto"===C(n)?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,a=n.rootBoundary,i=n.padding,c=n.flipVariations,s=n.allowedAutoPlacements,l=void 0===s?w:s,u=Y(r),f=u?c?O:O.filter((function(e){return Y(e)===u})):y,p=f.filter((function(e){return l.indexOf(e)>=0}));0===p.length&&(p=f);var d=p.reduce((function(t,n){return t[n]=pe(e,{placement:n,boundary:o,rootBoundary:a,padding:i})[C(n)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:n,boundary:u,rootBoundary:f,padding:l,flipVariations:m,allowedAutoPlacements:j}):n)}),[]),D=t.rects.reference,N=t.rects.popper,R=new Map,T=!0,A=P[0],M=0;M<P.length;M++){var S=P[M],L=C(S),W="start"===Y(S),B=[b,v].indexOf(L)>=0,I=B?"width":"height",H=pe(t,{placement:S,boundary:u,rootBoundary:f,altBoundary:p,padding:l}),q=B?W?h:g:W?v:b;D[I]>N[I]&&(q=te(q));var z=te(q),F=[];if(a&&F.push(H[L]<=0),c&&F.push(H[q]<=0,H[z]<=0),F.every((function(e){return e}))){A=S,T=!1;break}R.set(S,F)}if(T)for(var U=function(e){var t=P.find((function(t){var n=R.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return A=t,"break"},_=m?3:1;_>0;_--){if("break"===U(_))break}t.placement!==A&&(t.modifiersData[r]._skip=!0,t.placement=A,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function be(e){return[b,h,v,g].some((function(t){return e[t]>=0}))}var ve={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,i=pe(t,{elementContext:"reference"}),c=pe(t,{altBoundary:!0}),s=me(i,r),l=me(c,o,a),u=be(s),f=be(l);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":f})}};var he={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,a=void 0===o?[0,0]:o,i=w.reduce((function(e,n){return e[n]=function(e,t,n){var r=C(e),o=[g,b].indexOf(r)>=0?-1:1,a="function"==typeof n?n(Object.assign({},t,{placement:e})):n,i=a[0],c=a[1];return i=i||0,c=(c||0)*o,[g,h].indexOf(r)>=0?{x:c,y:i}:{x:i,y:c}}(n,t.rects,a),e}),{}),c=i[t.placement],s=c.x,l=c.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=i}};var ge={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=fe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}};var ye={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,a=void 0===o||o,i=n.altAxis,c=void 0!==i&&i,s=n.boundary,l=n.rootBoundary,u=n.altBoundary,f=n.padding,p=n.tether,d=void 0===p||p,m=n.tetherOffset,y=void 0===m?0:m,O=pe(t,{boundary:s,rootBoundary:l,padding:f,altBoundary:u}),w=C(t.placement),j=Y(t.placement),x=!j,E=q(w),k="x"===E?"y":"x",D=t.modifiersData.popperOffsets,N=t.rects.reference,R=t.rects.popper,T="function"==typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,A={x:0,y:0};if(D){if(a||c){var M="y"===E?b:g,S="y"===E?v:h,L="y"===E?"height":"width",W=D[E],B=D[E]+O[M],I=D[E]-O[S],U=d?-R[L]/2:0,V="start"===j?N[L]:R[L],J="start"===j?-R[L]:-N[L],K=t.elements.arrow,Q=d&&K?P(K):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},Z=X[M],G=X[S],$=_(0,N[L],Q[L]),ee=x?N[L]/2-U-$-Z-T:V-$-Z-T,te=x?-N[L]/2+U+$+G+T:J+$+G+T,ne=t.elements.arrow&&H(t.elements.arrow),re=ne?"y"===E?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][E]:0,ae=D[E]+ee-oe-re,ie=D[E]+te-oe;if(a){var ce=_(d?F(B,ae):B,W,d?z(I,ie):I);D[E]=ce,A[E]=ce-W}if(c){var se="x"===E?b:g,le="x"===E?v:h,ue=D[k],fe=ue+O[se],de=ue-O[le],me=_(d?F(fe,ae):fe,ue,d?z(de,ie):de);D[k]=me,A[k]=me-ue}}t.modifiersData[r]=A}},requiresIfExists:["offset"]};function Oe(e,t,n){void 0===n&&(n=!1);var r,o,a=R(t),i=R(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),c=W(t),s=k(e,i),l={scrollLeft:0,scrollTop:0},u={x:0,y:0};return(a||!a&&!n)&&(("body"!==M(t)||ie(c))&&(l=(r=t)!==D(r)&&R(r)?{scrollLeft:(o=r).scrollLeft,scrollTop:o.scrollTop}:oe(r)),R(t)?((u=k(t,!0)).x+=t.clientLeft,u.y+=t.clientTop):c&&(u.x=ae(c))),{x:s.left+l.scrollLeft-u.x,y:s.top+l.scrollTop-u.y,width:s.width,height:s.height}}function we(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){if(!n.has(r)){var o=t.get(r);o&&e(o)}})),r.push(o)}(e)})),r}var je={placement:"bottom",modifiers:[],strategy:"absolute"};function xe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function Ee(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,a=void 0===o?je:o;return function(e,t,n){void 0===n&&(n=a);var o,i,c={placement:"bottom",orderedModifiers:[],options:Object.assign({},je,a),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],l=!1,u={state:c,setOptions:function(n){var o="function"==typeof n?n(c.options):n;f(),c.options=Object.assign({},a,c.options,o),c.scrollParents={reference:N(e)?ce(e):e.contextElement?ce(e.contextElement):[],popper:ce(t)};var i=function(e){var t=we(e);return j.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,c.options.modifiers)));return c.orderedModifiers=i.filter((function(e){return e.enabled})),c.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"==typeof o){var a=o({state:c,name:t,instance:u,options:r});s.push(a||function(){})}})),u.update()},forceUpdate:function(){if(!l){var e=c.elements,t=e.reference,n=e.popper;if(xe(t,n)){c.rects={reference:Oe(t,H(n),"fixed"===c.options.strategy),popper:P(n)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach((function(e){return c.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<c.orderedModifiers.length;r++)if(!0!==c.reset){var o=c.orderedModifiers[r],a=o.fn,i=o.options,s=void 0===i?{}:i,f=o.name;"function"==typeof a&&(c=a({state:c,options:s,name:f,instance:u})||c)}else c.reset=!1,r=-1}}},update:(o=function(){return new Promise((function(e){u.forceUpdate(),e(c)}))},function(){return i||(i=new Promise((function(e){Promise.resolve().then((function(){i=void 0,e(o())}))}))),i}),destroy:function(){f(),l=!0}};if(!xe(e,t))return u;function f(){s.forEach((function(e){return e()})),s=[]}return u.setOptions(n).then((function(e){!l&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var Ce=Ee({defaultModifiers:[ve,ge,Z,$,he,de,ye,K]}),ke=function(e){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},Pe={name:"applyStyles",enabled:!1},De={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,a=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===a&&"setAttribute"in o){var i=o.getAttribute("aria-describedby");if(i&&-1!==i.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",i?i+","+r.id:r.id)}}},Ne=[];var Re=function(e,t,n){var i=void 0===n?{}:n,c=i.enabled,s=void 0===c||c,l=i.placement,u=void 0===l?"bottom":l,f=i.strategy,p=void 0===f?"absolute":f,d=i.modifiers,m=void 0===d?Ne:d,b=Object(o.a)(i,["enabled","placement","strategy","modifiers"]),v=Object(a.useRef)(),h=Object(a.useCallback)((function(){var e;null==(e=v.current)||e.update()}),[]),g=Object(a.useCallback)((function(){var e;null==(e=v.current)||e.forceUpdate()}),[]),y=E(Object(a.useState)({placement:u,update:h,forceUpdate:g,attributes:{},styles:{popper:ke(p),arrow:{}}})),O=y[0],w=y[1],j=Object(a.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),w({state:t,styles:n,attributes:r,update:h,forceUpdate:g,placement:t.placement})}}}),[h,g,w]);return Object(a.useEffect)((function(){v.current&&s&&v.current.setOptions({placement:u,strategy:p,modifiers:[].concat(m,[j,Pe])})}),[p,u,j,s]),Object(a.useEffect)((function(){if(s&&null!=e&&null!=t)return v.current=Ce(e,t,Object(r.a)({},b,{placement:u,strategy:p,modifiers:[].concat(m,[De,j])})),function(){null!=v.current&&(v.current.destroy(),v.current=void 0,w((function(e){return Object(r.a)({},e,{attributes:{},styles:{popper:ke(p)}})})))}}),[s,e,t]),O},Te=n("RjgW"),Ae=n("GEtZ"),Me=n("ZCiN"),Se=n("2W6z"),Le=n.n(Se),We=n("dZvc"),Be=n("B8pp"),Ie=function(){};var He=function(e){return e&&("current"in e?e.current:e)};var qe=function(e,t,n){var r=void 0===n?{}:n,o=r.disabled,i=r.clickTrigger,c=void 0===i?"click":i,s=Object(a.useRef)(!1),l=t||Ie,u=Object(a.useCallback)((function(t){var n,r=He(e);Le()(!!r,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),s.current=!(r&&(n=t,!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey))&&function(e){return 0===e.button}(t)&&!Object(Te.a)(r,t.target))}),[e]),f=Object(Me.a)((function(e){s.current||l(e)})),p=Object(Me.a)((function(e){27===e.keyCode&&l(e)}));Object(a.useEffect)((function(){if(!o&&null!=e){var t,n=window.event,r=(t=He(e),Object(We.a)(Object(Be.a)(t))),a=Object(Ae.a)(r,c,u,!0),i=Object(Ae.a)(r,c,(function(e){e!==n?f(e):n=void 0})),s=Object(Ae.a)(r,"keyup",(function(e){e!==n?p(e):n=void 0})),l=[];return"ontouchstart"in r.documentElement&&(l=[].slice.call(r.body.children).map((function(e){return Object(Ae.a)(e,"mousemove",Ie)}))),function(){a(),i(),s(),l.forEach((function(e){return e()}))}}}),[e,o,c,u,f,p])},ze=function(e){var t;return"undefined"==typeof document?null:null==e?Object(We.a)().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function Fe(e,t){var n=Object(a.useState)((function(){return ze(e)})),r=n[0],o=n[1];if(!r){var i=ze(e);i&&o(i)}return Object(a.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(a.useEffect)((function(){var t=ze(e);t!==r&&o(t)}),[e,r]),r}function Ue(e){var t,n,o,a,i,c=e.enabled,s=e.enableEvents,l=e.placement,u=e.flip,f=e.offset,p=e.fixed,d=e.containerPadding,m=e.arrowElement,b=e.popperConfig,v=void 0===b?{}:b,h=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(v.modifiers);return Object(r.a)({},v,{placement:l,enabled:c,strategy:p?"fixed":v.strategy,modifiers:(i=Object(r.a)({},h,{eventListeners:{enabled:s},preventOverflow:Object(r.a)({},h.preventOverflow,{options:d?Object(r.a)({padding:d},null==(t=h.preventOverflow)?void 0:t.options):null==(n=h.preventOverflow)?void 0:n.options}),offset:{options:Object(r.a)({offset:f},null==(o=h.offset)?void 0:o.options)},arrow:Object(r.a)({},h.arrow,{enabled:!!m,options:Object(r.a)({},null==(a=h.arrow)?void 0:a.options,{element:m})}),flip:Object(r.a)({enabled:!!u},h.flip)}),void 0===i&&(i={}),Array.isArray(i)?i:Object.keys(i).map((function(e){return i[e].name=e,i[e]})))})}var _e=i.a.forwardRef((function(e,t){var n=e.flip,c=e.offset,s=e.placement,l=e.containerPadding,u=void 0===l?5:l,f=e.popperConfig,b=void 0===f?{}:f,v=e.transition,h=d(),g=h[0],y=h[1],O=d(),w=O[0],j=O[1],x=Object(m.a)(y,t),E=Fe(e.container),C=Fe(e.target),k=Object(a.useState)(!e.show),P=k[0],D=k[1],N=Re(C,g,Ue({placement:s,enableEvents:!!e.show,containerPadding:u||5,flip:n,offset:c,arrowElement:w,popperConfig:b})),R=N.styles,T=N.attributes,A=Object(o.a)(N,["styles","attributes"]);e.show?P&&D(!1):e.transition||P||D(!0);var M=e.show||v&&!P;if(qe(g,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!M)return null;var S=e.children(Object(r.a)({},A,{show:!!e.show,props:Object(r.a)({},T.popper,{style:R.popper,ref:x}),arrowProps:Object(r.a)({},T.arrow,{style:R.arrow,ref:j})}));if(v){var L=e.onExit,W=e.onExiting,B=e.onEnter,I=e.onEntering,H=e.onEntered;S=i.a.createElement(v,{in:e.show,appear:!0,onExit:L,onExiting:W,onExited:function(){D(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:B,onEntering:I,onEntered:H},S)}return E?p.a.createPortal(S,E):null}));_e.displayName="Overlay",_e.propTypes={show:u.a.bool,placement:u.a.oneOf(w),target:u.a.any,container:u.a.any,flip:u.a.bool,children:u.a.func.isRequired,containerPadding:u.a.number,popperConfig:u.a.object,rootClose:u.a.bool,rootCloseEvent:u.a.oneOf(["click","mousedown"]),rootCloseDisabled:u.a.bool,onHide:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o;return e.rootClose?(o=u.a.func).isRequired.apply(o,[e].concat(n)):u.a.func.apply(u.a,[e].concat(n))},transition:u.a.elementType,onEnter:u.a.func,onEntering:u.a.func,onEntered:u.a.func,onExit:u.a.func,onExiting:u.a.func,onExited:u.a.func};var Ve=_e,Je=n("KXUJ"),Ke=n("vUet");function Ye(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}var Qe=n("7xGa"),Xe=["children","transition","popperConfig"],Ze=["props","arrowProps","show","update","forceUpdate","placement","state"],Ge={transition:Qe.a,rootClose:!1,show:!1,placement:"top"};function $e(e){var t,n,c,l,u,f=e.children,p=e.transition,d=e.popperConfig,m=void 0===d?{}:d,b=Object(o.a)(e,Xe),v=Object(a.useRef)({}),h=(t=Object(a.useRef)(null),n=Object(a.useRef)(null),c=Object(a.useRef)(null),l=Object(Ke.a)(void 0,"popover"),u=Object(Ke.a)(void 0,"dropdown-menu"),[Object(a.useCallback)((function(e){e&&(Object(Je.a)(e,l)||Object(Je.a)(e,u))&&(n.current=Ye(e),e.style.margin="0",t.current=e)}),[l,u]),[Object(a.useMemo)((function(){return{name:"offset",options:{offset:function(e){var t=e.placement;if(!n.current)return[0,0];var r=n.current,o=r.top,a=r.left,i=r.bottom,c=r.right;switch(t.split("-")[0]){case"top":return[0,i];case"left":return[0,c];case"bottom":return[0,o];case"right":return[0,a];default:return[0,0]}}}}}),[n]),Object(a.useMemo)((function(){return{name:"arrow",options:{padding:function(){if(!c.current)return 0;var e=c.current,t=e.top,n=e.right,r=t||n;return{top:r,left:r,right:r,bottom:r}}}}}),[c]),Object(a.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",fn:function(){},requiresIfExists:["arrow"],effect:function(e){var n=e.state;if(t.current&&n.elements.arrow&&Object(Je.a)(t.current,l)){if(n.modifiersData["arrow#persistent"]){var r=Ye(n.elements.arrow),o=r.top,a=r.right,i=o||a;n.modifiersData["arrow#persistent"].padding={top:i,left:i,right:i,bottom:i}}else c.current=Ye(n.elements.arrow);return n.elements.arrow.style.margin="0",function(){n.elements.arrow&&(n.elements.arrow.style.margin="")}}}}}),[l])]]),g=h[0],y=h[1],O=!0===p?Qe.a:p||null;return i.a.createElement(Ve,Object(r.a)({},b,{ref:g,popperConfig:Object(r.a)({},m,{modifiers:y.concat(m.modifiers||[])}),transition:O}),(function(e){var t,n=e.props,a=e.arrowProps,c=e.show,l=e.update,u=(e.forceUpdate,e.placement),d=e.state,m=Object(o.a)(e,Ze);!function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(Be.a)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(Be.a)(e))})}(n,a);var b=Object.assign(v.current,{state:d,scheduleUpdate:l,placement:u,outOfBoundaries:(null==d||null==(t=d.modifiersData.hide)?void 0:t.isReferenceHidden)||!1});return"function"==typeof f?f(Object(r.a)({},m,n,{placement:u,show:c},!p&&c&&{className:"show"},{popper:b,arrowProps:a})):i.a.cloneElement(f,Object(r.a)({},m,n,{placement:u,arrowProps:a,popper:b,className:s()(f.props.className,!p&&c&&"show"),style:Object(r.a)({},f.props.style,n.style)}))}))}$e.defaultProps=Ge;t.a=$e},"6xyR":function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("TSYQ"),i=n.n(a),c=n("q1tI"),s=n.n(c),l=n("vUet"),u=n("YdCC"),f=n("U1MP"),p=n("Wzyw"),d=["bsPrefix","className","variant","as"],m=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,c=e.variant,u=e.as,f=void 0===u?"img":u,p=Object(o.a)(e,d),m=Object(l.a)(n,"card-img");return s.a.createElement(f,Object(r.a)({ref:t,className:i()(c?m+"-"+c:m,a)},p))}));m.displayName="CardImg",m.defaultProps={variant:null};var b=m,v=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(f.a)("h5"),g=Object(f.a)("h6"),y=Object(u.a)("card-body"),O=Object(u.a)("card-title",{Component:h}),w=Object(u.a)("card-subtitle",{Component:g}),j=Object(u.a)("card-link",{Component:"a"}),x=Object(u.a)("card-text",{Component:"p"}),E=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),k=Object(u.a)("card-img-overlay"),P=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,u=e.bg,f=e.text,d=e.border,m=e.body,b=e.children,h=e.as,g=void 0===h?"div":h,O=Object(o.a)(e,v),w=Object(l.a)(n,"card"),j=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:w+"-header"}}),[w]);return s.a.createElement(p.a.Provider,{value:j},s.a.createElement(g,Object(r.a)({ref:t},O,{className:i()(a,w,u&&"bg-"+u,f&&"text-"+f,d&&"border-"+d)}),m?s.a.createElement(y,null,b):b))}));P.displayName="Card",P.defaultProps={body:!1},P.Img=b,P.Title=O,P.Subtitle=w,P.Body=y,P.Link=j,P.Text=x,P.Header=E,P.Footer=C,P.ImgOverlay=k;t.a=P},AINe:function(e,t,n){"use strict";var r=n("wx14"),o=n("zLVn"),a=n("TSYQ"),i=n.n(a),c=n("q1tI"),s=n.n(c),l=(n("BO/t"),n("vUet")),u=["bsPrefix","placement","className","style","children","arrowProps","popper","show"],f=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.placement,c=e.className,f=e.style,p=e.children,d=e.arrowProps,m=(e.popper,e.show,Object(o.a)(e,u));n=Object(l.a)(n,"tooltip");var b=((null==a?void 0:a.split("-"))||[])[0];return s.a.createElement("div",Object(r.a)({ref:t,style:f,role:"tooltip","x-placement":b,className:i()(c,n,"bs-tooltip-"+b)},m),s.a.createElement("div",Object(r.a)({className:"arrow"},d)),s.a.createElement("div",{className:n+"-inner"},p))}));f.defaultProps={placement:"right"},f.displayName="Tooltip",t.a=f},AY9D:function(e,t,n){"use strict";var r=n("KQm4"),o=n("Wbzz"),a=n("kCIJ"),i=n("q1tI"),c=n.n(i),s=n("IYni"),l=n("6xyR"),u=n("65eO"),f=n("ma3e"),p=n("M7K5"),d=n("SeyW");var m=e=>{let{name:t,rating:n,speciality:r,contact:o,location:i,time:s,link:m,uid:b,index:v}=e;const h=Object(a.useIntl)();return c.a.createElement(l.a,{style:{width:"24rem"}},c.a.createElement(l.a.Body,null,c.a.createElement(u.a,{pill:!0,variant:"dark",className:"rating ml-2 mb-3 float-right"},c.a.createElement(f.z,{size:"2em"}),c.a.createElement("span",{className:"pr-1"},n&&n)),c.a.createElement(l.a.Title,{className:"d-flex align-items-center"},c.a.createElement(p.a,{img:b}),c.a.createElement("span",null,t.trim().replace(/\*/g,","))),c.a.createElement("hr",null),c.a.createElement(l.a.Subtitle,{className:"d-flex align-items-center text-muted pl-1"},c.a.createElement(f.A,null),c.a.createElement(u.a,{variant:"light",className:"doctor-item-content"},r.trim().replace(/\*/g,","))),c.a.createElement("div",{className:"pl-1"},c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement(f.a,null),c.a.createElement(u.a,{className:"doctor-item-content"},o.split("*").map(e=>c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:"tel:"+e},e)," ",c.a.createElement("br",null))))),!v&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"d-flex align-items-center"},c.a.createElement(f.o,null),c.a.createElement(u.a,{className:"doctor-item-content"},i.trim().replace(/\*/g,","))),c.a.createElement("div",{className:"d-flex align-items-center "},c.a.createElement(f.p,null),c.a.createElement(u.a,{className:"doctor-item-content"},s.trim().replace(/\*/g,","))))),c.a.createElement("br",null),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement(a.Link,{to:"/doctor/"+m+"/"},h.formatMessage({id:"more"})),!v&&c.a.createElement(d.a,{uid:b}))))};t.a=e=>{var t;let{speciality:n,data:i,index:l}=e;const u=Object(o.useStaticQuery)("3145002382"),f=Object(a.useIntl)();return(t=u.all.nodes).push.apply(t,Object(r.a)(u.allCopy.nodes)),i.map((e,t)=>{const r=u.all.nodes.filter(t=>t.uid===e.uid&&t.lang===f.locale)[0];if(void 0===r)return;return c.a.createElement(c.a.Fragment,null,"medicine"===n&&t%2==0&&0!==t?c.a.createElement(s.a,null):null,c.a.createElement(m,{key:t,name:r?r.Name:"",rating:r.Rating,speciality:r.Degree,contact:r.contact1,location:r.loc1,time:r.visitTime1,link:r.fields.slug+"_"+r.uid,uid:r.uid,index:l}))})}},B8pp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("i8i4"),o=n.n(r);function a(e){return e&&"setState"in e?o.a.findDOMNode(e):null!=e?e:null}},"BO/t":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,o,a){var i=r||"<<anonymous>>",c=a||n;if(null==t[n])return new Error("The "+o+" `"+c+"` is required to make `"+i+"` accessible for users of assistive technologies such as screen readers.");for(var s=arguments.length,l=Array(s>5?s-5:0),u=5;u<s;u++)l[u-5]=arguments[u];return e.apply(void 0,[t,n,r,o,a].concat(l))}},e.exports=t.default},KXUJ:function(e,t,n){"use strict";function r(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}n.d(t,"a",(function(){return r}))},M7K5:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("9eSz"),c=n.n(i);t.a=e=>{let{img:t,height:n,width:r}=e;const i=Object(a.useStaticQuery)("674953758");t&&(t=i.allImg.edges.filter(e=>{let{node:n}=e;return n.relativePath.includes("doctor/"+t+"_")}));const s={src:t.length>0?t[0].node.childImageSharp.fixed:i.img.childImageSharp.fixed,height:n||65,width:r||65};return o.a.createElement(c.a,{fixed:s.src,style:{width:s.width+"px",height:s.height+"px",marginRight:"10px"}})}},RjgW:function(e,t,n){"use strict";function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return r}))},SeyW:function(e,t,n){"use strict";n("vDqi"),n("KYPV"),n("Wbzz");var r=n("q1tI"),o=n.n(r),a=n("wx14"),i=n("zLVn"),c=n("dI71"),s=n("RjgW"),l=n("Vhrh"),u=n("B8pp"),f=(n("2W6z"),n("y8DL")),p=n("33TZ"),d=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"],m=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){return this.props.children},t}(o.a.Component);function b(e,t,n){var r=t[0],o=r.currentTarget,a=r.relatedTarget||r.nativeEvent[n];a&&a===o||Object(s.a)(o,a)||e.apply(void 0,t)}function v(e){var t=e.trigger,n=e.overlay,c=e.children,s=e.popperConfig,v=void 0===s?{}:s,h=e.show,g=e.defaultShow,y=void 0!==g&&g,O=e.onToggle,w=e.delay,j=e.placement,x=e.flip,E=void 0===x?j&&-1!==j.indexOf("auto"):x,C=Object(i.a)(e,d),k=Object(r.useRef)(null),P=Object(l.a)(),D=Object(r.useRef)(""),N=Object(f.b)(h,y,O),R=N[0],T=N[1],A=function(e){return e&&"object"==typeof e?e:{show:e,hide:e}}(w),M="function"!=typeof c?o.a.Children.only(c).props:{},S=M.onFocus,L=M.onBlur,W=M.onClick,B=Object(r.useCallback)((function(){return Object(u.a)(k.current)}),[]),I=Object(r.useCallback)((function(){P.clear(),D.current="show",A.show?P.set((function(){"show"===D.current&&T(!0)}),A.show):T(!0)}),[A.show,T,P]),H=Object(r.useCallback)((function(){P.clear(),D.current="hide",A.hide?P.set((function(){"hide"===D.current&&T(!1)}),A.hide):T(!1)}),[A.hide,T,P]),q=Object(r.useCallback)((function(){I();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==S||S.apply(void 0,t)}),[I,S]),z=Object(r.useCallback)((function(){H();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==L||L.apply(void 0,t)}),[H,L]),F=Object(r.useCallback)((function(){T(!R),W&&W.apply(void 0,arguments)}),[W,T,R]),U=Object(r.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];b(I,t,"fromElement")}),[I]),_=Object(r.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];b(H,t,"toElement")}),[H]),V=null==t?[]:[].concat(t),J={};return-1!==V.indexOf("click")&&(J.onClick=F),-1!==V.indexOf("focus")&&(J.onFocus=q,J.onBlur=z),-1!==V.indexOf("hover")&&(J.onMouseOver=U,J.onMouseOut=_),o.a.createElement(o.a.Fragment,null,"function"==typeof c?c(Object(a.a)({},J,{ref:k})):o.a.createElement(m,{ref:k},Object(r.cloneElement)(c,J)),o.a.createElement(p.a,Object(a.a)({},C,{show:R,onHide:H,flip:E,placement:j,popperConfig:v,target:B}),n))}v.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var h=v,g=n("AINe"),y=n("ma3e");t.a=e=>{let{className:t}=e;return o.a.createElement(h,{placement:"top",overlay:o.a.createElement(g.a,null,"Flag as Wrong Information")},o.a.createElement("div",{style:{display:"inline",fontSize:".8rem"},className:t||" text-muted flag p-1"},o.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDslDpr2AZeJAwGjj3c3ye5TbRmujPuk3ttIhSnP5xFTrcBg/viewform"},"( For wrong Info ",o.a.createElement(y.j,{size:36}),")")))}},Vhrh:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("q1tI"),o=n("XcHJ");function a(e){var t,n,o=(t=e,(n=Object(r.useRef)(t)).current=t,n);Object(r.useEffect)((function(){return function(){return o.current()}}),[])}var i=Math.pow(2,31)-1;function c(){var e=Object(o.a)(),t=Object(r.useRef)();return a((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(n(),o<=i?t.current=setTimeout(r,o):function e(t,n,r){var o=r-Date.now();t.current=o<=i?setTimeout(n,o):setTimeout((function(){return e(t,n,r)}),i)}(t,r,Date.now()+o))},clear:n}}),[])}},XcHJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");function o(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}}}]);
//# sourceMappingURL=e04e9f82d24bb3dd9b405c33cab9b91ec288f552-d88d1ca0d42744de7076.js.map