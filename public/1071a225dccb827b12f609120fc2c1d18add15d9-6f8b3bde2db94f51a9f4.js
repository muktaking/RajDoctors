(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"7dAM":function(t,e,n){var r=n("E9LY"),o=n("m/L8");t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},"8+s/":function(t,e,n){"use strict";var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=t(s.map((function(t){return t.props}))),f.canUseDOM?e(u):n&&(u=n(u))}var f=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},E9LY:function(t,e,n){var r=n("4zBA"),o=n("0Dky"),i=n("Fib7"),a=n("Gi26"),c=n("g6v/"),u=n("Xnc8").CONFIGURABLE,s=n("iSVu"),l=n("afO8"),f=l.enforce,p=l.get,d=String,y=Object.defineProperty,h=r("".slice),m=r("".replace),g=r([].join),b=c&&!o((function(){return 8!==y((function(){}),"length",{value:8}).length})),v=String(String).split("String"),T=t.exports=function(t,e,n){"Symbol("===h(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!a(t,"name")||u&&t.name!==e)&&(c?y(t,"name",{value:e,configurable:!0}):t.name=e),b&&n&&a(n,"arity")&&t.length!==n.arity&&y(t,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?c&&y(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=f(t);return a(r,"source")||(r.source=g(v,"string"==typeof e?e:"")),t};Function.prototype.toString=T((function(){return i(this)&&p(this).source||s(this)}),"toString")},U3f4:function(t,e,n){var r=n("2oRo"),o=n("g6v/"),i=n("7dAM"),a=n("rW0t"),c=n("0Dky"),u=r.RegExp,s=u.prototype;o&&c((function(){var t=!0;try{u(".","d")}catch(c){t=!1}var e={},n="",r=t?"dgimsy":"gimsy",o=function(t,r){Object.defineProperty(e,t,{get:function(){return n+=r,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(s,"flags").get.call(e)!==r||n!==r}))&&i(s,"flags",{configurable:!0,get:a})},XGwC:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},Xnc8:function(t,e,n){var r=n("g6v/"),o=n("Gi26"),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,s=c&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:s}},ZhWT:function(t,e,n){n("U3f4");var r="undefined"!=typeof Element,o="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){if(e.constructor!==n.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(!t(e[u],n[u]))return!1;return!0}if(o&&e instanceof Map&&n instanceof Map){if(e.size!==n.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!t(u.value[1],n.get(u.value[0])))return!1;return!0}if(i&&e instanceof Set&&n instanceof Set){if(e.size!==n.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!n.has(u.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(n)){if((c=e.length)!=n.length)return!1;for(u=c;0!=u--;)if(e[u]!==n[u])return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(n).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(n,s[u]))return!1;if(r&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!t(e[s[u]],n[s[u]]))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},afO8:function(t,e,n){var r,o,i,a=n("zc4i"),c=n("2oRo"),u=n("hh1v"),s=n("kRJp"),l=n("Gi26"),f=n("xs3f"),p=n("93I0"),d=n("0BK2"),y=c.TypeError,h=c.WeakMap;if(a||f.state){var m=f.state||(f.state=new h);m.get=m.get,m.has=m.has,m.set=m.set,r=function(t,e){if(m.has(t))throw y("Object already initialized");return e.facade=t,m.set(t,e),e},o=function(t){return m.get(t)||{}},i=function(t){return m.has(t)}}else{var g=p("state");d[g]=!0,r=function(t,e){if(l(t,g))throw y("Object already initialized");return e.facade=t,s(t,g,e),e},o=function(t){return l(t,g)?t[g]:{}},i=function(t){return l(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return n}}}},iSVu:function(t,e,n){var r=n("4zBA"),o=n("Fib7"),i=n("xs3f"),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},kRJp:function(t,e,n){var r=n("g6v/"),o=n("m/L8"),i=n("XGwC");t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},qhky:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ht}));var r,o,i,a,c=n("17x9"),u=n.n(c),s=n("8+s/"),l=n.n(s),f=n("ZhWT"),p=n.n(f),d=n("q1tI"),y=n.n(d),h=n("YVoz"),m=n.n(h),g="bodyAttributes",b="htmlAttributes",v="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(t){return T[t]})),"charset"),O="cssText",A="href",S="http-equiv",C="innerHTML",E="itemprop",j="name",k="property",P="rel",I="src",x="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",R="defer",N="encodeSpecialCharacters",D="onChangeClientState",F="titleTemplate",q=Object.keys(L).reduce((function(t,e){return t[L[e]]=e,t}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},H=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},W=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},G=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(t){var e=$(t,T.TITLE),n=$(t,F);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=$(t,M);return e||r||void 0},V=function(t){return $(t,D)||function(){}},J=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return U({},t,e)}),{})},X=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},Z=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+_(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===P&&"canonical"===t[n].toLowerCase()||u===P&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==C&&c!==O&&c!==E||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=m()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},$=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},Q=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){Q(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:t.requestAnimationFrame||Q,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:t.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,l=t.styleTags,f=t.title,p=t.titleAttributes;ut(T.BODY,r),ut(T.HTML,o),ct(f,p);var d={baseTag:st(T.BASE,n),linkTags:st(T.LINK,i),metaTags:st(T.META,a),noscriptTags:st(T.NOSCRIPT,c),scriptTags:st(T.SCRIPT,s),styleTags:st(T.STYLE,l)},y={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(y[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,y,h)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(T.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(t+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===C)n.innerHTML=e.innerHTML;else if(r===O)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},lt=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[L[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})["data-react-helmet"]=!0,o=ft(n,r),[y.a.createElement(T.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=lt(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+G(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+G(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case g:case b:return{toComponent:function(){return ft(e)},toString:function(){return lt(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(e).forEach((function(t){var n=L[t]||t;if(n===C||n===O){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),y.a.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===C||t===O)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+G(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,l=t.title,f=void 0===l?"":l,p=t.titleAttributes;return{base:pt(T.BASE,e,r),bodyAttributes:pt(g,n,r),htmlAttributes:pt(b,o,r),link:pt(T.LINK,i,r),meta:pt(T.META,a,r),noscript:pt(T.NOSCRIPT,c,r),script:pt(T.SCRIPT,u,r),style:pt(T.STYLE,s,r),title:pt(T.TITLE,{title:f,titleAttributes:p},r)}},yt=l()((function(t){return{baseTag:X([A,x],t),bodyAttributes:J(g,t),defer:$(t,R),encode:$(t,N),htmlAttributes:J(b,t),linkTags:Z(T.LINK,[P,A],t),metaTags:Z(T.META,[j,w,S,k,E],t),noscriptTags:Z(T.NOSCRIPT,[C],t),onChangeClientState:V(t),scriptTags:Z(T.SCRIPT,[I,C],t),styleTags:Z(T.STYLE,[O],t),title:K(t),titleAttributes:J(v,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),ht=(o=yt,a=i=function(t){function e(){return z(this,e),W(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!p()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return U({},r,((e={})[n.type]=[].concat(r[n.type]||[],[U({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case T.TITLE:return U({},o,((e={})[r.type]=a,e.titleAttributes=U({},i),e));case T.BODY:return U({},o,{bodyAttributes:U({},i)});case T.HTML:return U({},o,{htmlAttributes:U({},i)})}return U({},o,((n={})[r.type]=U({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=U({},e);return Object.keys(t).forEach((function(e){var r;n=U({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return y.a.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[q[n]||n]=t[n],e}),e)}(H(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=H(t,["children"]),r=U({},n);return e&&(r=this.mapChildrenToProps(e,r)),y.a.createElement(o,r)},Y(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(y.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);ht.renderStatic=ht.rewind}).call(this,n("yLpj"))},rW0t:function(t,e,n){"use strict";var r=n("glrk");t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},vrFN:function(t,e,n){"use strict";var r=n("YwZP"),o=n("Wbzz"),i=n("kCIJ"),a=n("q1tI"),c=n.n(a),u=n("qhky");function s(t){var e;let{description:n,useDefault:a,meta:s,title:l,ogImg:f,schema:p}=t;const d=Object(i.useIntl)(),y=Object(r.useLocation)(),{site:h,file:m}=Object(o.useStaticQuery)("1876832282"),g="/"===y.pathname?h.siteMetadata.url:h.siteMetadata.url+y.pathname,b=d.locale,v={title:l||d.formatMessage({id:"siteMetaData.title"}),description:n||d.formatMessage({id:"siteMetaData.description"}),ogImg:f||h.siteMetadata.url+m.publicURL};return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{htmlAttributes:{lang:b},title:v.title,titleTemplate:a?"%s | "+d.formatMessage({id:"siteMetaData.tagLine.Dhaka"}):null,meta:[{name:"description",content:v.description},{property:"og:title",content:v.title},{property:"og:description",content:v.description},{property:"og:type",content:"website"},{property:"og:url",content:g},{property:"og:image",content:v.ogImg},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(e=h.siteMetadata)||void 0===e?void 0:e.author)||""},{name:"twitter:title",content:v.title},{name:"twitter:description",content:v.description}].concat(s)}),c.a.createElement(u.a,null,c.a.createElement("link",{rel:"alternate",href:g,hrefLang:d.locale}),c.a.createElement("link",{rel:"canonical",href:g}),c.a.createElement("meta",{"http-equiv":"content-language",content:d.locale}),c.a.createElement("script",{type:"application/ld+json"},p)))}s.defaultProps={title:null,lang:"en",meta:[],description:"",useDefault:!0,schema:""},e.a=s},zc4i:function(t,e,n){var r=n("2oRo"),o=n("Fib7"),i=r.WeakMap;t.exports=o(i)&&/native code/.test(String(i))}}]);
//# sourceMappingURL=1071a225dccb827b12f609120fc2c1d18add15d9-6f8b3bde2db94f51a9f4.js.map