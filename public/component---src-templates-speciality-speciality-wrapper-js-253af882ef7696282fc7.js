(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{rQp8:function(e,a,t){"use strict";t.r(a);var s=t("KQm4"),n=t("xweI"),l=t.n(n),o=t("kCIJ"),i=t("q1tI"),c=t.n(i),r=t("Bl7J"),m=t("vrFN"),d=t("f+Iu"),p=t("I+5a"),g=t.n(p),v=t("7vrA"),u=t("AY9D");let C=0;const b=e=>{let{speciality:a,data:t}=e;const s=Object(o.useIntl)(),n=Math.ceil(t.allDoctorListsCsv.nodes.length/6),{0:l,1:r}=Object(i.useState)(t.allDoctorListsCsv.nodes.slice(C,C+6));return c.a.createElement(v.a,{fluid:!0,className:"p-0"},c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"med-section"},c.a.createElement("h3",{className:"text-center"},s.formatMessage({id:"adl.Pabna"})+" "+s.formatMessage({id:""+(m=a,m.charAt(0).toUpperCase()+m.slice(1))})+"  "+s.formatMessage({id:"Speciality"})),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"med-card"},c.a.createElement(u.a,{data:l}))),c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement(g.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",breakClassName:"break-me",pageCount:n,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:e=>{let{selected:a}=e;C=6*a,r(t.allDoctorListsCsv.nodes.slice(C,C+6))},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))));var m};var h=c.a.memo(b);function y(e){return e.charAt(0).toUpperCase()+e.slice(1)}const L=e=>{var a;let{pageContext:t,data:n}=e;(a=n.allDoctorListsCsv.nodes).push.apply(a,Object(s.a)(n.allDoctorListsCopyCsv.nodes)),n.allDoctorListsCsv.nodes=l()(n.allDoctorListsCsv.nodes,["Rating"]).reverse();const i=Object(o.useIntl)();let p=t.Speciality.toLowerCase();p=d.menuWithSynonyms.filter(e=>e[0].toLowerCase()===p)[0].join(" and ");let g=n.allDoctorListsCsv.nodes.slice(0,3).reduce((e,a)=>e+(a.Name+"; "),"");g="en"===i.locale?"Top Doctors: "+g+" at rajshahi city in bangladesh":"- তাদের চেম্বারের লোকেশন, সময় ও সিরিয়লের নাম্বারসহ প্রয়োজনীয় তথ্য";const v='{\n    "@context": "https://schema.org",\n    "@type": "ItemList",\n    "itemListElement": ['+n.allDoctorListsCsv.nodes.slice(0,3).map((e,a)=>'\n   {"@type": "ListItem",\n   "position": "'+(a+1)+'",\n   "item": {\n    "@type": "Person",\n    "name": "'+e.Name.replace(/\*/,",")+'",\n    "url": "https://rajdoctors.com/doctor/'+e.fields.slug+'",\n    "jobTitle": "'+e.Designation.replace(/\*/,",")+'",\n    "worksFor": {\n      "@type": "Organization",\n      "name": "'+e.Institute.replace(/\*/,",")+'"\n    },\n    "telephone": "'+e.contact1.replace(/\*/,",")+'" \n   }}\n   ')+"]\n  }";return c.a.createElement(r.a,null,c.a.createElement(m.a,{schema:v,title:i.formatMessage({id:y(p)}),description:[i.formatMessage({id:"adl.Pabna"}),i.formatMessage({id:y(p)}),i.formatMessage({id:"Speciality"}),g].join(" ")}),c.a.createElement(h,{speciality:p,data:n}))};a.default=c.a.memo(L)}}]);
//# sourceMappingURL=component---src-templates-speciality-speciality-wrapper-js-253af882ef7696282fc7.js.map