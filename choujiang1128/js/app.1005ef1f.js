(function(t){function e(e){for(var s,a,r=e[0],c=e[1],l=e[2],d=0,g=[];d<r.length;d++)a=r[d],n[a]&&g.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(g.length)g.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],s=!0,a=1;a<o.length;a++){var c=o[a];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var s={},n={app:0},i=[];function a(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b4a4cb96"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var o=s[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var s=new Promise(function(e,s){o=n[t]=[e,s]});e.push(o[2]=s);var i,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=a(t),i=function(e){l.onerror=l.onload=null,clearTimeout(d);var o=n[t];if(0!==o){if(o){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+s+": "+i+")");a.type=s,a.request=i,o[1](a)}n[t]=void 0}};var d=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,c.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(o,s,function(e){return t[e]}.bind(null,s));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0416":function(t,e,o){t.exports=o.p+"img/prize_soundbox.a75fa945.png"},"24cf":function(t,e,o){},"474f":function(t,e){t.exports="data:image/png;base64,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"},4756:function(t,e,o){"use strict";var s=o("512e"),n=o.n(s);n.a},"49b3":function(t,e,o){t.exports=o.p+"img/prize_no2.14a7450b.png"},"512e":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("3a0f"),o("a3a3"),o("4d0b");var s=o("329b"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],a=o("6f44"),r={data:function(){return{a:""}},methods:{bScroll:function(){var t=document.querySelector("#app");this.better_scroll=new a["a"](t,{click:!0,bounce:{top:!1,bottom:!1,left:!1,right:!1}})}},mounted:function(){}},c=r,l=(o("5c0b"),o("5c64"),o("048f")),d=Object(l["a"])(c,n,i,!1,null,null,null);d.options.__file="App.vue";var u=d.exports,g=o("081a"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home",style:t.home_height},[t._m(0),s("div",{staticClass:"to-reward",on:{click:t.toReward}},[t._v("我的奖品")]),s("div",{staticClass:"outer"},[s("div",{staticClass:"outer-dot"},[s("div",{staticClass:"type1",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),s("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),s("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}})]),s("div",{staticClass:"choujiang"},[s("div",{staticClass:"items  item1 change-style-item",attrs:{index:"1"},on:{click:function(e){t.prizeDetail(1)}}},[s("img",{attrs:{desc:"1999元 Bose遮噪睡眠耳塞",src:o("5f41")}}),t._m(1),s("p",{staticClass:"items-second"},[t._v("遮噪睡眠耳塞")])]),s("div",{staticClass:"items  item2",attrs:{index:"2"},on:{click:function(e){t.prizeDetail(2)}}},[s("img",{attrs:{day:"90",desc:"小睡眠季会员",src:o("6e81")}}),t._m(2),s("p",{staticClass:"items-second"},[t._v("小睡眠季会员")])]),s("div",{staticClass:"items  item3",attrs:{index:"3"},on:{click:function(e){t.prizeDetail(3)}}},[s("img",{attrs:{desc:"49元 热敷眼罩",src:o("fc5a")}}),t._m(3),t._m(4)]),s("div",{staticClass:"items  item8",attrs:{index:"8"},on:{click:function(e){t.prizeDetail(8)}}},[s("img",{attrs:{day:"7",desc:"小睡眠7天会员",src:o("6e81")}}),t._m(5),s("p",{staticClass:"items-second"},[t._v("小睡眠7天会员")])]),s("a",{staticClass:"begin",class:{bgdown:t.togglebg,bgup:!t.togglebg},on:{touchstart:t.tgBGDOWN,touchend:t.tgBGUP,click:t.clickEvent}},[s("div",{staticClass:"items  item item-begin",attrs:{index:""}})]),s("div",{staticClass:"items  item4",attrs:{index:"4"},on:{click:function(e){t.prizeDetail(4)}}},[s("img",{attrs:{desc:"谢谢参与",src:o("75ea")}}),t._m(6),s("p",{staticClass:"items-second"},[t._v("   谢谢参与   ")])]),s("div",{staticClass:"items  item7",attrs:{index:"7"},on:{click:function(e){t.prizeDetail(7)}}},[s("img",{attrs:{desc:"300元 MUJI小型超声波香薰机",src:o("5c15")}}),t._m(7),s("p",{staticClass:"items-second"},[t._v("型超声波香薰机")])]),s("div",{staticClass:"items  item6",attrs:{index:"6"},on:{click:function(e){t.prizeDetail(6)}}},[s("img",{attrs:{day:"365",desc:"小睡眠年度会员",src:o("6e81")}}),t._m(8),s("p",{staticClass:"items-second"},[t._v("小睡眠年度会员")])]),s("div",{staticClass:"items  item5",attrs:{index:"5"},on:{click:function(e){t.prizeDetail(5)}}},[s("img",{attrs:{desc:"499元 智能音箱",src:o("0416")}}),t._m(9),s("p",{staticClass:"items-second"},[t._v("   智能音箱   ")])])])]),t._m(10),t._m(11),s("div",{directives:[{name:"show",rawName:"v-show",value:t.prize_detail,expression:"prize_detail"}],staticClass:"prize-detail",on:{click:t.prizeDetailClose}},[s("div",{staticClass:"prize-detail-content",domProps:{innerHTML:t._s(t.detail)}}),s("div",{staticClass:"prize-detail-close"})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.reward_show,expression:"reward_show"}],staticClass:"reward-result"},[1===t.reward_type?s("div",{staticClass:"reward-result-content"},[s("div",{staticClass:"reward-result-content-top"},[s("div",{staticClass:"reward-result-content-top-close",on:{click:t.prizeDetailClose}},[t._v("×")]),s("div",{staticClass:"reward-result-content-top-title"},[t._v("手气不错!")]),s("img",{staticClass:"reward-result-content-top-img",attrs:{src:t.reward_data.pic}}),s("div",{staticClass:"reward-result-content-top-desc"},[t._v("抽中 "+t._s(t.reward_data.desc))])]),t._m(12)]):t._e(),2===t.reward_type?s("div",{staticClass:"reward-result-content"},[s("div",{staticClass:"reward-result-content-top"},[s("div",{staticClass:"reward-result-content-top-close",on:{click:t.prizeDetailClose}},[t._v("×")]),s("div",{staticClass:"reward-result-content-top-title"},[t._v("手气不错!")]),s("img",{staticClass:"reward-result-content-top-img",attrs:{src:t.reward_data.pic}}),s("div",{staticClass:"reward-result-content-top-desc"},[t._v("抽中 "+t._s(t.reward_data.desc))])]),s("div",{staticClass:"reward-result-content-bottom"},[s("div",{staticClass:"reward-result-content-bottom-desc"},[t._v("系统自动为你增加 "+t._s(t.reward_data.day)+" 天会员资格， 请到我的会员查看")]),s("div",{staticClass:"reward-result-content-bottom-submit"},[t._v("马上查看")])])]):t._e(),3===t.reward_type?s("div",{staticClass:"reward-result-content"},[s("div",{staticClass:"reward-result-content-top3"},[s("div",{staticClass:"reward-result-content-top-close",on:{click:t.prizeDetailClose}},[t._v("×")]),s("div",{staticClass:"reward-result-content-top-title"},[t._v("这次没中!")]),t._m(13),s("div",{staticClass:"reward-result-content-top-desc"})]),t._m(14)]):t._e()])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top"},[s("img",{staticClass:"top-one",attrs:{src:o("f3d1")}}),s("img",{staticClass:"top-bg",attrs:{src:o("a2ba")}}),s("div",{staticClass:"top-content"},[s("img",{staticClass:"top-content-chance",attrs:{src:o("474f")}}),s("p",{staticClass:"top-content-p"},[t._v("未登录，你还有0次抽奖")])]),s("img",{staticClass:"top-line",attrs:{src:o("6114")}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("span",[t._v("1999元 ")]),t._v("Bose")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticStyle:{visibility:"hidden"}},[o("span",[t._v("  ")]),t._v("Bose")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticStyle:{visibility:"hidden"}},[o("span",[t._v("  ")]),t._v("Bose")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"items-second"},[o("span",[t._v("49元 ")]),t._v("热敷眼罩")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticStyle:{visibility:"hidden"}},[o("span",[t._v("  ")]),t._v("Bose")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticStyle:{visibility:"hidden"}},[o("span",[t._v("  ")]),t._v("Bose")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("span",[t._v("300元  ")]),t._v("MUJI小")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticStyle:{visibility:"hidden"}},[o("span",[t._v("  ")]),t._v("Bose")])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[o("span",[t._v("499元 ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-notice"},[s("img",{staticClass:"home-notice-img",attrs:{src:o("818f")}}),s("div",{staticClass:"home-notice-desc"},[s("div",{staticClass:"home-notice-desc-inner"},[t._v("xxxxx 获得xxxx xxxxx 获 获得xxxx xxxxx 获 获得xxxx xxxxx 获 获得xxxx xxxxx 获")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home-tips"},[s("img",{staticClass:"home-tips-img",attrs:{src:o("d6ed")}}),s("p",[t._v("1.2019年1月1日前开通小睡眠月会员及以上用户均可参与抽奖，月会员抽奖1次，季会员抽奖3次，年会员抽奖12次，连续包月会员抽奖3次，每个用户最多抽奖36次。")]),s("p",[t._v("2.抽中实物奖品的用户，活动结束10个工作日安排快递，请正确填写领取信息，如不填或填错，发奖不成功由用户自行负责。")]),s("p",[t._v("3.抽中小睡眠免费会员资格用户，则系统自动为你延长会员资格，例如原2019年1月5日会员资格到期，你抽中免费月会员资格，则会员到期时间自动延长到2019年2月5日。")]),s("p",[t._v("4.广州心与潮信息科技有限公司对本活动拥有最终解释权。 ")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"reward-result-content-bottom"},[o("p",{staticClass:"reward-result-content-bottom-title"},[t._v("· 填写收件信息 ·")]),o("div",{staticClass:"reward-result-content-bottom-reciver"},[t._v("收件人: "),o("input")]),o("div",{staticClass:"reward-result-content-bottom-number"},[t._v("手机号: "),o("input")]),o("div",{staticClass:"reward-result-content-bottom-address"},[t._v("地址: "),o("textarea")]),o("div",{staticClass:"reward-result-content-bottom-submit"},[t._v("确认")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"huajie",staticStyle:{"background-color":"#3FA8F4","background-blend-mode":"lighten"}},[s("img",{staticClass:"reward-result-content-top-img",attrs:{src:o("49b3")}})])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"reward-result-content-bottom"},[o("div",{staticClass:"reward-result-content-bottom-desc"}),o("div",{staticClass:"reward-result-content-bottom-submit",staticStyle:{"background-color":"#3FA8F4"}},[t._v("再来一次")])])}],v=(o("ec80"),o("aa0f"),o("25d7"),o("dccb"),o("b5aa"),o("701f")),f={name:"home",data:function(){return{togglebg:!1,prize_detail:!1,reward_type:3,home_height:0,click_busy:!0,toggleBlink:!0,bink_content:"",better_scroll:"",detail:"asd",reward_show:!1,busy:!1,reward_data:{pic:o("49b3"),desc:"",day:7},target:5}},components:{},methods:{toReward:function(){this.busy||(this.busy=!0,this.$router.push({path:"/reward"}))},tgBGDOWN:function(){this.vibration(50),this.togglebg=!0},tgBGUP:function(){this.vibration(50),this.togglebg=!1},bScroll:function(){var t=document.querySelector("#app");this.better_scroll=new a["a"](t,{click:!0,bounce:{top:!1,bottom:!1,left:!1,right:!1}})},clickEvent:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e,o=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.click_busy){t.next=7;break}return this.click_busy=!1,t.next=4,new Promise(function(t){var e=parseInt(document.querySelector(".change-style-item").getAttribute("index")),s=Math.abs(e-o.target);e>o.target&&(s=8-parseInt(e)+o.target),o.start(1e3,t,32+s)});case 4:e=t.sent,console.log(e+"完成动画hahahah"),setTimeout(function(){o.reward_type=2;var t=[1,3,5,7],e=[2,6,8],s=document.querySelector(".item"+o.target+" img");console.log(s),o.reward_data.pic=s.getAttribute("src"),o.reward_data.desc=s.getAttribute("desc"),t.includes(parseInt(o.target))&&(o.reward_type=1,o.vibration(2e3)),4===parseInt(o.target)&&(o.reward_type=3,o.vibration(100)),e.includes(parseInt(o.target))&&(o.reward_type=2,o.vibration(1e3)),o.reward_data.day=s.getAttribute("day"),o.reward_show=!0,o.better_scroll.scrollTo(0,0,500),o.better_scroll.disable(),setTimeout(function(){o.target=o.WJH.randomNum(1,8),o.$nextTick(function(){o.click_busy=!0})},200)},1e3);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),start:function(t,e,o){var s=this,n=this.Animation(o);console.log(n),"done"!==n?n<=4?setTimeout(function(){s.start(50,e,o)},50):n>=o-5?setTimeout(function(){s.start(t+200,e,o)},t):setTimeout(function(){s.start(t,e,o)},t):e("ok")},Animation:function(){var t=0;return function(e){return t+=1,console.log("对 这是动画"),this.addChange(e),t===e?(t=0,"done"):t}}(),addChange:function(){var t=2;return function(e){var o=!0,s=!1,n=void 0;try{for(var i,a=document.querySelectorAll(".items")[Symbol.iterator]();!(o=(i=a.next()).done);o=!0){var r=i.value;r.classList.remove("change-style-item")}}catch(c){s=!0,n=c}finally{try{o||null==a.return||a.return()}finally{if(s)throw n}}document.querySelector(".item"+t).classList.add("change-style-item"),t+=1,9===t&&(t=1)}}(),prizeDetail:function(t){console.log(document.querySelector(".item"+t+" img").getAttribute("src")),this.detail=document.querySelector(".item"+t).innerHTML,this.prize_detail=!0,this.better_scroll.disable(),this.better_scroll.scrollTo(0,0,500)},prizeDetailClose:function(){this.prize_detail=!1,this.reward_show=!1,this.better_scroll.enable(),console.log("???")},vibration:function(t){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(navigator.vibrate(t),console.log("支持设备震动！"))}},mounted:function(){var t=this;this.busy=!1,this.$nextTick(this.bScroll()),this.bink_content=setInterval(function(){t.toggleBlink=!t.toggleBlink},400)}},A=f,C=(o("aa82"),o("b5d4"),Object(l["a"])(A,m,p,!1,null,"bfc7ce8c",null));C.options.__file="Home.vue";var h=C.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reward"},[s("div",{staticClass:"reward-template"},[t._m(0),t._l(t.list,function(e){e.li;var o=e.index;return s("div",{key:o,staticClass:"list"},[s("p",[t._v("文字内容")]),s("span",[t._v("详情")])])}),t.nothing?s("div",{staticClass:"reward-template-outer"},[s("img",{staticClass:"reward-template-outer-bg",attrs:{src:o("49b3")}}),s("p",{staticClass:"reward-template-outer-desc"},[t._v("暂无中奖奖品")])]):t._e()],2)])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reward-template-outermg"},[s("img",{staticClass:"reward-template-outermg-titlemg",attrs:{src:o("c4fc")}})])}],k={name:"Reward",data:function(){return{nothing:!1,list:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}},watch:{list:function(){this.$nextTick(this.$parent.bScroll)}},mounted:function(){setTimeout(this.$parent.bScroll,40)}},_=k,B=(o("4756"),Object(l["a"])(_,b,y,!1,null,"ce350e2a",null));B.options.__file="Reward.vue";var w=B.exports;s["a"].use(g["a"]);var x=new g["a"]({routes:[{path:"/",name:"home",component:h},{path:"/reward",name:"reward",component:w},{path:"/about",name:"about",component:function(){return o.e("about").then(o.bind(null,"f820"))}}]}),E=o("f2de");s["a"].use(E["a"]);var S=new E["a"].Store({state:{},mutations:{},actions:{}}),Q=o("9838");Object(Q["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});o("5a09"),o("5616"),o("aba3"),o("20a2");var j=o("2ce0"),I=o("ed3a"),K=function(){function t(){Object(j["a"])(this,t)}return Object(I["a"])(t,null,[{key:"promiseForBoolean",value:function(){var t,e,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s={};Object.assign(s,o);var n=function(e){o.boolean===!s.boolean&&(clearInterval(t),e())};return e=new Promise(function(e,o){t=setInterval(n.bind(null,e),1e3)}),e}},{key:"getAPIData",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2?arguments[2]:void 0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=new(new XMLHttpRequest),n="";s.open("GET",t),s.onreadystatechange=function(){4===this.readyState&&200===this.status&&e&&e()},s.setRequestHeader("Content-Type","application/json");var i=!0,a=!1,r=void 0;try{for(var c,l=o[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var d=c.value,u=d.val,g=d.key;n+=g+"="+u+"&"}}catch(m){a=!0,r=m}finally{try{i||null==l.return||l.return()}finally{if(a)throw r}}n.replace(/&$/,""),s.send()}},{key:"randomNum",value:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}},{key:"musicCount",value:function(t){var e=parseInt(t),o=0,s=0;e>60&&(o=parseInt(e/60),e=parseInt(e%60),o>60&&(s=parseInt(o/60),o=parseInt(o%60)));var n="";parseInt(e)<10&&(n="0");var i=n+parseInt(e)+" ",a="0";return i=a+parseInt(o)+" : "+i,s>0&&(i=parseInt(s)+"小时"+i),i}},{key:"dateFormat",value:function(t,e){if(!e||"string"!==typeof e)return console.error("format is undefiend or type is Error"),"";t=t instanceof Date?t:"number"===typeof t||"string"===typeof t?new Date(t):new Date;var o={"y+":t.getFullYear(),"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var s in o)if(new RegExp(s).test(e)){var n=RegExp.lastMatch;e=e.replace(n,o[s].toString())}return e}}]),t}();s["a"].prototype.WJH=K,s["a"].config.productionTip=!1,o("dc72"),new s["a"]({router:x,store:S,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var s=o("24cf"),n=o.n(s);n.a},"5c15":function(t,e,o){t.exports=o.p+"img/prize_muji.b7f31290.png"},"5c64":function(t,e,o){"use strict";var s=o("e41e"),n=o.n(s);n.a},"5f41":function(t,e,o){t.exports=o.p+"img/prize_bose@2x.5e4ce0b8.png"},6114:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAUCAYAAADSi7icAAACkklEQVR4Xu3dXW7iQBBF4e498J5FZP+L4T17cOQEjCFuuyKE6J9vXjMzAvueuqcaK+R08Geapo+U0mn1175yzuejf7f+uf/j/mq5Hq7HHj/yIR/yEW8YvOAFL3i5XIEh/DQLvMCPFPjS3Vb+yt8sNAvNwpTMQrPQLKx7FhbFHbzgBW/d8G69OtziFre4tYBYQB4p0A39dMOmuLvB/dxg8O6XuKzLOtElukSX6OpKXRmfhO/l5Y+4ExkiQ2Ti+OIFL3jBC/F/r8isE2gmm8m9z+Q7cRd4ge898Nf3J+uyLuuEm3ATbiftTtrjk7AOXhZxJzJEhsjE8cULXvCCF+Jfh8jM98FMNpNHmck/4i7wAj9K4GVd1mWdcBNuve+k3Ul7fBLWxUsmMkSGyMTxxQte8IIX4l+XyPiumRuTOqr/jprF/XP1Nof45fWl2hH4/gMv679XQNZl3QJiAbGAmIU+eWjvk4e1uJN23xC7JJjYETtiR+yIHbEjdu2JHW775vYq7qSdtJP2wny2xFhiLDGWGDLUtwyllHgQD2rDg2YpyTmf42MZvE4gnEDgZbkCyk7ZtVF2eu7kUUGPCm51l8Optg6nNr851elSXMsEvq3Ax++sBdWCakHFiwV1vgJ6Ts/xwvg0fDUv/xL3V7+Y6GXxOgwRQyRKi9K1gFhA4rTgBS94wUvdC3tY3MkyWSbL8XGGF7zgBS+XK+BxMo+TLTDoBt3wbDeExF3QBO3ZoB1VuIzJmIwdUXL7OV7wghe8WAzH/ITsUNwVhIJQEApCQYxZENjHPvax7/Gpuh6f2hV30k7aFbfiVtyKW3HXVdylV6OzdbbO7r+zi+JuABgABkD/A2DrHWIf+9jHvoXdwm5hr3Nh/wZ7M0XcdT+OrAAAAABJRU5ErkJggg=="},"6e81":function(t,e,o){t.exports=o.p+"img/prize_vip2.ec4b8b48.png"},"75ea":function(t,e,o){t.exports=o.p+"img/prize_no.a555b83f.png"},"818f":function(t,e,o){t.exports=o.p+"img/notice.872cb8b5.png"},"868f":function(t,e,o){},a2ba:function(t,e,o){t.exports=o.p+"img/cloud_bg@2x.4afa5cf6.png"},aa82:function(t,e,o){"use strict";var s=o("868f"),n=o.n(s);n.a},b5d4:function(t,e,o){"use strict";var s=o("d636"),n=o.n(s);n.a},c4fc:function(t,e,o){t.exports=o.p+"img/myprize.240805ff.png"},d636:function(t,e,o){},d6ed:function(t,e,o){t.exports=o.p+"img/explain.ca26038a.png"},dc72:function(t,e){function o(){const t=document.documentElement.clientWidth;let e=document.querySelector("html");e.style.fontSize=t/10+"px"}o(),window.addEventListener("resize",o)},e41e:function(t,e,o){},f3d1:function(t,e,o){t.exports=o.p+"img/title@2x.2d160bc3.png"},fc5a:function(t,e,o){t.exports=o.p+"img/prize_41.cf084d93.png"}});
//# sourceMappingURL=app.1005ef1f.js.map