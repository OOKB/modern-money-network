(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"1wty":function(t,e,r){"use strict";var n=r("q1tI"),o=r.n(n),a=r("Wbzz");var p=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var p=n.prototype;return p.getPostList=function(){var t=[];return this.props.postEdges.forEach((function(e){t.push({path:e.node.fields.slug,tags:e.node.frontmatter.tags,cover:e.node.frontmatter.cover,title:e.node.frontmatter.title,date:e.node.fields.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead})})),t},p.render=function(){var t=this.getPostList();return o.a.createElement("div",null,t.map((function(t){return o.a.createElement(a.Link,{to:t.path,key:t.title},o.a.createElement("h1",null,t.title))})))},n}(o.a.Component);e.a=p},amwm:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return u})),r.d(e,"pageQuery",(function(){return l}));var n=r("q1tI"),o=r.n(n),a=r("qhky"),p=r("hpys"),i=r("1wty"),c=r("IpnI"),s=r.n(c);var u=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this.props.pageContext.category,e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"category-container"},o.a.createElement(a.a,{title:'Posts in category "'+t+'" | '+s.a.siteTitle}),o.a.createElement(i.a,{postEdges:e})))},n}(o.a.Component),l="4191571131"}}]);
//# sourceMappingURL=component---src-templates-category-jsx-c4020cfeb9832b3d2b60.js.map