(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+k61":function(e,a,t){"use strict";t.r(a);var s=t("KQm4"),n=t("Wbzz"),l=t("9eSz"),c=t.n(l),r=t("kCIJ"),o=t("q1tI"),i=t.n(o),m=t("7vrA"),d=t("3Z9Z"),u=t("JI6e"),p=t("xweI"),f=t.n(p),h=t("I+5a"),v=t.n(h),b=t("AY9D");let g=0;var E=e=>{let{data:a}=e;a.all.nodes=f()(a.all.nodes,["Rating"]).slice(1).reverse();const t=Object(r.useIntl)(),s=Math.ceil(a.all.nodes.length/10),{0:n,1:l}=Object(o.useState)(a.all.nodes.slice(g,g+6));return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"med-section"},i.a.createElement("h3",{className:"text-center"},t.formatMessage({id:"adl.Rajshahi"})),i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{className:"med-card"},i.a.createElement(b.a,{data:n}))),i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(v.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",breakClassName:"break-me",pageCount:s,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{let{selected:t}=e;g=6*t,l(a.all.nodes.slice(g,g+6))},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))},N=t("Bl7J"),j=t("vrFN");a.default=()=>{var e;const a=Object(r.useIntl)(),t=Object(n.useStaticQuery)("956939428");(e=t.all.nodes).push.apply(e,Object(s.a)(t.allCopy.nodes));const l='{\n    "@context": "https://schema.org",\n    "@type": "ItemList",\n    "itemListElement": ['+t.all.nodes.slice(0,3).map((e,a)=>'\n   {"@type": "ListItem",\n   "position": "'+(a+1)+'",\n   "item": {\n    "@type": "Person",\n    "name": "'+e.Name.replace(/\*/,",")+'",\n    "url": "https://rajdoctors.com/doctor/'+e.fields.slug+'",\n    "jobTitle":"'+e.Designation.replace(/\*/,",")+'",\n    "worksFor": {\n      "@type": "Organization",\n      "name": "'+e.Institute.replace(/\*/,",")+'"\n    },\n    "telephone": "'+e.contact1.replace(/\*/,",")+'" \n   }}\n   ')+"]\n  }";return i.a.createElement(N.a,null,i.a.createElement(j.a,{schema:l,title:a.formatMessage({id:"adl.Rajshahi"}),description:a.formatMessage({id:"seo.doctors.des.Rajshahi",defaultMessage:"Lists of all doctors with thier chamber location, duration and contact information at Rajshahi city in bangladesh"}),useDefault:!1}),i.a.createElement(m.a,{fluid:!0,className:"p-0"},i.a.createElement("div",{className:"hero non-landing"},i.a.createElement(d.a,{noGutters:!0},i.a.createElement(u.a,{md:6,className:""},i.a.createElement("div",{className:"text-center"},i.a.createElement("h1",{className:"text-uppercase mt-5"},a.formatMessage({id:"adl.Rajshahi"})))),i.a.createElement(u.a,{md:6},i.a.createElement(c.a,{fixed:t.img.childImageSharp.fixed})))),i.a.createElement("hr",{className:"w-75"}),i.a.createElement("div",{className:"main"},i.a.createElement(E,{data:t}))))}},"3Z9Z":function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),l=t("TSYQ"),c=t.n(l),r=t("q1tI"),o=t.n(r),i=t("vUet"),m=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,r=e.noGutters,u=e.as,p=void 0===u?"div":u,f=Object(n.a)(e,m),h=Object(i.a)(t,"row"),v=h+"-cols",b=[];return d.forEach((function(e){var a,t=f[e];delete f[e];var s="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&b.push(""+v+s+"-"+a)})),o.a.createElement(p,Object(s.a)({ref:a},f,{className:c.a.apply(void 0,[l,h,r&&"no-gutters"].concat(b))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},JI6e:function(e,a,t){"use strict";var s=t("wx14"),n=t("zLVn"),l=t("TSYQ"),c=t.n(l),r=t("q1tI"),o=t.n(r),i=t("vUet"),m=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,r=e.as,u=void 0===r?"div":r,p=Object(n.a)(e,m),f=Object(i.a)(t,"col"),h=[],v=[];return d.forEach((function(e){var a,t,s,n=p[e];if(delete p[e],"object"==typeof n&&null!=n){var l=n.span;a=void 0===l||l,t=n.offset,s=n.order}else a=n;var c="xs"!==e?"-"+e:"";a&&h.push(!0===a?""+f+c:""+f+c+"-"+a),null!=s&&v.push("order"+c+"-"+s),null!=t&&v.push("offset"+c+"-"+t)})),h.length||h.push(f),o.a.createElement(u,Object(s.a)({},p,{ref:a,className:c.a.apply(void 0,[l].concat(h,v))}))}));u.displayName="Col",a.a=u}}]);
//# sourceMappingURL=component---src-pages-doctors-js-b4d6a3f915cedd655a52.js.map