(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),i=a("zLVn"),n=a("TSYQ"),s=a.n(n),l=a("q1tI"),d=a.n(l),o=a("vUet"),c=["xl","lg","md","sm","xs"],u=d.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.noGutters,u=e.as,f=void 0===u?"div":u,m=Object(i.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(o.a)(a,"row"),g=p+"-cols",h=[];return c.forEach((function(e){var t,a=m[e];delete m[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+g+r+"-"+t)})),d.a.createElement(f,Object(r.a)({ref:t},m,{className:s.a.apply(void 0,[n,p,l&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},"6xyR":function(e,t,a){"use strict";var r=a("wx14"),i=a("zLVn"),n=a("TSYQ"),s=a.n(n),l=a("q1tI"),d=a.n(l),o=a("vUet"),c=/-(.)/g;var u=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function f(e,t){var a=void 0===t?{}:t,n=a.displayName,l=void 0===n?u(e):n,c=a.Component,f=a.defaultProps,m=d.a.forwardRef((function(t,a){var n=t.className,l=t.bsPrefix,u=t.as,f=void 0===u?c||"div":u,m=Object(i.a)(t,["className","bsPrefix","as"]),p=Object(o.a)(l,e);return d.a.createElement(f,Object(r.a)({ref:a,className:s()(n,p)},m))}));return m.defaultProps=f,m.displayName=l,m}var m=function(e){return d.a.forwardRef((function(t,a){return d.a.createElement("div",Object(r.a)({},t,{ref:a,className:s()(t.className,e)}))}))},p=a("Wzyw"),g=d.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.variant,c=e.as,u=void 0===c?"img":c,f=Object(i.a)(e,["bsPrefix","className","variant","as"]),m=Object(o.a)(a,"card-img");return d.a.createElement(u,Object(r.a)({ref:t,className:s()(l?m+"-"+l:m,n)},f))}));g.displayName="CardImg",g.defaultProps={variant:null};var h=g,b=m("h5"),v=m("h6"),y=f("card-body"),E=f("card-title",{Component:b}),S=f("card-subtitle",{Component:v}),w=f("card-link",{Component:"a"}),x=f("card-text",{Component:"p"}),N=f("card-header"),O=f("card-footer"),R=f("card-img-overlay"),L=d.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.bg,u=e.text,f=e.border,m=e.body,g=e.children,h=e.as,b=void 0===h?"div":h,v=Object(i.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),E=Object(o.a)(a,"card"),S=Object(l.useMemo)((function(){return{cardHeaderBsPrefix:E+"-header"}}),[E]);return d.a.createElement(p.a.Provider,{value:S},d.a.createElement(b,Object(r.a)({ref:t},v,{className:s()(n,E,c&&"bg-"+c,u&&"text-"+u,f&&"border-"+f)}),m?d.a.createElement(y,null,g):g))}));L.displayName="Card",L.defaultProps={body:!1},L.Img=h,L.Title=E,L.Subtitle=S,L.Body=y,L.Link=w,L.Text=x,L.Header=N,L.Footer=O,L.ImgOverlay=R;t.a=L},"7vrA":function(e,t,a){"use strict";var r=a("wx14"),i=a("zLVn"),n=a("TSYQ"),s=a.n(n),l=a("q1tI"),d=a.n(l),o=a("vUet"),c=d.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,l=e.as,c=void 0===l?"div":l,u=e.className,f=Object(i.a)(e,["bsPrefix","fluid","as","className"]),m=Object(o.a)(a,"container"),p="string"==typeof n?"-"+n:"-fluid";return d.a.createElement(c,Object(r.a)({ref:t},f,{className:s()(u,n?""+m+p:m)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.a=c},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),d=r(a("pVnL")),o=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&o.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})}))}function O(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+o+s+l+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=o.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=o.default.createElement(P,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?o.default.createElement("picture",null,i(r),l):l})),P=o.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,d.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));P.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=o.default.createRef(),a.placeholderRef=t.placeholderRef||o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,w=e.loading,O=e.draggable,R=g||h;if(!R)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,d.default)({opacity:j?1:0,transition:z?"opacity "+v+"ms":"none"},l),C="boolean"==typeof b?"lightgray":b,T={transitionDelay:v+"ms"},H=(0,d.default)({opacity:this.state.imgLoaded?0:1},z&&T,l,f),k={title:t,alt:this.state.isVisible?"":a,style:H,className:m,itemProp:E},q=this.state.isHydrated?p(R):R[0];if(g)return o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},o.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),C&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&T)}),q.base64&&o.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:k,imageVariants:R,generateSources:N}),q.tracedSVG&&o.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:k,imageVariants:R,generateSources:x}),this.state.isVisible&&o.default.createElement("picture",null,S(R),o.default.createElement(P,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:a,title:t,loading:w},q,{imageVariants:R}))}}));if(h){var W=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete W.display,o.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&o.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},z&&T)}),q.base64&&o.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:k,imageVariants:R,generateSources:N}),q.tracedSVG&&o.default.createElement(I,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:k,imageVariants:R,generateSources:x}),this.state.isVisible&&o.default.createElement("picture",null,S(R),o.default.createElement(P,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:O})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,d.default)({alt:a,title:t,loading:w},q,{imageVariants:R}))}}))}return null},t}(o.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}j.propTypes={resolutions:z,sizes:V,fixed:C(c.default.oneOfType([z,c.default.arrayOf(z)])),fluid:C(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=j;t.default=T},AH0V:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("6xyR"),l=a("65eO"),d=a("ma3e"),o=function(e){var t=e.name,a=e.speciality,r=e.contact,o=e.location,c=e.time,u=e.link;return i.a.createElement(s.a,{style:{width:"24rem"}},i.a.createElement(s.a.Body,null,i.a.createElement(s.a.Title,null,i.a.createElement(d.A,null)," ",i.a.createElement("span",null,t.trim().replace(/\*/g,","))),i.a.createElement("hr",null),i.a.createElement(s.a.Subtitle,{className:"d-flex align-items-center text-muted pl-1"},i.a.createElement(d.x,null),i.a.createElement(l.a,{variant:"light",className:"doctor-item-content"},a.trim().replace(/\*/g,","))),i.a.createElement("div",{className:"pl-1"},i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement(d.a,null),i.a.createElement(l.a,{className:"doctor-item-content"},r.trim().replace(/\*/g,","))),i.a.createElement("div",{className:"d-flex align-items-center"},i.a.createElement(d.n,null),i.a.createElement(l.a,{className:"doctor-item-content"},o.trim().replace(/\*/g,","))),i.a.createElement("div",{className:"d-flex align-items-center "},i.a.createElement(d.o,null),i.a.createElement(l.a,{className:"doctor-item-content"},c.trim().replace(/\*/g,",")))),i.a.createElement("br",null),i.a.createElement(n.Link,{to:"/doctor/"+u},"More...")))};t.a=function(e){return e.data.map((function(e,t){return i.a.createElement(o,{key:t,name:e.Name,speciality:e.Degree,contact:e.contact1,location:e.loc1,time:e.visitTime1,link:e.uid})}))}},JI6e:function(e,t,a){"use strict";var r=a("wx14"),i=a("zLVn"),n=a("TSYQ"),s=a.n(n),l=a("q1tI"),d=a.n(l),o=a("vUet"),c=["xl","lg","md","sm","xs"],u=d.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,l=e.as,u=void 0===l?"div":l,f=Object(i.a)(e,["bsPrefix","className","as"]),m=Object(o.a)(a,"col"),p=[],g=[];return c.forEach((function(e){var t,a,r,i=f[e];if(delete f[e],"object"==typeof i&&null!=i){var n=i.span;t=void 0===n||n,a=i.offset,r=i.order}else t=i;var s="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+m+s:""+m+s+"-"+t),null!=r&&g.push("order"+s+"-"+r),null!=a&&g.push("offset"+s+"-"+a)})),p.length||p.push(m),d.a.createElement(u,Object(r.a)({},f,{ref:t,className:s.a.apply(void 0,[n].concat(p,g))}))}));u.displayName="Col",t.a=u}}]);
//# sourceMappingURL=a7de4b384662239109151d9336588f703301276c-59bd55a3532395107c7b.js.map