(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{gFwQ:function(e,t,n){"use strict";var r,o=n("q1tI"),a=n.n(o),i=n("YwZP"),c=n("Wbzz"),l=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),s=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return l(t,e),t}(Error);function u(e,t){if(!e)throw new s(t)}function p(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var f=n("TSYQ"),d=n.n(f),h=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),w=function(){return(w=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},b=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function i(e){try{l(r.next(e))}catch(t){a(t)}}function c(e){try{l(r.throw(e))}catch(t){a(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}l((r=r.apply(e,t||[])).next())}))},y=function(e,t){var n,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},v=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},O=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},g=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function j(e,t,n){var r=t.height,o=t.width,a=m(t,["height","width"]),i=w({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},a),c=window.open(e,"",Object.keys(i).map((function(e){return e+"="+i[e]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(e){console.error(e)}}),1e3);return c}var E=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,a=void 0===o?400:o,i=n.windowPosition,c=void 0===i?"windowCenter":i,l=n.windowWidth,s=void 0===l?550:l;j(e,w({height:a,width:s},"windowCenter"===c?O(s,a):g(s,a)),r)},t.handleClick=function(e){return b(t,void 0,void 0,(function(){var t,n,r,o,a,i,c,l,s,u;return y(this,(function(p){switch(p.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,a=t.onClick,i=t.url,c=t.openShareDialogOnClick,l=t.opts,s=o(i,l),r?[2]:(e.preventDefault(),n?(u=n(),v(u)?[4,u]:[3,2]):[3,2]);case 1:p.sent(),p.label=2;case 2:return c&&this.openShareDialog(s),a&&a(e,s),[2]}}))}))},t}return h(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,o=e.disabledStyle,i=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,m(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),p=d()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),f=w(w(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),r&&o);return a.a.createElement("button",w({},u,{"aria-label":u["aria-label"]||c,className:p,onClick:this.handleClick,ref:i,style:f}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),k=function(){return(k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var C=function(e,t,n,r){function i(o,i){var c=n(o),l=k({},o);return Object.keys(c).forEach((function(e){delete l[e]})),a.a.createElement(E,k({},r,l,{forwardedRef:i,networkName:e,networkLink:t,opts:n(o)}))}return i.displayName="ShareButton-"+e,Object(o.forwardRef)(i)};var S=C("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return u(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+p({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),P=function(){return(P=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},x=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function _(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,o=t.iconFillColor,i=t.round,c=t.size,l=x(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return a.a.createElement("svg",P({viewBox:"0 0 64 64",width:c,height:c},l),i?a.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):a.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),a.a.createElement("path",{d:e.path,fill:o}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var M=_({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var N=C("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,a=void 0===o?[]:o,i=t.related,c=void 0===i?[]:i;return u(e,"twitter.url"),u(Array.isArray(a),"twitter.hashtags is not an array"),u(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+p({url:e,text:n,via:r,hashtags:a.length>0?a.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),z=_({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var R=C("email",(function(e,t){var n=t.subject,r=t.body,o=t.separator;return"mailto:"+p({subject:n,body:r?r+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),H=_({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"});var L=C("linkedin",(function(e,t){var n=t.title,r=t.summary,o=t.source;return u(e,"linkedin.url"),"https://linkedin.com/shareArticle"+p({url:e,mini:"true",title:n,summary:r,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),W=_({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var V=C("pinterest",(function(e,t){var n=t.media,r=t.description;return u(e,"pinterest.url"),u(n,"pinterest.media"),"https://pinterest.com/pin/create/button/"+p({url:e,media:n,description:r})}),(function(e){return{media:e.media,description:e.description}}),{windowWidth:1e3,windowHeight:730}),A=_({color:"#cb2128",networkName:"pinterest",path:"M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"}),B=n("wx14"),D=n("zLVn"),I=n("17x9"),T=n.n(I),q=n("i8i4"),U=n.n(q),F=n("7A6N"),J=n("lcWJ"),Q=n("d/mp"),Y=n("RcA9"),G=n("+JL2"),Z=n("dZvc"),X=function(e){var t;return"undefined"==typeof document?null:null==e?Object(Z.a)().body:("function"==typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function K(e,t){var n=Object(o.useState)((function(){return X(e)})),r=n[0],a=n[1];if(!r){var i=X(e);i&&a(i)}return Object(o.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(o.useEffect)((function(){var t=X(e);t!==r&&a(t)}),[e,r]),r}var $=n("QxbT"),ee=a.a.forwardRef((function(e,t){var n=e.flip,r=e.offset,i=e.placement,c=e.containerPadding,l=void 0===c?5:c,s=e.popperConfig,u=void 0===s?{}:s,p=e.transition,f=Object(F.a)(),d=f[0],h=f[1],w=Object(F.a)(),b=w[0],y=w[1],m=Object(J.a)(h,t),v=K(e.container),O=K(e.target),g=Object(o.useState)(!e.show),j=g[0],E=g[1],k=Object(Y.a)(O,d,Object($.a)({placement:i,enableEvents:!!e.show,containerPadding:l||5,flip:n,offset:r,arrowElement:b,popperConfig:u})),C=k.styles,S=k.attributes,P=Object(D.a)(k,["styles","attributes"]);e.show?j&&E(!1):e.transition||j||E(!0);var x=e.show||p&&!j;if(Object(G.a)(d,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!x)return null;var _=e.children(Object(B.a)({},P,{show:!!e.show,props:Object(B.a)({},S.popper,{style:C.popper,ref:m}),arrowProps:Object(B.a)({},S.arrow,{style:C.arrow,ref:y})}));if(p){var M=e.onExit,N=e.onExiting,z=e.onEnter,R=e.onEntering,H=e.onEntered;_=a.a.createElement(p,{in:e.show,appear:!0,onExit:M,onExiting:N,onExited:function(){E(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:z,onEntering:R,onEntered:H},_)}return v?U.a.createPortal(_,v):null}));ee.displayName="Overlay",ee.propTypes={show:T.a.bool,placement:T.a.oneOf(Q.h),target:T.a.any,container:T.a.any,flip:T.a.bool,children:T.a.func.isRequired,containerPadding:T.a.number,popperConfig:T.a.object,rootClose:T.a.bool,rootCloseEvent:T.a.oneOf(["click","mousedown"]),rootCloseDisabled:T.a.bool,onHide:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o;return e.rootClose?(o=T.a.func).isRequired.apply(o,[e].concat(n)):T.a.func.apply(T.a,[e].concat(n))},transition:T.a.elementType,onEnter:T.a.func,onEntering:T.a.func,onEntered:T.a.func,onExit:T.a.func,onExiting:T.a.func,onExited:T.a.func};var te=ee,ne=n("B8pp"),re=n("VwLC"),oe=n("7xGa"),ae=["children","transition","popperConfig"],ie=["props","arrowProps","show","update","forceUpdate","placement","state"],ce={transition:oe.a,rootClose:!1,show:!1,placement:"top"};function le(e){var t=e.children,n=e.transition,r=e.popperConfig,i=void 0===r?{}:r,c=Object(D.a)(e,ae),l=Object(o.useRef)({}),s=Object(re.a)(),u=s[0],p=s[1],f=!0===n?oe.a:n||null;return a.a.createElement(te,Object(B.a)({},c,{ref:u,popperConfig:Object(B.a)({},i,{modifiers:p.concat(i.modifiers||[])}),transition:f}),(function(e){var r,o=e.props,i=e.arrowProps,c=e.show,s=e.update,u=(e.forceUpdate,e.placement),p=e.state,f=Object(D.a)(e,ie);!function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(ne.a)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(ne.a)(e))})}(o,i);var h=Object.assign(l.current,{state:p,scheduleUpdate:s,placement:u,outOfBoundaries:(null==p||null==(r=p.modifiersData.hide)?void 0:r.isReferenceHidden)||!1});return"function"==typeof t?t(Object(B.a)({},f,o,{placement:u,show:c},!n&&c&&{className:"show"},{popper:h,arrowProps:i})):a.a.cloneElement(t,Object(B.a)({},f,o,{placement:u,arrowProps:i,popper:h,className:d()(t.props.className,!n&&c&&"show"),style:Object(B.a)({},t.props.style,o.style)}))}))}le.defaultProps=ce;var se=le,ue=(n("BO/t"),n("vUet")),pe=["bsPrefix","placement","className","style","children","arrowProps","popper","show"],fe=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.placement,o=e.className,i=e.style,c=e.children,l=e.arrowProps,s=(e.popper,e.show,Object(D.a)(e,pe));n=Object(ue.a)(n,"tooltip");var u=((null==r?void 0:r.split("-"))||[])[0];return a.a.createElement("div",Object(B.a)({ref:t,style:i,role:"tooltip","x-placement":u,className:d()(o,n,"bs-tooltip-"+u)},s),a.a.createElement("div",Object(B.a)({className:"arrow"},l)),a.a.createElement("div",{className:n+"-inner"},c))}));fe.defaultProps={placement:"right"},fe.displayName="Tooltip";var de=fe,he=n("kCIJ");t.a=()=>{const{href:e}=Object(i.useLocation)(),t=(Object(he.useIntl)(),Object(c.useStaticQuery)("675770911")),{0:n,1:r}=Object(o.useState)(!1),l=Object(o.useRef)(null),{0:s,1:u}=Object(o.useState)(!1),p=Object(o.useRef)(null),{0:f,1:d}=Object(o.useState)(!1),h=Object(o.useRef)(null),{0:w,1:b}=Object(o.useState)(!1),y=Object(o.useRef)(null),{0:m,1:v}=Object(o.useState)(!1),O=Object(o.useRef)(null),g=t.img.childImageSharp.fluid.src;return a.a.createElement("div",{className:"share text-center"},a.a.createElement(S,{url:e,quote:t.site.siteMetadata.description,hashtag:t.site.siteMetadata.title,ref:l,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1)},a.a.createElement(M,{size:36,round:!0})),a.a.createElement(se,{target:l.current,show:n,placement:"top"},e=>a.a.createElement(de,e,"Share On Facebook")),a.a.createElement(N,{url:e,title:t.site.siteMetadata.title,hashtag:t.site.siteMetadata.title,ref:p,onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1)},a.a.createElement(z,{size:36,round:!0}),a.a.createElement(se,{target:p.current,show:s,placement:"top"},e=>a.a.createElement(de,e,"Share On Twitter"))),a.a.createElement(R,{url:e,title:t.site.siteMetadata.title,body:"This is the best website for finding doctors in rajshahi. please check this out",ref:h,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1)},a.a.createElement(H,{size:36,round:!0}),a.a.createElement(se,{target:h.current,show:f,placement:"top"},e=>a.a.createElement(de,e,"Share By Email"))),a.a.createElement(L,{url:e,title:t.site.siteMetadata.title,description:t.site.siteMetadata.description,source:e,ref:y,onMouseEnter:()=>b(!0),onMouseLeave:()=>b(!1)},a.a.createElement(W,{size:36,round:!0}),a.a.createElement(se,{target:y.current,show:w,placement:"top"},e=>a.a.createElement(de,e,"Share On LinkedIn"))),a.a.createElement(V,{url:e,media:g,description:t.site.siteMetadata.description,ref:O,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1)},a.a.createElement(A,{size:36,round:!0}),a.a.createElement(se,{target:O.current,show:m,placement:"top"},e=>a.a.createElement(de,e,"Share On Pinterest"))))}}}]);
//# sourceMappingURL=a800db1a5fb7628b6625364673cd78763b71b056-b0ff77d05ff26b89cc7e.js.map