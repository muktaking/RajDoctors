(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"3Z9Z":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),c=t("TSYQ"),l=t.n(c),s=t("q1tI"),i=t.n(s),o=t("vUet"),u=["bsPrefix","className","noGutters","as"],m=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.noGutters,d=e.as,f=void 0===d?"div":d,v=Object(r.a)(e,u),b=Object(o.a)(t,"row"),p=b+"-cols",h=[];return m.forEach((function(e){var a,t=v[e];delete v[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&h.push(""+p+n+"-"+a)})),i.a.createElement(f,Object(n.a)({ref:a},v,{className:l.a.apply(void 0,[c,b,s&&"no-gutters"].concat(h))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},"7vrA":function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),c=t("TSYQ"),l=t.n(c),s=t("q1tI"),i=t.n(s),o=t("vUet"),u=["bsPrefix","fluid","as","className"],m=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.fluid,s=e.as,m=void 0===s?"div":s,d=e.className,f=Object(r.a)(e,u),v=Object(o.a)(t,"container"),b="string"==typeof c?"-"+c:"-fluid";return i.a.createElement(m,Object(n.a)({ref:a},f,{className:l()(d,c?""+v+b:v)}))}));m.displayName="Container",m.defaultProps={fluid:!1},a.a=m},Ftda:function(e,a,t){"use strict";t.d(a,"a",(function(){return F}));var n=t("Wbzz"),r=t("q1tI"),c=t.n(r),l=t("wx14"),s=t("zLVn"),i=t("TSYQ"),o=t.n(i),u=t("y8DL"),m=t("ZCiN"),d=t("vUet"),f=t("7xGa"),v=["label","onClick","className"],b=c.a.forwardRef((function(e,a){var t=e.label,n=e.onClick,r=e.className,i=Object(s.a)(e,v);return c.a.createElement("button",Object(l.a)({ref:a,type:"button",className:o()("close",r),onClick:n},i),c.a.createElement("span",{"aria-hidden":"true"},"×"),c.a.createElement("span",{className:"sr-only"},t))}));b.displayName="CloseButton",b.defaultProps={label:"Close"};var p=b,h=t("U1MP"),N=t("YdCC"),E=t("dbZe"),O=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],j=Object(h.a)("h4");j.displayName="DivStyledAsH4";var x=Object(N.a)("alert-heading",{Component:j}),y=Object(N.a)("alert-link",{Component:E.a}),g={show:!0,transition:f.a,closeLabel:"Close alert"},w=c.a.forwardRef((function(e,a){var t=Object(u.a)(e,{show:"onClose"}),n=t.bsPrefix,r=t.show,i=t.closeLabel,v=t.className,b=t.children,h=t.variant,N=t.onClose,E=t.dismissible,j=t.transition,x=Object(s.a)(t,O),y=Object(d.a)(n,"alert"),g=Object(m.a)((function(e){N&&N(!1,e)})),w=!0===j?f.a:j,C=c.a.createElement("div",Object(l.a)({role:"alert"},w?void 0:x,{ref:a,className:o()(v,y,h&&y+"-"+h,E&&y+"-dismissible")}),E&&c.a.createElement(p,{onClick:g,label:i}),b);return w?c.a.createElement(w,Object(l.a)({unmountOnExit:!0},x,{ref:void 0,in:r}),C):r?C:null}));w.displayName="Alert",w.defaultProps=g,w.Link=y,w.Heading=x;var C=w,k=t("65eO"),I=(t("2W6z"),t("rQNl")),S=t("VWqr"),P=["bsPrefix","active","disabled","className","variant","action","as","onClick"],L={variant:void 0,active:!1,disabled:!1},M=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.active,i=e.disabled,u=e.className,m=e.variant,f=e.action,v=e.as,b=e.onClick,p=Object(s.a)(e,P);t=Object(d.a)(t,"list-group-item");var h=Object(r.useCallback)((function(e){if(i)return e.preventDefault(),void e.stopPropagation();b&&b(e)}),[i,b]);return i&&void 0===p.tabIndex&&(p.tabIndex=-1,p["aria-disabled"]=!0),c.a.createElement(S.a,Object(l.a)({ref:a},p,{as:v||(f?p.href?"a":"button":"div"),onClick:h,className:o()(u,t,n&&"active",i&&"disabled",m&&t+"-"+m,f&&t+"-action")}))}));M.defaultProps=L,M.displayName="ListGroupItem";var R=M,z=["className","bsPrefix","variant","horizontal","as"],T={variant:void 0,horizontal:void 0},D=c.a.forwardRef((function(e,a){var t,n=Object(u.a)(e,{activeKey:"onSelect"}),r=n.className,i=n.bsPrefix,m=n.variant,f=n.horizontal,v=n.as,b=void 0===v?"div":v,p=Object(s.a)(n,z),h=Object(d.a)(i,"list-group");return t=f?!0===f?"horizontal":"horizontal-"+f:null,c.a.createElement(I.a,Object(l.a)({ref:a},p,{as:b,className:o()(r,h,m&&h+"-"+m,t&&h+"-"+t)}))}));D.defaultProps=T,D.displayName="ListGroup",D.Item=R;var A=D,V=t("fwk/");function F(e){var a=e.snippetVeiw;return c.a.createElement("div",{className:"p-3"},a?c.a.createElement(C,{variant:"danger"},c.a.createElement("p",{className:"text-center"},"Emergency Numbers"),c.a.createElement("hr",null),c.a.createElement("div",{style:{overflow:"auto"},className:"text-center"},V.map((function(e,a){if(a<2)return e.contacts.map((function(e,a){return c.a.createElement(k.a,{as:"span",variant:"light",className:"mr-2"},e.name+": "+e.phone+" ")}))}))),c.a.createElement("hr",null),c.a.createElement(n.Link,{to:"/emergency"},"More...")):c.a.createElement(A,{as:"ul"},c.a.createElement(R,{as:"li",variant:"danger",className:"text-center",style:{fontSize:"1.8rem"}},"Emergency Numbers"),V.map((function(e,a){return c.a.createElement(R,{as:"li",variant:"primary",className:""},c.a.createElement("p",{className:"lead"},e.service),c.a.createElement(A,{as:"ul"},e.contacts.map((function(e,a){return c.a.createElement(R,{as:"li",variant:"success",className:""},e.name+": "," ",c.a.createElement(k.a,{variant:"danger"},e.phone))}))))}))))}},JI6e:function(e,a,t){"use strict";var n=t("wx14"),r=t("zLVn"),c=t("TSYQ"),l=t.n(c),s=t("q1tI"),i=t.n(s),o=t("vUet"),u=["bsPrefix","className","as"],m=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.as,d=void 0===s?"div":s,f=Object(r.a)(e,u),v=Object(o.a)(t,"col"),b=[],p=[];return m.forEach((function(e){var a,t,n,r=f[e];if(delete f[e],"object"==typeof r&&null!=r){var c=r.span;a=void 0===c||c,t=r.offset,n=r.order}else a=r;var l="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+v+l:""+v+l+"-"+a),null!=n&&p.push("order"+l+"-"+n),null!=t&&p.push("offset"+l+"-"+t)})),b.length||b.push(v),i.a.createElement(d,Object(n.a)({},f,{ref:a,className:l.a.apply(void 0,[c].concat(b,p))}))}));d.displayName="Col",a.a=d},RXBc:function(e,a,t){"use strict";t.r(a);var n=t("Wbzz"),r=t("9eSz"),c=t.n(r),l=t("kCIJ"),s=t("q1tI"),i=t.n(s),o=t("7vrA"),u=t("3Z9Z"),m=t("JI6e"),d=t("wx14"),f=t("zLVn"),v=t("ZCiN");var b=function(e,a){var t=Object(s.useRef)(!0);Object(s.useEffect)((function(){if(!t.current)return e();t.current=!1}),a)},p=t("Xyuu"),h=t("Vhrh"),N=t("TSYQ"),E=t.n(N),O=t("dRu9"),j=t("17x9"),x=t.n(j),y=t("y8DL"),g=t("YdCC"),w=Object(g.a)("carousel-caption"),C=t("vUet"),k=["as","bsPrefix","children","className"],I=i.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,r=e.bsPrefix,c=e.children,l=e.className,s=Object(f.a)(e,k),o=E()(l,Object(C.a)(r,"carousel-item"));return i.a.createElement(n,Object(d.a)({ref:a},s,{className:o}),c)}));I.displayName="CarouselItem";var S=I;function P(e,a){var t=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?a(e,t++):e}))}var L=t("dbZe"),M=t("wsUu"),R=t("z+q/"),z=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],T={bsPrefix:x.a.string,as:x.a.elementType,slide:x.a.bool,fade:x.a.bool,controls:x.a.bool,indicators:x.a.bool,activeIndex:x.a.number,onSelect:x.a.func,onSlide:x.a.func,onSlid:x.a.func,interval:x.a.number,keyboard:x.a.bool,pause:x.a.oneOf(["hover",!1]),wrap:x.a.bool,touch:x.a.bool,prevIcon:x.a.node,prevLabel:x.a.string,nextIcon:x.a.node,nextLabel:x.a.string},D={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function A(e,a){var t=Object(y.a)(e,{activeIndex:"onSelect"}),n=t.as,r=void 0===n?"div":n,c=t.bsPrefix,l=t.slide,o=t.fade,u=t.controls,m=t.indicators,N=t.activeIndex,j=t.onSelect,x=t.onSlide,g=t.onSlid,w=t.interval,k=t.keyboard,I=t.onKeyDown,S=t.pause,T=t.onMouseOver,D=t.onMouseOut,A=t.wrap,V=t.touch,F=t.onTouchStart,Z=t.onTouchMove,Q=t.onTouchEnd,U=t.prevIcon,Y=t.prevLabel,q=t.nextIcon,G=t.nextLabel,H=t.className,J=t.children,B=Object(f.a)(t,z),K=Object(C.a)(c,"carousel"),W=Object(s.useRef)(null),X=Object(s.useState)("next"),$=X[0],_=X[1],ee=Object(s.useState)(!1),ae=ee[0],te=ee[1],ne=Object(s.useState)(!1),re=ne[0],ce=ne[1],le=Object(s.useState)(N||0),se=le[0],ie=le[1];re||N===se||(W.current?_(W.current):_((N||0)>se?"next":"prev"),l&&ce(!0),ie(N||0)),Object(s.useEffect)((function(){W.current&&(W.current=null)}));var oe,ue=0;!function(e,a){var t=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&a(e,t++)}))}(J,(function(e,a){++ue,a===N&&(oe=e.props.interval)}));var me=Object(p.a)(oe),de=Object(s.useCallback)((function(e){if(!re){var a=se-1;if(a<0){if(!A)return;a=ue-1}W.current="prev",j&&j(a,e)}}),[re,se,j,A,ue]),fe=Object(v.a)((function(e){if(!re){var a=se+1;if(a>=ue){if(!A)return;a=0}W.current="next",j&&j(a,e)}})),ve=Object(s.useRef)();Object(s.useImperativeHandle)(a,(function(){return{element:ve.current,prev:de,next:fe}}));var be=Object(v.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var a=getComputedStyle(e);return"none"!==a.display&&"hidden"!==a.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ve.current)&&fe()})),pe="next"===$?"left":"right";b((function(){l||(x&&x(se,pe),g&&g(se,pe))}),[se]);var he=K+"-item-"+$,Ne=K+"-item-"+pe,Ee=Object(s.useCallback)((function(e){Object(R.a)(e),x&&x(se,pe)}),[x,se,pe]),Oe=Object(s.useCallback)((function(){ce(!1),g&&g(se,pe)}),[g,se,pe]),je=Object(s.useCallback)((function(e){if(k&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void de(e);case"ArrowRight":return e.preventDefault(),void fe(e)}I&&I(e)}),[k,I,de,fe]),xe=Object(s.useCallback)((function(e){"hover"===S&&te(!0),T&&T(e)}),[S,T]),ye=Object(s.useCallback)((function(e){te(!1),D&&D(e)}),[D]),ge=Object(s.useRef)(0),we=Object(s.useRef)(0),Ce=Object(h.a)(),ke=Object(s.useCallback)((function(e){ge.current=e.touches[0].clientX,we.current=0,"hover"===S&&te(!0),F&&F(e)}),[S,F]),Ie=Object(s.useCallback)((function(e){e.touches&&e.touches.length>1?we.current=0:we.current=e.touches[0].clientX-ge.current,Z&&Z(e)}),[Z]),Se=Object(s.useCallback)((function(e){if(V){var a=we.current;Math.abs(a)>40&&(a>0?de(e):fe(e))}"hover"===S&&Ce.set((function(){te(!1)}),w||void 0),Q&&Q(e)}),[V,S,de,fe,Ce,w,Q]),Pe=null!=w&&!ae&&!re,Le=Object(s.useRef)();Object(s.useEffect)((function(){var e,a;if(Pe)return Le.current=window.setInterval(document.visibilityState?be:fe,null!=(e=null!=(a=me.current)?a:w)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}),[Pe,fe,me,w,be]);var Me=Object(s.useMemo)((function(){return m&&Array.from({length:ue},(function(e,a){return function(e){j&&j(a,e)}}))}),[m,ue,j]);return i.a.createElement(r,Object(d.a)({ref:ve},B,{onKeyDown:je,onMouseOver:xe,onMouseOut:ye,onTouchStart:ke,onTouchMove:Ie,onTouchEnd:Se,className:E()(H,K,l&&"slide",o&&K+"-fade")}),m&&i.a.createElement("ol",{className:K+"-indicators"},P(J,(function(e,a){return i.a.createElement("li",{key:a,className:a===se?"active":void 0,onClick:Me?Me[a]:void 0})}))),i.a.createElement("div",{className:K+"-inner"},P(J,(function(e,a){var t=a===se;return l?i.a.createElement(O.c,{in:t,onEnter:t?Ee:void 0,onEntered:t?Oe:void 0,addEndListener:M.a},(function(a){return i.a.cloneElement(e,{className:E()(e.props.className,t&&"entered"!==a&&he,("entered"===a||"exiting"===a)&&"active",("entering"===a||"exiting"===a)&&Ne)})})):i.a.cloneElement(e,{className:E()(e.props.className,t&&"active")})}))),u&&i.a.createElement(i.a.Fragment,null,(A||0!==N)&&i.a.createElement(L.a,{className:K+"-control-prev",onClick:de},U,Y&&i.a.createElement("span",{className:"sr-only"},Y)),(A||N!==ue-1)&&i.a.createElement(L.a,{className:K+"-control-next",onClick:fe},q,G&&i.a.createElement("span",{className:"sr-only"},G))))}var V=i.a.forwardRef(A);V.displayName="Carousel",V.propTypes=T,V.defaultProps=D,V.Caption=w,V.Item=S;var F=V,Z=t("AY9D"),Q=t("Ftda"),U=t("Bl7J"),Y=t("vrFN"),q=t("gFwQ"),G=function(e){var a=e.title,t=e.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"med-section"},i.a.createElement("h3",{className:"text-center"},a),i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{className:"med-card"},i.a.createElement(Z.a,{data:t,index:!0}))),i.a.createElement("hr",{className:"w-25"}))};a.default=function(){var e=Object(n.useStaticQuery)("1676068625"),a=Object(l.useIntl)(),t=("en"!==a.locale&&a.locale,[{title:a.formatMessage({id:"tms"}),data:e.med.nodes},{title:a.formatMessage({id:"tss"}),data:e.sur.nodes},{title:a.formatMessage({id:"tgs"}),data:e.gy.nodes}]);return i.a.createElement(U.a,null,i.a.createElement(Y.a,null),i.a.createElement(o.a,{fluid:!0,className:"p-0"},i.a.createElement("div",{className:"hero"},i.a.createElement(u.a,{noGutters:!0},i.a.createElement(m.a,{md:6,className:"my-auto"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h1",{className:"text-uppercase"},a.formatMessage({id:"siteMetaData.title"})),i.a.createElement("p",{className:"text-muted lead p-3"},a.formatMessage({id:"siteMetaData.description"})),i.a.createElement(q.a,null))),i.a.createElement(m.a,{md:6},i.a.createElement("div",{className:"mt-3"},i.a.createElement(F,{className:""},e.carousel.nodes.map((function(a,t){return i.a.createElement(F.Item,null,i.a.createElement(c.a,{fluid:e.carouselImg.edges[t].node.childImageSharp.fluid,style:{width:"350px",margin:"auto"}}))}))))))),i.a.createElement("hr",{className:"w-75"}),i.a.createElement(Q.a,{snippetVeiw:!0}),i.a.createElement("div",{className:"main"},t.map((function(e,a){return i.a.createElement(G,{key:e.title,title:e.title,data:e.data})})))))}},"fwk/":function(e){e.exports=JSON.parse('[{"service":"National Emergency","contacts":[{"name":"National Emergency Number","phone":"999"}]},{"service":"Fire Service","contacts":[{"name":"Rajshahi Fire Station with Ambulence","phone":"0721-774224, 01730-336655"},{"name":"University Fire Station","phone":"0721-750270, 01730-002508"}]},{"service":"Private Medicals","contacts":[{"name":"Barind Medical College & Hospital","phone":"01839186666"},{"name":"Islami Bank Hospital (Laxmipur)","phone":"01786-908008, 0721-770965"},{"name":"Medipath Diagnostic","phone":"01712-685297"},{"name":"Zamzam Hospitals","phone":"01711-192600"},{"name":"Amana Hospital Limited","phone":"01705-403621"}]}]')}}]);
//# sourceMappingURL=component---src-pages-index-js-a50df97f23199bfd596b.js.map