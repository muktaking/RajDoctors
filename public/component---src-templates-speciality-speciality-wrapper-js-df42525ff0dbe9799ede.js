(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{rQp8:function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return f}));var s=t("q1tI"),n=t.n(s),r=t("Bl7J"),c=t("vrFN"),l=t("I+5a"),i=t.n(l),o=t("7vrA"),m=t("kCIJ"),d=t("AY9D"),p=0;var u=function(e){var a,t=e.location,r=e.data,c=Object(m.useIntl)(),l=Math.ceil(r.allDoctorListsCsv.nodes.length/10),u=Object(s.useState)(r.allDoctorListsCsv.nodes.slice(p,p+6)),v=u[0],g=u[1];return n.a.createElement(o.a,{fluid:!0,className:"p-0"},n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"med-section"},n.a.createElement("h3",{className:"text-center"},c.formatMessage({id:"adl"})+" "+c.formatMessage({id:""+(a=t.pathname.split("/").reverse()[0].replace(/%20/g," ").trim(),a.charAt(0).toUpperCase()+a.slice(1))})+"  "+c.formatMessage({id:"Speciality"})),n.a.createElement("div",{className:"divider"}),n.a.createElement("div",{className:"med-card"},n.a.createElement(d.a,{data:v}))),n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement(i.a,{previousLabel:"<<",nextLabel:">>",breakLabel:"...",breakClassName:"break-me",pageCount:l,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:function(e){var a=e.selected;p=6*a,g(r.allDoctorListsCsv.nodes.slice(p,p+6))},containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))))},v=n.a.memo(u);function g(e){return e.charAt(0).toUpperCase()+e.slice(1)}var f="2009530427",C=function(e){var a=e.location,t=e.data,s=t.allDoctorListsCsv.nodes.slice(0,3).reduce((function(e,a){return e+(a.Name+", Contact: ")+a.contact1.replace(/\*/g,",")+"; "}),"");return n.a.createElement(r.a,null,n.a.createElement(c.a,{title:""+g(a.pathname.split("/").reverse()[0].replace(/%20/g," ")),description:"List Of Doctors in\n              "+g(a.pathname.split("/").reverse()[0].replace(/%20/g," "))+"\n              Speciality. Top Doctors: "+s+" at rajshahi city in bangladesh"}),n.a.createElement(v,{location:a,data:t}))};a.default=n.a.memo(C)}}]);
//# sourceMappingURL=component---src-templates-speciality-speciality-wrapper-js-df42525ff0dbe9799ede.js.map