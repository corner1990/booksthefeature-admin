(function(e){function t(t){for(var a,r,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({banner:"banner","edit-product":"edit-product",orders:"orders",product:"product","site-seting":"site-seting"}[e]||e)+"."+{banner:"51fd902b","chunk-2ff1a890":"bcd367ce","chunk-3ba79f9c":"8adacbde","chunk-425b2b77":"da307048","chunk-788cdcfb":"1820282a","edit-product":"aec14783",orders:"488295c0",product:"da0072a1","site-seting":"024c1149"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={banner:1,"chunk-2ff1a890":1,"chunk-3ba79f9c":1,"chunk-425b2b77":1,"chunk-788cdcfb":1,"edit-product":1,orders:1,product:1,"site-seting":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({banner:"banner","edit-product":"edit-product",orders:"orders",product:"product","site-seting":"site-seting"}[e]||e)+"."+{banner:"46426452","chunk-2ff1a890":"2a6d76b7","chunk-3ba79f9c":"f92a721c","chunk-425b2b77":"ec928fda","chunk-788cdcfb":"0e433876","edit-product":"8addbb3a",orders:"ca7e5e5f",product:"96d7e310","site-seting":"6d92ff0b"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"14a1":function(e,t,n){},"2f7f":function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"i",(function(){return d}));var a=n("b775"),r=function(e){return a["a"].post("/api/admin/taskAdmin/getTaskList",e)},o=function(e){return a["a"].post("/api/admin/taskAdmin/getTaskDetail",e)},i=function(e){return a["a"].post("/api/admin/taskAdmin/createTask",e)},s=function(e){return a["a"].post("/api/admin/taskAdmin/updateTask",e)},c=function(e){return a["a"].post("/api/admin/taskAdmin/deleteTask",e)},u=function(e){return a["a"].post("/api/admin/taskAdmin/updateTask",e)},l=function(){return a["a"].get("/api/system/aliyun/getOssSign")},d=function(e){return a["a"].post("/api/system/media/uploadBase64Image ",e,{timeout:3e4})}},"41de":function(e,t,n){"use strict";var a=n("90ad"),r=n.n(a);r.a},5079:function(e,t,n){"use strict";var a=n("cad1"),r=n.n(a);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Layout")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-wrap"},[e.isLogin?[n("router-view")]:[n("Layout")]],2)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sub-layout"},[n("MainHeader"),n("div",{staticClass:"layout-conent"},[n("SideBar"),n("div",{staticClass:"main-content",class:{"content-collapse":e.collapse}},[n("router-view")],1)],1)],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-header flex"},[n("div",{staticClass:"flex left-box"},[n("div",{staticClass:"collapse-btn",on:{click:e.collapseChage}},[e.collapse?n("i",{staticClass:"el-icon-s-unfold collapse-icon"}):n("i",{staticClass:"el-icon-s-fold collapse-icon"})]),n("div",{staticClass:"header-logo"},[e._v("有学有钱 - 管理系统")])]),n("div",{staticClass:"header-right"},[n("div",{staticClass:"header-user-con"},[n("div",{staticClass:"user-avator"},[n("img",{attrs:{src:e.userInfo.avatar?e.userInfo.avatar:"https://ipxcdn.jfshare.com/system/admin/acf6f273c1cd77066b4541308f782a88.png"}})]),n("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.userInfo.nick_name)+" "),n("i",{staticClass:"el-icon-caret-bottom"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[e._v("退出登录")])],1)],1)],1)])])},d=[],f=(n("96cf"),n("1da1")),p=new a["default"],m=p,g={name:"main-header",props:{msg:String},data:function(){return{collapse:!1,userInfo:{nick_name:"管理员",avatar:"http://saidad.oss-cn-guangzhou.aliyuncs.com/image/9ec96a9f12eaf8f8abd0e1bf80b41811.png"}}},methods:{collapseChage:function(){this.collapse=!this.collapse,m.$emit("collapse",this.collapse)},handleCommand:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:"loginout"==e&&(window.localStorage.removeItem("$user_id"),window.localStorage.removeItem("$_token"),window.localStorage.removeItem("$_user_info"),t.$router.push("/login"));case 1:case"end":return n.stop()}}),n)})))()}},created:function(){m.$emit("collapse",this.collapse)}},h=g,b=(n("d7c2"),n("2877")),v=Object(b["a"])(h,l,d,!1,null,"1b40802a",null),k=v.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":e.onRoutes,collapse:e.collapse,"background-color":"#f8f8f8","text-color":"#666","active-text-color":"#40c9b3","unique-opened":"",router:""}},[e._l(e.items,(function(t){return[t.subs?[n("el-submenu",{key:t.index,attrs:{index:t.index,"default-active":e.active}},[n("template",{slot:"title"},[n("i",{class:t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])]),e._l(t.subs,(function(t){return[t.subs?n("el-submenu",{key:t.index,attrs:{index:t.index}},[n("template",{slot:"title"},[e._v(e._s(t.title))]),e._l(t.subs,(function(t,a){return n("el-menu-item",{key:a,attrs:{index:t.index}},[e._v(e._s(t.title))])}))],2):n("el-menu-item",{key:t.index,attrs:{index:t.index}},[e._v(e._s(t.title))])]}))],2)]:[n("el-menu-item",{key:t.index,attrs:{index:t.index}},[n("i",{class:t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])]]}))],2)],1)},_=[],y=(n("ac1f"),n("5319"),{data:function(){return{collapse:!1,active:"/orders/index",items:[{icon:"el-icon-s-order",index:"/orders/index",title:"任务清单管理"},{icon:"el-icon-s-goods",index:"/task",title:"任务模版"},{icon:"el-icon-news",index:"/user-manager",title:"用户管理"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var e=this;m.$on("collapse",(function(t){e.collapse=t,m.$emit("collapse-content",t)}))}}),x=y,I=(n("41de"),Object(b["a"])(x,w,_,!1,null,"d7efb57c",null)),C=I.exports,O={name:"layout",components:{MainHeader:k,SideBar:C},data:function(){return{collapse:!1}},created:function(){var e=this;m.$on("collapse-content",(function(t){e.collapse=t}))}},j=O,S=(n("5079"),Object(b["a"])(j,c,u,!1,null,"71b55fd9",null)),A=S.exports,$={name:"layout-wrap",props:{msg:String},components:{Layout:A},computed:{isLogin:function(){var e=this.$route.path;return/login/gi.test(e)}}},P=$,L=(n("889a"),Object(b["a"])(P,i,s,!1,null,"73061044",null)),E=L.exports,T={name:"App",components:{Layout:E}},B=T,R=(n("034f"),Object(b["a"])(B,r,o,!1,null,null,null)),M=R.exports,N=n("5c96"),H=n.n(N),q=(n("6fff"),n("a18c")),J=n("2f62"),D=n("2f7f"),U=n("b775"),z=function(e){return U["a"].post("/api/admin/feedAdmin/sendNewsInfo",e)},F={namespaced:!0,state:{product:{index:null,list:[],selectedInfo:{}},banner:{title:"",background:""},contentHtml:"",loading:!1,original:1,authorId:"",userInfo:{userBaseInfo:null}},getters:{newsInfo:function(e){return{title:e.banner.title,content:e.contentHtml,main_image:e.banner.background,sku_id:e.product.selectedInfo.id,author_id:e.userInfo.userBaseInfo?e.userInfo.id:"",is_original:e.original}}},mutations:{updateProductIndex:function(e,t){e.product.index=t,e.product.selectedInfo=e.product.list[t]||{}},updateProductList:function(e,t){e.product.list=t},updateProductSelected:function(e,t){e.product.selectedInfo=t},updateBannerTitle:function(e,t){e.banner.title=t},updateBannerBackground:function(e,t){e.banner.background=t},updateContentHtml:function(e,t){e.contentHtml=t},updateOriginal:function(e,t){e.original=t},updateUserInfo:function(e,t){e.userInfo=t},reset:function(e){e.product={index:null,list:[],selectedInfo:{}},e.banner={title:"输入一些炫酷的标题，吸引用户不自觉地无法克制地点击",background:""},e.contentHtml="",e.loading=!1,e.original=1,e.userInfo={userBaseInfo:null}}},actions:{searchAdsProduct:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var a,r,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=e.commit,n.next=3,Object(D["getProductList"])({publish_type:1,index:0,name:t});case 3:r=n.sent,o=r.errorCode,i=r.data,0===o&&a("updateProductList",i.product_item_list);case 7:case"end":return n.stop()}}),n)})))()},publish:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getters,a=e.state,a.loading=!0,t.next=4,z(n.newsInfo);case 4:r=t.sent,o=r.errorCode,a.loading=!1,0===o&&N["Message"].success("发布成功");case 8:case"end":return t.stop()}}),t)})))()}}},K={namespaced:!0,modules:{ads:F}},G={namespaced:!0,state:{info:{},showDetail:!1},getters:{},mutations:{update:function(e,t){var n=t.val,a=t.key;e[a]=n}},actions:{}};a["default"].use(J["a"]);var Q=new J["a"].Store({modules:{material:K,product:G}});a["default"].use(H.a),a["default"].config.productionTip=!1,new a["default"]({render:function(e){return e(M)},router:q["a"],store:Q}).$mount("#app")},"6fff":function(e,t,n){},"85ec":function(e,t,n){},"889a":function(e,t,n){"use strict";var a=n("a641"),r=n.n(a);r.a},"90ad":function(e,t,n){},a18c:function(e,t,n){"use strict";n("99af");var a=n("2909"),r=n("2b0e"),o=n("8c4f"),i=(n("d3b7"),function(){return n.e("chunk-3ba79f9c").then(n.bind(null,"efcf"))}),s=[{path:"/login",name:"login",component:i,meta:{title:"登录",keepAlive:!0}}],c=s,u=function(){return n.e("chunk-788cdcfb").then(n.bind(null,"f5b8"))},l=[{path:"/",meta:{title:"home",keepAlive:!0},redirect:{path:"/orders/index"}},{path:"/home",name:"Home",component:u,meta:{title:"首页",keepAlive:!0}}],d=l,f=function(){return n.e("product").then(n.bind(null,"6569"))},p=function(){return n.e("edit-product").then(n.bind(null,"0d1e"))},m=function(){return n.e("edit-product").then(n.bind(null,"0d1e"))},g=[{path:"/task",name:"task",component:f,meta:{title:"任务模版",keepAlive:!0}},{path:"/release-task",name:"Releasetask",component:p,meta:{title:"发布任务",keepAlive:!0}},{path:"/edit-task",name:"EditTask",component:m,meta:{title:"编辑任务",keepAlive:!0}}],h=g,b=function(){return n.e("chunk-2ff1a890").then(n.bind(null,"5222"))},v=function(){return n.e("chunk-425b2b77").then(n.bind(null,"557d"))},k=[{path:"/orders/index",name:"orders",component:b,meta:{title:"任务清单管理",keepAlive:!0}},{path:"/orders/task-over",name:"orders",component:v,meta:{title:"任务结束审核",keepAlive:!0}}],w=k,_=[{path:"/upload-img",component:function(){return n.e("orders").then(n.bind(null,"3a65"))},meta:{title:"上传图片"}}],y=function(){return n.e("banner").then(n.bind(null,"cf81"))},x=[{path:"/user-manager",name:"UserManager",component:y,meta:{title:"用户管理",keepAlive:!0}}],I=x,C=function(){return n.e("site-seting").then(n.bind(null,"cac6"))},O=[{path:"/site-seting",name:"SiteSeting",component:C,meta:{title:"站点配置",keepAlive:!0}}],j=O,S=[].concat(Object(a["a"])(c),Object(a["a"])(d),Object(a["a"])(h),Object(a["a"])(w),Object(a["a"])(I),Object(a["a"])(_),Object(a["a"])(j));r["default"].use(o["a"]);var A=new o["a"]({mode:"history",routes:S});A.beforeEach((function(e,t,n){window.document.title=e.meta.title,n()})),A.beforeResolve((function(e,t,n){n()}));t["a"]=A},a641:function(e,t,n){},b775:function(e,t,n){"use strict";n("caad"),n("d3b7"),n("ac1f"),n("5319");var a=n("bc3a"),r=n.n(a),o=n("a18c"),i=n("5c96"),s={},c=window.localStorage.getItem("$_token"),u=["/api/admin/IndexAdmin/sendCode","/api/admin/IndexAdmin/verifyLoginCode"];c&&(s=JSON.parse(c));var l=r.a.create({timeout:5e3});l.interceptors.request.use((function(e){if(!s.access_token&&/follow\/follow/gi.test(e.url)){var t=o["a"].currentRoute,n=t.path,a=t.query,r=t.params;return window.localStorage.setItem("$_reject",JSON.stringify({path:n,query:a,params:r})),o["a"].replace("/login"),e}u.includes(e.url)||(e.headers.Authorization="Bearer "+s.access_token);var i=window.localStorage.getItem("$user_id");return e.data&&(e.data.platform="admin",e.data["user_id"]=i||0),e.params&&(e.params.platform="admin",e.params["user_id"]=i||0),e}),(function(e){return console.log(e),Promise.reject()})),l.interceptors.response.use((function(e){if(200===e.status){var t=e.config,n=e.data,a=n.errorCode,r=n.errorMessage,c=[400,401,402,403];if(c.includes(a)){window.localStorage.removeItem("$user_id"),window.localStorage.removeItem("$_token"),window.localStorage.removeItem("$_user_info");var u=o["a"].currentRoute,l=u.path,d=u.query,f=u.params;window.localStorage.setItem("$_reject",JSON.stringify({path:l,query:d,params:f})),o["a"].replace("/login")}if([0,401,402].includes(a)){var p=/adminAccountLogin/gi;p.test(t.url)&&(console.log("response",e),s=e.data.data,window.localStorage.setItem("$_token",JSON.stringify(s)))}else i["Message"].error({message:r,position:"middle",duration:2e3});return e.data}Promise.reject()}),(function(e){return console.log(e),Promise.reject()})),t["a"]=l},cad1:function(e,t,n){},d7c2:function(e,t,n){"use strict";var a=n("14a1"),r=n.n(a);r.a}});
//# sourceMappingURL=app.ac4ffdf9.js.map