(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),r=a("TSYQ"),s=a.n(r),o=a("q1tI"),c=a.n(o),l=a("vUet"),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.noGutters,m=e.as,f=void 0===m?"div":m,p=Object(i.a)(e,u),v=Object(l.a)(a,"row"),E=v+"-cols",b=[];return d.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&b.push(""+E+n+"-"+t)})),c.a.createElement(f,Object(n.a)({ref:t},p,{className:s.a.apply(void 0,[r,v,o&&"no-gutters"].concat(b))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},t.a=m},"65eO":function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),r=a("TSYQ"),s=a.n(r),o=a("q1tI"),c=a.n(o),l=a("vUet"),u=["bsPrefix","variant","pill","className","as"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.variant,o=e.pill,d=e.className,m=e.as,f=void 0===m?"span":m,p=Object(i.a)(e,u),v=Object(l.a)(a,"badge");return c.a.createElement(f,Object(n.a)({ref:t},p,{className:s()(d,v,o&&v+"-pill",r&&v+"-"+r)}))}));d.displayName="Badge",d.defaultProps={pill:!1},t.a=d},"7vrA":function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),r=a("TSYQ"),s=a.n(r),o=a("q1tI"),c=a.n(o),l=a("vUet"),u=["bsPrefix","fluid","as","className"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.fluid,o=e.as,d=void 0===o?"div":o,m=e.className,f=Object(i.a)(e,u),p=Object(l.a)(a,"container"),v="string"==typeof r?"-"+r:"-fluid";return c.a.createElement(d,Object(n.a)({ref:t},f,{className:s()(m,r?""+p+v:p)}))}));d.displayName="Container",d.defaultProps={fluid:!1},t.a=d},"7xGa":function(e,t,a){"use strict";var n,i=a("wx14"),r=a("zLVn"),s=a("TSYQ"),o=a.n(s),c=a("q1tI"),l=a.n(c),u=a("dRu9"),d=a("wsUu"),m=a("z+q/"),f=["className","children"],p=((n={})[u.b]="show",n[u.a]="show",n),v=l.a.forwardRef((function(e,t){var a=e.className,n=e.children,s=Object(r.a)(e,f),v=Object(c.useCallback)((function(e){Object(m.a)(e),s.onEnter&&s.onEnter(e)}),[s]);return l.a.createElement(u.c,Object(i.a)({ref:t,addEndListener:d.a},s,{onEnter:v}),(function(e,t){return l.a.cloneElement(n,Object(i.a)({},t,{className:o()("fade",a,n.props.className,p[e])}))}))}));v.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},v.displayName="Fade",t.a=v},Ftda:function(e,t,a){"use strict";a.d(t,"a",(function(){return q}));var n=a("Wbzz"),i=a("q1tI"),r=a.n(i),s=a("wx14"),o=a("zLVn"),c=a("TSYQ"),l=a.n(c),u=a("y8DL"),d=a("ZCiN"),m=a("vUet"),f=a("7xGa"),p=["label","onClick","className"],v=r.a.forwardRef((function(e,t){var a=e.label,n=e.onClick,i=e.className,c=Object(o.a)(e,p);return r.a.createElement("button",Object(s.a)({ref:t,type:"button",className:l()("close",i),onClick:n},c),r.a.createElement("span",{"aria-hidden":"true"},"×"),r.a.createElement("span",{className:"sr-only"},a))}));v.displayName="CloseButton",v.defaultProps={label:"Close"};var E=v,b=a("U1MP"),h=a("YdCC"),x=a("dbZe"),N=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],O=Object(b.a)("h4");O.displayName="DivStyledAsH4";var g=Object(h.a)("alert-heading",{Component:O}),j=Object(h.a)("alert-link",{Component:x.a}),y={show:!0,transition:f.a,closeLabel:"Close alert"},C=r.a.forwardRef((function(e,t){var a=Object(u.a)(e,{show:"onClose"}),n=a.bsPrefix,i=a.show,c=a.closeLabel,p=a.className,v=a.children,b=a.variant,h=a.onClose,x=a.dismissible,O=a.transition,g=Object(o.a)(a,N),j=Object(m.a)(n,"alert"),y=Object(d.a)((function(e){h&&h(!1,e)})),C=!0===O?f.a:O,w=r.a.createElement("div",Object(s.a)({role:"alert"},C?void 0:g,{ref:t,className:l()(p,j,b&&j+"-"+b,x&&j+"-dismissible")}),x&&r.a.createElement(E,{onClick:y,label:c}),v);return C?r.a.createElement(C,Object(s.a)({unmountOnExit:!0},g,{ref:void 0,in:i}),w):i?w:null}));C.displayName="Alert",C.defaultProps=y,C.Link=j,C.Heading=g;var w=C,S=a("65eO"),k=(a("2W6z"),a("rQNl")),P=a("VWqr"),L=["bsPrefix","active","disabled","className","variant","action","as","onClick"],T={variant:void 0,active:!1,disabled:!1},I=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.active,c=e.disabled,u=e.className,d=e.variant,f=e.action,p=e.as,v=e.onClick,E=Object(o.a)(e,L);a=Object(m.a)(a,"list-group-item");var b=Object(i.useCallback)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();v&&v(e)}),[c,v]);return c&&void 0===E.tabIndex&&(E.tabIndex=-1,E["aria-disabled"]=!0),r.a.createElement(P.a,Object(s.a)({ref:t},E,{as:p||(f?E.href?"a":"button":"div"),onClick:b,className:l()(u,a,n&&"active",c&&"disabled",d&&a+"-"+d,f&&a+"-action")}))}));I.defaultProps=T,I.displayName="ListGroupItem";var z=I,R=["className","bsPrefix","variant","horizontal","as"],D={variant:void 0,horizontal:void 0},M=r.a.forwardRef((function(e,t){var a,n=Object(u.a)(e,{activeKey:"onSelect"}),i=n.className,c=n.bsPrefix,d=n.variant,f=n.horizontal,p=n.as,v=void 0===p?"div":p,E=Object(o.a)(n,R),b=Object(m.a)(c,"list-group");return a=f?!0===f?"horizontal":"horizontal-"+f:null,r.a.createElement(k.a,Object(s.a)({ref:t},E,{as:v,className:l()(i,b,d&&b+"-"+d,a&&b+"-"+a)}))}));M.defaultProps=D,M.displayName="ListGroup",M.Item=z;var U=M,V=a("fwk/");function q(e){var t=e.snippetVeiw;return r.a.createElement("div",{className:"p-3"},t?r.a.createElement(w,{variant:"danger"},r.a.createElement("p",{className:"text-center"},"Emergency Numbers"),r.a.createElement("hr",null),r.a.createElement("div",{style:{overflow:"auto"},className:"text-center"},V.map((function(e,t){if(t<2)return e.contacts.map((function(e,t){return r.a.createElement(S.a,{as:"span",variant:"light",className:"mr-2"},e.name+": "+e.phone+" ")}))}))),r.a.createElement("hr",null),r.a.createElement(n.Link,{to:"/emergency"},"More...")):r.a.createElement(U,{as:"ul"},r.a.createElement(z,{as:"li",variant:"danger",className:"text-center",style:{fontSize:"1.8rem"}},"Emergency Numbers"),V.map((function(e,t){return r.a.createElement(z,{as:"li",variant:"primary",className:""},r.a.createElement("p",{className:"lead"},e.service),r.a.createElement(U,{as:"ul"},e.contacts.map((function(e,t){return r.a.createElement(z,{as:"li",variant:"success",className:""},e.name+": "," ",r.a.createElement(S.a,{variant:"danger"},e.phone))}))))}))))}},JI6e:function(e,t,a){"use strict";var n=a("wx14"),i=a("zLVn"),r=a("TSYQ"),s=a.n(r),o=a("q1tI"),c=a.n(o),l=a("vUet"),u=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,m=void 0===o?"div":o,f=Object(i.a)(e,u),p=Object(l.a)(a,"col"),v=[],E=[];return d.forEach((function(e){var t,a,n,i=f[e];if(delete f[e],"object"==typeof i&&null!=i){var r=i.span;t=void 0===r||r,a=i.offset,n=i.order}else t=i;var s="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+p+s:""+p+s+"-"+t),null!=n&&E.push("order"+s+"-"+n),null!=a&&E.push("offset"+s+"-"+a)})),v.length||v.push(p),c.a.createElement(m,Object(n.a)({},f,{ref:t,className:s.a.apply(void 0,[r].concat(v,E))}))}));m.displayName="Col",t.a=m},Mlj8:function(e,t,a){"use strict";a.r(t);var n=a("Wbzz"),i=a("9eSz"),r=a.n(i),s=a("kCIJ"),o=a("q1tI"),c=a.n(o),l=a("7vrA"),u=a("3Z9Z"),d=a("JI6e"),m=a("Ftda"),f=a("Bl7J"),p=a("vrFN");t.default=function(){Object(s.useIntl)();var e=Object(n.useStaticQuery)("2284621786");return c.a.createElement(f.a,null,c.a.createElement(p.a,{title:"All Emergency Numbers",description:"all emergency numbers including ambulence of fireservice , public and private hospitals and clinic",useDefault:!1}),c.a.createElement(l.a,{fluid:!0,className:"p-0"},c.a.createElement("div",{className:"hero non-landing"},c.a.createElement(u.a,{noGutters:!0},c.a.createElement(d.a,{md:6,className:""},c.a.createElement("div",{className:"text-center"},c.a.createElement("h1",{className:"text-uppercase mt-5"},"All Emergency Numbers"))),c.a.createElement(d.a,{md:6},c.a.createElement(r.a,{fixed:e.img.childImageSharp.fixed})))),c.a.createElement("hr",{className:"w-75"}),c.a.createElement("div",{className:"main"},c.a.createElement(m.a,null))))}},dRu9:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return m}));var n=a("zLVn"),i=a("dI71"),r=a("q1tI"),s=a.n(r),o=a("i8i4"),c=a.n(o),l=!1,u=s.a.createContext(null),d="entering",m="entered",f=function(e){function t(t,a){var n;n=e.call(this,t,a)||this;var i,r=a&&!a.isMounting?t.enter:t.appear;return n.appearStatus=null,t.in?r?(i="exited",n.appearStatus=d):i=m:i=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",n.state={status:i},n.nextCallback=null,n}Object(i.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var a=t.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var a=this.state.status;this.props.in?a!==d&&a!==m&&(t=d):a!==d&&a!==m||(t="exiting")}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e,t,a,n=this.props.timeout;return e=t=a=n,null!=n&&"number"!=typeof n&&(e=n.exit,t=n.enter,a=void 0!==n.appear?n.appear:t),{exit:e,enter:t,appear:a}},a.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),t===d?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},a.performEnter=function(e){var t=this,a=this.props.enter,n=this.context?this.context.isMounting:e,i=this.props.nodeRef?[n]:[c.a.findDOMNode(this),n],r=i[0],s=i[1],o=this.getTimeouts(),u=n?o.appear:o.enter;!e&&!a||l?this.safeSetState({status:m},(function(){t.props.onEntered(r)})):(this.props.onEnter(r,s),this.safeSetState({status:d},(function(){t.props.onEntering(r,s),t.onTransitionEnd(u,(function(){t.safeSetState({status:m},(function(){t.props.onEntered(r,s)}))}))})))},a.performExit=function(){var e=this,t=this.props.exit,a=this.getTimeouts(),n=this.props.nodeRef?void 0:c.a.findDOMNode(this);t&&!l?(this.props.onExit(n),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(n),e.onTransitionEnd(a.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(n)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(n)}))},a.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,a=!0;return this.nextCallback=function(n){a&&(a=!1,t.nextCallback=null,e(n))},this.nextCallback.cancel=function(){a=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var a=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),n=null==e&&!this.props.addEndListener;if(a&&!n){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[a,this.nextCallback],r=i[0],s=i[1];this.props.addEndListener(r,s)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},a.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,a=t.children,i=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(n.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.a.createElement(u.Provider,{value:null},"function"==typeof a?a(e,i):s.a.cloneElement(s.a.Children.only(a),i))},t}(s.a.Component);function p(){}f.contextType=u,f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:p,onEntering:p,onEntered:p,onExit:p,onExiting:p,onExited:p},f.UNMOUNTED="unmounted",f.EXITED="exited",f.ENTERING=d,f.ENTERED=m,f.EXITING="exiting";t.c=f},"fwk/":function(e){e.exports=JSON.parse('[{"service":"National Emergency","contacts":[{"name":"National Emergency Number","phone":"999"}]},{"service":"Fire Service","contacts":[{"name":"Rajshahi Fire Station with Ambulence","phone":"0721-774224, 01730-336655"},{"name":"University Fire Station","phone":"0721-750270, 01730-002508"}]},{"service":"Private Medicals","contacts":[{"name":"Barind Medical College & Hospital","phone":"01839186666"},{"name":"Islami Bank Hospital (Laxmipur)","phone":"01786-908008, 0721-770965"},{"name":"Medipath Diagnostic","phone":"01712-685297"},{"name":"Zamzam Hospitals","phone":"01711-192600"},{"name":"Amana Hospital Limited","phone":"01705-403621"}]}]')},wsUu:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("dZvc");function i(e,t){return function(e){var t=Object(n.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var r=/([A-Z])/g;var s=/^ms-/;function o(e){return function(e){return e.replace(r,"-$1").toLowerCase()}(e).replace(s,"-ms-")}var c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var l=function(e,t){var a="",n="";if("string"==typeof t)return e.style.getPropertyValue(o(t))||i(e).getPropertyValue(o(t));Object.keys(t).forEach((function(i){var r=t[i];r||0===r?!function(e){return!(!e||!c.test(e))}(i)?a+=o(i)+": "+r+";":n+=i+"("+r+") ":e.style.removeProperty(o(i))})),n&&(a+="transform: "+n+";"),e.style.cssText+=";"+a},u=a("GEtZ");function d(e,t,a){void 0===a&&(a=5);var n=!1,i=setTimeout((function(){n||function(e,t,a,n){if(void 0===a&&(a=!1),void 0===n&&(n=!0),e){var i=document.createEvent("HTMLEvents");i.initEvent(t,a,n),e.dispatchEvent(i)}}(e,"transitionend",!0)}),t+a),r=Object(u.a)(e,"transitionend",(function(){n=!0}),{once:!0});return function(){clearTimeout(i),r()}}function m(e,t,a,n){var i,r;null==a&&(i=l(e,"transitionDuration")||"",r=-1===i.indexOf("ms")?1e3:1,a=parseFloat(i)*r||0);var s=d(e,a,n),o=Object(u.a)(e,"transitionend",t);return function(){s(),o()}}function f(e,t){var a=l(e,t)||"",n=-1===a.indexOf("ms")?1e3:1;return parseFloat(a)*n}function p(e,t){var a=f(e,"transitionDuration"),n=f(e,"transitionDelay"),i=m(e,(function(a){a.target===e&&(i(),t(a))}),a+n)}},"z+q/":function(e,t,a){"use strict";function n(e){e.offsetHeight}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-emergency-js-9a411b0cab78048ebead.js.map