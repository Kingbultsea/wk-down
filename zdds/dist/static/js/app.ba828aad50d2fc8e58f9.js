webpackJsonp([1],{M5uU:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("xd7I"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=o("C7Lr")({name:"App"},i,!1,function(e){o("XLj4")},null,null).exports,c=o("7LQH"),s={name:"Main",data:()=>({msg2:"345"}),methods:{login:function(){callAppRouter("Login","",function(e,t){})},shareCtrl:function(){callAppRouter("Share",{imgUrl:"https://webres.psy-1.com/images/common/minibreath.png",shareType:3},function(e,t){})},redirectCtrl_center:function(){this.$router.push("/center")},redirectCtrl_center_xc:function(){this.$router.push("/centerxc")},savePicCtrl:function(){callAppRouter("savePic",{imgUrl:"https://webres.psy-1.com/images/common/minibreath.png"},function(e,t){})},closeWindow:function(){callAppRouter("closeWindow","",function(e,t){console.log("关闭webview")})},updateApp:function(){callAppRouter("updateApp","",function(e,t){})},isLogin:function(){callAppRouter("isLogin","",function(e,t){console.log(t)})},getEnv:function(){callAppRouter("getEnv","",function(e,t){console.log(t)})},getApiList:function(){callAppRouter("getApiList","",function(e,t){console.log(t)})}},created(){}},a={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"button_list"},[o("h4",[e._v("1.登录接口")]),e._v(" "),o("div",{staticClass:"button_active",on:{click:e.login}},[e._v("登录接口")])]),e._v(" "),o("div",{staticClass:"button_list"},[o("h4",[e._v("2.分享接口")]),e._v(" "),o("div",{staticClass:"button_active",on:{click:e.shareCtrl}},[e._v("分享接口")])]),e._v(" "),o("div",{staticClass:"button_list"},[o("h4",[e._v("3.网页重定向")]),e._v(" "),o("h4",{staticClass:"button_active",on:{click:e.redirectCtrl_center}},[e._v("各个code跳转(跳转页面到--)")])]),e._v(" "),o("div",{staticClass:"button_list"},[o("h4",[e._v("3.1心潮的网页重定向")]),e._v(" "),o("h4",{staticClass:"button_active",on:{click:e.redirectCtrl_center_xc}},[e._v("各个code跳转(跳转页面到--)")])]),e._v(" "),e._m(0),e._v(" "),o("div",{staticClass:"button_list"},[o("h4",[e._v("5.保存图片")]),e._v(" "),o("div",{staticClass:"button_active",on:{click:e.savePicCtrl}},[e._v("保存图片")])]),e._v(" "),o("div",{staticClass:"button_list"},[o("h4",[e._v("6.关闭webview")]),e._v(" "),o("div",{staticClass:"button_active",on:{click:e.closeWindow}},[e._v("关闭webview")])]),e._v(" "),o("div",{staticClass:"button_list"},[o("h4",[e._v("7.升级新版")]),e._v(" "),o("div",{staticClass:"button_active",on:{click:e.updateApp}},[e._v("升级新版")])]),e._v(" "),o("div",{staticClass:"button_list"},[o("h4",[e._v("8.用户是否登录")]),e._v(" "),o("div",{staticClass:"button_active",on:{click:e.isLogin}},[e._v("用户是否登录")])]),e._v(" "),o("div",{staticClass:"button_list"},[o("h4",[e._v("9.获取app环境")]),e._v(" "),o("div",{staticClass:"button_active",on:{click:e.getEnv}},[e._v("获取app环境")])]),e._v(" "),o("div",{staticClass:"button_list"},[o("h4",[e._v("10.获取app所有可用接口")]),e._v(" "),o("div",{staticClass:"button_active",on:{click:e.getApiList}},[e._v("获取app所有")])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"button_list"},[t("h4",[this._v("4.支付")]),this._v(" "),t("div",[this._v("暂时没写")])])}]};var l=o("C7Lr")(s,a,!1,function(e){o("M5uU")},null,null).exports,u=o("84iU"),d=o.n(u);d.a.create({baseURL:Object({NODE_ENV:"production"}).BASE_API,timeout:5e3});d.a.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),d.a.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});var p={name:"Center",data:()=>({codeArr:[],wjh:{one:{one:"10010",two:"kZkCCukLd3CHWMWZ"},two:"",three:{one:"",two:""},four:"",five:"",six:"",seven:"",eight:"",nine:"",ten:{one:"",two:""},eleven:"",twelve:"",thirteen:"",fourteen:{one:"",two:""},fifteen:{one:"",two:""},sixteen:"",seventeen:""},dsb:"",A:"",B:"",C:"",D:"",E:""}),created(){this.getCode(),console.log("11:30!~")},methods:{getCode(){var e=this;const t=new XMLHttpRequest;t.open("GET","https://api.psy-1.com/web/v1/cosleep/func/code"),t.send(),t.onreadystatechange=function(t){console.log(JSON.parse(t.currentTarget.response)),e.codeArr=JSON.parse(t.currentTarget.response).data}},redirectCtrl:function(e){callAppRouter("Redirect",{code:e},function(e,t){})},showId:function(){console.log("showId")},redirectCtrl_jump:function(e,t){callAppRouter("Redirect",{code:e,topic_id:this.A},function(e,t){})},reTag_jump:function(e,t){callAppRouter("Redirect",{code:e,tag_id:this.dsb},function(e,t){})},xcx_jump:function(e,t,o){callAppRouter("Redirect",{code:e,userName:this.B,path:this.C},function(e,t){})},wx_jump:function(e,t){callAppRouter("Redirect",{code:e,activity_link:this.D},function(e,t){})},topic_id(){},tag_id(){},activity_link(){},path(){},userName(){},toDeepLink(e,t){console.log(e),this.wjh.eleven&&(e+="&password="+this.wjh.eleven);const o=e,n=this;let i=function(){let e;return function(){return e||((e=document.createElement("iframe")).style.display="none",document.body.appendChild(e),e)}}();!function(){var e=function(e){let t="cosleep://";for(let o in e)t=t+o+"="+encodeURIComponent(e[o])+"&";return t=t.substring(0,t.length-1),encodeURIComponent(t)}(),t=i();if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){window.location.href="cosleep://deeplink?code="+o,n.toDownLoad();var r=Date.now();setTimeout(function(){Date.now()-r<1e3&&(window.location.href="cosleep://deeplink?code="+o,n.toDownLoad())},25)}else/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?(t.src=e,setTimeout(function(){},500)):(t.src=e,setTimeout(function(){window.location.href="cosleep://deeplink?code="+o,n.toDownLoad()},500))}()},one(){const e=this;var t,o=function(){return t||((t=document.createElement("iframe")).style.display="none",document.body.appendChild(t),t)};!function(){var t=function(e){var t="cosleep://";for(var o in e)t=t+o+"="+encodeURIComponent(e[o])+"&";return t=t.substring(0,t.length-1),encodeURIComponent(t)}(),n=o();if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){window.location.href="cosleep://deeplink?code="+e.wjh.one.one+"&music_detail_code="+e.wjh.one.two;var i=Date.now();setTimeout(function(){Date.now()-i<1e3&&(window.location.href="cosleep://deeplink?code="+e.wjh.one.one+"&music_detail_code="+e.wjh.one.two)},25)}else/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?(n.src=t,setTimeout(function(){window.location.href="https://www.heartide.com/download/smallsleep"},500)):(n.src=t,setTimeout(function(){window.location.href="cosleep://deeplink?code="+e.wjh.one.one+"&music_detail_code="+e.wjh.one.two},500))}()},two(){callAppRouter("Redirect",{code:10011},function(e,t){})},three(){let e={code:1026};this.wjh.three.one&&(e.tag_id=this.wjh.three.one),this.wjh.three.two&&(e.id=this.wjh.three.two),callAppRouter("Redirect",e,function(e,t){})},four(){let e={code:1017};this.wjh.four&&(e.article_id=this.wjh.four),callAppRouter("Redirect",e,function(e,t){})},five(){let e={code:10012};this.wjh.five&&(e.broadcast_id=this.wjh.five),callAppRouter("Redirect",e,function(e,t){})},six(){let e={code:10016};this.wjh.six&&(e.prepare_id=this.wjh.six),callAppRouter("Redirect",e,function(e,t){})},seven(){let e={code:1052};this.wjh.seven&&(e.category_id=this.wjh.seven),this.wjh.eight&&(e.voice_id=this.wjh.eight),callAppRouter("Redirect",e,function(e,t){})},nine(){let e={code:1047};this.wjh.nine&&(e.id=this.wjh.nine),callAppRouter("Redirect",e,function(e,t){})},ten(){let e={code:10007};this.wjh.ten.one&&(e.tag_id=this.wjh.ten.one),this.wjh.ten.two&&(e.recommend_id=this.wjh.ten.two),callAppRouter("Redirect",e,function(e,t){})},twelve(){let e={code:10023};this.wjh.twelve&&(e.id=this.wjh.twelve),callAppRouter("Redirect",e,function(e,t){})},thirteen(){let e={code:10024};this.wjh.thirteen&&(e.category_id=this.wjh.thirteen),callAppRouter("Redirect",e,function(e,t){})},fourteen(){let e={code:10025};this.wjh.fourteen.one&&(e.goods_id=this.wjh.fourteen.one),this.wjh.fourteen.two&&(e.goods_badge_text=this.wjh.fourteen.two),console.log("s"),callAppRouter("Redirect",e,function(e,t){})},fifteen(){let e={code:10017};this.wjh.fifteen.one&&(e.goods_id=this.wjh.fifteen.one),this.wjh.fifteen.two&&(e.goods_badge_text=this.wjh.fifteen.two),callAppRouter("Redirect",e,function(e,t){})},sixteen(){let e={code:1053};this.wjh.sixteen&&(e.activity_link=this.wjh.sixteen),callAppRouter("Redirect",e,function(e,t){})},seventeen(){let e={code:10029};this.wjh.seventeen&&(e.star_id=this.wjh.seventeen),callAppRouter("Redirect",e,function(e,t){})}}},h={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[e._v("\n            链接跳转\n            "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.twelve,expression:"wjh.twelve"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"跳转链接"},domProps:{value:e.wjh.twelve},on:{input:function(t){t.target.composing||e.$set(e.wjh,"twelve",t.target.value)}}}),e._v(" "),o("a",{attrs:{href:e.wjh.twelve}},[o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.twelve(t)}}},[e._v("提交")])])])]),e._v(" "),o("ul",{staticClass:"code_list"},e._l(e.codeArr,function(t,n){return o("li",{on:{click:function(o){return o.preventDefault(),e.redirectCtrl(t.code_number)}}},[e._v("\n          "+e._s(t.code_desc)+"("+e._s(t.code_number)+")\n\n\n        "),10010==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.one.one,expression:"wjh.one.one"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"code"},domProps:{value:e.wjh.one.one},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh.one,"one",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.one.two,expression:"wjh.one.two"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"music"},domProps:{value:e.wjh.one.two},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh.one,"two",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.one(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),1026==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.three.one,expression:"wjh.three.one"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"tag_id"},domProps:{value:e.wjh.three.one},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh.three,"one",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.three.two,expression:"wjh.three.two"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"id"},domProps:{value:e.wjh.three.two},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh.three,"two",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.three(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),1017==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.four,expression:"wjh.four"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"tag_id"},domProps:{value:e.wjh.four},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"four",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.four(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),10012==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.five,expression:"wjh.five"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"broadcast_id"},domProps:{value:e.wjh.five},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"five",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.five(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),10016==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.six,expression:"wjh.six"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"prepare_id"},domProps:{value:e.wjh.six},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"six",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.six(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),1052==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.seven,expression:"wjh.seven"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"category_id"},domProps:{value:e.wjh.seven},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"seven",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.eight,expression:"wjh.eight"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"voice_id"},domProps:{value:e.wjh.eight},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"eight",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.seven(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),1047==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.nine,expression:"wjh.nine"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"id"},domProps:{value:e.wjh.nine},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"nine",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.nine(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),10007==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.ten.one,expression:"wjh.ten.one"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"tag_id"},domProps:{value:e.wjh.ten.one},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh.ten,"one",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.ten.two,expression:"wjh.ten.two"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"recommend_id"},domProps:{value:e.wjh.ten.two},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh.ten,"two",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.ten(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),10021==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.eleven,expression:"wjh.eleven"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"password"},domProps:{value:e.wjh.eleven},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"eleven",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.toDeepLink(10021)}}},[e._v("提交")])])]):e._e(),e._v(" "),10023==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.twelve,expression:"wjh.twelve"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"id"},domProps:{value:e.wjh.twelve},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"twelve",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.twelve(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),10024==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.thirteen,expression:"wjh.thirteen"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"category_id"},domProps:{value:e.wjh.thirteen},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"thirteen",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.thirteen(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),10025==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.fourteen.one,expression:"wjh.fourteen.one"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"goods_id"},domProps:{value:e.wjh.fourteen.one},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh.fourteen,"one",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.fourteen.two,expression:"wjh.fourteen.two"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"goods_badge_text"},domProps:{value:e.wjh.fourteen.two},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh.fourteen,"two",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.fourteen(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),10017==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.fifteen.one,expression:"wjh.fifteen.one"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"goods_id"},domProps:{value:e.wjh.fifteen.one},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh.fifteen,"one",t.target.value)}}}),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.fifteen.two,expression:"wjh.fifteen.two"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"goods_badge_text"},domProps:{value:e.wjh.fifteen.two},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh.fifteen,"two",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.fifteen(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),1053==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.sixteen,expression:"wjh.sixteen"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"activity_link"},domProps:{value:e.wjh.sixteen},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"sixteen",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.sixteen(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),10029==t.code_number?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.seventeen,expression:"wjh.seventeen"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"star_id"},domProps:{value:e.wjh.seventeen},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||e.$set(e.wjh,"seventeen",t.target.value)}}}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.seventeen(t)}}},[e._v("提交")])])]):e._e(),e._v(" "),1051==t.code_number?o("div",{staticClass:"input_container"},[o("span",[e._v("topic_id:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.A,expression:"A"}],attrs:{type:"text"},domProps:{value:e.A},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||(e.A=t.target.value)}}}),e._v(" "),o("div",{staticClass:"jump_to",on:{click:function(o){return o.stopPropagation(),e.redirectCtrl_jump(t.code_number,e.topic_id)}}},[e._v("跳转")])]):e._e(),e._v(" "),10009==t.code_number?o("div",{staticClass:"input_container"},[o("span",[e._v("userName:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.B,expression:"B"}],attrs:{type:"text"},domProps:{value:e.B},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||(e.B=t.target.value)}}}),e._v(" "),o("span",[e._v("path:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.C,expression:"C"}],attrs:{type:"text"},domProps:{value:e.C},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||(e.C=t.target.value)}}}),e._v(" "),o("div",{staticClass:"jump_to",on:{click:function(o){return o.stopPropagation(),e.xcx_jump(t.code_number,e.userName,e.path)}}},[e._v("跳转")])]):e._e(),e._v(" "),10008==t.code_number?o("div",{staticClass:"input_container"},[o("span",[e._v("activity_link:")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.D,expression:"D"}],attrs:{type:"text"},domProps:{value:e.D},on:{click:function(t){return t.stopPropagation(),e.showId(t)},input:function(t){t.target.composing||(e.D=t.target.value)}}}),e._v(" "),o("div",{staticClass:"jump_to",on:{click:function(o){return o.stopPropagation(),e.wx_jump(t.code_number,e.activity_link)}}},[e._v("跳转")])]):e._e()])}),0)])},staticRenderFns:[]};var v=o("C7Lr")(p,h,!1,function(e){o("wr7Z"),o("uPgS")},"data-v-074599fd",null).exports,w={name:"Center",data:()=>({codeArr:[],wjh:{one:{one:"10010",two:"kZkCCukLd3CHWMWZ"},two:"",three:{one:"",two:""},four:"",five:"",six:"",seven:"",eight:"",nine:"",ten:{one:"",two:""},eleven:"",twelve:"",thirteen:"",fourteen:{one:"",two:""},fifteen:{one:"",two:""},sixteen:"",seventeen:""},dsb:"",A:"",B:"",C:"",D:"",E:""}),created(){this.getCode(),console.log("11:30!~")},methods:{autorParseMethod(e,t,o){if(console.log(o),!t)return void(document.location.href=`https://api.psy-1.com/heartide/v3/web/app/redirect?${e}`);for(let[o,n]of t.entries()){const i=document.getElementById(e+""+o)?document.getElementById(e+""+o).value:"";i||0===i?t[o]=n+"="+i:t.splice(o,1)}if(0===t.length)return void(document.location.href=`https://api.psy-1.com/heartide/v3/web/app/redirect?${e}`);const n=t.join("&");document.location.href=`https://api.psy-1.com/heartide/v3/web/app/redirect?${e}&${n}`},getCode(){var e=this;const t=new XMLHttpRequest;t.open("GET","https://api.debug.psy-1.com/heartide/v3/web/func/code"),t.send(),t.onreadystatechange=function(t){console.log(JSON.parse(t.currentTarget.response));const o=JSON.parse(t.currentTarget.response).data;for(let e of o)e.code_args&&(e.code_args=JSON.parse(e.code_args));e.codeArr=o}},redirectCtrl:function(e){callAppRouter("Redirect",{code:e},function(e,t){})},showId:function(){console.log("showId")},redirectCtrl_jump:function(e,t){callAppRouter("Redirect",{code:e,topic_id:this.A},function(e,t){})},reTag_jump:function(e,t){callAppRouter("Redirect",{code:e,tag_id:this.dsb},function(e,t){})},xcx_jump:function(e,t,o){callAppRouter("Redirect",{code:e,userName:this.B,path:this.C},function(e,t){})},wx_jump:function(e,t){callAppRouter("Redirect",{code:e,activity_link:this.D},function(e,t){})},topic_id(){},tag_id(){},activity_link(){},path(){},userName(){},toDeepLink(e,t){console.log(e),this.wjh.eleven&&(e+="&password="+this.wjh.eleven);const o=e,n=this;let i=function(){let e;return function(){return e||((e=document.createElement("iframe")).style.display="none",document.body.appendChild(e),e)}}();!function(){var e=function(e){let t="cosleep://";for(let o in e)t=t+o+"="+encodeURIComponent(e[o])+"&";return t=t.substring(0,t.length-1),encodeURIComponent(t)}(),t=i();if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){window.location.href="cosleep://deeplink?code="+o,n.toDownLoad();var r=Date.now();setTimeout(function(){Date.now()-r<1e3&&(window.location.href="cosleep://deeplink?code="+o,n.toDownLoad())},25)}else/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?(t.src=e,setTimeout(function(){},500)):(t.src=e,setTimeout(function(){window.location.href="cosleep://deeplink?code="+o,n.toDownLoad()},500))}()},one(){const e=this;var t,o=function(){return t||((t=document.createElement("iframe")).style.display="none",document.body.appendChild(t),t)};!function(){var t=function(e){var t="cosleep://";for(var o in e)t=t+o+"="+encodeURIComponent(e[o])+"&";return t=t.substring(0,t.length-1),encodeURIComponent(t)}(),n=o();if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){window.location.href="cosleep://deeplink?code="+e.wjh.one.one+"&music_detail_code="+e.wjh.one.two;var i=Date.now();setTimeout(function(){Date.now()-i<1e3&&(window.location.href="cosleep://deeplink?code="+e.wjh.one.one+"&music_detail_code="+e.wjh.one.two)},25)}else/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?(n.src=t,setTimeout(function(){window.location.href="https://www.heartide.com/download/smallsleep"},500)):(n.src=t,setTimeout(function(){window.location.href="cosleep://deeplink?code="+e.wjh.one.one+"&music_detail_code="+e.wjh.one.two},500))}()},two(){callAppRouter("Redirect",{code:10011},function(e,t){})},three(){let e={code:1026};this.wjh.three.one&&(e.tag_id=this.wjh.three.one),this.wjh.three.two&&(e.id=this.wjh.three.two),callAppRouter("Redirect",e,function(e,t){})},four(){let e={code:1017};this.wjh.four&&(e.article_id=this.wjh.four),callAppRouter("Redirect",e,function(e,t){})},five(){let e={code:10012};this.wjh.five&&(e.broadcast_id=this.wjh.five),callAppRouter("Redirect",e,function(e,t){})},six(){let e={code:10016};this.wjh.six&&(e.prepare_id=this.wjh.six),callAppRouter("Redirect",e,function(e,t){})},seven(){let e={code:1052};this.wjh.seven&&(e.category_id=this.wjh.seven),this.wjh.eight&&(e.voice_id=this.wjh.eight),callAppRouter("Redirect",e,function(e,t){})},nine(){let e={code:1047};this.wjh.nine&&(e.id=this.wjh.nine),callAppRouter("Redirect",e,function(e,t){})},ten(){let e={code:10007};this.wjh.ten.one&&(e.tag_id=this.wjh.ten.one),this.wjh.ten.two&&(e.recommend_id=this.wjh.ten.two),callAppRouter("Redirect",e,function(e,t){})},twelve(){let e={code:10023};this.wjh.twelve&&(e.id=this.wjh.twelve),callAppRouter("Redirect",e,function(e,t){})},thirteen(){let e={code:10024};this.wjh.thirteen&&(e.category_id=this.wjh.thirteen),callAppRouter("Redirect",e,function(e,t){})},fourteen(){let e={code:10025};this.wjh.fourteen.one&&(e.goods_id=this.wjh.fourteen.one),this.wjh.fourteen.two&&(e.goods_badge_text=this.wjh.fourteen.two),console.log("s"),callAppRouter("Redirect",e,function(e,t){})},fifteen(){let e={code:10017};this.wjh.fifteen.one&&(e.goods_id=this.wjh.fifteen.one),this.wjh.fifteen.two&&(e.goods_badge_text=this.wjh.fifteen.two),callAppRouter("Redirect",e,function(e,t){})},sixteen(){let e={code:1053};this.wjh.sixteen&&(e.activity_link=this.wjh.sixteen),callAppRouter("Redirect",e,function(e,t){})},seventeen(){let e={code:10029};this.wjh.seventeen&&(e.star_id=this.wjh.seventeen),callAppRouter("Redirect",e,function(e,t){})}}},f={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[e._v("\n            链接跳转\n            "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.wjh.twelve,expression:"wjh.twelve"}],staticStyle:{width:"100%","background-color":"#eee"},attrs:{placeholder:"跳转链接"},domProps:{value:e.wjh.twelve},on:{input:function(t){t.target.composing||e.$set(e.wjh,"twelve",t.target.value)}}}),e._v(" "),o("a",{attrs:{href:e.wjh.twelve}},[o("button",{attrs:{type:"info"},on:{click:function(t){return t.stopPropagation(),e.twelve(t)}}},[e._v("提交")])])])]),e._v(" "),o("ul",{staticClass:"code_list"},e._l(e.codeArr,function(t,n){return o("li",{on:{click:function(o){return o.preventDefault(),e.autorParseMethod(t.code_number,void 0,void 0)}}},[e._v("\n          "+e._s(t.code_desc)+"("+e._s(t.code_number)+")\n\n\n        "),t.code_args?o("div",{staticClass:"wjh"},[o("div",{staticClass:"wjh-outer"},[e._l(t.code_args,function(n,i){return o("input",{staticStyle:{width:"100%","background-color":"#eee"},attrs:{id:t.code_number+""+i,placeholder:n},on:{click:function(t){return t.stopPropagation(),e.showId(t)}}})}),e._v(" "),o("button",{attrs:{type:"info"},on:{click:function(o){return o.stopPropagation(),e.autorParseMethod(t.code_number,t.code_args)}}},[e._v("提交")])],2)]):e._e()])}),0)])},staticRenderFns:[]};var _=o("C7Lr")(w,f,!1,function(e){o("dp5x"),o("eJN8")},"data-v-5e4f4d84",null).exports;n.a.use(c.a);var m=new c.a({routes:[{path:"/",name:"main",component:l},{path:"/center",name:"center",component:v},{path:"/centerxc",name:"centerxc",component:_}]});n.a.prototype.$axios=d.a,n.a.config.productionTip=!1,new n.a({el:"#app",router:m,components:{App:r},template:"<App/>"})},XLj4:function(e,t){},dp5x:function(e,t){},eJN8:function(e,t){},uPgS:function(e,t){},wr7Z:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ba828aad50d2fc8e58f9.js.map