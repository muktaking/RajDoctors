(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3Z9Z":function(e,a,t){"use strict";var r=t("wx14"),s=t("zLVn"),c=t("TSYQ"),n=t.n(c),l=t("q1tI"),i=t.n(l),o=t("vUet"),d=["bsPrefix","className","noGutters","as"],m=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.noGutters,f=e.as,u=void 0===f?"div":f,b=Object(s.a)(e,d),v=Object(o.a)(t,"row"),p=v+"-cols",x=[];return m.forEach((function(e){var a,t=b[e];delete b[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&x.push(""+p+r+"-"+a)})),i.a.createElement(u,Object(r.a)({ref:a},b,{className:n.a.apply(void 0,[c,v,l&&"no-gutters"].concat(x))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},a.a=f},"65eO":function(e,a,t){"use strict";var r=t("wx14"),s=t("zLVn"),c=t("TSYQ"),n=t.n(c),l=t("q1tI"),i=t.n(l),o=t("vUet"),d=["bsPrefix","variant","pill","className","as"],m=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,l=e.pill,m=e.className,f=e.as,u=void 0===f?"span":f,b=Object(s.a)(e,d),v=Object(o.a)(t,"badge");return i.a.createElement(u,Object(r.a)({ref:a},b,{className:n()(m,v,l&&v+"-pill",c&&v+"-"+c)}))}));m.displayName="Badge",m.defaultProps={pill:!1},a.a=m},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),s=t("zLVn"),c=t("TSYQ"),n=t.n(c),l=t("q1tI"),i=t.n(l),o=t("vUet"),d=t("YdCC"),m=t("U1MP"),f=t("Wzyw"),u=["bsPrefix","className","variant","as"],b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.variant,d=e.as,m=void 0===d?"img":d,f=Object(s.a)(e,u),b=Object(o.a)(t,"card-img");return i.a.createElement(m,Object(r.a)({ref:a,className:n()(l?b+"-"+l:b,c)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var v=b,p=["bsPrefix","className","bg","text","border","body","children","as"],x=Object(m.a)("h5"),N=Object(m.a)("h6"),y=Object(d.a)("card-body"),E=Object(d.a)("card-title",{Component:x}),O=Object(d.a)("card-subtitle",{Component:N}),g=Object(d.a)("card-link",{Component:"a"}),j=Object(d.a)("card-text",{Component:"p"}),h=Object(d.a)("card-header"),w=Object(d.a)("card-footer"),P=Object(d.a)("card-img-overlay"),C=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,m=e.text,u=e.border,b=e.body,v=e.children,x=e.as,N=void 0===x?"div":x,E=Object(s.a)(e,p),O=Object(o.a)(t,"card"),g=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return i.a.createElement(f.a.Provider,{value:g},i.a.createElement(N,Object(r.a)({ref:a},E,{className:n()(c,O,d&&"bg-"+d,m&&"text-"+m,u&&"border-"+u)}),b?i.a.createElement(y,null,v):v))}));C.displayName="Card",C.defaultProps={body:!1},C.Img=v,C.Title=E,C.Subtitle=O,C.Body=y,C.Link=g,C.Text=j,C.Header=h,C.Footer=w,C.ImgOverlay=P;a.a=C},"7vrA":function(e,a,t){"use strict";var r=t("wx14"),s=t("zLVn"),c=t("TSYQ"),n=t.n(c),l=t("q1tI"),i=t.n(l),o=t("vUet"),d=["bsPrefix","fluid","as","className"],m=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.fluid,l=e.as,m=void 0===l?"div":l,f=e.className,u=Object(s.a)(e,d),b=Object(o.a)(t,"container"),v="string"==typeof c?"-"+c:"-fluid";return i.a.createElement(m,Object(r.a)({ref:a},u,{className:n()(f,c?""+b+v:b)}))}));m.displayName="Container",m.defaultProps={fluid:!1},a.a=m},JI6e:function(e,a,t){"use strict";var r=t("wx14"),s=t("zLVn"),c=t("TSYQ"),n=t.n(c),l=t("q1tI"),i=t.n(l),o=t("vUet"),d=["bsPrefix","className","as"],m=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.as,f=void 0===l?"div":l,u=Object(s.a)(e,d),b=Object(o.a)(t,"col"),v=[],p=[];return m.forEach((function(e){var a,t,r,s=u[e];if(delete u[e],"object"==typeof s&&null!=s){var c=s.span;a=void 0===c||c,t=s.offset,r=s.order}else a=s;var n="xs"!==e?"-"+e:"";a&&v.push(!0===a?""+b+n:""+b+n+"-"+a),null!=r&&p.push("order"+n+"-"+r),null!=t&&p.push("offset"+n+"-"+t)})),v.length||v.push(b),i.a.createElement(f,Object(r.a)({},u,{ref:a,className:n.a.apply(void 0,[c].concat(v,p))}))}));f.displayName="Col",a.a=f},U1MP:function(e,a,t){"use strict";var r=t("wx14"),s=t("q1tI"),c=t.n(s),n=t("TSYQ"),l=t.n(n);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))}},rcPh:function(e,a,t){"use strict";t.r(a);var r=t("KQm4"),s=t("q1tI"),c=t.n(s),n=t("Wbzz"),l=t("9eSz"),i=t.n(l),o=t("7vrA"),d=t("3Z9Z"),m=t("JI6e"),f=t("6xyR"),u=t("65eO"),b=t("ma3e"),v=t("kCIJ"),p=t("Bl7J"),x=t("vrFN"),N=t("f+Iu");const y=()=>{var e;const a=Object(v.useIntl)(),t=Object(n.useStaticQuery)("3609018353");(e=t.allDoctorListsCsv.nodes).push.apply(e,Object(r.a)(t.allDoctorListsCopyCsv.nodes));const s=t.allDoctorListsCsv.nodes.map(e=>e.Speciality);return c.a.createElement(p.a,null,c.a.createElement(x.a,{title:a.formatMessage({id:"Speciality"})+" | "+a.formatMessage({id:"siteMetaData.tagLine.Dhaka"}),useDefault:!1,description:a.formatMessage({id:"List of All Doctor's Speciality"})+"-"+["Medicine","Gynaecology","Surgery","Orthopaedics","Paediatrics"].map(e=>a.formatMessage({id:e}))+" "+a.formatMessage({id:"more"})}),c.a.createElement(o.a,{fluid:!0,className:"p-0"},c.a.createElement("div",{className:"hero non-landing"},c.a.createElement(d.a,{noGutters:!0},c.a.createElement(m.a,{md:6,className:""},c.a.createElement("div",{className:"text-center"},c.a.createElement("h1",{className:"text-uppercase mt-5"},a.formatMessage({id:"List of All Doctor's Speciality"})))),c.a.createElement(m.a,{md:6},c.a.createElement(i.a,{fixed:t.img.childImageSharp.fixed})))),c.a.createElement("hr",{className:"w-75"}),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"med-section"},c.a.createElement("h3",{className:"text-center"},a.formatMessage({id:"Speciality"})),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"med-card"},N.flatMenu.map(e=>c.a.createElement("div",{className:"speciality",key:e},c.a.createElement(f.a,{style:{width:"18rem"},bg:"light",text:"dark"},c.a.createElement(f.a.Header,null,a.formatMessage({id:""+e})),c.a.createElement(f.a.Body,null,c.a.createElement(f.a.Title,null,c.a.createElement(b.x,{size:"36px"}),a.formatMessage({id:"Doctors Found"})," ",c.a.createElement(u.a,{variant:"warning"},s.filter(a=>a===e).length)),c.a.createElement(v.Link,{to:"/speciality/"+e.toLowerCase()+"/"},a.formatMessage({id:"Enter"})))))))),c.a.createElement("div",{className:"d-flex justify-content-center"}))))};a.default=c.a.memo(y)}}]);
//# sourceMappingURL=component---src-pages-speciality-js-b97af96605db49936609.js.map