(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3Z9Z":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),s=t("TSYQ"),i=t.n(s),l=t("q1tI"),c=t.n(l),o=t("vUet"),m=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.noGutters,u=e.as,v=void 0===u?"div":u,f=Object(r.a)(e,m),p=Object(o.a)(t,"row"),b=p+"-cols",E=[];return d.forEach((function(e){var a,t=f[e];delete f[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&E.push(""+b+n+"-"+a)})),c.a.createElement(v,Object(n.a)({ref:a},f,{className:i.a.apply(void 0,[s,p,l&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"7vrA":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),s=t("TSYQ"),i=t.n(s),l=t("q1tI"),c=t.n(l),o=t("vUet"),m=["bsPrefix","fluid","as","className"],d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.fluid,l=e.as,d=void 0===l?"div":l,u=e.className,v=Object(r.a)(e,m),f=Object(o.a)(t,"container"),p="string"==typeof s?"-"+s:"-fluid";return c.a.createElement(d,Object(n.a)({ref:a},v,{className:i()(u,s?""+f+p:f)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.a=d},Ftda:function(e,a,t){"use strict";t.d(a,"a",(function(){return D}));var n=t("Wbzz"),r=t("q1tI"),s=t.n(r),i=t("wx14"),l=t("zLVn"),c=t("TSYQ"),o=t.n(c),m=t("y8DL"),d=t("ZCiN"),u=t("vUet"),v=t("7xGa"),f=t("XQC9"),p=t("U1MP"),b=t("YdCC"),E=t("dbZe"),N=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],h=Object(p.a)("h4");h.displayName="DivStyledAsH4";var g=Object(b.a)("alert-heading",{Component:h}),w=Object(b.a)("alert-link",{Component:E.a}),x={show:!0,transition:v.a,closeLabel:"Close alert"},O=s.a.forwardRef((function(e,a){var t=Object(m.a)(e,{show:"onClose"}),n=t.bsPrefix,r=t.show,c=t.closeLabel,p=t.className,b=t.children,E=t.variant,h=t.onClose,g=t.dismissible,w=t.transition,x=Object(l.a)(t,N),O=Object(u.a)(n,"alert"),j=Object(d.a)((function(e){h&&h(!1,e)})),y=!0===w?v.a:w,C=s.a.createElement("div",Object(i.a)({role:"alert"},y?void 0:x,{ref:a,className:o()(p,O,E&&O+"-"+E,g&&O+"-dismissible")}),g&&s.a.createElement(f.a,{onClick:j,label:c}),b);return y?s.a.createElement(y,Object(i.a)({unmountOnExit:!0},x,{ref:void 0,in:r}),C):r?C:null}));O.displayName="Alert",O.defaultProps=x,O.Link=w,O.Heading=g;var j=O,y=t("65eO"),C=(t("2W6z"),t("rQNl")),P=t("VWqr"),z=["bsPrefix","active","disabled","className","variant","action","as","onClick"],k={variant:void 0,active:!1,disabled:!1},I=s.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,c=e.disabled,m=e.className,d=e.variant,v=e.action,f=e.as,p=e.onClick,b=Object(l.a)(e,z);t=Object(u.a)(t,"list-group-item");var E=Object(r.useCallback)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();p&&p(e)}),[c,p]);return c&&void 0===b.tabIndex&&(b.tabIndex=-1,b["aria-disabled"]=!0),s.a.createElement(P.a,Object(i.a)({ref:a},b,{as:f||(v?b.href?"a":"button":"div"),onClick:E,className:o()(m,t,n&&"active",c&&"disabled",d&&t+"-"+d,v&&t+"-action")}))}));I.defaultProps=k,I.displayName="ListGroupItem";var L=I,S=["className","bsPrefix","variant","horizontal","as"],M={variant:void 0,horizontal:void 0},F=s.a.forwardRef((function(e,a){var t,n=Object(m.a)(e,{activeKey:"onSelect"}),r=n.className,c=n.bsPrefix,d=n.variant,v=n.horizontal,f=n.as,p=void 0===f?"div":f,b=Object(l.a)(n,S),E=Object(u.a)(c,"list-group");return t=v?!0===v?"horizontal":"horizontal-"+v:null,s.a.createElement(C.a,Object(i.a)({ref:a},b,{as:p,className:o()(r,E,d&&E+"-"+d,t&&E+"-"+t)}))}));F.defaultProps=M,F.displayName="ListGroup",F.Item=L;var R=F,A=t("fwk/");function D(e){var a=e.snippetVeiw;return s.a.createElement("div",{className:"p-3"},a?s.a.createElement(j,{variant:"danger"},s.a.createElement("p",{className:"text-center"},"Emergency Numbers"),s.a.createElement("hr",null),s.a.createElement("div",{style:{overflow:"auto"}},A.map((function(e,a){return e.contacts.map((function(e,a){return s.a.createElement(y.a,{as:"span",variant:"light",className:"mr-2"},e.name+": "+e.phone+" ")}))}))),s.a.createElement("hr",null),s.a.createElement(n.Link,{to:"/emergency"},"More...")):s.a.createElement(R,{as:"ul"},s.a.createElement(L,{as:"li",variant:"danger",className:"text-center",style:{fontSize:"1.8rem"}},"Emergency Numbers"),A.map((function(e,a){return s.a.createElement(L,{as:"li",variant:"primary",className:""},s.a.createElement("p",{className:"lead"},e.service),s.a.createElement(R,{as:"ul"},e.contacts.map((function(e,a){return s.a.createElement(L,{as:"li",variant:"success",className:""},e.name+": "," ",s.a.createElement(y.a,{variant:"danger"},e.phone))}))))}))))}},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("Wbzz"),r=t("9eSz"),s=t.n(r),i=t("kCIJ"),l=t("q1tI"),c=t.n(l),o=t("7vrA"),m=t("3Z9Z"),d=t("JI6e"),u=t("AY9D"),v=t("Ftda"),f=t("Bl7J"),p=t("vrFN"),b=t("gFwQ"),E=function(e){var a=e.title,t=e.data;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"med-section"},c.a.createElement("h3",{className:"text-center"},a),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"med-card"},c.a.createElement(u.a,{data:t,index:!0}))),c.a.createElement("hr",{className:"w-25"}))};a.default=function(){var e=Object(n.useStaticQuery)("2125539622"),a=Object(i.useIntl)(),t=("en"!==a.locale&&a.locale,[{title:a.formatMessage({id:"tms"}),data:e.med.nodes},{title:a.formatMessage({id:"tss"}),data:e.sur.nodes},{title:a.formatMessage({id:"tgs"}),data:e.gy.nodes}]);return c.a.createElement(f.a,null,c.a.createElement(p.a,null),c.a.createElement(o.a,{fluid:!0,className:"p-0"},c.a.createElement("div",{className:"hero"},c.a.createElement(m.a,{noGutters:!0},c.a.createElement(d.a,{md:6,className:"my-auto"},c.a.createElement("div",{className:"text-center"},c.a.createElement("h1",{className:"text-uppercase"},a.formatMessage({id:"siteMetaData.title"})),c.a.createElement("p",{className:"text-muted lead p-3"},a.formatMessage({id:"siteMetaData.description"})),c.a.createElement(b.a,null))),c.a.createElement(d.a,{md:6},c.a.createElement(s.a,{fluid:e.img.childImageSharp.fluid})))),c.a.createElement("hr",{className:"w-75"}),c.a.createElement(v.a,{snippetVeiw:!0}),c.a.createElement("div",{className:"main"},t.map((function(e,a){return c.a.createElement(E,{key:e.title,title:e.title,data:e.data})})))))}},"fwk/":function(e){e.exports=JSON.parse('[{"service":"National Emergency","contacts":[{"name":"National Emergency Number","phone":"999"}]},{"service":"Fire Service","contacts":[{"name":"Rajshahi Fire Station with Ambulence","phone":"0721-774224, 01730-336655"},{"name":"University Fire Station","phone":"0721-750270, 01730-002508"}]},{"service":"Private Medicals","contacts":[{"name":"Barind Medical College & Hospital","phone":"01839186666"},{"name":"Islami Bank Hospital (Laxmipur)","phone":"01786-908008, 0721-770965"},{"name":"Medipath Diagnostic","phone":"01712-685297"},{"name":"Zamzam Hospitals","phone":"01711-192600"},{"name":"Amana Hospital Limited","phone":"01705-403621"}]}]')}}]);
//# sourceMappingURL=component---src-pages-index-js-4061cba9b0b3927704f4.js.map