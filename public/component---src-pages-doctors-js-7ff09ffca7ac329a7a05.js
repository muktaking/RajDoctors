(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+k61":function(e,a,t){"use strict";t.r(a);var n=t("Wbzz"),s=t("9eSz"),l=t.n(s),r=t("kCIJ"),c=t("q1tI"),i=t.n(c),o=t("7vrA"),m=t("3Z9Z"),d=t("JI6e"),u=t("xweI"),f=t.n(u),p=t("I+5a"),h=t.n(p),v=t("AY9D"),g=0,b=function(e){var a=e.data;a.all.nodes=f()(a.all.nodes,["Rating"]).slice(1).reverse();var t=Object(r.useIntl)(),n=Math.ceil(a.all.nodes.length/10),s=Object(c.useState)(a.all.nodes.slice(g,g+6)),l=s[0],o=s[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"med-section"},i.a.createElement("h3",{className:"text-center"},t.formatMessage({id:"adl.Rajshahi"})),i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{className:"med-card"},i.a.createElement(v.a,{data:l}))),i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement(h.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",breakClassName:"break-me",pageCount:n,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var t=e.selected;g=6*t,o(a.all.nodes.slice(g,g+6))},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"})))},E=t("Bl7J"),N=t("vrFN");a.default=function(){var e=Object(r.useIntl)(),a=Object(n.useStaticQuery)("3719019635"),t='{\n    "@context": "https://schema.org",\n    "@type": "ItemList",\n    "itemListElement": ['+a.all.nodes.slice(0,3).map((function(e,a){return'\n   {"@type": "ListItem",\n   "position": "'+(a+1)+'",\n   "item": {\n    "@type": "Person",\n    "name": "'+e.Name.replace(/\*/,",")+'",\n    "url": "https://rajdoctors.com/doctor/'+e.fields.slug+'",\n    "jobTitle":"'+e.Designation.replace(/\*/,",")+'",\n    "worksFor": {\n      "@type": "Organization",\n      "name": "'+e.Institute.replace(/\*/,",")+'"\n    },\n    "telephone": "'+e.contact1.replace(/\*/,",")+'" \n   }}\n   '}))+"]\n  }";return i.a.createElement(E.a,null,i.a.createElement(N.a,{schema:t,title:e.formatMessage({id:"adl.Rajshahi"}),description:e.formatMessage({id:"seo.doctors.des.Rajshahi",defaultMessage:"Lists of all doctors with thier chamber location, duration and contact information at Rajshahi city in bangladesh"}),useDefault:!1}),i.a.createElement(o.a,{fluid:!0,className:"p-0"},i.a.createElement("div",{className:"hero non-landing"},i.a.createElement(m.a,{noGutters:!0},i.a.createElement(d.a,{md:6,className:""},i.a.createElement("div",{className:"text-center"},i.a.createElement("h1",{className:"text-uppercase mt-5"},e.formatMessage({id:"adl.Rajshahi"})))),i.a.createElement(d.a,{md:6},i.a.createElement(l.a,{fixed:a.img.childImageSharp.fixed})))),i.a.createElement("hr",{className:"w-75"}),i.a.createElement("div",{className:"main"},i.a.createElement(b,{data:a}))))}},"3Z9Z":function(e,a,t){"use strict";var n=t("wx14"),s=t("zLVn"),l=t("TSYQ"),r=t.n(l),c=t("q1tI"),i=t.n(c),o=t("vUet"),m=["bsPrefix","className","noGutters","as"],d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.noGutters,u=e.as,f=void 0===u?"div":u,p=Object(s.a)(e,m),h=Object(o.a)(t,"row"),v=h+"-cols",g=[];return d.forEach((function(e){var a,t=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&g.push(""+v+n+"-"+a)})),i.a.createElement(f,Object(n.a)({ref:a},p,{className:r.a.apply(void 0,[l,h,c&&"no-gutters"].concat(g))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},JI6e:function(e,a,t){"use strict";var n=t("wx14"),s=t("zLVn"),l=t("TSYQ"),r=t.n(l),c=t("q1tI"),i=t.n(c),o=t("vUet"),m=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,c=e.as,u=void 0===c?"div":c,f=Object(s.a)(e,m),p=Object(o.a)(t,"col"),h=[],v=[];return d.forEach((function(e){var a,t,n,s=f[e];if(delete f[e],"object"==typeof s&&null!=s){var l=s.span;a=void 0===l||l,t=s.offset,n=s.order}else a=s;var r="xs"!==e?"-"+e:"";a&&h.push(!0===a?""+p+r:""+p+r+"-"+a),null!=n&&v.push("order"+r+"-"+n),null!=t&&v.push("offset"+r+"-"+t)})),h.length||h.push(p),i.a.createElement(u,Object(n.a)({},f,{ref:a,className:r.a.apply(void 0,[l].concat(h,v))}))}));u.displayName="Col",a.a=u}}]);
//# sourceMappingURL=component---src-pages-doctors-js-7ff09ffca7ac329a7a05.js.map