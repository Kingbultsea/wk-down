(function(e){function t(t){for(var n,i,r=t[0],c=t[1],_=t[2],u=0,d=[];u<r.length;u++)i=r[u],s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,_||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={app:0},o=[];function i(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8b907bfe"}[e]+".js"}function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(e){var t=[],a=s[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=n);var o,c=document.getElementsByTagName("head")[0],_=document.createElement("script");_.charset="utf-8",_.timeout=120,r.nc&&_.setAttribute("nonce",r.nc),_.src=i(e),o=function(t){_.onerror=_.onload=null,clearTimeout(u);var a=s[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+n+": "+o+")");i.type=n,i.request=o,a[1](i)}s[e]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:_})},12e4);_.onerror=_.onload=o,c.appendChild(_)}return Promise.all(t)},r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://webres.psy-1.com/sgy/dist/",r.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],_=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=_;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1811:function(e,t,a){},"1a14":function(e,t,a){"use strict";var n=a("a2c4"),s=a.n(n);s.a},2821:function(e,t,a){},"36c1":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),e._m(0),e.end?a("div",{staticClass:"end"},[a("div",{staticClass:"outer"},[a("img",{staticClass:"end-bg",attrs:{src:"https://webres.psy-1.com/sgy/dist/static/img/tinysleep_sheep_window_bg.fbc1ed4.png"}}),a("p",{staticClass:"one-p"},[e._v("试听结束")]),a("p",{staticClass:"two-p"},[e._v("想听完整版？")]),e._m(1),a("div",{staticClass:"close",on:{click:e.close}})])]):e._e(),a("transition",{attrs:{name:"fade"}},[e.tips_toggle?a("div",{staticClass:"tips"},[e._v("点一次就好，不要太贪心哦~")]):e._e()])],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom"},[n("div",{staticClass:"bottom-img"},[n("img",{staticClass:"bottom-hehe",attrs:{src:a("b78c")}})]),n("p",{staticClass:"bottom-center"},[e._v("小睡眠，不负休憩好时光")]),n("a",{staticClass:"dl",attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[n("p",{staticClass:"bottom-dl"},[e._v("下载")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"dl",attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[a("p",{staticClass:"three-p"},[e._v("去下载小睡眠")])])}],i={data:function(){return{end:!1,tips_toggle:!1}},methods:{close:function(){this.end=!this.end,this.$children[0].close()}}},r=i,c=(a("5c0b"),a("5c64"),a("2877")),_=Object(c["a"])(r,s,o,!1,null,null,null);_.options.__file="App.vue";var u=_.exports,l=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("img",{staticClass:"top-img",attrs:{src:e.bg_img}}),a("img",{staticClass:"title1",attrs:{src:e.title_img}}),a("music",{staticClass:"music",attrs:{offPath:e.offPath,onPath:e.onPath}}),a("div",{staticClass:"music-count"},[e._v(e._s(e.two))]),a("span"),a("div",{staticClass:"danmu"},e._l(e.danmu_list,function(t){return a("div",{staticClass:" danmu-list moveLeftAnimatin",style:{top:t.top},attrs:{mark:"1"},on:{click:e.fuck}},[a("img",{staticClass:"danmu-list-touxiang",attrs:{src:t.img}}),a("p",{staticClass:"danmu-list-sentance"},[e._v(e._s(t.info))])])})),a("div",{staticClass:"desc"},[a("img",{staticClass:"dianzan-img move-top",attrs:{src:"https://res.psy-1.com/music/voice/tinysleep_sheep_like2-7PqzI3Mc7kjzzeCKNSP4.png"},on:{click:e.zanClick}}),a("div",{staticClass:"dianzan move-top"},[e._v("已有"),a("span",{staticClass:"inner"},[e._v(e._s(e.dianzan))]),e._v("人点赞")]),a("div",{staticClass:"top"},[a("div",{staticClass:"swa",domProps:{innerHTML:e._s(e.music_intro)}}),a("div",{staticClass:"xwa"}),e._m(0)])])],1)},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"xx"},[n("img",{staticClass:"xx-img",attrs:{src:"https://res.psy-1.com/music/voice/tinysleep_sheep_bottom_line2-buAPsmFJlLt7NdM4Nd34-MmpN6znmAth1TfIlPQk3.png"}}),n("img",{staticClass:"xx-hehe",attrs:{src:a("b78c")}})])}],p=a("9cae"),h=p["a"],g=(a("ea71"),a("b5d4"),Object(c["a"])(h,d,m,!1,null,"2c64fb9e",null));g.options.__file="Home.vue";var f=g.exports;n["a"].use(l["a"]);var v=new l["a"]({routes:[{path:"/",name:"home",component:f},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),y=a("2f62"),w=a("d4ec"),b=a("bee2"),E=function(){function e(){Object(w["a"])(this,e)}return Object(b["a"])(e,null,[{key:"is_cosleep",value:function(){return this.is_cosleep_android()||this.is_cosleep_ios()}},{key:"is_cosleep_ios",value:function(){var e=!1;try{e="undefined"!=typeof window.webkit.messageHandlers.XinchaoApp}catch(t){}return e}},{key:"is_cosleep_android",value:function(){return"undefined"!=typeof window.XinchaoApp}},{key:"get_api_root",value:function(){switch("production"){case"production":return"https://api.psy-1.com";case"test":return"https://api.debug.psy-1.com"}}},{key:"get_web_root",value:function(){switch("production"){case"production":return"https://www.heartide.com";case"test":return"https://web.debug.psy-1.com"}}},{key:"baidu_statics",value:function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?c6a0be7a2e98e04ca2cf523568e2cbc4";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}]),e}();n["a"].use(y["a"]);var P=new y["a"].Store({state:{},getters:{isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},isApp:function(){return E.is_cosleep()}},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:v,store:P,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5c64":function(e,t,a){"use strict";var n=a("c2ae"),s=a.n(n);s.a},"5e27":function(e,t,a){},"8f19":function(e,t,a){"use strict";var n=a("2821"),s=a.n(n);s.a},"9cae":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("386d"),core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("4917"),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("3b2b"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("cadf"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("551c"),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("097d"),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_7__),better_scroll__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("6f44"),_components_music_vue__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("abde"),_components_shareandgetname_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("fce9");function randomNum(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}function getQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(t);return null!=a?unescape(a[2]):null}__webpack_require__("ea57"),__webpack_exports__["a"]={name:"home",data:function(){return{offPath:"https://res.psy-1.com/music/voice/tinysleep_sheep_stop2-jwlPPhdRF58oErMNroV2.png",onPath:"https://res.psy-1.com/music/voice/tinysleep_sheep_play2-BHgSoY5B6WFClAfSEh2i.png",dianzan:1e3,danmu_list:[],max:30,tips_toggle:!1,one:1,two:"",music_intro:"",func_id:getQueryString("func_id"),func_type:getQueryString("func_type"),sharecode:getQueryString("sharecode"),url:"https://api.debug.psy-1.com",get_danmu_data:"",end:!1,share_title:"",share_desc:"",share_img:"",share_bg:"",bg_img:"",title_img:""}},components:{music:_components_music_vue__WEBPACK_IMPORTED_MODULE_9__["a"]},methods:{changeBG:function(e){document.querySelector("#app").style.backgroundColor=e},changeTitle:function(){},changeCenter:function(){},apiInit:function(e){},apiDianZan:function apiDianZan(url){var _this=this;$.get(url+"/web/v1/smallslleep/music/voteData",{func_id:this.func_id,func_type:this.func_type,sharecode:this.sharecode},function(data){var mark=0;localStorage.getItem("mark")&&(mark=parseInt(localStorage.getItem("mark"))),_this.dianzan=data.data.share_reg_count+mark,_this.music_intro=data.data.music_data.music_intro;var z=data.data.music_data.music_intro.replace(/\n/g,"</p><p>"),result="<p>"+z;_this.music_intro=result,console.log(data.data.music_data),_this.share_desc=data.data.music_data.share_desc,_this.share_title=data.data.music_data.share_title,document.title=data.data.music_data.share_title,_this.share_img=data.data.music_data.share_imgurl,_this.bg_img=data.data.music_data.page_bg_img,document.querySelector("body").style.backgroundColor=_this.bg_img,_this.title_img=data.data.music_data.page_title_img,_this.changeBG(data.data.music_data.page_bg_color),_this.musicPath=data.data.music_data.musicurl_try,document.querySelector("#myaudio").setAttribute("src",data.data.music_data.musicurl_try);var danmudata=eval("("+data.data.music_data.share_danmu+")");console.log(danmudata),_this.get_danmu_data=danmudata;var share=new _components_shareandgetname_js__WEBPACK_IMPORTED_MODULE_10__["a"]({pic:_this.share_img,url:window.location.href.split("#")[0],title:_this.share_title,desc:_this.share_desc});share.rawWeiXinShare("https://api.debug.psy-1.com"),_this.$store.getters.isApp&&share.appInit()})},apiDianZanClick:function(e){var t=this;$.post(e+"/web/v1/smallslleep/music/shareActiveVote",{func_id:this.func_id,func_type:this.func_type,sharecode:this.sharecode},function(e){console.log("jq都不行？"),1==e.status?(console.log("zaaaa"),t.dianzan+=1):(t.$parent.tips_toggle=!0,setTimeout(function(){t.$parent.tips_toggle=!1},1e3))})},close:function(){this.end=!this.end,this.$children[0].musicPlay(),this.someThingShow()},shuaXinZan:function(e){$.post(e+"/web/v1/smallslleep/music/shareActiveView",{func_id:this.func_id,func_type:this.func_type,sharecode:this.sharecode},function(e){console.log("jq都不行？asdsasdas")})},zanClick:function(){this.apiDianZanClick(this.url)},fuck:function(e){if(e.preventDefault(),e.target.getAttribute("mark")){if(console.log(e.target),1==e.target.getAttribute("mark")){var t=getComputedStyle(e.target).transform;e.target.style.transform=t,e.target.setAttribute("mark","0"),e.target.classList.remove("moveLeftAnimatin"),setTimeout(function(){e.target.classList.add("moveLeftAnimatin"),e.target.setAttribute("mark","1")},2e3)}}else if(console.log(e.target.parentNode),1==e.target.parentNode.getAttribute("mark")){var a=getComputedStyle(e.target.parentNode).transform;console.log(a),e.target.parentNode.style.transform=a,e.target.parentNode.setAttribute("mark","0"),e.target.parentNode.classList.remove("moveLeftAnimatin"),setTimeout(function(){e.target.parentNode.classList.add("moveLeftAnimatin"),e.target.parentNode.setAttribute("mark","1")},2e3)}},danmuXiTong:function(){var e=this.get_danmu_data[randomNum(0,9)],t={info:"九嶷山",img:"",top:"10%"};t.top=randomNum(0,100)+"%",t.info=e.info,t.img=e.img,this.danmu_list.push(t)},musicCount:function(){var e=Math.round(document.querySelector("#myaudio").duration)-Math.round(document.querySelector("#myaudio").currentTime);this.two=this.formatSeconds(e)},formatSeconds:function(e){var t=parseInt(e),a=0,n=0;t>60&&(a=parseInt(t/60),t=parseInt(t%60),a>60&&(n=parseInt(a/60),a=parseInt(a%60)));var s="";parseInt(t)<10&&(s="0");var o=s+parseInt(t)+" ",i="0";return o=i+parseInt(a)+" : "+o,n>0&&(o=parseInt(n)+"小时"+o),o},someThingShow:function(){var e=this,t=new Promise(function(e,t){function a(){document.querySelector("#myaudio").ended&&(e(),clearInterval(n))}var n=setInterval(a,1e3)});t.then(function(){e.$parent.end=!0})}},created:function(){this.apiDianZan("https://api.debug.psy-1.com")},mounted:function(){var e,t=this;localStorage.removeItem("mark");var a=this;function n(){a.danmuXiTong.apply(a),a.max-=1,a.max<1&&(clearInterval(e),setTimeout(function(){a.danmu_list=[],e=setInterval(n,2e3),a.max=30},7e3))}e=setInterval(n,4e3),this.someThingShow(),setInterval(function(){t.musicCount()},1e3);var s=document.querySelector("#app");new better_scroll__WEBPACK_IMPORTED_MODULE_8__["a"](s,{click:!0,bounce:{top:!1,bottom:!1,left:!1,right:!1}});console.log(this.func_id)}}},a2c4:function(e,t,a){},abde:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{ref:"audio",staticClass:"music",attrs:{src:e.tgImg},on:{click:e.musicPlay}}),a("audio",{ref:"zz",attrs:{src:"",id:"myaudio",controls:"",hidden:""}},[a("source",{attrs:{src:e.musicPath,type:"audio/mpeg"}})])])},s=[],o={name:"music",props:["onPath","offPath","musicPath"],data:function(){return{toggle:!1,musicdom:document.getElementById("myaudio")}},computed:{tgImg:function(){var e=this.toggle;return e=this.toggle?this.$props.offPath:this.$props.onPath,e}},methods:{musicPlay:function(){this.dontBorderMeFUCKYOU();var e=document.getElementById("myaudio");e.paused?(document.querySelector(".music").classList.add("rotate"),console.log(document.getElementById("myaudio")),document.getElementById("myaudio").play(),console.log("fgh"),this.toggle=!0):(e.pause(),document.querySelector(".music").classList.remove("rotate"),this.toggle=!1)},rawPlay:function(){var e=document.querySelector("#myaudio");e.paused&&(e.play(),this.toggle=!0)},initMusic:function(){var e=this;this.$store.getters.isWeiXin?document.addEventListener("WeixinJSBridgeReady",function(){console.log("浏览器非苹果播放"),e.rawPlay()},!1):this.$store.getters.isApp&&(console.log("??"),setTimeout(function(){e.rawPlay()},500))},dontBorderMeFUCKYOU:function(){localStorage.setItem("fuckyou","1")}},mounted:function(){this.initMusic();document.getElementById("myaudio");localStorage.removeItem("fuckyou")}},i=o,r=(a("1a14"),a("8f19"),a("2877")),c=Object(r["a"])(i,n,s,!1,null,"e4eb7f2c",null);c.options.__file="music.vue";t["a"]=c.exports},b5d4:function(e,t,a){"use strict";var n=a("36c1"),s=a.n(n);s.a},b78c:function(e,t,a){e.exports=a.p+"img/hehe.8efa2f84.png"},c2ae:function(e,t,a){},ea57:function(e,t){function a(){var e=document.documentElement.clientWidth,t=document.querySelector("html");t.style.fontSize=e/10+"px"}a(),window.addEventListener("resize",a)},ea71:function(e,t,a){"use strict";var n=a("1811"),s=a.n(n);s.a},fce9:function(e,t,a){"use strict";a.d(t,"a",function(){return o});a("a481"),a("4917"),a("28a5"),a("7f7f");var n=a("d4ec"),s=a("bee2"),o=function(){function e(t){var a=t.url,s=t.title,o=t.desc,i=t.pic;Object(n["a"])(this,e),console.log("??"),this.url=a,this.title=s,this.desc=o,this.pic=i}return Object(s["a"])(e,[{key:"appShare",value:function(){var e={type1:{title:this.title,desc:this.desc,link:this.url,imgUrl:this.pic,shareType:1},type2:{title:this.title,link:this.url,imgUrl:this.pic,shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=JSON.stringify(e),document.getElementById("share2").value=JSON.stringify(e.type1),document.getElementById("share3").value=JSON.stringify(e.type2)}},{key:"callAppRouter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n={Method:e,Data:t},s="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[s]=function(e,t){a&&a(e,t),delete Xinchao.Web[s]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:s}):XinchaoApp.callRouter(n,s)}},{key:"appGetName",value:function(){var e=this;this.callAppRouter("isLogin",{},function(t,a){"已登录"===JSON.parse(a).msg&&e.callAppRouter("Login",{},function(e,t){try{var a=JSON.parse(t);localStorage.setItem("name",a.data.name),console.log(a.data.name)}catch(n){localStorage.setItem("name",t.data.name),console.log(t.data.name)}})})}},{key:"weiXinShare",value:function(){var e=this,t={title:e.title,desc:e.desc,link:e.url,imgUrl:e.pic};wx.ready(function(e){wx.onMenuShareAppMessage(t),wx.onMenuShareQQ(t),wx.onMenuShareQZone(t),wx.onMenuShareTimeline(t),wx.error(function(e){})})}},{key:"weiXinSDK",value:function(e,t){var a=new XMLHttpRequest,n=this;a.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){console.log("sdk ok");var s=JSON.parse(a.response);console.log(s.data.wechat_config),s.data.wechat_config.debug=!1,t&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),t&&!localStorage.getItem("name")||(wx.config(s.data.wechat_config),n.weiXinShare(),n.weiXinGetName(e))}},a.send()}},{key:"weatherCode",value:function(){var e=/code=(.+?)&/,t=window.location.href.match(e);return sessionStorage.setItem("code",t),t||!1}},{key:"weiXinGetName",value:function(e){if(!localStorage.getItem("name")){console.log(t+"asd你想要的"+sessionStorage.getItem("code"));var t=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(e+"/web/v1/wechat/user",{code:t},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}},{key:"weiXinInit",value:function(e){var t=this.weatherCode();t?this.weiXinSDK(e,!1):this.weiXinSDK(e,!0)}},{key:"appInit",value:function(){this.appShare(),this.appGetName()}},{key:"rawWeiXinShare",value:function(e){var t=new XMLHttpRequest,a=this;t.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){console.log("sdk ok");var e=JSON.parse(t.response);console.log(e.data.wechat_config),e.data.wechat_config.debug=!1,wx.config(e.data.wechat_config),a.weiXinShare()}},t.send()}},{key:"rawGetName",value:function(){if(!localStorage.getItem("name")){console.log(e+"asd你想要的"+sessionStorage.getItem("code"));var e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(url+"/web/v1/wechat/user",{code:e},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}}]),e}()}});
//# sourceMappingURL=app.94063dec.js.map