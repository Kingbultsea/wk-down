(function(t){function e(e){for(var i,n,c=e[0],r=e[1],l=e[2],p=0,h=[];p<c.length;p++)n=c[p],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&h.push(a[n][0]),a[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],i=!0,c=1;c<o.length;c++){var r=o[c];0!==a[r]&&(i=!1)}i&&(s.splice(e--,1),t=n(n.s=o[0]))}return t}var i={},a={app:0},s=[];function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=i,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://webres.psy-1.com/sgy/dist/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"02e9":function(t,e,o){},"06ae":function(t,e,o){},"0948":function(t,e,o){t.exports=o.p+"img/H5限时免费.5f9ac671.jpg"},1788:function(t,e,o){},"21bb":function(t,e,o){"use strict";var i=o("02e9"),a=o.n(i);a.a},"25e2":function(t,e,o){"use strict";var i=o("3c47"),a=o.n(i);a.a},"2cef":function(t,e,o){t.exports=o.p+"img/logo@3x.cbde81c5.png"},3673:function(t,e,o){},"36c5":function(t,e,o){"use strict";var i=o("be19"),a=o.n(i);a.a},"3c47":function(t,e,o){},4645:function(t,e,o){},"47dc":function(t,e,o){t.exports=o.p+"img/po.951c5dec.jpg"},5313:function(t,e,o){t.exports=o.p+"img/H5考试专题(1).6b8afd11.png"},"56d7":function(t,e,o){"use strict";o.r(e);var i=o("6e6d"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"app-template"},[o("router-view")],1)])},s=[];class n{constructor({url:t,title:e,desc:o,pic:i,dataUrl:a=null}){console.log("??"),this.url=t,this.title=e,this.desc=o,this.pic=i,this.dataUrl=a}appShare(){const t={type1:{title:this.title,desc:this.desc,link:this.url,imgUrl:this.pic,shareType:1},type2:{title:this.title,link:this.url,imgUrl:this.pic,shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=JSON.stringify(t),document.getElementById("share2").value=JSON.stringify(t.type1),document.getElementById("share3").value=JSON.stringify(t.type2)}callAppRouter(t,e={},o){let i={Method:t,Data:e},a=`CB_${Date.now()}_${Math.ceil(10*Math.random())}`;i=JSON.stringify(i),Xinchao.Web[a]=(t,e)=>{o&&o(t,e),delete Xinchao.Web[a]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:i,cbName:a}):XinchaoApp.callRouter(i,a)}appGetName(){this.callAppRouter("isLogin",{},(t,e)=>{"已登录"===JSON.parse(e).msg&&this.callAppRouter("Login",{},(t,e)=>{try{const t=JSON.parse(e);localStorage.setItem("name",t.data.name),console.log(t.data.name)}catch(o){localStorage.setItem("name",e.data.name),console.log(e.data.name)}})})}weiXinShare(){const t=this,e={title:t.title,desc:t.desc,link:t.url,img_url:t.pic+"?imageView&thumbnail=400x0&quality=75&tostatic=0"};this.dataUrl,wx.ready(function(t){wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareQZone(e),wx.onMenuShareTimeline(e),wx.error(t=>{})})}weiXinSDK(t,e){const o=new XMLHttpRequest,i=this;o.open("GET",t+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),o.onreadystatechange=function(){if(4===o.readyState&&200===o.status){console.log("sdk ok");let a=JSON.parse(o.response);console.log(a.data.wechat_config),a.data.wechat_config.debug=!1,e&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),e&&!localStorage.getItem("name")||(wx.config(a.data.wechat_config),i.weiXinShare(),i.weiXinGetName(t))}},o.send()}weatherCode(){const t=/code=(.+?)&/,e=window.location.href.match(t);return sessionStorage.setItem("code",e),e||!1}weiXinGetName(t){if(!localStorage.getItem("name")){console.log(e+"asd你想要的"+sessionStorage.getItem("code"));const e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(t+"/web/v1/wechat/user",{code:e},t=>{console.log("jq都不行？"),console.log(t.data.nickname),localStorage.setItem("name",t.data.nickname)})}}weiXinInit(t){const e=this.weatherCode();e?this.weiXinSDK(t,!1):this.weiXinSDK(t,!0)}appInit(){this.appShare(),this.appGetName()}rawWeiXinShare(t){const e=new XMLHttpRequest,o=this;e.open("GET",t+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){console.log("sdk ok");let t=JSON.parse(e.response);console.log(t.data.wechat_config),t.data.wechat_config.debug=!1,wx.config(t.data.wechat_config),o.weiXinShare()}},e.send()}rawGetName(){if(!localStorage.getItem("name")){console.log(t+"asd你想要的"+sessionStorage.getItem("code"));const t=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(url+"/web/v1/wechat/user",{code:t},t=>{console.log("jq都不行？"),console.log(t.data.nickname),localStorage.setItem("name",t.data.nickname)})}}}o("157a");var c={data(){return{a:"",url:"https://api.psy-1.com"}},methods:{test(t){const e=new n({pic:"http://wx1.sinaimg.cn/large/006Zdy2vgy1g0fd9no3cyj305f05fmwz.jpg",url:"http://psy-1.com/",title:"小睡眠",desc:"给你一个婴儿般的好睡眠"});e.appShare(),e.rawWeiXinShare(this.url)}},mounted(){console.log(document.location),this.test()}},r=c,l=(o("5c0b"),o("5c64"),o("6691")),d=Object(l["a"])(r,a,s,!1,null,null,null),p=d.exports,h=o("c478"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("47dc")}}),i("div",{staticClass:"open-remeber",on:{click:t.oo}}),i("div",{staticClass:"get-in",on:{click:t.ooo}})])},w=[],m={name:"home",data(){return{home_height:0}},components:{},methods:{oo(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted(){document.title="小睡眠&华为返利活动"}},g=m,f=(o("21bb"),Object(l["a"])(g,u,w,!1,null,null,null)),v=f.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xm",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("0948")}}),i("div",{staticClass:"open-remeber",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=521'"}}),i("div",{staticClass:"get-in",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=522'"}}),i("div",{staticClass:"t",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=523'"}}),i("div",{staticClass:"f",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=518'"}})])},_=[],y={name:"xm",data(){return{home_height:0}},components:{},methods:{oo(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted(){document.title="小睡眠每周限免活动"}},C=y,k=(o("25e2"),Object(l["a"])(C,b,_,!1,null,null,null)),x=k.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xm",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("9d82")}}),i("div",{staticClass:"open-remeber",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=549'"}}),i("div",{staticClass:"get-in",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=551'"}}),i("div",{staticClass:"t",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=552'"}}),i("div",{staticClass:"f",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=518'"}})])},M=[],j={name:"xm",data(){return{home_height:0}},components:{},methods:{oo(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted(){document.title="小睡眠每周限免活动"}},I=j,O=(o("bef3"),Object(l["a"])(I,S,M,!1,null,null,null)),R=O.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xm",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("5758")}}),i("div",{staticClass:"open-remeber",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=561'"}}),i("div",{staticClass:"get-in",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=566'"}}),i("div",{staticClass:"t",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=563'"}}),i("div",{staticClass:"f",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=558'"}})])},X=[],P={name:"xm",data(){return{home_height:0}},components:{},methods:{oo(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted(){document.title="小睡眠每周限免活动"}},E=P,N=(o("7ece"),Object(l["a"])(E,A,X,!1,null,null,null)),D=N.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xm",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("7f5c")}}),i("div",{staticClass:"open-remeber",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=569'"}}),i("div",{staticClass:"get-in",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=568'"}}),i("div",{staticClass:"t",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=567'"}}),i("div",{staticClass:"f",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=558'"}})])},T=[],q={name:"xm",data(){return{home_height:0}},components:{},methods:{oo(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted(){document.title="小睡眠每周限免活动"}},H=q,J=(o("b4ea"),Object(l["a"])(H,L,T,!1,null,null,null)),W=J.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"xm",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("ca25")}}),i("div",{staticClass:"open-remeber",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=580'"}}),i("div",{staticClass:"get-in",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=581'"}}),i("div",{staticClass:"t",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=582'"}}),i("div",{staticClass:"f",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=558'"}})])},B=[],U={name:"xm",data(){return{home_height:0}},components:{},methods:{oo(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted(){document.title="小睡眠每周限免活动"}},F=U,Q=(o("6229"),Object(l["a"])(F,z,B,!1,null,null,null)),G=Q.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"smbwz",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("5313")}}),i("div",{staticClass:"a a1",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=527'"}}),i("div",{staticClass:"a a2",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=528'"}}),i("div",{staticClass:"a a3",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=529'"}}),i("div",{staticClass:"a a4",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=530'"}}),i("div",{staticClass:"a a5",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=531'"}}),i("div",{staticClass:"a a6",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=538'"}}),i("div",{staticClass:"a a7",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=532'"}})])},Z=[],V={name:"smbwj",data(){return{home_height:0}},components:{},methods:{oo(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted(){document.title="小睡眠考生睡眠专题活动"}},Y=V,tt=(o("867c"),Object(l["a"])(Y,K,Z,!1,null,null,null)),et=tt.exports,ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"auto-phase",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("c483")}}),i("div",{staticClass:"img-title"},[i("div",[t._v(t._s(this.startTime)+"-"+t._s(this.endTime))])]),0!==t.allPrice?i("div",{staticClass:"price"},[t._v("本期限免金额"+t._s(t.allPrice)+"元")]):t._e(),t._l(t.list,function(e,o){return i("div",{key:o,staticClass:"template"},[i("div",{staticClass:"title"},[t._v(t._s(e.detail.musicdesc))]),i("div",{staticClass:"center"},[i("img",{staticClass:"c-img",attrs:{src:e.cover_free}}),i("div",{staticClass:"desc",domProps:{innerHTML:t._s(t.parseBR(e.detail.resdesc))}})]),i("div",{staticClass:"button",on:{click:function(o){return t.toLink(e.detail.category_id,e.id)}}},[i("div",{staticClass:"price"},[t._v("原价"+t._s(e.detail.price)+"元")])])])}),t._m(0),i("img",{staticClass:"logo",attrs:{src:o("2cef")}}),i("img",{staticClass:"btn",attrs:{src:o("dd6a")},on:{click:t.toMember}})],2)},it=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"desc"},[t._v("\n    启禀陛下娘娘"),o("br"),t._v("限免内容每周更换"),o("br"),t._v("开通会员无限畅享\n  ")])}];class at{static promiseForBoolean(t={}){let e,o,i={};Object.assign(i,t);const a=o=>{t.boolean===!i.boolean&&(clearInterval(e),o())};return o=new Promise((t,o)=>{e=setInterval(a.bind(null,t),1e3)}),o}static getAPIData(t,e={},o,i={}){const a=new(new XMLHttpRequest);let s="";a.open("GET",t),a.onreadystatechange=function(){4===this.readyState&&200===this.status&&o&&o()},a.setRequestHeader("Content-Type","application/json");for(let{val:n,key:c}of i)s+=c+"="+n+"&";s.replace(/&$/,""),a.send()}static randomNum(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}static musicCount(t){var e=parseInt(t),o=0,i=0;e>60&&(o=parseInt(e/60),e=parseInt(e%60),o>60&&(i=parseInt(o/60),o=parseInt(o%60)));let a="";parseInt(e)<10&&(a="0");var s=a+parseInt(e)+" ";let n="0";return s=n+parseInt(o)+" : "+s,i>0&&(s=parseInt(i)+"小时"+s),s}static dateFormat(t,e){if(!e||"string"!==typeof e)return console.error("format is undefiend or type is Error"),"";t=t instanceof Date?t:"number"===typeof t||"string"===typeof t?new Date(t):new Date;let o={"y+":t.getFullYear(),"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(let i in o)if(new RegExp(i).test(e)){let t=RegExp.lastMatch;e=e.replace(t,o[i]<10?"0"+o[i]:o[i].toString())}return e}static judgeWeiXin(){let t=null;return window.navigator.userAgent.toLowerCase().match(/QQ/i)&&(t=window.navigator.userAgent.toLowerCase().match(/QQ/i)[0]),!(!/micromessenger/.test(navigator.userAgent.toLowerCase())&&"qq"!==t)}static deepCopy(t){let e=t.constructor===Array?[]:{};for(let o in t)e[o]="object"===typeof t[o]?at.deepCopy(t[o]):t[o];return e}}var st={name:"home",data(){return{allPrice:0,home_height:0,timeDate:"",list:[],startTime:"",endTime:""}},components:{},methods:{toMember(){let t={code:10017};this.callAppRouter("Redirect",t,function(t,e){})},callAppRouter(t,e={},o){let i={Method:t,Data:e},a=`CB_${Date.now()}_${Math.ceil(10*Math.random())}`;i=JSON.stringify(i),Xinchao.Web[a]=(t,e)=>{o&&o(t,e),delete Xinchao.Web[a]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:i,cbName:a}):XinchaoApp.callRouter(i,a)},parseQuery(t){let e={},o=/[?&]([^=&#]+)=([^&#]*)/g,i=t.match(o);if(i)for(let a in i){let t=i[a].split("="),o=t[0].substr(1),s=t[1];e[o]?e[o]=[].concat(e[o],s):e[o]=s}return e},toLink(t,e){let o={code:1052,category_id:t,voice_id:e};this.callAppRouter("Redirect",o,function(t,e){})},parseBR(t){return t.replace(/\n/g,"<br/>")},getData(){const t=this.parseQuery(document.URL);this.$axios.get("/web/v1/cosleep/week/free",{params:{free_id:t.free_id}}).then(t=>{if(5!==parseInt(t.data.status)){const e=t.data.data;this.startTime=at.dateFormat(+(e.free_start+"000"),"yyyy年MM月dd日"),this.endTime=at.dateFormat(+(e.free_end+"000"),"MM月dd日"),this.list=e.free_list;for(let t in this.list)this.allPrice+=parseFloat(this.list[t].detail.price);this.allPrice=this.allPrice.toFixed(2),console.log(t.data.data)}})}},mounted(){document.title="小睡眠每周限免活动",this.getData()}},nt=st,ct=(o("36c5"),Object(l["a"])(nt,ot,it,!1,null,null,null)),rt=ct.exports,lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"smbwzf",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("bbfe")}}),i("div",{staticClass:"a a1",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=575'"}}),i("div",{staticClass:"a a2",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=576'"}}),i("div",{staticClass:"a a3",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=577'"}}),i("div",{staticClass:"a a4",attrs:{onclick:"window.location = 'https://www.heartide.com/statics/redirect?url=574'"}})])},dt=[],pt={name:"smbwj",data(){return{home_height:0}},components:{},methods:{oo(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted(){document.title="嗜睡改善"}},ht=pt,ut=(o("efdd"),Object(l["a"])(ht,lt,dt,!1,null,"2da5f5c8",null)),wt=ut.exports,mt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"smbwz",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("d906")}}),i("div",{staticClass:"a a1",on:{click:function(e){return t.toLink(1,10150)}}}),i("div",{staticClass:"a a2",on:{click:function(e){return t.toLink(1,10151)}}}),i("div",{staticClass:"a a3",on:{click:function(e){return t.toLink(1,10153)}}}),i("div",{staticClass:"a a4",on:{click:t.toMember}})])},gt=[],ft={name:"smbwj",data(){return{home_height:0}},components:{},methods:{callAppRouter(t,e={},o){let i={Method:t,Data:e},a=`CB_${Date.now()}_${Math.ceil(10*Math.random())}`;i=JSON.stringify(i),Xinchao.Web[a]=(t,e)=>{o&&o(t,e),delete Xinchao.Web[a]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:i,cbName:a}):XinchaoApp.callRouter(i,a)},toLink(t,e){let o={code:1052,category_id:t,voice_id:e};this.callAppRouter("Redirect",o,function(t,e){})},oo(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"},toMember(){let t={code:10017,goods_id:5};this.callAppRouter("Redirect",t,function(t,e){})}},mounted(){document.title="小睡眠-助眠冥想新品专题"}},vt=ft,bt=(o("dd7c"),Object(l["a"])(vt,mt,gt,!1,null,null,null)),_t=bt.exports,yt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"smbwz",style:t.home_height},[i("img",{staticClass:"ig",attrs:{src:o("7e51")}}),i("div",{staticClass:"a a1",on:{click:t.oo}})])},Ct=[],kt={name:"smbwj",data(){return{home_height:0}},components:{},methods:{callAppRouter(t,e={},o){let i={Method:t,Data:e},a=`CB_${Date.now()}_${Math.ceil(10*Math.random())}`;i=JSON.stringify(i),Xinchao.Web[a]=(t,e)=>{o&&o(t,e),delete Xinchao.Web[a]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:i,cbName:a}):XinchaoApp.callRouter(i,a)},oo(){_hmt.push(["_trackEvent","nav","click","click","558"]);let t={code:10017,goods_id:5};this.callAppRouter("Redirect",t,function(t,e){})},ooo(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted(){document.title="小睡眠&华为专属优惠活动"}},xt=kt,St=(o("750b"),Object(l["a"])(xt,yt,Ct,!1,null,null,null)),Mt=St.exports;i["a"].use(h["a"]);var jt=new h["a"]({routes:[{path:"/atp",name:"home",component:v},{path:"/xm",name:"xm",component:x},{path:"/xm2",name:"xm2",component:R},{path:"/xm3",name:"xm3",component:D},{path:"/xm4",name:"xm4",component:W},{path:"/xm5",name:"xm5",component:G},{path:"/smbwz",name:"smbwz",component:et},{path:"/",name:"atp",component:rt},{path:"/smc",name:"smc",component:wt},{path:"/zmgs",name:"zmgs",component:_t},{path:"/hwc",name:"sdas",component:Mt}]}),It=o("591a");i["a"].use(It["a"]);var Ot=new It["a"].Store({state:{},mutations:{},actions:{}}),Rt=o("e1bc");Object(Rt["a"])("https://webres.psy-1.com/sgy/dist/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached(){console.log("Content has been cached for offline use.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){}});var At=o("f753"),Xt=o.n(At);o("dc72"),i["a"].prototype.WJH=at,i["a"].config.productionTip=!1;const Pt=Xt.a.create({baseURL:"https://api.psy-1.com"});i["a"].prototype.$axios=Pt,new i["a"]({data(){return{url:""}},router:jt,store:Ot,render:t=>t(p)}).$mount("#app")},5758:function(t,e,o){t.exports=o.p+"img/限免-第三期.e2b890ac.png"},"5c0b":function(t,e,o){"use strict";var i=o("3673"),a=o.n(i);a.a},"5c64":function(t,e,o){"use strict";var i=o("60c2"),a=o.n(i);a.a},"60c2":function(t,e,o){},6229:function(t,e,o){"use strict";var i=o("e04c"),a=o.n(i);a.a},"750b":function(t,e,o){"use strict";var i=o("c4e3"),a=o.n(i);a.a},"7e51":function(t,e,o){t.exports=o.p+"img/华为-H5(1).9faae62a.jpg"},"7ece":function(t,e,o){"use strict";var i=o("4645"),a=o.n(i);a.a},"7f5c":function(t,e,o){t.exports=o.p+"img/限免-第四期.c496f762.png"},"831a":function(t,e,o){},"867c":function(t,e,o){"use strict";var i=o("ea1e"),a=o.n(i);a.a},"9d82":function(t,e,o){t.exports=o.p+"img/限免-第二期.a7e7133f.png"},b4ea:function(t,e,o){"use strict";var i=o("ea52"),a=o.n(i);a.a},bbfe:function(t,e,o){t.exports=o.p+"img/H5嗜睡改善.e9794d37.png"},be19:function(t,e,o){},bef3:function(t,e,o){"use strict";var i=o("1788"),a=o.n(i);a.a},c483:function(t,e,o){t.exports=o.p+"img/矩形@3x.6b3cc47e.png"},c4e3:function(t,e,o){},ca25:function(t,e,o){t.exports=o.p+"img/限免-第五期.21a0020b.png"},d906:function(t,e,o){t.exports=o.p+"img/H5助眠冥想新品.7b30c112.png"},dc72:function(t,e){function o(){var t=document.documentElement.clientWidth,e=document.querySelector("html");e.style.fontSize=t/10+"px"}o(),window.addEventListener("resize",o)},dd6a:function(t,e,o){t.exports=o.p+"img/btn.7296979d.png"},dd7c:function(t,e,o){"use strict";var i=o("831a"),a=o.n(i);a.a},e04c:function(t,e,o){},ea1e:function(t,e,o){},ea52:function(t,e,o){},efdd:function(t,e,o){"use strict";var i=o("06ae"),a=o.n(i);a.a}});
//# sourceMappingURL=app.624aa3be.js.map