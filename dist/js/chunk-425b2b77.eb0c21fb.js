(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-425b2b77"],{"0ccb":function(t,e,n){var i=n("50c4"),s=n("1148"),a=n("1d80"),r=Math.ceil,o=function(t){return function(e,n,o){var c,l,f=String(a(e)),d=f.length,u=void 0===o?" ":String(o),_=i(n);return _<=d||""==u?f:(c=_-d,l=s.call(u,r(c/u.length)),l.length>c&&(l=l.slice(0,c)),t?f+l:l+f)}};t.exports={start:o(!1),end:o(!0)}},1148:function(t,e,n){"use strict";var i=n("a691"),s=n("1d80");t.exports="".repeat||function(t){var e=String(s(this)),n="",a=i(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},"27ec":function(t,e,n){"use strict";var i=n("6168"),s=n.n(i);s.a},"408a":function(t,e,n){var i=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=i(t))throw TypeError("Incorrect invocation");return+t}},"44e7":function(t,e,n){var i=n("861d"),s=n("c6b6"),a=n("b622"),r=a("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==s(t))}},"4d63":function(t,e,n){var i=n("83ab"),s=n("da84"),a=n("94ca"),r=n("7156"),o=n("9bf2").f,c=n("241c").f,l=n("44e7"),f=n("ad6d"),d=n("9f7f"),u=n("6eeb"),_=n("d039"),v=n("69f3").set,p=n("2626"),h=n("b622"),g=h("match"),k=s.RegExp,m=k.prototype,b=/a/g,C=/a/g,w=new k(b)!==b,x=d.UNSUPPORTED_Y,y=i&&a("RegExp",!w||x||_((function(){return C[g]=!1,k(b)!=b||k(C)==C||"/a/i"!=k(b,"i")})));if(y){var O=function(t,e){var n,i=this instanceof O,s=l(t),a=void 0===e;if(!i&&s&&t.constructor===O&&a)return t;w?s&&!a&&(t=t.source):t instanceof O&&(a&&(e=f.call(t)),t=t.source),x&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var o=r(w?new k(t,e):k(t,e),i?this:m,O);return x&&n&&v(o,{sticky:n}),o},S=function(t){t in O||o(O,t,{configurable:!0,get:function(){return k[t]},set:function(e){k[t]=e}})},R=c(k),I=0;while(R.length>I)S(R[I++]);m.constructor=O,O.prototype=m,u(s,"RegExp",O)}p("RegExp")},"4d90":function(t,e,n){"use strict";var i=n("23e7"),s=n("0ccb").start,a=n("9a0c");i({target:"String",proto:!0,forced:a},{padStart:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"557d":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"order-over"},[n("h2",{staticClass:"main-title"},[t._v("任务模版")]),n("div",{staticClass:"task-info"},[n("h3",{staticClass:"title"},[t._v("任务信息")]),n("div",{staticClass:"info-box"},[n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("任务名称：")]),n("p",{staticClass:"info-content"},[t._v(t._s(t.info.task_name?t.info.task_name:""))])]),n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("任务描述：")]),n("p",{staticClass:"info-content"},[t._v(t._s(t.info.task_desc?t.info.task_desc:""))])]),n("div",{staticClass:"info-line"},[n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("用户计划：")]),n("p",{staticClass:"info-content"},[t._v(t._s(t.info.task_order_name?t.info.task_order_name:""))])]),n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("用户备注：")]),n("p",{staticClass:"info-content"},[t._v(t._s(t.info.user_remark?t.info.user_remark:""))])])]),n("div",{staticClass:"info-line"},[n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("任务序号：")]),n("p",{staticClass:"info-content"},[t._v(" "+t._s(t.info.task_order_sn?t.info.task_order_sn:"")+" ")])]),n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("任务时间：")]),n("p",{staticClass:"info-content"},[t._v(" "+t._s(t.info.start_date?t.info.start_date.replace(t.timeReg,"$1-$2-$3"):"")+" 至 "+t._s(t.info.end_date?t.info.end_date.replace(t.timeReg,"$1-$2-$3"):"")+" ")])])]),n("div",{staticClass:"info-line"},[n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("最大押金：")]),n("p",{staticClass:"info-content"},[t._v(" ¥"+t._s(t.taskInfo.display_max_amount)+" ")])]),n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("最小押金：")]),n("p",{staticClass:"info-content"},[t._v(" ¥"+t._s(t.taskInfo.display_min_amount)+" ")])])]),n("div",{staticClass:"info-line"},[n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("支付押金：")]),n("p",{staticClass:"info-content"},[t._v(" ¥"+t._s(t.info.display_bet_amount?t.info.display_bet_amount:"")+" ")])]),n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("预计奖金：")]),n("p",{staticClass:"info-content"},[t._v(" ¥"+t._s(t._f("filterReward")(t.info))+" ")])])])]),n("div",{staticClass:"info-line"},[n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("收款人：")]),n("p",{staticClass:"info-content"},[t._v(" "+t._s(t.info.card_owner?t.info.card_owner:"")+" ")])]),n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("收款银行：")]),n("p",{staticClass:"info-content"},[t._v(" "+t._s(t.info.card_bank?t.info.card_bank:"")+" ")])])]),n("div",{staticClass:"info-line"},[n("div",{staticClass:"info-line"},[n("p",{staticClass:"label"},[t._v("银行卡号：")]),n("p",{staticClass:"info-content"},[t._v(" "+t._s(t.info.card_no?t.info.card_no:"")+" ")])])])]),n("div",{staticClass:"task-checkins"},[n("h3",{staticClass:"title"},[t._v("打卡记录")]),n("div",{staticClass:"checkin-list"},t._l(t.logs,(function(e,i){return n("div",{key:i,staticClass:"checkin-item",on:{click:function(n){return t.showLog(e)}}},[n("img",{staticClass:"check-item",attrs:{src:e.sign_data_detail.data_list[0].data_link,alt:""}}),n("p",{staticClass:"check-time"},[t._v(t._s(t.getTime(e.created_timestamp)))]),n("p",{staticClass:"check-remark"},[t._v(t._s(e.sign_content?e.sign_content:""))])])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:0==t.logs.length,expression:"logs.length == 0"}],staticClass:"no-log"},[t._v(" 暂无打卡记录 ")])]),1==t.info.task_order_status||30==t.info.task_order_status?n("div",{staticClass:"operation-btn-wrap"},[n("h4",{staticClass:"chech-title"},[t._v("审核")]),n("div",[n("el-input",{staticClass:"sign_check_remark",attrs:{type:"textarea",placeholder:"请输入审核备注"},model:{value:t.check_remark,callback:function(e){t.check_remark=e},expression:"check_remark"}})],1),n("el-button",{attrs:{type:"primary",plain:"",disabled:t.checkDisbled},on:{click:t.pass}},[t._v("审核通过")]),n("el-button",{attrs:{type:"danger",plain:"",disabled:t.checkDisbled},on:{click:t.refuse}},[t._v("审核不通过")])],1):t._e(),n("el-dialog",{attrs:{title:"打卡记录",visible:t.showCheckInLog},on:{"update:visible":function(e){t.showCheckInLog=e}}},[n("div",{staticClass:"check-log"},[n("img",{staticClass:"check-item",attrs:{src:t.logInfo.sign_data_detail.data_list[0].data_link,alt:""}}),n("p",{staticClass:"check-time"},[t._v(t._s(t.getTime(t.logInfo.created_timestamp)))]),n("p",{staticClass:"check-remark"},[t._v(t._s(t.logInfo.sign_content?t.logInfo.sign_content:""))])])]),n("el-dialog",{attrs:{title:"奖金发放提示",visible:t.sendRewardVisable,width:"30%",top:"20%",center:""},on:{"update:visible":function(e){t.sendRewardVisable=e}}},[n("span",[t._v("您已经审核通过改任务，请联系给该任务人发放奖金！")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.sendRewardVisable=!1}}},[t._v("确 定")])],1)])],1)},s=[],a=(n("caad"),n("96cf"),n("1da1")),r=n("d716"),o=n("fa7d"),c=n("2f7f"),l={name:"order-over",data:function(){return{info:{sign_record_list:[]},timeReg:/([\d]{4})([\d]{2})([\d]{2})/,showCheckInLog:!1,check_remark:"",logInfo:{created_timestamp:0,sign_content:"",sign_data_detail:{data_list:[{}]}},taskInfo:{display_max_amount:0,display_min_amount:0},sendRewardVisable:!1}},methods:{showLog:function(t){var e=this;this.logInfo=t,this.$nextTick((function(){e.showCheckInLog=!0}))},checkTask:function(t,e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var s,a,o,c,l,f;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=n.info.task_order_sn,a=n.check_remark,o={check_result:t,task_order_sn:s,check_remark:a},c=t>=0?20:100,i.next=6,Object(r["a"])(o);case 6:l=i.sent,f=l.errorCode,0==f&&(n.$message(e),n.info.task_order_status=c,localStorage.setItem("$taskOverInfo",JSON.stringify(n.info)),n.cancel());case 9:case"end":return i.stop()}}),i)})))()},checkTaskFinsh:function(t,e){var n=this;return Object(a["a"])(regeneratorRuntime.mark((function i(){var s,a,o,c,l,f;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=n.info.task_order_sn,a=n.check_remark,o={sign_check_result:t,task_order_sn:s,sign_check_remark:a},c=t>=0?20:100,i.next=6,Object(r["b"])(o);case 6:l=i.sent,f=l.errorCode,0==f&&(n.$message(e),n.info.task_order_status=c,localStorage.setItem("$taskOverInfo",JSON.stringify(n.info)),1==t&&(n.sendRewardVisable=!0),n.cancel());case 9:case"end":return i.stop()}}),i)})))()},getTime:function(t){var e=new Date(1e3*t),n=Object(o["a"])(e);return n},pass:function(){var t=this;this.$confirm("确定通过当前任务么？","确认提醒",{type:"warning"}).then((function(){1==t.info.task_order_status&&t.checkTask(1,{message:"审核通过",type:"success"}),30==t.info.task_order_status&&t.checkTaskFinsh(1,{message:"审核通过",type:"success"})})).catch((function(){t.cancel()}))},refuse:function(){var t=this;this.$confirm("确定要拒绝当前任务么？","确认提醒",{type:"warning"}).then((function(){1==t.info.task_order_status&&t.checkTask(-1,{message:"审核不通过",type:"error"}),30==t.info.task_order_status&&t.checkTaskFinsh(-1,{message:"审核不通过",type:"error"})})).catch((function(){}))},cancel:function(){console.log("cancel")},loadTaskInfo:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function n(){var i,s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(c["f"])({task_id:t});case 2:i=n.sent,s=i.errorCode,a=i.data,0==s&&(e.taskInfo=a);case 6:case"end":return n.stop()}}),n)})))()}},filters:{filterReward:function(t){if(!t)return 0;var e=t.reward_rate,n=t.bet_amount;return n*e/1e4}},computed:{checkDisbled:function(){var t=!0,e=this.info.task_order_status,n=[1,30];return!n.includes(e)&&t},logs:function(){var t=this.info.sign_record_list;return t}},mounted:function(){var t=localStorage.getItem("$taskOverInfo");t&&(this.info=JSON.parse(t),this.loadTaskInfo(this.info.task_id))}},f=l,d=(n("27ec"),n("2877")),u=Object(d["a"])(f,i,s,!1,null,"3cdfb89d",null);e["default"]=u.exports},6168:function(t,e,n){},7156:function(t,e,n){var i=n("861d"),s=n("d2bb");t.exports=function(t,e,n){var a,r;return s&&"function"==typeof(a=e.constructor)&&a!==n&&i(r=a.prototype)&&r!==n.prototype&&s(t,r),t}},"9a0c":function(t,e,n){var i=n("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i)},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},b680:function(t,e,n){"use strict";var i=n("23e7"),s=n("a691"),a=n("408a"),r=n("1148"),o=n("d039"),c=1..toFixed,l=Math.floor,f=function(t,e,n){return 0===e?n:e%2===1?f(t,e-1,n*t):f(t*t,e/2,n)},d=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},u=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!o((function(){c.call({})}));i({target:"Number",proto:!0,forced:u},{toFixed:function(t){var e,n,i,o,c=a(this),u=s(t),_=[0,0,0,0,0,0],v="",p="0",h=function(t,e){var n=-1,i=e;while(++n<6)i+=t*_[n],_[n]=i%1e7,i=l(i/1e7)},g=function(t){var e=6,n=0;while(--e>=0)n+=_[e],_[e]=l(n/t),n=n%t*1e7},k=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==_[t]){var n=String(_[t]);e=""===e?n:e+r.call("0",7-n.length)+n}return e};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(v="-",c=-c),c>1e-21)if(e=d(c*f(2,69,1))-69,n=e<0?c*f(2,-e,1):c/f(2,e,1),n*=4503599627370496,e=52-e,e>0){h(0,n),i=u;while(i>=7)h(1e7,0),i-=7;h(f(10,i,1),0),i=e-1;while(i>=23)g(1<<23),i-=23;g(1<<i),h(1,1),g(2),p=k()}else h(0,n),h(1<<-e,0),p=k()+r.call("0",u);return u>0?(o=p.length,p=v+(o<=u?"0."+r.call("0",u-o)+p:p.slice(0,o-u)+"."+p.slice(o-u))):p=v+p,p}})},c975:function(t,e,n){"use strict";var i=n("23e7"),s=n("4d64").indexOf,a=n("a640"),r=n("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),f=r("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!f},{indexOf:function(t){return c?o.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},d716:function(t,e,n){"use strict";n.d(e,"e",(function(){return s})),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var i=n("b775"),s=function(t){return i["a"].post("/api/admin/taskOrderAdmin/queryTaskOrderList",t)},a=function(t){return i["a"].post("/api/admin/taskOrderAdmin/checkTaskOrder",t)},r=function(t){return i["a"].post("/api/admin/taskOrderAdmin/checkTaskOrderSign",t)}},fa7d:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}));n("c975"),n("b680"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("4d90"),n("5319");var i=function(t,e){var n;e=e||"YYYY-mm-dd HH:MM:SS";var i={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString()};for(var s in i)n=new RegExp("("+s+")").exec(e),n&&(e=e.replace(n[1],1==n[1].length?i[s]:i[s].padStart(n[1].length,"0")));return e},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=(t-0).toFixed(2),n=e.substring(0,e.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g,","),i=e.substring(e.length,e.indexOf(".")),s=n+i;return s}}}]);
//# sourceMappingURL=chunk-425b2b77.eb0c21fb.js.map