(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3Z9Z":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),i=t.n(s),o=t("vUet"),m=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.noGutters,d=e.as,f=void 0===d?"div":d,v=Object(r.a)(e,m),b=Object(o.a)(t,"row"),p=b+"-cols",N=[];return u.forEach((function(e){var a,t=v[e];delete v[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&N.push(""+p+n+"-"+a)})),i.a.createElement(f,Object(n.a)({ref:a},v,{className:c.a.apply(void 0,[l,b,s&&"no-gutters"].concat(N))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},"7vrA":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),i=t.n(s),o=t("vUet"),m=["bsPrefix","fluid","as","className"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.fluid,s=e.as,u=void 0===s?"div":s,d=e.className,f=Object(r.a)(e,m),v=Object(o.a)(t,"container"),b="string"==typeof l?"-"+l:"-fluid";return i.a.createElement(u,Object(n.a)({ref:a},f,{className:c()(d,l?""+v+b:v)}))}));u.displayName="Container",u.defaultProps={fluid:!1},a.a=u},Ftda:function(e,a,t){"use strict";t.d(a,"a",(function(){return Q}));var n=t("Wbzz"),r=t("q1tI"),l=t.n(r),c=t("wx14"),s=t("zLVn"),i=t("TSYQ"),o=t.n(i),m=t("y8DL"),u=t("ZCiN"),d=t("vUet"),f=t("7xGa"),v=["label","onClick","className"],b=l.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,r=e.className,i=Object(s.a)(e,v);return l.a.createElement("button",Object(c.a)({ref:a,type:"button",className:o()("close",r),onClick:n},i),l.a.createElement("span",{"aria-hidden":"true"},"×"),l.a.createElement("span",{className:"sr-only"},t))}));b.displayName="CloseButton",b.defaultProps={label:"Close"};var p=b,N=t("U1MP"),E=t("YdCC"),h=t("dbZe"),j=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],y=Object(N.a)("h4");y.displayName="DivStyledAsH4";var O=Object(E.a)("alert-heading",{Component:y}),w=Object(E.a)("alert-link",{Component:h.a}),x={show:!0,transition:f.a,closeLabel:"Close alert"},g=l.a.forwardRef((function(e,a){var t=Object(m.a)(e,{show:"onClose"}),n=t.bsPrefix,r=t.show,i=t.closeLabel,v=t.className,b=t.children,N=t.variant,E=t.onClose,h=t.dismissible,y=t.transition,O=Object(s.a)(t,j),w=Object(d.a)(n,"alert"),x=Object(u.a)((function(e){E&&E(!1,e)})),g=!0===y?f.a:y,C=l.a.createElement("div",Object(c.a)({role:"alert"},g?void 0:O,{ref:a,className:o()(v,w,N&&w+"-"+N,h&&w+"-dismissible")}),h&&l.a.createElement(p,{onClick:x,label:i}),b);return g?l.a.createElement(g,Object(c.a)({unmountOnExit:!0},O,{ref:void 0,in:r}),C):r?C:null}));g.displayName="Alert",g.defaultProps=x,g.Link=w,g.Heading=O;var C=g,P=t("65eO"),k=(t("2W6z"),t("Zeqi")),I=t("YGJp"),S=t("lcWJ"),z=t("F9IU"),L=t("ILyh"),R=l.a.createContext(null),A=["as","onSelect","activeKey","role","onKeyDown"],D=function(){},q=l.a.forwardRef((function(e,a){var t,n,i=e.as,o=void 0===i?"ul":i,m=e.onSelect,u=e.activeKey,d=e.role,f=e.onKeyDown,v=Object(s.a)(e,A),b=Object(I.a)(),p=Object(r.useRef)(!1),N=Object(r.useContext)(L.a),E=Object(r.useContext)(R);E&&(d=d||"tablist",u=E.activeKey,t=E.getControlledId,n=E.getControllerId);var h=Object(r.useRef)(null),j=function(e){var a=h.current;if(!a)return null;var t=Object(k.a)(a,"[data-rb-event-key]:not(.disabled)"),n=a.querySelector(".active");if(!n)return null;var r=t.indexOf(n);if(-1===r)return null;var l=r+e;return l>=t.length&&(l=0),l<0&&(l=t.length-1),t[l]},y=function(e,a){null!=e&&(m&&m(e,a),N&&N(e,a))};Object(r.useEffect)((function(){if(h.current&&p.current){var e=h.current.querySelector("[data-rb-event-key].active");e&&e.focus()}p.current=!1}));var O=Object(S.a)(a,h);return l.a.createElement(L.a.Provider,{value:y},l.a.createElement(z.a.Provider,{value:{role:d,activeKey:Object(L.b)(u),getControlledId:t||D,getControllerId:n||D}},l.a.createElement(o,Object(c.a)({},v,{onKeyDown:function(e){var a;switch(f&&f(e),e.key){case"ArrowLeft":case"ArrowUp":a=j(-1);break;case"ArrowRight":case"ArrowDown":a=j(1);break;default:return}a&&(e.preventDefault(),y(a.dataset.rbEventKey,e),p.current=!0,b())},ref:O,role:d}))))})),J=t("VWqr"),K=["bsPrefix","active","disabled","className","variant","action","as","onClick"],G={variant:void 0,active:!1,disabled:!1},U=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,i=e.disabled,m=e.className,u=e.variant,f=e.action,v=e.as,b=e.onClick,p=Object(s.a)(e,K);t=Object(d.a)(t,"list-group-item");var N=Object(r.useCallback)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();b&&b(e)}),[i,b]);return i&&void 0===p.tabIndex&&(p.tabIndex=-1,p["aria-disabled"]=!0),l.a.createElement(J.a,Object(c.a)({ref:a},p,{as:v||(f?p.href?"a":"button":"div"),onClick:N,className:o()(m,t,n&&"active",i&&"disabled",u&&t+"-"+u,f&&t+"-action")}))}));U.defaultProps=G,U.displayName="ListGroupItem";var Z=U,F=["className","bsPrefix","variant","horizontal","as"],H={variant:void 0,horizontal:void 0},M=l.a.forwardRef((function(e,a){var t,n=Object(m.a)(e,{activeKey:"onSelect"}),r=n.className,i=n.bsPrefix,u=n.variant,f=n.horizontal,v=n.as,b=void 0===v?"div":v,p=Object(s.a)(n,F),N=Object(d.a)(i,"list-group");return t=f?!0===f?"horizontal":"horizontal-"+f:null,l.a.createElement(q,Object(c.a)({ref:a},p,{as:b,className:o()(r,N,u&&N+"-"+u,t&&N+"-"+t)}))}));M.defaultProps=H,M.displayName="ListGroup",M.Item=Z;var V=M,Y=t("fwk/");function Q(e){let{snippetVeiw:a}=e;return l.a.createElement("div",{className:"p-3"},a?l.a.createElement(C,{variant:"danger"},l.a.createElement("p",{className:"text-center"},"Emergency Numbers"),l.a.createElement("hr",null),l.a.createElement("div",{style:{overflow:"auto"},className:"text-center"},Y.map((e,a)=>{if(a<2)return e.contacts.map((e,a)=>l.a.createElement(P.a,{as:"span",variant:"light",className:"mr-2"},e.name+": "+e.phone+" "))})),l.a.createElement("hr",null),l.a.createElement(n.Link,{to:"/emergency"},"More...")):l.a.createElement(V,{as:"ul"},l.a.createElement(Z,{as:"li",variant:"danger",className:"text-center",style:{fontSize:"1.8rem"}},"Emergency Numbers"),Y.map((e,a)=>l.a.createElement(Z,{as:"li",variant:"primary",className:""},l.a.createElement("p",{className:"lead"},e.service),l.a.createElement(V,{as:"ul"},e.contacts.map((e,a)=>l.a.createElement(Z,{as:"li",variant:"success",className:""},e.name+": "," ",l.a.createElement(P.a,{variant:"danger"},e.phone))))))))}},JI6e:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),i=t.n(s),o=t("vUet"),m=["bsPrefix","className","as"],u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.as,d=void 0===s?"div":s,f=Object(r.a)(e,m),v=Object(o.a)(t,"col"),b=[],p=[];return u.forEach((function(e){var a,t,n,r=f[e];if(delete f[e],"object"==typeof r&&null!=r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var c="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+v+c:""+v+c+"-"+a),null!=n&&p.push("order"+c+"-"+n),null!=t&&p.push("offset"+c+"-"+t)})),b.length||b.push(v),i.a.createElement(d,Object(n.a)({},f,{ref:a,className:c.a.apply(void 0,[l].concat(b,p))}))}));d.displayName="Col",a.a=d},Mlj8:function(e,a,t){"use strict";t.r(a);var n=t("Wbzz"),r=t("9eSz"),l=t.n(r),c=t("kCIJ"),s=t("q1tI"),i=t.n(s),o=t("7vrA"),m=t("3Z9Z"),u=t("JI6e"),d=t("Ftda"),f=t("Bl7J"),v=t("vrFN");a.default=()=>{Object(c.useIntl)();const e=Object(n.useStaticQuery)("2284621786");return i.a.createElement(f.a,null,i.a.createElement(v.a,{title:"All Emergency Numbers",description:"all emergency numbers including ambulence of fireservice , public and private hospitals and clinic",useDefault:!1}),i.a.createElement(o.a,{fluid:!0,className:"p-0"},i.a.createElement("div",{className:"hero non-landing"},i.a.createElement(m.a,{noGutters:!0},i.a.createElement(u.a,{md:6,className:""},i.a.createElement("div",{className:"text-center"},i.a.createElement("h1",{className:"text-uppercase mt-5"},"All Emergency Numbers"))),i.a.createElement(u.a,{md:6},i.a.createElement(l.a,{fixed:e.img.childImageSharp.fixed})))),i.a.createElement("hr",{className:"w-75"}),i.a.createElement("div",{className:"main"},i.a.createElement(d.a,null))))}},"fwk/":function(e){e.exports=JSON.parse('[{"service":"National Emergency","contacts":[{"name":"National Emergency Number","phone":"999"}]},{"service":"Fire Service","contacts":[{"name":"Rajshahi Fire Station with Ambulence","phone":"0721-774224, 01730-336655"},{"name":"University Fire Station","phone":"0721-750270, 01730-002508"}]},{"service":"Private Medicals","contacts":[{"name":"Barind Medical College & Hospital","phone":"01839186666"},{"name":"Islami Bank Hospital (Laxmipur)","phone":"01786-908008, 0721-770965"},{"name":"Medipath Diagnostic","phone":"01712-685297"},{"name":"Zamzam Hospitals","phone":"01711-192600"},{"name":"Amana Hospital Limited","phone":"01705-403621"}]}]')}}]);
//# sourceMappingURL=component---src-pages-emergency-js-4335dd64de84fad14f8a.js.map