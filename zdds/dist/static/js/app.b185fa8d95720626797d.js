webpackJsonp([1],{"4U+8":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("IvJb"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=n("C7Lr")({name:"App"},i,!1,function(t){n("4U+8")},null,null).exports,a=n("zO6J"),r={name:"Main",data:function(){return{msg2:"345"}},methods:{login:function(){callAppRouter("Login","",function(t,e){})},shareCtrl:function(){callAppRouter("Share",{imgUrl:"https://webres.psy-1.com/images/common/minibreath.png",shareType:3},function(t,e){})},redirectCtrl_center:function(){this.$router.push("/center")},savePicCtrl:function(){callAppRouter("savePic",{imgUrl:"https://webres.psy-1.com/images/common/minibreath.png"},function(t,e){})},closeWindow:function(){callAppRouter("closeWindow","",function(t,e){console.log("关闭webview")})},updateApp:function(){callAppRouter("updateApp","",function(t,e){})},isLogin:function(){callAppRouter("isLogin","",function(t,e){console.log(e)})},getEnv:function(){callAppRouter("getEnv","",function(t,e){console.log(e)})},getApiList:function(){callAppRouter("getApiList","",function(t,e){console.log(e)})}},created:function(){}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"button_list"},[n("h4",[t._v("1.登录接口")]),t._v(" "),n("div",{staticClass:"button_active",on:{click:t.login}},[t._v("登录接口")])]),t._v(" "),n("div",{staticClass:"button_list"},[n("h4",[t._v("2.分享接口")]),t._v(" "),n("div",{staticClass:"button_active",on:{click:t.shareCtrl}},[t._v("分享接口")])]),t._v(" "),n("div",{staticClass:"button_list"},[n("h4",[t._v("3.网页重定向")]),t._v(" "),n("h4",{staticClass:"button_active",on:{click:t.redirectCtrl_center}},[t._v("各个code跳转(跳转页面到--)")])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"button_list"},[n("h4",[t._v("5.保存图片")]),t._v(" "),n("div",{staticClass:"button_active",on:{click:t.savePicCtrl}},[t._v("保存图片")])]),t._v(" "),n("div",{staticClass:"button_list"},[n("h4",[t._v("6.关闭webview")]),t._v(" "),n("div",{staticClass:"button_active",on:{click:t.closeWindow}},[t._v("关闭webview")])]),t._v(" "),n("div",{staticClass:"button_list"},[n("h4",[t._v("7.升级新版")]),t._v(" "),n("div",{staticClass:"button_active",on:{click:t.updateApp}},[t._v("升级新版")])]),t._v(" "),n("div",{staticClass:"button_list"},[n("h4",[t._v("8.用户是否登录")]),t._v(" "),n("div",{staticClass:"button_active",on:{click:t.isLogin}},[t._v("用户是否登录")])]),t._v(" "),n("div",{staticClass:"button_list"},[n("h4",[t._v("9.获取app环境")]),t._v(" "),n("div",{staticClass:"button_active",on:{click:t.getEnv}},[t._v("获取app环境")])]),t._v(" "),n("div",{staticClass:"button_list"},[n("h4",[t._v("10.获取app所有可用接口")]),t._v(" "),n("div",{staticClass:"button_active",on:{click:t.getApiList}},[t._v("获取app所有")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"button_list"},[e("h4",[this._v("4.支付")]),this._v(" "),e("div",[this._v("暂时没写")])])}]};var u=n("C7Lr")(r,s,!1,function(t){n("ROmJ")},null,null).exports,l=n("rVsN"),p=n.n(l),d=n("aozt"),v=n.n(d),_=v.a.create({baseURL:Object({NODE_ENV:"production"}).BASE_API,timeout:5e3});v.a.interceptors.request.use(function(t){return t},function(t){return p.a.reject(t)}),v.a.interceptors.response.use(function(t){return t},function(t){return p.a.reject(t)});var f=_;var h={name:"Center",data:function(){return{codeArr:[],wjh:{one:{one:"10010",two:"kZkCCukLd3CHWMWZ"},two:"",three:{one:""},four:"",five:""},dsb:""}},created:function(){this.getCode()},methods:{getCode:function(){var t=this;f({url:"https://api.psy-1.com/web/v1/cosleep/func/code",method:"get"}).then(function(e){console.log(e),t.codeArr=e.data.data,console.log(t.codeArr)})},redirectCtrl:function(t){callAppRouter("Redirect",{code:t},function(t,e){})},showId:function(){console.log("showId")},redirectCtrl_jump:function(t,e){callAppRouter("Redirect",{code:t,topic_id:e},function(t,e){})},reTag_jump:function(t,e){callAppRouter("Redirect",{code:t,tag_id:this.dsb},function(t,e){})},xcx_jump:function(t,e,n){callAppRouter("Redirect",{code:t,userName:e,path:n},function(t,e){})},wx_jump:function(t,e){callAppRouter("Redirect",{code:t,activity_link:e},function(t,e){})},topic_id:function(){},tag_id:function(){},activity_link:function(){},path:function(){},userName:function(){},one:function(){var t,e=this,n=function(){return t||((t=document.createElement("iframe")).style.display="none",document.body.appendChild(t),t)};!function(){var t=function(t){var e="cosleep://";for(var n in t)e=e+n+"="+encodeURIComponent(t[n])+"&";return e=e.substring(0,e.length-1),encodeURIComponent(e)}(),o=n();if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){window.location.href="cosleep://deeplink?code="+e.wjh.one.one+"&music_detail_code="+e.wjh.one.two;var i=Date.now();setTimeout(function(){Date.now()-i<1e3&&(window.location.href="cosleep://deeplink?code="+e.wjh.one.one+"&music_detail_code="+e.wjh.one.two)},25)}else/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?(o.src=t,setTimeout(function(){window.location.href="https://www.heartide.com/download/smallsleep"},500)):(o.src=t,setTimeout(function(){window.location.href="cosleep://deeplink?code="+e.wjh.one.one+"&music_detail_code="+e.wjh.one.two},500))}()},two:function(){callAppRouter("Redirect",{code:10011},function(t,e){})},three:function(){var t={code:1026};this.wjh.three.one&&(t.tag_id=this.wjh.three.one),callAppRouter("Redirect",t,function(t,e){})},four:function(){var t={code:1017};this.wjh.four&&(t.article_id=this.wjh.four),callAppRouter("Redirect",t,function(t,e){})},five:function(){var t={code:10012};this.wjh.five&&(t.broadcast_id=this.wjh.five),callAppRouter("Redirect",t,function(t,e){})}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"code_list"},t._l(t.codeArr,function(e,o){return n("li",{on:{click:function(n){n.preventDefault(),t.redirectCtrl(e.code_number)}}},[t._v("\n          "+t._s(e.code_desc)+"("+t._s(e.code_number)+")\n\n\n        "),10010==e.code_number?n("div",{staticClass:"wjh"},[n("div",{staticClass:"wjh-outer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.wjh.one.one,expression:"wjh.one.one"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"code"},domProps:{value:t.wjh.one.one},on:{click:function(e){return e.stopPropagation(),t.showId(e)},input:function(e){e.target.composing||t.$set(t.wjh.one,"one",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.wjh.one.two,expression:"wjh.one.two"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"music"},domProps:{value:t.wjh.one.two},on:{click:function(e){return e.stopPropagation(),t.showId(e)},input:function(e){e.target.composing||t.$set(t.wjh.one,"two",e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"info"},on:{click:function(e){return e.stopPropagation(),t.one(e)}}},[t._v("提交")])])]):t._e(),t._v(" "),1026==e.code_number?n("div",{staticClass:"wjh"},[n("div",{staticClass:"wjh-outer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.wjh.three.one,expression:"wjh.three.one"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"tag_id"},domProps:{value:t.wjh.three.one},on:{click:function(e){return e.stopPropagation(),t.showId(e)},input:function(e){e.target.composing||t.$set(t.wjh.three,"one",e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"info"},on:{click:function(e){return e.stopPropagation(),t.three(e)}}},[t._v("提交")])])]):t._e(),t._v(" "),1017==e.code_number?n("div",{staticClass:"wjh"},[n("div",{staticClass:"wjh-outer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.wjh.four,expression:"wjh.four"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"tag_id"},domProps:{value:t.wjh.four},on:{click:function(e){return e.stopPropagation(),t.showId(e)},input:function(e){e.target.composing||t.$set(t.wjh,"four",e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"info"},on:{click:function(e){return e.stopPropagation(),t.four(e)}}},[t._v("提交")])])]):t._e(),t._v(" "),10012==e.code_number?n("div",{staticClass:"wjh"},[n("div",{staticClass:"wjh-outer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.wjh.five,expression:"wjh.five"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"broadcast_id"},domProps:{value:t.wjh.five},on:{click:function(e){return e.stopPropagation(),t.showId(e)},input:function(e){e.target.composing||t.$set(t.wjh,"five",e.target.value)}}}),t._v(" "),n("button",{attrs:{type:"info"},on:{click:function(e){return e.stopPropagation(),t.five(e)}}},[t._v("提交")])])]):t._e(),t._v(" "),10007==e.code_number?n("div",{staticClass:"input_container"},[n("span",[t._v("tag_id:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.dsb,expression:"dsb"}],attrs:{type:"text"},domProps:{value:t.dsb},on:{click:function(e){return e.stopPropagation(),t.showId(e)},input:function(e){e.target.composing||(t.dsb=e.target.value)}}}),t._v(" "),n("div",{staticClass:"jump_to",on:{click:function(n){n.stopPropagation(),t.reTag_jump(e.code_number,t.tag_id)}}},[t._v("跳转")])]):t._e(),t._v(" "),1051==e.code_number?n("div",{staticClass:"input_container"},[n("span",[t._v("topic_id:")]),t._v(" "),n("input",{attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),t.showId(e)}}}),t._v(" "),n("div",{staticClass:"jump_to",on:{click:function(n){n.stopPropagation(),t.redirectCtrl_jump(e.code_number,t.topic_id)}}},[t._v("跳转")])]):t._e(),t._v(" "),10009==e.code_number?n("div",{staticClass:"input_container"},[n("span",[t._v("userName:")]),t._v(" "),n("input",{attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),t.showId(e)}}}),t._v(" "),n("span",[t._v("path:")]),t._v(" "),n("input",{attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),t.showId(e)}}}),t._v(" "),n("div",{staticClass:"jump_to",on:{click:function(n){n.stopPropagation(),t.xcx_jump(e.code_number,t.userName,t.path)}}},[t._v("跳转")])]):t._e(),t._v(" "),10008==e.code_number?n("div",{staticClass:"input_container"},[n("span",[t._v("activity_link:")]),t._v(" "),n("input",{attrs:{type:"text"},on:{click:function(e){return e.stopPropagation(),t.showId(e)}}}),t._v(" "),n("div",{staticClass:"jump_to",on:{click:function(n){n.stopPropagation(),t.wx_jump(e.code_number,t.activity_link)}}},[t._v("跳转")])]):t._e(),t._v(" "),1053==e.code_number?n("div",{staticClass:"input_container",on:{click:function(e){return e.stopPropagation(),t.showId(e)}}},[t._v("\n              (暂时不做处理)\n          ")]):t._e()])}))])},staticRenderFns:[]};var w=n("C7Lr")(h,m,!1,function(t){n("qd0j"),n("RwRm")},"data-v-3a19df3f",null).exports;o.a.use(a.a);var g=new a.a({routes:[{path:"/",name:"main",component:u},{path:"/center",name:"center",component:w}]});o.a.prototype.$axios=v.a,o.a.config.productionTip=!1,new o.a({el:"#app",router:g,components:{App:c},template:"<App/>"})},ROmJ:function(t,e){},RwRm:function(t,e){},qd0j:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.b185fa8d95720626797d.js.map