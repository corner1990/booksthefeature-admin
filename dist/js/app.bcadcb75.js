(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({banner:"banner","edit-product":"edit-product",orders:"orders",product:"product","site-seting":"site-seting"}[e]||e)+"."+{banner:"e43763ca","chunk-20188942":"270e1062","chunk-788cdcfb":"1820282a","chunk-e0711d7c":"19e63093","chunk-e9de473c":"a79a228a","edit-product":"a6b75d14",orders:"488295c0",product:"da0072a1","site-seting":"024c1149"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={banner:1,"chunk-20188942":1,"chunk-788cdcfb":1,"chunk-e0711d7c":1,"chunk-e9de473c":1,"edit-product":1,orders:1,product:1,"site-seting":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({banner:"banner","edit-product":"edit-product",orders:"orders",product:"product","site-seting":"site-seting"}[e]||e)+"."+{banner:"f10278b4","chunk-20188942":"7ed694e8","chunk-788cdcfb":"0e433876","chunk-e0711d7c":"9dc0216b","chunk-e9de473c":"623c66aa","edit-product":"6f3727e5",orders:"ca7e5e5f",product:"96d7e310","site-seting":"6d92ff0b"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01f8":function(e,t,n){"use strict";var r=n("fc3b"),a=n.n(r);a.a},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"2f7f":function(e,t,n){"use strict";n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return i})),n.d(t,"g",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"i",(function(){return d}));var r=n("b775"),a=function(e){return r["a"].post("/api/admin/taskAdmin/getTaskList",e)},o=function(e){return r["a"].post("/api/admin/taskAdmin/getTaskDetail",e)},i=function(e){return r["a"].post("/api/admin/taskAdmin/createTask",e)},s=function(e){return r["a"].post("/api/admin/taskAdmin/updateTask",e)},c=function(e){return r["a"].post("/api/admin/taskAdmin/deleteTask",e)},u=function(e){return r["a"].post("/api/admin/taskAdmin/updateTask",e)},l=function(){return r["a"].get("/api/system/aliyun/getOssSign")},d=function(e){return r["a"].post("/api/system/media/uploadBase64Image ",e,{timeout:3e4})}},"41de":function(e,t,n){"use strict";var r=n("90ad"),a=n.n(r);a.a},5079:function(e,t,n){"use strict";var r=n("cad1"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Layout")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"layout-wrap"},[e.isLogin?[n("router-view")]:[n("Layout")]],2)},s=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sub-layout"},[n("MainHeader"),n("div",{staticClass:"layout-conent"},[n("SideBar"),n("div",{staticClass:"main-content",class:{"content-collapse":e.collapse}},[n("router-view")],1)],1)],1)},u=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-header flex"},[n("div",{staticClass:"flex left-box"},[n("div",{staticClass:"collapse-btn",on:{click:e.collapseChage}},[e.collapse?n("i",{staticClass:"el-icon-s-unfold collapse-icon"}):n("i",{staticClass:"el-icon-s-fold collapse-icon"})]),n("div",{staticClass:"header-logo"},[e._v("游学有钱 - 管理系统")])]),n("div",{staticClass:"header-right"},[n("div",{staticClass:"header-user-con"},[n("div",{staticClass:"user-avator"},[n("img",{attrs:{src:e.userInfo.avatar?e.userInfo.avatar:"https://ipxcdn.jfshare.com/system/admin/acf6f273c1cd77066b4541308f782a88.png"}})]),n("el-dropdown",{staticClass:"user-name",attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[e._v(" "+e._s(e.userInfo.nick_name)+" "),n("i",{staticClass:"el-icon-caret-bottom"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{divided:"",command:"loginout"}},[e._v("退出登录")])],1)],1)],1)])])},d=[],f=(n("96cf"),n("1da1")),p=new r["default"],m=p,g={name:"main-header",props:{msg:String},data:function(){return{collapse:!1,userInfo:{nick_name:"小花仙",avatar:"https://ipxcdn.jfshare.com/system/admin/acf6f273c1cd77066b4541308f782a88.png"}}},methods:{collapseChage:function(){this.collapse=!this.collapse,m.$emit("collapse",this.collapse)},handleCommand:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:"loginout"==e&&(window.localStorage.removeItem("$user_id"),window.localStorage.removeItem("$_token"),window.localStorage.removeItem("$_user_info"),t.$router.push("/login"));case 1:case"end":return n.stop()}}),n)})))()}},created:function(){m.$emit("collapse",this.collapse)}},h=g,v=(n("01f8"),n("2877")),b=Object(v["a"])(h,l,d,!1,null,"4b95f21b",null),k=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar"},[n("el-menu",{staticClass:"sidebar-el-menu",attrs:{"default-active":e.onRoutes,collapse:e.collapse,"background-color":"#f8f8f8","text-color":"#666","active-text-color":"#40c9b3","unique-opened":"",router:""}},[e._l(e.items,(function(t){return[t.subs?[n("el-submenu",{key:t.index,attrs:{index:t.index,"default-active":e.active}},[n("template",{slot:"title"},[n("i",{class:t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])]),e._l(t.subs,(function(t){return[t.subs?n("el-submenu",{key:t.index,attrs:{index:t.index}},[n("template",{slot:"title"},[e._v(e._s(t.title))]),e._l(t.subs,(function(t,r){return n("el-menu-item",{key:r,attrs:{index:t.index}},[e._v(e._s(t.title))])}))],2):n("el-menu-item",{key:t.index,attrs:{index:t.index}},[e._v(e._s(t.title))])]}))],2)]:[n("el-menu-item",{key:t.index,attrs:{index:t.index}},[n("i",{class:t.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.title))])])]]}))],2)],1)},_=[],y=(n("ac1f"),n("5319"),{data:function(){return{collapse:!1,active:"/orders/index",items:[{icon:"el-icon-s-order",index:"/orders/index",title:"任务清单管理"},{icon:"el-icon-s-goods",index:"/task",title:"任务模版"},{icon:"el-icon-news",index:"/user-manager",title:"用户管理"}]}},computed:{onRoutes:function(){return this.$route.path.replace("/","")}},created:function(){var e=this;m.$on("collapse",(function(t){e.collapse=t,m.$emit("collapse-content",t)}))}}),x=y,I=(n("41de"),Object(v["a"])(x,w,_,!1,null,"d7efb57c",null)),C=I.exports,j={name:"layout",components:{MainHeader:k,SideBar:C},data:function(){return{collapse:!1}},created:function(){var e=this;m.$on("collapse-content",(function(t){e.collapse=t}))}},O=j,S=(n("5079"),Object(v["a"])(O,c,u,!1,null,"71b55fd9",null)),A=S.exports,$={name:"layout-wrap",props:{msg:String},components:{Layout:A},computed:{isLogin:function(){var e=this.$route.path;return/login/gi.test(e)}}},P=$,L=(n("889a"),Object(v["a"])(P,i,s,!1,null,"73061044",null)),E=L.exports,T={name:"App",components:{Layout:E}},B=T,R=(n("034f"),Object(v["a"])(B,a,o,!1,null,null,null)),M=R.exports,N=n("5c96"),H=n.n(N),q=(n("6fff"),n("a18c")),J=n("2f62"),D=n("2f7f"),U=n("b775"),z=function(e){return U["a"].post("/api/admin/feedAdmin/sendNewsInfo",e)},F={namespaced:!0,state:{product:{index:null,list:[],selectedInfo:{}},banner:{title:"",background:""},contentHtml:"",loading:!1,original:1,authorId:"",userInfo:{userBaseInfo:null}},getters:{newsInfo:function(e){return{title:e.banner.title,content:e.contentHtml,main_image:e.banner.background,sku_id:e.product.selectedInfo.id,author_id:e.userInfo.userBaseInfo?e.userInfo.id:"",is_original:e.original}}},mutations:{updateProductIndex:function(e,t){e.product.index=t,e.product.selectedInfo=e.product.list[t]||{}},updateProductList:function(e,t){e.product.list=t},updateProductSelected:function(e,t){e.product.selectedInfo=t},updateBannerTitle:function(e,t){e.banner.title=t},updateBannerBackground:function(e,t){e.banner.background=t},updateContentHtml:function(e,t){e.contentHtml=t},updateOriginal:function(e,t){e.original=t},updateUserInfo:function(e,t){e.userInfo=t},reset:function(e){e.product={index:null,list:[],selectedInfo:{}},e.banner={title:"输入一些炫酷的标题，吸引用户不自觉地无法克制地点击",background:""},e.contentHtml="",e.loading=!1,e.original=1,e.userInfo={userBaseInfo:null}}},actions:{searchAdsProduct:function(e,t){return Object(f["a"])(regeneratorRuntime.mark((function n(){var r,a,o,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,Object(D["getProductList"])({publish_type:1,index:0,name:t});case 3:a=n.sent,o=a.errorCode,i=a.data,0===o&&r("updateProductList",i.product_item_list);case 7:case"end":return n.stop()}}),n)})))()},publish:function(e){return Object(f["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.getters,r=e.state,r.loading=!0,t.next=4,z(n.newsInfo);case 4:a=t.sent,o=a.errorCode,r.loading=!1,0===o&&N["Message"].success("发布成功");case 8:case"end":return t.stop()}}),t)})))()}}},K={namespaced:!0,modules:{ads:F}},G={namespaced:!0,state:{info:{},showDetail:!1},getters:{},mutations:{update:function(e,t){var n=t.val,r=t.key;e[r]=n}},actions:{}};r["default"].use(J["a"]);var Q=new J["a"].Store({modules:{material:K,product:G}});r["default"].use(H.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(M)},router:q["a"],store:Q}).$mount("#app")},"6fff":function(e,t,n){},"85ec":function(e,t,n){},"889a":function(e,t,n){"use strict";var r=n("a641"),a=n.n(r);a.a},"90ad":function(e,t,n){},a18c:function(e,t,n){"use strict";n("99af");var r=n("2909"),a=n("2b0e"),o=n("8c4f"),i=(n("d3b7"),function(){return n.e("chunk-e0711d7c").then(n.bind(null,"efcf"))}),s=[{path:"/login",name:"login",component:i,meta:{title:"登录",keepAlive:!0}}],c=s,u=function(){return n.e("chunk-788cdcfb").then(n.bind(null,"f5b8"))},l=[{path:"/",meta:{title:"home",keepAlive:!0},redirect:{path:"/calendar/index"}},{path:"/home",name:"Home",component:u,meta:{title:"首页",keepAlive:!0}}],d=l,f=function(){return n.e("product").then(n.bind(null,"6569"))},p=function(){return n.e("edit-product").then(n.bind(null,"0d1e"))},m=function(){return n.e("edit-product").then(n.bind(null,"0d1e"))},g=[{path:"/task",name:"task",component:f,meta:{title:"任务模版",keepAlive:!0}},{path:"/release-task",name:"Releasetask",component:p,meta:{title:"发布任务",keepAlive:!0}},{path:"/edit-task",name:"EditTask",component:m,meta:{title:"编辑任务",keepAlive:!0}}],h=g,v=function(){return n.e("chunk-20188942").then(n.bind(null,"5222"))},b=function(){return n.e("chunk-e9de473c").then(n.bind(null,"557d"))},k=[{path:"/orders/index",name:"orders",component:v,meta:{title:"任务清单管理",keepAlive:!0}},{path:"/orders/task-over",name:"orders",component:b,meta:{title:"任务结束审核",keepAlive:!0}}],w=k,_=[{path:"/upload-img",component:function(){return n.e("orders").then(n.bind(null,"3a65"))},meta:{title:"上传图片"}}],y=function(){return n.e("banner").then(n.bind(null,"cf81"))},x=[{path:"/user-manager",name:"UserManager",component:y,meta:{title:"用户管理",keepAlive:!0}}],I=x,C=function(){return n.e("site-seting").then(n.bind(null,"cac6"))},j=[{path:"/site-seting",name:"SiteSeting",component:C,meta:{title:"站点配置",keepAlive:!0}}],O=j,S=[].concat(Object(r["a"])(c),Object(r["a"])(d),Object(r["a"])(h),Object(r["a"])(w),Object(r["a"])(I),Object(r["a"])(_),Object(r["a"])(O));a["default"].use(o["a"]);var A=new o["a"]({mode:"history",routes:S});A.beforeEach((function(e,t,n){window.document.title=e.meta.title,n()})),A.beforeResolve((function(e,t,n){n()}));t["a"]=A},a641:function(e,t,n){},b775:function(e,t,n){"use strict";n("caad"),n("d3b7"),n("ac1f"),n("5319");var r=n("bc3a"),a=n.n(r),o=n("a18c"),i=n("5c96"),s={},c=window.localStorage.getItem("$_token"),u=["/api/admin/IndexAdmin/sendCode","/api/admin/IndexAdmin/verifyLoginCode"];c&&(s=JSON.parse(c));var l=a.a.create({timeout:5e3});l.interceptors.request.use((function(e){if(!s.access_token&&/follow\/follow/gi.test(e.url)){var t=o["a"].currentRoute,n=t.path,r=t.query,a=t.params;return window.localStorage.setItem("$_reject",JSON.stringify({path:n,query:r,params:a})),o["a"].replace("/login"),e}u.includes(e.url)||(e.headers.Authorization="Bearer "+s.access_token);var i=window.localStorage.getItem("$user_id");return e.data&&(e.data.platform="admin",e.data["user_id"]=i||0),e.params&&(e.params.platform="admin",e.params["user_id"]=i||0),e}),(function(e){return console.log(e),Promise.reject()})),l.interceptors.response.use((function(e){if(200===e.status){var t=e.config,n=e.data,r=n.errorCode,a=n.errorMessage,c=[400,401,402,403];if(c.includes(r)){window.localStorage.removeItem("$user_id"),window.localStorage.removeItem("$_token"),window.localStorage.removeItem("$_user_info");var u=o["a"].currentRoute,l=u.path,d=u.query,f=u.params;window.localStorage.setItem("$_reject",JSON.stringify({path:l,query:d,params:f})),o["a"].replace("/login")}if([0,401,402].includes(r)){var p=/adminAccountLogin/gi;p.test(t.url)&&(console.log("response",e),s=e.data.data,window.localStorage.setItem("$_token",JSON.stringify(s)))}else i["Message"].error({message:a,position:"middle",duration:2e3});return e.data}Promise.reject()}),(function(e){return console.log(e),Promise.reject()})),t["a"]=l},cad1:function(e,t,n){},fc3b:function(e,t,n){}});
//# sourceMappingURL=app.bcadcb75.js.map