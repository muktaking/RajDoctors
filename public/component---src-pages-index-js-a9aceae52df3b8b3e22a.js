(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{RXBc:function(e,t,a){"use strict";a.r(t);var n=a("KQm4"),r=a("Wbzz"),c=a("9eSz"),l=a.n(c),o=a("kCIJ"),s=a("q1tI"),i=a.n(s),u=a("7vrA"),d=a("3Z9Z"),m=a("JI6e"),f=a("wx14"),v=a("zLVn"),p=a("ZCiN");var b=function(e,t){var a=Object(s.useRef)(!0);Object(s.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},h=a("Xyuu"),E=a("Vhrh"),y=a("TSYQ"),O=a.n(y),N=a("dRu9"),j=a("17x9"),x=a.n(j),g=a("y8DL"),w=a("YdCC"),C=Object(w.a)("carousel-caption"),I=a("vUet"),S=["as","bsPrefix","children","className"],k=i.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,r=e.bsPrefix,c=e.children,l=e.className,o=Object(v.a)(e,S),s=O()(l,Object(I.a)(r,"carousel-item"));return i.a.createElement(n,Object(f.a)({ref:t},o,{className:s}),c)}));k.displayName="CarouselItem";var M=k;function L(e,t){var a=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,a++):e}))}var T=a("dbZe"),R=a("wsUu"),D=a("z+q/"),P=["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"],A={bsPrefix:x.a.string,as:x.a.elementType,slide:x.a.bool,fade:x.a.bool,controls:x.a.bool,indicators:x.a.bool,activeIndex:x.a.number,onSelect:x.a.func,onSlide:x.a.func,onSlid:x.a.func,interval:x.a.number,keyboard:x.a.bool,pause:x.a.oneOf(["hover",!1]),wrap:x.a.bool,touch:x.a.bool,prevIcon:x.a.node,prevLabel:x.a.string,nextIcon:x.a.node,nextLabel:x.a.string},z={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:i.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function F(e,t){var a=Object(g.a)(e,{activeIndex:"onSelect"}),n=a.as,r=void 0===n?"div":n,c=a.bsPrefix,l=a.slide,o=a.fade,u=a.controls,d=a.indicators,m=a.activeIndex,y=a.onSelect,j=a.onSlide,x=a.onSlid,w=a.interval,C=a.keyboard,S=a.onKeyDown,k=a.pause,M=a.onMouseOver,A=a.onMouseOut,z=a.wrap,F=a.touch,J=a.onTouchStart,V=a.onTouchMove,K=a.onTouchEnd,Q=a.prevIcon,X=a.prevLabel,Z=a.nextIcon,Y=a.nextLabel,q=a.className,B=a.children,U=Object(v.a)(a,P),G=Object(I.a)(c,"carousel"),H=Object(s.useRef)(null),W=Object(s.useState)("next"),$=W[0],_=W[1],ee=Object(s.useState)(!1),te=ee[0],ae=ee[1],ne=Object(s.useState)(!1),re=ne[0],ce=ne[1],le=Object(s.useState)(m||0),oe=le[0],se=le[1];re||m===oe||(H.current?_(H.current):_((m||0)>oe?"next":"prev"),l&&ce(!0),se(m||0)),Object(s.useEffect)((function(){H.current&&(H.current=null)}));var ie,ue=0;!function(e,t){var a=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,a++)}))}(B,(function(e,t){++ue,t===m&&(ie=e.props.interval)}));var de=Object(h.a)(ie),me=Object(s.useCallback)((function(e){if(!re){var t=oe-1;if(t<0){if(!z)return;t=ue-1}H.current="prev",y&&y(t,e)}}),[re,oe,y,z,ue]),fe=Object(p.a)((function(e){if(!re){var t=oe+1;if(t>=ue){if(!z)return;t=0}H.current="next",y&&y(t,e)}})),ve=Object(s.useRef)();Object(s.useImperativeHandle)(t,(function(){return{element:ve.current,prev:me,next:fe}}));var pe=Object(p.a)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ve.current)&&fe()})),be="next"===$?"left":"right";b((function(){l||(j&&j(oe,be),x&&x(oe,be))}),[oe]);var he=G+"-item-"+$,Ee=G+"-item-"+be,ye=Object(s.useCallback)((function(e){Object(D.a)(e),j&&j(oe,be)}),[j,oe,be]),Oe=Object(s.useCallback)((function(){ce(!1),x&&x(oe,be)}),[x,oe,be]),Ne=Object(s.useCallback)((function(e){if(C&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void me(e);case"ArrowRight":return e.preventDefault(),void fe(e)}S&&S(e)}),[C,S,me,fe]),je=Object(s.useCallback)((function(e){"hover"===k&&ae(!0),M&&M(e)}),[k,M]),xe=Object(s.useCallback)((function(e){ae(!1),A&&A(e)}),[A]),ge=Object(s.useRef)(0),we=Object(s.useRef)(0),Ce=Object(E.a)(),Ie=Object(s.useCallback)((function(e){ge.current=e.touches[0].clientX,we.current=0,"hover"===k&&ae(!0),J&&J(e)}),[k,J]),Se=Object(s.useCallback)((function(e){e.touches&&e.touches.length>1?we.current=0:we.current=e.touches[0].clientX-ge.current,V&&V(e)}),[V]),ke=Object(s.useCallback)((function(e){if(F){var t=we.current;Math.abs(t)>40&&(t>0?me(e):fe(e))}"hover"===k&&Ce.set((function(){ae(!1)}),w||void 0),K&&K(e)}),[F,k,me,fe,Ce,w,K]),Me=null!=w&&!te&&!re,Le=Object(s.useRef)();Object(s.useEffect)((function(){var e,t;if(Me)return Le.current=window.setInterval(document.visibilityState?pe:fe,null!=(e=null!=(t=de.current)?t:w)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}),[Me,fe,de,w,pe]);var Te=Object(s.useMemo)((function(){return d&&Array.from({length:ue},(function(e,t){return function(e){y&&y(t,e)}}))}),[d,ue,y]);return i.a.createElement(r,Object(f.a)({ref:ve},U,{onKeyDown:Ne,onMouseOver:je,onMouseOut:xe,onTouchStart:Ie,onTouchMove:Se,onTouchEnd:ke,className:O()(q,G,l&&"slide",o&&G+"-fade")}),d&&i.a.createElement("ol",{className:G+"-indicators"},L(B,(function(e,t){return i.a.createElement("li",{key:t,className:t===oe?"active":void 0,onClick:Te?Te[t]:void 0})}))),i.a.createElement("div",{className:G+"-inner"},L(B,(function(e,t){var a=t===oe;return l?i.a.createElement(N.c,{in:a,onEnter:a?ye:void 0,onEntered:a?Oe:void 0,addEndListener:R.a},(function(t){return i.a.cloneElement(e,{className:O()(e.props.className,a&&"entered"!==t&&he,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Ee)})})):i.a.cloneElement(e,{className:O()(e.props.className,a&&"active")})}))),u&&i.a.createElement(i.a.Fragment,null,(z||0!==m)&&i.a.createElement(T.a,{className:G+"-control-prev",onClick:me},Q,X&&i.a.createElement("span",{className:"sr-only"},X)),(z||m!==ue-1)&&i.a.createElement(T.a,{className:G+"-control-next",onClick:fe},Z,Y&&i.a.createElement("span",{className:"sr-only"},Y))))}var J=i.a.forwardRef(F);J.displayName="Carousel",J.propTypes=A,J.defaultProps=z,J.Caption=C,J.Item=M;var V=J,K=a("AY9D"),Q=a("Ftda"),X=a("Bl7J"),Z=a("vrFN"),Y=a("gFwQ");const q=e=>{let{title:t,speciality:a,data:n}=e;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"med-section"},i.a.createElement("h3",{className:"text-center"},t),i.a.createElement("div",{className:"divider"}),i.a.createElement("div",{className:"med-card"},i.a.createElement(K.a,{speciality:a,data:n,index:!0}))),i.a.createElement("hr",{className:"w-25"}))};t.default=()=>{var e,t,a;const c=Object(r.useStaticQuery)("426922808"),s=Object(o.useIntl)();(e=c.med.nodes).push.apply(e,Object(n.a)(c.medCopy.nodes)),(t=c.sur.nodes).push.apply(t,Object(n.a)(c.surCopy.nodes)),(a=c.gy.nodes).push.apply(a,Object(n.a)(c.gyCopy.nodes));const f=[{title:s.formatMessage({id:"tms"}),speciality:"medicine",data:c.med.nodes},{title:s.formatMessage({id:"tss"}),speciality:"surgery",data:c.sur.nodes},{title:s.formatMessage({id:"tgs"}),speciality:"gynaecology",data:c.gy.nodes}];return i.a.createElement(X.a,null,i.a.createElement(Z.a,null),i.a.createElement(u.a,{fluid:!0,className:"p-0"},i.a.createElement("div",{className:"hero"},i.a.createElement(d.a,{noGutters:!0},i.a.createElement(m.a,{md:6,className:"my-auto"},i.a.createElement("div",{className:"text-center"},i.a.createElement("h1",{className:"text-uppercase"},s.formatMessage({id:"siteMetaData.title"})),i.a.createElement("p",{className:"text-muted lead p-3"},s.formatMessage({id:"siteMetaData.description"})),i.a.createElement(Y.a,null))),i.a.createElement(m.a,{md:6},i.a.createElement("div",{className:"mt-3"},i.a.createElement(V,{className:""},c.carouselImg.edges.map(e=>i.a.createElement(V.Item,null,i.a.createElement(l.a,{fluid:e.node.childImageSharp.fluid,style:{width:"350px",margin:"auto"}})))))))),i.a.createElement("hr",{className:"w-75"}),i.a.createElement(Q.a,{snippetVeiw:!0}),i.a.createElement("div",{className:"main"},f.map((e,t)=>i.a.createElement(q,{key:e.title,title:e.title,speciality:e.speciality,data:e.data})))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a9aceae52df3b8b3e22a.js.map