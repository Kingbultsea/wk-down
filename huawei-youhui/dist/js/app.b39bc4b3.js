(function(t){function e(e){for(var n,c,s=e[0],r=e[1],l=e[2],u=0,h=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&h.push(i[c][0]),i[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,s=1;s<o.length;s++){var r=o[s];0!==i[r]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},i={app:0},a=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="https://webres.psy-1.com/sgy/dist/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=r;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"02d4":function(t,e,o){"use strict";var n=o("16ca"),i=o.n(n);i.a},"02e9":function(t,e,o){},"0603":function(t,e,o){t.exports=o.p+"img/日历-H56.9443195e.jpg"},"06ae":function(t,e,o){},"0948":function(t,e,o){t.exports=o.p+"img/H5限时免费.5f9ac671.jpg"},"16ca":function(t,e,o){},1788:function(t,e,o){},"21bb":function(t,e,o){"use strict";var n=o("02e9"),i=o.n(n);i.a},"23b9":function(t,e,o){},"25e2":function(t,e,o){"use strict";var n=o("3c47"),i=o.n(n);i.a},"2cef":function(t,e,o){t.exports=o.p+"img/logo@3x.cbde81c5.png"},3673:function(t,e,o){},"36c5":function(t,e,o){"use strict";var n=o("be19"),i=o.n(n);i.a},"3c47":function(t,e,o){},"3d8f":function(t,e,o){},4645:function(t,e,o){},4731:function(t,e,o){},"47dc":function(t,e,o){t.exports=o.p+"img/po.951c5dec.jpg"},5313:function(t,e,o){t.exports=o.p+"img/H5考试专题(1).6b8afd11.png"},"561c":function(t,e,o){"use strict";var n=o("ab7e"),i=o.n(n);i.a},"56d7":function(t,e,o){"use strict";o.r(e);o("dac5"),o("6e26"),o("9604"),o("df67");var n=o("6e6d"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"app-template"},[o("router-view")],1)])},a=[],c=(o("34a3"),o("3c6b"),o("7bc1"),o("7364"),o("98d4")),s=o("ab1f"),r=function(){function t(e){var o=e.url,n=e.title,i=e.desc,a=e.pic,s=e.dataUrl,r=void 0===s?null:s;Object(c["a"])(this,t),console.log("??"),this.url=o,this.title=n,this.desc=i,this.pic=a,this.dataUrl=r}return Object(s["a"])(t,[{key:"appShare",value:function(){var t={type1:{title:this.title,desc:this.desc,link:this.url,imgUrl:this.pic,shareType:1},type2:{title:this.title,link:this.url,imgUrl:this.pic,shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=JSON.stringify(t),document.getElementById("share2").value=JSON.stringify(t.type1),document.getElementById("share3").value=JSON.stringify(t.type2)}},{key:"callAppRouter",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)}},{key:"appGetName",value:function(){var t=this;this.callAppRouter("isLogin",{},function(e,o){"已登录"===JSON.parse(o).msg&&t.callAppRouter("Login",{},function(t,e){try{var o=JSON.parse(e);localStorage.setItem("name",o.data.name),console.log(o.data.name)}catch(n){localStorage.setItem("name",e.data.name),console.log(e.data.name)}})})}},{key:"weiXinShare",value:function(){var t=this,e={title:t.title,desc:t.desc,link:t.url,img_url:t.pic+"?imageView&thumbnail=400x0&quality=75&tostatic=0"};this.dataUrl,wx.ready(function(t){wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareQZone(e),wx.onMenuShareTimeline(e),wx.error(function(t){})})}},{key:"weiXinSDK",value:function(t,e){var o=new XMLHttpRequest,n=this;o.open("GET",t+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){console.log("sdk ok");var i=JSON.parse(o.response);console.log(i.data.wechat_config),i.data.wechat_config.debug=!1,e&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),e&&!localStorage.getItem("name")||(wx.config(i.data.wechat_config),n.weiXinShare(),n.weiXinGetName(t))}},o.send()}},{key:"weatherCode",value:function(){var t=/code=(.+?)&/,e=window.location.href.match(t);return sessionStorage.setItem("code",e),e||!1}},{key:"weiXinGetName",value:function(t){if(!localStorage.getItem("name")){console.log(e+"asd你想要的"+sessionStorage.getItem("code"));var e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(t+"/web/v1/wechat/user",{code:e},function(t){console.log("jq都不行？"),console.log(t.data.nickname),localStorage.setItem("name",t.data.nickname)})}}},{key:"weiXinInit",value:function(t){var e=this.weatherCode();e?this.weiXinSDK(t,!1):this.weiXinSDK(t,!0)}},{key:"appInit",value:function(){this.appShare(),this.appGetName()}},{key:"rawWeiXinShare",value:function(t){var e=new XMLHttpRequest,o=this;e.open("GET",t+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){console.log("sdk ok");var t=JSON.parse(e.response);console.log(t.data.wechat_config),t.data.wechat_config.debug=!1,wx.config(t.data.wechat_config),o.weiXinShare()}},e.send()}},{key:"rawGetName",value:function(){if(!localStorage.getItem("name")){console.log(t+"asd你想要的"+sessionStorage.getItem("code"));var t=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(url+"/web/v1/wechat/user",{code:t},function(t){console.log("jq都不行？"),console.log(t.data.nickname),localStorage.setItem("name",t.data.nickname)})}}}]),t}(),l=(o("157a"),{data:function(){return{a:"",url:"https://api.psy-1.com"}},methods:{test:function(t){var e=new r({pic:"http://wx1.sinaimg.cn/large/006Zdy2vgy1g0fd9no3cyj305f05fmwz.jpg",url:"http://psy-1.com/",title:"小睡眠",desc:"给你一个婴儿般的好睡眠"});e.appShare(),e.rawWeiXinShare(this.url)}},mounted:function(){console.log(document.location),this.test()}}),d=l,u=(o("5c0b"),o("5c64"),o("6691")),h=Object(u["a"])(d,i,a,!1,null,null,null),p=h.exports,m=o("c478"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("47dc")}}),n("div",{staticClass:"open-remeber",on:{click:t.oo}}),n("div",{staticClass:"get-in",on:{click:t.ooo}})])},f=[],g={name:"home",data:function(){return{home_height:0}},components:{},methods:{oo:function(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="小睡眠&华为返利活动"}},v=g,_=(o("21bb"),Object(u["a"])(v,w,f,!1,null,null,null)),b=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xm",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("0948")}}),n("div",{staticClass:"open-remeber",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=521'"}}),n("div",{staticClass:"get-in",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=522'"}}),n("div",{staticClass:"t",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=523'"}}),n("div",{staticClass:"f",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=518'"}})])},C=[],k={name:"xm",data:function(){return{home_height:0}},components:{},methods:{oo:function(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="小睡眠每周限免活动"}},x=k,M=(o("25e2"),Object(u["a"])(x,y,C,!1,null,null,null)),A=M.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xm",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("9d82")}}),n("div",{staticClass:"open-remeber",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=549'"}}),n("div",{staticClass:"get-in",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=551'"}}),n("div",{staticClass:"t",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=552'"}}),n("div",{staticClass:"f",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=518'"}})])},R=[],S={name:"xm",data:function(){return{home_height:0}},components:{},methods:{oo:function(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="小睡眠每周限免活动"}},X=S,O=(o("bef3"),Object(u["a"])(X,j,R,!1,null,null,null)),P=O.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xm",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("5758")}}),n("div",{staticClass:"open-remeber",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=561'"}}),n("div",{staticClass:"get-in",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=566'"}}),n("div",{staticClass:"t",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=563'"}}),n("div",{staticClass:"f",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=558'"}})])},N=[],I={name:"xm",data:function(){return{home_height:0}},components:{},methods:{oo:function(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="小睡眠每周限免活动"}},D=I,q=(o("7ece"),Object(u["a"])(D,E,N,!1,null,null,null)),H=q.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xm",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("7f5c")}}),n("div",{staticClass:"open-remeber",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=569'"}}),n("div",{staticClass:"get-in",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=568'"}}),n("div",{staticClass:"t",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=567'"}}),n("div",{staticClass:"f",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=558'"}})])},J=[],z={name:"xm",data:function(){return{home_height:0}},components:{},methods:{oo:function(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="小睡眠每周限免活动"}},B=z,L=(o("b4ea"),Object(u["a"])(B,W,J,!1,null,null,null)),T=L.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"xm",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("ca25")}}),n("div",{staticClass:"open-remeber",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=580'"}}),n("div",{staticClass:"get-in",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=581'"}}),n("div",{staticClass:"t",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=582'"}}),n("div",{staticClass:"f",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=558'"}})])},F=[],Q={name:"xm",data:function(){return{home_height:0}},components:{},methods:{oo:function(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="小睡眠每周限免活动"}},G=Q,K=(o("6229"),Object(u["a"])(G,U,F,!1,null,null,null)),V=K.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smbwz",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("5313")}}),n("div",{staticClass:"a a1",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=527'"}}),n("div",{staticClass:"a a2",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=528'"}}),n("div",{staticClass:"a a3",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=529'"}}),n("div",{staticClass:"a a4",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=530'"}}),n("div",{staticClass:"a a5",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=531'"}}),n("div",{staticClass:"a a6",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=538'"}}),n("div",{staticClass:"a a7",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=532'"}})])},Y=[],tt={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{oo:function(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="小睡眠考生睡眠专题活动"}},et=tt,ot=(o("867c"),Object(u["a"])(et,Z,Y,!1,null,null,null)),nt=ot.exports,it=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"auto-phase",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("c483")}}),n("div",{staticClass:"img-title"},[n("div",[t._v(t._s(this.startTime)+"-"+t._s(this.endTime))])]),0!==t.allPrice?n("div",{staticClass:"price"},[t._v("本期限免金额"+t._s(t.allPrice)+"元")]):t._e(),t._l(t.list,function(e,o){return n("div",{key:o,staticClass:"template"},[n("div",{staticClass:"title"},[t._v(t._s(e.detail.musicdesc))]),n("div",{staticClass:"center"},[n("img",{staticClass:"c-img",attrs:{src:e.cover_free}}),n("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.parseBR(e.detail.resdesc))}})]),n("div",{staticClass:"button",on:{click:function(o){return t.toLink(e.detail.category_id,e.id)}}},[n("div",{staticClass:"price"},[t._v("原价"+t._s(e.detail.price_origin)+"元")])])])}),t._m(0),n("img",{staticClass:"logo",attrs:{src:o("2cef")}}),n("img",{staticClass:"btn",attrs:{src:o("dd6a")},on:{click:t.toMember}})],2)},at=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"desc"},[t._v("\n    启禀陛下娘娘"),o("br"),t._v("限免内容每周更换"),o("br"),t._v("开通会员无限畅享\n  ")])}],ct=o("9090"),st=(o("0857"),o("7c56"),o("0eb5"),o("a4c5"),o("f763"),function(){function t(){Object(c["a"])(this,t)}return Object(s["a"])(t,null,[{key:"promiseForBoolean",value:function(){var t,e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={};Object.assign(n,o);var i=function(e){o.boolean===!n.boolean&&(clearInterval(t),e())};return e=new Promise(function(e,o){t=setInterval(i.bind(null,e),1e3)}),e}},{key:"getAPIData",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=new(new XMLHttpRequest),i="";n.open("GET",t),n.onreadystatechange=function(){4===this.readyState&&200===this.status&&e&&e()},n.setRequestHeader("Content-Type","application/json");var a=!0,c=!1,s=void 0;try{for(var r,l=o[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var d=r.value,u=d.val,h=d.key;i+=h+"="+u+"&"}}catch(p){c=!0,s=p}finally{try{a||null==l.return||l.return()}finally{if(c)throw s}}i.replace(/&$/,""),n.send()}},{key:"randomNum",value:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}},{key:"musicCount",value:function(t){var e=parseInt(t),o=0,n=0;e>60&&(o=parseInt(e/60),e=parseInt(e%60),o>60&&(n=parseInt(o/60),o=parseInt(o%60)));var i="";parseInt(e)<10&&(i="0");var a=i+parseInt(e)+" ",c="0";return a=c+parseInt(o)+" : "+a,n>0&&(a=parseInt(n)+"小时"+a),a}},{key:"dateFormat",value:function(t,e){if(!e||"string"!==typeof e)return console.error("format is undefiend or type is Error"),"";t=t instanceof Date?t:"number"===typeof t||"string"===typeof t?new Date(t):new Date;var o={"y+":t.getFullYear(),"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var n in o)if(new RegExp(n).test(e)){var i=RegExp.lastMatch;e=e.replace(i,o[n]<10?"0"+o[n]:o[n].toString())}return e}},{key:"judgeWeiXin",value:function(){var t=null;return window.navigator.userAgent.toLowerCase().match(/QQ/i)&&(t=window.navigator.userAgent.toLowerCase().match(/QQ/i)[0]),!(!/micromessenger/.test(navigator.userAgent.toLowerCase())&&"qq"!==t)}},{key:"deepCopy",value:function(e){var o=e.constructor===Array?[]:{};for(var n in e)o[n]="object"===Object(ct["a"])(e[n])?t.deepCopy(e[n]):e[n];return o}}]),t}()),rt={name:"home",data:function(){return{allPrice:0,home_height:0,timeDate:"",list:[],startTime:"",endTime:""}},components:{},methods:{toMember:function(){var t={code:10017};this.callAppRouter("Redirect",t,function(t,e){})},callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)},parseQuery:function(t){var e={},o=/[?&]([^=&#]+)=([^&#]*)/g,n=t.match(o);if(n)for(var i in n){var a=n[i].split("="),c=a[0].substr(1),s=a[1];e[c]?e[c]=[].concat(e[c],s):e[c]=s}return e},toLink:function(t,e){var o={code:1052,category_id:t,voice_id:e};this.callAppRouter("Redirect",o,function(t,e){})},parseBR:function(t){return t.replace(/\n/g,"<br/>")},getData:function(){var t=this,e=this.parseQuery(document.URL);this.$axios.get("/web/v1/cosleep/week/free",{params:{free_id:e.free_id}}).then(function(e){if(5!==parseInt(e.data.status)){var o=e.data.data;for(var n in t.startTime=st.dateFormat(+(o.free_start+"000"),"yyyy年MM月dd日"),t.endTime=st.dateFormat(+(o.free_end+"000"),"MM月dd日"),t.list=o.free_list,t.list)t.allPrice+=parseFloat(t.list[n].detail.price_origin);t.allPrice=t.allPrice.toFixed(2),console.log(e.data.data)}})}},mounted:function(){document.title="小睡眠每周限免活动",this.getData()}},lt=rt,dt=(o("36c5"),Object(u["a"])(lt,it,at,!1,null,null,null)),ut=dt.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smbwzf",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("bbfe")}}),n("div",{staticClass:"a a1",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=575'"}}),n("div",{staticClass:"a a2",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=576'"}}),n("div",{staticClass:"a a3",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=577'"}}),n("div",{staticClass:"a a4",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=574'"}})])},pt=[],mt={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{oo:function(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="嗜睡改善"}},wt=mt,ft=(o("efdd"),Object(u["a"])(wt,ht,pt,!1,null,"2da5f5c8",null)),gt=ft.exports,vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smbwz",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("d906")}}),n("div",{staticClass:"a a1",on:{click:function(e){return t.toLink(1,10150)}}}),n("div",{staticClass:"a a2",on:{click:function(e){return t.toLink(1,10151)}}}),n("div",{staticClass:"a a3",on:{click:function(e){return t.toLink(1,10153)}}}),n("div",{staticClass:"a a4",on:{click:t.toMember}})])},_t=[],bt={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)},toLink:function(t,e){var o={code:1052,category_id:t,voice_id:e};this.callAppRouter("Redirect",o,function(t,e){})},oo:function(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"},toMember:function(){var t={code:10017,goods_id:5};this.callAppRouter("Redirect",t,function(t,e){})}},mounted:function(){document.title="小睡眠-助眠冥想新品专题"}},yt=bt,Ct=(o("dd7c"),Object(u["a"])(yt,vt,_t,!1,null,null,null)),kt=Ct.exports,xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smbwz",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("7e51")}}),n("div",{staticClass:"a a1",on:{click:t.oo}})])},Mt=[],At={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)},oo:function(){_hmt.push(["_trackEvent","nav","click","click","558"]);var t={code:10017,goods_id:5};this.callAppRouter("Redirect",t,function(t,e){})},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="小睡眠&华为专属优惠活动"}},jt=At,Rt=(o("750b"),Object(u["a"])(jt,xt,Mt,!1,null,null,null)),St=Rt.exports,Xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smbwz",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("e9c0")}}),n("div",{staticClass:"a a1",on:{click:t.oo}})])},Ot=[],Pt={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)},oo:function(){_hmt.push(["_trackEvent","nav","click","华为中秋"]);var t={code:10017,goods_id:5};this.callAppRouter("Redirect",t,function(t,e){})},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="小睡眠&华为专属优惠活动"}},Et=Pt,Nt=(o("02d4"),Object(u["a"])(Et,Xt,Ot,!1,null,"6be1a80b",null)),It=Nt.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smbwz",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("a571")}}),n("div",{staticClass:"a a1",on:{click:t.oo}})])},qt=[],Ht={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)},oo:function(){_hmt.push(["_trackEvent","nav","gq1","694"]);var t={code:10017,goods_id:4};this.callAppRouter("Redirect",t,function(t,e){})},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="庆70华诞 享双重好礼"}},Wt=Ht,$t=(o("857f"),Object(u["a"])(Wt,Dt,qt,!1,null,"42143b9c",null)),Jt=$t.exports,zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smbwz",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("6f0b")}}),n("div",{staticClass:"a a1",on:{click:t.oo}})])},Bt=[],Lt={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)},oo:function(){_hmt.push(["_trackEvent","nav","gq2","694"]);var t={code:10017,goods_id:4};this.callAppRouter("Redirect",t,function(t,e){})},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="庆70华诞 好礼不间断"}},Tt=Lt,Ut=(o("5955"),Object(u["a"])(Tt,zt,Bt,!1,null,"43a6ed30",null)),Ft=Ut.exports,Qt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hwcjdefl",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("9042")}}),n("div",{staticClass:"a a1",on:{click:t.oo}})])},Gt=[],Kt={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)},oo:function(){_hmt.push(["_trackEvent","nav","hw3","574"]);var t={code:10017,goods_id:4};this.callAppRouter("Redirect",t,function(t,e){})},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="超级大额返利"}},Vt=Kt,Zt=(o("f9c0"),Object(u["a"])(Vt,Qt,Gt,!1,null,"8f228586",null)),Yt=Zt.exports,te=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hwcjdefl",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("636c")}}),n("div",{staticClass:"a a1",on:{click:t.oo}})])},ee=[],oe={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)},oo:function(){_hmt.push(["_trackEvent","nav","hw3","574"]);var t={code:10017,goods_id:4};this.callAppRouter("Redirect",t,function(t,e){})},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="金秋欢购有礼"}},ne=oe,ie=(o("561c"),Object(u["a"])(ne,te,ee,!1,null,"02a49422",null)),ae=ie.exports,ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smbwz",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("b001")}}),n("div",{staticClass:"a a1",on:{click:t.oo}})])},se=[],re={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)},oo:function(){_hmt.push(["_trackEvent","2019-11-21","hw","574"]);var t={code:10017,goods_id:4};this.callAppRouter("Redirect",t,function(t,e){})},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){document.title="充值即享优惠 华为用户专享"}},le=re,de=(o("9029"),Object(u["a"])(le,ce,se,!1,null,"30029416",null)),ue=de.exports,he=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"smbwz",style:t.home_height},[n("img",{staticClass:"ig",attrs:{src:o("0603")}}),n("div",{staticClass:"a a1",on:{click:t.o3}}),n("div",{staticClass:"a a2",on:{click:t.o1}}),n("div",{staticClass:"a a3",on:{click:t.o3}}),n("div",{staticClass:"a a4",on:{click:t.o2}}),n("div",{staticClass:"a a5",on:{click:t.o3}})])},pe=[],me={name:"smbwj",data:function(){return{home_height:0}},components:{},methods:{callAppRouter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2?arguments[2]:void 0,n={Method:t,Data:e},i="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));n=JSON.stringify(n),Xinchao.Web[i]=function(t,e){o&&o(t,e),delete Xinchao.Web[i]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:n,cbName:i}):XinchaoApp.callRouter(n,i)},o1:function(){_hmt.push(["_trackEvent","2019-11-22","日历","773"]);var t={code:10017,goods_id:4};this.callAppRouter("Redirect",t,function(t,e){})},o2:function(){_hmt.push(["_trackEvent","2019-11-22","日历","772"]);var t={code:10017,goods_id:5};this.callAppRouter("Redirect",t,function(t,e){})},o3:function(){_hmt.push(["_trackEvent","2019-11-22","日历","774"]),window.location.href="https://www.heartide.com/statics/redirect?url=774"}},mounted:function(){document.title="开会员送199元有声日历"}},we=me,fe=(o("7385"),Object(u["a"])(we,he,pe,!1,null,"a3cef632",null)),ge=fe.exports;n["a"].use(m["a"]);var ve=new m["a"]({routes:[{path:"/atp",name:"home",component:b},{path:"/xm",name:"xm",component:A},{path:"/xm2",name:"xm2",component:P},{path:"/xm3",name:"xm3",component:H},{path:"/xm4",name:"xm4",component:T},{path:"/xm5",name:"xm5",component:V},{path:"/smbwz",name:"smbwz",component:nt},{path:"/",name:"atp",component:ut},{path:"/smc",name:"smc",component:gt},{path:"/smc",name:"smc",component:gt},{path:"/zmgs",name:"zmgs",component:kt},{path:"/hwc",name:"sdas",component:St},{path:"/zqr",name:"zqr",component:It},{path:"/gq1",name:"gq1",component:Jt},{path:"/gq2",name:"gq2",component:Ft},{path:"/hw3e",name:"hw3e",component:Yt},{path:"/hw3e2",name:"hw3e2",component:ae},{path:"/hw2a9df",name:"huaweiACV",component:ue},{path:"/clander",name:"clander",component:ge}]}),_e=o("591a");n["a"].use(_e["a"]);var be=new _e["a"].Store({state:{},mutations:{},actions:{}}),ye=o("e1bc");Object(ye["a"])("".concat("https://webres.psy-1.com/sgy/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){}});var Ce=o("f753"),ke=o.n(Ce);o("dc72"),n["a"].prototype.WJH=st,n["a"].config.productionTip=!1;var xe=ke.a.create({baseURL:"https://api.psy-1.com"});n["a"].prototype.$axios=xe,new n["a"]({data:function(){return{url:""}},router:ve,store:be,render:function(t){return t(p)}}).$mount("#app")},5758:function(t,e,o){t.exports=o.p+"img/限免-第三期.e2b890ac.png"},5955:function(t,e,o){"use strict";var n=o("23b9"),i=o.n(n);i.a},"5c0b":function(t,e,o){"use strict";var n=o("3673"),i=o.n(n);i.a},"5c64":function(t,e,o){"use strict";var n=o("60c2"),i=o.n(n);i.a},"60c2":function(t,e,o){},6229:function(t,e,o){"use strict";var n=o("e04c"),i=o.n(n);i.a},"636c":function(t,e,o){t.exports=o.p+"img/华为-H5金秋有礼物.3b4016f3.jpg"},"6b7e":function(t,e,o){},"6f0b":function(t,e,o){t.exports=o.p+"img/国庆2.3ae9f4ae.jpg"},7385:function(t,e,o){"use strict";var n=o("6b7e"),i=o.n(n);i.a},"750b":function(t,e,o){"use strict";var n=o("c4e3"),i=o.n(n);i.a},"7e51":function(t,e,o){t.exports=o.p+"img/华为-H5(1).9faae62a.jpg"},"7ece":function(t,e,o){"use strict";var n=o("4645"),i=o.n(n);i.a},"7f5c":function(t,e,o){t.exports=o.p+"img/限免-第四期.c496f762.png"},"831a":function(t,e,o){},"857f":function(t,e,o){"use strict";var n=o("4731"),i=o.n(n);i.a},"867c":function(t,e,o){"use strict";var n=o("ea1e"),i=o.n(n);i.a},9029:function(t,e,o){"use strict";var n=o("3d8f"),i=o.n(n);i.a},9042:function(t,e,o){t.exports=o.p+"img/华为-H5(3).32ba84c1.jpg"},"9d82":function(t,e,o){t.exports=o.p+"img/限免-第二期.a7e7133f.png"},a571:function(t,e,o){t.exports=o.p+"img/国庆1.a30c1558.jpg"},ab7e:function(t,e,o){},b001:function(t,e,o){t.exports=o.p+"img/华为-H5-2019-11-21.4ea7fb7d.jpg"},b4ea:function(t,e,o){"use strict";var n=o("ea52"),i=o.n(n);i.a},bbfe:function(t,e,o){t.exports=o.p+"img/H5嗜睡改善.e9794d37.png"},be19:function(t,e,o){},bef3:function(t,e,o){"use strict";var n=o("1788"),i=o.n(n);i.a},c483:function(t,e,o){t.exports=o.p+"img/矩形@3x.6b3cc47e.png"},c4e3:function(t,e,o){},ca25:function(t,e,o){t.exports=o.p+"img/限免-第五期.21a0020b.png"},d906:function(t,e,o){t.exports=o.p+"img/H5助眠冥想新品.7b30c112.png"},dc72:function(t,e){function o(){var t=document.documentElement.clientWidth,e=document.querySelector("html");e.style.fontSize=t/10+"px"}o(),window.addEventListener("resize",o)},dd6a:function(t,e,o){t.exports=o.p+"img/btn.7296979d.png"},dd7c:function(t,e,o){"use strict";var n=o("831a"),i=o.n(n);i.a},e04c:function(t,e,o){},e15e:function(t,e,o){},e9c0:function(t,e,o){t.exports=o.p+"img/华为活动（中秋返利）-H5(1).304928f1.png"},ea1e:function(t,e,o){},ea52:function(t,e,o){},efdd:function(t,e,o){"use strict";var n=o("06ae"),i=o.n(n);i.a},f9c0:function(t,e,o){"use strict";var n=o("e15e"),i=o.n(n);i.a}});
//# sourceMappingURL=app.b39bc4b3.js.map