(function(e){function t(t){for(var o,i,c=t[0],u=t[1],s=t[2],l=0,d=[];l<c.length;l++)i=c[l],r[i]&&d.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"cee83d88"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=r[e]=[t,o]});t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e),a=function(t){u.onerror=u.onload=null,clearTimeout(s);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}r[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:u})},12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://webres.psy-1.com/sgy/dist/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";var o=n("72de"),r=n.n(o);r.a},"47dc":function(e,t,n){e.exports=n.p+"img/po.e3634eb4.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("5c07"),n("53da"),n("2556"),n("d0f8");var o=n("6e6d"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app-template"},[n("router-view")],1)])},a=[],i=(n("f91a"),n("f10e"),n("ea65"),n("3a23"),n("2f31"),n("cc80"),n("eb12")),c=n("ba94"),u=(n("ac2a"),{data:function(){return{a:"",url:"https://api.debug.psy-1.com"}},methods:{test:function(e){}},mounted:function(){this.test()}}),s=u,l=(n("5c0b"),n("5c64"),n("17cc")),f=Object(l["a"])(s,r,a,!1,null,null,null),d=f.exports,p=n("2832"),v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home",style:e.home_height},[o("img",{staticClass:"ig",attrs:{src:n("47dc")}}),o("div",{staticClass:"open-remeber",on:{click:e.oo}}),o("div",{staticClass:"get-in",on:{click:e.ooo}})])},h=[],m={name:"home",data:function(){return{home_height:0}},components:{},methods:{oo:function(){window.location="https://www.heartide.com/app/redirect?code=10017&goods_id=4"},ooo:function(){window.location="https://www.heartide.com/app/redirect?code=10025&goods_id=16"}},mounted:function(){}},g=m,b=(n("21bb"),Object(l["a"])(g,v,h,!1,null,null,null)),y=b.exports;o["a"].use(p["a"]);var w=new p["a"]({routes:[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),j=n("52c1");o["a"].use(j["a"]);var k=new j["a"].Store({state:{},mutations:{},actions:{}}),O=n("e1bc");Object(O["a"])("".concat("https://webres.psy-1.com/sgy/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var C=n("396f"),_=(n("48fb"),n("5f33"),n("96f8")),x=n.n(_),E=n("77fe"),M=n.n(E),S=n("3f46"),A=n.n(S),P=n("208e"),q=n.n(P),T=function(){function e(){Object(i["a"])(this,e)}return Object(c["a"])(e,null,[{key:"promiseForBoolean",value:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o={};q()(o,n);var r=function(t){n.boolean===!o.boolean&&(clearInterval(e),t())};return t=new A.a(function(t,n){e=setInterval(r.bind(null,t),1e3)}),t}},{key:"getAPIData",value:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=new(new XMLHttpRequest),r="";o.open("GET",e),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&t&&t()},o.setRequestHeader("Content-Type","application/json");var a=!0,i=!1,c=void 0;try{for(var u,s=M()(n);!(a=(u=s.next()).done);a=!0){var l=u.value,f=l.val,d=l.key;r+=d+"="+f+"&"}}catch(p){i=!0,c=p}finally{try{a||null==s.return||s.return()}finally{if(i)throw c}}r.replace(/&$/,""),o.send()}},{key:"randomNum",value:function(e,t){switch(arguments.length){case 1:return x()(Math.random()*e+1,10);case 2:return x()(Math.random()*(t-e+1)+e,10);default:return 0}}},{key:"musicCount",value:function(e){var t=x()(e),n=0,o=0;t>60&&(n=x()(t/60),t=x()(t%60),n>60&&(o=x()(n/60),n=x()(n%60)));var r="";x()(t)<10&&(r="0");var a=r+x()(t)+" ",i="0";return a=i+x()(n)+" : "+a,o>0&&(a=x()(o)+"小时"+a),a}},{key:"dateFormat",value:function(e,t){if(!t||"string"!==typeof t)return console.error("format is undefiend or type is Error"),"";e=e instanceof Date?e:"number"===typeof e||"string"===typeof e?new Date(e):new Date;var n={"y+":e.getFullYear(),"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var o in n)if(new RegExp(o).test(t)){var r=RegExp.lastMatch;t=t.replace(r,n[o]<10?"0"+n[o]:n[o].toString())}return t}},{key:"judgeWeiXin",value:function(){var e=null;return window.navigator.userAgent.toLowerCase().match(/QQ/i)&&(e=window.navigator.userAgent.toLowerCase().match(/QQ/i)[0]),!(!/micromessenger/.test(navigator.userAgent.toLowerCase())&&"qq"!==e)}},{key:"deepCopy",value:function(t){var n=t.constructor===Array?[]:{};for(var o in t)n[o]="object"===Object(C["a"])(t[o])?e.deepCopy(t[o]):t[o];return n}}]),e}();o["a"].prototype.WJH=T,o["a"].config.productionTip=!1,n("dc72"),new o["a"]({router:w,store:k,render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("7508"),r=n.n(o);r.a},"5c64":function(e,t,n){"use strict";var o=n("c657"),r=n.n(o);r.a},"72de":function(e,t,n){},7508:function(e,t,n){},c657:function(e,t,n){},dc72:function(e,t){function n(){var e=document.documentElement.clientWidth,t=document.querySelector("html");t.style.fontSize=e/10+"px"}n(),window.addEventListener("resize",n)}});
//# sourceMappingURL=app.af526a1f.js.map