(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{rAqR:function(e,a,t){"use strict";t.r(a);var l=t("KQm4"),c=t("kCIJ"),r=t("q1tI"),m=t.n(r),s=t("wx14"),n=t("zLVn"),i=t("TSYQ"),d=t.n(i),o=t("vUet"),p=["as","className","fluid","bsPrefix"],E=m.a.forwardRef((function(e,a){var t,l=e.as,c=void 0===l?"div":l,r=e.className,i=e.fluid,E=e.bsPrefix,g=Object(n.a)(e,p),h=((t={})[E=Object(o.a)(E,"jumbotron")]=!0,t[E+"-fluid"]=i,t);return m.a.createElement(c,Object(s.a)({ref:a},g,{className:d()(r,h)}))}));E.defaultProps={fluid:!1},E.displayName="Jumbotron";var g=E,h=t("65eO"),u=t("ma3e"),N=t("IYni"),f=t("M7K5"),b=t("AY9D"),v=(t("SeyW"),t("Bl7J")),x=t("vrFN"),M=t("gFwQ");a.default=Object(c.injectIntl)(e=>{var a;let{intl:t,pageContext:c,...r}=e;r.data.doc=r.data.doc?r.data.doc:r.data.docCopy,(a=r.data.docs.nodes).push.apply(a,Object(l.a)(r.data.docsCopy.nodes));const{uid:s,Name:n,Rating:i,Degree:d,Speciality:o,Designation:p,Institute:E,contact1:y,contact2:w,loc1:j,locDetail1:P,locDetail2:O,visitTime1:C,visitTime2:F,OpenTime1:S,fields:k,Protocol:D,Fee:z}=r.data.doc,I=r.data.docs.nodes.filter(e=>e.Speciality===r.data.doc.Speciality).slice(0,6),J='\n{\n  "@context": "https://schema.org/",\n  "@type": "Person",\n  "name": "'+n.replace(/\*/,",")+'",\n  "url": "https://rajdoctors.com/doctor/'+k.slug+'",\n  "image": "https://rajdoctors.com'+c.imgSrc+'",\n  "jobTitle": "'+p.replace(/\*/,",")+'",\n  "worksFor": {\n    "@type": "Organization",\n    "name": "'+E.replace(/\*/,",")+'"\n  },\n  "telephone": "'+y.replace(/\*/,",")+", "+w.replace(/\*/,",")+'"  \n}\n';return m.a.createElement(v.a,null,m.a.createElement(x.a,{title:n.replace(/\*/,",")+" | "+p.replace(/\*/,",")+" "+t.formatMessage({id:"at"})+" "+E.replace(/\*/,","),useDefault:!1,description:" "+o.replace(/\*/,",")+" "+t.formatMessage({id:"Specialist"})+". "+t.formatMessage({id:"chamber.contact-info"})+": "+y.replace(/\*/g,",")+", "+(w?w.replace(/\*/g,","):"")+", "+t.formatMessage({id:"chamber.location"})+": "+P.replace(/\*/g,",")+" "+t.formatMessage({id:"chamber.time"})+": "+C.replace(/\*/g,",")+" "+t.formatMessage({id:"arcib.Barisal"}),schema:J}),m.a.createElement(g,{className:"mt-3"},m.a.createElement("div",{className:"doctor-heading"},m.a.createElement("div",{className:"avatar ml-5 mb-2"},m.a.createElement(f.a,{height:"200",width:"200",img:s})),m.a.createElement("h1",null,n),m.a.createElement("p",null,m.a.createElement(h.a,{variant:"warning"},d.replace(/\*/,",")),m.a.createElement(h.a,{pill:!0,variant:"dark",className:"rating ml-3"},m.a.createElement(u.z,null),m.a.createElement("span",{className:"pl-2"},i&&i)))),m.a.createElement("div",{className:"doctor-body px-3 pt-1"},m.a.createElement("div",{className:"designation"},m.a.createElement("h5",null,t.formatMessage({id:"designation"})),m.a.createElement("p",{className:"text-muted pl-3"},p.replace(/\*/,",")+" "+t.formatMessage({id:"at"})+" "+E.replace(/\*/,","))),m.a.createElement("div",{className:"chamber"},m.a.createElement("h5",null,t.formatMessage({id:"ci"})),m.a.createElement("div",{className:"pl-3 d-flex flex-wrap justify-content-start mt-2"},m.a.createElement("div",{className:"card bg-light mb-3 mr-3",style:{maxWidth:"22rem"}},m.a.createElement("div",{className:"card-header"},t.formatMessage({id:"chamber.one"})),m.a.createElement("div",{className:"card-body"},m.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.contact-info"})),m.a.createElement("p",{className:"card-text"},y.split("*").map(e=>m.a.createElement(m.a.Fragment,null,m.a.createElement("a",{href:"tel:"+e},m.a.createElement(u.v,{size:"1.4rem"})," ",e),m.a.createElement("br",null)))),m.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.location"})),m.a.createElement("p",{className:"card-text"},j.replace(/\*/g,",")),m.a.createElement("p",{className:"card-text"},P.replace(/\*/g,",")),m.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.time"})),m.a.createElement("p",{className:"card-text"},C.replace(/\*/g,",")),m.a.createElement("p",{className:"card-text"},S.replace(/\*/g,",")),m.a.createElement("h5",{className:"card-title"},"Chamber Protocol"),m.a.createElement("p",null,D?D.replace(/\*/g,","):"Please phone to provided number to book a serial"),m.a.createElement("h5",{className:"card-title"},"Consultation Fee"),m.a.createElement("p",null,z?z.replace(/\*/g,","):"Please phone to provided number."))),O&&m.a.createElement("div",{className:"card bg-light mb-3",style:{maxWidth:"22rem"}},m.a.createElement("div",{className:"card-header"},t.formatMessage({id:"chamber.two"})),m.a.createElement("div",{className:"card-body"},m.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.contact-info"})),m.a.createElement("p",{className:"card-text"},w.split("*").map(e=>m.a.createElement(m.a.Fragment,null,m.a.createElement("a",{href:"tel:"+e},m.a.createElement(u.v,{size:"1.4rem"})," ",e),m.a.createElement("br",null)))),m.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.location"})),m.a.createElement("p",{className:"card-text"},O.replace(/\*/g,",")),m.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.time"})),m.a.createElement("p",{className:"card-text"},F.replace(/\*/g,",")),m.a.createElement("h5",{className:"card-title"},"Chamber Protocol"),m.a.createElement("p",null,D.replace(/\*/g,","))))))),m.a.createElement(M.a,null),m.a.createElement("br",null),m.a.createElement(N.a,null),m.a.createElement("div",{className:"main"},m.a.createElement("div",{className:"med-section"},m.a.createElement("h3",{className:"text-center"},"You may find helpful"),m.a.createElement("div",{className:"divider"}),m.a.createElement("div",{className:"med-card"},m.a.createElement(b.a,{data:I,index:!0}))))))})}}]);
//# sourceMappingURL=component---src-templates-doctor-doctor-js-0519905f27add33ce15a.js.map