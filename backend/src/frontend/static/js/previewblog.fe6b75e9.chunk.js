(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[776],{62990:function(e,n,t){"use strict";t.r(n);var r=t(74165),a=t(15861),s=t(15671),l=t(43144),i=t(60136),c=t(72882),o=t(47313),u=t(66135),d=t(33203),h=t(53645),m=t(46417),p=function(e){(0,i.Z)(t,e);var n=(0,c.Z)(t);function t(){var e;(0,s.Z)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(e=n.call.apply(n,[this].concat(a))).state={blog:{}},e}return(0,l.Z)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.auth.isAuthenticated){var n=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=window.location.pathname.split("/preview/")[1],console.log(t),n.next=4,e.context.getBlogData(t);case 4:(a=n.sent).err?alert(a.err):e.setState({blog:a});case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}else window.location.href="/login"}},{key:"render",value:function(){return(0,m.jsx)(h.Z,{blog:this.state.blog})}}]),t}(o.Component);p.contextType=d.Z;n.default=(0,u.$j)((function(e){return{auth:e.auth}}))(p)},53645:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(74165),a=t(15861),s=t(15671),l=t(43144),i=t(60136),c=t(72882),o=t(47313),u=t(70816),d=t.n(u),h=t(36217),m=t(56916),p=t(92675),f=t(73620),x=t(97163),g=t(46417);function j(e){var n=(0,x.defaultLayoutPlugin)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(f.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js",children:(0,g.jsx)("div",{style:{border:"1px solid rgba(0, 0, 0, 0.3)",height:"550px",width:"75%",margin:"0 auto"},children:(0,g.jsx)(f.Viewer,{fileUrl:e.pdf,plugins:[n]})})})})}var v=function(e){(0,i.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,s.Z)(this,t),n.apply(this,arguments)}return(0,l.Z)(t,[{key:"render",value:function(){var e=this.props.textAreaArray,n=e.row,t=e.col,r=[],a=[],s=0;for(s=1;s<=n;s++)r.push(s);for(s=1;s<=t;s++)a.push(s);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{style:{overflowX:"auto"},children:(0,g.jsxs)("table",{className:"table table-striped my-5",children:[(0,g.jsx)("thead",{children:(0,g.jsx)("tr",{children:a.map((function(n,t){return(0,g.jsx)(o.Fragment,{children:(0,g.jsxs)("th",{scope:"col",children:[" ",e.table["0-".concat(n)]]})},n*t*605+45)}))})}),(0,g.jsx)("tbody",{children:r.map((function(n,t){return(0,g.jsx)(o.Fragment,{children:(0,g.jsx)("tr",{children:a.map((function(r,a){return(0,g.jsx)(o.Fragment,{children:(0,g.jsx)("td",{children:e.table["".concat(n,"-").concat(r)]})},r*t*103+49*(a+2))}))})},n*t*103+43)}))})]})})})}}]),t}(o.Component),b=function(e){(0,i.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,s.Z)(this,t),n.apply(this,arguments)}return(0,l.Z)(t,[{key:"render",value:function(){var e=this,n=this.props.img;return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{className:"fun-facts-area",style:{background:"transparent"},children:(0,g.jsxs)("figure",{className:"blog-banner video-area",style:{border:"2px solid black"},children:[(0,g.jsx)("img",{className:"img-fluid",src:n[0],alt:""}),(0,g.jsx)("button",{className:"video-play-btn",onClick:function(){e.props.update(n)},children:(0,g.jsx)("i",{className:"fa fa-play"})})]})})})}}]),t}(o.Component),y=t(70196),w=function(e){(0,i.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,s.Z)(this,t),n.apply(this,arguments)}return(0,l.Z)(t,[{key:"render",value:function(){var e=this.props.textAreaArray;if("object"===typeof e)for(var n=Object.keys(e[0]),t=[],r=0,a=0;a<Object.keys(e).length;a++)"object"===typeof e[a]&&null!==e[a]&&(t[r]=e[a],r+=1);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)("div",{style:{overflowX:"auto"},children:(0,g.jsxs)("table",{className:"table table-striped my-5",children:[(0,g.jsx)("thead",{children:(0,g.jsx)("tr",{children:n.map((function(e,n){return(0,g.jsx)(o.Fragment,{children:(0,g.jsxs)("th",{scope:"col",children:[" ",e]})},605*n+45)}))})}),(0,g.jsx)("tbody",{children:t.map((function(e,r){return(0,g.jsx)(o.Fragment,{children:(0,g.jsx)("tr",{children:n.map((function(e,n){return(0,g.jsx)(o.Fragment,{children:(0,g.jsx)("td",{children:t[r][e]})},103*r+49*(n+2))}))})},103*r+43)}))})]})})})}}]),t}(o.Component),N=t(26400),Z=function(e){(0,i.Z)(t,e);var n=(0,c.Z)(t);function t(e){var l;return(0,s.Z)(this,t),(l=n.call(this,e)).state={images:[]},l.update=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.setState({images:n});case 2:l.child.current.update();case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l.child=o.createRef(),l}return(0,l.Z)(t,[{key:"render",value:function(){var e=this,n=this.props.blog,t=n.tagArray,r=n.textAreaArray;return""!==t&&null!==t&&"undefined"!==typeof t||(t={}),""!==r&&null!==r&&"undefined"!==typeof r||(r={}),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(N.Z,{}),(0,g.jsxs)("div",{className:"main-wrapperBlog",children:[(0,g.jsx)(y.Z,{ref:this.child,images:this.state.images}),(0,g.jsx)("article",{className:"blog-post px-3 py-5 p-md-5",style:{marginBottom:"50px"},children:(0,g.jsxs)("div",{className:"container single-col-max-width",children:[(0,g.jsxs)("header",{className:"blog-post-header",children:[(0,g.jsx)("h2",{className:"title mb-2",children:this.props.blog.blogTitle}),(0,g.jsx)("div",{className:"meta mb-3",children:(0,g.jsxs)("span",{className:"dateBlog",style:{fontFamily:"sans-serif"},children:["Published on ",d()(this.props.blog.date).format("DD MMM YYYY")]})})]}),(0,g.jsx)("div",{className:"blog-post-body",children:Object.keys(t).map((function(n,a){return(0,g.jsxs)(o.Fragment,{children:["h1"===t[n]?(0,g.jsx)("h1",{className:"mt-5 mb-3 boldHeading",children:r[n]}):null,"h2"===t[n]?(0,g.jsx)("h2",{className:"mt-5 mb-3 boldHeading",children:r[n]}):null,"h3"===t[n]?(0,g.jsx)("h3",{className:"mt-5 mb-3 boldHeading",children:r[n]}):null,"h4"===t[n]?(0,g.jsx)("h4",{className:"mt-5 mb-3 boldHeading",children:r[n]}):null,"h5"===t[n]?(0,g.jsx)("h5",{className:"mt-5 mb-3 boldHeading",children:r[n]}):null,"h6"===t[n]?(0,g.jsx)("h6",{className:"mt-5 mb-3 boldHeading",children:r[n]}):null,"p"===t[n]?(0,g.jsx)("p",{dangerouslySetInnerHTML:{__html:r[n]}}):null,"code"===t[n]?(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(h.Z,{language:r[n][2],style:m.Z,children:r[n][1]})}):null,"img"===t[n]?(0,g.jsx)("figure",{className:"blog-banner",children:(0,g.jsx)("a",{href:r[n],target:"_blank",rel:"noopener noreferrer",children:(0,g.jsx)("img",{className:"img-fluidBlog",src:r[n],alt:""})})}):null,"ul"===t[n]?(0,g.jsx)("ul",{className:"mb-5",children:Object.keys(r[n]).map((function(e,t){return(0,g.jsx)("li",{className:"mb-2",children:r[n][e]},e*t*98+e)}))}):null,"ol"===t[n]?(0,g.jsx)("ol",{className:"mb-5",children:Object.keys(r[n]).map((function(e,t){return(0,g.jsx)("li",{className:"mb-2",children:r[n][e]},e*t*23+5*e)}))}):null,"blockquote"===t[n]?(0,g.jsxs)("blockquote",{className:"blockquote m-lg-5 py-3 blogQuoteLined ps-4 px-lg-5",children:[(0,g.jsx)("p",{className:"mb-2",children:r[n][1]}),(0,g.jsx)("div",{className:"blockquote-footer mt-0",children:r[n][2]})]}):null,"iframe"===t[n]?(0,g.jsx)("div",{className:"ratio ratio-16x9",children:(0,g.jsx)("iframe",{title:"My lec",width:"560",height:"315",src:r[n],frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}):null,"table"===t[n]?(0,g.jsx)(v,{textAreaArray:r[n]}):null,"pdf"===t[n]?(0,g.jsx)("div",{className:"mt-4",children:(0,g.jsx)(j,{pdf:r[n]})}):null,"pptx"===t[n]?(0,g.jsx)("div",{className:"mt-4",children:(0,g.jsx)(b,{update:e.update,img:r[n].img})}):null,"csv"===t[n]?(0,g.jsx)(w,{textAreaArray:r[n]}):null]},n*a*6985+985*n)}))}),(0,g.jsxs)("nav",{className:"blog-nav nav nav-justified my-5",children:[(0,g.jsxs)("button",{className:"nav-link-prev nav-item nav-link rounded-left",onClick:function(){e.test()},children:["Previous",(0,g.jsx)("svg",{style:{height:"1em"},className:"svg-inline--fa fa-long-arrow-alt-left fa-w-14 arrow-prev","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"long-arrow-alt-left",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512","data-fa-i2svg":"",children:(0,g.jsx)("path",{fill:"currentColor",d:"M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"})})]}),(0,g.jsxs)("button",{className:"nav-link-next nav-item nav-link rounded-right",children:["Next",(0,g.jsx)("svg",{style:{height:"1em"},className:"svg-inline--fa fa-long-arrow-alt-right fa-w-14 arrow-next","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"long-arrow-alt-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512","data-fa-i2svg":"",children:(0,g.jsx)("path",{fill:"currentColor",d:"M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"})})]})]})]})})]}),(0,g.jsx)(p.Z,{})]})}}]),t}(o.Component)},70196:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(15671),a=t(43144),s=t(60136),l=t(72882),i=t(47313),c=t(68278),o=t(46417),u=function(e){(0,s.Z)(t,e);var n=(0,l.Z)(t);function t(e){var a;return(0,r.Z)(this,t),(a=n.call(this,e)).update=function(){a.setState({isOpen:!0})},a.state={photoIndex:0,isOpen:!1},a}return(0,a.Z)(t,[{key:"render",value:function(){var e=this,n=this.state,t=n.photoIndex,r=n.isOpen,a=this.props.images;return(0,o.jsx)(o.Fragment,{children:r&&(0,o.jsx)(c.Z,{mainSrc:a[t],nextSrc:a[(t+1)%a.length],prevSrc:a[(t+a.length-1)%a.length],onCloseRequest:function(){return e.setState({isOpen:!1})},onMovePrevRequest:function(){return e.setState({photoIndex:(t+a.length-1)%a.length})},onMoveNextRequest:function(){return e.setState({photoIndex:(t+1)%a.length})}})})}}]),t}(i.Component)},93414:function(){},70172:function(){},2001:function(){},33779:function(){},66558:function(){},82258:function(){}}]);