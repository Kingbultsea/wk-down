(function(e){function t(t){for(var a,r,c=t[0],s=t[1],p=t[2],l=0,d=[];l<c.length;l++)r=c[l],o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(d.length)d.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},o={app:0},i=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a6920349"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(e),i=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,n[1](r)}o[e]=void 0}};var p=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://webres.psy-1.com/sgy/dist/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=p;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"259c":function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_alipay@3x.5c531bbd.png"},"2c81":function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_pay-2@3x.4b6898e1.png"},"47ee":function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_pay-1@3x.69f3fe19.png"},5378:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("ff66"),n("ea23"),n("dbff");var a=n("3a00"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r=(n("8383"),n("6134"),n("0be8"),n("c839"),n("d187")),c=n.n(r),s=n("a6b5"),p=n.n(s),l=n("3506"),u=n("1663"),d=function(){function e(t){var n=t.url,a=t.title,o=t.desc,i=t.pic,r=t.dataUrl,c=void 0===r?null:r;Object(l["a"])(this,e),console.log("??"),this.url=n,this.title=a,this.desc=o,this.pic=i,this.dataUrl=c}return Object(u["a"])(e,[{key:"appShare",value:function(){var e={type1:{title:this.title,desc:this.desc,link:this.url,imgUrl:this.pic,shareType:1},type2:{title:this.title,link:this.url,imgUrl:this.pic,shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=p()(e),document.getElementById("share2").value=p()(e.type1),document.getElementById("share3").value=p()(e.type2)}},{key:"callAppRouter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a={Method:e,Data:t},o="CB_".concat(c()(),"_").concat(Math.ceil(10*Math.random()));a=p()(a),Xinchao.Web[o]=function(e,t){n&&n(e,t),delete Xinchao.Web[o]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:a,cbName:o}):XinchaoApp.callRouter(a,o)}},{key:"appGetName",value:function(){var e=this;this.callAppRouter("isLogin",{},function(t,n){"已登录"===JSON.parse(n).msg&&e.callAppRouter("Login",{},function(e,t){try{var n=JSON.parse(t);localStorage.setItem("name",n.data.name),console.log(n.data.name)}catch(a){localStorage.setItem("name",t.data.name),console.log(t.data.name)}})})}},{key:"weiXinShare",value:function(){var e=this,t={title:e.title,desc:e.desc,link:e.url,img_url:e.pic+"?imageView&thumbnail=400x0&quality=75&tostatic=0"};this.dataUrl,wx.ready(function(e){wx.onMenuShareAppMessage(t),wx.onMenuShareQQ(t),wx.onMenuShareQZone(t),wx.onMenuShareTimeline(t),wx.error(function(e){})})}},{key:"weiXinSDK",value:function(e,t){var n=new XMLHttpRequest,a=this;n.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){console.log("sdk ok");var o=JSON.parse(n.response);console.log(o.data.wechat_config),o.data.wechat_config.debug=!1,t&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),t&&!localStorage.getItem("name")||(wx.config(o.data.wechat_config),a.weiXinShare(),a.weiXinGetName(e))}},n.send()}},{key:"weatherCode",value:function(){var e=/code=(.+?)&/,t=window.location.href.match(e);return sessionStorage.setItem("code",t),t||!1}},{key:"weiXinGetName",value:function(e){if(!localStorage.getItem("name")){console.log(t+"asd你想要的"+sessionStorage.getItem("code"));var t=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(e+"/web/v1/wechat/user",{code:t},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}},{key:"weiXinInit",value:function(e){var t=this.weatherCode();t?this.weiXinSDK(e,!1):this.weiXinSDK(e,!0)}},{key:"appInit",value:function(){this.appShare(),this.appGetName()}},{key:"rawWeiXinShare",value:function(e){var t=new XMLHttpRequest,n=this;t.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){console.log("sdk ok");var e=JSON.parse(t.response);console.log(e.data.wechat_config),e.data.wechat_config.debug=!1,wx.config(e.data.wechat_config),n.weiXinShare()}},t.send()}},{key:"rawGetName",value:function(){if(!localStorage.getItem("name")){console.log(e+"asd你想要的"+sessionStorage.getItem("code"));var e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(url+"/web/v1/wechat/user",{code:e},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}}]),e}(),f={data:function(){return{a:""}},methods:{},mounted:function(){var e=new d({pic:"http://wx3.sinaimg.cn/mw690/006Zdy2vgy1fxj0dtbn29j302o02nmx1.jpg",url:"https://sleep.heartide.com/",title:"小睡眠",desc:"给你婴儿般好小睡眠"});e.appShare()}},m=f,v=(n("5c0b"),n("5c64"),n("048f")),g=Object(v["a"])(m,o,i,!1,null,null,null);g.options.__file="App.vue";var h=g.exports,_=n("081a"),y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ali"},[a("div",{staticClass:"template"},[a("p",[e._v("1. 打开 App Store，滑到【App】页面底部")]),a("img",{attrs:{src:n("b514")}})]),a("div",{staticClass:"template"},[a("p",[e._v("2. 选择【绑定支付宝、微信支付宝或银联卡】")]),a("img",{attrs:{src:n("47ee")}})]),a("div",{staticClass:"template"},[a("p",[e._v("3. 勾选【支付宝Alipay】填写你的支付宝信息，然后点击【完成】")]),a("img",{attrs:{src:n("259c")}})]),a("div",{staticClass:"template"},[a("p",[e._v("4. 绑定完成后，回到【小睡眠】App-【充值中心】，点击你想要充值的金额充值即可")]),a("img",{attrs:{src:n("9796")}})]),a("div",{staticClass:"template"},[a("p",[e._v("注意事项: ")]),a("p",{staticClass:"remove-p"},[e._v("1.充值前请确保你的App内购买项目访问限制为【开启】状态(在【设置】-【通用】-【访问限制】中进行设置)； ")]),a("p",{staticClass:"remove-p"},[e._v("2.请确认你的苹果设备未越狱； 3.若绑定不成功，请确认你的支付宝信息填写无误，确认后再次进行绑定； ")]),a("p",{staticClass:"remove-p"},[e._v("4.绑定支付宝帐号时，会验证你的手机号码，请按提示填写信息； ")]),a("p",{staticClass:"remove-p"},[e._v("5.海外用户如遇充值问题，可以到【小睡眠】微信公众号或者到QQ群【小睡眠官方交流群】向我们反馈你的问题，我们会为你解决。")])]),a("div",{staticClass:"button"},[a("a",{attrs:{href:"https://finance-app.itunes.apple.com/account/edit?mt=8"}},[a("div",{staticClass:"inner"},[e._v("前往 App Store 设置")])])])])}],w={name:"ali",methods:{toAppStore:function(){window.open("itms-apps://finance-app.itunes.apple.com/account/edit?countryCode=CHN")}},mounted:function(){document.title="支付宝"}},x=w,S=(n("f4dc"),Object(v["a"])(x,y,b,!1,null,"1f2b7400",null));S.options.__file="ali.vue";var C=S.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ali"},[a("div",{staticClass:"template"},[a("p",[e._v("1.打开 App Store，滑到【App】页面底部")]),a("img",{attrs:{src:n("b514")}})]),a("div",{staticClass:"template"},[a("p",[e._v("2. 选择【绑定支付宝、微信支付宝或银联卡】")]),a("img",{attrs:{src:n("a56c")}})]),a("div",{staticClass:"template"},[a("p",[e._v("3. 勾选【微信支付 WeChat Pay】，然后点击 【前往微信验证】")]),a("img",{attrs:{src:n("5883")}})]),a("div",{staticClass:"template"},[a("p",[e._v("4. 确认开通微信免密支付并点击【下一步】")]),a("img",{attrs:{src:n("690c")}})]),a("div",{staticClass:"template"},[a("p",[e._v("5. 输入你的支付密码即可完成验证。认证完成后， 返回【App Store】，系统将自动完成绑定")]),a("img",{attrs:{src:n("c443")}})]),a("div",{staticClass:"template"},[a("p",[e._v("6. 绑定完成后，回到【小睡眠】App-【充值中心】， 点击你想要充值的金额充值即可")]),a("img",{attrs:{src:n("a097")}})]),a("div",{staticClass:"template"},[a("p",[e._v("注意事项: ")]),a("p",{staticClass:"remove-p"},[e._v("1.充值前请确保你的App内购买项目访问限制为【开启】状态(在【设置】-【通用】-【访问限制】中进行设置)； ")]),a("p",{staticClass:"remove-p"},[e._v("2.请确认你的苹果设备未越狱； ")]),a("p",{staticClass:"remove-p"},[e._v("3.若绑定不成功，请确认你的信息填写无误，确认后再次进行绑定，若支付密码错误，则无法成功验证； ")]),a("p",{staticClass:"remove-p"},[e._v("4.海外用户如遇充值问题，可以到【小睡眠】微信公众号或者到QQ群【小睡眠官方交流群】向我们反馈你的问题，我们会为你解决。")])]),a("div",{staticClass:"button"},[a("a",{attrs:{href:"https://finance-app.itunes.apple.com/account/edit?mt=8"}},[a("div",{staticClass:"inner"},[e._v("前往 App Store 设置")])])])])}],j={name:"ali",methods:{toAppStore:function(){window.open("itms-apps://finance-app.itunes.apple.com/account/edit")}},mounted:function(){document.title="微信"}},I=j,M=(n("9536"),Object(v["a"])(I,k,A,!1,null,"16f9e26a",null));M.options.__file="vx.vue";var O=M.exports,E=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ali"},[a("div",{staticClass:"template"},[a("p",[e._v("1.打开 App Store，滑到【App】页面底部")]),a("img",{attrs:{src:n("b514")}})]),a("div",{staticClass:"template"},[a("p",[e._v("2. 选择【绑定支付宝、微信支付宝或银联卡】")]),a("img",{attrs:{src:n("dbfd")}})]),a("div",{staticClass:"template"},[a("p",[e._v("3. 勾选【银联/信用卡/借记卡】填写你的相关信息， 然后点击【完成】")]),a("img",{attrs:{src:n("eb6b")}})]),a("div",{staticClass:"template"},[a("p",[e._v("4. 绑定完成后，回到【小睡眠】App-【充值中心】， 点击你想要充值的金额充值即可")]),a("img",{attrs:{src:n("2c81")}})]),a("div",{staticClass:"template"},[a("p",[e._v("注意事项: ")]),a("p",{staticClass:"remove-p"},[e._v("1.充值前请确保你的App内购买项目访问限制为【开启】状态(在【设置】-【通用】-【访问限制】中进行设置)； ")]),a("p",{staticClass:"remove-p"},[e._v("2.请确认你的苹果设备未越狱； ")]),a("p",{staticClass:"remove-p"},[e._v("3.若绑定不成功，请确认你的银行卡信息填写无误，确认后再次进行绑定； ")]),a("p",{staticClass:"remove-p"},[e._v("4.海外用户如遇充值问题，可以到【小睡眠】微信公众号或者到QQ群【小睡眠官方交流群】向我们反馈你的问题，我们会为你解决。")])]),a("div",{staticClass:"button"},[a("a",{attrs:{href:"https://finance-app.itunes.apple.com/account/edit?mt=8"}},[a("div",{staticClass:"inner"},[e._v("前往 App Store 设置")])])])])}],N={name:"unionpay",methods:{toAppStore:function(){window.open("itms-apps://finance-app.itunes.apple.com/account/edit?countryCode=CHN")}},mounted:function(){document.title="银联"}},q=N,P=(n("ef60"),Object(v["a"])(q,E,X,!1,null,"a5c5a99e",null));P.options.__file="unionpay.vue";var R=P.exports;a["a"].use(_["a"]);var T=new _["a"]({routes:[{path:"/ali",name:"ali",component:C},{path:"/vx",name:"vx",component:O},{path:"/unionpay",name:"unionpay",component:R},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),D=n("f2de");a["a"].use(D["a"]);var H=new D["a"].Store({state:{},mutations:{},actions:{}}),Q=n("9838");Object(Q["a"])("".concat("https://webres.psy-1.com/sgy/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("eee6"),n("a0ff");var U=n("a6eb"),G=n.n(U),J=n("44dd"),L=n.n(J),B=n("4b4a"),W=n.n(B),F=n("f360"),z=n.n(F),K=function(){function e(){Object(l["a"])(this,e)}return Object(u["a"])(e,null,[{key:"promiseForBoolean",value:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a={};z()(a,n);var o=function(t){n.boolean===!a.boolean&&(clearInterval(e),t())};return t=new W.a(function(t,n){e=setInterval(o.bind(null,t),1e3)}),t}},{key:"getAPIData",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new(new XMLHttpRequest),o="";a.open("GET",e),a.onreadystatechange=function(){4===this.readyState&&200===this.status&&t&&t()},a.setRequestHeader("Content-Type","application/json");var i=!0,r=!1,c=void 0;try{for(var s,p=L()(n);!(i=(s=p.next()).done);i=!0){var l=s.value,u=l.val,d=l.key;o+=d+"="+u+"&"}}catch(f){r=!0,c=f}finally{try{i||null==p.return||p.return()}finally{if(r)throw c}}o.replace(/&$/,""),a.send()}},{key:"randomNum",value:function(e,t){switch(arguments.length){case 1:return G()(Math.random()*e+1,10);case 2:return G()(Math.random()*(t-e+1)+e,10);default:return 0}}},{key:"musicCount",value:function(e){var t=G()(e),n=0,a=0;t>60&&(n=G()(t/60),t=G()(t%60),n>60&&(a=G()(n/60),n=G()(n%60)));var o="";G()(t)<10&&(o="0");var i=o+G()(t)+" ",r="0";return i=r+G()(n)+" : "+i,a>0&&(i=G()(a)+"小时"+i),i}},{key:"dateFormat",value:function(e,t){if(!t||"string"!==typeof t)return console.error("format is undefiend or type is Error"),"";e=e instanceof Date?e:"number"===typeof e||"string"===typeof e?new Date(e):new Date;var n={"y+":e.getFullYear(),"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var a in n)if(new RegExp(a).test(t)){var o=RegExp.lastMatch;t=t.replace(o,n[a].toString())}return t}}]),e}();a["a"].prototype.WJH=K,a["a"].config.productionTip=!1,n("dc72"),new a["a"]({router:T,store:H,render:function(e){return e(h)}}).$mount("#app")},5883:function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_wechatpay-1@3x.1eb3ded8.png"},"5c0b":function(e,t,n){"use strict";var a=n("dddc"),o=n.n(a);o.a},"5c64":function(e,t,n){"use strict";var a=n("b9f4"),o=n.n(a);o.a},"690c":function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_wechatpay-2@3x.645640d9.png"},9536:function(e,t,n){"use strict";var a=n("5378"),o=n.n(a);o.a},9796:function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_pay-2@3x.4b6898e1.png"},a097:function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_pay-2@3x.4b6898e1.png"},a56c:function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_pay-1@3x.69f3fe19.png"},b514:function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_subscribe1_cn@3x.b6aad168.png"},b9f4:function(e,t,n){},bd57:function(e,t,n){},c443:function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_wechatpay-3@3x.322e9983.png"},dbfd:function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_pay-1@3x.69f3fe19.png"},dc72:function(e,t){function n(){const e=document.documentElement.clientWidth;let t=document.querySelector("html");t.style.fontSize=e/10+"px"}n(),window.addEventListener("resize",n)},dc9b:function(e,t,n){},dddc:function(e,t,n){},eb6b:function(e,t,n){e.exports=n.p+"img/cosleep_guidance_img_creditcard@3x.29348247.png"},ef60:function(e,t,n){"use strict";var a=n("dc9b"),o=n.n(a);o.a},f4dc:function(e,t,n){"use strict";var a=n("bd57"),o=n.n(a);o.a}});
//# sourceMappingURL=app.588dc51f.js.map