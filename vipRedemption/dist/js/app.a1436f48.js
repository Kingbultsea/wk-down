(function(e){function t(t){for(var o,c,r=t[0],s=t[1],u=t[2],l=0,p=[];l<r.length;l++)c=r[l],i[c]&&p.push(i[c][0]),i[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},i={app:0},a=[];function c(e){return r.p+"js/"+({about:"about"}[e]||e)+"."+{about:"0e28cb31"}[e]+".js"}function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=i[e]=[t,o]});t.push(n[2]=o);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=c(e),a=function(t){s.onerror=s.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");c.type=o,c.request=a,n[1](c)}i[e]=void 0}};var u=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://webres.psy-1.com/sgy/dist/",r.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0750":function(e,t,n){e.exports=n.p+"img/getIn.922e9ecc.png"},"21bb":function(e,t,n){"use strict";var o=n("c1b2"),i=n.n(o);i.a},"320d":function(e,t,n){e.exports=n.p+"img/title@3x.40cf028d.png"},"427f":function(e,t,n){"use strict";var o=n("56b5"),i=n.n(o);i.a},"4b7f":function(e,t,n){e.exports=n.p+"img/fail.f6bcbac8.png"},"56b5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("175c"),n("bc97"),n("a5be");var o=n("1cc5"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Home")],1)},a=[],c=(n("cfd2"),n("0638"),n("af3c"),n("d85c"),n("d187")),r=n.n(c),s=n("a6b5"),u=n.n(s),l=n("3506"),d=n("1663"),p=function(){function e(t){var n=t.url,o=t.title,i=t.desc,a=t.pic,c=t.dataUrl,r=void 0===c?null:c;Object(l["a"])(this,e),console.log("??"),this.url=n,this.title=o,this.desc=i,this.pic=a,this.dataUrl=r}return Object(d["a"])(e,[{key:"appShare",value:function(){var e={type1:{title:this.title,desc:this.desc,link:this.url,imgUrl:this.pic,shareType:1},type2:{title:this.title,link:this.url,imgUrl:this.pic,shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=u()(e),document.getElementById("share2").value=u()(e.type1),document.getElementById("share3").value=u()(e.type2)}},{key:"callAppRouter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,o={Method:e,Data:t},i="CB_".concat(r()(),"_").concat(Math.ceil(10*Math.random()));o=u()(o),Xinchao.Web[i]=function(e,t){n&&n(e,t),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:o,cbName:i}):XinchaoApp.callRouter(o,i)}},{key:"appGetName",value:function(){var e=this;this.callAppRouter("isLogin",{},function(t,n){"已登录"===JSON.parse(n).msg&&e.callAppRouter("Login",{},function(e,t){try{var n=JSON.parse(t);localStorage.setItem("name",n.data.name),console.log(n.data.name)}catch(o){localStorage.setItem("name",t.data.name),console.log(t.data.name)}})})}},{key:"weiXinShare",value:function(){var e=this,t={title:e.title,desc:e.desc,link:e.url,img_url:e.pic+"?imageView&thumbnail=400x0&quality=75&tostatic=0"};this.dataUrl,wx.ready(function(e){wx.onMenuShareAppMessage(t),wx.onMenuShareQQ(t),wx.onMenuShareQZone(t),wx.onMenuShareTimeline(t),wx.error(function(e){})})}},{key:"weiXinSDK",value:function(e,t){var n=new XMLHttpRequest,o=this;n.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){console.log("sdk ok");var i=JSON.parse(n.response);console.log(i.data.wechat_config),i.data.wechat_config.debug=!1,t&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),t&&!localStorage.getItem("name")||(wx.config(i.data.wechat_config),o.weiXinShare(),o.weiXinGetName(e))}},n.send()}},{key:"weatherCode",value:function(){var e=/code=(.+?)&/,t=window.location.href.match(e);return sessionStorage.setItem("code",t),t||!1}},{key:"weiXinGetName",value:function(e){if(!localStorage.getItem("name")){console.log(t+"asd你想要的"+sessionStorage.getItem("code"));var t=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(e+"/web/v1/wechat/user",{code:t},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}},{key:"weiXinInit",value:function(e){var t=this.weatherCode();t?this.weiXinSDK(e,!1):this.weiXinSDK(e,!0)}},{key:"appInit",value:function(){this.appShare(),this.appGetName()}},{key:"rawWeiXinShare",value:function(e){var t=new XMLHttpRequest,n=this;t.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){console.log("sdk ok");var e=JSON.parse(t.response);console.log(e.data.wechat_config),e.data.wechat_config.debug=!1,wx.config(e.data.wechat_config),n.weiXinShare()}},t.send()}},{key:"rawGetName",value:function(){if(!localStorage.getItem("name")){console.log(e+"asd你想要的"+sessionStorage.getItem("code"));var e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(url+"/web/v1/wechat/user",{code:e},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}}]),e}(),f=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home",style:e.home_height},[o("img",{staticClass:"img-title",attrs:{src:n("320d")}}),o("img",{staticClass:"img-desc",attrs:{src:n("a767")}}),o("img",{staticClass:"img-button",attrs:{src:n("e8b8")},on:{click:e.submit}}),o("transition",{attrs:{name:"fade"}},[o("Notice",{ref:"Notice"})],1)],1)},g=[],h=n("a6eb"),m=n.n(h),v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.close?o("div",{staticClass:"notice"},[o("div",{staticClass:"template"},[o("img",{staticClass:"img-close",attrs:{src:n("83af")},on:{click:function(t){e.close=!1}}}),o("img",{staticClass:"img-success",attrs:{src:e.imgSuccess}}),o("img",{staticClass:"img-vip-logo",attrs:{src:e.imgLogo}}),o("div",{staticClass:"font-desc"},[e._v(e._s(e.desc))]),e.show_button?o("img",{staticClass:"img-getin",attrs:{src:n("0750")},on:{click:e.toMemberCenter}}):e._e()])]):e._e()},b=[],y=function(){function e(){Object(l["a"])(this,e)}return Object(d["a"])(e,null,[{key:"is_cosleep",value:function(){return this.is_cosleep_android()||this.is_cosleep_ios()}},{key:"is_cosleep_ios",value:function(){var e=!1;try{e="undefined"!==typeof window.webkit.messageHandlers.XinchaoApp}catch(t){}return e}},{key:"is_cosleep_android",value:function(){return"undefined"!==typeof window.XinchaoApp}},{key:"get_api_root",value:function(){switch("production"){case"production":return"https://api.psy-1.com";case"test":return"https://api.debug.psy-1.com"}}},{key:"get_web_root",value:function(){switch("production"){case"production":return"https://www.heartide.com";case"test":return"https://web.debug.psy-1.com"}}},{key:"baidu_statics",value:function(){var e=document.createElement("script");e.src="https://hm.baidu.com/hm.js?c6a0be7a2e98e04ca2cf523568e2cbc4";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}]),e}(),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;try{var o={Method:e,Data:t},i="CB_".concat(r()(),"_").concat(Math.ceil(10*Math.random()));o=u()(o),Xinchao.Web[i]=function(e,t){n&&n(e,t),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:o,cbName:i}):XinchaoApp.callRouter(o,i)}catch(a){}},A={name:"notice",data:function(){return{imgSuccess:null,imgLogo:null,desc:".",close:!1,show_button:!1}},methods:{toMemberCenter:function(){w("Redirect",{code:10017},function(e,t){})},changeFail:function(e){this.imgSuccess=n("4b7f"),this.imgLogo=n("d59c"),this.desc=e,this.show_button=!1},changeRepeat:function(e){this.imgSuccess=n("712c"),this.imgLogo=n("d59c"),this.desc=e,this.show_button=!0},changeSuccess:function(e){this.imgSuccess=n("6582"),this.imgLogo=n("c741"),this.desc=e,this.show_button=!0}},mounted:function(){this.changeFail()}},_=A,S=(n("427f"),n("25c1")),k=Object(S["a"])(_,v,b,!1,null,"594278cc",null);k.options.__file="notice.vue";var x=k.exports,N=n("7f43"),M=n.n(N),O=(n("94ec"),n("9707"),n("44dd")),C=n.n(O),j=n("4b4a"),E=n.n(j),X=n("f360"),I=n.n(X),L=function(){function e(){Object(l["a"])(this,e)}return Object(d["a"])(e,null,[{key:"promiseForBoolean",value:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o={};I()(o,n);var i=function(t){n.boolean===!o.boolean&&(clearInterval(e),t())};return t=new E.a(function(t,n){e=setInterval(i.bind(null,t),1e3)}),t}},{key:"getAPIData",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new(new XMLHttpRequest),i="";o.open("GET",e),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&t&&t()},o.setRequestHeader("Content-Type","application/json");var a=!0,c=!1,r=void 0;try{for(var s,u=C()(n);!(a=(s=u.next()).done);a=!0){var l=s.value,d=l.val,p=l.key;i+=p+"="+d+"&"}}catch(f){c=!0,r=f}finally{try{a||null==u.return||u.return()}finally{if(c)throw r}}i.replace(/&$/,""),o.send()}},{key:"randomNum",value:function(e,t){switch(arguments.length){case 1:return m()(Math.random()*e+1,10);case 2:return m()(Math.random()*(t-e+1)+e,10);default:return 0}}},{key:"musicCount",value:function(e){var t=m()(e),n=0,o=0;t>60&&(n=m()(t/60),t=m()(t%60),n>60&&(o=m()(n/60),n=m()(n%60)));var i="";m()(t)<10&&(i="0");var a=i+m()(t)+" ",c="0";return a=c+m()(n)+" : "+a,o>0&&(a=m()(o)+"小时"+a),a}},{key:"dateFormat",value:function(e,t){if(!t||"string"!==typeof t)return console.error("format is undefiend or type is Error"),"";e=e instanceof Date?e:"number"===typeof e||"string"===typeof e?new Date(e):new Date;var n={"y+":e.getFullYear(),"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var o in n)if(new RegExp(o).test(t)){var i=RegExp.lastMatch;t=t.replace(i,n[o].toString())}return t}},{key:"parseQuery",value:function(e){var t={},n=/[?&]([^=&#]+)=([^&#]*)/g,o=e.match(n);if(o)for(var i in o){var a=o[i].split("="),c=a[0].substr(1),r=a[1];t[c]?t[c]=[].concat(t[c],r):t[c]=r}return t}}]),e}(),B={name:"home",data:function(){return{home_height:0,source_id:null,openid:null,activity_id:null}},components:{Notice:x},methods:{refleash:function(){w("Redirect",{code:10020},function(e,t){})},postData:function(){var e=this;console.log("查看sourceid".concat(this.source_id,"  查看openid ").concat(this.openid,"  查看activity_id ").concat(this.activity_id)),M()({url:this.$parent.rootUrl+"/web/v1/cosleep/vip/source/activity/record",method:"post",data:{openid:this.openid,activity_id:this.activity_id||1},transformRequest:[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}],headers:{sourceid:this.source_id}}).then(function(t){if(console.log(t.data),e.$children[0].close=!0,-1!==t.data.msg.indexOf("重复")||-1!==t.data.msg.indexOf("该会员资格你已"))return console.log(t.data.msg.indexOf("重复")),console.log("重复了"),void e.$children[0].changeRepeat(t.data.msg);1===m()(t.data.status)?e.$children[0].changeSuccess(t.data.msg):e.$children[0].changeFail(t.data.msg),e.refleash()})},configData:function(){var e=this;w("getEnv",{},function(t,n){var o=null;o="string"===typeof n?JSON.parse(n):n,e.source_id=o.data.sourceid}),w("Login",{},function(t,n){var o=null;o="string"===typeof n?JSON.parse(n):n,e.openid=o.data.openid})},submit:function(){var e=this;y.is_cosleep()&&w("isLogin",{},function(t,n){var o=null;o="string"===typeof n?JSON.parse(n):n,console.log(o),console.log(n),"已登录"===o.msg?(e.configData(),e.source_id&&e.openid&&e.activity_id?e.postData():setTimeout(function(){e.postData()},500)):w("Login",{},function(e,t){})})}},mounted:function(){var e=this,t=L.parseQuery(window.location.href);this.activity_id=t.activity_id,w("isLogin",{},function(t,n){var o=null;o="string"===typeof n?JSON.parse(n):n,console.log(o),console.log(n),"已登录"===o.msg&&e.configData()})}},R=B,J=(n("21bb"),Object(S["a"])(R,f,g,!1,null,null,null));J.options.__file="Home.vue";var T=J.exports,G={data:function(){return{rootUrl:"https://api.debug.psy-1.com"}},components:{Home:T},methods:{test:function(){var e=new p({pic:"http://wx3.sinaimg.cn/large/006Zdy2vgy1fxj0dtbn29j302o02nmx1.jpg",url:"http://psy-1.com/",title:"给失眠君一封告别信……",desc:"遇见小睡眠App，开启好睡眠"});e.appShare()}},mounted:function(){this.test()}},U=G,D=(n("5c0b"),n("5c64"),Object(S["a"])(U,i,a,!1,null,null,null));D.options.__file="App.vue";var q=D.exports,F=n("081a");o["a"].use(F["a"]);var H=new F["a"]({routes:[{path:"/zdf",name:"home",component:T},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),P=n("52c1");o["a"].use(P["a"]);var z=new P["a"].Store({state:{},mutations:{},actions:{}}),W=n("9838");Object(W["a"])("".concat("https://webres.psy-1.com/sgy/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(){console.log("er")}}),o["a"].prototype.WJH=L,o["a"].config.productionTip=!1,n("dc72"),new o["a"]({router:H,store:z,render:function(e){return e(q)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("866c"),i=n.n(o);i.a},"5c64":function(e,t,n){"use strict";var o=n("78ad"),i=n.n(o);i.a},6582:function(e,t,n){e.exports=n.p+"img/success.b65563e5.png"},"712c":function(e,t,n){e.exports=n.p+"img/repeat.30e2e546.png"},"78ad":function(e,t,n){},"83af":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLBAMAAADKYGfZAAAALVBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACttl6nAAAADnRSTlMABEfn8ljVaT4YuCJ8dPRJ76QAAAFvSURBVEjH7daxSgNBEAbgsxC0OwJBtErQJk2KgBCbFAEtD0Qr7UKqCKl8gHsFGwu7NGItxBfQNzlJOc/g7gbJzvz/bnrNlsPeZL+b++9SFLv1r9bhk60cl7hr725W68rB6xtuO6rkQVee5bsLzW5FLnWpL3JeYjOyremYZo8i9kc/XGms27Vds8YQ2iNXu4ZmE3vcM1cc2JM1wGq5djHWM2WIt/JGFNY3W3XwXraqGBtONiCTKU5jLGOur4+xlIlYzrTYBNNiU0yNTTMVNslU2AwzxuaYEfYrw4ywkmNusHnmup3H5pi/2GoLczNNGW/bFaZJMsuakcySbApm1qwwzU/MLGk2wcySkzVdzCxhDjGzpJmfps0sOVmYps4sY9aYWcbEzFJm6gXFX0FJrM5mCmuzmcBCNikWssmx+5BNin3BbAZsbT9GkM2AXejSCcmmx16YL+D0qmaZXZjS8p48C/OVvbZkn9333u4fyt9dP68cK3rmQntUAAAAAElFTkSuQmCC"},"866c":function(e,t,n){},a767:function(e,t,n){e.exports=n.p+"img/gift1@3x.e1958e09.png"},c1b2:function(e,t,n){},c741:function(e,t,n){e.exports=n.p+"img/vip@3x.54d419cd.png"},d59c:function(e,t,n){e.exports=n.p+"img/img@3x.7b0d1575.png"},dc72:function(e,t){function n(){var e=document.documentElement.clientWidth,t=document.querySelector("html");t.style.fontSize=e/10+"px"}n(),window.addEventListener("resize",n)},e8b8:function(e,t,n){e.exports=n.p+"img/buttn@3x.8cb0beda.png"}});
//# sourceMappingURL=app.a1436f48.js.map