(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"3Z9Z":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),s=t.n(l),c=t("q1tI"),i=t.n(c),o=t("vUet"),m=["bsPrefix","className","noGutters","as"],u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.noGutters,d=e.as,f=void 0===d?"div":d,v=Object(r.a)(e,m),b=Object(o.a)(t,"row"),p=b+"-cols",N=[];return u.forEach((function(e){var a,t=v[e];delete v[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&N.push(""+p+n+"-"+a)})),i.a.createElement(f,Object(n.a)({ref:a},v,{className:s.a.apply(void 0,[l,b,c&&"no-gutters"].concat(N))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},"7vrA":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),s=t.n(l),c=t("q1tI"),i=t.n(c),o=t("vUet"),m=["bsPrefix","fluid","as","className"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.fluid,c=e.as,u=void 0===c?"div":c,d=e.className,f=Object(r.a)(e,m),v=Object(o.a)(t,"container"),b="string"==typeof l?"-"+l:"-fluid";return i.a.createElement(u,Object(n.a)({ref:a},f,{className:s()(d,l?""+v+b:v)}))}));u.displayName="Container",u.defaultProps={fluid:!1},a.a=u},Ftda:function(e,a,t){"use strict";t.d(a,"a",(function(){return V}));var n=t("Wbzz"),r=t("q1tI"),l=t.n(r),s=t("wx14"),c=t("zLVn"),i=t("TSYQ"),o=t.n(i),m=t("y8DL"),u=t("ZCiN"),d=t("vUet"),f=t("7xGa"),v=["label","onClick","className"],b=l.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,r=e.className,i=Object(c.a)(e,v);return l.a.createElement("button",Object(s.a)({ref:a,type:"button",className:o()("close",r),onClick:n},i),l.a.createElement("span",{"aria-hidden":"true"},"×"),l.a.createElement("span",{className:"sr-only"},t))}));b.displayName="CloseButton",b.defaultProps={label:"Close"};var p=b,N=t("U1MP"),E=t("YdCC"),h=t("dbZe"),x=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],j=Object(N.a)("h4");j.displayName="DivStyledAsH4";var O=Object(E.a)("alert-heading",{Component:j}),y=Object(E.a)("alert-link",{Component:h.a}),w={show:!0,transition:f.a,closeLabel:"Close alert"},g=l.a.forwardRef((function(e,a){var t=Object(m.a)(e,{show:"onClose"}),n=t.bsPrefix,r=t.show,i=t.closeLabel,v=t.className,b=t.children,N=t.variant,E=t.onClose,h=t.dismissible,j=t.transition,O=Object(c.a)(t,x),y=Object(d.a)(n,"alert"),w=Object(u.a)((function(e){E&&E(!1,e)})),g=!0===j?f.a:j,C=l.a.createElement("div",Object(s.a)({role:"alert"},g?void 0:O,{ref:a,className:o()(v,y,N&&y+"-"+N,h&&y+"-dismissible")}),h&&l.a.createElement(p,{onClick:w,label:i}),b);return g?l.a.createElement(g,Object(s.a)({unmountOnExit:!0},O,{ref:void 0,in:r}),C):r?C:null}));g.displayName="Alert",g.defaultProps=w,g.Link=y,g.Heading=O;var C=g,P=t("65eO"),k=(t("2W6z"),t("rQNl")),z=t("VWqr"),I=["bsPrefix","active","disabled","className","variant","action","as","onClick"],L={variant:void 0,active:!1,disabled:!1},S=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,i=e.disabled,m=e.className,u=e.variant,f=e.action,v=e.as,b=e.onClick,p=Object(c.a)(e,I);t=Object(d.a)(t,"list-group-item");var N=Object(r.useCallback)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();b&&b(e)}),[i,b]);return i&&void 0===p.tabIndex&&(p.tabIndex=-1,p["aria-disabled"]=!0),l.a.createElement(z.a,Object(s.a)({ref:a},p,{as:v||(f?p.href?"a":"button":"div"),onClick:N,className:o()(m,t,n&&"active",i&&"disabled",u&&t+"-"+u,f&&t+"-action")}))}));S.defaultProps=L,S.displayName="ListGroupItem";var R=S,G=["className","bsPrefix","variant","horizontal","as"],J={variant:void 0,horizontal:void 0},q=l.a.forwardRef((function(e,a){var t,n=Object(m.a)(e,{activeKey:"onSelect"}),r=n.className,i=n.bsPrefix,u=n.variant,f=n.horizontal,v=n.as,b=void 0===v?"div":v,p=Object(c.a)(n,G),N=Object(d.a)(i,"list-group");return t=f?!0===f?"horizontal":"horizontal-"+f:null,l.a.createElement(k.a,Object(s.a)({ref:a},p,{as:b,className:o()(r,N,u&&N+"-"+u,t&&N+"-"+t)}))}));q.defaultProps=J,q.displayName="ListGroup",q.Item=R;var A=q,Q=t("fwk/");function V(e){let{snippetVeiw:a}=e;return l.a.createElement("div",{className:"p-3"},a?l.a.createElement(C,{variant:"danger"},l.a.createElement("p",{className:"text-center"},"Emergency Numbers"),l.a.createElement("hr",null),l.a.createElement("div",{style:{overflow:"auto"},className:"text-center"},Q.map((e,a)=>{if(a<2)return e.contacts.map((e,a)=>l.a.createElement(P.a,{as:"span",variant:"light",className:"mr-2"},e.name+": "+e.phone+" "))})),l.a.createElement("hr",null),l.a.createElement(n.Link,{to:"/emergency"},"More...")):l.a.createElement(A,{as:"ul"},l.a.createElement(R,{as:"li",variant:"danger",className:"text-center",style:{fontSize:"1.8rem"}},"Emergency Numbers"),Q.map((e,a)=>l.a.createElement(R,{as:"li",variant:"primary",className:""},l.a.createElement("p",{className:"lead"},e.service),l.a.createElement(A,{as:"ul"},e.contacts.map((e,a)=>l.a.createElement(R,{as:"li",variant:"success",className:""},e.name+": "," ",l.a.createElement(P.a,{variant:"danger"},e.phone))))))))}},JI6e:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),l=t("TSYQ"),s=t.n(l),c=t("q1tI"),i=t.n(c),o=t("vUet"),m=["bsPrefix","className","as"],u=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,d=void 0===c?"div":c,f=Object(r.a)(e,m),v=Object(o.a)(t,"col"),b=[],p=[];return u.forEach((function(e){var a,t,n,r=f[e];if(delete f[e],"object"==typeof r&&null!=r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var s="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+v+s:""+v+s+"-"+a),null!=n&&p.push("order"+s+"-"+n),null!=t&&p.push("offset"+s+"-"+t)})),b.length||b.push(v),i.a.createElement(d,Object(n.a)({},f,{ref:a,className:s.a.apply(void 0,[l].concat(b,p))}))}));d.displayName="Col",a.a=d},Mlj8:function(e,a,t){"use strict";t.r(a);var n=t("Wbzz"),r=t("9eSz"),l=t.n(r),s=t("kCIJ"),c=t("q1tI"),i=t.n(c),o=t("7vrA"),m=t("3Z9Z"),u=t("JI6e"),d=t("Ftda"),f=t("Bl7J"),v=t("vrFN");a.default=()=>{Object(s.useIntl)();const e=Object(n.useStaticQuery)("2284621786");return i.a.createElement(f.a,null,i.a.createElement(v.a,{title:"All Emergency Numbers",description:"all emergency numbers including ambulence of fireservice , public and private hospitals and clinic",useDefault:!1}),i.a.createElement(o.a,{fluid:!0,className:"p-0"},i.a.createElement("div",{className:"hero non-landing"},i.a.createElement(m.a,{noGutters:!0},i.a.createElement(u.a,{md:6,className:""},i.a.createElement("div",{className:"text-center"},i.a.createElement("h1",{className:"text-uppercase mt-5"},"All Emergency Numbers"))),i.a.createElement(u.a,{md:6},i.a.createElement(l.a,{fixed:e.img.childImageSharp.fixed})))),i.a.createElement("hr",{className:"w-75"}),i.a.createElement("div",{className:"main"},i.a.createElement(d.a,null))))}},"fwk/":function(e){e.exports=JSON.parse('[{"service":"National Emergency","contacts":[{"name":"National Emergency Number","phone":"999"}]}]')}}]);
//# sourceMappingURL=component---src-pages-emergency-js-13c39cd97f5dab833038.js.map