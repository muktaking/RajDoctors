(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{rAqR:function(e,a,t){"use strict";t.r(a);var l=t("zLVn"),c=t("kCIJ"),r=t("q1tI"),n=t.n(r),m=t("wx14"),s=t("TSYQ"),i=t.n(s),d=t("vUet"),o=["as","className","fluid","bsPrefix"],p=n.a.forwardRef((function(e,a){var t,c=e.as,r=void 0===c?"div":c,s=e.className,p=e.fluid,E=e.bsPrefix,g=Object(l.a)(e,o),h=((t={})[E=Object(d.a)(E,"jumbotron")]=!0,t[E+"-fluid"]=p,t);return n.a.createElement(r,Object(m.a)({ref:a},g,{className:i()(s,h)}))}));p.defaultProps={fluid:!1},p.displayName="Jumbotron";var E=p,g=t("65eO"),h=t("ma3e"),u=t("IYni"),f=t("M7K5"),b=t("AY9D"),N=(t("SeyW"),t("Bl7J")),v=t("vrFN"),x=t("gFwQ"),M=["intl","pageContext"];a.default=Object(c.injectIntl)((function(e){var a=e.intl,t=e.pageContext,c=Object(l.a)(e,M),r=c.data.doc,m=r.uid,s=r.Name,i=r.Rating,d=r.Degree,o=r.Speciality,p=r.Designation,y=r.Institute,w=r.contact1,j=r.contact2,P=r.locDetail1,S=r.locDetail2,k=r.visitTime1,D=r.visitTime2,F=r.fields,O=r.Protocol,C=r.Fee,I=c.data.docs.nodes.filter((function(e){return e.Speciality===c.data.doc.Speciality})).slice(0,6),z='\n{\n  "@context": "https://schema.org/",\n  "@type": "Person",\n  "name": "'+s.replace(/\*/,",")+'",\n  "url": "https://rajdoctors.com/doctor/'+F.slug+'",\n  "image": "https://rajdoctors.com'+t.imgSrc+'",\n  "jobTitle": "'+p.replace(/\*/,",")+'",\n  "worksFor": {\n    "@type": "Organization",\n    "name": "'+y.replace(/\*/,",")+'"\n  },\n  "telephone": "'+w.replace(/\*/,",")+", "+j.replace(/\*/,",")+'"  \n}\n';return n.a.createElement(N.a,null,n.a.createElement(v.a,{title:s.replace(/\*/,",")+" | "+p.replace(/\*/,",")+" "+a.formatMessage({id:"at"})+" "+y.replace(/\*/,","),useDefault:!1,description:" "+o.replace(/\*/,",")+" "+a.formatMessage({id:"Specialist"})+". "+a.formatMessage({id:"chamber.contact-info"})+": "+w.replace(/\*/g,",")+", "+(j?j.replace(/\*/g,","):"")+", "+a.formatMessage({id:"chamber.location"})+": "+P.replace(/\*/g,",")+" "+a.formatMessage({id:"chamber.time"})+": "+k.replace(/\*/g,",")+" "+a.formatMessage({id:"at rajshahi city in bangladesh"}),schema:z}),n.a.createElement(E,null,n.a.createElement("div",{className:"doctor-heading"},n.a.createElement("div",{className:"avatar ml-5 mb-2"},n.a.createElement(f.a,{height:"200",width:"200",img:m})),n.a.createElement("h1",null,s),n.a.createElement("p",null,n.a.createElement(g.a,{variant:"warning"},d.replace(/\*/,",")),n.a.createElement(g.a,{pill:!0,variant:"dark",className:"rating ml-3"},n.a.createElement(h.z,null),n.a.createElement("span",{className:"pl-2"},i&&i)))),n.a.createElement("div",{className:"doctor-body px-3 pt-1"},n.a.createElement("div",{className:"designation"},n.a.createElement("h5",null,a.formatMessage({id:"designation"})),n.a.createElement("p",{className:"text-muted pl-3"},p.replace(/\*/,",")+" "+a.formatMessage({id:"at"})+" "+y.replace(/\*/,","))),n.a.createElement("div",{className:"chamber"},n.a.createElement("h5",null,a.formatMessage({id:"ci"})),n.a.createElement("div",{className:"pl-3 d-flex flex-wrap justify-content-start mt-2"},n.a.createElement("div",{className:"card bg-light mb-3 mr-3",style:{maxWidth:"22rem"}},n.a.createElement("div",{className:"card-header"},a.formatMessage({id:"chamber.one"})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},a.formatMessage({id:"chamber.contact-info"})),n.a.createElement("p",{className:"card-text"},w.split("*").map((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:"tel:"+e},n.a.createElement(h.v,{size:"1.4rem"})," ",e),n.a.createElement("br",null))}))),n.a.createElement("h5",{className:"card-title"},a.formatMessage({id:"chamber.location"})),n.a.createElement("p",{className:"card-text"},P.replace(/\*/g,",")),n.a.createElement("h5",{className:"card-title"},a.formatMessage({id:"chamber.time"})),n.a.createElement("p",{className:"card-text"},k.replace(/\*/g,",")),n.a.createElement("h5",{className:"card-title"},"Chamber Protocol"),n.a.createElement("p",null,O?O.replace(/\*/g,","):"Please phone to provided number to book a serial"),n.a.createElement("h5",{className:"card-title"},"Consultation Fee"),n.a.createElement("p",null,C?C.replace(/\*/g,","):"Please phone to provided number."))),S&&n.a.createElement("div",{className:"card bg-light mb-3",style:{maxWidth:"22rem"}},n.a.createElement("div",{className:"card-header"},a.formatMessage({id:"chamber.two"})),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},a.formatMessage({id:"chamber.contact-info"})),n.a.createElement("p",{className:"card-text"},j.split("*").map((function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:"tel:"+e},n.a.createElement(h.v,{size:"1.4rem"})," ",e),n.a.createElement("br",null))}))),n.a.createElement("h5",{className:"card-title"},a.formatMessage({id:"chamber.location"})),n.a.createElement("p",{className:"card-text"},S.replace(/\*/g,",")),n.a.createElement("h5",{className:"card-title"},a.formatMessage({id:"chamber.time"})),n.a.createElement("p",{className:"card-text"},D.replace(/\*/g,",")),n.a.createElement("h5",{className:"card-title"},"Chamber Protocol"),n.a.createElement("p",null,O.replace(/\*/g,","))))))),n.a.createElement(x.a,null),n.a.createElement(u.a,{title:"Pakhighor- Get you pet birds",contact:"01701256115",imgData:c.data.img.childImageSharp.fluid}),n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"med-section"},n.a.createElement("h3",{className:"text-center"},"You may find helpful"),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"med-card"},n.a.createElement(b.a,{data:I,index:!0}))))))}))}}]);
//# sourceMappingURL=component---src-templates-doctor-doctor-js-ae6a53471e2754992abf.js.map