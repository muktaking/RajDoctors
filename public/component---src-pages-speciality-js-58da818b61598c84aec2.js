(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"3Z9Z":function(e,a,t){"use strict";var r=t("wx14"),s=t("zLVn"),c=t("TSYQ"),n=t.n(c),l=t("q1tI"),i=t.n(l),o=t("vUet"),d=["bsPrefix","className","noGutters","as"],m=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.noGutters,f=e.as,u=void 0===f?"div":f,v=Object(s.a)(e,d),b=Object(o.a)(t,"row"),p=b+"-cols",x=[];return m.forEach((function(e){var a,t=v[e];delete v[e];var r="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&x.push(""+p+r+"-"+a)})),i.a.createElement(u,Object(r.a)({ref:a},v,{className:n.a.apply(void 0,[c,b,l&&"no-gutters"].concat(x))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},a.a=f},"65eO":function(e,a,t){"use strict";var r=t("wx14"),s=t("zLVn"),c=t("TSYQ"),n=t.n(c),l=t("q1tI"),i=t.n(l),o=t("vUet"),d=["bsPrefix","variant","pill","className","as"],m=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,l=e.pill,m=e.className,f=e.as,u=void 0===f?"span":f,v=Object(s.a)(e,d),b=Object(o.a)(t,"badge");return i.a.createElement(u,Object(r.a)({ref:a},v,{className:n()(m,b,l&&b+"-pill",c&&b+"-"+c)}))}));m.displayName="Badge",m.defaultProps={pill:!1},a.a=m},"6xyR":function(e,a,t){"use strict";var r=t("wx14"),s=t("zLVn"),c=t("TSYQ"),n=t.n(c),l=t("q1tI"),i=t.n(l),o=t("vUet"),d=t("YdCC"),m=t("U1MP"),f=i.a.createContext(null);f.displayName="CardContext";var u=f,v=["bsPrefix","className","variant","as"],b=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.variant,d=e.as,m=void 0===d?"img":d,f=Object(s.a)(e,v),u=Object(o.a)(t,"card-img");return i.a.createElement(m,Object(r.a)({ref:a,className:n()(l?u+"-"+l:u,c)},f))}));b.displayName="CardImg",b.defaultProps={variant:null};var p=b,x=["bsPrefix","className","bg","text","border","body","children","as"],N=Object(m.a)("h5"),y=Object(m.a)("h6"),j=Object(d.a)("card-body"),E=Object(d.a)("card-title",{Component:N}),O=Object(d.a)("card-subtitle",{Component:y}),g=Object(d.a)("card-link",{Component:"a"}),h=Object(d.a)("card-text",{Component:"p"}),w=Object(d.a)("card-header"),P=Object(d.a)("card-footer"),C=Object(d.a)("card-img-overlay"),I=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,d=e.bg,m=e.text,f=e.border,v=e.body,b=e.children,p=e.as,N=void 0===p?"div":p,y=Object(s.a)(e,x),E=Object(o.a)(t,"card"),O=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return i.a.createElement(u.Provider,{value:O},i.a.createElement(N,Object(r.a)({ref:a},y,{className:n()(c,E,d&&"bg-"+d,m&&"text-"+m,f&&"border-"+f)}),v?i.a.createElement(j,null,b):b))}));I.displayName="Card",I.defaultProps={body:!1},I.Img=p,I.Title=E,I.Subtitle=O,I.Body=j,I.Link=g,I.Text=h,I.Header=w,I.Footer=P,I.ImgOverlay=C;a.a=I},"7vrA":function(e,a,t){"use strict";var r=t("wx14"),s=t("zLVn"),c=t("TSYQ"),n=t.n(c),l=t("q1tI"),i=t.n(l),o=t("vUet"),d=["bsPrefix","fluid","as","className"],m=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.fluid,l=e.as,m=void 0===l?"div":l,f=e.className,u=Object(s.a)(e,d),v=Object(o.a)(t,"container"),b="string"==typeof c?"-"+c:"-fluid";return i.a.createElement(m,Object(r.a)({ref:a},u,{className:n()(f,c?""+v+b:v)}))}));m.displayName="Container",m.defaultProps={fluid:!1},a.a=m},JI6e:function(e,a,t){"use strict";var r=t("wx14"),s=t("zLVn"),c=t("TSYQ"),n=t.n(c),l=t("q1tI"),i=t.n(l),o=t("vUet"),d=["bsPrefix","className","as"],m=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,l=e.as,f=void 0===l?"div":l,u=Object(s.a)(e,d),v=Object(o.a)(t,"col"),b=[],p=[];return m.forEach((function(e){var a,t,r,s=u[e];if(delete u[e],"object"==typeof s&&null!=s){var c=s.span;a=void 0===c||c,t=s.offset,r=s.order}else a=s;var n="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+v+n:""+v+n+"-"+a),null!=r&&p.push("order"+n+"-"+r),null!=t&&p.push("offset"+n+"-"+t)})),b.length||b.push(v),i.a.createElement(f,Object(r.a)({},u,{ref:a,className:n.a.apply(void 0,[c].concat(b,p))}))}));f.displayName="Col",a.a=f},U1MP:function(e,a,t){"use strict";var r=t("wx14"),s=t("q1tI"),c=t.n(s),n=t("TSYQ"),l=t.n(n);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:l()(a.className,e)}))}))}},rcPh:function(e,a,t){"use strict";t.r(a);var r=t("KQm4"),s=t("q1tI"),c=t.n(s),n=t("Wbzz"),l=t("9eSz"),i=t.n(l),o=t("7vrA"),d=t("3Z9Z"),m=t("JI6e"),f=t("6xyR"),u=t("65eO"),v=t("ma3e"),b=t("kCIJ"),p=t("Bl7J"),x=t("vrFN"),N=t("f+Iu");const y=()=>{var e;const a=Object(b.useIntl)(),t=Object(n.useStaticQuery)("3609018353");(e=t.allDoctorListsCsv.nodes).push.apply(e,Object(r.a)(t.allDoctorListsCopyCsv.nodes));const s=t.allDoctorListsCsv.nodes.map(e=>e.Speciality);return c.a.createElement(p.a,null,c.a.createElement(x.a,{title:a.formatMessage({id:"Speciality"})+" | "+a.formatMessage({id:"siteMetaData.tagLine.Rajshahi"}),useDefault:!1,description:a.formatMessage({id:"List of All Doctor's Speciality"})+"-"+["Medicine","Gynaecology","Surgery","Orthopaedics","Paediatrics"].map(e=>a.formatMessage({id:e}))+" "+a.formatMessage({id:"more"})}),c.a.createElement(o.a,{fluid:!0,className:"p-0"},c.a.createElement("div",{className:"hero non-landing"},c.a.createElement(d.a,{noGutters:!0},c.a.createElement(m.a,{md:6,className:""},c.a.createElement("div",{className:"text-center"},c.a.createElement("h1",{className:"text-uppercase mt-5"},a.formatMessage({id:"List of All Doctor's Speciality"})))),c.a.createElement(m.a,{md:6},c.a.createElement(i.a,{fixed:t.img.childImageSharp.fixed})))),c.a.createElement("hr",{className:"w-75"}),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"med-section"},c.a.createElement("h3",{className:"text-center"},a.formatMessage({id:"Speciality"})),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"med-card"},N.flatMenu.map(e=>c.a.createElement("div",{className:"speciality",key:e},c.a.createElement(f.a,{style:{width:"18rem"},bg:"light",text:"dark"},c.a.createElement(f.a.Header,null,a.formatMessage({id:""+e})),c.a.createElement(f.a.Body,null,c.a.createElement(f.a.Title,null,c.a.createElement(v.x,{size:"36px"}),a.formatMessage({id:"Doctors Found"})," ",c.a.createElement(u.a,{variant:"warning"},s.filter(a=>a===e).length)),c.a.createElement(b.Link,{to:"/speciality/"+e.toLowerCase()+"/"},a.formatMessage({id:"Enter"})))))))),c.a.createElement("div",{className:"d-flex justify-content-center"}))))};a.default=c.a.memo(y)}}]);
//# sourceMappingURL=component---src-pages-speciality-js-58da818b61598c84aec2.js.map