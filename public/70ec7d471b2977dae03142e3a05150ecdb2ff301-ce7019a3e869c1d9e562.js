(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),i=a("zLVn"),n=a("TSYQ"),s=a.n(n),d=a("q1tI"),o=a.n(d),l=a("vUet"),c=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,d=e.noGutters,u=e.as,f=void 0===u?"div":u,p=Object(i.a)(e,["bsPrefix","className","noGutters","as"]),g=Object(l.a)(a,"row"),m=g+"-cols",h=[];return c.forEach((function(e){var t,a=p[e];delete p[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+m+r+"-"+t)})),o.a.createElement(f,Object(r.a)({ref:t},p,{className:s.a.apply(void 0,[n,g,d&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},"6xyR":function(e,t,a){"use strict";var r=a("wx14"),i=a("zLVn"),n=a("TSYQ"),s=a.n(n),d=a("q1tI"),o=a.n(d),l=a("vUet"),c=a("YdCC"),u=a("U1MP"),f=a("Wzyw"),p=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,d=e.variant,c=e.as,u=void 0===c?"img":c,f=Object(i.a)(e,["bsPrefix","className","variant","as"]),p=Object(l.a)(a,"card-img");return o.a.createElement(u,Object(r.a)({ref:t,className:s()(d?p+"-"+d:p,n)},f))}));p.displayName="CardImg",p.defaultProps={variant:null};var g=p,m=Object(u.a)("h5"),h=Object(u.a)("h6"),b=Object(c.a)("card-body"),y=Object(c.a)("card-title",{Component:m}),v=Object(c.a)("card-subtitle",{Component:h}),S=Object(c.a)("card-link",{Component:"a"}),w=Object(c.a)("card-text",{Component:"p"}),O=Object(c.a)("card-header"),x=Object(c.a)("card-footer"),E=Object(c.a)("card-img-overlay"),L=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,c=e.bg,u=e.text,p=e.border,g=e.body,m=e.children,h=e.as,y=void 0===h?"div":h,v=Object(i.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),S=Object(l.a)(a,"card"),w=Object(d.useMemo)((function(){return{cardHeaderBsPrefix:S+"-header"}}),[S]);return o.a.createElement(f.a.Provider,{value:w},o.a.createElement(y,Object(r.a)({ref:t},v,{className:s()(n,S,c&&"bg-"+c,u&&"text-"+u,p&&"border-"+p)}),g?o.a.createElement(b,null,m):m))}));L.displayName="Card",L.defaultProps={body:!1},L.Img=g,L.Title=y,L.Subtitle=v,L.Body=b,L.Link=S,L.Text=w,L.Header=O,L.Footer=x,L.ImgOverlay=E;t.a=L},"7vrA":function(e,t,a){"use strict";var r=a("wx14"),i=a("zLVn"),n=a("TSYQ"),s=a.n(n),d=a("q1tI"),o=a.n(d),l=a("vUet"),c=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.fluid,d=e.as,c=void 0===d?"div":d,u=e.className,f=Object(i.a)(e,["bsPrefix","fluid","as","className"]),p=Object(l.a)(a,"container"),g="string"==typeof n?"-"+n:"-fluid";return o.a.createElement(c,Object(r.a)({ref:t},f,{className:s()(u,n?""+p+g:p)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.a=c},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=O([].concat(t.fluid))),t.fixed&&(t.fixed=O([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=g(t||a||[]);return r&&r.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=p(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,S=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function O(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},j=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(P,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),P=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));P.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,S=e.itemProp,O=e.loading,L=e.draggable,R=m||h;if(!R)return null;var N=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,o.default)({opacity:N?1:0,transition:V?"opacity "+y+"ms":"none"},d),C="boolean"==typeof b?"lightgray":b,T={transitionDelay:y+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},V&&T,d,f),k={title:t,alt:this.state.isVisible?"":a,style:H,className:p,itemProp:S},q=this.state.isHydrated?g(R):R[0];if(m)return l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:q.maxWidth?q.maxWidth+"px":null,maxHeight:q.maxHeight?q.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),C&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&T)}),q.base64&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:k,imageVariants:R,generateSources:E}),q.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:k,imageVariants:R,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,w(R),l.default.createElement(P,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:O},q,{imageVariants:R}))}}));if(h){var W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},V&&T)}),q.base64&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:k,imageVariants:R,generateSources:E}),q.tracedSVG&&l.default.createElement(j,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:k,imageVariants:R,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,w(R),l.default.createElement(P,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:O,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:O},q,{imageVariants:R}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}N.propTypes={resolutions:V,sizes:z,fixed:C(c.default.oneOfType([V,c.default.arrayOf(V)])),fluid:C(c.default.oneOfType([z,c.default.arrayOf(z)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=N;t.default=T}}]);
//# sourceMappingURL=70ec7d471b2977dae03142e3a05150ecdb2ff301-ce7019a3e869c1d9e562.js.map