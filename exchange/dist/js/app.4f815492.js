(function(t){function e(e){for(var o,s,l=e[0],i=e[1],p=e[2],c=0,v=[];c<l.length;c++)s=l[c],a[s]&&v.push(a[s][0]),a[s]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);u&&u(e);while(v.length)v.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(o=!1)}o&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},a={app:0},r=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"5273d30c"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=a[t]=[e,o]});e.push(n[2]=o);var r,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=s(t),r=function(e){i.onerror=i.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");s.type=o,s.request=r,n[1](s)}a[t]=void 0}};var p=setTimeout(function(){r({type:"timeout",target:i})},12e4);i.onerror=i.onload=r,document.head.appendChild(i)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="https://webres.psy-1.com/sgy/dist/",l.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],p=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=p;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0603":function(t,e,n){"use strict";var o=n("4cd5"),a=n.n(o);a.a},"19d8":function(t,e,n){},"4cd5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s=(n("5c0b"),n("2877")),l={},i=Object(s["a"])(l,a,r,!1,null,null,null);i.options.__file="App.vue";var p=i.exports,c=n("8c4f"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},v=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress",target:"_blank",rel:"noopener"}},[t._v("e2e-cypress")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[t._v("unit-jest")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],g={name:"HelloWorld",props:{msg:String}},d=g,h=(n("0603"),Object(s["a"])(d,f,m,!1,null,"2a53a136",null));h.options.__file="HelloWorld.vue";var b=h.exports,_={name:"home",components:{HelloWorld:b}},y=_,w=Object(s["a"])(y,u,v,!1,null,null,null);w.options.__file="Home.vue";var j=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"editor",staticStyle:{"text-align":"left"}}),n("UiButton",{staticStyle:{"margin-top":"10px",background:"black"},attrs:{loading:t.loading,color:"green"},on:{click:t.postData}},[t._v("提交内容")]),n("div",[n("h1",[t._v("手机上的预览效果")]),n("div",{staticClass:"mobile-content",domProps:{innerHTML:t._s(t.editorContent)}})])],1)},E=[],S=n("49f2"),C=n.n(S),N=n("7f43"),x=n.n(N),M=n("ff46"),U=n.n(M),O={name:"wangeditor",data:function(){return{editorContent:"",loading:!1}},components:{UiButton:M["UiButton"]},methods:{getContent:function(){console.log(this.editorContent)},postData:function(){console.log(this.editorContent)}},mounted:function(){var t=this,e=new C.a(this.$refs.editor);e.customConfig.onchange=function(e){t.editorContent=e},e.customConfig.pasteFilter=!1,e.create(),e.customConfig.pasteFilterStyle=!1,console.log("?>?")}},$=O,H=(n("9d51"),Object(s["a"])($,k,E,!1,null,null,null));H.options.__file="WangEditor.vue";var q=H.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"applycation",domProps:{innerHTML:t._s(t.rawHtmlData)}}),t._m(0)])},D=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"bottom"},[o("a",{attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[o("div",{staticClass:"bottom-img"},[o("img",{staticClass:"bottom-hehe",attrs:{src:n("fb6e")}})])]),o("a",{attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[o("div",{staticClass:"bottom-center"},[t._v("下载小睡眠App")])]),o("a",{staticClass:"dl",attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[o("div",{staticClass:"bottom-dl"},[t._v("下  载")])])])}],T=(n("a481"),{name:"ApplyCation",data:function(){return{saveFont:1,title:"七天睡眠瘦身",rawHtmlData:'<h3><b><span>配套知识<span lang="EN-US"> - </span>最好的瘦身教练</span></b></h3><p class="MsoNormal"><span>你好，欢迎加入心潮睡眠瘦身计划，以下是第一天练习的配套知识，非常的重要，希望你仔细阅读完，再开始今晚的音频练习。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>许多人在瘦身这件事上，常常会感到很孤单。你是一个人在战斗吗？我们很高兴来做你的战友。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>这套课程设计在<b>睡前</b>——这个特殊的时间练习<b style="mso-bidi-font-weight:\nnormal">，</b>是因为首先，身体和潜意识是非常精妙的，在我们睡着的时候，它们还在继续勤劳的工作，因此，睡前进行学习和练习，作用就能持续在睡眠中发挥，比白天练习的效果更好；其次，好的睡眠会显著减少你对食物的过度欲望，同时可以促进新陈代谢，减少体内脂肪的产生与堆积。因此，我们的瘦身计划，也会帮助你获得更优质的睡眠。\n<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><b><span>课程每天分为知识和音频练习两个部分，首次开始请按顺序学习知识，再完成相应的音频练习，其中音频部分建议多次重复练习</span></b><span>，在练习音频的过程中，走神或者入睡了都没关系，因为，你的潜意识一直在发挥作用，当你重新回来会发现更容易完成练习。课程结束之后也建议终生持续音频部分的练习，因为这些练习除了帮助维持苗条且健康的身材，也会帮助你找到自己最佳的状态，提高自信与魅力。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>好了，让我们回到瘦身这件事。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>假设身体是机器，我们输入一个“瘦”的指令，身体就乖乖瘦下来，那事情就会变得简单许多。但是身体有它自己的意志。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>想象一下，如果你每天从起床到睡觉，做什么都是由别人决定的，想吃的不能吃，不想吃的被逼着吃；不想动的时候，被拽着动，而且都是你不喜欢的运动。你会开心吗？找着机会是不是就会反抗？<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>这些，都是我们的身体正在经历的生活。反抗，就是那些开戒后的大吃特吃，还有那些反弹回来的体重。身体其实是有自己的节奏和需要的，并不是我们想要它做什么，它就会照做。<b><span style="color: rgb(194, 79, 74);">你的身体比地球上任何的瘦身方法都聪明。它的需要它自己最清楚，吃什么、做什么运动、怎样会瘦，它自己都知道。</span></b>只是我们常常忽略它反馈的信号，而选择去相信外在的一些研究结果。然而，别人的研究结果并不能完全套用在我们自己独特的身体上。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>当你开始相信，你的身体能够为它自己找到最好的瘦身方法，你就开始了健康瘦身的第一步。<span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><img src="http://wx2.sinaimg.cn/mw690/006Zdy2vgy1fzavh0pko5j30p00e3abr.jpg" style="max-width:100%;"><span><br></span></p><p class="MsoNormal"><span>接下来的几天里，我们会带领你，去体会自己的身体对于食物的需要，对于运动的情绪以及对自己的态度。更关键的是，<b>我们会提供实用的、根据你自己身体需要的瘦身方法，一种完全根据你的情况而定制的，只属于你的方法。</b><span lang="EN-US"><o:p></o:p></span></span></p><p class="MsoNormal"><span>瘦身计划的第一步是帮助你和自己的身体做朋友，并以朋友平等的姿态来尊重它，让它听懂你的需要，同时也听听身体本尊的需要，从而有针对性地瘦身。然而，<b>身体的感知语言和我们头脑的认知语言并不是一回事。</b>所以第一个练习就是通过头脑和身体语言的共同点——可视化的想象开始，让身体听懂我们的需求，理解我们想要的目标。当我们对于瘦身后想成为的样子有了清晰的形象，就可以把这个形象传递给身体和潜意识，让它们与我们一起，持续向这个目标努力。<span lang="EN-US"><o:p></o:p></span></span></p><p>'}},methods:{getMessage:function(){var t=this;console.log(this.$route.query.id),x.a.get("url",{params:{id:this.$route.query}}).then(function(e){t.rawHtmlData=e.body}).catch(function(t){console.log(t)})}},mounted:function(){var t=this;function e(){var e=document.documentElement.clientWidth,n=document.querySelector("html");t.saveFont=n.style.fontSize,n.style.fontSize=e/10+"px"}e(),window.addEventListener("resize",e),this.getMessage(),this.rawHtmlData=this.rawHtmlData.replace(/194/g,"255").replace(/79/g,"95").replace(/74/g,"95"),console.log("?")},destroyed:function(){var t=this;function e(){var e=document.querySelector("html");e.style.fontSize=t.saveFont}e()}}),F=T,W=(n("6426"),Object(s["a"])(F,P,D,!1,null,null,null));W.options.__file="ApplyCation.vue";var z=W.exports;o["a"].use(c["a"]);var A=new c["a"]({routes:[{path:"/a",name:"home",component:j},{path:"/editor",name:"wangeditor",component:q},{path:"/",name:"applycation",component:z},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),L=n("2f62");o["a"].use(L["a"]);var B=new L["a"].Store({state:{},mutations:{},actions:{}});n("cd47");o["a"].use(U.a),o["a"].config.productionTip=!1,new o["a"]({router:A,store:B,render:function(t){return t(p)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(t,e,n){},6426:function(t,e,n){"use strict";var o=n("19d8"),a=n.n(o);a.a},"7aa1":function(t,e,n){},"9d51":function(t,e,n){"use strict";var o=n("7aa1"),a=n.n(o);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},fb6e:function(t,e,n){t.exports=n.p+"img/a.a3d385b7.png"}});
//# sourceMappingURL=app.4f815492.js.map