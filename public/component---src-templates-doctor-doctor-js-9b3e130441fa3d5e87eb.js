(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{AY9D:function(e,a,t){"use strict";var l=t("KQm4"),r=t("Wbzz"),n=t("kCIJ"),c=t("q1tI"),i=t.n(c),m=t("IYni"),s=t("6xyR"),o=t("65eO"),d=t("ma3e"),u=t("M7K5"),p=t("SeyW");var f=e=>{let{name:a,rating:t,speciality:l,contact:r,location:c,time:m,link:f,uid:g,index:h}=e;const E=Object(n.useIntl)();return i.a.createElement(s.a,{style:{width:"24rem"}},i.a.createElement(s.a.Body,null,i.a.createElement(o.a,{pill:!0,variant:"dark",className:"rating ml-2 mb-3 float-right"},i.a.createElement(d.z,{size:"2em"}),i.a.createElement("span",{className:"pr-1"},t&&t)),i.a.createElement(s.a.Title,{className:"d-flex align-items-center"},i.a.createElement(u.a,{img:g}),i.a.createElement("span",null,a.trim().replace(/\*/g,","))),i.a.createElement("hr",null),i.a.createElement(s.a.Subtitle,{className:"d-flex align-items-center text-muted pl-1"},i.a.createElement(d.A,null),i.a.createElement(o.a,{variant:"light",className:"doctor-item-content"},l.trim().replace(/\*/g,","))),i.a.createElement("div",{className:"pl-1"},i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement(d.a,null),i.a.createElement(o.a,{className:"doctor-item-content"},r.split("*").map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement("a",{href:"tel:"+e},e)," ",i.a.createElement("br",null))))),!h&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement(d.o,null),i.a.createElement(o.a,{className:"doctor-item-content"},c.trim().replace(/\*/g,","))),i.a.createElement("div",{className:"d-flex align-items-center "},i.a.createElement(d.p,null),i.a.createElement(o.a,{className:"doctor-item-content"},m.trim().replace(/\*/g,","))))),i.a.createElement("br",null),i.a.createElement("div",{className:"d-flex justify-content-between"},i.a.createElement(n.Link,{to:"/doctor/"+f+"/"},E.formatMessage({id:"more"})),!h&&i.a.createElement(p.a,{uid:g}))))};a.a=e=>{var a;let{speciality:t,data:c,index:s}=e;const o=Object(r.useStaticQuery)("3145002382"),d=Object(n.useIntl)();return(a=o.all.nodes).push.apply(a,Object(l.a)(o.allCopy.nodes)),c.map((e,a)=>{const l=o.all.nodes.filter(a=>a.uid===e.uid&&a.lang===d.locale)[0];if(void 0===l)return;return i.a.createElement(i.a.Fragment,null,"medicine"===t&&a%2==0&&0!==a?i.a.createElement(m.a,null):null,i.a.createElement(f,{key:a,name:l?l.Name:"",rating:l.Rating,speciality:l.Degree,contact:l.contact1,location:l.loc1,time:l.visitTime1,link:l.fields.slug+"_"+l.uid,uid:l.uid,index:s}))})}},M7K5:function(e,a,t){"use strict";var l=t("q1tI"),r=t.n(l),n=t("Wbzz"),c=t("9eSz"),i=t.n(c);a.a=e=>{let{img:a,height:t,width:l}=e;const c=Object(n.useStaticQuery)("674953758");a&&(a=c.allImg.edges.filter(e=>{let{node:t}=e;return t.relativePath.includes("doctor/"+a+"_")}));const m={src:a.length>0?a[0].node.childImageSharp.fixed:c.img.childImageSharp.fixed,height:t||65,width:l||65};return r.a.createElement(i.a,{fixed:m.src,style:{width:m.width+"px",height:m.height+"px",marginRight:"10px"}})}},SeyW:function(e,a,t){"use strict";t("vDqi"),t("KYPV"),t("Wbzz");var l=t("q1tI"),r=t.n(l),n=t("wx14"),c=t("zLVn"),i=t("dI71"),m=t("RjgW"),s=t("Vhrh"),o=t("B8pp"),d=(t("2W6z"),t("y8DL")),u=t("33TZ"),p=["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"],f=function(e){function a(){return e.apply(this,arguments)||this}return Object(i.a)(a,e),a.prototype.render=function(){return this.props.children},a}(r.a.Component);function g(e,a,t){var l=a[0],r=l.currentTarget,n=l.relatedTarget||l.nativeEvent[t];n&&n===r||Object(m.a)(r,n)||e.apply(void 0,a)}function h(e){var a=e.trigger,t=e.overlay,i=e.children,m=e.popperConfig,h=void 0===m?{}:m,E=e.show,b=e.defaultShow,v=void 0!==b&&b,N=e.onToggle,y=e.delay,j=e.placement,x=e.flip,O=void 0===x?j&&-1!==j.indexOf("auto"):x,w=Object(c.a)(e,p),k=Object(l.useRef)(null),M=Object(s.a)(),C=Object(l.useRef)(""),I=Object(d.b)(E,v,N),S=I[0],T=I[1],z=function(e){return e&&"object"==typeof e?e:{show:e,hide:e}}(y),F="function"!=typeof i?r.a.Children.only(i).props:{},D=F.onFocus,P=F.onBlur,A=F.onClick,R=Object(l.useCallback)((function(){return Object(o.a)(k.current)}),[]),W=Object(l.useCallback)((function(){M.clear(),C.current="show",z.show?M.set((function(){"show"===C.current&&T(!0)}),z.show):T(!0)}),[z.show,T,M]),J=Object(l.useCallback)((function(){M.clear(),C.current="hide",z.hide?M.set((function(){"hide"===C.current&&T(!1)}),z.hide):T(!1)}),[z.hide,T,M]),q=Object(l.useCallback)((function(){W();for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];null==D||D.apply(void 0,a)}),[W,D]),Q=Object(l.useCallback)((function(){J();for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];null==P||P.apply(void 0,a)}),[J,P]),Y=Object(l.useCallback)((function(){T(!S),A&&A.apply(void 0,arguments)}),[A,T,S]),B=Object(l.useCallback)((function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];g(W,a,"fromElement")}),[W]),K=Object(l.useCallback)((function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];g(J,a,"toElement")}),[J]),L=null==a?[]:[].concat(a),V={};return-1!==L.indexOf("click")&&(V.onClick=Y),-1!==L.indexOf("focus")&&(V.onFocus=q,V.onBlur=Q),-1!==L.indexOf("hover")&&(V.onMouseOver=B,V.onMouseOut=K),r.a.createElement(r.a.Fragment,null,"function"==typeof i?i(Object(n.a)({},V,{ref:k})):r.a.createElement(f,{ref:k},Object(l.cloneElement)(i,V)),r.a.createElement(u.a,Object(n.a)({},w,{show:S,onHide:J,flip:O,placement:j,popperConfig:h,target:R}),t))}h.defaultProps={defaultShow:!1,trigger:["hover","focus"]};var E=h,b=t("AINe"),v=t("ma3e");a.a=e=>{let{className:a}=e;return r.a.createElement(E,{placement:"top",overlay:r.a.createElement(b.a,null,"Flag as Wrong Information")},r.a.createElement("div",{style:{display:"inline",fontSize:".8rem"},className:a||" text-muted flag p-1"},r.a.createElement("a",{target:"_blank",href:"https://docs.google.com/forms/d/e/1FAIpQLSfDslDpr2AZeJAwGjj3c3ye5TbRmujPuk3ttIhSnP5xFTrcBg/viewform"},"( For wrong Info ",r.a.createElement(v.j,{size:36}),")")))}},Vhrh:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var l=t("q1tI"),r=t("XcHJ");function n(e){var a,t,r=(a=e,(t=Object(l.useRef)(a)).current=a,t);Object(l.useEffect)((function(){return function(){return r.current()}}),[])}var c=Math.pow(2,31)-1;function i(){var e=Object(r.a)(),a=Object(l.useRef)();return n((function(){return clearTimeout(a.current)})),Object(l.useMemo)((function(){var t=function(){return clearTimeout(a.current)};return{set:function(l,r){void 0===r&&(r=0),e()&&(t(),r<=c?a.current=setTimeout(l,r):function e(a,t,l){var r=l-Date.now();a.current=r<=c?setTimeout(t,r):setTimeout((function(){return e(a,t,l)}),c)}(a,l,Date.now()+r))},clear:t}}),[])}},rAqR:function(e,a,t){"use strict";t.r(a);var l=t("KQm4"),r=t("kCIJ"),n=t("q1tI"),c=t.n(n),i=t("wx14"),m=t("zLVn"),s=t("TSYQ"),o=t.n(s),d=t("vUet"),u=["as","className","fluid","bsPrefix"],p=c.a.forwardRef((function(e,a){var t,l=e.as,r=void 0===l?"div":l,n=e.className,s=e.fluid,p=e.bsPrefix,f=Object(m.a)(e,u),g=((t={})[p=Object(d.a)(p,"jumbotron")]=!0,t[p+"-fluid"]=s,t);return c.a.createElement(r,Object(i.a)({ref:a},f,{className:o()(n,g)}))}));p.defaultProps={fluid:!1},p.displayName="Jumbotron";var f=p,g=t("65eO"),h=t("ma3e"),E=t("IYni"),b=t("M7K5"),v=t("AY9D"),N=(t("SeyW"),t("Bl7J")),y=t("vrFN"),j=t("gFwQ");a.default=Object(r.injectIntl)(e=>{var a;let{intl:t,pageContext:r,...n}=e;n.data.doc=n.data.doc?n.data.doc:n.data.docCopy,(a=n.data.docs.nodes).push.apply(a,Object(l.a)(n.data.docsCopy.nodes));const{uid:i,Name:m,Rating:s,Degree:o,Speciality:d,Designation:u,Institute:p,contact1:x,contact2:O,loc1:w,locDetail1:k,locDetail2:M,visitTime1:C,visitTime2:I,OpenTime1:S,fields:T,Protocol:z,Fee:F}=n.data.doc,D=n.data.docs.nodes.filter(e=>e.Speciality===n.data.doc.Speciality).slice(0,6),P='\n{\n  "@context": "https://schema.org/",\n  "@type": "Person",\n  "name": "'+m.replace(/\*/,",")+'",\n  "url": "https://rajdoctors.com/doctor/'+T.slug+'",\n  "image": "https://rajdoctors.com'+r.imgSrc+'",\n  "jobTitle": "'+u.replace(/\*/,",")+'",\n  "worksFor": {\n    "@type": "Organization",\n    "name": "'+p.replace(/\*/,",")+'"\n  },\n  "telephone": "'+x.replace(/\*/,",")+", "+O.replace(/\*/,",")+'"  \n}\n';return c.a.createElement(N.a,null,c.a.createElement(y.a,{title:m.replace(/\*/,",")+" | "+u.replace(/\*/,",")+" "+t.formatMessage({id:"at"})+" "+p.replace(/\*/,","),useDefault:!1,description:" "+d.replace(/\*/,",")+" "+t.formatMessage({id:"Specialist"})+". "+t.formatMessage({id:"chamber.contact-info"})+": "+x.replace(/\*/g,",")+", "+(O?O.replace(/\*/g,","):"")+", "+t.formatMessage({id:"chamber.location"})+": "+k.replace(/\*/g,",")+" "+t.formatMessage({id:"chamber.time"})+": "+C.replace(/\*/g,",")+" "+t.formatMessage({id:"arcib.Dhaka"}),schema:P}),c.a.createElement(f,{className:"mt-3"},c.a.createElement("div",{className:"doctor-heading"},c.a.createElement("div",{className:"avatar ml-5 mb-2"},c.a.createElement(b.a,{height:"200",width:"200",img:i})),c.a.createElement("h1",null,m),c.a.createElement("p",null,c.a.createElement(g.a,{variant:"warning"},o.replace(/\*/,",")),c.a.createElement(g.a,{pill:!0,variant:"dark",className:"rating ml-3"},c.a.createElement(h.z,null),c.a.createElement("span",{className:"pl-2"},s&&s)))),c.a.createElement("div",{className:"doctor-body px-3 pt-1"},c.a.createElement("div",{className:"designation"},c.a.createElement("h5",null,t.formatMessage({id:"designation"})),c.a.createElement("p",{className:"text-muted pl-3"},u.replace(/\*/,",")+" "+t.formatMessage({id:"at"})+" "+p.replace(/\*/,","))),c.a.createElement("div",{className:"chamber"},c.a.createElement("h5",null,t.formatMessage({id:"ci"})),c.a.createElement("div",{className:"pl-3 d-flex flex-wrap justify-content-start mt-2"},c.a.createElement("div",{className:"card bg-light mb-3 mr-3",style:{maxWidth:"22rem"}},c.a.createElement("div",{className:"card-header"},t.formatMessage({id:"chamber.one"})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.contact-info"})),c.a.createElement("p",{className:"card-text"},x.split("*").map(e=>c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:"tel:"+e},c.a.createElement(h.v,{size:"1.4rem"})," ",e),c.a.createElement("br",null)))),c.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.location"})),c.a.createElement("p",{className:"card-text"},w.replace(/\*/g,",")),c.a.createElement("p",{className:"card-text"},k.replace(/\*/g,",")),c.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.time"})),c.a.createElement("p",{className:"card-text"},C.replace(/\*/g,",")),c.a.createElement("p",{className:"card-text"},S.replace(/\*/g,",")),c.a.createElement("h5",{className:"card-title"},"Chamber Protocol"),c.a.createElement("p",null,z?z.replace(/\*/g,","):"Please phone to provided number to book a serial"),c.a.createElement("h5",{className:"card-title"},"Consultation Fee"),c.a.createElement("p",null,F?F.replace(/\*/g,","):"Please phone to provided number."))),M&&c.a.createElement("div",{className:"card bg-light mb-3",style:{maxWidth:"22rem"}},c.a.createElement("div",{className:"card-header"},t.formatMessage({id:"chamber.two"})),c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.contact-info"})),c.a.createElement("p",{className:"card-text"},O.split("*").map(e=>c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:"tel:"+e},c.a.createElement(h.v,{size:"1.4rem"})," ",e),c.a.createElement("br",null)))),c.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.location"})),c.a.createElement("p",{className:"card-text"},M.replace(/\*/g,",")),c.a.createElement("h5",{className:"card-title"},t.formatMessage({id:"chamber.time"})),c.a.createElement("p",{className:"card-text"},I.replace(/\*/g,",")),c.a.createElement("h5",{className:"card-title"},"Chamber Protocol"),c.a.createElement("p",null,z.replace(/\*/g,","))))))),c.a.createElement(j.a,null),c.a.createElement("br",null),c.a.createElement(E.a,null),c.a.createElement("div",{className:"main"},c.a.createElement("div",{className:"med-section"},c.a.createElement("h3",{className:"text-center"},"You may find helpful"),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"med-card"},c.a.createElement(v.a,{data:D,index:!0}))))))})}}]);
//# sourceMappingURL=component---src-templates-doctor-doctor-js-9b3e130441fa3d5e87eb.js.map