webpackJsonp([35783957827783],{304:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof E&&"undefined"!=typeof window&&window.IntersectionObserver&&(E=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),E}t.__esModule=!0;var n=a(40),r=i(n),s=a(55),l=i(s),d=a(54),u=i(d),c=a(128),f=i(c),p=a(127),g=i(p),y=a(4),h=i(y),m=a(7),b=i(m),v=function(e){var t=(0,g.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},S=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},E=void 0,L=[],O=function(e,t){o().observe(e),L.push([e,t])},j=null,T=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},z=function(e){var t=e.opacity,a=void 0===t?"1":t,i=e.src,o=e.srcSet,n=e.sizes,r=void 0===n?"":n,s=e.title,l=void 0===s?"":s,d=e.alt,u=void 0===d?"":d,c=e.width,f=void 0===c?"":c,p=e.height,g=void 0===p?"":p,y=e.transitionDelay,h=void 0===y?"0.5s":y;return'<img width="'+f+'" height="'+g+'" src="'+i+'" srcset="'+o+'" alt="'+u+'" title="'+l+'" sizes="'+r+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+h+";opacity:"+a+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},I=function(e){var t=e.style,a=e.onLoad,i=(0,f.default)(e,["style","onLoad"]);return h.default.createElement("img",(0,g.default)({},i,{onLoad:a,style:(0,g.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};I.propTypes={style:b.default.object,onLoad:b.default.func};var R=function(e){function t(a){(0,r.default)(this,t);var i=(0,l.default)(this,e.call(this,a)),o=!0,n=!0,s=!1,d=S(a);return!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,n=!1,s=!0),"undefined"==typeof window&&(o=!1,n=!1),i.state={isVisible:o,imgLoaded:n,IOSupported:s},i.handleRef=i.handleRef.bind(i),i}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&O(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,i=t.alt,o=t.className,n=t.outerWrapperClassName,r=t.style,s=void 0===r?{}:r,l=t.imgStyle,d=void 0===l?{}:l,u=t.sizes,c=t.resolutions,f=t.backgroundColor,p=t.Tag,y=void 0;y="boolean"==typeof f?"lightgray":f;var m=(0,g.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},d),b=(0,g.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},d);if(u){var w=u;return w.srcWebp&&w.srcSetWebp&&T()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),h.default.createElement(p,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},h.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,g.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},h.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&h.default.createElement(I,{alt:i,title:a,src:w.base64,style:m}),w.tracedSVG&&h.default.createElement(I,{alt:i,title:a,src:w.tracedSVG,style:m}),y&&h.default.createElement(p,{title:a,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&h.default.createElement(I,{alt:i,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:b,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,g.default)({alt:i,title:a},w))}})))}if(c){var S=c,E=(0,g.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},s);return"inherit"===s.display&&delete E.display,S.srcWebp&&S.srcSetWebp&&T()&&(S.src=S.srcWebp,S.srcSet=S.srcSetWebp),h.default.createElement(p,{className:(n?n:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},h.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:E,ref:this.handleRef},S.base64&&h.default.createElement(I,{alt:i,title:a,src:S.base64,style:m}),S.tracedSVG&&h.default.createElement(I,{alt:i,title:a,src:S.tracedSVG,style:m}),y&&h.default.createElement(p,{title:a,style:{backgroundColor:y,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&h.default.createElement(I,{alt:i,title:a,width:S.width,height:S.height,srcSet:S.srcSet,src:S.src,style:b,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,g.default)({alt:i,title:a,width:S.width,height:S.height},S))}})))}return null},t}(h.default.Component);R.defaultProps={fadeIn:!0,alt:"",Tag:"div"},R.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=R},103:function(e,t,a){!function(t,a){e.exports=a()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,n=Object.getOwnPropertyDescriptor,r=Object.getPrototypeOf,s=r&&r(Object);return function l(d,u,c){if("string"!=typeof u){if(s){var f=r(u);f&&f!==s&&l(d,f,c)}var p=i(u);o&&(p=p.concat(o(u)));for(var g=0;g<p.length;++g){var y=p[g];if(!(e[y]||t[y]||c&&c[y])){var h=n(u,y);try{a(d,y,h)}catch(e){}}}return d}return d}})},203:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=a(4),n=i(o),r=a(99),s=i(r),l=a(304),d=i(l),u=function(e){var t=e.node;return n.default.createElement("div",{style:{marginBottom:"1.5rem",padding:"1.5rem",border:"1px solid #ccc"}},n.default.createElement("h3",null,n.default.createElement(s.default,{to:t.postTitle},t.postTitle)),n.default.createElement("p",null,t.createdAt),n.default.createElement("div",null,n.default.createElement("div",null,n.default.createElement(d.default,{resolutions:t.featuredImage.resolutions})),n.default.createElement("div",null,t.content.childMarkdownRemark.excerpt)))},c=function(e){return console.log(e),n.default.createElement("div",null,e.data.allContentfulBlogPost.edges.map(function(e){return n.default.createElement(u,{key:e.node.postTitle,node:e.node})}))};t.default=c;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-1602bde5778274a27051.js.map