(function(e){function t(t){for(var o,s,r=t[0],c=t[1],l=t[2],u=0,g=[];u<r.length;u++)s=r[u],a[s]&&g.push(a[s][0]),a[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(g.length)g.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},i=[];function s(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"07b90307"}[e]+".js"}function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=o);var i,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(e),i=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");s.type=o,s.request=i,n[1](s)}a[e]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,c.appendChild(l)}return Promise.all(t)},r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"03ef":function(e,t,n){e.exports=n.p+"img/m_btn.30edf373.svg"},"0685":function(e,t,n){},"0798":function(e,t,n){},"08f1":function(e,t,n){e.exports=n.p+"img/number_7.dc8103e9.svg"},"096e":function(e,t,n){e.exports=n.p+"img/number_1.7792d186.svg"},"098f":function(e,t,n){},1061:function(e,t,n){e.exports=n.p+"img/number_2.26a1fa2d.svg"},"13c7":function(e,t,n){},"1dc4":function(e,t,n){"use strict";var o=n("0798"),a=n.n(o);a.a},"295f":function(e,t,n){"use strict";var o=n("c751"),a=n.n(o);a.a},"2c10":function(e,t,n){e.exports=n.p+"img/line.fe9bcef7.svg"},"2c20":function(e,t,n){var o={"./number_0.svg":"be1d","./number_1.svg":"096e","./number_2.svg":"1061","./number_3.svg":"7641","./number_4.svg":"ce1b","./number_5.svg":"3368","./number_6.svg":"721c","./number_7.svg":"08f1","./number_8.svg":"5222","./number_9.svg":"4079"};function a(e){var t=i(e);return n(t)}function i(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id="2c20"},3368:function(e,t,n){e.exports=n.p+"img/number_5.e5f5000c.svg"},3493:function(e,t,n){e.exports=n.p+"img/QRcode.fbfae23a.png"},4079:function(e,t,n){e.exports=n.p+"img/number_9.84bfc402.svg"},"42a1":function(e,t,n){"use strict";var o=n("f1e2"),a=n.n(o);a.a},"4c35":function(e,t,n){},"500a":function(e,t,n){e.exports=n.p+"img/bg3.efaa0bb1.png"},5222:function(e,t,n){e.exports=n.p+"img/number_8.2e7861cf.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{staticClass:"logo",attrs:{src:n("8c36")}}),o("img",{staticClass:"title",attrs:{src:n("b890")}}),e.isRouterAlive?o("router-view"):e._e()],1)},i=[],s={data:function(){return{isRouterAlive:!0}},methods:{reload:function(){var e=this;console.log("？"),this.isRouterAlive=!1,this.$nextTick(function(){return e.isRouterAlive=!0})}}},r=s,c=(n("ba5a"),n("b0a0"),n("2877")),l=Object(c["a"])(r,a,i,!1,null,"89e78562",null);l.options.__file="App.vue";var u=l.exports,p=n("8c4f"),g=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("img",{staticClass:"bg",attrs:{src:n("aaae")}}),o("div",{staticClass:"bottom-button",on:{click:e.toPlayingPage}},[o("vueButton",[e._v("马上开始")])],1),e._m(0),e.inputshow?o("InputName",{staticStyle:{position:"fixed"}}):e._e()],1)},m=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"bottom-download",attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[o("img",{attrs:{src:n("b86d")}})])}],d=(n("4917"),n("7f7f"),n("28a5"),n("a481"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("img",{staticClass:"img",attrs:{src:n("03ef")}}),o("p",{staticClass:"p"},[e._t("default")],2)])}),f=[],h={name:"vuebutton"},v=h,b=(n("74b8"),Object(c["a"])(v,d,f,!1,null,"25fde5ba",null));b.options.__file="button.vue";var w=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"input"},[n("p",[e._v("请输入你的昵称")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{maxlength:"8",limit:"6"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("div",{on:{click:e.submit}},[e._v("确定")])])])},_=[],S={name:"inputname",data:function(){return{name:""}},methods:{submit:function(){this.name||(this.name="无名同学"),this.name&&(localStorage.setItem("name",this.name),this.$router.push({path:"/playpage"}))}}},I=S,x=(n("42a1"),Object(c["a"])(I,y,_,!1,null,"6858b4eb",null));x.options.__file="inputname.vue";var k=x.exports,C=n("c665"),E=n("aa9a"),M=function(){function e(){Object(C["a"])(this,e)}return Object(E["a"])(e,null,[{key:"is_cosleep",value:function(){return this.is_cosleep_android()||this.is_cosleep_ios()}},{key:"is_cosleep_ios",value:function(){var e=!1;try{e="undefined"!=typeof window.webkit.messageHandlers.XinchaoApp}catch(e){}return e}},{key:"is_cosleep_android",value:function(){return"undefined"!=typeof window.XinchaoApp}},{key:"get_api_root",value:function(){switch("production"){case"production":return"https://api.psy-1.com";case"test":return"https://api.debug.psy-1.com"}}},{key:"get_web_root",value:function(){switch("production"){case"production":return"https://www.heartide.com";case"test":return"https://web.debug.psy-1.com"}}},{key:"baidu_statics",value:function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?c6a0be7a2e98e04ca2cf523568e2cbc4";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}]),e}(),O={name:"home",data:function(){return{inputshow:!1,return_url:window.location.href.split("#")[0].replace(/\?.+/,"")}},components:{vueButton:w,InputName:k},methods:{toPlayingPage:function(){var e=this,t=this;this.isWeiXin()?t.$router.push({path:"/playpage"}):M.is_cosleep()?this.callAppRouter("isLogin",{},function(n,o){"已登录"===JSON.parse(o).msg?e.callAppRouter("Login",{},function(e,n){try{var o=JSON.parse(n);localStorage.setItem("name",o.data.name),console.log(o.data.name)}catch(e){localStorage.setItem("name",n.data.name),console.log(n.data.name)}t.$router.push({path:"/playpage"})}):localStorage.getItem("name")?t.$router.push({path:"/playpage"}):e.inputshow=!0}):localStorage.getItem("name")?t.$router.push({path:"/playpage"}):this.inputshow=!0},callAppRouter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o={Method:e,Data:t},a="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));o=JSON.stringify(o),Xinchao.Web[a]=function(e,t){n&&n(e,t),delete Xinchao.Web[a]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:o,cbName:a}):XinchaoApp.callRouter(o,a)},appShare:function(){var e={type1:{title:"教师节活动标题",desc:"描述",link:this.return_url,imgUrl:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg",shareType:1},type2:{title:"教师节活动标题",link:this.return_url,imgUrl:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg",shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=JSON.stringify(e),document.getElementById("share2").value=JSON.stringify(e.type1),document.getElementById("share3").value=JSON.stringify(e.type2)},weixinSDK:function(e,t){var n=new XMLHttpRequest,o=this;n.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){console.log("sdk ok");var e=JSON.parse(n.response);console.log(e.data.wechat_config),e.data.wechat_config.debug=!1,t&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),t||(wx.config(e.data.wechat_config),o.weixinShare())}},n.send()},weatherCode:function(){var e=/code=(.+?)&/,t=window.location.href.match(e);return t||!1},weixinGetName:function(){if(!localStorage.getItem("name")){var e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get("https://api.debug.psy-1.com/web/v1/wechat/user",{code:e},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}},isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},weixinInit:function(e){if(this.isWeiXin()){var t=this.weatherCode();t?(this.weixinSDK(e,!1),sessionStorage.setItem("code",t),this.weixinGetName()):this.weixinSDK(e,!0)}},weixinShare:function(){console.log(this.return_url),wx.onMenuShareAppMessage({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareQQ({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareQZone({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareTimeline({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.error(function(e){alert(e)})}},mounted:function(){this.weixinInit("https://api.debug.psy-1.com"),this.appShare()}},B=O,N=(n("9a90"),Object(c["a"])(B,g,m,!1,null,"c4367750",null));N.options.__file="Home.vue";var P=N.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},L=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main",attrs:{id:"test"}},[o("div",{staticStyle:{width:"100%",height:"60%",transform:"translateY(30%)"},attrs:{id:"center"}},[o("canvas",{attrs:{id:"myCanvas",resize:"true"}}),o("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg1",src:n("852b"),width:"320",height:"491"}}),o("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg2",src:n("5b1f"),width:"320",height:"491"}}),o("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg3",src:n("500a"),width:"320",height:"491"}}),o("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg4",src:n("6888"),width:"320",height:"491"}})]),o("p",{staticClass:"bottom-desc"},[e._v("一闪而过的图片，你能照着画出来吗？")])])}],T=n("f06d"),A=n.n(T),U={name:"playpage",methods:{anmination:function(){A.a.install(window),A.a.setup(document.getElementById("myCanvas")),A.a.settings.handleSize=0,A.a.settings.hitTolerance=4},paperStart:function(){n("fd28")}},mounted:function(){1==localStorage.getItem("reload")&&(localStorage.setItem("reload","0"),location.reload()),this.anmination(),this.paperStart()}},R=U,W=(n("c48f"),n("295f"),Object(c["a"])(R,j,L,!1,null,"d74fe20a",null));W.options.__file="playpage.vue";var X=W.exports,z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"score-frame"},[o("div",{staticClass:"score-tainer"},[o("div",{staticClass:"score-border",attrs:{id:"saveImg"}},[o("img",{attrs:{src:n("ab8a")}}),o("div",{staticClass:"container",attrs:{id:"load_svg",ontouchstart:"gtouchstart()",ontouchmove:"gtouchmove()",ontouchend:"gtouchend()"}},[o("div",{staticClass:"container-score-frame"},[o("ul",[o("li",[e._v("姓名："),o("span",{attrs:{id:"name"}},[e._v(e._s(e.name))])]),o("li",{attrs:{id:"degreed"}},[e._v(e._s(e.lv))])]),o("div",[o("div",{staticClass:"one"},[e._v("成绩:")]),o("div",{staticClass:"two"},[o("div",[o("img",{attrs:{id:"scoreOne",src:e.one}}),o("img",{attrs:{id:"scoreTwo",src:e.two}})]),e._m(0)])])]),o("div",{staticClass:"infomation",attrs:{id:"information"}})]),e._m(1)])]),o("p",{staticClass:"small-tips"},[e._v("*长按上方保存图片*")]),o("div",{staticClass:"score-bottom"},[o("vueButton",[e._v("阖家团圆")]),o("vueButton",{nativeOn:{click:function(t){return e.again(t)}}},[e._v("再玩一次")])],1)])},D=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{attrs:{src:n("2c10")}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bottom"},[o("img",{staticStyle:{"margin-top":"1em"},attrs:{src:n("76db")}}),o("div",{staticStyle:{float:"right","text-align":"right"}},[o("img",{staticStyle:{display:"block",float:"right",height:"3em",width:"3em",padding:"0em","padding-right":"1em","padding-bottom":"0.1em"},attrs:{src:n("3493")}}),o("img",{staticClass:"sentance",staticStyle:{width:"5em",float:"right",clear:"right"},attrs:{src:n("d5ab")}})])])}],J=n("3c25"),q=n.n(J),H={name:"result",data:function(){return{one:n("2c20")("./number_"+localStorage.getItem("one")+".svg"),two:n("2c20")("./number_"+localStorage.getItem("two")+".svg"),lv:localStorage.getItem("lv"),name:localStorage.getItem("name")}},components:{vueButton:w},methods:{setImgSize:function(e,t){var n=e.height/e.width,o=document.getElementById(t).offsetHeight+" "+document.getElementById(t).offsetWidth;n<o?e.width=document.getElementById(t).offsetWidth-10:e.height=document.getElementById(t).offsetHeight-10},append:function(){var e=document.getElementById("information"),t=new Image;t.src=localStorage.getItem("canvasSrc"),t.width=e.offsetWidth,t.id="asd",e.appendChild(t),q()(document.getElementsByClassName("score-border")[0],{onclone:function(e){e.getElementsByClassName("score-border")[0].classList.add("visiable")}}).then(function(e){var t=new Image;t.src=e.toDataURL(),t.classList.add("resultImg"),document.getElementsByClassName("score-tainer")[0].innerHTML="",document.getElementsByClassName("score-tainer")[0].appendChild(t),document.getElementsByClassName("score-tainer")[0].classList.add("visiable")})},again:function(){console.log("zz"),localStorage.setItem("reload","1"),this.$router.push({path:"/playpage"})},getName:function(){return console.log("现在进去了getName"),new Promise(function(e){e()})},sendGetName:function(){},getNameInit:function(){var e=this;if(console.log("??"),this.isWeiXin()){console.log("对的 是微信 可以问题出在哪？");var t=localStorage.getItem("name");t?(console.log("没有name哦"),this.name=t,this.$nextTick(this.append)):this.getName().then(function(){console.log("对的 取不到名称就去取"),e.append()}).catch(function(e){console.log(e)})}this.isWeiXin()||(this.name=localStorage.getItem("name"))},isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},weixinShare:function(){console.log(this.return_url),wx.onMenuShareAppMessage({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareQQ({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareQZone({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareTimeline({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.error(function(e){alert(e)})}},mounted:function(){this.weixinShare(),this.append()}},G=H,Q=(n("1dc4"),n("b5cf"),Object(c["a"])(G,z,D,!1,null,"3888e61c",null));Q.options.__file="result.vue";var F=Q.exports;o["a"].use(p["a"]);var Z=new p["a"]({routes:[{path:"/",name:"home",component:P},{path:"/playpage",name:"playpage",component:X},{path:"/result",name:"result",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),K=n("2f62");o["a"].use(K["a"]);var V=new K["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:Z,store:V,render:function(e){return e(u)}}).$mount("#app")},"5b1f":function(e,t,n){e.exports=n.p+"img/bg2.93375713.png"},6:function(e,t){},6888:function(e,t,n){e.exports=n.p+"img/bg4.9d6449f3.png"},7:function(e,t){},"721c":function(e,t,n){e.exports=n.p+"img/number_6.9ed39a44.svg"},"74b8":function(e,t,n){"use strict";var o=n("4c35"),a=n.n(o);a.a},7641:function(e,t,n){e.exports=n.p+"img/number_3.88cb5415.svg"},"76db":function(e,t,n){e.exports=n.p+"img/f-day_img_openning_logo@2x.24afd3fe.png"},"852b":function(e,t,n){e.exports=n.p+"img/bg1.992c86c3.png"},"8c36":function(e,t,n){e.exports=n.p+"img/f-day_img_openning_logo1.deb3ed07.svg"},"96c5":function(e,t,n){},"9a90":function(e,t,n){"use strict";var o=n("96c5"),a=n.n(o);a.a},aaae:function(e,t,n){e.exports=n.p+"img/m_start_img.f3db62fa.svg"},ab8a:function(e,t,n){e.exports=n.p+"img/finally_title@3x.3c677e5c.png"},b0a0:function(e,t,n){"use strict";var o=n("e03b"),a=n.n(o);a.a},b5cf:function(e,t,n){"use strict";var o=n("13c7"),a=n.n(o);a.a},b86d:function(e,t,n){e.exports=n.p+"img/start_tocosleep_btn2.2ba55e2b.gif"},b890:function(e,t,n){e.exports=n.p+"img/title.0967534b.svg"},ba5a:function(e,t,n){"use strict";var o=n("098f"),a=n.n(o);a.a},be1d:function(e,t,n){e.exports=n.p+"img/number_0.7492092f.svg"},c48f:function(e,t,n){"use strict";var o=n("0685"),a=n.n(o);a.a},c751:function(e,t,n){},ce1b:function(e,t,n){e.exports=n.p+"img/number_4.53d30c91.svg"},d5ab:function(e,t,n){e.exports=n.p+"img/font.4ec8566a.png"},e03b:function(e,t,n){},f1e2:function(e,t,n){},fd28:function(e,t,n){"use strict";n.r(t);n("28a5"),n("cadf"),n("551c"),n("097d");var o=n("3c25"),a=n.n(o);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.7,t=view.size.width/2*e;return t}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;e.opacity<=.02?e.opacity=0:e.opacity-=t}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;e.opacity+=t,e.opacity>=.9&&(e.opacity=1)}function c(e,t){for(var n,o,a=2*Math.PI/360,s=0;s<t;s++){var r=360/t*s;n=Math.round(Math.cos(a*r)*i(1)+view.center.x),o=Math.round(Math.sin(a*r)*i(1)+view.center.y);var c=new Point(n,o);e.add(c)}}function l(e,t){for(var n=[],o=0;o<e.length;o++){var a=new Path;a.add(view.center),a.lineTo(e[o].point);var i=a.getIntersections(t),s=a.getIntersections(u);if(0 in i){var r=new Path;r.add(s[s.length-1].point),r.lineTo(i[i.length-1].point),n.push(r),_+=r.length}else{var c=new Path;c.add(s[s.length-1].point),c.lineTo(view.center),_+=c.length}}return n}var u=new Path.Circle({center:view.center,radius:i(),strokeColor:"#F59A55",strokeWidth:3}),p=new Path;c(p,50);var g=new Path(view.center,new Point(view.center.x-i(),view.center.y));g.strokeColor="#F59A55",g.strokeWidth=3,g.rotate(180,view.center);var m=new Path({strokeColor:"#F59A55",strokeWidth:2});function d(){s(u,.02)}view.onMouseDown=function(e){m.add(e.point),console.log("dw")},view.onMouseDrag=function(e){m.add(e.point),console.log("drag")};var f=[];view.onMouseUp=function(){m.closePath(),console.log(p.segments),f=l(p.segments,m),v=!0};var h=0,v=!1,b=!0,w=0,y=!1,_=0;function S(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}function I(){var e=document.getElementById("test");a()(e,{onclone:function(e){e.getElementById("test").classList.add("changBG");var t=paper.project.exportSVG();e.getElementById("test").innerHTML="",e.getElementById("test").appendChild(t)}}).then(function(e){localStorage.setItem("canvasSrc",e.toDataURL()),window.location.href=window.location.href.split("#")[0]+"#/result"})}function x(e){switch(!0){case e<284:localStorage.setItem("one","9"),localStorage.setItem("lv","等级：Lv9民间画圣"),localStorage.setItem("two",parseInt((284-e+40)/284*10));break;case e<750&&e>=284:localStorage.setItem("one","8"),localStorage.setItem("lv","等级：Lv8绘画宗师"),localStorage.setItem("two",parseInt((750-e)/466*10));break;case e<1300&&e>=750:localStorage.setItem("one","7"),localStorage.setItem("lv","等级：Lv7天才画家"),localStorage.setItem("two",parseInt((1300-e)/550*10));break;case e<2600&&e>=1300:localStorage.setItem("one","6"),localStorage.setItem("lv","等级：Lv6灵魂画手"),localStorage.setItem("two",parseInt((2600-e)/1300*10));break;case e<3300&&e>=2600:localStorage.setItem("one","5"),localStorage.setItem("lv","等级：Lv5绘画达人"),localStorage.setItem("two",parseInt((3300-e)/700*10));break;case e<4e3&&e>=3300:localStorage.setItem("one","4"),localStorage.setItem("lv","等级：Lv4画室学徒"),localStorage.setItem("two",parseInt((4e3-e)/700*10));break;case e<4500&&e>=4e3:localStorage.setItem("one","3"),localStorage.setItem("lv","等级：Lv3绘画能手"),localStorage.setItem("two",parseInt((4500-e)/500*10));break;case e<5e3&&e>=4500:localStorage.setItem("one","2"),localStorage.setItem("lv","等级：Lv2新手临摹"),localStorage.setItem("two",parseInt((5e3-e)/500*10));break;case e<5800&&e>=5e3:localStorage.setItem("one","1"),localStorage.setItem("lv","等级：Lv1手残菜鸟"),localStorage.setItem("two",parseInt((5800-e)/800*10));break;case e<6400&&e>=5800:localStorage.setItem("one","0"),localStorage.setItem("lv","等级：Lv1手残菜鸟"),localStorage.setItem("two",parseInt((6400-e)/600*10));break}e<284&&parseInt((284-e+40)/284*10)<=6&&localStorage.setItem("lv","等级：Lv10神来之手")}view.onFrame=function(e){if(!v&&b&&d(),v&&(r(u),w!=f.length?g.rotate(2.75,view.center):(g.opacity=0,v=!1,y=!0),w<=f.length/1.5&&s(g),h+=e.delta,h>=.033&&(console.log(f.length),w<f.length&&(f[w].strokeColor="#F59A55",w+=1),h=0)),y){var t="bg"+S(1,4),n=new Raster(t);n.position=view.center,n.size=new Size(2*i(1),2*i(1)),m.strokeColor="red";var o=new Group([m,n]);o.setClipped(!0),o.fillColor="red",y=!1,b=!1,x(_),I()}}}});
//# sourceMappingURL=app.da42ec4a.js.map