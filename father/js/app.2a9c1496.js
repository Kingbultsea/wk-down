(function(t){function e(e){for(var a,o,r=e[0],c=e[1],u=e[2],l=0,p=[];l<r.length;l++)o=r[l],n[o]&&p.push(n[o][0]),n[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b8cabc56"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=n[t]=[e,a]});e.push(s[2]=a);var i,c=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.src=o(t),i=function(e){u.onerror=u.onload=null,clearTimeout(l);var s=n[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,s[1](o)}n[t]=void 0}};var l=setTimeout(function(){i({type:"timeout",target:u})},12e4);u.onerror=u.onload=i,c.appendChild(u)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=u;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"04eb":function(t,e,s){},"13c7":function(t,e,s){},"1c0c":function(t,e,s){t.exports=s.p+"img/f-day_btn.fff5bd90.png"},"2c06":function(t,e,s){t.exports=s.p+"img/F-day_btn_music-on.7b65a48a.png"},"2c1a":function(t,e,s){t.exports=s.p+"img/f-day_img_openning-adv.07cf6afa.png"},3712:function(t,e,s){},4171:function(t,e,s){},"43f5":function(t,e,s){t.exports=s.p+"img/F-day_btn_music-off.e96c8c05.png"},"4a2e":function(t,e,s){t.exports=s.p+"img/f-day_img_openning-bigtitle.fd0de8af.png"},"51eb":function(t,e,s){t.exports=s.p+"img/f-day_img_transform.f85ebdeb.png"},"522c":function(t,e,s){},"524c":function(t,e,s){"use strict";var a=s("8f77"),n=s.n(a);n.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("music",{staticClass:"music",attrs:{musicPath:t.musicPath,offPath:t.offPath,onPath:t.onPath}}),s("router-view")],1)},i=[],o=(s("28a5"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{ref:"audio",staticClass:"music",attrs:{src:t.tgImg},on:{click:t.musicPlay}}),s("audio",{attrs:{id:"myaudio",controls:"",hidden:""}},[s("source",{attrs:{src:t.musicPath,type:"audio/mpeg"}})])])}),r=[],c={name:"music",props:["onPath","offPath","musicPath"],data:function(){return{toggle:!1,musicdom:document.getElementById("myaudio")}},computed:{tgImg:function(){var t=this.toggle;return t=this.toggle?this.$props.offPath:this.$props.onPath,t}},methods:{musicPlay:function(){this.dontBorderMeFUCKYOU();var t=document.getElementById("myaudio");t.paused?(t.play(),document.querySelector(".music").classList.add("rotate"),this.toggle=!0):(t.pause(),document.querySelector(".music").remove("rotate"),this.toggle=!1)},initMusic:function(){var t=this;this.$store.getters.isWeiXin?document.addEventListener("WeixinJSBridgeReady",function(){console.log("浏览器非苹果播放"),t.musicPlay()},!1):this.$store.getters.isApp&&this.musicPlay()},dontBorderMeFUCKYOU:function(){localStorage.setItem("fuckyou","1")}},mounted:function(){this.initMusic(),localStorage.removeItem("fuckyou")}},u=c,l=(s("612f"),s("8f19"),s("2877")),h=Object(l["a"])(u,o,r,!1,null,"5604623c",null);h.options.__file="music.vue";var p=h.exports,d=(s("a481"),s("4917"),s("7f7f"),s("c665")),m=s("aa9a"),f=function(){function t(e){var s=e.url,a=e.title,n=e.desc,i=e.pic;Object(d["a"])(this,t),console.log("??"),this.url=s,this.title=a,this.desc=n,this.pic=i}return Object(m["a"])(t,[{key:"appShare",value:function(){var t={type1:{title:this.title,desc:this.desc,link:this.url,imgUrl:this.pic,shareType:1},type2:{title:this.title,link:this.url,imgUrl:this.pic,shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=JSON.stringify(t),document.getElementById("share2").value=JSON.stringify(t.type1),document.getElementById("share3").value=JSON.stringify(t.type2)}},{key:"callAppRouter",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0,a={Method:t,Data:e},n="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));a=JSON.stringify(a),Xinchao.Web[n]=function(t,e){s&&s(t,e),delete Xinchao.Web[n]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:a,cbName:n}):XinchaoApp.callRouter(a,n)}},{key:"appGetName",value:function(){var t=this;this.callAppRouter("isLogin",{},function(e,s){"已登录"===JSON.parse(s).msg&&t.callAppRouter("Login",{},function(t,e){try{var s=JSON.parse(e);localStorage.setItem("name",s.data.name),console.log(s.data.name)}catch(t){localStorage.setItem("name",e.data.name),console.log(e.data.name)}})})}},{key:"weiXinShare",value:function(){var t=this,e={title:t.title,desc:t.desc,link:t.url,imgUrl:t.pic};wx.ready(function(t){wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareQZone(e),wx.onMenuShareTimeline(e),wx.error(function(t){alert(t)})})}},{key:"weiXinSDK",value:function(t,e){var s=new XMLHttpRequest,a=this;s.open("GET",t+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),s.onreadystatechange=function(){if(4===s.readyState&&200===s.status){console.log("sdk ok");var n=JSON.parse(s.response);console.log(n.data.wechat_config),n.data.wechat_config.debug=!1,e&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),e&&!localStorage.getItem("name")||(wx.config(n.data.wechat_config),a.weiXinShare(),a.weiXinGetName(t))}},s.send()}},{key:"weatherCode",value:function(){var t=/code=(.+?)&/,e=window.location.href.match(t);return e||!1}},{key:"weiXinGetName",value:function(t){if(!localStorage.getItem("name")){var e=sessionStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");$.get(t+"/web/v1/wechat/user",{code:e},function(t){console.log("jq都不行？"),console.log(t.data.nickname),localStorage.setItem("name",t.data.nickname)})}}},{key:"weiXinInit",value:function(t){var e=this.weatherCode();e?this.weiXinSDK(t,!1):this.weiXinSDK(t,!0)}},{key:"appInit",value:function(){this.appShare(),this.appGetName()}}]),t}();s("ea57");var g={data:function(){return{musicPath:s("aab9"),offPath:s("2c06"),onPath:s("43f5")}},components:{music:p},methods:{fuck:function(){this.$children[0].musicPlay()}},mounted:function(){var t=new f({pic:"https://webres.psy-1.com/sgy/dist/static/img/f-day_img_openning-daddy@3x.1695a13.png",url:window.location.href.split("#")[0],title:"测过才知道你坑不坑爹！",desc:"快来测一测你的坑爹指数！"});this.$store.getters.isApp&&t.appInit(),this.$store.getters.isWeiXin&&t.weiXinInit("https://api.debug.psy-1.com")}},v=g,b=(s("59a3"),s("b0a0"),Object(l["a"])(v,n,i,!1,null,"56d8c651",null));b.options.__file="App.vue";var w=b.exports,y=s("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{staticClass:"logo",attrs:{src:s("cdf8")}}),t._m(0),a("Button",{staticClass:"button",nativeOn:{click:function(e){return t.toPlayPage(e)}}},[t._v("开始测试")]),t._m(1)],1)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("img",{staticClass:"title-img",attrs:{src:s("4a2e")}}),a("img",{staticClass:"center-img",attrs:{src:s("6fbd")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{id:"dl",target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[a("img",{staticClass:"bottom-download",attrs:{src:s("2c1a")}})])}],I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._m(0),s("h3",[t._v("Installed CLI Plugins")]),t._m(1),s("h3",[t._v("Essential Links")]),t._m(2),s("h3",[t._v("Ecosystem")]),t._m(3)])},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("\n    For guide and recipes on how to configure / customize this project,"),s("br"),t._v("\n    check out the\n    "),s("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),s("li",[s("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),s("li",[s("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),s("li",[s("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],S={name:"HelloWorld",props:{msg:String}},P=S,A=(s("524c"),Object(l["a"])(P,I,x,!1,null,"b6a59770",null));A.options.__file="HelloWorld.vue";var j=A.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button"},[a("img",{staticClass:"top",attrs:{src:s("1c0c")}}),a("p",{staticClass:"bottom"},[t._t("default")],2)])},O=[],E={name:"button"},L=E,T=(s("d4d1"),Object(l["a"])(L,B,O,!1,null,"2e9997ca",null));T.options.__file="button.vue";var D=T.exports,M={name:"home",components:{HelloWorld:j,Button:D},methods:{toPlayPage:function(){document.getElementById("myaudio").paused&&!localStorage.getItem("fuckyou")&&this.$parent.fuck(),localStorage.getItem("name")?this.$router.push({path:"/playpage"}):this.$router.push({path:"/input"})}},mounted:function(){this.$store.getters.isApp&&(document.querySelector("#di").style.display="none")}},N=M,X=(s("6431"),Object(l["a"])(N,k,C,!1,null,"2600c8be",null));X.options.__file="Home.vue";var q=X.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playpage"},[a("div",{staticClass:"top"},[a("img",{staticClass:"bg",attrs:{src:s("ea3d")}}),a("p",{staticClass:"desc"},[t._v(t._s(t.desc))])]),a("div",{staticClass:"play moveBottom",attrs:{id:"wan"},on:{click:t.begin}},[a("transition-group",{attrs:{name:"slide-fade"}},t._l(t.timu,function(e,s){return a("div",{key:s,staticClass:"cont"},[a("span",[t._v(t._s(e))])])}))],1),a("p",{staticClass:"bottom"},[t._v("·"+t._s(t.show_page)+"/7·")]),a("div",{attrs:{id:"b"}})])},U=[],H=(s("6762"),s("2fdb"),s("ac6a"),s("8615"),s("7514"),{name:"PlayPage",data:function(){return{desc:"1.你是爸爸还是儿子？",timu:["A.乖儿子","B.小公主"],page:1,show_page:1,man_timu_list:["2.小时候哪件事情，让老爸最生气！","3.长大之后，最让老爸操心的事情是？","4.你印象中，被揍得最惨的事情是？","5.把老爸坑得最惨的一次是？","6.你觉得自己最擅长的科目是？","7.你会选哪种游戏，和老爸互动？"],man:[{0:"A.我是老实人，老爸从没生气。",5:"B.欺负女同学，被老师罚留堂。",25:"C.偷钱买游戏机，被老爸发现。",15:"D.青春期叛逆，谈恋爱被发现。"},{1:"A.学习成绩差",5:"B.工作不稳定",20:"C.没恋爱/没结婚",30:"D.没钱买房结婚"},{0:"A.作业不会做",10:"B.和同学打架",25:"C.不孝敬长辈",6:"D.去黑网吧玩"},{40:"A.帮妈妈找到老爸的私房钱",5:"B.让长辈知道自己被爸爸打",10:"C.把爸爸做的坏事告诉妈妈",20:"D.外人面前拆穿爸爸的谎话"},{1:"A.语文",10:"B.数学",5:"C.英语",20:"D.理综"},{20:"A.手游：吃鸡/王者荣耀",10:"B.互动：打麻将/喝酒猜码",5:"C.打牌：斗地主/争上游",1:"D.下棋：象棋/围棋"}],woman_timu_list:["2.提到作业/项目，你第一反应是？","3.和长辈吃饭，你会？","4.印象中，爸爸更像？","5.未来带男朋友回家，你觉得爸爸会？","6.你希望哪个角色做你老爸？","7.爸爸批评你的时候，你内心是？"],woman:[{10:"A.会害怕：惨了，肯定不会写！",25:"B.会愤怒：别和我谈作业/项目！",0:"C.很兴奋：终于有机会大显身手了！",15:"D.不情愿：不是吧，又有作业/项目！"},{15:"A.肯定是先拍照，发朋友圈！",0:"B.为在场的每个人倒上饮料。",5:"C.听长辈的安排，当透明人。",30:"D.经常迟到，长辈也习惯了。"},{3:"A.老师",0:"B.朋友",5:"C.超人",20:"D.提款机"},{5:"A.虽然话不多，但会默默观察男友。",10:"B.必须喝两杯，在酒桌上侃侃而谈。",0:"C.假装很凶悍，害怕以后你被欺负。",15:"D.非常的激动，感谢终于有人要你。"},{10:"A.Superman",5:"B.大白",0:"C.都不如自己的老爸",25:"D.夜礼服假面"},{5:"A.芝麻蒜皮的事，又开始高谈阔论了！",10:"B.左耳进右耳出，继续做自己的主人！",20:"C.找准时机争论，充分表达自己想法！",0:"D虚心接受批评，自我检讨不足之处！"}],cont_timu:[],cont_desc:[],score:0,items:[1,2,3,4]}},methods:{test:function(){var t=this;this.timu.pop(),0 in this.timu||setTimeout(function(){var e=[],s=[];Object.values(t.cont_timu[t.page-2]).find(function(a){a.split("").includes("A")?(e[0]=a,s[0]=_.findKey(t.cont_timu[t.page-2],function(t){return t==a})):a.split("").includes("B")?(e[1]=a,s[1]=_.findKey(t.cont_timu[t.page-2],function(t){return t==a})):a.split("").includes("C")?(e[2]=a,s[2]=_.findKey(t.cont_timu[t.page-2],function(t){return t==a})):a.split("").includes("D")&&(e[3]=a,s[3]=_.findKey(t.cont_timu[t.page-2],function(t){return t==a}))}),console.log(s),console.log("上面的事分数"),t.timu=e,t.desc=t.cont_desc[t.page-2],console.log("你麻麻？"),setTimeout(function(){for(var t=0;t<4;t++)document.querySelectorAll(".cont")[t].setAttribute("score",s[t]),console.log("sb?")},500)},1500)},next:function(t){var e=this;t.target.firstChild.firstChild?"cont"==t.target.classList[0]&&(setTimeout(function(){e.show_page+=1},2200),console.log(t.target),t.target.classList.add("bg-change"),t.target.getAttribute("score")&&(console.log(t.target.getAttribute("score")+"分数！"),this.score+=parseInt(t.target.getAttribute("score"))),this.fade()):(setTimeout(function(){e.show_page+=1},2200),console.log(t.target.parentNode),t.target.parentNode.classList.add("bg-change"),t.target.parentNode.getAttribute("score")&&(console.log(t.target.parentNode.getAttribute("score")+"分数！"),this.score+=parseInt(t.target.parentNode.getAttribute("score"))),this.fade())},fade:function(){var t=this,e=0,s=setInterval(function(){t.$nextTick(function(){t.test(),e+=1,4===e&&clearInterval(s)})},200)},begin:function(t){var e=this;t.preventDefault(),this.$nextTick(function(){e.debounce(t,e)})},sexChange:function(t){"A.乖儿子"==t?(localStorage.setItem("sex","man"),this.cont_desc=this.man_timu_list,this.cont_timu=this.man):(localStorage.setItem("sex","woman"),this.cont_desc=this.woman_timu_list,this.cont_timu=this.woman)},debounce:_.debounce(function(t,e){1 in document.querySelector("#wan").classList?(t.target.firstChild.firstChild?"cont"==t.target.classList[0]&&(console.log(t.target.firstChild.firstChild+"asdasdasdasdads"),e.sexChange(t.target.firstChild.innerHTML)):(console.log(t.target.innerHTML),e.sexChange(t.target.innerHTML)),setTimeout(function(){document.querySelector("#wan").classList.remove("moveBottom")},2e3),e.$data.page+=1,e.next(t)):(8!=e.page&&(e.page+=1,e.next(t)),8==e.page&&e.$nextTick(function(){console.log(e.score+"我特么是分数啊");var t=e.score;localStorage.setItem("score",t),setTimeout(function(){e.$router.push({path:"/result"})},700)}))},2300,{leading:!0})}}),K=H,R=(s("74ea"),s("9013"),Object(l["a"])(K,W,U,!1,null,"fa1f17c4",null));R.options.__file="PlayPage.vue";var J=R.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticClass:"input"},[s("p",{staticStyle:{"font-weight":"600"}},[t._v("输入昵称:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{maxlength:"8",limit:"8"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),s("Button",{staticClass:"button",nativeOn:{click:function(e){return t.submit(e)}}},[t._v("开始测试")])],1)},G=[],z={name:"inputname",data:function(){return{name:""}},methods:{submit:function(){this.name||(this.name="无名同学"),this.name&&(localStorage.setItem("name",this.name),this.$router.push({path:"/playpage"}))}},components:{Button:D}},V=z,Q=(s("8e7a"),Object(l["a"])(V,F,G,!1,null,"5e184e92",null));Q.options.__file="input.vue";var Y=Q.exports,Z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"result"},[a("div",{staticClass:"top"},[a("div",{attrs:{id:"canvas"}},[a("img",{staticClass:"title",attrs:{src:s("5b5c")}}),a("div",{staticClass:"center",style:{backgroundColor:t.rgba}},[a("img",{staticClass:"cn",attrs:{src:s("6728")}}),a("div",{staticClass:"miaoshu"},[a("p",{staticClass:"name"},[t._v(t._s(t.name))]),a("div",{staticClass:"fenshu-outer"},[t._v("坑爹指数:"),a("span",{staticClass:"fenshu"},[t._v(t._s(t.score))])]),a("div",[t._v("坑爹段位:"),a("p",{staticClass:"dw"},[t._v(t._s(t.dw))])])])]),a("div",{staticClass:"by"},[t._v(t._s(t.by))]),a("div",{staticClass:"wa"},[t._v(t._s(t.wa))]),t._m(0)])]),a("p",{staticClass:"c"},[t._v("*长按保存*")]),a("Button",{staticClass:"button",nativeOn:{click:function(e){return t.downLoadPage(e)}}},[t._v("我为爸爸打CALL")])],1)},tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bottom-desc"},[a("img",{staticClass:"left",attrs:{src:s("cdf8")}}),a("img",{staticClass:"right",attrs:{src:s("aa01")}}),a("span",{staticClass:"sentance"},[t._v("长按测试")])])}],et=s("3c25"),st=s.n(et);function at(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}var nt={name:"result",data:function(){return{name:localStorage.getItem("name"),score:localStorage.getItem("score"),sex:localStorage.getItem("sex"),dw:"王者III",by:"邓肯",wa:"你从小就是乖宝宝，只有被你爸坑的份，你很少会为老爸挖坑。毕竟不专业，挖着挖着，自己会掉进去！",rgba:"rgba(0,0,0,0.5)"}},methods:{downLoadPage:function(){this.$router.push({path:"/downloadpage"})},changeToimg:function(){var t=document.querySelector("#canvas");st()(t,{onclone:function(t){t.querySelector("#canvas").style.visibility="initial"}}).then(function(e){var s=new Image;s.src=e.toDataURL(),s.id="result-img",s.style.height="100%",t.innerHTML="",t.appendChild(s),t.style.visibility="initial"})},getdw:function(){switch(!0){case this.score>=0&&this.score<=1:this.dw="青铜III";break;case this.score>=2&&this.score<=4:this.dw="青铜II";break;case this.score>=5&&this.score<=7:this.dw="青铜I";break;case this.score>=8&&this.score<=12:this.dw="白银III";break;case this.score>=13&&this.score<=17:this.dw="白银II";break;case this.score>=18&&this.score<=20:this.dw="白银I";break;case this.score>=21&&this.score<=25:this.dw="黄金IV";break;case this.score>=26&&this.score<=30:this.dw="黄金III";break;case this.score>=31&&this.score<=35:this.dw="黄金II";break;case this.score>=36&&this.score<=40:this.dw="黄金I";break;case this.score>=41&&this.score<=45:this.dw="铂金IV";break;case this.score>=46&&this.score<=50:this.dw="铂金III";break;case this.score>=51&&this.score<=55:this.dw="铂金II";break;case this.score>=56&&this.score<=60:this.dw="铂金I";break;case this.score>=61&&this.score<=66:this.dw="砖石V";break;case this.score>=67&&this.score<=72:this.dw="砖石IV";break;case this.score>=73&&this.score<=78:this.dw="砖石III";break;case this.score>=79&&this.score<=84:this.dw="砖石II";break;case this.score>=85&&this.score<=89:this.dw="砖石I";break;case this.score>=90&&this.score<=90:this.dw="大师";break;case this.score>=97&&this.score<=100:this.dw="最强王者";break}},getRGBA:function(){switch(!0){case this.score<=20:this.rgba="rgba(44,140,67,0.5)";break;case this.score<=40:this.rgba="rgba(149,170,59,0.5)";break;case this.score<=60:this.rgba="rgba(251,172,33,0.5)";break;case this.score<=80:this.rgba="rgba(240,77,60,0.5)";break;case this.score<=100:this.rgba="rgba(238,53,96,0.7)";break}},getWA:function(){if("woman"==this.sex)switch(!0){case this.score>=0&&this.score<=7:this.by=["爸爸有你，平安如意！","乖宝宝，你没少被你爸坑！","你爸不脆弱，尽管坑！"][at(0,2)],this.wa=["你从小就是乖宝宝，只有被你爸坑的份，你很少会为老爸挖坑。毕竟不专业，挖着挖着，自己会掉进去！","你善良、单纯，一直都是老爸的得力助手！老爸为你披荆斩棘，而你会为老爸泡茶、捶背，你就是老爸的贴心小棉袄！"][at(0,1)];break;case this.score>=8&&this.score<=20:this.by=["坑不坑，要看老爸表现！","你有多坑爹，就有多深情！","撸起袖子，继续坑爹！"][at(0,2)],this.wa=["你从小就是乖宝宝，只有被你爸坑的份，你很少会为老爸挖坑。毕竟不专业，挖着挖着，自己会掉进去！","你善良、单纯，一直都是老爸的得力助手！老爸为你披荆斩棘，而你会为老爸泡茶、捶背，你就是老爸的贴心小棉袄！"][at(0,1)];break;case this.score>=21&&this.score<=40:this.by=["你对老爸的爱，就是坑他！","懂事如你，坑爹都是意外","不忘初心，能坑就坑！"][at(0,2)],this.wa=["你天真、活泼，永远都是爸爸的骄傲！尽管你也有调皮捣蛋的一面，但对于爸爸来说，却是满满的幸福感！","你以为小时候干的坏事，老爸都不记得了？那衬衫上铅笔的痕迹，记录的是你们父女共度的美好时光，他怎么舍得忘记！"][at(0,1)];break;case this.score>=41&&this.score<=60:this.by=["再坑你爹，就扣零花钱！","老爸身陷你挖的坑中！","坑到老爸，无路可走！"][at(0,2)],this.wa=["虽然你是个小姑娘，但却喜欢爬上爬下，估计小时候没少受伤吧！你爸觉得这才是小孩该有的朝气，虽然因此而被你坑，但他却依然乐呵呵！","在家里，你就是小淘气，你爸就是老顽童！他经常要帮你收拾案发现场，因为袒护你而被老妈凶！你们相视一笑，估计是奸计得逞了！"][at(0,1)];break;case this.score>=61&&this.score<=80:this.by=["恭喜，坑爹专业第一名！","不求最坑，只求更坑！","坑爹的灵魂万里挑一"][at(0,2)],this.wa=["你爸觉得，女生也应该独立自主，所以愿意放手让你自己去探索！而你探索的结果就是，拿他做实验！哈哈哈，被你坑到没脾气了！","你坑人实力不容小觑，不过对象比较固定，就是你亲爹！你总能把他的计划搅黄，而这也激发了他的实力，不知道他是不是应该反过来谢谢你！"][at(0,1)];break;case this.score>=81&&this.score<=95:this.by=["坑到你爸，不想做你爸!","女大十八变，越变越随便。","No Keng Dad No Die"][at(0,2)],this.wa=["都说女孩斯文安静，但你用实际行动推翻了这些刻板印象！爬树、掏鸟、打架，总有一样是你擅长的！但不管怎样，老爸的目光却永远温柔！","你爹大概觉得，自己是你从路边捡回来的，毕竟在家里毫无地位！毫无话语权！不仅怕老婆，还是个女儿奴！被你坑成这样，还是满满的宠爱！"][at(0,1)];break;case this.score>=96&&this.score<=100:this.by=["老爸被你坑到崩溃！","你这么坑爹，良心不会痛吗！","你爹被坑到无FUCK说！"][at(0,2)],this.wa=["都说女孩斯文安静，但你用实际行动推翻了这些刻板印象！爬树、掏鸟、打架，总有一样是你擅长的！但不管怎样，老爸的目光却永远温柔！","你爹大概觉得，自己是你从路边捡回来的，毕竟在家里毫无地位！毫无话语权！不仅怕老婆，还是个女儿奴！被你坑成这样，还是满满的宠爱！"][at(0,1)];break}else switch(!0){case this.score>=0&&this.score<=7:this.by=["老爸得感谢你不坑之恩！","明人不挖坑，尤其对亲爹！","只坑队友，不坑爹！"][at(0,2)],this.wa=["善良如你，看到爸爸下班后的疲惫，你暗自发誓要为他分担。两父子都是会为了家庭，褪去身上的棱角，真棒！","善良如你，看到爸爸下班后的疲惫，你暗自发誓要为他分担。两父子都是会为了家庭，褪去身上的棱角，真棒！"][at(0,1)];break;case this.score>=8&&this.score<=20:this.by=["坑爹？不存在的！","坑谁都行，就不坑爹","对于坑爹，你还是节制的！"][at(0,2)],this.wa=["善良如你，看到爸爸下班后的疲惫，你暗自发誓要为他分担。两父子都是会为了家庭，褪去身上的棱角，真棒！","善良如你，看到爸爸下班后的疲惫，你暗自发誓要为他分担。两父子都是会为了家庭，褪去身上的棱角，真棒！"][at(0,1)];break;case this.score>=21&&this.score<=40:this.by=["亲爹就是用来坑的！","佛系如我，随缘坑爹！","你和老爸坑人能力相当！"][at(0,2)],this.wa=["你是一个内心传统，观念新颖的小哥哥，既有冷静的一面，也有热情的一面。虽然偶尔坑爹，那也是因为事情不在你的掌控里！","你是一个温文尔雅、体贴入微的绅士，你会把家庭放在第一，认为百善孝为先。坑爹对你来说，就是和老爸增加感情的一种方式，你们开心就好！"][at(0,1)];break;case this.score>=41&&this.score<=60:this.by=["专业坑爹十八年","一言不合就坑爹！","坑爹余额即将用尽！"][at(0,2)],this.wa=["是不是要坑爹，这得看你的心情！心血来潮的时候，你总想要开一些无关大雅的玩笑，偶尔为之也能让生活多一份乐趣！","对你来说，生活的乐趣就是挖坑，让老爸跳！你们日常的互动就是拌嘴，虽然彼此都看对方不顺眼，但是只要对方有困难，你们会为彼此撑腰！"][at(0,1)];break;case this.score>=61&&this.score<=80:this.by=["专坑亲爹的小能手,","荣获坑爹比赛亚军","日常坑爹，周末开挂！"][at(0,2)],this.wa=["你从小就是一个坑爹的熊孩子，这种能力大概是从你爸身上继承的！你特别喜欢捉弄人，常常挖坑给别人跳，即便是自己的老爸，你也不会手软！","如果不坑爹，那还是亲儿子吗？反正坑不坑爹，你也少不了一顿揍！你的聪明才智，大概都用来对付亲爹了，你坑爹的事例，估计可以写一套坑爹攻略了！"][at(0,1)];break;case this.score>=81&&this.score<=95:this.by=["坑爹你第二，没人敢称霸！","老爸被你坑到石化！","坑爹你最稳！"][at(0,2)],this.wa=["你坑爹的技术非常高，很多时候你爸都没发觉被你坑了！这或许因为你有非常高的情商，总能在最后一刻化险为夷！","你坑爹的技术非常高，很多时候你爸都没发觉被你坑了！这或许因为你有非常高的情商，总能在最后一刻化险为夷！"][at(0,1)];break;case this.score>=96&&this.score<=100:this.by=["坑爹之神，爸爸心好疼！","大吉大利，今晚坑爹！","挖掘机专业优先毕业生"][at(0,2)],this.wa=["你坑爹的技术非常高，很多时候你爸都没发觉被你坑了！这或许因为你有非常高的情商，总能在最后一刻化险为夷！","你坑爹的技术非常高，很多时候你爸都没发觉被你坑了！这或许因为你有非常高的情商，总能在最后一刻化险为夷！"][at(0,1)];break}}},components:{Button:D},mounted:function(){this.getWA(),this.getRGBA(),this.getdw();var t="经鉴定【"+this.name+"】坑爹段位为【"+this.dw+"】，测过才知道你坑不坑！",e=new f({pic:"https://webres.psy-1.com/sgy/dist/static/img/f-day_img_openning-daddy@3x.1695a13.png",url:window.location.href.split("#")[0],title:t,desc:"快来测一测你的坑爹指数！"});this.$store.getters.isApp&&e.appInit(),this.$store.getters.isWeiXin&&e.weiXinShare(),this.changeToimg()}},it=nt,ot=(s("8e30"),s("b5cf"),Object(l["a"])(it,Z,tt,!1,null,"3264d156",null));ot.options.__file="result.vue";var rt=ot.exports,ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"DownLoadPage"},[t._m(0),s("Button",{staticClass:"button",attrs:{id:"dl"}},[t._v("为老爸找回好梦")])],1)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("img",{staticClass:"ig",attrs:{src:s("51eb")}}),a("div",{staticClass:"swa"},[a("p",[t._v("习惯了你的叮嘱，和那温柔的港湾。")]),a("p",[t._v("当你的双鬓渐白，睡眠也开始变差。")]),a("p",[t._v("我已不再是小孩，愿为你寻好睡眠。")])]),a("div",{staticClass:"xwa"},[a("p",[t._v("雨落屋檐、潮拍海岸、风铃蹁跹……")]),a("p",[t._v("超过300种原创助眠音效，")]),a("p",[t._v("帮助老爸找回失去的好梦！")])])])}],lt=function(){function t(){Object(d["a"])(this,t)}return Object(m["a"])(t,null,[{key:"is_cosleep",value:function(){return this.is_cosleep_android()||this.is_cosleep_ios()}},{key:"is_cosleep_ios",value:function(){var t=!1;try{t="undefined"!=typeof window.webkit.messageHandlers.XinchaoApp}catch(t){}return t}},{key:"is_cosleep_android",value:function(){return"undefined"!=typeof window.XinchaoApp}},{key:"get_api_root",value:function(){switch("production"){case"production":return"https://api.psy-1.com";case"test":return"https://api.debug.psy-1.com"}}},{key:"get_web_root",value:function(){switch("production"){case"production":return"https://www.heartide.com";case"test":return"https://web.debug.psy-1.com"}}},{key:"baidu_statics",value:function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?c6a0be7a2e98e04ca2cf523568e2cbc4";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}}]),t}(),ht={name:"DownLoadPage",components:{Button:D},mounted:function(){this.$store.getters.isApp&&(document.querySelector("#di").style.display="none")}},pt=ht,dt=(s("ee61"),Object(l["a"])(pt,ct,ut,!1,null,"0e484aed",null));dt.options.__file="DownLoadPage.vue";var mt=dt.exports;a["a"].use(y["a"]);var ft=new y["a"]({routes:[{path:"/",name:"home",component:q},{path:"/playpage",name:"PlayPage",component:J},{path:"/input",name:"input",component:Y},{path:"/result",name:"result",component:rt},{path:"/downloadpage",name:"DownLoadPage",component:mt},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),gt=s("2f62");a["a"].use(gt["a"]);var vt=new gt["a"].Store({state:{},getters:{isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},isApp:function(){return lt.is_cosleep()}},mutations:{},actions:{}});a["a"].config.productionTip=!1,new a["a"]({router:ft,store:vt,render:function(t){return t(w)}}).$mount("#app")},"59a3":function(t,e,s){"use strict";var a=s("ec13"),n=s.n(a);n.a},"5b5c":function(t,e,s){t.exports=s.p+"img/zsd.6c076059.png"},"612f":function(t,e,s){"use strict";var a=s("63c4"),n=s.n(a);n.a},"63c4":function(t,e,s){},6431:function(t,e,s){"use strict";var a=s("94b8"),n=s.n(a);n.a},6728:function(t,e,s){t.exports=s.p+"img/f-day_img_resultcard_pic-boy2.5cb3c40f.png"},"6fbd":function(t,e,s){t.exports=s.p+"img/f-day_img_openning-daddy.44b00483.png"},"72c8":function(t,e,s){},"74ea":function(t,e,s){"use strict";var a=s("3712"),n=s.n(a);n.a},8156:function(t,e,s){},"8e30":function(t,e,s){"use strict";var a=s("9b23"),n=s.n(a);n.a},"8e7a":function(t,e,s){"use strict";var a=s("8156"),n=s.n(a);n.a},"8f19":function(t,e,s){"use strict";var a=s("522c"),n=s.n(a);n.a},"8f77":function(t,e,s){},9013:function(t,e,s){"use strict";var a=s("4171"),n=s.n(a);n.a},"94b8":function(t,e,s){},"9b23":function(t,e,s){},aa01:function(t,e,s){t.exports=s.p+"img/qrcode_wechat.ccb47648.png"},aab9:function(t,e,s){t.exports=s.p+"media/father.67be2348.mp3"},b0a0:function(t,e,s){"use strict";var a=s("e03b"),n=s.n(a);n.a},b5cf:function(t,e,s){"use strict";var a=s("13c7"),n=s.n(a);n.a},cdf8:function(t,e,s){t.exports=s.p+"img/f-day_img_openning-logo.6a8ef5c5.png"},d4d1:function(t,e,s){"use strict";var a=s("72c8"),n=s.n(a);n.a},e03b:function(t,e,s){},ea3d:function(t,e,s){t.exports=s.p+"img/f-day_bg_question.ca434763.png"},ea57:function(t,e){function s(){var t=document.documentElement.clientWidth,e=document.querySelector("html");e.style.fontSize=t/10+"px"}s(),window.addEventListener("resize",s)},ec13:function(t,e,s){},ee61:function(t,e,s){"use strict";var a=s("04eb"),n=s.n(a);n.a}});
//# sourceMappingURL=app.2a9c1496.js.map