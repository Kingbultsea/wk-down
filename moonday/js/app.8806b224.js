(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],u=0,g=[];u<s.length;u++)r=s[u],o[r]&&g.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);m&&m(e);while(g.length)g.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"07b90307"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=a);var i,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(t),i=function(e){l.onerror=l.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,n[1](r)}o[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,c.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03ef":function(t,e,n){t.exports=n.p+"img/m_btn.30edf373.svg"},"0685":function(t,e,n){},"08f1":function(t,e,n){t.exports=n.p+"img/number_7.dc8103e9.svg"},"096e":function(t,e,n){t.exports=n.p+"img/number_1.7792d186.svg"},"098f":function(t,e,n){},1061:function(t,e,n){t.exports=n.p+"img/number_2.26a1fa2d.svg"},"10e5":function(t,e,n){"use strict";var a=n("b958"),o=n.n(a);o.a},"13c7":function(t,e,n){},"1ef6":function(t,e,n){"use strict";var a=n("ef7a"),o=n.n(a);o.a},"295f":function(t,e,n){"use strict";var a=n("c751"),o=n.n(a);o.a},"2c10":function(t,e,n){t.exports=n.p+"img/line.fe9bcef7.svg"},"2c20":function(t,e,n){var a={"./number_0.svg":"be1d","./number_1.svg":"096e","./number_2.svg":"1061","./number_3.svg":"7641","./number_4.svg":"ce1b","./number_5.svg":"3368","./number_6.svg":"721c","./number_7.svg":"08f1","./number_8.svg":"5222","./number_9.svg":"4079"};function o(t){var e=i(t);return n(e)}function i(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(a)},o.resolve=i,t.exports=o,o.id="2c20"},3368:function(t,e,n){t.exports=n.p+"img/number_5.e5f5000c.svg"},3493:function(t,e,n){t.exports=n.p+"img/QRcode.fbfae23a.png"},4079:function(t,e,n){t.exports=n.p+"img/number_9.84bfc402.svg"},"4c35":function(t,e,n){},"500a":function(t,e,n){t.exports=n.p+"img/bg3.efaa0bb1.png"},5222:function(t,e,n){t.exports=n.p+"img/number_8.2e7861cf.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("img",{staticClass:"logo",attrs:{src:n("8c36")}}),a("img",{staticClass:"title",attrs:{src:n("b890")}}),t.isRouterAlive?a("router-view"):t._e()],1)},i=[],r={data:function(){return{isRouterAlive:!0}},methods:{reload:function(){var t=this;console.log("？"),this.isRouterAlive=!1,this.$nextTick(function(){return t.isRouterAlive=!0})}}},s=r,c=(n("ba5a"),n("b0a0"),n("2877")),l=Object(c["a"])(s,o,i,!1,null,"89e78562",null);l.options.__file="App.vue";var u=l.exports,m=n("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("img",{staticClass:"bg",attrs:{src:n("aaae")}}),a("div",{staticClass:"bottom-button",on:{click:t.toPlayingPage}},[a("vueButton",[t._v("马上开始")])],1),t._m(0),t.inputshow?a("InputName",{staticStyle:{position:"fixed"}}):t._e()],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"bottom-download",attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[a("img",{attrs:{src:n("b86d")}})])}],d=(n("4917"),n("7f7f"),n("28a5"),n("a481"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("img",{staticClass:"img",attrs:{src:n("03ef")}}),a("p",{staticClass:"p"},[t._t("default")],2)])}),f=[],h={name:"vuebutton"},v=h,w=(n("74b8"),Object(c["a"])(v,d,f,!1,null,"25fde5ba",null));w.options.__file="button.vue";var b=w.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"input"},[n("p",[t._v("请输入你的昵称")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{maxlength:"8",limit:"6"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("div",{on:{click:t.submit}},[t._v("确定")])])])},_=[],S={name:"inputname",data:function(){return{name:""}},methods:{submit:function(){this.name||(this.name="无名同学"),this.name&&(localStorage.setItem("name",this.name),this.$router.push({path:"/playing/b"}))}}},I=S,x=(n("10e5"),Object(c["a"])(I,y,_,!1,null,"0c240e11",null));x.options.__file="inputname.vue";var k=x.exports,C=n("c665"),E=n("aa9a"),j=function(){function t(){Object(C["a"])(this,t)}return Object(E["a"])(t,null,[{key:"is_cosleep",value:function(){return this.is_cosleep_android()||this.is_cosleep_ios()}},{key:"is_cosleep_ios",value:function(){var t=!1;try{t="undefined"!=typeof window.webkit.messageHandlers.XinchaoApp}catch(t){}return t}},{key:"is_cosleep_android",value:function(){return"undefined"!=typeof window.XinchaoApp}},{key:"get_api_root",value:function(){switch("production"){case"production":return"https://api.psy-1.com";case"test":return"https://api.debug.psy-1.com"}}},{key:"get_web_root",value:function(){switch("production"){case"production":return"https://www.heartide.com";case"test":return"https://web.debug.psy-1.com"}}},{key:"baidu_statics",value:function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?c6a0be7a2e98e04ca2cf523568e2cbc4";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}}]),t}(),O={name:"home",data:function(){return{inputshow:!1,return_url:window.location.href.split("#")[0].replace(/\?.+/,"")}},components:{vueButton:b,InputName:k},methods:{toPlayingPage:function(){var t=this,e=this;this.isWeiXin()?e.$router.push({path:"/playpage"}):j.is_cosleep()?this.callAppRouter("isLogin",{},function(n,a){"已登录"===JSON.parse(a).msg?t.callAppRouter("Login",{},function(t,n){try{var a=JSON.parse(n);localStorage.setItem("name",a.data.name),console.log(a.data.name)}catch(t){localStorage.setItem("name",n.data.name),console.log(n.data.name)}e.$router.push({path:"/playpage"})}):localStorage.getItem("name")?e.$router.push({path:"/playpage"}):t.inputshow=!0}):localStorage.getItem("name")?e.$router.push({path:"/playpage"}):this.inputshow=!0},callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a={Method:t,Data:e},o="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));a=JSON.stringify(a),Xinchao.Web[o]=function(t,e){n&&n(t,e),delete Xinchao.Web[o]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:a,cbName:o}):XinchaoApp.callRouter(a,o)},appShare:function(){var t={type1:{title:"教师节活动标题",desc:"描述",link:this.return_url,imgUrl:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg",shareType:1},type2:{title:"教师节活动标题",link:this.return_url,imgUrl:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg",shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=JSON.stringify(t),document.getElementById("share2").value=JSON.stringify(t.type1),document.getElementById("share3").value=JSON.stringify(t.type2)},weixinSDK:function(t,e){var n=new XMLHttpRequest,a=this;n.open("GET",t+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){console.log("sdk ok");var t=JSON.parse(n.response);console.log(t.data.wechat_config),t.data.wechat_config.debug=!1,e&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),e||(wx.config(t.data.wechat_config),a.weixinShare())}},n.send()},weatherCode:function(){var t=/code=(.+?)&/,e=window.location.href.match(t);return e||!1},isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},weixinInit:function(t){if(this.isWeiXin()){var e=this.weatherCode();e?(this.weixinSDK(t,!1),sessionStorage.setItem("code",e)):this.weixinSDK(t,!0)}},weixinShare:function(){console.log(this.return_url),wx.onMenuShareAppMessage({title:"教师节活动标题",desc:"这是描述",link:this.return_url,imgUrl:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg"}),wx.onMenuShareQQ({title:"教师节活动标题",desc:"这是描述",link:this.return_url,imgUrl:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg"}),wx.onMenuShareQZone({title:"教师节活动标题",desc:"这是描述",link:this.return_url,imgUrl:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg"}),wx.onMenuShareTimeline({title:"教师节活动标题",desc:"这是描述",link:this.return_url,imgUrl:"http://wx4.sinaimg.cn/mw690/006Zdy2vgy1fw0xyrxzlxj305k05kgli.jpg"}),wx.error(function(t){alert(t)})}},mounted:function(){this.weixinInit("https://api.debug.psy-1.com"),this.appShare()}},B=O,M=(n("1ef6"),Object(c["a"])(B,g,p,!1,null,"1e06dd9f",null));M.options.__file="Home.vue";var P=M.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main",attrs:{id:"test"}},[a("div",{staticStyle:{width:"100%",height:"60%",transform:"translateY(30%)"},attrs:{id:"center"}},[a("canvas",{attrs:{id:"myCanvas",resize:"true"}}),a("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg1",src:n("852b"),width:"320",height:"491"}}),a("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg2",src:n("5b1f"),width:"320",height:"491"}}),a("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg3",src:n("500a"),width:"320",height:"491"}}),a("img",{staticClass:"visuallyhidden",staticStyle:{display:"none"},attrs:{id:"bg4",src:n("6888"),width:"320",height:"491"}})]),a("p",{staticClass:"bottom-desc"},[t._v("一闪而过的图片，你能照着画出来吗？")])])}],T=n("f06d"),A=n.n(T),$={name:"playpage",methods:{anmination:function(){A.a.install(window),A.a.setup(document.getElementById("myCanvas")),A.a.settings.handleSize=0,A.a.settings.hitTolerance=4},paperStart:function(){n("fd28")}},mounted:function(){1==localStorage.getItem("reload")&&(localStorage.setItem("reload","0"),location.reload()),this.anmination(),this.paperStart()}},R=$,z=(n("c48f"),n("295f"),Object(c["a"])(R,L,N,!1,null,"d74fe20a",null));z.options.__file="playpage.vue";var W=z.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"score-frame"},[a("div",{staticClass:"score-tainer"},[a("div",{staticClass:"score-border",attrs:{id:"saveImg"}},[a("img",{attrs:{src:n("ab8a")}}),a("div",{staticClass:"container",attrs:{id:"load_svg",ontouchstart:"gtouchstart()",ontouchmove:"gtouchmove()",ontouchend:"gtouchend()"}},[a("div",{staticClass:"container-score-frame"},[a("ul",[a("li",[t._v("姓名："),a("span",{attrs:{id:"name"}},[t._v(t._s(t.name))])]),a("li",{attrs:{id:"degreed"}},[t._v(t._s(t.lv))])]),a("div",[a("div",{staticClass:"one"},[t._v("成绩:")]),a("div",{staticClass:"two"},[a("div",[a("img",{attrs:{id:"scoreOne",src:t.one}}),a("img",{attrs:{id:"scoreTwo",src:t.two}})]),t._m(0)])])]),a("div",{staticClass:"infomation",attrs:{id:"information"}})]),t._m(1)])]),a("p",{staticClass:"small-tips"},[t._v("*长按上方保存图片*")]),a("div",{staticClass:"score-bottom"},[a("vueButton",[t._v("阖家团圆")]),a("vueButton",{nativeOn:{click:function(e){return t.again(e)}}},[t._v("再玩一次")])],1)])},U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:n("2c10")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom"},[a("img",{staticStyle:{"margin-top":"1em"},attrs:{src:n("76db")}}),a("div",{staticStyle:{float:"right","text-align":"right"}},[a("img",{staticStyle:{display:"block",float:"right",height:"3em",width:"3em",padding:"0em","padding-right":"1em","padding-bottom":"0.1em"},attrs:{src:n("3493")}}),a("img",{staticClass:"sentance",staticStyle:{width:"5em",float:"right",clear:"right"},attrs:{src:n("d5ab")}})])])}],D=n("3c25"),J=n.n(D),H={name:"result",data:function(){return{one:n("2c20")("./number_"+localStorage.getItem("one")+".svg"),two:n("2c20")("./number_"+localStorage.getItem("two")+".svg"),lv:localStorage.getItem("lv"),name:localStorage.getItem("name")}},components:{vueButton:b},methods:{setImgSize:function(t,e){var n=t.height/t.width,a=document.getElementById(e).offsetHeight+" "+document.getElementById(e).offsetWidth;n<a?t.width=document.getElementById(e).offsetWidth-10:t.height=document.getElementById(e).offsetHeight-10},append:function(){var t=document.getElementById("information"),e=new Image;e.src=localStorage.getItem("canvasSrc"),e.width=t.offsetWidth,e.id="asd",t.appendChild(e),J()(document.getElementsByClassName("score-border")[0],{onclone:function(t){t.getElementsByClassName("score-border")[0].classList.add("visiable")}}).then(function(t){var e=new Image;e.src=t.toDataURL(),e.classList.add("resultImg"),document.getElementsByClassName("score-tainer")[0].innerHTML="",document.getElementsByClassName("score-tainer")[0].appendChild(e),document.getElementsByClassName("score-tainer")[0].classList.add("visiable")})},again:function(){console.log("zz"),localStorage.setItem("reload","1"),this.$router.push({path:"/playpage"})},getName:function(){var t=this;return new Promise(function(e){var n=new XMLHttpRequest;n.open("GET","https://api.debug.psy-1.com/web/v1/wechat/user?code="+sessionStorage.getItem("code").replace(/code=/,"")),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var a=JSON.parse(n.response).data.nickname;console.log(a),localStorage.setItem("name",a),t.name=a,e()}},n.send()})},getNameInit:function(){var t=this;if(this.isWeiXin()){var e=localStorage.getItem("name");e?(console.log("没有name哦"),this.name=e,this.$nextTick(this.append)):this.getName().then(function(){console.log("对的 取不到名称就去取"),t.append()})}this.isWeiXin()||(this.name=localStorage.getItem("name"))},isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())}},mounted:function(){this.getNameInit(),this.isWeiXin()||this.append()}},q=H,Z=(n("c6f7"),n("b5cf"),Object(c["a"])(q,X,U,!1,null,"5a050cfb",null));Z.options.__file="result.vue";var F=Z.exports;a["a"].use(m["a"]);var G=new m["a"]({routes:[{path:"/",name:"home",component:P},{path:"/playpage",name:"playpage",component:W},{path:"/result",name:"result",component:F},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),Q=n("2f62");a["a"].use(Q["a"]);var K=new Q["a"].Store({state:{},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:G,store:K,render:function(t){return t(u)}}).$mount("#app")},"5b1f":function(t,e,n){t.exports=n.p+"img/bg2.93375713.png"},6:function(t,e){},"626c":function(t,e,n){},6888:function(t,e,n){t.exports=n.p+"img/bg4.9d6449f3.png"},7:function(t,e){},"721c":function(t,e,n){t.exports=n.p+"img/number_6.9ed39a44.svg"},"74b8":function(t,e,n){"use strict";var a=n("4c35"),o=n.n(a);o.a},7641:function(t,e,n){t.exports=n.p+"img/number_3.88cb5415.svg"},"76db":function(t,e,n){t.exports=n.p+"img/f-day_img_openning_logo@2x.24afd3fe.png"},"852b":function(t,e,n){t.exports=n.p+"img/bg1.992c86c3.png"},"8c36":function(t,e,n){t.exports=n.p+"img/f-day_img_openning_logo1.deb3ed07.svg"},aaae:function(t,e,n){t.exports=n.p+"img/m_start_img.f3db62fa.svg"},ab8a:function(t,e,n){t.exports=n.p+"img/finally_title@3x.3c677e5c.png"},b0a0:function(t,e,n){"use strict";var a=n("e03b"),o=n.n(a);o.a},b5cf:function(t,e,n){"use strict";var a=n("13c7"),o=n.n(a);o.a},b86d:function(t,e,n){t.exports=n.p+"img/start_tocosleep_btn2.2ba55e2b.gif"},b890:function(t,e,n){t.exports=n.p+"img/title.0967534b.svg"},b958:function(t,e,n){},ba5a:function(t,e,n){"use strict";var a=n("098f"),o=n.n(a);o.a},be1d:function(t,e,n){t.exports=n.p+"img/number_0.7492092f.svg"},c48f:function(t,e,n){"use strict";var a=n("0685"),o=n.n(a);o.a},c6f7:function(t,e,n){"use strict";var a=n("626c"),o=n.n(a);o.a},c751:function(t,e,n){},ce1b:function(t,e,n){t.exports=n.p+"img/number_4.53d30c91.svg"},d5ab:function(t,e,n){t.exports=n.p+"img/font.4ec8566a.png"},e03b:function(t,e,n){},ef7a:function(t,e,n){},fd28:function(t,e,n){"use strict";n.r(e);n("28a5"),n("cadf"),n("551c"),n("097d");var a=n("3c25"),o=n.n(a);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.7,e=view.size.width/2*t;return e}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;t.opacity<=.02?t.opacity=0:t.opacity-=e}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.01;t.opacity+=e,t.opacity>=.9&&(t.opacity=1)}function c(t,e){for(var n,a,o=2*Math.PI/360,r=0;r<e;r++){var s=360/e*r;n=Math.round(Math.cos(o*s)*i(1)+view.center.x),a=Math.round(Math.sin(o*s)*i(1)+view.center.y);var c=new Point(n,a);t.add(c)}}function l(t,e){for(var n=[],a=0;a<t.length;a++){var o=new Path;o.add(view.center),o.lineTo(t[a].point);var i=o.getIntersections(e),r=o.getIntersections(u);if(0 in i){var s=new Path;s.add(r[r.length-1].point),s.lineTo(i[i.length-1].point),n.push(s),_+=s.length}else{var c=new Path;c.add(r[r.length-1].point),c.lineTo(view.center),_+=c.length}}return n}var u=new Path.Circle({center:view.center,radius:i(),strokeColor:"#F59A55",strokeWidth:3}),m=new Path;c(m,50);var g=new Path(view.center,new Point(view.center.x-i(),view.center.y));g.strokeColor="#F59A55",g.strokeWidth=3,g.rotate(180,view.center);var p=new Path({strokeColor:"#F59A55",strokeWidth:2});function d(){r(u,.02)}view.onMouseDown=function(t){p.add(t.point),console.log("dw")},view.onMouseDrag=function(t){p.add(t.point),console.log("drag")};var f=[];view.onMouseUp=function(){p.closePath(),console.log(m.segments),f=l(m.segments,p),v=!0};var h=0,v=!1,w=!0,b=0,y=!1,_=0;function S(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}function I(){var t=document.getElementById("test");o()(t,{onclone:function(t){t.getElementById("test").classList.add("changBG");var e=paper.project.exportSVG();t.getElementById("test").innerHTML="",t.getElementById("test").appendChild(e)}}).then(function(t){localStorage.setItem("canvasSrc",t.toDataURL()),window.location.href=window.location.href.split("#")[0]+"#/result"})}function x(t){switch(!0){case t<284:localStorage.setItem("one","9"),localStorage.setItem("lv","等级：Lv9民间画圣"),localStorage.setItem("two",parseInt((284-t+40)/284*10));break;case t<750&&t>=284:localStorage.setItem("one","8"),localStorage.setItem("lv","等级：Lv8绘画宗师"),localStorage.setItem("two",parseInt((750-t)/466*10));break;case t<1300&&t>=750:localStorage.setItem("one","7"),localStorage.setItem("lv","等级：Lv7天才画家"),localStorage.setItem("two",parseInt((1300-t)/550*10));break;case t<2600&&t>=1300:localStorage.setItem("one","6"),localStorage.setItem("lv","等级：Lv6灵魂画手"),localStorage.setItem("two",parseInt((2600-t)/1300*10));break;case t<3300&&t>=2600:localStorage.setItem("one","5"),localStorage.setItem("lv","等级：Lv5绘画达人"),localStorage.setItem("two",parseInt((3300-t)/700*10));break;case t<4e3&&t>=3300:localStorage.setItem("one","4"),localStorage.setItem("lv","等级：Lv4画室学徒"),localStorage.setItem("two",parseInt((4e3-t)/700*10));break;case t<4500&&t>=4e3:localStorage.setItem("one","3"),localStorage.setItem("lv","等级：Lv3绘画能手"),localStorage.setItem("two",parseInt((4500-t)/500*10));break;case t<5e3&&t>=4500:localStorage.setItem("one","2"),localStorage.setItem("lv","等级：Lv2新手临摹"),localStorage.setItem("two",parseInt((5e3-t)/500*10));break;case t<5800&&t>=5e3:localStorage.setItem("one","1"),localStorage.setItem("lv","等级：Lv1手残菜鸟"),localStorage.setItem("two",parseInt((5800-t)/800*10));break;case t<6400&&t>=5800:localStorage.setItem("one","0"),localStorage.setItem("lv","等级：Lv1手残菜鸟"),localStorage.setItem("two",parseInt((6400-t)/600*10));break}t<284&&parseInt((284-t+40)/284*10)<=6&&localStorage.setItem("lv","等级：Lv10神来之手")}view.onFrame=function(t){if(!v&&w&&d(),v&&(s(u),b!=f.length?g.rotate(2.75,view.center):(g.opacity=0,v=!1,y=!0),b<=f.length/1.5&&r(g),h+=t.delta,h>=.033&&(console.log(f.length),b<f.length&&(f[b].strokeColor="#F59A55",b+=1),h=0)),y){var e="bg"+S(1,4),n=new Raster(e);n.position=view.center,n.size=new Size(2*i(1),2*i(1)),p.strokeColor="red";var a=new Group([p,n]);a.setClipped(!0),a.fillColor="red",y=!1,w=!1,x(_),I()}}}});
//# sourceMappingURL=app.8806b224.js.map