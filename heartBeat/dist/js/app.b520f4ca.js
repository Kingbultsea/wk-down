(function(e){function t(t){for(var a,r,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)r=s[u],o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},i=[];function r(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7783e9e3"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(e),i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,n[1](r)}o[e]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0c5d":function(e){e.exports={v:"5.3.4",fr:48,ip:0,op:47,w:135,h:135,nm:"合成 1",ddd:0,assets:[],layers:[{ddd:0,ind:1,ty:4,nm:"“未标题-4”轮廓 4",sr:1,ks:{o:{a:0,k:100,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[64.25,67.5,0],ix:2},a:{a:0,k:[45,45,0],ix:1},s:{a:1,k:[{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:0,s:[100,100,100],e:[132,132,100]},{i:{x:[.833,.833,.833],y:[.833,.833,.833]},o:{x:[.167,.167,.167],y:[.167,.167,.167]},n:["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],t:6,s:[132,132,100],e:[100,100,100]},{t:13}],ix:6,x:"var $bm_rt;\nvar freq, decay, n, n, t, amp, w;\nfreq = 3;\ndecay = 5;\n$bm_rt = n = 0;\nif (numKeys > 0) {\n    $bm_rt = n = nearestKey(time).index;\n    if (key(n).time > time)\n        n--;\n}\nif (n > 0) {\n    t = sub(time, key(n).time);\n    amp = velocityAtTime(sub(key(n).time, 0.001));\n    w = mul(mul(freq, Math.PI), 2);\n    $bm_rt = sum(value, mul(amp, div(div(Math.sin(mul(t, w)), Math.exp(mul(decay, t))), w)));\n} else\n    $bm_rt = value;"}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[4.804,4.804],[0,0],[4.803,-4.804],[4.804,-4.804],[-4.805,-4.804],[0,0],[0,0]],o:[[0,0],[-4.804,-4.804],[-4.805,-4.804],[-4.805,4.804],[0,0],[0,0],[4.804,-4.804]],v:[[17.398,-14.995],[17.396,-14.995],[.001,-14.995],[-17.396,-14.995],[-17.396,2.402],[.001,19.798],[17.398,2.402]],c:!0},ix:2},nm:"路径 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,.513725490196,.596078431373,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"填充 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[46,45.399],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"变换"}],nm:"组 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:480,st:0,bm:0},{ddd:0,ind:2,ty:4,nm:"“未标题-4”轮廓 3",sr:1,ks:{o:{a:0,k:20,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[64.25,67.5,0],ix:2},a:{a:0,k:[45,45,0],ix:1},s:{a:1,k:[{i:{x:[.192,.192,.667],y:[1,1,1]},o:{x:[.744,.744,.333],y:[0,0,0]},n:["0p192_1_0p744_0","0p192_1_0p744_0","0p667_1_0p333_0"],t:9,s:[100,100,100],e:[183,183,100]},{i:{x:[.833,.833,.833],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p833_1_0p333_0","0p833_1_0p333_0","0p833_1_0p333_0"],t:21,s:[183,183,100],e:[100,100,100]},{t:33}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[4.804,4.804],[0,0],[4.803,-4.804],[4.804,-4.804],[-4.805,-4.804],[0,0],[0,0]],o:[[0,0],[-4.804,-4.804],[-4.805,-4.804],[-4.805,4.804],[0,0],[0,0],[4.804,-4.804]],v:[[17.398,-14.995],[17.396,-14.995],[.001,-14.995],[-17.396,-14.995],[-17.396,2.402],[.001,19.798],[17.398,2.402]],c:!0},ix:2},nm:"路径 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,.651000019148,.709999952129,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"填充 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[46,45.399],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"变换"}],nm:"组 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:480,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"“未标题-4”轮廓 2",sr:1,ks:{o:{a:0,k:11,ix:11},r:{a:0,k:0,ix:10},p:{a:0,k:[64.25,67.5,0],ix:2},a:{a:0,k:[45,45,0],ix:1},s:{a:1,k:[{i:{x:[.192,.192,.667],y:[1,1,1]},o:{x:[.744,.744,.333],y:[0,0,0]},n:["0p192_1_0p744_0","0p192_1_0p744_0","0p667_1_0p333_0"],t:3,s:[100,100,100],e:[301,301,100]},{i:{x:[.833,.833,.833],y:[1,1,1]},o:{x:[.333,.333,.333],y:[0,0,0]},n:["0p833_1_0p333_0","0p833_1_0p333_0","0p833_1_0p333_0"],t:16,s:[301,301,100],e:[100,100,100]},{t:30}],ix:6}},ao:0,shapes:[{ty:"gr",it:[{ind:0,ty:"sh",ix:1,ks:{a:0,k:{i:[[4.804,4.804],[0,0],[4.803,-4.804],[4.804,-4.804],[-4.805,-4.804],[0,0],[0,0]],o:[[0,0],[-4.804,-4.804],[-4.805,-4.804],[-4.805,4.804],[0,0],[0,0],[4.804,-4.804]],v:[[17.398,-14.995],[17.396,-14.995],[.001,-14.995],[-17.396,-14.995],[-17.396,2.402],[.001,19.798],[17.398,2.402]],c:!0},ix:2},nm:"路径 1",mn:"ADBE Vector Shape - Group",hd:!1},{ty:"fl",c:{a:0,k:[1,.651000019148,.709999952129,1],ix:4},o:{a:0,k:100,ix:5},r:1,nm:"填充 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tr",p:{a:0,k:[46,45.399],ix:2},a:{a:0,k:[0,0],ix:1},s:{a:0,k:[100,100],ix:3},r:{a:0,k:0,ix:6},o:{a:0,k:100,ix:7},sk:{a:0,k:0,ix:4},sa:{a:0,k:0,ix:5},nm:"变换"}],nm:"组 1",np:2,cix:2,ix:1,mn:"ADBE Vector Group",hd:!1}],ip:0,op:480,st:0,bm:0}],markers:[]}},"21bb":function(e,t,n){"use strict";var a=n("f6f1"),o=n.n(a);o.a},"3a39":function(e,t,n){e.exports=n.p+"img/jt.897d02ed.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("9dce"),n("d6e8"),n("b709"),n("e9fc");var a=n("8973"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view"),a("transition",{attrs:{name:"fade"}},[e.tips_toggle?a("div",{staticClass:"outer-tips",on:{click:function(t){e.tips_toggle=!1}}},[a("img",{staticClass:"outer-tips-png",attrs:{src:n("3a39")}}),a("div",{staticClass:"tips"},[e._v("点击右上角用"),a("span",{staticStyle:{color:"#FFCA72"}},[e._v("「浏览器」")]),e._v("打开")])]):e._e()]),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottom"},[a("a",{attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[a("div",{staticClass:"bottom-img"},[a("img",{staticClass:"bottom-hehe",attrs:{src:n("fb6e")}})])]),a("a",{attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[a("div",{staticClass:"bottom-center"},[e._v("下载小睡眠App，感受心动时刻")])]),a("a",{staticClass:"dl",attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[a("div",{staticClass:"bottom-dl"},[e._v("下  载")])])])}],r=n("9caf"),s=n.n(r),c=(n("c7d9"),n("4694"),n("0adb"),n("dc12"),n("badb")),l=n.n(c),u=n("a585"),p=n("26cb"),d=function(){function e(t){var n=t.url,a=t.title,o=t.desc,i=t.pic,r=t.dataUrl,s=void 0===r?null:r;Object(u["a"])(this,e),console.log("??"),this.url=n,this.title=a,this.desc=o,this.pic=i,this.dataUrl=s}return Object(p["a"])(e,[{key:"appShare",value:function(){var e={type1:{title:this.title,desc:this.desc,link:this.url,imgUrl:this.pic,shareType:1},type2:{title:this.title,link:this.url,imgUrl:this.pic,shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=l()(e),document.getElementById("share2").value=l()(e.type1),document.getElementById("share3").value=l()(e.type2)}},{key:"callAppRouter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a={Method:e,Data:t},o="CB_".concat(s()(),"_").concat(Math.ceil(10*Math.random()));a=l()(a),Xinchao.Web[o]=function(e,t){n&&n(e,t),delete Xinchao.Web[o]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:a,cbName:o}):XinchaoApp.callRouter(a,o)}},{key:"appGetName",value:function(){var e=this;this.callAppRouter("isLogin",{},function(t,n){"已登录"===JSON.parse(n).msg&&e.callAppRouter("Login",{},function(e,t){try{var n=JSON.parse(t);localStorage.setItem("name",n.data.name),console.log(n.data.name)}catch(a){localStorage.setItem("name",t.data.name),console.log(t.data.name)}})})}},{key:"weiXinShare",value:function(){var e=this,t={title:e.title,desc:e.desc,link:e.url,imgUrl:this.pic};this.dataUrl,wx.ready(function(e){wx.onMenuShareAppMessage(t),wx.onMenuShareQQ(t),wx.onMenuShareQZone(t),wx.onMenuShareTimeline(t),wx.error(function(e){})})}},{key:"weiXinSDK",value:function(e,t){var n=new XMLHttpRequest,a=this;n.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){console.log("sdk ok");var o=JSON.parse(n.response);console.log(o.data.wechat_config),o.data.wechat_config.debug=!1,t&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),t&&!localStorage.getItem("name")||(wx.config(o.data.wechat_config),a.weiXinShare(),a.weiXinGetName(e))}},n.send()}},{key:"weatherCode",value:function(){var e=/code=(.+?)&/,t=window.location.href.match(e);return sessionStorage.setItem("code",t),t||!1}},{key:"weiXinGetName",value:function(e){if(!localStorage.getItem("name")){console.log(t+"asd你想要的"+sessionStorage.getItem("code"));var t=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(e+"/web/v1/wechat/user",{code:t},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}},{key:"weiXinInit",value:function(e){var t=this.weatherCode();t?this.weiXinSDK(e,!1):this.weiXinSDK(e,!0)}},{key:"appInit",value:function(){this.appShare(),this.appGetName()}},{key:"rawWeiXinShare",value:function(e){var t=new XMLHttpRequest,n=this;t.open("GET",e+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),t.onreadystatechange=function(){if(4===t.readyState&&200===t.status){console.log("sdk ok");var e=JSON.parse(t.response);console.log(e.data.wechat_config),e.data.wechat_config.debug=!1,wx.config(e.data.wechat_config),n.weiXinShare()}},t.send()}},{key:"rawGetName",value:function(){if(!localStorage.getItem("name")){console.log(e+"asd你想要的"+sessionStorage.getItem("code"));var e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(url+"/web/v1/wechat/user",{code:e},function(e){console.log("jq都不行？"),console.log(e.data.nickname),localStorage.setItem("name",e.data.nickname)})}}}]),e}(),m={data:function(){return{a:"",url:"https://api.debug.psy-1.com",tips_toggle:!1,password:""}},methods:{test:function(){var e=new d({pic:"http://wx1.sinaimg.cn/mw690/006Zdy2vgy1fz52y1mnfnj309x09adg6.jpg",url:window.location.href.split("#")[0],title:"心声房间",desc:"心动时刻"});e.appShare(),e.rawWeiXinShare(this.url)},judgeWeiXin:function(){/micromessenger/.test(navigator.userAgent.toLowerCase())?this.tips_toggle=!0:this.toCenter()},toDownLoad:function(e){setTimeout(function(){e&&console.log(e),window.location.href="https://www.heartide.com/download/smallsleep"},500)},toCenter:function(){var e=10021,t=this,n=function(){var e;return function(){return e||(e=document.createElement("iframe"),e.style.display="none",document.body.appendChild(e),e)}}(),a="cosleep://",o=function(e){var t=a;for(var n in e)t=t+n+"="+encodeURIComponent(e[n])+"&";return t=t.substring(0,t.length-1),encodeURIComponent(t)},i=function(){var a=o(),i=n();if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){window.location.href="cosleep://deeplink?code="+e+"&password="+t.password,t.toDownLoad();var r=s()();setTimeout(function(){var n=s()();n-r<1e3&&(window.location.href="cosleep://deeplink?code="+e+"&password="+t.password,t.toDownLoad("cosleep://deeplink?code="+e+"&password="+t.password))},25)}else/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?(i.src=a,setTimeout(function(){window.location.href="https://www.heartide.com/download/smallsleep"},500)):(i.src=a,setTimeout(function(){window.location.href="cosleep://deeplink?code="+e+"&password="+t.password,t.toDownLoad("cosleep://deeplink?code="+e+"&password="+t.password)},500))};i()}},mounted:function(){this.test()}},h=m,f=(n("5c0b"),n("5c64"),n("fc05")),g=Object(f["a"])(h,o,i,!1,null,null,null),v=g.exports,y=n("081a"),w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home",style:e.home_height},[a("audio",{ref:"zz",attrs:{src:e.music_path,id:"myaudio",controls:"",hidden:""}},[a("source",{attrs:{src:e.music_path,type:"audio/mpeg"}})]),a("img",{staticClass:"bg",attrs:{src:n("a78d")}}),a("div",{staticClass:"img-heart-beat"},[a("lottie",{staticClass:"animation",attrs:{width:300,height:300,options:e.defaultOptions},on:{animCreated:e.handleAnimation}})],1),a("div",{staticClass:"template-password"},[a("p",{staticClass:"title"},[e._v("· 我的专属心动密码 ·")]),a("div",{staticClass:"template-number"},[a("div",{staticClass:"number none-bg"},[e._v("-")]),e._l(e.number_list,function(t,n){return a("div",{key:n,staticClass:"number"},[e._v(e._s(t))])}),a("div",{staticClass:"number none-bg"},[e._v("-")])],2)]),a("div",{staticClass:"content"},[e._v("\n    "+e._s(e.heart.heart_content)+"\n    ")]),a("div",{staticClass:"template-asign"},[a("p",{staticClass:"asign"},[e._v("——— 小睡眠")]),a("p",{staticClass:"asign2"},[e._v(e._s(e.date))])]),a("div",{staticClass:"openToCenter",on:{click:e.toCenter}},[e._v("打开小睡眠体验")])])},_=[],b=n("323e"),k=(n("9f02"),n("8e5d"),n("0649")),x=n.n(k),S=n("75f2"),C=n.n(S),E=n("a700"),I=n.n(E),j=n("ab01"),A=n.n(j),M=function(){function e(){Object(u["a"])(this,e)}return Object(p["a"])(e,null,[{key:"promiseForBoolean",value:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a={};A()(a,n);var o=function(t){n.boolean===!a.boolean&&(clearInterval(e),t())};return t=new I.a(function(t,n){e=setInterval(o.bind(null,t),1e3)}),t}},{key:"getAPIData",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new(new XMLHttpRequest),o="";a.open("GET",e),a.onreadystatechange=function(){4===this.readyState&&200===this.status&&t&&t()},a.setRequestHeader("Content-Type","application/json");var i=!0,r=!1,s=void 0;try{for(var c,l=C()(n);!(i=(c=l.next()).done);i=!0){var u=c.value,p=u.val,d=u.key;o+=d+"="+p+"&"}}catch(m){r=!0,s=m}finally{try{i||null==l.return||l.return()}finally{if(r)throw s}}o.replace(/&$/,""),a.send()}},{key:"randomNum",value:function(e,t){switch(arguments.length){case 1:return x()(Math.random()*e+1,10);case 2:return x()(Math.random()*(t-e+1)+e,10);default:return 0}}},{key:"musicCount",value:function(e){var t=x()(e),n=0,a=0;t>60&&(n=x()(t/60),t=x()(t%60),n>60&&(a=x()(n/60),n=x()(n%60)));var o="";x()(t)<10&&(o="0");var i=o+x()(t)+" ",r="0";return i=r+x()(n)+" : "+i,a>0&&(i=x()(a)+"小时"+i),i}},{key:"dateFormat",value:function(e,t){if(!t||"string"!==typeof t)return console.error("format is undefiend or type is Error"),"";e=e instanceof Date?e:"number"===typeof e||"string"===typeof e?new Date(e):new Date;var n={"y+":e.getFullYear(),"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var a in n)if(new RegExp(a).test(t)){var o=RegExp.lastMatch;t=t.replace(o,n[a]<10?"0"+n[a]:n[a].toString())}return t}}]),e}(),D=n("7f43"),B=n.n(D),O=n("a875"),q=n("0c5d"),T={name:"home",data:function(){return{better_scroll:null,home_height:0,music_path:n("b70b"),number_list:["","","","","","","",""],date:M.dateFormat((new Date).getTime(),"yyyy-MM-dd"),heart:{heart_content:"",heart_audio:"",heart_password:""},init_touch:!1,rate:[60,60,60,60,120],defaultOptions:{animationData:q,autoplay:!1,loop:!0},animationSpeed:1,anim:null,heart_width:200,heart_height:200}},components:{lottie:O["a"]},methods:{handleAnimation:function(e){this.anim=e,console.log(e)},heartBeat:function(){var e=this;this.rate=JSON.parse(this.heart.heart_audio);var t=0;setInterval(function(){var n=e.rate[t]/60*1;document.getElementById("myaudio").playbackRate=n,t++,t===e.rate.length&&(t=0),document.getElementById("myaudio").play(),document.getElementById("myaudio").paused||(e.anim.setSpeed(n),e.anim.play())},1500),this.anim.addEventListener("loopComplete",function(){e.anim.stop()}),document.addEventListener("WeixinJSBridgeReady",function(){document.getElementById("myaudio").play(),document.getElementById("myaudio").paused||e.anim.play()},!1),document.addEventListener("touchstart",function(){e.init_touch||(document.getElementById("myaudio").play(),document.getElementById("myaudio").paused||e.anim.play(),e.init_touch=!0)})},parseQuery:function(e){var t={},n=/[?&]([^=&#]+)=([^&#]*)/g,a=e.match(n);if(a)for(var o in a){var i=a[o].split("="),r=i[0].substr(1),s=i[1];t[r]?t[r]=[].concat(t[r],s):t[r]=s}return t},bScroll:function(){var e=document.querySelector("#app");this.better_scroll=new b["a"](e,{click:!0,bounce:{top:!1,bottom:!1,left:!1,right:!1}})},toCenter:function(){this.$parent.judgeWeiXin()},getData:function(){var e=this;this.$parent.password=this.parseQuery(document.URL).password,B.a.get(this.$parent.url+"/web/v1/cosleep/lab/heart/detail",{params:{password:this.parseQuery(document.URL).password||88243482}}).then(function(t){console.log(t.data.data),e.heart=t.data.data,e.number_list=(""+e.heart.heart_password).split(""),e.heartBeat()}).catch(function(e){console.log(e)})}},mounted:function(){this.bScroll(),this.getData()}},X=T,P=(n("21bb"),Object(f["a"])(X,w,_,!1,null,null,null)),R=P.exports;a["a"].use(y["a"]);var G=new y["a"]({routes:[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),L=n("52c1");a["a"].use(L["a"]);var N=new L["a"].Store({state:{},mutations:{},actions:{}}),U=n("02a9");Object(U["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].prototype.WJH=M,a["a"].config.productionTip=!1,n("dc72"),new a["a"]({router:G,store:N,render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("cf66"),o=n.n(a);o.a},"5c64":function(e,t,n){"use strict";var a=n("d7fd"),o=n.n(a);o.a},a78d:function(e,t,n){e.exports=n.p+"img/cosleep_lab-heart_bg_bedroom@3x.6d8c56b9.png"},b70b:function(e,t,n){e.exports=n.p+"media/Heart.53a334ac.mp3"},cf66:function(e,t,n){},d7fd:function(e,t,n){},dc72:function(e,t){function n(){var e=document.documentElement.clientWidth,t=document.querySelector("html");t.style.fontSize=e/10+"px"}n(),window.addEventListener("resize",n)},f6f1:function(e,t,n){},fb6e:function(e,t,n){e.exports=n.p+"img/a.a3d385b7.png"}});
//# sourceMappingURL=app.b520f4ca.js.map