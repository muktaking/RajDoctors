(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3Z9Z":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),o=t.n(s),i=t("vUet"),u=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.noGutters,m=e.as,v=void 0===m?"div":m,f=Object(r.a)(e,u),b=Object(i.a)(t,"row"),p=b+"-cols",N=[];return d.forEach((function(e){var a,t=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&N.push(""+p+n+"-"+a)})),o.a.createElement(v,Object(n.a)({ref:a},f,{className:c.a.apply(void 0,[l,b,s&&"no-gutters"].concat(N))}))}));m.displayName="Row",m.defaultProps={noGutters:!1},a.a=m},"7vrA":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),o=t.n(s),i=t("vUet"),u=["bsPrefix","fluid","as","className"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.fluid,s=e.as,d=void 0===s?"div":s,m=e.className,v=Object(r.a)(e,u),f=Object(i.a)(t,"container"),b="string"==typeof l?"-"+l:"-fluid";return o.a.createElement(d,Object(n.a)({ref:a},v,{className:c()(m,l?""+f+b:f)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.a=d},Ftda:function(e,a,t){"use strict";t.d(a,"a",(function(){return W}));var n=t("Wbzz"),r=t("q1tI"),l=t.n(r),c=t("wx14"),s=t("zLVn"),o=t("TSYQ"),i=t.n(o),u=t("y8DL"),d=t("ZCiN"),m=t("vUet"),v=t("7xGa"),f=["label","onClick","className"],b=l.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,r=e.className,o=Object(s.a)(e,f);return l.a.createElement("button",Object(c.a)({ref:a,type:"button",className:i()("close",r),onClick:n},o),l.a.createElement("span",{"aria-hidden":"true"},"×"),l.a.createElement("span",{className:"sr-only"},t))}));b.displayName="CloseButton",b.defaultProps={label:"Close"};var p=b,N=t("U1MP"),y=t("YdCC"),h=t("dbZe"),O=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],j=Object(N.a)("h4");j.displayName="DivStyledAsH4";var x=Object(y.a)("alert-heading",{Component:j}),w=Object(y.a)("alert-link",{Component:h.a}),C={show:!0,transition:v.a,closeLabel:"Close alert"},E=l.a.forwardRef((function(e,a){var t=Object(u.a)(e,{show:"onClose"}),n=t.bsPrefix,r=t.show,o=t.closeLabel,f=t.className,b=t.children,N=t.variant,y=t.onClose,h=t.dismissible,j=t.transition,x=Object(s.a)(t,O),w=Object(m.a)(n,"alert"),C=Object(d.a)((function(e){y&&y(!1,e)})),E=!0===j?v.a:j,g=l.a.createElement("div",Object(c.a)({role:"alert"},E?void 0:x,{ref:a,className:i()(f,w,N&&w+"-"+N,h&&w+"-dismissible")}),h&&l.a.createElement(p,{onClick:C,label:o}),b);return E?l.a.createElement(E,Object(c.a)({unmountOnExit:!0},x,{ref:void 0,in:r}),g):r?g:null}));E.displayName="Alert",E.defaultProps=C,E.Link=w,E.Heading=x;var g=E,k=t("65eO"),P=(t("2W6z"),Function.prototype.bind.call(Function.prototype.call,[].slice));var S=t("lcWJ"),I=l.a.createContext(null);I.displayName="NavContext";var L=I,R=function(e,a){return void 0===a&&(a=null),null!=e?String(e):a||null},z=l.a.createContext(null),K=l.a.createContext(null),A=["as","onSelect","activeKey","role","onKeyDown"],D=function(){},q=l.a.forwardRef((function(e,a){var t,n,o=e.as,i=void 0===o?"ul":o,u=e.onSelect,d=e.activeKey,m=e.role,v=e.onKeyDown,f=Object(s.a)(e,A),b=Object(r.useReducer)((function(e){return!e}),!1)[1],p=Object(r.useRef)(!1),N=Object(r.useContext)(z),y=Object(r.useContext)(K);y&&(m=m||"tablist",d=y.activeKey,t=y.getControlledId,n=y.getControllerId);var h=Object(r.useRef)(null),O=function(e){var a=h.current;if(!a)return null;var t,n=(t="[data-rb-event-key]:not(.disabled)",P(a.querySelectorAll(t))),r=a.querySelector(".active");if(!r)return null;var l=n.indexOf(r);if(-1===l)return null;var c=l+e;return c>=n.length&&(c=0),c<0&&(c=n.length-1),n[c]},j=function(e,a){null!=e&&(u&&u(e,a),N&&N(e,a))};Object(r.useEffect)((function(){if(h.current&&p.current){var e=h.current.querySelector("[data-rb-event-key].active");e&&e.focus()}p.current=!1}));var x=Object(S.a)(a,h);return l.a.createElement(z.Provider,{value:j},l.a.createElement(L.Provider,{value:{role:m,activeKey:R(d),getControlledId:t||D,getControllerId:n||D}},l.a.createElement(i,Object(c.a)({},f,{onKeyDown:function(e){var a;switch(v&&v(e),e.key){case"ArrowLeft":case"ArrowUp":a=O(-1);break;case"ArrowRight":case"ArrowDown":a=O(1);break;default:return}a&&(e.preventDefault(),j(a.dataset.rbEventKey,e),p.current=!0,b())},ref:x,role:m}))))})),U=["active","className","eventKey","onSelect","onClick","as"],F=l.a.forwardRef((function(e,a){var t=e.active,n=e.className,o=e.eventKey,u=e.onSelect,m=e.onClick,v=e.as,f=Object(s.a)(e,U),b=R(o,f.href),p=Object(r.useContext)(z),N=Object(r.useContext)(L),y=t;if(N){f.role||"tablist"!==N.role||(f.role="tab");var h=N.getControllerId(b),O=N.getControlledId(b);f["data-rb-event-key"]=b,f.id=h||f.id,f["aria-controls"]=O||f["aria-controls"],y=null==t&&null!=b?N.activeKey===b:t}"tab"===f.role&&(f.disabled&&(f.tabIndex=-1,f["aria-disabled"]=!0),f["aria-selected"]=y);var j=Object(d.a)((function(e){m&&m(e),null!=b&&(u&&u(b,e),p&&p(b,e))}));return l.a.createElement(v,Object(c.a)({},f,{ref:a,onClick:j,className:i()(n,y&&"active")}))}));F.defaultProps={disabled:!1};var G=F,H=["bsPrefix","active","disabled","className","variant","action","as","onClick"],J={variant:void 0,active:!1,disabled:!1},M=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,o=e.disabled,u=e.className,d=e.variant,v=e.action,f=e.as,b=e.onClick,p=Object(s.a)(e,H);t=Object(m.a)(t,"list-group-item");var N=Object(r.useCallback)((function(e){if(o)return e.preventDefault(),void e.stopPropagation();b&&b(e)}),[o,b]);return o&&void 0===p.tabIndex&&(p.tabIndex=-1,p["aria-disabled"]=!0),l.a.createElement(G,Object(c.a)({ref:a},p,{as:f||(v?p.href?"a":"button":"div"),onClick:N,className:i()(u,t,n&&"active",o&&"disabled",d&&t+"-"+d,v&&t+"-action")}))}));M.defaultProps=J,M.displayName="ListGroupItem";var V=M,Y=["className","bsPrefix","variant","horizontal","as"],Z={variant:void 0,horizontal:void 0},Q=l.a.forwardRef((function(e,a){var t,n=Object(u.a)(e,{activeKey:"onSelect"}),r=n.className,o=n.bsPrefix,d=n.variant,v=n.horizontal,f=n.as,b=void 0===f?"div":f,p=Object(s.a)(n,Y),N=Object(m.a)(o,"list-group");return t=v?!0===v?"horizontal":"horizontal-"+v:null,l.a.createElement(q,Object(c.a)({ref:a},p,{as:b,className:i()(r,N,d&&N+"-"+d,t&&N+"-"+t)}))}));Q.defaultProps=Z,Q.displayName="ListGroup",Q.Item=V;var T=Q,B=t("fwk/");function W(e){let{snippetVeiw:a}=e;return l.a.createElement("div",{className:"p-3"},a?l.a.createElement(g,{variant:"danger"},l.a.createElement("p",{className:"text-center"},"Emergency Numbers"),l.a.createElement("hr",null),l.a.createElement("div",{style:{overflow:"auto"},className:"text-center"},B.map((e,a)=>{if(a<2)return e.contacts.map((e,a)=>l.a.createElement(k.a,{as:"span",variant:"light",className:"mr-2"},e.name+": "+e.phone+" "))})),l.a.createElement("hr",null),l.a.createElement(n.Link,{to:"/emergency"},"More...")):l.a.createElement(T,{as:"ul"},l.a.createElement(V,{as:"li",variant:"danger",className:"text-center",style:{fontSize:"1.8rem"}},"Emergency Numbers"),B.map((e,a)=>l.a.createElement(V,{as:"li",variant:"primary",className:""},l.a.createElement("p",{className:"lead"},e.service),l.a.createElement(T,{as:"ul"},e.contacts.map((e,a)=>l.a.createElement(V,{as:"li",variant:"success",className:""},e.name+": "," ",l.a.createElement(k.a,{variant:"danger"},e.phone))))))))}},JI6e:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),c=t.n(l),s=t("q1tI"),o=t.n(s),i=t("vUet"),u=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],m=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,s=e.as,m=void 0===s?"div":s,v=Object(r.a)(e,u),f=Object(i.a)(t,"col"),b=[],p=[];return d.forEach((function(e){var a,t,n,r=v[e];if(delete v[e],"object"==typeof r&&null!=r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var c="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+f+c:""+f+c+"-"+a),null!=n&&p.push("order"+c+"-"+n),null!=t&&p.push("offset"+c+"-"+t)})),b.length||b.push(f),o.a.createElement(m,Object(n.a)({},v,{ref:a,className:c.a.apply(void 0,[l].concat(b,p))}))}));m.displayName="Col",a.a=m},"fwk/":function(e){e.exports=JSON.parse('[{"service":"National Emergency","contacts":[{"name":"National Emergency Number","phone":"999"}]},{"service":"Fire Service","contacts":[{"name":"Rajshahi Fire Station with Ambulence","phone":"0721-774224, 01730-336655"},{"name":"University Fire Station","phone":"0721-750270, 01730-002508"}]},{"service":"Private Medicals","contacts":[{"name":"Barind Medical College & Hospital","phone":"01839186666"},{"name":"Islami Bank Hospital (Laxmipur)","phone":"01786-908008, 0721-770965"},{"name":"Medipath Diagnostic","phone":"01712-685297"},{"name":"Zamzam Hospitals","phone":"01711-192600"},{"name":"Amana Hospital Limited","phone":"01705-403621"}]}]')}}]);
//# sourceMappingURL=a038405a62bad266cd5d135ef61c33168be0e2ef-929a3dd9ab68972e2bd1.js.map