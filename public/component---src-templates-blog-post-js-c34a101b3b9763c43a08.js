webpackJsonp([0x620f737b6699],{51:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var n=o(21),s=i(n),r=o(27),l=i(r),d=o(26),u=i(d),c=o(59),f=i(c),p=o(58),h=i(p),y=o(2),b=i(y),g=o(6),m=i(g),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),o=t.sizes?t.sizes.src:t.resolutions.src;return!!w[o]||(w[o]=!0,!1)},E=void 0,L=[],j=function(e,t){a().observe(e),L.push([e,t])},_=null,O=function(){if(null!==_)return _;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return _=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},R=function(e){var t=e.opacity,o=void 0===t?"1":t,i=e.src,a=e.srcSet,n=e.sizes,s=void 0===n?"":n,r=e.title,l=void 0===r?"":r,d=e.alt,u=void 0===d?"":d,c=e.width,f=void 0===c?"":c,p=e.height,h=void 0===p?"":p,y=e.transitionDelay,b=void 0===y?"0.5s":y;return'<img width="'+f+'" height="'+h+'" src="'+i+'" srcset="'+a+'" alt="'+u+'" title="'+l+'" sizes="'+s+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+b+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},T=function(e){var t=e.style,o=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return b.default.createElement("img",(0,h.default)({},i,{onLoad:o,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};T.propTypes={style:m.default.object,onLoad:m.default.func};var z=function(e){function t(o){(0,s.default)(this,t);var i=(0,l.default)(this,e.call(this,o)),a=!0,n=!0,r=!1,d=S(o);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,n=!1,r=!0),"undefined"==typeof window&&(a=!1,n=!1),i.state={isVisible:a,imgLoaded:n,IOSupported:r},i.handleRef=i.handleRef.bind(i),i}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),o=t.title,i=t.alt,a=t.className,n=t.outerWrapperClassName,s=t.style,r=void 0===s?{}:s,l=t.imgStyle,d=void 0===l?{}:l,u=t.sizes,c=t.resolutions,f=t.backgroundColor,p=t.Tag,y=void 0;y="boolean"==typeof f?"lightgray":f;var g=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),m=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(u){var w=u;return w.srcWebp&&w.srcSetWebp&&O()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),b.default.createElement(p,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},b.default.createElement(p,{className:(a?a:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},b.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&b.default.createElement(T,{alt:i,title:o,src:w.base64,style:g}),w.tracedSVG&&b.default.createElement(T,{alt:i,title:o,src:w.tracedSVG,style:g}),y&&b.default.createElement(p,{title:o,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&b.default.createElement(T,{alt:i,title:o,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:m,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,h.default)({alt:i,title:o},w))}})))}if(c){var S=c,E=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},r);return"inherit"===r.display&&delete E.display,S.srcWebp&&S.srcSetWebp&&O()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),b.default.createElement(p,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},b.default.createElement(p,{className:(a?a:"")+" gatsby-image-wrapper",style:E,ref:this.handleRef},S.base64&&b.default.createElement(T,{alt:i,title:o,src:S.base64,style:g}),S.tracedSVG&&b.default.createElement(T,{alt:i,title:o,src:S.tracedSVG,style:g}),y&&b.default.createElement(p,{title:o,style:{backgroundColor:y,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&b.default.createElement(T,{alt:i,title:o,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:m,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),b.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,h.default)({alt:i,title:o,width:S.width,height:S.height},S))}})))}return null},t}(b.default.Component);z.defaultProps={fadeIn:!0,alt:"",Tag:"div"},z.propTypes={responsiveResolution:m.default.object,responsiveSizes:m.default.object,resolutions:m.default.object,sizes:m.default.object,fadeIn:m.default.bool,title:m.default.string,alt:m.default.string,className:m.default.oneOfType([m.default.string,m.default.object]),outerWrapperClassName:m.default.oneOfType([m.default.string,m.default.object]),style:m.default.object,imgStyle:m.default.object,position:m.default.string,backgroundColor:m.default.oneOfType([m.default.string,m.default.bool]),onLoad:m.default.func,Tag:m.default.string},t.default=z},206:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=o(2),l=i(r),d=o(6),u=i(d),c=o(51),f=(i(c),function(e){function t(){return a(this,t),n(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){console.log(this.props);var e=this.props.data.contentfulBlogPost,t=e.postTitle,o=e.createdAt,i=e.postBody;return l.default.createElement("div",null,l.default.createElement("h1",{style:{borderBottom:"1px solid #ccc",paddingBottom:"0.5rem"}},t),l.default.createElement("p",null,o),l.default.createElement("hr",null),l.default.createElement("div",null,l.default.createElement("div",{dangerouslySetInnerHTML:{__html:i.childMarkdownRemark.html}})))},t}(r.Component));f.PropTypes={data:u.default.object.isRequired},t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-templates-blog-post-js-c34a101b3b9763c43a08.js.map