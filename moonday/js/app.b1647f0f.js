(function(e){function t(t){for(var o,i,r=t[0],c=t[1],l=t[2],u=0,m=[];u<r.length;u++)i=r[u],a[i]&&m.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);g&&g(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(o=!1)}o&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},s=[];function i(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"07b90307"}[e]+".js"}function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=o);var s,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=i(e),s=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+s+")");i.type=o,i.request=s,n[1](i)}a[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,c.appendChild(l)}return Promise.all(t)},r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var g=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"015d":function(e,t,n){},"03ef":function(e,t,n){e.exports=n.p+"img/m_btn.30edf373.svg"},"08f1":function(e,t,n){e.exports=n.p+"img/number_7.dc8103e9.svg"},"096e":function(e,t,n){e.exports=n.p+"img/number_1.7792d186.svg"},"0efd":function(e,t,n){},1061:function(e,t,n){e.exports=n.p+"img/number_2.26a1fa2d.svg"},"13c7":function(e,t,n){},"1faa":function(e,t){function n(){var e=document.documentElement.clientWidth,t=document.querySelector("html");t.style.fontSize=e/10+"px"}n(),window.addEventListener("resize",n)},"295f":function(e,t,n){"use strict";var o=n("c751"),a=n.n(o);a.a},"2a89":function(e,t,n){"use strict";var o=n("7947"),a=n.n(o);a.a},"2c10":function(e,t,n){e.exports=n.p+"img/line.fe9bcef7.svg"},"2c20":function(e,t,n){var o={"./number_0.svg":"be1d","./number_1.svg":"096e","./number_2.svg":"1061","./number_3.svg":"7641","./number_4.svg":"ce1b","./number_5.svg":"3368","./number_6.svg":"721c","./number_7.svg":"08f1","./number_8.svg":"5222","./number_9.svg":"4079"};function a(e){var t=s(e);return n(t)}function s(e){var t=o[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}a.keys=function(){return Object.keys(o)},a.resolve=s,e.exports=a,a.id="2c20"},3368:function(e,t,n){e.exports=n.p+"img/number_5.e5f5000c.svg"},3493:function(e,t,n){e.exports=n.p+"img/QRcode.fbfae23a.png"},4079:function(e,t,n){e.exports=n.p+"img/number_9.84bfc402.svg"},"500a":function(e,t,n){e.exports=n.p+"img/bg3.efaa0bb1.png"},5222:function(e,t,n){e.exports=n.p+"img/number_8.2e7861cf.svg"},"523f":function(e,t,n){"use strict";var o=n("015d"),a=n.n(o);a.a},"55f3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("img",{staticClass:"logo",attrs:{src:n("8c36")}}),o("img",{staticClass:"title",attrs:{src:n("b890")}}),e.isRouterAlive?o("router-view"):e._e()],1)},s=[];n("1faa");var i={data:function(){return{isRouterAlive:!0}},methods:{reload:function(){var e=this;console.log("？"),this.isRouterAlive=!1,this.$nextTick(function(){return e.isRouterAlive=!0})}}},r=i,c=(n("c52e"),n("b0a0"),n("2877")),l=Object(c["a"])(r,a,s,!1,null,"0b1c60ca",null);l.options.__file="App.vue";var u=l.exports,g=n("8c4f"),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("img",{staticClass:"bg",attrs:{src:n("aaae")}}),o("div",{staticClass:"bottom-button",on:{click:e.toPlayingPage}},[o("vueButton",{staticClass:"go"},[e._v("马上开始")])],1),e._m(0),e.inputshow?o("InputName",{staticStyle:{position:"fixed"}}):e._e()],1)},p=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"bottom-download",attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[o("img",{attrs:{src:n("b86d")}})])}],d=(n("4917"),n("7f7f"),n("28a5"),n("a481"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main"},[o("img",{staticClass:"img",attrs:{src:n("03ef")}}),o("p",{staticClass:"p"},[e._t("default")],2)])}),f=[],h={name:"vuebutton"},v=h,w=(n("2a89"),Object(c["a"])(v,d,f,!1,null,"4494700f",null));w.options.__file="button.vue";var b=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main"},[n("div",{staticClass:"input"},[n("p",[e._v("请输入你的昵称")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{maxlength:"8",limit:"6"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("div",{on:{click:e.submit}},[e._v("确定")])])])},y=[],S={name:"inputname",data:function(){return{name:""}},methods:{submit:function(){this.name||(this.name="无名同学"),this.name&&(localStorage.setItem("name",this.name),this.$router.push({path:"/playpage"}))}}},I=S,x=(n("523f"),Object(c["a"])(I,_,y,!1,null,"53cf8df0",null));x.options.__file="inputname.vue";var k=x.exports,C=n("c665"),E=n("aa9a"),M=function(){function e(){Object(C["a"])(this,e)}return Object(E["a"])(e,null,[{key:"is_cosleep",value:function(){return this.is_cosleep_android()||this.is_cosleep_ios()}},{key:"is_cosleep_ios",value:function(){var e=!1;try{e="undefined"!=typeof window.webkit.messageHandlers.XinchaoApp}catch(e){}return e}},{key:"is_cosleep_android",value:function(){return"undefined"!=typeof window.XinchaoApp}},{key:"get_api_root",value:function(){switch("production"){case"production":return"https://api.psy-1.com";case"test":return"https://api.debug.psy-1.com"}}},{key:"get_web_root",value:function(){switch("production"){case"production":return"https://www.heartide.com";case"test":return"https://web.debug.psy-1.com"}}},{key:"baidu_statics",value:function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?c6a0be7a2e98e04ca2cf523568e2cbc4";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}]),e}(),O={name:"home",data:function(){return{inputshow:!1,return_url:window.location.href.split("#")[0].replace(/\?.+/,"")}},components:{vueButton:b,InputName:k},methods:{toPlayingPage:function(){var e=this,t=this;this.isWeiXin()?t.$router.push({path:"/playpage"}):M.is_cosleep()?this.callAppRouter("isLogin",{},function(n,o){"已登录"===JSON.parse(o).msg?e.callAppRouter("Login",{},function(e,n){try{var o=JSON.parse(n);localStorage.setItem("name",o.data.name),console.log(o.data.name)}catch(e){localStorage.setItem("name",n.data.name),console.log(n.data.name)}t.$router.push({path:"/playpage"})}):localStorage.getItem("name")?t.$router.push({path:"/playpage"}):e.inputshow=!0}):localStorage.getItem("name")?t.$router.push({path:"/playpage"}):this.inputshow=!0},callAppRouter:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o={Method:e,Data:t},a="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));o=JSON.stringify(o),Xinchao.Web[a]=function(e,t){n&&n(e,t),delete Xinchao.Web[a]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:o,cbName:a}):XinchaoApp.callRouter(o,a)},appShare:function(){var e={type1:{title:"教师节活动标题",desc:"描述",link:this.return_url,imgUrl:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg",shareType:1},type2:{title:"教师节活动标题",link:this.return_url,imgUrl:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg",shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=JSON.stringify(e),document.getElementById("share2").value=JSON.stringify(e.type1),document.getElementById("share3").value=JSON.stringify(e.type2)},weixinSDK:function(e,t){var n=new XMLHttpRequest,o=this;n.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){console.log("sdk ok");var e=JSON.parse(n.response);console.log(e.data.wechat_config),e.data.wechat_config.debug=!1,t&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),t&&!localStorage.getItem("name")||(wx.config(e.data.wechat_config),o.weixinShare())}},n.send()},weatherCode:function(){var e=/code=(.+?)&/,t=window.location.href.match(e);return t||!1},weixinGetName:function(){if(!localStorage.getItem("name")){var e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get("https://api.debug.psy-1.com/web/v1/wechat/user",{code:e},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}},isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},weixinInit:function(e){if(this.isWeiXin()){var t=this.weatherCode();t?(this.weixinSDK(e,!1),sessionStorage.setItem("code",t),this.weixinGetName()):this.weixinSDK(e,!0)}},weixinShare:function(){console.log(this.return_url),wx.ready(function(e){wx.onMenuShareAppMessage({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareQQ({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareQZone({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareTimeline({title:"月饼",desc:"这是描述",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.error(function(e){alert(e)})})}},mounted:function(){localStorage.setItem("back","1"),this.weixinInit("https://api.debug.psy-1.com"),this.appShare()}},P=O,j=(n("e9d0"),Object(c["a"])(P,m,p,!1,null,"14326dda",null));j.options.__file="Home.vue";var A=j.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"main",attrs:{id:"test"}},[o("div",{staticClass:"moon",staticStyle:{width:"100%",height:"60%"},attrs:{id:"center"}},[o("canvas",{attrs:{id:"myCanvas",resize:"true"}}),o("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg1",src:n("f530"),width:"320",height:"491"}}),o("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg2",src:n("5b1f"),width:"320",height:"491"}}),o("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg3",src:n("500a"),width:"320",height:"491"}}),o("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg4",src:n("6888"),width:"320",height:"491"}})]),o("p",{staticClass:"bottom-desc"},[e._v("一闪而过的图片，你能照着画出来吗？")])])}],L=n("f06d"),T=n.n(L),W={name:"playpage",methods:{anmination:function(){T.a.install(window),T.a.setup(document.getElementById("myCanvas")),T.a.settings.handleSize=0,T.a.settings.hitTolerance=4},paperStart:function(){n("fd28")}},mounted:function(){1==localStorage.getItem("reload")&&(localStorage.setItem("reload","0"),location.reload()),this.anmination(),this.paperStart()}},U=W,R=(n("ab34"),n("295f"),Object(c["a"])(U,B,N,!1,null,"6223df48",null));R.options.__file="playpage.vue";var z=R.exports,X=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"score-frame"},[o("div",{staticClass:"score-tainer"},[o("div",{staticClass:"score-border",attrs:{id:"saveImg"}},[o("img",{attrs:{src:n("ab8a")}}),o("div",{staticClass:"container",attrs:{id:"load_svg",ontouchstart:"gtouchstart()",ontouchmove:"gtouchmove()",ontouchend:"gtouchend()"}},[o("div",{staticClass:"container-score-frame"},[o("ul",[o("li",[e._v("姓名："),o("span",{staticClass:"name",attrs:{id:"name"}},[e._v(e._s(e.name))])]),o("li",{attrs:{id:"degreed"}},[e._v(e._s(e.lv))]),o("li",{staticClass:"ms"},[e._v("风格："+e._s(e.ms))])]),o("div",[o("div",{staticClass:"one"},[e._v("成绩:")]),o("div",{staticClass:"two"},[o("div",[o("img",{attrs:{id:"scoreOne",src:e.one}}),o("img",{attrs:{id:"scoreTwo",src:e.two}})]),e._m(0)])])]),o("div",{staticClass:"infomation",attrs:{id:"information"}}),o("div",{staticClass:"desc"},[e._v(e._s(e.wa))])]),e._m(1)])]),o("p",{staticClass:"small-tips"},[e._v("*长按上方保存图片*")]),o("div",{staticClass:"score-bottom"},[o("vueButton",[e._v("阖家团圆")]),o("vueButton",{nativeOn:{click:function(t){return e.again(t)}}},[e._v("再玩一次")])],1)])},D=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{attrs:{src:n("2c10")}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bottom"},[o("img",{staticClass:"left",attrs:{src:n("76db")}}),o("div",{staticClass:"right"},[o("img",{staticClass:"o",attrs:{src:n("3493")}}),o("img",{staticClass:"sentance",attrs:{src:n("d5ab")}})])])}],q=(n("3c25"),{name:"result",data:function(){return{one:n("2c20")("./number_"+localStorage.getItem("one")+".svg"),two:n("2c20")("./number_"+localStorage.getItem("two")+".svg"),lv:localStorage.getItem("lv"),name:localStorage.getItem("name"),wa:localStorage.getItem("wa"),ms:localStorage.getItem("ms")}},components:{vueButton:b},methods:{setImgSize:function(e,t){var n=e.height/e.width,o=document.getElementById(t).offsetHeight+" "+document.getElementById(t).offsetWidth;n<o?e.width=document.getElementById(t).offsetWidth-10:e.height=document.getElementById(t).offsetHeight-10},append:function(){var e=document.getElementById("information"),t=new Image;t.src=localStorage.getItem("canvasSrc");var n=window.outerHeight<=580?-20:-205;t.width=e.offsetWidth-n,t.id="asd",e.appendChild(t)},again:function(){console.log("zz"),localStorage.setItem("reload","1"),this.$router.push({path:"/playpage"})},getName:function(){return console.log("现在进去了getName"),new Promise(function(e){e()})},sendGetName:function(){},getNameInit:function(){var e=this;if(console.log("??"),this.isWeiXin()){console.log("对的 是微信 可以问题出在哪？");var t=localStorage.getItem("name");t?(console.log("没有name哦"),this.name=t,this.$nextTick(this.append)):this.getName().then(function(){console.log("对的 取不到名称就去取"),e.append()}).catch(function(e){console.log(e)})}this.isWeiXin()||(this.name=localStorage.getItem("name"))},isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},weixinShare:function(){console.log(this.return_url),wx.onMenuShareAppMessage({title:"月饼",desc:"我画的月饼"+localStorage.getItem("one")+localStorage.getItem("two")+"分，来看看你画的月饼有多圆？",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareQQ({title:"月饼",desc:"我画的月饼"+localStorage.getItem("one")+localStorage.getItem("two")+"分，来看看你画的月饼有多圆？",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareQZone({title:"月饼",desc:"我画的月饼"+localStorage.getItem("one")+localStorage.getItem("two")+"分，来看看你画的月饼有多圆？",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.onMenuShareTimeline({title:"月饼",desc:"我画的月饼"+localStorage.getItem("one")+localStorage.getItem("two")+"分，来看看你画的月饼有多圆？",link:this.return_url,imgUrl:"https://res.psy-1.com/cosleep/moonday/logo@3x.png",success:function(){console.log("分享成功")}}),wx.error(function(e){alert(e)})}},mounted:function(){this.weixinShare(),this.append()}}),H=q,J=(n("e781"),n("b5cf"),Object(c["a"])(H,X,D,!1,null,"f94048be",null));J.options.__file="result.vue";var F=J.exports;o["a"].use(g["a"]);var G=new g["a"]({routes:[{path:"/",name:"home",component:A},{path:"/playpage",name:"playpage",component:z},{path:"/result",name:"result",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),Q=n("2f62");o["a"].use(Q["a"]);var Z=new Q["a"].Store({state:{},mutations:{},actions:{}});o["a"].config.productionTip=!1,new o["a"]({router:G,store:Z,render:function(e){return e(u)}}).$mount("#app")},"5b1f":function(e,t,n){e.exports=n.p+"img/bg2.93375713.png"},6:function(e,t){},6888:function(e,t,n){e.exports=n.p+"img/bg4.9d6449f3.png"},7:function(e,t){},"721c":function(e,t,n){e.exports=n.p+"img/number_6.9ed39a44.svg"},7641:function(e,t,n){e.exports=n.p+"img/number_3.88cb5415.svg"},"76db":function(e,t,n){e.exports=n.p+"img/f-day_img_openning_logo@2x.24afd3fe.png"},7947:function(e,t,n){},"8c36":function(e,t,n){e.exports=n.p+"img/f-day_img_openning_logo1.deb3ed07.svg"},aaae:function(e,t,n){e.exports=n.p+"img/m_start_img.f3db62fa.svg"},ab34:function(e,t,n){"use strict";var o=n("d30f"),a=n.n(o);a.a},ab8a:function(e,t,n){e.exports=n.p+"img/finally_title@3x.3c677e5c.png"},b0a0:function(e,t,n){"use strict";var o=n("e03b"),a=n.n(o);a.a},b5cf:function(e,t,n){"use strict";var o=n("13c7"),a=n.n(o);a.a},b86d:function(e,t,n){e.exports=n.p+"img/start_tocosleep_btn2.2ba55e2b.gif"},b890:function(e,t,n){e.exports=n.p+"img/title.0967534b.svg"},be1d:function(e,t,n){e.exports=n.p+"img/number_0.7492092f.svg"},c52e:function(e,t,n){"use strict";var o=n("55f3"),a=n.n(o);a.a},c751:function(e,t,n){},ce1b:function(e,t,n){e.exports=n.p+"img/number_4.53d30c91.svg"},d30f:function(e,t,n){},d5ab:function(e,t,n){e.exports=n.p+"img/font.4ec8566a.png"},e03b:function(e,t,n){},e781:function(e,t,n){"use strict";var o=n("f927"),a=n.n(o);a.a},e9d0:function(e,t,n){"use strict";var o=n("0efd"),a=n.n(o);a.a},f530:function(e,t,n){e.exports=n.p+"img/bg1.992c86c3.png"},f927:function(e,t,n){},fd28:function(e,t,n){"use strict";n.r(t);n("28a5");var o=n("3c25"),a=n.n(o),s=window.outerHeight;function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.6;s<=580&&console.log("??");var t=view.size.width/2*e;return t}function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;e.opacity<=.02?e.opacity=0:e.opacity-=t}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;e.opacity+=t,e.opacity>=.9&&(e.opacity=1)}function l(e,t){for(var n,o,a=2*Math.PI/360,s=0;s<t;s++){var r=360/t*s;n=Math.round(Math.cos(a*r)*i(1)+view.center.x),o=Math.round(Math.sin(a*r)*i(1)+view.center.y);var c=new Point(n,o);e.add(c)}}function u(e,t){for(var n=[],o=0;o<60;o++){var a=new Path;a.add(view.center),a.lineTo(e[o].point);var s=a.getIntersections(t),i=a.getIntersections(g);if(0 in s){var r=new Path;r.strokeWidth=2,r.opacity=0,r.add(i[i.length-1].point),r.lineTo(s[s.length-1].point),n.push(r),x+=r.length}else{var c=new Path;c.strokeWidth=2,c.opacity=0,c.add(i[i.length-1].point),c.lineTo(view.center),x+=c.length}}return n}var g=new Path.Circle({center:view.center,radius:i(),strokeColor:"#F59A55",strokeWidth:6}),m=new Path.Circle({center:view.center,radius:6,strokeColor:"#F59A55",strokeWidth:6,fillColor:"#F59A55"}),p=new Path;l(p,60);var d=new Path(view.center,new Point(view.center.x-i(),view.center.y));d.strokeColor="#F59A55",d.strokeWidth=6,d.rotate(180,view.center);var f=new Path({strokeColor:"#F59A55",strokeWidth:4}),h=0;function v(){r(g,.02)}view.onMouseDown=function(e){f.add(e.point),console.log("dw")},view.onMouseDrag=function(e){f.add(e.point),h+=1,console.log("drag")};var w=[];view.onMouseUp=function(){f.closePath(),console.log(p.segments),w=u(p.segments,f),_=!0};var b=0,_=!1,y=!0,S=0,I=!1,x=0;function k(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}function C(){var e=document.getElementById("test");a()(e,{onclone:function(e){e.getElementById("test").classList.add("changBG");var t=paper.project.exportSVG();e.getElementById("test").innerHTML="",e.getElementById("test").appendChild(t)}}).then(function(e){localStorage.setItem("canvasSrc",e.toDataURL()),window.location.href=window.location.href.split("#")[0]+"#/result"})}function E(e){switch(!0){case e<284:localStorage.setItem("one","9"),localStorage.setItem("lv","等级：Lv9民间画圣"),localStorage.setItem("two",parseInt((284-e+40)/284*10)),localStorage.setItem("wa","心中有规矩，便能徒手画月饼。");break;case e<750&&e>=284:localStorage.setItem("one","8"),localStorage.setItem("lv","等级：Lv8绘画宗师"),localStorage.setItem("two",parseInt((750-e)/466*10)),localStorage.setItem("wa","挥一挥手指，画个大饼来充饥。");break;case e<1300&&e>=750:localStorage.setItem("one","7"),localStorage.setItem("lv","等级：Lv7天才画家"),localStorage.setItem("two",parseInt((1300-e)/550*10)),localStorage.setItem("wa","画不圆的月饼，在你心里骚动。");break;case e<2600&&e>=1300:localStorage.setItem("one","6"),localStorage.setItem("lv","等级：Lv6灵魂画手"),localStorage.setItem("two",parseInt((2600-e)/1300*10)),localStorage.setItem("wa","画月饼？不存在的，这明明是个哈密瓜。");break;case e<3300&&e>=2600:localStorage.setItem("one","5"),localStorage.setItem("lv","等级：Lv5绘画达人"),localStorage.setItem("two",parseInt((3300-e)/700*10)),localStorage.setItem("wa","你画的月饼，是被玉兔偷吃了吗？");break;case e<4e3&&e>=3300:localStorage.setItem("one","4"),localStorage.setItem("lv","等级：Lv4画室学徒"),localStorage.setItem("two",parseInt((4e3-e)/700*10)),localStorage.setItem("wa","你画的月饼是艺术，别人很难懂！");break;case e<4500&&e>=4e3:localStorage.setItem("one","3"),localStorage.setItem("lv","等级：Lv3绘画能手"),localStorage.setItem("two",parseInt((4500-e)/500*10)),localStorage.setItem("wa","心中有月饼，画什么都能吃！");break;case e<5e3&&e>=4500:localStorage.setItem("one","2"),localStorage.setItem("lv","等级：Lv2新手临摹"),localStorage.setItem("two",parseInt((5e3-e)/500*10)),localStorage.setItem("wa","月饼，在哪？完全没看见！");break;case e<5800&&e>=5e3:localStorage.setItem("one","1"),localStorage.setItem("lv","等级：Lv1手残菜鸟"),localStorage.setItem("two",parseInt((5800-e)/800*10)),localStorage.setItem("wa","月饼被吃货藏起来了，你猜是谁？");break;case e<64e3&&e>=5800:localStorage.setItem("one","0"),localStorage.setItem("lv","等级：Lv1手残菜鸟"),localStorage.setItem("two",k(0,9)),localStorage.setItem("wa","这个月饼需要用显微镜才能看到。");break}e<284&&parseInt((284-e+40)/284*10)>=6&&(localStorage.setItem("lv","等级：Lv10神来之手"),localStorage.setItem("wa","磨具做出的月饼，还没你画的圆！")),console.log(parseInt((284-e+40)/284*10)+"神来只收的判断"),console.log(h),localStorage.setItem("ms",["天马行空派","典雅清新派","气势豪放派","婉约含蓄派","抽象概念派","新印象画派","立体主义派","鬼畜画风派","简约唯美派","浪漫主义派","田园情怀派","写实学院派","民间意念派","奔放野兽派","抽风大师派","表现主义派","极简画风派","自然主义派","古典高雅派","超现实画派"][k(0,12)]),console.log(e)}view.onFrame=function(e){if(!_&&y&&v(),_&&(h<=40&&(d.opacity=0),c(g),c(m),S!=w.length?d.rotate(2.35,view.center):(console.log("关闭"),d.opacity=0,_=!1,I=!0),S<=w.length/1.5&&r(d,.0083),S<w.length&&c(w[S],.2),b+=e.delta,b>=.033&&(console.log(w.length),S<w.length&&(w[S].strokeColor="#F59A55",S+=1),b=0)),I){var t="bg"+k(1,4),n=new Raster(t);n.position=view.center,n.size=new Size(2*i(.74),2*i(.74)),f.strokeColor="red";var o=new Group([f,n]);o.setClipped(!0),o.fillColor="red",I=!1,y=!1,E(x),C()}}}});
//# sourceMappingURL=app.b1647f0f.js.map