(function(t){function e(e){for(var s,r,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)r=o[l],i[r]&&d.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);m&&m(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],s=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(s=!1)}s&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var s={},r={app:0},i={app:0},a=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"24f1cc51"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"b3c27d3e"}[t]+".css",r=c.p+s,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var o=i[a],u=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(u===s||u===r))return e()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){o=l[a],u=o.getAttribute("data-href");if(u===s||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.request=s,n(i)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)}).then(function(){r[t]=0}));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,n){s=i[t]=[e,n]});e.push(s[2]=a);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(t),u=function(e){d.onerror=d.onload=null,clearTimeout(m);var n=i[t];if(0!==n){if(n){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+s+": "+r+")");a.type=s,a.request=r,n[1](a)}i[t]=void 0}};var m=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(n,s,function(e){return t[e]}.bind(null,s));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var m=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("c21b"),r=n.n(s);r.a},"0ce7":function(t,e,n){},"0eca":function(t,e,n){t.exports=n.p+"img/btn_music-off.e96c8c05.png"},"25ed":function(t,e,n){},"2c18":function(t,e){t.exports="data:image/png;base64,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"},"562b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),t._m(0)],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("audio",{attrs:{id:"myaudio",controls:"",hidden:""}},[s("source",{attrs:{src:n("f847"),type:"audio/mpeg"}})])}],a=(n("034f"),n("2877")),o={},c=Object(a["a"])(o,r,i,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=n("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("img",{staticClass:"top-left",attrs:{src:n("9b3e")}}),s("img",{staticClass:"top-right",attrs:{src:t.tgImg},on:{click:function(e){t.$data.toggle=!t.$data.toggle}}}),s("img",{staticClass:"center-img",attrs:{src:n("9869")}}),s("img",{staticClass:"bottom",attrs:{src:n("9e58")}}),s("router-link",{attrs:{to:"/playing/b"}},[s("img",{staticClass:"btn",attrs:{id:"btnBegin",src:n("6f1c")}})])],1)},m=[],f={name:"frist_page",data:function(){return{toggle:!0,on:n("d1a7"),off:n("0eca")}},computed:{tgImg:function(){return this.toggle?(this.music(!0),this.on):(this.music(!1),this.off)}},methods:{music:function(t){var e=document.getElementById("myaudio");e&&(t?e.play():e.pause())},initMusic:function(){this.toggle&&setTimeout(function(){var t=document.getElementById("myaudio");t.play()},1e3)}},mounted:function(){document.addEventListener("touchstart",this.initMusic,!1)}},g=f,p=(n("e4b0"),Object(a["a"])(g,d,m,!1,null,"729d32b0",null));p.options.__file="frist_page.vue";var h=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main",attrs:{id:"playing"}},[n("div",{staticClass:"top"},[n("router-link",{attrs:{to:"/playing/s"}},[n("div",{staticClass:"left",attrs:{id:"left"},on:{click:t.change}},[t._v("\n            小班级\n        ")])]),n("router-link",{attrs:{to:"/playing/b"}},[n("div",{staticClass:"right background-fontColor",attrs:{id:"right"},on:{click:t.change}},[t._v("\n            大班级\n        ")])])],1),n("div",{staticClass:"center",attrs:{id:"center"}},[n("div",{staticClass:"blackboard"}),n("div",{staticClass:"teacher"}),n("router-view"),t.result?n("div",{staticClass:"bottom-desc",attrs:{id:"result"}},[n("span",{staticClass:"lb",attrs:{id:"lb"}},[t._v(t._s(t.lb))]),n("span",{attrs:{id:"desc"}},[t._v(t._s(t.result))])]):t._e()],1),n("div",{staticClass:"bottom"},[n("p",{staticClass:"btn",on:{click:t.submit}},[t._v("确认座位")]),n("p",{staticClass:"sentence"},[t._v("·选中你上学座位，最多五个·")])]),n("Alert",{attrs:{toggle:t.toggle}},[t._v(t._s(t.alert_sentance))])],1)},b=[],A=(n("ac4d"),n("8a81"),n("ac6a"),n("6762"),n("2fdb"),n("4917"),n("28a5"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main",style:t.$data.style_display_none},[s("div",{staticClass:"alert"},[s("img",{staticClass:"close",attrs:{src:n("2c18")},on:{click:t.close}}),s("span",[t._t("default")],2)])])}),y=[],C={name:"Alert",props:["toggle"],data:function(){return{style_display_none:{display:"none"}}},methods:{close:function(){console.log(this.style_display_none),this.style_display_none.display="none"}},watch:{toggle:function(){this.style_display_none.display="flex"}}},w=C,S=(n("786a"),Object(a["a"])(w,A,y,!1,null,"7fee61be",null));S.options.__file="Alert.vue";var T=S.exports,E=n("3c25"),I=n.n(E),x={name:"playing",data:function(){return{toggle:!0,alert_sentance:"ha呵kk",count:[],result:"",lb:"",show:!1}},methods:{weixinSDK:function(t){var e=new XMLHttpRequest;e.open("GET",t+"/web/v1/wechat/config?debug=1&url="+t),e.onreadystatechange=function(){4===e.readyState&&200===e.status&&(console.log("sdk ok"),window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx632d4c99bd681cf3&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect")},e.send()},weatherCode:function(){var t=/code=(.+?)&/,e=window.location.href.match(t);return e||!1},isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},weixinInit:function(t){if(this.isWeiXin()){var e=this.weatherCode();e?sessionStorage.setItem("code",e):this.weixinSDK(t)}},change:function(t){var e=document.getElementById("left").classList,n=document.getElementById("right").classList;e.remove("background-fontColor"),n.remove("background-fontColor"),t.target.classList.add("background-fontColor")},select:function(){var t=this;document.getElementById("center").addEventListener("click",function(e){var n=e.target.classList;if(n.contains("bgcolor"))n.remove("bgcolor"),console.log("删除");else if(n.contains("itemlist")){var s=document.getElementsByClassName("bgcolor").length;console.log("就是看看List的个数吧"+s),s<3?n.add("bgcolor"):t.alertShow("最多可选三个座位(～￣▽￣)～")}},!1)},alertShow:function(t){this.toggle=!this.toggle,this.alert_sentance=t},randomNum:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}},getIndexOfElement:function(t,e){console.log(t+e);for(var n=document.getElementsByClassName(t),s=0;s<n.length;s++)n[s].classList.contains(e)&&this.count.push(s+1);console.log(this.count)},getScore:function(t){for(var e=0,n=0;n<t.length;n++)[12,13,14,15,20,21,22,23,28,29,30,31].includes(t[n])?e+=150:[2,3,10,11,18,19,26,27,34,35,42,43].includes(t[n])?e+=115:[8,9,16,17,24,25,32,33,40,41,48,49].includes(t[n])?e+=80:[36,37,38,39,44,45,46,47].includes(t[n])?e+=50:[4,5,6,7].includes(t[n])&&(e+=25);return console.log(e),e},getLevel:function(t){if(1==this.count.length){if(150>=t&&t>=136)return 10;if(135>=t&&t>=121)return 9;if(120>=t&&t>=106)return 8;if(105>=t&&t>=91)return 7;if(90>=t&&t>=76)return 6;if(75>=t&&t>=61)return 5;if(60>=t&&t>=46)return 4;if(45>=t&&t>=31)return 3;if(30>=t&&t>=16)return 2;if(15>=t&&t>=0)return 1}if(2==this.count.length){if(300>=t&&t>=271)return 10;if(270>=t&&t>=241)return 9;if(240>=t&&t>=121)return 8;if(210>=t&&t>=181)return 7;if(180>=t&&t>=151)return 6;if(150>=t&&t>=121)return 5;if(120>=t&&t>=91)return 4;if(90>=t&&t>=61)return 3;if(60>=t&&t>=31)return 2;if(30>=t&&t>=0)return 1}if(3==this.count.length){if(450>=t&&t>=406)return 10;if(405>=t&&t>=361)return 9;if(360>=t&&t>=316)return 8;if(315>=t&&t>=271)return 7;if(270>=t&&t>=226)return 6;if(225>=t&&t>=181)return 5;if(180>=t&&t>=136)return 4;if(135>=t&&t>=91)return 3;if(90>=t&&t>=46)return 2;if(45>=t&&t>=0)return 1}},getLabel:function(t){return 10===t?["痴狂学魔","天生丽质","模范学生","争分夺秒","品学兼优","自学成才","名列前茅","以梦为马","满腹经纶"][this.randomNum(0,8)]:9===t?["完美学神","一表人才","优秀学生","闻鸡起舞","智商爆表","幽默风趣","豁达大度","手不释卷","金榜题名"][this.randomNum(0,8)]:8===t?["至尊学霸","玉树临风","三好学生","废寝忘食","迎难而上","魅力十足","笨鸟先飞","聪明伶俐","积极进取"][this.randomNum(0,8)]:7===t?["伪学霸","情窦初开","逗比学委","勤学好问","冷静聪慧","坚持不懈","小心谨慎","心地善良","理性派"][this.randomNum(0,8)]:6===t?["努力范","眉清目秀","获奖无数","刻苦钻研","多谋善断","平易近人","朝气蓬勃","沉静寡言","天真无邪"][this.randomNum(0,8)]:5===t?["文艺范","才貌双全","优秀班干","天资聪颖","情商超高","赤子之心","头脑灵活","快言快语","行动力强"][this.randomNum(0,8)]:4===t?["抱佛脚","风度翩翩","进步之星","积极乐观","初心依旧","鬼点子多","调皮捣蛋","口直心快","不拘小节"][this.randomNum(0,8)]:3===t?["偏科大神","清新脱俗","小组长","马马虎虎","创意新颖","阳光开朗","意气用事","多愁善感","口齿伶俐"][this.randomNum(0,8)]:2===t?["运动奇才","俊俏可人","课代表","八卦之王","自由随心","特立独行","重情重义","放荡不羁","聪明过人"][this.randomNum(0,8)]:1===t?["最强学渣","倾国倾城","生活委员","出类拔萃","青春叛逆","最佳损友","兴趣广泛","逆袭为王","口齿伶俐"][this.randomNum(0,8)]:void 0},getDescription:function(t){return 10===t?["当年的你，是天才型学霸，讨论题目就像华山论剑，是全班膜拜的对象。","当年的你，是完美型学霸，如果要给学习加个期限，你希望是一万年。 ","当年的你，是自学成才型学霸，上课大概只是旁听，毕竟对你来说没有难度。"][this.randomNum(0,2)]:9===t?["当年的你，是隐匿在人群中才貌双全的学霸，是所有异性暗恋的对象。","当年的你，自带学霸基因，整日沉迷于学习无法自拔。","当年的你，每次考试都能名列前茅，大概是用了《5年考题3年模拟》。"][this.randomNum(0,2)]:8===t?["当年的你，是勤奋型学霸，一日不做题便浑身难受。","当年的你，是同桌的心上人，在做题中慢慢靠近，得到情感的升华。","当年的你，是阳光型学霸，学习对你来说是世上最快乐的事。"][this.randomNum(0,2)]:7===t?["当年的你，是学霸眼中的伪学霸，笨鸟先飞，勤奋刻苦。","当年的你，是伪学霸中的战斗机，离学霸只有一步之遥。","当年的你，熬夜学习是常态，困意来袭却逞强：“扶朕起来，朕还能学习。"][this.randomNum(0,2)]:6===t?["当年的你，是老师眼中的优等生，头脑灵活，有过人的才艺。","当年的你，是品学兼优的班干部，领导能力强，是老师的好帮手。","当年的你，为修成学霸曰：“天将降大任于斯人也，必先关其机，停其流量。"][this.randomNum(0,2)]:5===t?["当年的你，德智体美劳全面发展，天资聪颖，自制力非常好。","当年的你，是偏科奇才，不屑与学霸相比，但却最怕开家长会。 ","当年的你，经常和同桌吐槽：“这个老师不太行，怎么讲都讲不明白。"][this.randomNum(0,2)]:4===t?["当年的你，是班上的逗比，但逢考试必定是一夜复习两茫茫，看一句、忘三行。","当年的你，是班上的八卦之神，洞察力超强，所有的秘密都逃不过你的双眼。","当年的你，及格，你所欲也；偷懒，亦你所欲也，无奈两者不可兼得。"][this.randomNum(0,2)]:3===t?["当年的你，是特困生中的战斗机，虽然考前临时抱佛脚，但每次都能侥幸及格。","当年的你，上课就像听天书，宁愿在梦中指点江山，挥斥方遒。","当年的你，天不怕地不怕，但会和老师卖乖：“纸上得来终觉浅，恳请老师划重点。"][this.randomNum(0,2)]:2===t?["当年的你，是学渣中的老司机，但你和学霸有个共同点：写作业不用翻书。","当年的你，青春叛逆，调皮捣蛋。学霸在复习考试，你却才开始预习。","当年的你，考试就像在做视力检查，看不到的全靠蒙，及格全凭运气。"][this.randomNum(0,2)]:1===t?["当年的你，是不良少年，是老师的眼中钉，但懂得举一反三，逆向思维超强。","当年的你，是学渣中的大哥大，但你有个愿望，希望老师高抬贵手，让你及格。","当年的你，考试完全避开了正确选项，全凭想象力在答题。"][this.randomNum(0,2)]:void 0},changeToIMG:function(){var t=this,e=document.getElementById("center");I()(e,{onclone:function(t){t.getElementById("result").style.display="initial",t.getElementsByClassName("need")[0].id="changeFirstColor";var e=!0,n=!1,s=void 0;try{for(var r,i=t.getElementsByClassName("decorations")[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var a=r.value;a.style.display="block"}}catch(t){n=!0,s=t}finally{try{e||null==i.return||i.return()}finally{if(n)throw s}}}}).then(function(e){localStorage.setItem("canvasSrc",e.toDataURL()),t.$router.push({path:"/result"})})},submit:function(){if(console.log(this.count.length),this.getIndexOfElement("itemlist","bgcolor"),0==this.count.length)this.alertShow("至少选择一个座位(～￣▽￣)～");else{var t=this.getLevel(this.getScore(this.count)),e=this.getLabel(t),n=this.getDescription(t);document.getElementById("lb"),document.getElementById("descDom");this.lb=e,this.result=n,this.$nextTick(this.changeToIMG)}}},components:{Alert:T},mounted:function(){this.select(),this.weixinInit("https://api.debug.psy-1.com")}},L=x,Y=(n("6131"),Object(a["a"])(L,v,b,!1,null,"4965225a",null));Y.options.__file="playing.vue";var N=Y.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("div",{staticClass:"outer",attrs:{id:"canvas"}},[n("div",{staticClass:"contant"},[n("div",{staticClass:"top"},[n("p",{staticClass:"name"},[t._v(t._s(t.name))]),n("p",[t._v("当年上学座位图")])]),n("div",{staticClass:"center",attrs:{id:"center"}}),t._m(0)])]),n("div",{staticClass:"save"},[t._v("长按上方保存图片")]),n("div",{staticClass:"bottom-button"},[t._v("点击下载小睡眠APP")])])},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom"},[s("img",{staticClass:"left",attrs:{src:n("9b3e")}}),s("img",{staticClass:"right",attrs:{src:n("c513")}}),s("p",{staticClass:"sentance"},[t._v("长按生成我的座位图")])])}],O=(n("a481"),{name:"result",data:function(){return{name:"aaasd"}},methods:{setImgSize:function(t,e){var n=t.height/t.width,s=document.getElementById(e).offsetHeight+" "+document.getElementById(e).offsetWidth;n<s?t.width=document.getElementById(e).offsetWidth-10:t.height=document.getElementById(e).offsetHeight-10},append:function(){var t=document.getElementById("canvas"),e=new Image;e.src=localStorage.getItem("canvasSrc"),this.setImgSize(e,"center"),document.getElementById("center").appendChild(e),I()(t,{onclone:function(t){t.getElementsByClassName("contant")[0].style.visibility="visible"}}).then(function(e){var n=new Image;n.src=e.toDataURL(),n.id="resultId",n.style.width="100%",t.innerHTML="",t.appendChild(n)})},getName:function(){return new Promise(function(t){var e=this,n=new XMLHttpRequest;alert(sessionStorage.getItem("code").replace(/code=/,"")+"这是获取code的啊"),n.open("GET","https://api.debug.psy-1.com/web/v1/wechat/user?code="+sessionStorage.getItem("code").replace(/code=/,"")),n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var s=JSON.parse(n.response).data.nickname;alert("获取名称了"),localStorage.setItem("name",s),e.name=s,e.nextTick(t)}},n.send()})},getNameInit:function(){if(this.isWeiXin()){var t=localStorage.getItem("name");t?(alert("有name"),this.name=t,this.$nextTick(this.append)):this.getName().then(this.append)}},isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())}},mounted:function(){localStorage.removeItem("name"),this.getNameInit(),this.isWeiXin()||this.append()}}),P=O,V=(n("c81e"),n("d3ae"),Object(a["a"])(P,B,q,!1,null,"76b4f7b4",null));V.options.__file="result.vue";var k=V.exports;s["a"].use(l["a"]);var M=new l["a"]({mode:"hash",base:"",routes:[{path:"/playing",name:"playing",component:N,children:[{path:"b",component:function(){return n.e("about").then(n.bind(null,"638e"))}},{path:"s",component:function(){return n.e("about").then(n.bind(null,"7d5c"))}}]},{path:"/",name:"frist_page",component:h},{path:"/result",name:"result",component:k},{path:"/aboutasdas",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});s["a"].config.productionTip=!1,new s["a"]({router:M,render:function(t){return t(u)}}).$mount("#app")},6131:function(t,e,n){"use strict";var s=n("f315"),r=n.n(s);r.a},"674c":function(t,e,n){},"6f1c":function(t,e,n){t.exports=n.p+"img/btn_start.8b85b013.png"},"786a":function(t,e,n){"use strict";var s=n("25ed"),r=n.n(s);r.a},9869:function(t,e,n){t.exports=n.p+"img/img_picture.76c98c3c.png"},"9b3e":function(t,e,n){t.exports=n.p+"img/img_logo-result.8df7f012.png"},"9e58":function(t,e){t.exports="data:image/png;base64,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"},c21b:function(t,e,n){},c513:function(t,e,n){t.exports=n.p+"img/qrcode.80ebf7e0.png"},c81e:function(t,e,n){"use strict";var s=n("0ce7"),r=n.n(s);r.a},d1a7:function(t,e,n){t.exports=n.p+"img/btn_music-on.7b65a48a.png"},d3ae:function(t,e,n){"use strict";var s=n("562b"),r=n.n(s);r.a},e4b0:function(t,e,n){"use strict";var s=n("674c"),r=n.n(s);r.a},f315:function(t,e,n){},f847:function(t,e,n){t.exports=n.p+"media/classroom.71298f43.mp3"}});
//# sourceMappingURL=app.06cb3a17.js.map