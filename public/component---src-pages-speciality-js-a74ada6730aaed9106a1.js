(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"65eO":function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),s=t("q1tI"),i=t.n(s),o=t("vUet"),m=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.variant,s=e.pill,m=e.className,u=e.as,d=void 0===u?"span":u,f=Object(n.a)(e,["bsPrefix","variant","pill","className","as"]),p=Object(o.a)(t,"badge");return i.a.createElement(d,Object(r.a)({ref:a},f,{className:l()(m,p,s&&p+"-pill",c&&p+"-"+c)}))}));m.displayName="Badge",m.defaultProps={pill:!1},a.a=m},JI6e:function(e,a,t){"use strict";var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),s=t("q1tI"),i=t.n(s),o=t("vUet"),m=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.as,u=void 0===s?"div":s,d=Object(n.a)(e,["bsPrefix","className","as"]),f=Object(o.a)(t,"col"),p=[],v=[];return m.forEach((function(e){var a,t,r,n=d[e];if(delete d[e],"object"==typeof n&&null!=n){var c=n.span;a=void 0===c||c,t=n.offset,r=n.order}else a=n;var l="xs"!==e?"-"+e:"";a&&p.push(!0===a?""+f+l:""+f+l+"-"+a),null!=r&&v.push("order"+l+"-"+r),null!=t&&v.push("offset"+l+"-"+t)})),p.length||p.push(f),i.a.createElement(u,Object(r.a)({},d,{ref:a,className:l.a.apply(void 0,[c].concat(p,v))}))}));u.displayName="Col",a.a=u},U1MP:function(e,a,t){"use strict";var r=t("wx14"),n=t("q1tI"),c=t.n(n),l=t("TSYQ"),s=t.n(l);a.a=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(r.a)({},a,{ref:t,className:s()(a.className,e)}))}))}},YdCC:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var r=t("wx14"),n=t("zLVn"),c=t("TSYQ"),l=t.n(c),s=/-(.)/g;var i=t("q1tI"),o=t.n(i),m=t("vUet"),u=function(e){return e[0].toUpperCase()+(a=e,a.replace(s,(function(e,a){return a.toUpperCase()}))).slice(1);var a};function d(e,a){var t=void 0===a?{}:a,c=t.displayName,s=void 0===c?u(e):c,i=t.Component,d=t.defaultProps,f=o.a.forwardRef((function(a,t){var c=a.className,s=a.bsPrefix,u=a.as,d=void 0===u?i||"div":u,f=Object(n.a)(a,["className","bsPrefix","as"]),p=Object(m.a)(s,e);return o.a.createElement(d,Object(r.a)({ref:t,className:l()(c,p)},f))}));return f.defaultProps=d,f.displayName=s,f}},rcPh:function(e,a,t){"use strict";t.r(a);var r=t("q1tI"),n=t.n(r),c=t("Wbzz"),l=t("9eSz"),s=t.n(l),i=t("Bl7J"),o=t("vrFN"),m=t("7vrA"),u=t("3Z9Z"),d=t("JI6e"),f=t("6xyR"),p=t("65eO"),v=t("MYck"),E=t("ma3e");a.default=function(){var e=Object(c.useStaticQuery)("2717347498"),a=e.allDoctorListsCsv.nodes.map((function(e){return e.Speciality}));return n.a.createElement(i.a,null,n.a.createElement(o.a,{title:"Speciality",description:"Categories of All Speciality of Doctors"}),n.a.createElement(m.a,{fluid:!0,className:"p-0"},n.a.createElement("div",{className:"hero non-landing"},n.a.createElement(u.a,{noGutters:!0},n.a.createElement(d.a,{md:6,className:""},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",{className:"text-uppercase mt-5"},"Categories of All Speciality of Doctors"," "))),n.a.createElement(d.a,{md:6},n.a.createElement(s.a,{fixed:e.img.childImageSharp.fixed})))),n.a.createElement("hr",{className:"w-75"}),n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"med-section"},n.a.createElement("h3",{className:"text-center"},"All Speciality"),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"med-card"},v.flatMenu.map((function(e){return n.a.createElement("div",{className:"speciality",key:e},n.a.createElement(f.a,{style:{width:"18rem"},bg:"light",text:"dark"},n.a.createElement(f.a.Header,null,e),n.a.createElement(f.a.Body,null,n.a.createElement(f.a.Title,null,n.a.createElement(E.w,{size:"36px"}),"Doctors Found"," ",n.a.createElement(p.a,{variant:"warning"},a.filter((function(a){return a===e})).length)),n.a.createElement(c.Link,{to:"/speciality/"+e.toLowerCase()},"Enter"))))})))),n.a.createElement("div",{className:"d-flex justify-content-center"}))))}}}]);
//# sourceMappingURL=component---src-pages-speciality-js-a74ada6730aaed9106a1.js.map