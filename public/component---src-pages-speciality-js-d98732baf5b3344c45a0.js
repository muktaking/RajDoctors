(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"3Z9Z":function(e,a,t){"use strict";var s=t("wx14"),r=t("zLVn"),n=t("TSYQ"),l=t.n(n),c=t("q1tI"),i=t.n(c),o=t("vUet"),m=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.noGutters,f=e.as,u=void 0===f?"div":f,p=Object(r.a)(e,m),v=Object(o.a)(t,"row"),E=v+"-cols",N=[];return d.forEach((function(e){var a,t=p[e];delete p[e];var s="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&N.push(""+E+s+"-"+a)})),i.a.createElement(u,Object(s.a)({ref:a},p,{className:l.a.apply(void 0,[n,v,c&&"no-gutters"].concat(N))}))}));f.displayName="Row",f.defaultProps={noGutters:!1},a.a=f},"65eO":function(e,a,t){"use strict";var s=t("wx14"),r=t("zLVn"),n=t("TSYQ"),l=t.n(n),c=t("q1tI"),i=t.n(c),o=t("vUet"),m=["bsPrefix","variant","pill","className","as"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,c=e.pill,d=e.className,f=e.as,u=void 0===f?"span":f,p=Object(r.a)(e,m),v=Object(o.a)(t,"badge");return i.a.createElement(u,Object(s.a)({ref:a},p,{className:l()(d,v,c&&v+"-pill",n&&v+"-"+n)}))}));d.displayName="Badge",d.defaultProps={pill:!1},a.a=d},"7vrA":function(e,a,t){"use strict";var s=t("wx14"),r=t("zLVn"),n=t("TSYQ"),l=t.n(n),c=t("q1tI"),i=t.n(c),o=t("vUet"),m=["bsPrefix","fluid","as","className"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.fluid,c=e.as,d=void 0===c?"div":c,f=e.className,u=Object(r.a)(e,m),p=Object(o.a)(t,"container"),v="string"==typeof n?"-"+n:"-fluid";return i.a.createElement(d,Object(s.a)({ref:a},u,{className:l()(f,n?""+p+v:p)}))}));d.displayName="Container",d.defaultProps={fluid:!1},a.a=d},JI6e:function(e,a,t){"use strict";var s=t("wx14"),r=t("zLVn"),n=t("TSYQ"),l=t.n(n),c=t("q1tI"),i=t.n(c),o=t("vUet"),m=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],f=i.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,c=e.as,f=void 0===c?"div":c,u=Object(r.a)(e,m),p=Object(o.a)(t,"col"),v=[],E=[];return d.forEach((function(e){var a,t,s,r=u[e];if(delete u[e],"object"==typeof r&&null!=r){var n=r.span;a=void 0===n||n,t=r.offset,s=r.order}else a=r;var l="xs"!==e?"-"+e:"";a&&v.push(!0===a?""+p+l:""+p+l+"-"+a),null!=s&&E.push("order"+l+"-"+s),null!=t&&E.push("offset"+l+"-"+t)})),v.length||v.push(p),i.a.createElement(f,Object(s.a)({},u,{ref:a,className:l.a.apply(void 0,[n].concat(v,E))}))}));f.displayName="Col",a.a=f},rcPh:function(e,a,t){"use strict";t.r(a);var s=t("q1tI"),r=t.n(s),n=t("Wbzz"),l=t("9eSz"),c=t.n(l),i=t("7vrA"),o=t("3Z9Z"),m=t("JI6e"),d=t("6xyR"),f=t("65eO"),u=t("ma3e"),p=t("kCIJ"),v=t("Bl7J"),E=t("vrFN"),N=t("f+Iu"),b=function(){var e=Object(p.useIntl)(),a=Object(n.useStaticQuery)("1239358583"),t=a.allDoctorListsCsv.nodes.map((function(e){return e.Speciality}));return r.a.createElement(v.a,null,r.a.createElement(E.a,{title:e.formatMessage({id:"Speciality"})+" | "+e.formatMessage({id:"siteMetaData.tagLine.Rajshahi"}),useDefault:!1,description:e.formatMessage({id:"List of All Doctor's Speciality"})+"-"+["Medicine","Gynaecology","Surgery","Orthopaedics","Paediatrics"].map((function(a){return e.formatMessage({id:a})}))+" "+e.formatMessage({id:"more"})}),r.a.createElement(i.a,{fluid:!0,className:"p-0"},r.a.createElement("div",{className:"hero non-landing"},r.a.createElement(o.a,{noGutters:!0},r.a.createElement(m.a,{md:6,className:""},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"text-uppercase mt-5"},e.formatMessage({id:"List of All Doctor's Speciality"})))),r.a.createElement(m.a,{md:6},r.a.createElement(c.a,{fixed:a.img.childImageSharp.fixed})))),r.a.createElement("hr",{className:"w-75"}),r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"med-section"},r.a.createElement("h3",{className:"text-center"},e.formatMessage({id:"Speciality"})),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"med-card"},N.flatMenu.map((function(a){return r.a.createElement("div",{className:"speciality",key:a},r.a.createElement(d.a,{style:{width:"18rem"},bg:"light",text:"dark"},r.a.createElement(d.a.Header,null,e.formatMessage({id:""+a})),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,r.a.createElement(u.x,{size:"36px"}),e.formatMessage({id:"Doctors Found"})," ",r.a.createElement(f.a,{variant:"warning"},t.filter((function(e){return e===a})).length)),r.a.createElement(p.Link,{to:"/speciality/"+a.toLowerCase()+"/"},e.formatMessage({id:"Enter"})))))})))),r.a.createElement("div",{className:"d-flex justify-content-center"}))))};a.default=r.a.memo(b)}}]);
//# sourceMappingURL=component---src-pages-speciality-js-d98732baf5b3344c45a0.js.map