(function(e){function t(t){for(var a,s,i=t[0],_=t[1],c=t[2],u=0,d=[];u<i.length;u++)s=i[u],r[s]&&d.push(r[s][0]),r[s]=0;for(a in _)Object.prototype.hasOwnProperty.call(_,a)&&(e[a]=_[a]);l&&l(t);while(d.length)d.shift()();return n.push.apply(n,c||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],a=!0,s=1;s<o.length;s++){var _=o[s];0!==r[_]&&(a=!1)}a&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var a={},r={app:0},n=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"b8cabc56"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var o=a[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(function(t,a){o=r[e]=[t,a]});t.push(o[2]=a);var n,_=document.getElementsByTagName("head")[0],c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(e),n=function(t){c.onerror=c.onload=null,clearTimeout(u);var o=r[e];if(0!==o){if(o){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+n+")");s.type=a,s.request=n,o[1](s)}r[e]=void 0}};var u=setTimeout(function(){n({type:"timeout",target:c})},12e4);c.onerror=c.onload=n,_.appendChild(c)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(o,a,function(t){return e[t]}.bind(null,a));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://webres.psy-1.com/sgy/dist/",i.oe=function(e){throw console.error(e),e};var _=window["webpackJsonp"]=window["webpackJsonp"]||[],c=_.push.bind(_);_.push=t,_=_.slice();for(var u=0;u<_.length;u++)t(_[u]);var l=c;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"1eb5":function(e,t,o){},"433f":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8BAMAAADI0sRBAAAAMFBMVEX///8AAAD///////////////////////////////////////////////////////9PNSPeAAAAEHRSTlNmAF8UA0QKOC5NQB0ZUEhaTqdUwQAAAZFJREFUOMuFlb1OAkEUhU8IGOTPTCAsKDEkJFpYyRNAbUPBC6ytMaG1g1Ir6SwxsbBE4wOIT7CVrVbWvoCJ63p3Zg+7m3vK/fLNTHbm3gvjcnbz0S/8PL4YF4fb15Dc+Wnc+4RNY+Ow0Fsksrth3J6AUvIJPwOckyTuIJWFw61VGlfGFl8iI+8xbgVZuD4WvI/M3AueZ+PyPz5ATp4ifJ6HjyI8ycOlP9xDbjYh7ubjZYhfZaWLPuJ8vSFKLcRyzztmaPcce3LvBm35VjXNWJ/aDX3El1U4DXWRzSy+NtiTDUJdZM+eDSOQTjKKWIN0klHFHKSTjDJWIJ1kVBCAdJJRxzdIf0jK2EMfpBuR5QMA0kXOTmX7cdDimBrTpN3oaOGxfTOkowUkewPS61iRPLMXJ79lTjJAehlrkgHSqxixzHoRXZZZX6LDMusL+xQbIpPuu4ccyaJ7orgyqEWy6IeuDLry7Qo2x7LiUilBpYCV8leah9J6lMaltD2laSotV2nYSrtXhoUyapRBpY05ZUj+Ap8GZcaWaNQOAAAAAElFTkSuQmCC"},"45ed":function(e,t,o){"use strict";var a=o("5777"),r=o.n(a);r.a},"522c":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("097d");var a=o("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),e._m(0),a("transition",{attrs:{name:"fade"}},[e.show?a("div",{staticClass:"warn-open-outer"},[a("div",{staticClass:"warn"},[a("p",{staticClass:"title"},[e._v("试听结束")]),a("p",{staticClass:"center"},[e._v("打开小睡眠App即可体验此音频组合完整版！ (～￣▽￣)～ ")]),a("p",{staticClass:"warn-open",on:{click:e.aa}},[e._v("打开小睡眠App")]),a("img",{staticClass:"close",attrs:{src:o("433f")},on:{click:e.hehe}})])]):e._e()]),a("transition",{attrs:{name:"fade"}},[e.tips_toggle?a("div",{staticClass:"tips"},[e._v("请点击右上角菜单使用浏览器打开")]):e._e()])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom"},[a("div",{staticClass:"bottom-img"},[a("img",{staticClass:"bottom-hehe",attrs:{src:o("b78c")}})]),a("p",{staticClass:"bottom-center"},[e._v("小睡眠，不负休憩好时光")]),a("a",{staticClass:"dl",attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[a("p",{staticClass:"bottom-dl"},[e._v("下载")])])])}];function s(){var e=document.documentElement.clientWidth,t=document.querySelector("html");t.style.fontSize=e/10+"px"}s(),window.addEventListener("resize",s);var i={data:function(){return{show:!1,tips_toggle:!1}},methods:{hehe:function(){this.show=!this.show,document.querySelector("#myaudio").play()},aa:function(){this.$children[0].openApp()}}},_=i,c=(o("45ed"),o("5c64"),o("2877")),u=Object(c["a"])(_,r,n,!1,null,"1ad9d29d",null);u.options.__file="App.vue";var l=u.exports,d=o("8c4f"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home common-page"},[a("div",{staticClass:"music-group"},[a("music",{staticClass:"music",attrs:{offPath:e.offPath,onPath:e.onPath,musicPath:e.musicPath}}),a("div",{staticClass:"music-count"},[e._v(e._s(e.two))])],1),a("img",{staticClass:"content-img",attrs:{src:o("e234")}}),a("div",{staticClass:"icon-list"},e._l(e.tubiao,function(t){return a("div",{staticClass:"icon"},[a("img",{attrs:{src:t.resurl},on:{click:function(e){}}}),a("p",[e._v(e._s(t.musicdesc))])])})),a("div",{staticClass:"user"},[a("img",{attrs:{src:e.user_pic}}),a("p",[e._v(e._s(e.user_name))])]),a("div",{staticClass:"desc"},[a("div",{staticClass:"desc-cont"},[e._v("\n      "+e._s(e.share_article_content)+"\n    ")]),a("div",{staticClass:"shadow"})]),a("div",{staticClass:"open",on:{click:e.openApp}},[e._v("\n      打开App体验完整版组合\n    ")])])},m=[],h=o("9cae"),f=h["a"],g=(o("f41c"),Object(c["a"])(f,p,m,!1,null,"46b2c438",null));g.options.__file="Home.vue";var v=g.exports;a["a"].use(d["a"]);var y=new d["a"]({routes:[{path:"/",name:"home",component:v},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),w=o("2f62"),b=o("c665"),E=o("aa9a"),P=function(){function e(){Object(b["a"])(this,e)}return Object(E["a"])(e,null,[{key:"is_cosleep",value:function(){return this.is_cosleep_android()||this.is_cosleep_ios()}},{key:"is_cosleep_ios",value:function(){var e=!1;try{e="undefined"!=typeof window.webkit.messageHandlers.XinchaoApp}catch(e){}return e}},{key:"is_cosleep_android",value:function(){return"undefined"!=typeof window.XinchaoApp}},{key:"get_api_root",value:function(){switch("production"){case"production":return"https://api.psy-1.com";case"test":return"https://api.debug.psy-1.com"}}},{key:"get_web_root",value:function(){switch("production"){case"production":return"https://www.heartide.com";case"test":return"https://web.debug.psy-1.com"}}},{key:"baidu_statics",value:function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?c6a0be7a2e98e04ca2cf523568e2cbc4";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}]),e}();a["a"].use(w["a"]);var O=new w["a"].Store({state:{},mutations:{},getters:{isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},isApp:function(){return console.log("????"),P.is_cosleep()}},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:y,store:O,render:function(e){return e(l)}}).$mount("#app")},5777:function(e,t,o){},"5b8b":function(e,t,o){"use strict";o.r(t),o.d(t,"default",function(){return n});o("ac4d"),o("8a81"),o("ac6a"),o("a481"),o("f751");var a=o("c665"),r=o("aa9a"),n=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"promiseForBoolean",value:function(){var e,t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a={};Object.assign(a,o);var r=function(t){o.boolean===!a.boolean&&(clearInterval(e),t())};return t=new Promise(function(t,o){e=setInterval(r.bind(null,t),1e3)}),t}},{key:"getAPIData",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new(new XMLHttpRequest),r="";a.open("GET",e),a.onreadystatechange=function(){4===this.readyState&&200===this.status&&t&&t()},a.setRequestHeader("Content-Type","application/json");var n=!0,s=!1,i=void 0;try{for(var _,c=o[Symbol.iterator]();!(n=(_=c.next()).done);n=!0){var u=_.value,l=u.val,d=u.key;r+=d+"="+l+"&"}}catch(e){s=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(s)throw i}}r.replace(/&$/,""),a.send()}},{key:"randomNum",value:function(e,t){switch(arguments.length){case 1:return parseInt(Math.random()*e+1,10);case 2:return parseInt(Math.random()*(t-e+1)+e,10);default:return 0}}},{key:"musicCount",value:function(e){var t=parseInt(e),o=0,a=0;t>60&&(o=parseInt(t/60),t=parseInt(t%60),o>60&&(a=parseInt(o/60),o=parseInt(o%60)));var r="";parseInt(t)<10&&(r="0");var n=r+parseInt(t)+" ",s="0";return n=s+parseInt(o)+" : "+n,a>0&&(n=parseInt(a)+"小时"+n),n}}]),e}()},"5c64":function(e,t,o){"use strict";var a=o("5c9b"),r=o.n(a);r.a},"5c9b":function(e,t,o){},"8f19":function(e,t,o){"use strict";var a=o("522c"),r=o.n(a);r.a},"9cae":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("ac4d"),core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("8a81"),core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("ac6a"),core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("386d"),core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("4917"),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("3b2b"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("cadf"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("551c"),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_10__),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("097d"),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_11__),_components_music_vue__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("abde"),_components_shareandgetname_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("fce9");function getQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=window.location.search.substr(1).match(t);return null!=o?unescape(o[2]):null}__webpack_exports__["a"]={name:"home",data:function(){return{offPath:"https://res.psy-1.com/music/voice/tinysleep_sheep_play2-BHgSoY5B6WFClAfSEh2i.png",onPath:"https://res.psy-1.com/music/voice/tinysleep_sheep_stop2-jwlPPhdRF58oErMNroV2.png",musicPath:"",code:getQueryString("code").replace(/#/,"").replace(/\//,""),two:"",user_pic:"",user_name:"",tubiao:{},share_article_content:"",share_article_title:"",type:""}},methods:{getData:function getData(url){var _this=this,type=0,st="/web/v1/cosleep/forum/article/share/query";try{type=getQueryString("type").replace(/#/,"").replace(/\//,"")}catch(e){console.log("没有"),type=0}st=2==type?"/web/v1/cosleep/forum/article/share/query":"/web/v1/cosleep/music/share/query",console.log(st),$.get(url+st,{code:getQueryString("code").replace(/#/,"").replace(/\//,"")},function(data){_this.musicPath=data.data.share_music_combine,get.boolean=!0;var user=JSON.parse(data.data.share_user_info);_this.user_name=user.name,_this.user_pic=user.avatar;var tubiao=eval("("+data.data.share_music_list+")");_this.tubiao=tubiao,console.log(tubiao),_this.share_article_title=data.data.share_article_title,0==type?(_this.share_article_title="今晚点它,一夜好觉",document.title="今晚点它 一夜好觉"):(_this.share_article_title="失眠专用",document.title="失眠专用"),_this.share_article_content=data.data.share_article_content;var title_list="",_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _iterator=tubiao[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var li=_step.value;console.log(li),title_list+=li.musicdesc+"+"}}catch(e){_didIteratorError=!0,_iteratorError=e}finally{try{_iteratorNormalCompletion||null==_iterator.return||_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}title_list=title_list.replace(/\+$/,""),_this.share("http://wx1.sinaimg.cn/mw690/006Zdy2vgy1fwjdfkq0thj305k05k0nx.jpg",_this.share_article_title,title_list)})},musicDetail:function(){var e=[];for(var t in this.tubiao)e.push({id:this.tubiao[t].id,music_volume:this.tubiao[t].music_volume,music_rate:this.tubiao[t].music_rate});var o="",a=e;for(var r in a)for(var n in a[r])o+="music_detail["+r+"]["+n+"]="+a[r][n]+"&";return o.replace(/&$/,"")},musicCount:function(){var e=Math.round(document.querySelector("#myaudio").duration)-Math.round(document.querySelector("#myaudio").currentTime);this.two=this.formatSeconds(e)},formatSeconds:function(e){var t=parseInt(e),o=0,a=0;t>60&&(o=parseInt(t/60),t=parseInt(t%60),o>60&&(a=parseInt(o/60),o=parseInt(o%60)));var r="";parseInt(t)<10&&(r="0");var n=r+parseInt(t)+" ",s="0";return n=s+parseInt(o)+":"+n,a>0&&(n=parseInt(a)+"小时"+n),n},share:function(e,t,o){var a=new _components_shareandgetname_js__WEBPACK_IMPORTED_MODULE_13__["a"]({pic:e,url:window.location.href.split("#")[0],title:t,desc:o});a.rawWeiXinShare("https://api.debug.psy-1.com"),this.$store.getters.isApp&&a.appInit()},openApp:function(){var e=this;this.$store.getters.isWeiXin?(this.$parent.tips_toggle=!0,setTimeout(function(){e.$parent.tips_toggle=!1},1e3)):this.appOpenSet()},appOpenSet:function(){var e=this,t=function(){var e;return function(){return e||(e=document.createElement("iframe"),e.style.display="none",document.body.appendChild(e),e)}}(),o="cosleep://",a=function(e){var t=o;for(var a in e)t=t+a+"="+encodeURIComponent(e[a])+"&";return t=t.substring(0,t.length-1),encodeURIComponent(t)},r=function(){var o=a(),r=t();if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){console.log(decodeURI("cosleep://deeplink?code=10010&music_detail_code="+e.code+"&"+encodeURI(e.musicDetail()))),window.location.href="cosleep://deeplink?code=10010&music_detail_code="+e.code;var n=Date.now();setTimeout(function(){var t=Date.now();t-n<1e3&&(console.log(decodeURI("cosleep://deeplink?code=10010&music_detail_code="+e.code+"&"+encodeURI(e.musicDetail()))),window.location.href="cosleep://deeplink?code=10010&music_detail_code="+e.code)},25)}else/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?(r.src=o,setTimeout(function(){window.location.href="https://www.heartide.com/download/smallsleep"},500)):(r.src=o,setTimeout(function(){window.location.href="cosleep://deeplink?code=10010&music_detail_code="+e.code},500))};r()}},components:{music:_components_music_vue__WEBPACK_IMPORTED_MODULE_12__["a"]},mounted:function(){var e=this;document.querySelector("#myaudio").addEventListener("canplaythrough",function(){e.musicCount(),setInterval(e.musicCount,1e3)}),this.getData("https://api.debug.psy-1.com"),document.querySelector("#myaudio").addEventListener("ended",function(){e.$parent.show=!0})}}},abde:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("img",{ref:"audio",staticClass:"music",attrs:{src:e.tgImg},on:{click:e.musicPlay}}),o("audio",{ref:"zz",attrs:{src:e.musicPath,id:"myaudio",controls:"",hidden:"",loop:e.loop}},[o("source",{attrs:{src:e.musicPath,type:"audio/mpeg"}})])])},r=[],n=(o("f751"),o("5b8b"),{name:"music",props:["onPath","offPath","musicPath"],data:function(){return{toggle:!0,loop:!1}},computed:{tgImg:function(){var e=this.toggle;return e=this.toggle?this.$props.offPath:this.$props.onPath,e}},methods:{musicPlay:function(){this.dontBorderMeFUCKYOU();var e=document.getElementById("myaudio");e.paused?(console.log(e),e.play(),document.querySelector("#myaudio").play(),e.paused||(this.toggle=!1)):(e.pause(),e.paused&&(this.toggle=!0))},rawPlay:function(){var e=document.querySelector("#myaudio");e.paused&&(e.play(),e.paused||(this.toggle=!1))},rawPause:function(){if(!music_dom.paused){var e=document.querySelector("#myaudio");e.pause(),e.paused&&(this.toggle=!0)}},initMusic:function(){var e=this;this.$store.getters.isWeiXin?document.addEventListener("WeixinJSBridgeReady",function(){console.log("微信兄弟！"),e.musicCanPlaythrough(),e.rawPlay(),console.log("??dasdasdasdas")},!1):this.$store.getters.isApp&&(console.log("asdasdsad"),this.musicCanPlaythrough())},musicCanPlaythrough:function(){console.log("asdasdsssb");var e=function(){var e,t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a={};Object.assign(a,o);var r=function(t){o.boolean===!a.boolean&&(clearInterval(e),t())};return t=new Promise(function(t,o){e=setInterval(r.bind(null,t),1e3)}),t};e(get).then(this.rawPlay)},dontBorderMeFUCKYOU:function(){localStorage.setItem("fuckyou","1")}},mounted:function(){this.initMusic(),console.log("??"),localStorage.removeItem("fuckyou")}}),s=n,i=(o("f4f3"),o("8f19"),o("2877")),_=Object(i["a"])(s,a,r,!1,null,"c1e6a222",null);_.options.__file="music.vue";t["a"]=_.exports},b78c:function(e,t,o){e.exports=o.p+"img/hehe.8efa2f84.png"},dc92:function(e,t,o){},e234:function(e,t,o){e.exports=o.p+"img/cosleep_share_img_window@3x.7874a6e1.png"},f41c:function(e,t,o){"use strict";var a=o("1eb5"),r=o.n(a);r.a},f4f3:function(e,t,o){"use strict";var a=o("dc92"),r=o.n(a);r.a},fce9:function(e,t,o){"use strict";o.d(t,"a",function(){return n});o("a481"),o("4917"),o("28a5"),o("7f7f");var a=o("c665"),r=o("aa9a"),n=function(){function e(t){var o=t.url,r=t.title,n=t.desc,s=t.pic;Object(a["a"])(this,e),console.log("??"),this.url=o,this.title=r,this.desc=n,this.pic=s}return Object(r["a"])(e,[{key:"appShare",value:function(){var e={type1:{title:this.title,desc:this.desc,link:this.url,imgUrl:this.pic,shareType:1},type2:{title:this.title,link:this.url,imgUrl:this.pic,shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=JSON.stringify(e),document.getElementById("share2").value=JSON.stringify(e.type1),document.getElementById("share3").value=JSON.stringify(e.type2)}},{key:"callAppRouter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,a={Method:e,Data:t},r="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));a=JSON.stringify(a),Xinchao.Web[r]=function(e,t){o&&o(e,t),delete Xinchao.Web[r]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:a,cbName:r}):XinchaoApp.callRouter(a,r)}},{key:"appGetName",value:function(){var e=this;this.callAppRouter("isLogin",{},function(t,o){"已登录"===JSON.parse(o).msg&&e.callAppRouter("Login",{},function(e,t){try{var o=JSON.parse(t);localStorage.setItem("name",o.data.name),console.log(o.data.name)}catch(e){localStorage.setItem("name",t.data.name),console.log(t.data.name)}})})}},{key:"weiXinShare",value:function(){var e=this,t={title:e.title,desc:e.desc,link:e.url,imgUrl:e.pic};wx.ready(function(e){wx.onMenuShareAppMessage(t),wx.onMenuShareQQ(t),wx.onMenuShareQZone(t),wx.onMenuShareTimeline(t),wx.error(function(e){})})}},{key:"weiXinSDK",value:function(e,t){var o=new XMLHttpRequest,a=this;o.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){console.log("sdk ok");var r=JSON.parse(o.response);console.log(r.data.wechat_config),r.data.wechat_config.debug=!1,t&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),t&&!localStorage.getItem("name")||(wx.config(r.data.wechat_config),a.weiXinShare(),a.weiXinGetName(e))}},o.send()}},{key:"weatherCode",value:function(){var e=/code=(.+?)&/,t=window.location.href.match(e);return sessionStorage.setItem("code",t),t||!1}},{key:"weiXinGetName",value:function(e){if(!localStorage.getItem("name")){console.log(t+"asd你想要的"+sessionStorage.getItem("code"));var t=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(e+"/web/v1/wechat/user",{code:t},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}},{key:"weiXinInit",value:function(e){var t=this.weatherCode();t?this.weiXinSDK(e,!1):this.weiXinSDK(e,!0)}},{key:"appInit",value:function(){this.appShare(),this.appGetName()}},{key:"rawWeiXinShare",value:function(e){var t=new XMLHttpRequest,o=this;t.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){console.log("sdk ok");var e=JSON.parse(t.response);console.log(e.data.wechat_config),e.data.wechat_config.debug=!1,wx.config(e.data.wechat_config),o.weiXinShare()}},t.send()}},{key:"rawGetName",value:function(){if(!localStorage.getItem("name")){console.log(e+"asd你想要的"+sessionStorage.getItem("code"));var e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(url+"/web/v1/wechat/user",{code:e},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}}]),e}()}});
//# sourceMappingURL=app.4a645b92.js.map