(function(t){function e(e){for(var i,a,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)a=r[d],n[a]&&m.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,a=1;a<s.length;a++){var c=s[a];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var i={},n={app:0},o=[];function a(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"b4a4cb96"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s=n[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise(function(e,i){s=n[t]=[e,i]});e.push(s[2]=i);var o,c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=a(t),o=function(e){l.onerror=l.onload=null,clearTimeout(d);var s=n[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+i+": "+o+")");a.type=i,a.request=o,s[1](a)}n[t]=void 0}};var d=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,c.appendChild(l)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(s,i,function(e){return t[e]}.bind(null,i));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://webres.psy-1.com/sgy/dist/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0268":function(t,e,s){},"0416":function(t,e,s){t.exports=s.p+"img/prize_soundbox.a75fa945.png"},"24cf":function(t,e,s){},"474f":function(t,e){t.exports="data:image/png;base64,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"},"49b3":function(t,e,s){t.exports=s.p+"img/prize_no2.14a7450b.png"},"56d7":function(t,e,s){"use strict";s.r(e);s("3a0f"),s("a3a3"),s("4d0b");var i=s("329b"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view"),s("transition",{attrs:{name:"fade"}},[t.tips.toggle?s("div",{staticClass:"tips"},[t._v(t._s(t.tips.desc))]):t._e()]),t.recevier_data.toggle?s("div",{staticClass:"recevier-data"},[s("div",{staticClass:"template"},[s("div",{staticClass:"close",on:{click:function(e){t.recevier_data.toggle=!1}}},[t._v("×")]),1===t.recevier_data.type?s("div",{staticClass:"data",domProps:{innerHTML:t._s(t.recevier_data.data)}}):s("div",{staticClass:"data"},[s("div",{staticClass:"input"},[s("div",{staticClass:"item"},[s("p",[t._v("收件人:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user_input.user_name,expression:"user_input.user_name"}],domProps:{value:t.user_input.user_name},on:{input:function(e){e.target.composing||t.$set(t.user_input,"user_name",e.target.value)}}})]),s("div",{staticClass:"item"},[s("p",[t._v("手机号:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user_input.user_number,expression:"user_input.user_number"}],domProps:{value:t.user_input.user_number},on:{input:function(e){e.target.composing||t.$set(t.user_input,"user_number",e.target.value)}}})]),s("div",{staticClass:"item"},[s("p",[t._v("地址:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user_input.user_address,expression:"user_input.user_address"}],staticClass:"fuck",domProps:{value:t.user_input.user_address},on:{input:function(e){e.target.composing||t.$set(t.user_input,"user_address",e.target.value)}}})]),s("div",{staticClass:"my-button",on:{click:t.submit}},[t._v("确定")])])])])]):t._e()],1)},o=[],a=s("6f44"),r=s("2ce0"),c=s("ed3a"),l=function(){function t(){Object(r["a"])(this,t)}return Object(c["a"])(t,null,[{key:"is_cosleep",value:function(){return this.is_cosleep_android()||this.is_cosleep_ios()}},{key:"is_cosleep_ios",value:function(){var t=!1;try{t="undefined"!==typeof window.webkit.messageHandlers.XinchaoApp}catch(e){}return t}},{key:"is_cosleep_android",value:function(){return"undefined"!==typeof window.XinchaoApp}},{key:"get_api_root",value:function(){switch("production"){case"production":return"https://api.psy-1.com";case"test":return"https://api.debug.psy-1.com"}}},{key:"get_web_root",value:function(){switch("production"){case"production":return"https://www.heartide.com";case"test":return"https://web.debug.psy-1.com"}}},{key:"baidu_statics",value:function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?c6a0be7a2e98e04ca2cf523568e2cbc4";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}}]),t}(),d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2?arguments[2]:void 0;try{var i={Method:t,Data:e},n="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));i=JSON.stringify(i),Xinchao.Web[n]=function(t,e){s&&s(t,e),delete Xinchao.Web[n]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:i,cbName:n}):XinchaoApp.callRouter(i,n)}catch(o){}},u={data:function(){return{tips:{desc:"",toggle:!1,busy:!1},url:"https://api.debug.psy-1.com",openid:"123",recevier_data:{data:"",toggle:!1,type:1},click_once:[{one:!1}],user_input:{user_name:"",user_number:"",user_address:""},ticket_code:""}},methods:{bScroll:function(){var t=document.querySelector("#app");this.better_scroll=new a["a"](t,{click:!0,bounce:{top:!1,bottom:!1,left:!1,right:!1}})},toMemberCenter:function(){d("Redirect",{code:""})},Tips:function(t){var e=this;this.tips.desc=t,this.tips.busy||(this.tips.toggle=!0,this.tips.busy=!0,setTimeout(function(){e.tips.toggle=!1,e.tips.busy=!1},2e3))},userData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,s=arguments.length>2?arguments[2]:void 0;this.ticket_code=s,this.recevier_data.toggle=!0,this.recevier_data.data=t,this.recevier_data.type=e},submit:function(){var t=this;if(!this.click_once[0].one){this.click_once[0].one=!0,setTimeout(function(){t.click_once[0].one=!1},300),this.recevier_data.toggle=!1;var e={user_name:this.user_input.user_name,user_number:this.user_input.user_number,user_address:this.user_input.user_address};$.post(this.url+"/web/v1/vip/lottery/complete",{openid:this.openid,ticket_id:this.ticket_code,ticket_receiver:e},function(e){console.log(e.msg),"成功"===e.msg&&(t.Tips("成功"),t.$children[0].getRewardData())})}}},mounted:function(){}},m=u,g=(s("5c0b"),s("5c64"),s("048f")),p=Object(g["a"])(m,n,o,!1,null,null,null);p.options.__file="App.vue";var v=p.exports,f=s("081a"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home",style:t.home_height},[i("div",{staticClass:"top"},[i("img",{staticClass:"top-one",attrs:{src:s("f3d1")}}),i("img",{staticClass:"top-bg",attrs:{src:s("a2ba")}}),i("div",{staticClass:"top-content"},[i("img",{staticClass:"top-content-chance",attrs:{src:s("474f")}}),i("p",{staticClass:"top-content-p",domProps:{innerHTML:t._s(t.login_message)},on:{click:t.callLogin}})]),i("img",{staticClass:"top-line",attrs:{src:s("6114")}})]),i("div",{staticClass:"to-reward",on:{click:t.toReward}},[t._v("我的奖品")]),i("div",{staticClass:"outer"},[i("div",{staticClass:"outer-dot"},[i("div",{staticClass:"type1",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}}),i("div",{staticClass:"type2",class:{"common-dot1":t.toggleBlink,"common-dot2":!t.toggleBlink}}),i("div",{staticClass:"type1",class:{"common-dot1":!t.toggleBlink,"common-dot2":t.toggleBlink}})]),i("div",{staticClass:"choujiang"},[i("div",{staticClass:"items  item1 change-style-item",attrs:{index:"1"},on:{click:function(e){t.prizeDetail(1)}}},[i("img",{attrs:{desc:"1999元 Bose遮噪睡眠耳塞",src:s("5f41")}}),t._m(0),i("p",{staticClass:"items-second"},[t._v("遮噪睡眠耳塞")])]),i("div",{staticClass:"items  item2",attrs:{index:"2"},on:{click:function(e){t.prizeDetail(2)}}},[i("img",{attrs:{day:"1个月会员",desc:"30元小睡眠 1个月会员",src:s("6e81")}}),t._m(1),i("p",{staticClass:"items-second"},[t._v("1个月会员")])]),i("div",{staticClass:"items  item3",attrs:{index:"3"},on:{click:function(e){t.prizeDetail(3)}}},[i("img",{attrs:{desc:"49元 热敷眼罩",src:s("fc5a")}}),t._m(2),t._m(3)]),i("div",{staticClass:"items  item8",attrs:{index:"8"},on:{click:function(e){t.prizeDetail(8)}}},[i("img",{attrs:{day:"7天会员",desc:"小睡眠7天会员",src:s("6e81")}}),t._m(4),i("p",{staticClass:"items-second"},[t._v("小睡眠7天会员")])]),i("a",{staticClass:"begin",class:{bgdown:t.togglebg,bgup:!t.togglebg},on:{touchstart:t.tgBGDOWN,touchend:t.tgBGUP,click:t.clickEvent}},[i("div",{staticClass:"items  item item-begin",attrs:{index:""}})]),i("div",{staticClass:"items  item4",attrs:{index:"4"},on:{click:function(e){t.prizeDetail(4)}}},[i("img",{attrs:{desc:"谢谢参与",src:s("75ea")}}),t._m(5),i("p",{staticClass:"items-second"},[t._v("    谢谢参与    ")])]),i("div",{staticClass:"items  item7",attrs:{index:"7"},on:{click:function(e){t.prizeDetail(7)}}},[i("img",{attrs:{desc:"300元 MUJI小型超声波香薰机",src:s("5c15")}}),t._m(6),i("p",{staticClass:"items-second"},[t._v("型超声波香薰机")])]),i("div",{staticClass:"items  item6",attrs:{index:"6"},on:{click:function(e){t.prizeDetail(6)}}},[i("img",{attrs:{day:"12个月会员",desc:"268元小睡眠 12个月会员",src:s("6e81")}}),t._m(7),i("p",{staticClass:"items-second"},[t._v("12个月会员")])]),i("div",{staticClass:"items  item5",attrs:{index:"5"},on:{click:function(e){t.prizeDetail(5)}}},[i("img",{attrs:{desc:"499元 智能音箱",src:s("0416")}}),t._m(8),i("p",{staticClass:"items-second"},[t._v("    智能音箱   ")])])])]),t._m(9),t._m(10),i("div",{directives:[{name:"show",rawName:"v-show",value:t.prize_detail,expression:"prize_detail"}],staticClass:"prize-detail",on:{click:t.prizeDetailClose}},[i("div",{staticClass:"prize-detail-content",domProps:{innerHTML:t._s(t.detail)}}),i("div",{staticClass:"prize-detail-close"})]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.reward_show,expression:"reward_show"}],staticClass:"reward-result"},[1===t.reward_type?i("div",{staticClass:"reward-result-content"},[i("div",{staticClass:"reward-result-content-top"},[i("div",{staticClass:"reward-result-content-top-close",on:{click:t.prizeDetailClose}},[t._v("×")]),i("div",{staticClass:"reward-result-content-top-title"},[t._v("手气不错!")]),i("img",{staticClass:"reward-result-content-top-img",attrs:{src:t.reward_data.pic}}),i("div",{staticClass:"reward-result-content-top-desc"},[t._v("抽中 "+t._s(t.reward_data.desc))])]),i("div",{staticClass:"reward-result-content-bottom"},[i("p",{staticClass:"reward-result-content-bottom-title"},[t._v("· 填写收件信息 ·")]),i("div",{staticClass:"reward-result-content-bottom-reciver"},[t._v("收件人: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user_message.user_name,expression:"user_message.user_name"}],domProps:{value:t.user_message.user_name},on:{input:function(e){e.target.composing||t.$set(t.user_message,"user_name",e.target.value)}}})]),i("div",{staticClass:"reward-result-content-bottom-number"},[t._v("手机号: "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user_message.user_number,expression:"user_message.user_number"}],domProps:{value:t.user_message.user_number},on:{input:function(e){e.target.composing||t.$set(t.user_message,"user_number",e.target.value)}}})]),i("div",{staticClass:"reward-result-content-bottom-address"},[t._v("地址: "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.user_message.user_address,expression:"user_message.user_address"}],domProps:{value:t.user_message.user_address},on:{input:function(e){e.target.composing||t.$set(t.user_message,"user_address",e.target.value)}}})]),i("div",{staticClass:"reward-result-content-bottom-submit",on:{click:t.submitUserMessage}},[t._v("确认")])])]):t._e(),2===t.reward_type?i("div",{staticClass:"reward-result-content"},[i("div",{staticClass:"reward-result-content-top"},[i("div",{staticClass:"reward-result-content-top-close",on:{click:t.prizeDetailClose}},[t._v("×")]),i("div",{staticClass:"reward-result-content-top-title"},[t._v("手气不错!")]),i("img",{staticClass:"reward-result-content-top-img",attrs:{src:t.reward_data.pic}}),i("div",{staticClass:"reward-result-content-top-desc"},[t._v("抽中 "+t._s(t.reward_data.desc))])]),i("div",{staticClass:"reward-result-content-bottom"},[i("div",{staticClass:"reward-result-content-bottom-desc"},[t._v("系统自动为你增加"+t._s(t.reward_data.day)+",请到我的会员查看")]),i("div",{staticClass:"reward-result-content-bottom-submit"},[t._v("马上查看")])])]):t._e(),3===t.reward_type?i("div",{staticClass:"reward-result-content"},[i("div",{staticClass:"reward-result-content-top3"},[i("div",{staticClass:"reward-result-content-top-close",on:{click:t.prizeDetailClose}},[t._v("×")]),i("div",{staticClass:"reward-result-content-top-title"},[t._v("这次没中!")]),t._m(11),i("div",{staticClass:"reward-result-content-top-desc"})]),i("div",{staticClass:"reward-result-content-bottom"},[i("div",{staticClass:"reward-result-content-bottom-desc"}),i("div",{staticClass:"reward-result-content-bottom-submit",staticStyle:{"background-color":"#3FA8F4"},on:{click:t.prizeDetailClose}},[t._v("谢谢参与")])])]):t._e()])])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",[t._v("1999元 ")]),t._v("Bose")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",[t._v("30元 ")]),t._v("小睡眠")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticStyle:{visibility:"hidden"}},[s("span",[t._v("  ")]),t._v("Bose")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"items-second"},[s("span",[t._v("49元 ")]),t._v("热敷眼罩")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticStyle:{visibility:"hidden"}},[s("span",[t._v("  ")]),t._v("Bose")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticStyle:{visibility:"hidden"}},[s("span",[t._v("  ")]),t._v("Bose")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",[t._v("300元  ")]),t._v("MUJI小")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",[t._v("268元 ")]),t._v("小睡眠")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("span",[t._v("499元 ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-notice"},[i("img",{staticClass:"home-notice-img",attrs:{src:s("818f")}}),i("div",{staticClass:"home-notice-desc"},[i("div",{staticClass:"home-notice-desc-inner"},[t._v("\n        恭喜 流小酥 获得300元 MUJI小型超声波香薰机    J王 获得小睡眠年度会员 权权权蜀黍 获得小睡眠年度会员 hodor 获得小睡眠季会员     马晓锋 获得499元 智能音箱      华(｡ì _ í｡) 获得49元 热敷眼罩\n        思过崖 获得小睡眠年度会员      是超超呀 获得小睡眠季会员     WilliansSherlock 获得1999元 Bose遮噪睡眠耳塞\n\n      ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-tips"},[i("img",{staticClass:"home-tips-img",attrs:{src:s("d6ed")}}),i("p",[t._v("1.2019年1月1日前开通小睡眠月会员及以上用户均可参与抽奖，1个月会员抽奖1次，3个月会员抽奖3次，12个月会员抽奖12次，连续包月会员抽奖3次，每个用户最多抽奖36次。")]),i("p",[t._v("2.抽中实物奖品的用户，活动结束10个工作日安排快递，请正确填写领取信息，如不填或填错，发奖不成功由用户自行负责。")]),i("p",[t._v("3.抽中小睡眠免费会员资格用户，则系统自动为你延长会员资格，例如原2019年1月5日会员资格到期，你抽中免费1个月会员资格，则会员到期时间自动延长到2019年2月5日。")]),i("p",[t._v("4.广州心与潮信息科技有限公司对本活动拥有最终解释权。 ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"huajie",staticStyle:{"background-color":"#3FA8F4","background-blend-mode":"lighten"}},[i("img",{staticClass:"reward-result-content-top-img",attrs:{src:s("49b3")}})])}],b=(s("ec80"),s("aa0f"),s("25d7"),s("dccb"),s("b5aa"),s("701f")),A={name:"home",data:function(){return{ticket_id:"",url:"https://api.debug.psy-1.com",openid:"f5e5110f5b64fb68c8e3bfe27f59923d",user_message:{user_name:"",user_number:"",user_address:""},lottery_times:!0,login_message:"",togglebg:!1,prize_detail:!1,reward_type:3,home_height:0,click_busy:!0,toggleBlink:!0,bink_content:"",better_scroll:"",detail:"asd",reward_show:!1,busy:!1,reward_data:{pic:s("49b3"),desc:"",day:7},target:5,count:0,mark:2,click_once:[{one:!1,two:!1}],all_dumb:null,all_dumb_silly:!1,substance_click:!1}},components:{},methods:{toReward:function(){var t=this;this.click_once[0].two||(this.click_once[0].two=!0,setTimeout(function(){t.click_once[0].two=!1},300),console.log("调用reward"),d("isLogin",{},function(e,s){var i=null;i="string"===typeof s?JSON.parse(s):s,"已登录"===i.msg?t.$router.push({path:"/reward"}):t.callLogin()}))},tgBGDOWN:function(){this.vibration(50),this.togglebg=!0},tgBGUP:function(){this.vibration(50),this.togglebg=!1},bScroll:function(){var t=document.querySelector("#app");this.better_scroll=new a["a"](t,{click:!0,bounce:{top:!1,bottom:!1,left:!1,right:!1}})},clickEvent:function(){var t=Object(b["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.click_busy||!this.lottery_times){t.next=11;break}return this.click_busy=!1,t.next=4,this.submitLottery();case 4:return t.next=6,new Promise(function(t){var e=parseInt(document.querySelector(".change-style-item").getAttribute("index")),i=Math.abs(e-s.target);e>s.target&&(i=8-parseInt(e)+s.target),s.start(1e3,t,32+i)});case 6:e=t.sent,console.log(e+"完成动画hahahah"),setTimeout(function(){s.reward_type=2;var t=[1,3,5,7],e=[2,6,8],i=document.querySelector(".item"+s.target+" img");console.log(i),s.reward_data.pic=i.getAttribute("src"),s.reward_data.desc=i.getAttribute("desc"),t.includes(parseInt(s.target))&&(s.reward_type=1,s.vibration(2e3)),4===parseInt(s.target)&&(s.reward_type=3,s.vibration(100)),e.includes(parseInt(s.target))&&(s.reward_type=2,s.vibration(1e3)),s.reward_data.day=i.getAttribute("day"),s.reward_show=!0,s.better_scroll.scrollTo(0,0,500),s.better_scroll.disable(),s.substance_click=!1;var n=[2,4,6,8];n.includes(s.target)?s.submitUserMessage(!1):s.substance_click=!0,setTimeout(function(){s.$nextTick(function(){s.click_busy=!0})},200)},1e3),t.next=12;break;case 11:this.callLogin();case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),start:function(t,e,s){var i=this,n=this.Animation(s);console.log(n),"done"!==n?n<=4?setTimeout(function(){i.start(50,e,s)},50):n>=s-5?setTimeout(function(){i.start(t+200,e,s)},t):setTimeout(function(){i.start(t,e,s)},t):e("ok")},Animation:function(){return function(t){return this.count+=1,console.log("对 这是动画"),this.addChange(t),this.count===t?(this.count=0,"done"):this.count}}(),addChange:function(){return function(t){var e=!0,s=!1,i=void 0;try{for(var n,o=document.querySelectorAll(".items")[Symbol.iterator]();!(e=(n=o.next()).done);e=!0){var a=n.value;a.classList.remove("change-style-item")}}catch(r){s=!0,i=r}finally{try{e||null==o.return||o.return()}finally{if(s)throw i}}document.querySelector(".item"+this.mark).classList.add("change-style-item"),this.mark+=1,9===this.mark&&(this.mark=1)}}(),prizeDetail:function(t){console.log(document.querySelector(".item"+t+" img").getAttribute("src")),this.detail=document.querySelector(".item"+t).innerHTML,this.prize_detail=!0,this.better_scroll.disable(),this.better_scroll.scrollTo(0,0,500)},getOpenId:function(){var t=this;d("Login",{},function(e,s){var i=null;i="string"===typeof s?JSON.parse(s):s,t.$parent.openid=i.data.openid,t.$parent.openid="f5e5110f5b64fb68c8e3bfe27f59923d",t.getLotteryCount(),console.log(t.$parent.openid)})},prizeDetailClose:function(){this.substance_click&&this.submitUserMessage(!1),this.prize_detail=!1,this.reward_show=!1,this.better_scroll.enable(),console.log("???")},vibration:function(t){navigator.vibrate=navigator.vibrate||navigator.webkitVibrate||navigator.mozVibrate||navigator.msVibrate,navigator.vibrate&&(navigator.vibrate(t),console.log("支持设备震动！"))},getLotteryCount:function(){var t=this;$.get(this.$parent.url+"/web/v1/vip/lottery/count?openid="+this.$parent.openid,function(e){console.log(e),0===parseInt(e.data.count_total)?t.lottery_times=!1:t.lottery_times=!0,t.login_message='你还有<span class="top-content-p-span" style="color: #fff"> '.concat(e.data.count_remain," </span>次机会")})},submitLottery:function(){var t=this;return new Promise(function(e){$.get(t.$parent.url+"/web/v1/vip/lottery/code?openid="+t.$parent.openid,function(s){console.log(s);var i=s.data;t.ticket_id=i.ticket_id,t.target=parseInt(i.ticket_code)+1,t.getLotteryCount(),e()})})},submitUserMessage:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],s="";if(e){for(var i in this.user_message)if(!this.user_message[i])return void this.$parent.Tips("信息不能为空");s=JSON.stringify(this.user_message)}else s="";$.post(this.$parent.url+"/web/v1/vip/lottery/complete",{openid:this.$parent.openid,ticket_id:this.ticket_id,ticket_receiver:s},function(s){console.log(s.msg),"成功"===s.msg&&(e?t.$parent.Tips("领取成功"):console.log("hjh"),e?t.prizeDetailClose():console.log("成功"),t.getLotteryCount())})},loginInit:function(){var t=this;l.is_cosleep()?d("isLogin",{},function(e,s){console.log("logininit2");var i=null;i="string"===typeof s?JSON.parse(s):s,"已登录"===i.msg?t.getOpenId():(t.login_message="未登录，你还有0次抽奖",t.lottery_times=!1)}):(this.login_message="未登录，你还有0次抽奖",this.lottery_times=!1)},callLogin:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.click_once[0].one||(this.click_once[0].one=!0,setTimeout(function(){t.click_once[0].one=!1},200),console.log("点击登陆时间发送"),l.is_cosleep()&&d("isLogin",{},function(s,i){var n=null;if(n="string"===typeof i?JSON.parse(i):i,"已登录"===n.msg)clearInterval(t.all_dumb),console.log("已登陆"),t.loginInit();else{if(t.all_dumb_silly&&!e)return;d("Redirect",{code:1024},function(e,s){console.log("调用"),t.all_dumb_silly=!0,clearInterval(t.all_dumb),t.all_dumb=setInterval(function(){t.callLogin(!1)},500)})}}))}},mounted:function(){var t=this;this.busy=!1,this.$nextTick(this.bScroll()),this.bink_content=setInterval(function(){t.toggleBlink=!t.toggleBlink},400),this.loginInit()}},y=A,k=(s("8819"),s("b5d4"),Object(g["a"])(y,_,h,!1,null,"35c5b5f3",null));k.options.__file="Home.vue";var C=k.exports,w=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reward"},[i("div",{staticClass:"reward-template"},[t._m(0),i("transition-group",{attrs:{name:"fade"}},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"list"},[i("p",{domProps:{innerHTML:t._s(e.desc)}}),i("span",{on:{click:function(s){t.detail(e.get,e.vitual,e.ticket_receiver,e.ticket_code)}}},[t._v("详情")])])})),t.list_null?i("div",{staticStyle:{"padding-top":"10%",color:"#fff"}},[t._v("\n      暂无中奖物品\n    ")]):t._e(),t.nothing?i("div",{staticClass:"reward-template-outer"},[i("img",{staticClass:"reward-template-outer-bg",attrs:{src:s("49b3")}}),i("p",{staticClass:"reward-template-outer-desc"},[t._v("暂无中奖奖品")])]):t._e()],1)])},B=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"reward-template-outermg"},[i("img",{staticClass:"reward-template-outermg-titlemg",attrs:{src:s("c4fc")}})])}],x={name:"Reward",data:function(){return{nothing:!1,list:[],list_null:!1,click_once:[{one:!1}]}},methods:{getRewardData:function(){var t=this;this.list=[],$.get(this.$parent.url+"/web/v1/vip/lottery/history?openid="+this.$parent.openid,function(e){var s=!0,i=!1,n=void 0;try{for(var o,a=function(){var e=o.value,s="",i=!0,n=!1,a=function(){e.ticket_receiver?s+=",已领取":s+=',<span style="color: red; opacity: 0.7">&nbsp;未领取',i=!!e.ticket_receiver},r=parseInt(e.ticket_code);switch(!0){case 0===r:s="1999元 Bose 遮噪睡眠耳塞",a();break;case 1===r:s="30元小睡眠1个月会员,已领取",n=!0;break;case 2===r:s="49元 热敷眼罩",a();break;case 4===r:s="499元 智能音箱",a();break;case 5===r:s="268元小睡眠12个月会员,已领取",n=!0;break;case 6===r:s="300元 MUJI 小型超声波香薰机",a();break;case 7===r:s="小睡眠7天会员,已领取",n=!0;break}var c={desc:s,get:i,ticket_code:e.ticket_code,vitual:n,ticket_receiver:e.ticket_receiver};t.list.push(c)},r=e.data[Symbol.iterator]();!(s=(o=r.next()).done);s=!0)a()}catch(c){i=!0,n=c}finally{try{s||null==r.return||r.return()}finally{if(i)throw n}}})},detail:function(t,e,s,i){var n=this;if(!this.click_once[0].one)if(this.click_once[0].one=!0,setTimeout(function(){n.click_once[0].one=!1},300),e)this.$parent.Tips("已领取，请到我的会员查看");else if(s){var o=JSON.parse(s);console.log(o);var a='<p>收件人:<span class="data-span">'.concat(o.user_name,'</span></p><p>手机号:<span class="data-span">').concat(o.user_number,'</span></p><p>地址:<span class="data-span">').concat(o.user_address,"</span></p>");this.$parent.userData(a,1,i)}else this.$parent.userData("zz",2)}},watch:{list:function(){0===this.list.length?this.list_null=!0:this.list_null=!1}},created:function(){},mounted:function(){setTimeout(this.$parent.bScroll,40),this.getRewardData()}},E=x,I=(s("d39d"),Object(g["a"])(E,w,B,!1,null,"b1af6d6a",null));I.options.__file="Reward.vue";var S=I.exports;i["a"].use(f["a"]);var j=new f["a"]({routes:[{path:"/",name:"home",component:C},{path:"/reward",name:"reward",component:S},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),Q=s("f2de");i["a"].use(Q["a"]);var K=new Q["a"].Store({state:{},mutations:{},actions:{}}),T=s("9838");Object(T["a"])("".concat("https://webres.psy-1.com/sgy/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});s("5a09"),s("5616"),s("aba3"),s("20a2");var F=function(){function t(){Object(r["a"])(this,t)}return Object(c["a"])(t,null,[{key:"promiseForBoolean",value:function(){var t,e,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i={};Object.assign(i,s);var n=function(e){s.boolean===!i.boolean&&(clearInterval(t),e())};return e=new Promise(function(e,s){t=setInterval(n.bind(null,e),1e3)}),e}},{key:"getAPIData",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2?arguments[2]:void 0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new(new XMLHttpRequest),n="";i.open("GET",t),i.onreadystatechange=function(){4===this.readyState&&200===this.status&&e&&e()},i.setRequestHeader("Content-Type","application/json");var o=!0,a=!1,r=void 0;try{for(var c,l=s[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var d=c.value,u=d.val,m=d.key;n+=m+"="+u+"&"}}catch(g){a=!0,r=g}finally{try{o||null==l.return||l.return()}finally{if(a)throw r}}n.replace(/&$/,""),i.send()}},{key:"randomNum",value:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}},{key:"musicCount",value:function(t){var e=parseInt(t),s=0,i=0;e>60&&(s=parseInt(e/60),e=parseInt(e%60),s>60&&(i=parseInt(s/60),s=parseInt(s%60)));var n="";parseInt(e)<10&&(n="0");var o=n+parseInt(e)+" ",a="0";return o=a+parseInt(s)+" : "+o,i>0&&(o=parseInt(i)+"小时"+o),o}},{key:"dateFormat",value:function(t,e){if(!e||"string"!==typeof e)return console.error("format is undefiend or type is Error"),"";t=t instanceof Date?t:"number"===typeof t||"string"===typeof t?new Date(t):new Date;var s={"y+":t.getFullYear(),"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in s)if(new RegExp(i).test(e)){var n=RegExp.lastMatch;e=e.replace(n,s[i].toString())}return e}}]),t}();i["a"].prototype.WJH=F,i["a"].config.productionTip=!1,s("dc72"),new i["a"]({router:j,store:K,render:function(t){return t(v)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var i=s("24cf"),n=s.n(i);n.a},"5c15":function(t,e,s){t.exports=s.p+"img/prize_muji.b7f31290.png"},"5c64":function(t,e,s){"use strict";var i=s("e41e"),n=s.n(i);n.a},"5f41":function(t,e,s){t.exports=s.p+"img/prize_bose@2x.5e4ce0b8.png"},6114:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAu4AAAAUCAYAAADSi7icAAACkklEQVR4Xu3dXW7iQBBF4e498J5FZP+L4T17cOQEjCFuuyKE6J9vXjMzAvueuqcaK+R08Geapo+U0mn1175yzuejf7f+uf/j/mq5Hq7HHj/yIR/yEW8YvOAFL3i5XIEh/DQLvMCPFPjS3Vb+yt8sNAvNwpTMQrPQLKx7FhbFHbzgBW/d8G69OtziFre4tYBYQB4p0A39dMOmuLvB/dxg8O6XuKzLOtElukSX6OpKXRmfhO/l5Y+4ExkiQ2Ti+OIFL3jBC/F/r8isE2gmm8m9z+Q7cRd4ge898Nf3J+uyLuuEm3ATbiftTtrjk7AOXhZxJzJEhsjE8cULXvCCF+Jfh8jM98FMNpNHmck/4i7wAj9K4GVd1mWdcBNuve+k3Ul7fBLWxUsmMkSGyMTxxQte8IIX4l+XyPiumRuTOqr/jprF/XP1Nof45fWl2hH4/gMv679XQNZl3QJiAbGAmIU+eWjvk4e1uJN23xC7JJjYETtiR+yIHbEjdu2JHW775vYq7qSdtJP2wny2xFhiLDGWGDLUtwyllHgQD2rDg2YpyTmf42MZvE4gnEDgZbkCyk7ZtVF2eu7kUUGPCm51l8Optg6nNr851elSXMsEvq3Ax++sBdWCakHFiwV1vgJ6Ts/xwvg0fDUv/xL3V7+Y6GXxOgwRQyRKi9K1gFhA4rTgBS94wUvdC3tY3MkyWSbL8XGGF7zgBS+XK+BxMo+TLTDoBt3wbDeExF3QBO3ZoB1VuIzJmIwdUXL7OV7wghe8WAzH/ITsUNwVhIJQEApCQYxZENjHPvax7/Gpuh6f2hV30k7aFbfiVtyKW3HXVdylV6OzdbbO7r+zi+JuABgABkD/A2DrHWIf+9jHvoXdwm5hr3Nh/wZ7M0XcdT+OrAAAAABJRU5ErkJggg=="},"6e81":function(t,e,s){t.exports=s.p+"img/prize_vip2.ec4b8b48.png"},"75ea":function(t,e,s){t.exports=s.p+"img/prize_no.a555b83f.png"},"818f":function(t,e,s){t.exports=s.p+"img/notice.872cb8b5.png"},8819:function(t,e,s){"use strict";var i=s("0268"),n=s.n(i);n.a},a2ba:function(t,e,s){t.exports=s.p+"img/cloud_bg@2x.4afa5cf6.png"},b5d4:function(t,e,s){"use strict";var i=s("d636"),n=s.n(i);n.a},c4fc:function(t,e,s){t.exports=s.p+"img/myprize.240805ff.png"},d0e2:function(t,e,s){},d39d:function(t,e,s){"use strict";var i=s("d0e2"),n=s.n(i);n.a},d636:function(t,e,s){},d6ed:function(t,e,s){t.exports=s.p+"img/explain.ca26038a.png"},dc72:function(t,e){function s(){var t=document.documentElement.clientWidth,e=document.querySelector("html");e.style.fontSize=t/10+"px"}s(),window.addEventListener("resize",s)},e41e:function(t,e,s){},f3d1:function(t,e,s){t.exports=s.p+"img/title@2x.2d160bc3.png"},fc5a:function(t,e,s){t.exports=s.p+"img/prize_41.cf084d93.png"}});
//# sourceMappingURL=app.c0e92a16.js.map