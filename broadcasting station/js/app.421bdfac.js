(function(e){function t(t){for(var n,r,i=t[0],c=t[1],_=t[2],u=0,d=[];u<i.length;u++)r=i[u],o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,_||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},o={app:0},s=[];function r(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b43bfa94"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a=o[e];if(0!==a)if(a)t.push(a[2]);else{var n=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=n);var s,c=document.getElementsByTagName("head")[0],_=document.createElement("script");_.charset="utf-8",_.timeout=120,i.nc&&_.setAttribute("nonce",i.nc),_.src=r(e),s=function(t){_.onerror=_.onload=null,clearTimeout(u);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+n+": "+s+")");r.type=n,r.request=s,a[1](r)}o[e]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:_})},12e4);_.onerror=_.onload=s,c.appendChild(_)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://webres.psy-1.com/sgy/dist/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],_=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=_;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"018a":function(e,t,a){},"1e30":function(e,t){e.exports="data:image/png;base64,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"},"33f9":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("9ce1"),core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("5616"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("aba3"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("2b1f"),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("bc72"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("cf54"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__),_Users_xinchaomac2_Desktop_10_26_dss_node_modules_babel_runtime_7_0_0_beta_47_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("78fa"),_Users_xinchaomac2_Desktop_10_26_dss_node_modules_babel_runtime_7_0_0_beta_47_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("cdad"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("3a0f"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("a3a3"),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("4d0b"),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_10__),_components_HelloWorld_vue__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("fdab"),better_scroll__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("6f44"),_components_music_vue__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("abde"),Share=function(){function e(t){var a=t.url,n=t.title,o=t.desc,s=t.pic,r=t.dataUrl,i=void 0===r?null:r;Object(_Users_xinchaomac2_Desktop_10_26_dss_node_modules_babel_runtime_7_0_0_beta_47_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["a"])(this,e),console.log("??"),this.url=a,this.title=n,this.desc=o,this.pic=s,this.dataUrl=i}return Object(_Users_xinchaomac2_Desktop_10_26_dss_node_modules_babel_runtime_7_0_0_beta_47_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_7__["a"])(e,[{key:"appShare",value:function(){var e={type1:{title:this.title,desc:this.desc,link:this.url,imgUrl:this.pic,shareType:1},type2:{title:this.title,link:this.url,imgUrl:this.pic,shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=JSON.stringify(e),document.getElementById("share2").value=JSON.stringify(e.type1),document.getElementById("share3").value=JSON.stringify(e.type2)}},{key:"callAppRouter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n={Method:e,Data:t},o="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[o]=function(e,t){a&&a(e,t),delete Xinchao.Web[o]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:o}):XinchaoApp.callRouter(n,o)}},{key:"appGetName",value:function(){var e=this;this.callAppRouter("isLogin",{},function(t,a){"已登录"===JSON.parse(a).msg&&e.callAppRouter("Login",{},function(e,t){try{var a=JSON.parse(t);localStorage.setItem("name",a.data.name),console.log(a.data.name)}catch(e){localStorage.setItem("name",t.data.name),console.log(t.data.name)}})})}},{key:"weiXinShare",value:function(){var e=this,t={title:e.title,desc:e.desc,link:e.url,img_url:e.pic+"?imageView&thumbnail=400x0&quality=75&tostatic=0"};this.dataUrl,wx.ready(function(e){wx.onMenuShareAppMessage(t),wx.onMenuShareQQ(t),wx.onMenuShareQZone(t),wx.onMenuShareTimeline(t),wx.error(function(e){})})}},{key:"weiXinSDK",value:function(e,t){var a=new XMLHttpRequest,n=this;a.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){console.log("sdk ok");var o=JSON.parse(a.response);console.log(o.data.wechat_config),o.data.wechat_config.debug=!1,t&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),t&&!localStorage.getItem("name")||(wx.config(o.data.wechat_config),n.weiXinShare(),n.weiXinGetName(e))}},a.send()}},{key:"weatherCode",value:function(){var e=/code=(.+?)&/,t=window.location.href.match(e);return sessionStorage.setItem("code",t),t||!1}},{key:"weiXinGetName",value:function(e){if(!localStorage.getItem("name")){console.log(t+"asd你想要的"+sessionStorage.getItem("code"));var t=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(e+"/web/v1/wechat/user",{code:t},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}},{key:"weiXinInit",value:function(e){var t=this.weatherCode();t?this.weiXinSDK(e,!1):this.weiXinSDK(e,!0)}},{key:"appInit",value:function(){this.appShare(),this.appGetName()}},{key:"rawWeiXinShare",value:function(e){var t=new XMLHttpRequest,a=this;t.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){console.log("sdk ok");var e=JSON.parse(t.response);console.log(e.data.wechat_config),e.data.wechat_config.debug=!1,wx.config(e.data.wechat_config),a.weiXinShare()}},t.send()}},{key:"rawGetName",value:function(){if(!localStorage.getItem("name")){console.log(e+"asd你想要的"+sessionStorage.getItem("code"));var e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(url+"/web/v1/wechat/user",{code:e},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}}]),e}();function getQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),a=window.location.search.substr(1).match(t);return null!=a?unescape(a[2]):null}__webpack_exports__["a"]={name:"home",data:function(){return{offPath:__webpack_require__("92c0"),onPath:__webpack_require__("b5a2"),musicPath:__webpack_require__("acad"),raw_content:"奥术大师大/n爱神的箭埃里克森的骄傲是考虑到大家阿里看见啊卡兰蒂斯/n就爱看is大家啊流口水的骄傲了圣诞节爱神的箭安联大厦/n",content:"asdasa",bg:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fwqjcett54j30go0i40th.jpg",music_count:"00 : 00",jdt:"0",end_time:"",gs:"",zb:"",number:getQueryString("broadcast_id").replace(/#/,"").replace(/\//,""),icon:[1,1,1],title_w:"",period_id:"",next_id:"",get_url:"https://api.debug.psy-1.com"}},components:{HelloWorld:_components_HelloWorld_vue__WEBPACK_IMPORTED_MODULE_11__["a"],Music:_components_music_vue__WEBPACK_IMPORTED_MODULE_13__["a"]},methods:{getDataFromApi:function getDataFromApi(id){var _this2=this,change_action=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,url="https://api.debug.psy-1.com";url="https://api.psy-1.com",12345===id&&(id=this.period_id),$.get(url+"/web/v1/cosleep/broadcast/detail",{broadcast_id:id,change_action:change_action},function(data){if(1==data.status){_this2.title_w=data.data.broadcast_title,document.title=data.data.broadcast_title,_this2.bg=data.data.broadcast_cover,_this2.init(data.data.broadcast_audio_link),_this2.setFont(data.data.broadcast_content_text),_this2.icon=eval("("+data.data.broadcast_icons+")"),_this2.period_id=data.data.broadcast_period,_this2.number=data.data.broadcast_period,_this2.zb=data.data.broadcast_author,_this2.gs=data.data.broadcast_speaker;var share=new Share({pic:_this2.bg,url:window.location.href.split("#")[0],title:_this2.title_w,desc:data.data.broadcast_title_en});share.rawWeiXinShare(url),_this2.$store.getters.isApp&&share.appInit()}else _this2.$parent.aa2()})},setFont:function(e){this.content="<p>"+e.replace(/\n/g,"</p><p>"),console.log(this.content)},musicDetail:function(){var e=this;setInterval(function(){e.jdt=parseInt(document.querySelector("#myaudio").currentTime/document.querySelector("#myaudio").duration*100),e.end_time=e.musicCount(document.querySelector("#myaudio").duration),e.music_count=e.musicCount(document.querySelector("#myaudio").currentTime),console.log(e.jdt),"100"==e.jdt&&(console.log("wanbi"),e.$parent.show=!0)},500)},musicCount:function(e){var t=parseInt(e),a=0,n=0;t>60&&(a=parseInt(t/60),t=parseInt(t%60),a>60&&(n=parseInt(a/60),a=parseInt(a%60)));var o="";parseInt(t)<10&&(o="0");var s=o+parseInt(t)+" ",r="0";return s=r+parseInt(a)+" : "+s,n>0&&(s=parseInt(n)+"小时"+s),s},init:function(e){var t=this;this.musicPath=e,document.querySelector("#myaudio").currentTime=0,this.$nextTick(function(){setTimeout(function(){t.end_time=t.musicCount(document.querySelector("#myaudio").duration)},600),t.$children[0].rawPlay()}),this.jdt=0}},mounted:function(){console.log("??");var e=document.querySelector("#app");new better_scroll__WEBPACK_IMPORTED_MODULE_12__["a"](e,{click:!0,bounce:{top:!1,bottom:!1,left:!1,right:!1}});this.musicDetail(),this.getDataFromApi(this.number)}}},"42c1":function(e,t,a){},"433f":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEX///8AAAD///////////////////////////////////////////////////////9PNSPeAAAAEHRSTlNmAF8UA0QKOC5NQB0ZUEhaTqdUwQAAAZFJREFUOMuFlb1OAkEUhU8IGOTPTCAsKDEkJFpYyRNAbUPBC6ytMaG1g1Ir6SwxsbBE4wOIT7CVrVbWvoCJ63p3Zg+7m3vK/fLNTHbm3gvjcnbz0S/8PL4YF4fb15Dc+Wnc+4RNY+Ow0Fsksrth3J6AUvIJPwOckyTuIJWFw61VGlfGFl8iI+8xbgVZuD4WvI/M3AueZ+PyPz5ATp4ifJ6HjyI8ycOlP9xDbjYh7ubjZYhfZaWLPuJ8vSFKLcRyzztmaPcce3LvBm35VjXNWJ/aDX3El1U4DXWRzSy+NtiTDUJdZM+eDSOQTjKKWIN0klHFHKSTjDJWIJ1kVBCAdJJRxzdIf0jK2EMfpBuR5QMA0kXOTmX7cdDimBrTpN3oaOGxfTOkowUkewPS61iRPLMXJ79lTjJAehlrkgHSqxixzHoRXZZZX6LDMusL+xQbIpPuu4ccyaJ7orgyqEWy6IeuDLry7Qo2x7LiUilBpYCV8leah9J6lMaltD2laSotV2nYSrtXhoUyapRBpY05ZUj+Ap8GZcaWaNQOAAAAAElFTkSuQmCC"},"4c06":function(e,t,a){"use strict";var n=a("abb7"),o=a.n(n);o.a},"712c":function(e,t,a){},7469:function(e,t,a){e.exports=a.p+"img/bg_radio@3x.01cdaa81.png"},"80ed":function(e,t,a){"use strict";var n=a("712c"),o=a.n(n);o.a},8606:function(e,t,a){"use strict";var n=a("018a"),o=a.n(n);o.a},"886e":function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return s});a("ec80"),a("aa0f"),a("25d7"),a("aba3"),a("20a2");var n=a("78fa"),o=a("cdad"),s=function(){function e(){Object(n["a"])(this,e)}return Object(o["a"])(e,[{key:"promiseForBoolean",value:function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={};Object.assign(n,a);var o=function(t){a.boolean===!n.boolean&&(clearInterval(e),t())};return t=new Promise(function(t,a){e=setInterval(o.bind(null,t),1e3)}),t}},{key:"getAPIData",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=new(new XMLHttpRequest),o="";n.open("GET",e),n.onreadystatechange=function(){4===this.readyState&&200===this.status&&t&&t()},n.setRequestHeader("Content-Type","application/json");var s=!0,r=!1,i=void 0;try{for(var c,_=a[Symbol.iterator]();!(s=(c=_.next()).done);s=!0){var u=c.value,l=u.val,d=u.key;o+=d+"="+l+"&"}}catch(e){r=!0,i=e}finally{try{s||null==_.return||_.return()}finally{if(r)throw i}}o.replace(/&$/,""),n.send()}},{key:"randomNum",value:function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}},{key:"musicCount",value:function(e){var t=parseInt(e),a=0,n=0;t>60&&(a=parseInt(t/60),t=parseInt(t%60),a>60&&(n=parseInt(a/60),a=parseInt(a%60)));var o="";parseInt(t)<10&&(o="0");var s=o+parseInt(t)+" ",r="0";return s=r+parseInt(a)+" : "+s,n>0&&(s=parseInt(n)+"小时"+s),s}}]),e}()},"8e97":function(e,t,a){"use strict";var n=a("f33a"),o=a.n(n);o.a},"8f19":function(e,t,a){"use strict";var n=a("d7fb"),o=a.n(n);o.a},"92c0":function(e,t,a){e.exports=a.p+"img/btn_play@3x.68f47915.png"},abb7:function(e,t,a){},abde:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{ref:"audio",staticClass:"music",attrs:{src:e.tgImg},on:{click:e.musicPlay}}),a("audio",{ref:"zz",attrs:{src:e.musicPath,id:"myaudio",controls:"",hidden:"",loop:e.loop}},[a("source",{attrs:{src:e.musicPath,type:"audio/mpeg"}})])])},o=[],s=(a("20a2"),a("886e"),{name:"music",props:["onPath","offPath","musicPath"],data:function(){return{toggle:!0,loop:!1}},computed:{tgImg:function(){var e=this.toggle;return e=this.toggle?this.$props.offPath:this.$props.onPath,e}},methods:{musicPlay:function(){this.dontBorderMeFUCKYOU(),console.log("??adsa");try{document.getElementById("myaudio").paused}catch(e){1==this.toggle?(document.getElementById("myaudio").play(),this.toggle=!1):(document.getElementById("myaudio").pause(),this.toggle=!0)}var e=document.getElementById("myaudio");console.log(e),e.paused?(console.log(e),e.play(),document.querySelector("#myaudio").play(),e.paused||(this.toggle=!1)):(e.pause(),e.paused&&(this.toggle=!0))},rawPlay:function(){var e=document.querySelector("#myaudio");e.paused&&(e.play(),e.paused||(this.toggle=!1))},rawPause:function(){if(!music_dom.paused){var e=document.querySelector("#myaudio");e.pause(),e.paused&&(this.toggle=!0)}},initMusic:function(){var e=this;this.$store.getters.isWeiXin?document.addEventListener("WeixinJSBridgeReady",function(){console.log("微信兄弟！"),e.musicCanPlaythrough(),e.rawPlay(),console.log("??dasdasdasdas")},!1):this.$store.getters.isApp&&(console.log("asdasdsad"),this.musicCanPlaythrough())},musicCanPlaythrough:function(){console.log("asdasdsssb");var e=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={};Object.assign(n,a);var o=function(t){a.boolean===!n.boolean&&(clearInterval(e),t())};return t=new Promise(function(t,a){e=setInterval(o.bind(null,t),1e3)}),t};e(get).then(this.rawPlay)},dontBorderMeFUCKYOU:function(){localStorage.setItem("fuckyou","1")}},mounted:function(){this.initMusic(),localStorage.removeItem("fuckyou")}}),r=s,i=(a("80ed"),a("8f19"),a("048f")),c=Object(i["a"])(r,n,o,!1,null,"28b26580",null);c.options.__file="music.vue";t["a"]=c.exports},acad:function(e,t,a){e.exports=a.p+"media/sd.71298f43.mp3"},b003:function(e,t){e.exports="data:image/png;base64,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"},b5a2:function(e,t,a){e.exports=a.p+"img/btn_stop@3x.a8ca4fdd.png"},b5d4:function(e,t,a){"use strict";var n=a("42c1"),o=a.n(n);o.a},b78c:function(e,t,a){e.exports=a.p+"img/hehe.8efa2f84.png"},bf6c:function(e,t,a){e.exports=a.p+"img/picture@3x.c9922431.png"},c88d:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqMAAAB4CAMAAADxJwufAAAAZlBMVEUAAABAQEA2NjY6OjpLS0s5OTk/Pz87Ozs3NzdLS0tJSUk5OTlISEhNTU1MTExKSkpcXFxkZGRSUlJtbW01NTVISEg+Pj47Ozs4ODhCQkI3NzdGRkZPT09QUFBFRUVAQEA5OTlYWFh6l8QfAAAADnRSTlMAC+/g68S1dBLVpWNfUwxj6NEAAAMuSURBVHja7NbBboJAFEbhCwjY0khrRRltgL7/S3ZmYKqJC1bGP/F86wm5i5N7sVnWVEV+AFTkRdVkdqO+7fMMSMhrS7bltc4e0FFul0SLVGg/TdMJ0FHMkZZLon3o8wgoKc2rU6GTD3QcRweo8D3WZlk+JxoLdW4ILsDzDYHbZNYcgpDo6EKdHaDDl/phVVyjc6Ix0BZQ0XnvVsyXPiZKoJDTvVm+rNGQaBvtAA1tsLG4Rv2l94kSKOT4Ju1/jXYdiUJPavQ4uguJQlJstJ/iqSdRSIqNnmgUupZG3cCphyjf6Dk2yhqFKBqFutQov6NQRaNQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQR6NQd9/o589uxf73oQ9Wx2DO15rzvtHv/epnvh76YHUM5nytOWn0j507SEEYBoAoeoOeoN7/mkpAggQpaIVffLPIosZhKG+rdtZ3MmpnfSejdtZ3MmpnfSejdtZ3Mmpnfecbo/Mcvcs5LxxfvkTn42Grs/eKfv/aGWW018koo/VORhmtdzLKaL2TUUbrnYwyWu9klNF6J6OM1jsZZbTeySij9U5GGa13MspovZNRRuudjDJa72SU0Xono4zWOxlltN7JKKP1TkYZrXd+ZfS2Pc99317P0T4+Ws95YX5lubZcWK+NGbNzOU/eOR6evvP20fuc107eOR7Gdr5c8LtQO6+6k1E76zsZtbO+k1E76zsZtbO+czW6b4fZf3nh+Iad/7XT/+FLPYxKPYxKPYxKPYxKPYxKPYxKPYxKPYxKPYxKPYxKPYxKPYze262XG4RhKAqiz4nzcXB2LEBIgf6rxDEgUcIs5tQw0r2is1HR2ajobFR0Nio6GxWdjYrORkVno6KzUdHZqOhsVHQ2KjobFZ2Nis5GRWejorNR0dmo6GKwUaHlGG1UaCXmT6OHjYppi4uNCm2PNFy/jRqpgHKKWM5Gn4eHVEg1mun2slFBzXFax9bo/eHYi6ek6NapH1IjFc2c4mcZ+9gbqUhyjT+pbiW3SM1UDLlse4ruDXOQiPv195X/AAAAAElFTkSuQmCC"},cd49:function(e,t,a){"use strict";a.r(t);a("3a0f"),a("a3a3"),a("4d0b");var n=a("329b"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._m(0),n("transition",{attrs:{name:"fade"}},[e.show?n("div",{staticClass:"warn-open-outer"},[n("div",{staticClass:"warn"},[n("p",{staticClass:"title"},[e._v("试听结束")]),n("p",{staticClass:"center"},[e._v("你的试听已结束，赶紧前往打开小睡眠App体验更多音频吧 (～￣▽￣)～")]),n("p",{staticClass:"warn-open",on:{click:e.aa}},[e._v("打开小睡眠App")]),n("img",{staticClass:"close",attrs:{src:a("433f")},on:{click:e.hehe}})])]):e._e()]),n("transition",{attrs:{name:"fade"}},[e.tips_toggle?n("div",{staticClass:"tips"},[e._v("请点击右上角菜单使用浏览器打开")]):e._e()]),n("transition",{attrs:{name:"fade"}},[e.tips_toggle2?n("div",{staticClass:"tips"},[e._v("已经没有啦~")]):e._e()])],1)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bottom"},[n("div",{staticClass:"bottom-img"},[n("img",{staticClass:"bottom-hehe",attrs:{src:a("b78c")}})]),n("p",{staticClass:"bottom-center"},[e._v("下载小睡眠App，聆听晚安电台")]),n("a",{staticClass:"dl",attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[n("p",{staticClass:"bottom-dl"},[e._v("下  载")])])])}],r={data:function(){return{show:!1,tips_toggle:!1,tips_toggle2:!1}},methods:{hehe:function(){this.show=!this.show,document.querySelector("#myaudio").currentTime=0,0==this.$children[0].$children[0].toggle&&document.querySelector("#myaudio").play()},appOpenSet:function(){var e=this,t=function(){var e;return function(){return e||(e=document.createElement("iframe"),e.style.display="none",document.body.appendChild(e),e)}}(),a="cosleep://",n=function(e){var t=a;for(var n in e)t=t+n+"="+encodeURIComponent(e[n])+"&";return t=t.substring(0,t.length-1),encodeURIComponent(t)},o=function(){var a=n(),o=t();if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){window.location.href="https://www.psy-1.com/app/redirect?code=10012&broadcast_id="+e.$children[0].number;var s=Date.now();setTimeout(function(){var t=Date.now();t-s<1e3&&(window.location.href="cosleep://deeplink?code=10012&broadcast_id="+e.$children[0].number)},25)}else/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?(o.src=a,setTimeout(function(){window.location.href="https://www.heartide.com/download/smallsleep"},500)):(o.src=a,setTimeout(function(){window.location.href="cosleep://deeplink?code=10012&broadcast_id="+e.$children[0].number},500))};o()},aa:function(){var e=this;this.$store.getters.isWeiXin?(this.tips_toggle=!0,setTimeout(function(){e.tips_toggle=!1},1e3)):this.appOpenSet()},aa2:function(){var e=this;this.tips_toggle2=!0,setTimeout(function(){e.tips_toggle2=!1},1e3)}}},i=r,c=(a("8606"),a("048f")),_=Object(c["a"])(i,o,s,!1,null,"0b1dace0",null);_.options.__file="App.vue";var u=_.exports,l=a("f2de");n["default"].use(l["a"]);var d=new l["a"].Store({state:{},getters:{isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},isApp:function(){function e(){var e=!1;try{e=!1}catch(e){}return e}function t(){return!1}return t()||e()}},mutations:{},actions:{}}),p=a("b8e5"),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("div",{staticClass:"content"},[n("div",{staticClass:"video"},[n("img",{attrs:{src:a("7469")}}),n("div",{staticClass:"bar"},[n("img",{staticClass:"bicon",attrs:{src:a("c88d")}}),n("div",{staticClass:"jdt",style:{width:e.jdt+"%"},attrs:{id:"jdt"}}),n("span",{staticClass:"left"},[e._v(e._s(e.music_count))]),n("span",{staticClass:"right"},[e._v(e._s(e.end_time))])]),n("div",{staticClass:"music"},[n("img",{staticClass:"zicon",attrs:{src:a("1e30")},on:{click:function(t){e.getDataFromApi(12345,1)}}}),n("Music",{attrs:{offPath:e.offPath,onPath:e.onPath,musicPath:e.musicPath}}),n("img",{staticClass:"zicon",attrs:{src:a("b003")},on:{click:function(t){e.getDataFromApi(12345,2)}}})],1)]),n("div",{staticClass:"title"},[e._v(e._s(e.title_w))]),n("div",{staticClass:"desc"},[n("div",{staticClass:"left"},[n("div",{staticClass:"zls"},[e._v("\n          故事  |  "+e._s(e.gs)+"\n        ")]),n("div",{staticClass:"zls"},[e._v("\n          主播  |  "+e._s(e.zb)+"\n        ")]),n("div",{staticClass:"zls"},[e._v("\n          音频来源  |  小睡眠原创\n        ")])]),n("div",{staticClass:"right"},[n("div",{staticClass:"number"},[e._v("Vol."+e._s(e.number))]),n("div",{staticClass:"icon-m"},e._l(e.icon,function(e){return n("img",{staticClass:"icon",attrs:{src:e}})}))])])]),n("div",{staticClass:"cont",domProps:{innerHTML:e._s(e.content)}}),n("div",{staticClass:"ended"},[e._v("\n    — The End —\n  ")])])},m=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg"},[n("img",{attrs:{src:a("bf6c")}})])}],h=a("33f9"),f=h["a"],g=(a("8e97"),a("b5d4"),Object(c["a"])(f,A,m,!1,null,"673c903e",null));g.options.__file="Home.vue";var b=g.exports;n["default"].use(p["a"]);var v=new p["a"]({routes:[{path:"/",name:"home",component:b},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]});a("dc72"),n["default"].config.productionTip=!1,new n["default"]({store:d,router:v,render:function(e){return e(u)}}).$mount("#app")},d7fb:function(e,t,a){},dc72:function(e,t){function a(){const e=document.documentElement.clientWidth;let t=document.querySelector("html");t.style.fontSize=e/10+"px"}a(),window.addEventListener("resize",a)},f33a:function(e,t,a){},fdab:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n    For guide and recipes on how to configure / customize this project,"),a("br"),e._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],s=a("78fa"),r=a("3bf3"),i=a("e30f"),c=a("876f"),_=a("3a61"),u=a("9b47"),l=function(e){function t(){return Object(s["a"])(this,t),Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(r["a"])(t,e),t}(u["c"]);_["a"]([Object(u["b"])()],l.prototype,"msg",void 0),l=_["a"]([u["a"]],l);var d=l,p=d,A=(a("4c06"),a("048f")),m=Object(A["a"])(p,n,o,!1,null,"074bffa2",null);m.options.__file="HelloWorld.vue";t["a"]=m.exports}});
//# sourceMappingURL=app.421bdfac.js.map