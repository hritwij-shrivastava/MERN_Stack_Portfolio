"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[239],{57385:function(e,s,t){t.r(s),t.d(s,{Blog:function(){return _},default:function(){return N}});var r=t(74165),n=t(15861),l=t(15671),a=t(43144),i=t(60136),c=t(72882),o=t(47313),d=t(90182),h=t(1413),p=t(29466),x=t(44021),u=t(70816),g=t.n(u),m=t(33203),j=t(46417);function f(e){var s=(0,o.useContext)(m.Z).webAddress,t=e.blogs;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("aside",{className:"ps-widget ps-widget--popular-posts",children:[(0,j.jsx)("h4",{className:"ps-widget__heading",children:(0,j.jsx)("span",{children:"Popular Posts"})}),(0,j.jsx)("div",{className:"ps-widget__content",children:(0,j.jsx)("div",{className:"card__container",children:(0,j.jsx)(x.Z,(0,h.Z)((0,h.Z)({},{dots:!1,infinite:!0,speed:500,autoplay:!0,autoplaySpeed:2e3,slidesToShow:1,slidesToScroll:1,initialSlide:0,pauseOnHover:!0}),{},{className:"card__container--inner",children:t.map((function(e,t){return(0,j.jsx)("div",{className:"card__container--inner--card",children:(0,j.jsxs)("article",{className:"ps-post ps-post--inside small",children:[(0,j.jsxs)("div",{className:"ps-post__thumbnail",children:[(0,j.jsx)(p.rU,{className:"ps-post__overlay",to:e.url}),(0,j.jsx)("img",{src:"".concat(s).concat(e.textAreaArray[0][1]),alt:e.textAreaArray[0][2]})]}),(0,j.jsxs)("div",{className:"ps-post__content",children:[(0,j.jsx)("div",{className:"ps-post__meta",children:(0,j.jsx)("span",{className:"ps-post__posted",children:g()(e.date).format("MMM DD, YYYY")})}),(0,j.jsx)("h4",{className:"ps-post__title",children:(0,j.jsx)(p.rU,{to:e.url,children:e.blogTitle})})]})]})},t)}))}))})})]})})}var v=function(e){(0,i.Z)(t,e);var s=(0,c.Z)(t);function t(){return(0,l.Z)(this,t),s.apply(this,arguments)}return(0,a.Z)(t,[{key:"render",value:function(){var e=this.props.blog,s="2022-06-08T14:02:47.502+00:00",t="",r="",n="";return"undefined"!==typeof e&&null!==e&&(s=e.date,t=e.url,r=e.blogTitle,"undefined"!==typeof e.textAreaArray&&null!==e.textAreaArray&&(n=e.textAreaArray[0])),(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",children:(0,j.jsxs)("article",{className:"single-blog",children:[(0,j.jsxs)("div",{className:"blog-thumbnail",children:[(0,j.jsx)(p.rU,{to:t,children:(0,j.jsx)("img",{src:this.props.webAddress+n[1],alt:n[2]})}),(0,j.jsx)(p.rU,{to:t,className:"catagory-name",children:"Blog"}),(0,j.jsxs)("div",{className:"blog-date",children:[(0,j.jsx)("h3",{children:g()(s).format("DD")}),(0,j.jsx)("span",{children:g()(s).format("MMM")})]})]}),(0,j.jsxs)("div",{className:"blog-info",children:[(0,j.jsxs)("h4",{className:"author-name",children:["By ",(0,j.jsx)(p.rU,{to:t,children:"Hritwij Shrivastava"})]}),(0,j.jsx)("h3",{className:"post-title",children:(0,j.jsx)(p.rU,{to:t,children:r})})]})]})})})}}]),t}(o.Component),w=t(97821),b=function(e){(0,i.Z)(t,e);var s=(0,c.Z)(t);function t(){return(0,l.Z)(this,t),s.apply(this,arguments)}return(0,a.Z)(t,[{key:"render",value:function(){var e=this;return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("aside",{className:"ps-widget ps-widget--popular-posts",children:[(0,j.jsx)("h4",{className:"ps-widget__heading",children:(0,j.jsx)("span",{children:"Recent Posts"})}),(0,j.jsx)("div",{className:"ps-widget__content",children:this.props.blogs.map((function(s,t){return(0,j.jsxs)("article",{className:"ps-post ps-post--horizontal small",children:[(0,j.jsxs)("div",{className:"ps-post__thumbnail",children:[(0,j.jsx)(p.rU,{className:"ps-post__overlay",to:s.url}),(0,j.jsx)("img",{src:"".concat(e.context.webAddress).concat(s.textAreaArray[0][1]),alt:s.textAreaArray[0][2]})]}),(0,j.jsx)("div",{className:"ps-post__wrapper",children:(0,j.jsxs)("div",{className:"ps-post__content",children:[(0,j.jsx)("h4",{className:"ps-post__title",children:(0,j.jsx)(p.rU,{to:s.url,children:s.blogTitle})}),(0,j.jsx)("div",{className:"ps-post__meta",children:(0,j.jsx)("span",{className:"ps-post__posted",children:g()(s.date).format("MMM DD, YYYY")})})]})})]},t)}))})]})})}}]),t}(o.Component);b.contextType=m.Z;var _=function(e){(0,i.Z)(t,e);var s=(0,c.Z)(t);function t(){var e;(0,l.Z)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=s.call.apply(s,[this].concat(i))).state={blogs:[],totalBlogs:0,currPage:1,recent:[],popular:[]},e.getAllBlog=function(){var s=(0,n.Z)((0,r.Z)().mark((function s(t){var n;return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e.context.getAllBlog(t,1,6);case 2:return n=s.sent,s.next=5,e.setState({blogs:n.blogs,totalBlogs:n.totalLength,recent:n.recent,popular:n.popular,currPage:t});case 5:window.scrollTo(0,0);case 6:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}(),e.componentDidMount=(0,n.Z)((0,r.Z)().mark((function s(){return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(0!==Object.keys(e.context.userdata).length){s.next=3;break}return s.next=3,e.context.getData();case 3:e.getAllBlog(1);case 4:case"end":return s.stop()}}),s)}))),e}return(0,a.Z)(t,[{key:"render",value:function(){var e=this;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(d.q,{children:(0,j.jsx)("link",{rel:"canonical",href:"https://hritwij.com/blog/"})}),(0,j.jsx)("div",{className:"firstcontainer",children:(0,j.jsx)("div",{style:{background:"#ffff",padding:"1px"},children:(0,j.jsx)("div",{className:"container",children:(0,j.jsxs)("section",{className:"ps-blog--sidebar",children:[(0,j.jsx)("div",{className:"ps-section__left",children:(0,j.jsx)("div",{className:"ps-section__items",children:(0,j.jsx)("div",{className:"ps-blog--post-items",children:(0,j.jsxs)("div",{className:"ps-post-items",children:[this.state.blogs.length>0?(0,j.jsx)("div",{className:"row",children:this.state.blogs.map((function(s,t){return(0,j.jsx)(v,{blog:s,webAddress:e.context.webAddress},t)}))}):null,(0,j.jsx)("div",{className:"row mt-5",children:(0,j.jsx)("div",{className:"col text-center",style:{marginBottom:"25px"},children:(0,j.jsx)("div",{className:"block-27",children:(0,j.jsx)("ul",{children:(0,j.jsx)(w.Z,{getAllBlog:this.getAllBlog,totalBlogs:this.state.totalBlogs,currPage:this.state.currPage})})})})})]})})})}),(0,j.jsx)("div",{className:"ps-section__right",children:(0,j.jsxs)("div",{className:"ps-sidebar ps-sidebar--home",children:[(0,j.jsx)("aside",{className:"ps-widget ps-widget--search",children:(0,j.jsx)("form",{method:"get",children:(0,j.jsxs)("div",{className:"form-group",children:[(0,j.jsx)("input",{className:"form-control",placeholder:"Enter your keyword?"}),(0,j.jsx)("button",{"aria-label":"search-btn",children:(0,j.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 32 32",children:(0,j.jsx)("path",{d:"M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"})})})]})})}),(0,j.jsx)(f,{blogs:this.state.popular}),(0,j.jsx)(b,{blogs:this.state.recent}),(0,j.jsxs)("aside",{className:"ps-widget ps-widget--follow-me",children:[(0,j.jsx)("h4",{className:"ps-widget__heading",children:(0,j.jsx)("span",{children:"Follow Me"})}),(0,j.jsxs)("div",{className:"ps-widget__content",children:[(0,j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/hritwij.shrivastava/",children:"Facebook"}),(0,j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/hritwij/",children:"Linkedin"}),(0,j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.youtube.com/channel/UCXb45TeeuSM_OYDY-UN6WCQ",children:"Youtube"}),(0,j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/hritwij_shrivastava/",children:"Instagram"}),(0,j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/hritwij-shrivastava",children:"Github"}),(0,j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.kaggle.com/hritwij",children:"Kaggle"})]})]})]})})]})})})})]})}}]),t}(o.Component);_.contextType=m.Z;var N=_},97821:function(e,s,t){t.d(s,{Z:function(){return n}});t(47313);var r=t(46417);function n(e){var s=e.totalBlogs,t=e.currPage,n=[],l=1,a=4,i=Math.ceil(s/6);i>4&&t>4&&(l=t-3,a=t),i<4&&(a=i);for(var c=l;c<=a;c++)n.push(c);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("li",{style:{padding:"0 5px"},children:(0,r.jsx)("button",{onClick:function(){e.getAllBlog(1)},style:{width:"100px"},children:"First Page"})}),(0,r.jsx)("br",{className:"showInMobile"}),1===e.currPage?null:(0,r.jsx)("li",{style:{padding:"0 5px"},children:(0,r.jsx)("button",{onClick:function(){e.getAllBlog(t-1)},children:"<"})}),n.map((function(s,t){return(0,r.jsx)("li",{className:e.currPage===s?"active":null,style:{padding:"0 5px"},children:(0,r.jsx)("button",{onClick:function(){e.getAllBlog(s)},children:s})},t)})),e.currPage===i?null:(0,r.jsx)("li",{style:{padding:"0 5px"},children:(0,r.jsx)("button",{onClick:function(){e.getAllBlog(t+1)},children:">"})}),(0,r.jsx)("br",{className:"showInMobile"}),(0,r.jsx)("li",{style:{padding:"0 5px"},children:(0,r.jsx)("button",{onClick:function(){e.getAllBlog(i)},style:{width:"100px"},children:"Last Page"})})]})}}}]);