(function(t){function e(e){for(var i,o,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)o=r[u],s[o]&&h.push(s[o][0]),s[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(i=!1)}i&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},s={app:0},n=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c886df6e"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,i){a=s[t]=[e,i]});e.push(a[2]=i);var n,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(t),n=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=s[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+i+": "+n+")");o.type=i,o.request=n,a[1](o)}s[t]=void 0}};var l=setTimeout(function(){n({type:"timeout",target:c})},12e4);c.onerror=c.onload=n,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="https://webres.psy-1.com/sgy/dist/",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0020":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACx0lEQVRYR+1XTW4aMRT2MxKeXblBySIRXpWeINwg3CD0BCUnSHKC0BOUnqDTExRuACsP2UBuALshi3nVh2xkHM+QElCkqiNlwWD8Pr/v5zkk3vmhd64v/n0A8/m88fz8fMXMXSFEQ0p5c3FxMXGdP0kHjDFNIroSQqBox6eZmcda6+27owF4fHxsF0VxbYs2y7R1NABo7Xq9viSirmvvawT9JgBorZTy0hZEe0sfZn4SQoyklGlRFG0iusXigwEYYzpE9HvPKafMnNZqtdQXmjHm7hgAtpsEIH7hpCistV7EAB4dANoopRzU6/XR2dnZMla0TCNvocBv473W+i4s7NkPNttqBHogoo9/pQEruGtmniilxnme9z0etwA8+6Fo24JagRJQkyRJGvz2dTmQZVlfCPHgnRKtbtjPKREtffvZU6ZWCyO/OwdrYDabdYui2KSZa2GE72/MPCgTINYfDMAvlmXZQAjxtcSGCyLaOAF0hcI8CoBgk3vwixS0Wf8pADYholRKOTo/Px+fBIDvAlguz3MHJqQL2sHfZj6c1IYoYP2PxHSOCFlbojtFUfzQWo9Kp6H1NDh3G+EE7hTRHLCWRHHnlsrkbrVaFAXgcxbbgZmjALIsw0XD18NKCIF49t9hXkDQi2gHjDFDIsJcr5p0LwAYY3pE9N39CCCTJBnAEb6DKjUQTjwvXMAbgumDFVIMQOnEy7IMqYgbUrUIg4VPSZK0naeD7yoBoL1Kqc95nuMOeMvMPa8zX7TWQ/d5RwPGGHj7MjxlRFw3rVYLPG6fkIIS/qZKqY4fVDsA/FMKITZhAuUHV66VUqoZG8P+ASIAplLKnn9RwZodAMh+Zv65R4A7LfTX2gzAmPYjG5Nx4AQZ7v3ChhUuwEZ9n78qoBC0tVr0lhTVgHtpO9Fj5k2ggAql1LDs9lOZNnu+PNr/BYeC+A/gD1EVDD/8WYXQAAAAAElFTkSuQmCC"},1564:function(t,e,a){"use strict";var i=a("2f92"),s=a.n(i);s.a},2154:function(t,e,a){"use strict";var i=a("4c95"),s=a.n(i);s.a},"21bb":function(t,e,a){"use strict";var i=a("b954"),s=a.n(i);s.a},"2f92":function(t,e,a){},"3a4b":function(t,e,a){"use strict";a.r(e);a("7bc1");function i(){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)},e=function(t){var e=t.id;if(this._el=document.getElementById(e),null!==this._el){this._radius=t.radius||10,this._duration=void 0===t.duration?500:t.duration,this._value=1e-7,this._maxValue=t.maxValue||100,this._text=void 0===t.text?function(t){return this.htmlifyNumber(t)}:t.text,this._strokeWidth=t.width||10,this._colors=t.colors||["#EEE","#F00"],this._svg=null,this._movingPath=null,this._wrapContainer=null,this._textContainer=null,this._wrpClass=t.wrpClass||"circles-wrp",this._textClass=t.textClass||"circles-text",this._valClass=t.valueStrokeClass||"circles-valueStroke",this._maxValClass=t.maxValueStrokeClass||"circles-maxValueStroke",this._styleWrapper=!1!==t.styleWrapper,this._styleText=!1!==t.styleText;var a=Math.PI/180*270;this._start=-Math.PI/180*90,this._startPrecise=this._precise(this._start),this._circ=a-this._start,this._generate().update(t.value||0)}};return e.prototype={VERSION:"0.0.6",_generate:function(){return this._svgSize=2*this._radius,this._radiusAdjusted=this._radius-this._strokeWidth/2,this._generateSvg()._generateText()._generateWrapper(),this._el.innerHTML="",this._el.appendChild(this._wrapContainer),this},_setPercentage:function(t){this._movingPath.setAttribute("d",this._calculatePath(t,!0)),this._textContainer.innerHTML=this._getText(this.getValueFromPercent(t))},_generateWrapper:function(){return this._wrapContainer=document.createElement("div"),this._wrapContainer.className=this._wrpClass,this._styleWrapper&&(this._wrapContainer.style.position="relative",this._wrapContainer.style.display="inline-block"),this._wrapContainer.appendChild(this._svg),this._wrapContainer.appendChild(this._textContainer),this},_generateText:function(){if(this._textContainer=document.createElement("div"),this._textContainer.className=this._textClass,this._styleText){var t={position:"absolute",top:0,left:0,textAlign:"center",width:"100%",fontSize:.7*this._radius+"px",height:this._svgSize+"px",lineHeight:this._svgSize+"px"};for(var e in t)this._textContainer.style[e]=t[e]}return this._textContainer.innerHTML=this._getText(0),this},_getText:function(t){return this._text?(void 0===t&&(t=this._value),t=parseFloat(t.toFixed(2)),"function"===typeof this._text?this._text.call(this,t):this._text):""},_generateSvg:function(){return this._svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),this._svg.setAttribute("xmlns","http://www.w3.org/2000/svg"),this._svg.setAttribute("width",this._svgSize),this._svg.setAttribute("height",this._svgSize),this._generatePath(100,!1,this._colors[0],this._maxValClass)._generatePath(1,!0,this._colors[1],this._valClass),this._movingPath=this._svg.getElementsByTagName("path")[1],this},_generatePath:function(t,e,a,i){var s=document.createElementNS("http://www.w3.org/2000/svg","path");return s.setAttribute("fill","transparent"),s.setAttribute("stroke",a),s.setAttribute("stroke-width",this._strokeWidth),s.setAttribute("d",this._calculatePath(t,e)),s.setAttribute("class",i),this._svg.appendChild(s),this},_calculatePath:function(t,e){var a=this._start+t/100*this._circ,i=this._precise(a);return this._arc(i,e)},_arc:function(t,e){var a=t-.001,i=t-this._startPrecise<Math.PI?0:1;return["M",this._radius+this._radiusAdjusted*Math.cos(this._startPrecise),this._radius+this._radiusAdjusted*Math.sin(this._startPrecise),"A",this._radiusAdjusted,this._radiusAdjusted,0,i,1,this._radius+this._radiusAdjusted*Math.cos(a),this._radius+this._radiusAdjusted*Math.sin(a),e?"":"Z"].join(" ")},_precise:function(t){return Math.round(1e3*t)/1e3},htmlifyNumber:function(t,e,a){e=e||"circles-integer",a=a||"circles-decimals";var i=(t+"").split("."),s='<span class="'+e+'">'+i[0]+"</span>";return i.length>1&&(s+='.<span class="'+a+'">'+i[1].substring(0,2)+"</span>"),s},updateRadius:function(t){return this._radius=t,this._generate().update(!0)},updateWidth:function(t){return this._strokeWidth=t,this._generate().update(!0)},updateColors:function(t){this._colors=t;var e=this._svg.getElementsByTagName("path");return e[0].setAttribute("stroke",t[0]),e[1].setAttribute("stroke",t[1]),this},getPercent:function(){return 100*this._value/this._maxValue},getValueFromPercent:function(t){return this._maxValue*t/100},getValue:function(){return this._value},getMaxValue:function(){return this._maxValue},update:function(e,a){if(!0===e)return this._setPercentage(this.getPercent()),this;if(this._value==e||isNaN(e))return this;void 0===a&&(a=this._duration);var i,s,n,o,r=this,c=r.getPercent(),l=1;return this._value=Math.min(this._maxValue,Math.max(0,e)),a?(i=r.getPercent(),s=i>c,l+=i%1,n=Math.floor(Math.abs(i-c)/l),o=a/n,function e(a){if(s?c+=l:c-=l,s&&c>=i||!s&&c<=i)t(function(){r._setPercentage(i)});else{t(function(){r._setPercentage(c)});var n=Date.now(),u=n-a;u>=o?e(n):setTimeout(function(){e(Date.now())},o-u)}}(Date.now()),this):(this._setPercentage(this.getPercent()),this)}},e.create=function(t){return new e(t)},e}e["default"]=i},"40be":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAChklEQVRYR91X0XHaQBDdPWa4+wsdBH4Y7sukAujA7iCkguAKbFcQOgipwEoFIR2YrxP8YHeA/wTDaDPL3GkO+SRhI4aZ6FOcbt++fW93QbjwgxeOD/8/gNVq1dput9dEdAMALSHEbbfbfXLMn4UBY0wbEa8BgIMO/TIT0V+tdfauNgDL5bKfpulXG7RdpK3aADC1m81mgIg3jt5jBH0SAKZWCDGwAZnewoeIXgBgJoSI0jTtI+IdH/4wAGPMEBH/VGQ5J6Ko0WhEvtCMMfd1AMguyYH4zZlyYK31cwhg7QCYRiHEpNlszjqdzjoUtEgjp5TAp/FBa32fD+zZj22WaYT1gIifT9VAEIBnPw7at6BeuSRcGqVUlCTJuG4NRIi49u1ns4ysFmY+O7VrwF3O9UREFzQoQD5bOwAi+qWUGhcJMKCNem1IREERFvWIczBQCYBtuNvtrtI0ZXG2iWh0Fhfks7bj94cLmP/96D5gPf3dsxZPuP2UKyqBtSS369ZJ09CvWeiiIgBxHPOiceV98woA7I7sXSUDxpgpIvJcL5t0bzRgjBkh4k/Pog9KqQk7JY7jCQAwm+XTMD/xvOayRsQxAHwqKkGZ0uM45q7IG1I5gNzBF6VU33k991uIAX9aPkspvyRJwjvgnS9IIvqmtZ46pg5WMmPMDBEH+SwD4rrt9XpMa/bkS1BQv7mUcug3sAMAfpYA8MRt1np4v9G6QSOlbIe6oJ9AAMBcCDHyFxU+cwBgsVjwfvdYIcADCv2zdgfgMb0XnANMRBMnyPzdb7biEhfwiB379SsDyoJmCxZtSUENuJeWiRER7WnnUkgpp8cOnzJglQy85+M6ztb2x+SjYC4O4B8c1AU/QwoCdgAAAABJRU5ErkJggg=="},"4c95":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("3c6b"),a("7bc1"),a("dac5"),a("6e26"),a("9604"),a("df67");var i=a("6e6d"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"app-template"},[a("router-view")],1),this.$root.showLoading?a("Loading"):t._e(),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom"},[i("a",{attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[i("div",{staticClass:"bottom-img"},[i("img",{staticClass:"bottom-hehe",attrs:{src:a("d977")}})])]),i("a",{attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[i("p",{staticClass:"bottom-center"},[t._v("小睡眠，不负休憩好时光")])]),i("a",{staticClass:"dl",attrs:{target:"view_window",href:"https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic"}},[i("p",{staticClass:"bottom-dl"},[t._v("下  载")])])])}],o=a("157a"),r=a.n(o),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loading animated fadeIn"},[i("img",{staticClass:"loading-img",attrs:{src:a("cb57")}})])}],u={name:"loading"},d=u,h=(a("d0cb"),a("17cc")),g=Object(h["a"])(d,c,l,!1,null,"579330db",null),p=g.exports,m={data:function(){return{}},components:{Loading:p},methods:{},mounted:function(){}},f=m,v=(a("58d8"),a("5c64"),a("1564"),Object(h["a"])(f,s,n,!1,null,"68d7f0a7",null)),A=v.exports,w=a("3bc2"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home animated fadeIn",style:t.home_height},[i("div",{staticClass:"qq",attrs:{id:"qqLoginBtn"}}),i("Music",{ref:"music",staticClass:"music"}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.$root.showWarning,expression:"$root.showWarning"}],staticClass:"not-allow-template"},[i("div",{staticClass:"template"},[i("img",{staticClass:"title-bg",attrs:{src:t.star_data.star_info.star_share_bg}}),i("img",{staticClass:"mask",attrs:{src:a("e389")}}),t.canClick?i("div",{staticClass:"content"},[i("div",[t._v("你的点亮次数已用完，活动链接内每天仅能点亮一次，登录小睡眠，可获得更多点亮次数。")]),i("div",{staticClass:"light-button",on:{click:t.toDownLoad}},[t._v("去小睡眠点亮")])]):i("div",{staticClass:"content"},[i("div",[t._v("请在微信、微博内打开链接参与点亮星光。登录小睡眠，可获得更多点亮次数。")]),i("div",{staticClass:"light-button",on:{click:function(e){t.$root.showWarning=!1}}},[t._v("我知道了")])])])]),i("div",{staticStyle:{"background-color":"RGBA(29, 9, 26, 1)"}},[i("img",{staticClass:"start-pro",attrs:{src:t.star_data.star_info.star_share_bg+"?imageMogr2/auto-orient"}})]),i("div",{staticClass:"content-template"},[i("img",{staticClass:"top-mask",attrs:{src:a("e389")}}),i("div",{staticClass:"fans-avatar"},[i("img",{staticClass:"avatar",attrs:{src:t.star_data.fans_info.fans_avatar+"?imageMogr2/auto-orient"}}),i("div",{staticClass:"circle",staticStyle:{opacity:"0"},attrs:{id:"circles-1"}})]),i("div",{staticClass:"fans-name"}),i("div",{staticClass:"help-desc"},[t.clb?i("div",{staticClass:"top"},[t._v("在小睡眠里")]):t._e(),t.clb?i("div",{staticClass:"bottom"},[t._v("每天为 "),i("span",{staticStyle:{color:"RGBA(83, 155, 230, 1)"}},[t._v(t._s(t.star_data.star_info.star_name))]),t._v(" 点亮星光")]):t._e(),t.clb?t._e():i("div",{staticClass:"top"},[t._v("快来帮 "),i("span",{staticStyle:{color:"RGBA(83, 155, 230, 1)"}},[t._v(t._s(t.star_data.star_info.star_name))]),t._v(" 点亮星光")]),t.clb?t._e():i("div",{staticClass:"bottom"},[t._v("一起听爱豆哄睡故事吧")])]),i("div",{staticClass:"light-button",class:{clickBefore:t.clb},on:{click:t.submitData}},[t._v(t._s(t.clb?"享受完整哄睡故事":"为他点亮"))]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.star_data.star_info.star_name,expression:"star_data.star_info.star_name"}],staticClass:"friend"},[i("span",{staticClass:"special-font"},[t._v(t._s(t.star_data.total_user))]),t._v(" 位好友点亮星光 "),i("span",{staticClass:"special-font"},[t._v(t._s(t.star_data.total_score))])]),i("div",{staticClass:"lighten-list-template"},t._l(t.star_data.lighten_list,function(e,a){return i("div",{key:a,staticClass:"list"},[i("div",{staticClass:"left"},[i("img",{staticClass:"avatar",attrs:{src:e.visitor_avatar}}),i("div",{staticClass:"name-template"},[i("div",{staticClass:"name"},[t._v(t._s(e.visitor_name))]),i("div",{staticClass:"date"},[t._v(t._s(t.parseDate(e.created_at)))])])]),i("div",{staticClass:"right"},[t._v("+"+t._s(e.visitor_score))])])}),0),i("div",{staticClass:"bottom-desc"},[t._v("小睡眠·APP")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showTips,expression:"showTips"}],staticClass:"tips animated fadeIn",on:{click:function(e){t.showTips=!1}}},[i("img",{staticClass:"success-img",attrs:{src:t.star_data.star_info.star_lighten_img+"?imageMogr2/auto-orient"}}),i("p",{staticClass:"p"},[t._v("贡献 "+t._s(t.score)+" 星光")])])],1)},y=[],b=(a("34a3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{ref:"audio",staticClass:"music light",attrs:{src:t.tgImg},on:{click:t.musicPlay}}),a("audio",{ref:"zz",attrs:{src:t.musicPath,id:"myaudio",controls:"",hidden:"",loop:t.loop}},[a("source",{attrs:{src:t.musicPath,type:"audio/mpeg"}})])])}),C=[],I={name:"music",data:function(){return{toggle:!0,loop:!1,onPath:a("40be"),offPath:a("0020"),musicPath:""}},computed:{tgImg:function(){var t=this.toggle;return t=this.toggle?this.offPath:this.onPath,t}},methods:{musicPlay:function(t){t&&t.preventDefault(),this.dontBorderMeFUCKYOU();try{document.getElementById("myaudio").paused}catch(t){!0===this.toggle?(document.getElementById("myaudio").play(),document.querySelector(".light").classList.add("light-go"),this.toggle=!1):(document.getElementById("myaudio").pause(),document.querySelector(".light").classList.remove("light-go"),this.toggle=!0)}var e=document.getElementById("myaudio");console.log(e),e.paused?(e.play(),document.querySelector("#myaudio").play(),e.paused||(document.querySelector(".light").classList.add("light-go"),this.toggle=!1)):(e.pause(),e.paused&&(document.querySelector(".light").classList.remove("light-go"),this.toggle=!0))},rawPlay:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=document.querySelector("#myaudio");if(e.paused){e.play();var a="";if(t)setInterval(function(){e.play()},40);e.paused||(t&&setTimeout(function(){clearInterval(a)},400),console.log(e.paused),console.log("这是Ok的"),document.querySelector(".light").classList.add("light-go"),this.toggle=!1)}},rawPause:function(){var t=document.querySelector("#myaudio");if(!t.paused){var e=document.querySelector("#myaudio");e.pause(),e.paused&&(this.toggle=!0)}},initMusic:function(){var t=this;this.$store.getters.isWeiXin?document.addEventListener("WeixinJSBridgeReady",function(){t.musicCanPlaythrough(),t.rawPlay(),console.log("??dasdasdasdas")},!1):this.musicCanPlaythrough()},musicCanPlaythrough:function(){var t=function(){var t,e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i={};Object.assign(i,a);var s=function(e){a.boolean===!i.boolean&&(clearInterval(t),e())};return e=new Promise(function(e,a){t=setInterval(s.bind(null,e),1e3)}),e};t(get).then(this.rawPlay)},dontBorderMeFUCKYOU:function(){localStorage.setItem("fuckyou","1")}},mounted:function(){var t=this,e=(navigator.userAgent.toLowerCase(),function e(){t.rawPlay(),document.querySelector("#myaudio").paused||document.removeEventListener("touchstart",e,!1)});document.addEventListener("touchstart",e,!1),this.initMusic(),localStorage.removeItem("fuckyou")}},S=I,k=(a("fdf0"),a("8f19"),Object(h["a"])(S,b,C,!1,null,"084ae0ca",null)),x=k.exports,q=a("2a3d"),B=a("77ad"),E=function(){function t(){Object(q["a"])(this,t)}return Object(B["a"])(t,null,[{key:"is_cosleep",value:function(){return this.is_cosleep_android()||this.is_cosleep_ios()}},{key:"is_cosleep_ios",value:function(){var t=!1;try{t="undefined"!==typeof window.webkit.messageHandlers.XinchaoApp}catch(e){}return t}},{key:"is_cosleep_android",value:function(){return"undefined"!==typeof window.XinchaoApp}},{key:"get_api_root",value:function(){switch("production"){case"production":return"https://api.psy-1.com";case"test":return"https://api.debug.psy-1.com"}}},{key:"get_web_root",value:function(){switch("production"){case"production":return"https://www.heartide.com";case"test":return"https://web.debug.psy-1.com"}}},{key:"baidu_statics",value:function(){var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?c6a0be7a2e98e04ca2cf523568e2cbc4";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(t,e)}}]),t}(),P=a("3a4b"),M=a("a90a"),j={name:"home",data:function(){return{canClick:!1,qrUrl:"",score:20,clb:!1,showTips:!1,tipsImage:"",home_height:0,star_data:{star_info:{},fans_info:{},total_user:"",lighten_list:{}}}},components:{Music:x},methods:{toDownLoad:function(){this.$root.showWarning=!1,window.location.href="https://www.heartide.com/download/smallsleep"},parseDate:function(t){return this.WJH.dateFormat(+(t+"000"),"yyyy-MM-dd")},toRem:function(t){return+document.querySelector("html").style.fontSize.replace("px","")*(+t/37.5)},circleMounted:function(){var t=P.default();t.create({id:"circles-1",radius:this.toRem(38),value:21,maxValue:100,width:this.toRem(3),text:function(t){return""},colors:["rgba(255, 255, 255, 0.2)","#F8C074"],duration:400,wrpClass:"circles-wrp",textClass:"circles-text",valueStrokeClass:"circles-valueStroke",maxValueStrokeClass:"circles-maxValueStroke",styleWrapper:!0,styleText:!0})},submitData:function(){var t=this;if(!localStorage.getItem("name")||!localStorage.getItem("openid")||"undefinded"===localStorage.getItem("openid"))return console.log("data config"),this.$root.shareM("我正在帮".concat(this.star_data.star_info.star_name,"收集星光"),"求助攻，一起点亮璀璨星光吧！",""),void this.$root.test();this.$axios.post("/web/v1/cosleep/sleep/star/visitor/lighten",{fans_id:this.star_data.fans_info.fans_id,openid:localStorage.getItem("openid"),visitor_name:localStorage.getItem("name")||2,visitor_avatar:localStorage.getItem("avatar")||2}).then(function(e){var a=e.data.status;1===a?(t.clb=!0,t.showTips=!0,t.tipsImage=e.data.data.visitor_avatar,t.score=e.data.data.visitor_score,t.star_data.lighten_list.unshift(e.data.data)):(t.canClick=!0,t.$root.showWarning=!0)})},getData:function(){var t=this;this.circleMounted(),console.log(this.WJH.parseQuery(window.location.href).fans_id,"12312312312");var e=this.WJH.parseQuery(window.location.href).fans_id||localStorage.getItem("fansid");localStorage.setItem("fansid",e),console.log(e),this.$axios.get("/web/v1/cosleep/sleep/star/visitor",{params:{fans_id:e}}).then(function(e){if(1===e.data.status){setTimeout(function(){t.$root.showLoading=!1},1e3);var a=e.data.data;t.star_data=a,t.$root.shareM("我正在帮".concat(t.star_data.star_info.star_name,"收集星光"),"求助攻，一起点亮璀璨星光吧！",a.star_info.star_share_bg),t.$refs.music.musicPath=a.star_info.star_audio_mini,get.boolean=!0}})}},mounted:function(){var t=this;M.toDataURL((window.location.href.split("#")[0]+"&sharepic").replace(/&code.*?(?=\&)/,"").replace(/&state.*?(?=\&)/,"")).then(function(e){t.qrUrl=e,console.log(e,"asdasd"),setTimeout(function(){},200)}).catch(function(t){console.error(t,"asderr")}),this.getData()}},O=j,D=(a("21bb"),a("2154"),Object(h["a"])(O,_,y,!1,null,null,null)),Q=D.exports;i["a"].use(w["a"]);var T=new w["a"]({routes:[{path:"*",name:"home",component:Q},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),L=a("591a");i["a"].use(L["a"]);var N=new L["a"].Store({state:{},getters:{isWeiXin:function(){return/micromessenger/.test(navigator.userAgent.toLowerCase())},isApp:function(){function t(){var t=!1;try{t=!1}catch(e){}return t}function e(){return!1}return e()||t()}},mutations:{},actions:{}}),R=a("e1bc");Object(R["a"])("".concat("https://webres.psy-1.com/sgy/dist/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")}});var G=a("849a"),U=(a("0857"),a("7c56"),a("0eb5"),a("a4c5"),a("f763"),function(){function t(){Object(q["a"])(this,t)}return Object(B["a"])(t,null,[{key:"promiseForBoolean",value:function(){var t,e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i={};Object.assign(i,a);var s=function(e){a.boolean===!i.boolean&&(clearInterval(t),e())};return e=new Promise(function(e,a){t=setInterval(s.bind(null,e),1e3)}),e}},{key:"getAPIData",value:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1];var e=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=new(new XMLHttpRequest),s="";i.open("GET",t),i.onreadystatechange=function(){4===this.readyState&&200===this.status&&e&&e()},i.setRequestHeader("Content-Type","application/json");var n=!0,o=!1,r=void 0;try{for(var c,l=a[Symbol.iterator]();!(n=(c=l.next()).done);n=!0){var u=c.value,d=u.val,h=u.key;s+=h+"="+d+"&"}}catch(g){o=!0,r=g}finally{try{n||null==l.return||l.return()}finally{if(o)throw r}}s.replace(/&$/,""),i.send()}},{key:"randomNum",value:function(t,e){switch(arguments.length){case 1:return parseInt(Math.random()*t+1,10);case 2:return parseInt(Math.random()*(e-t+1)+t,10);default:return 0}}},{key:"musicCount",value:function(t){var e=parseInt(t),a=0,i=0;e>60&&(a=parseInt(e/60),e=parseInt(e%60),a>60&&(i=parseInt(a/60),a=parseInt(a%60)));var s="";parseInt(e)<10&&(s="0");var n=s+parseInt(e)+" ",o="0";return n=o+parseInt(a)+" : "+n,i>0&&(n=parseInt(i)+"小时"+n),n}},{key:"dateFormat",value:function(t,e){if(!e||"string"!==typeof e)return console.error("format is undefiend or type is Error"),"";t=t instanceof Date?t:"number"===typeof t||"string"===typeof t?new Date(t):new Date;var a={"y+":t.getFullYear(),"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in a)if(new RegExp(i).test(e)){var s=RegExp.lastMatch;e=e.replace(s,a[i]<10?"0"+a[i]:a[i].toString())}return e}},{key:"judgeWeiXin",value:function(){var t=null;return window.navigator.userAgent.toLowerCase().match(/QQ/i)&&(t=window.navigator.userAgent.toLowerCase().match(/QQ/i)[0]),!(!/micromessenger/.test(navigator.userAgent.toLowerCase())&&"qq"!==t)}},{key:"deepCopy",value:function(e){var a=e.constructor===Array?[]:{};for(var i in e)a[i]="object"===Object(G["a"])(e[i])?t.deepCopy(e[i]):e[i];return a}},{key:"deBounce",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,a=null;return function(){null!==a&&clearTimeout(a),a=setTimeout(t,e)}}},{key:"parseQuery",value:function(t){var e={},a=/[?&]([^=&#]+)=([^&#]*)/g,i=t.match(a);if(i)for(var s in i){var n=i[s].split("="),o=n[0].substr(1),r=n[1];e[o]?e[o]=[].concat(e[o],r):e[o]=r}return e}}]),t}()),Y=(a("7364"),a("2427")),z=a.n(Y),W=function(){function t(e){var a=e.url,i=e.title,s=e.desc,n=e.pic,o=e.dataUrl,r=void 0===o?null:o,c=e.isWeiBo,l=void 0!==c&&c;Object(q["a"])(this,t),a,this.isWeiBo=l,this.url=a,this.title=i,this.desc=s,this.pic=n,this.dataUrl=r,this.clientId=4164070707,this.secrite="ac44d0764e9799478d6524ef2137e731"}return Object(B["a"])(t,[{key:"appShare",value:function(){var t={type1:{title:this.title,desc:this.desc,link:this.url,imgUrl:this.pic,shareType:1},type2:{title:this.title,link:this.url,imgUrl:this.pic,shareType:2},type3:{imgUrl:"",shareType:3}};document.getElementById("share").value=JSON.stringify(t),document.getElementById("share2").value=JSON.stringify(t.type1),document.getElementById("share3").value=JSON.stringify(t.type2)}},{key:"callAppRouter",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,i={Method:t,Data:e},s="CB_".concat(Date.now(),"_").concat(Math.ceil(10*Math.random()));i=JSON.stringify(i),Xinchao.Web[s]=function(t,e){a&&a(t,e),delete Xinchao.Web[s]},/(iPhone|iPad|iPod)/i.test(navigator.userAgent)?window.webkit.messageHandlers.XinchaoApp.postMessage({req:i,cbName:s}):XinchaoApp.callRouter(i,s)}},{key:"appGetName",value:function(){var t=this;this.callAppRouter("isLogin",{},function(e,a){"已登录"===JSON.parse(a).msg&&t.callAppRouter("Login",{},function(t,e){try{var a=JSON.parse(e);localStorage.setItem("name",a.data.name),localStorage.setItem("avatar",a.data.avatar),console.log(a,"hkjhkhk"),console.log(a.data.name,"fgjhfjhfj")}catch(i){console.log(e.data.avatar),localStorage.setItem("avatar",e.data.avatar),localStorage.setItem("name",e.data.name),console.log(e.data.name)}})})}},{key:"weiXinShare",value:function(){var t=this,e={title:t.title,desc:t.desc,link:t.url,imgUrl:t.pic};this.dataUrl,wx.ready(function(t){wx.onMenuShareAppMessage(e),wx.onMenuShareQQ(e),wx.onMenuShareQZone(e),wx.onMenuShareTimeline(e),wx.error(function(t){})})}},{key:"weiXinSDK",value:function(t,e){if(this.isWeiBo&&!localStorage.getItem("name")&&e)window.location.href="https://api.weibo.com/oauth2/authorize?client_id=".concat(this.clientId,"&response_type=code&redirect_uri=").concat(encodeURI(location.href.split("#")[0]));else if(!this.isWeiBo||e){var a=new XMLHttpRequest,i=this;a.open("GET",t+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),a.onreadystatechange=function(){if(4===a.readyState&&200===a.status){console.log("sdk ok",e,e&&!localStorage.getItem("name"));var s=JSON.parse(a.response);console.log(s.data.wechat_config),s.data.wechat_config.debug=!1;var n="wx632d4c99bd681cf3";console.log("bl 没有bl 吗？",e,e&&!localStorage.getItem("name")),e&&!localStorage.getItem("name")&&(window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+n+"&redirect_uri="+encodeURI(location.href.split("#")[0])+"&response_type=code&scope=snsapi_userinfo#wechart_redirect"),e&&!localStorage.getItem("name")||(wx.config(s.data.wechat_config),i.weiXinShare(),i.weiXinGetName(t))}},a.send()}else z.a.get(t+"/web/v1/weibo/user?redirect_uri=".concat(encodeURI(location.href.split("#")[0]),"&code=").concat(localStorage.getItem("code"))).then(function(t){console.log(t.data.data,"weibo"),t.data.data.name&&(localStorage.setItem("name",t.data.data.name),localStorage.setItem("avatar",t.data.data.avatar_hd),localStorage.setItem("openid","wb_"+t.data.data.id))})}},{key:"qqGetCode",value:function(){if(!localStorage.getItem("name")||!localStorage.getItem("avatar")){var t=/access_token=(.+?)&/.exec(window.location.href);if(console.log(t,"toekn!"),t)return z.a.get("https://api.psy-1.com/web/v1/qq/user?access_token=".concat(t[1])).then(function(t){var e=t.data.data;console.log(t.data.data,"qq"),localStorage.setItem("name",e.nickname),localStorage.setItem("avatar",e.figureurl_qq),localStorage.setItem("openid",e.openid)}),void z.a.get("https://api.psy-1.com/web/v1/qq/user/openid?access_token=".concat(t[1])).then(function(t){1==t.data.status&&localStorage.setItem("openid",t.data.data.openid)});var e={response_type:"token",client_id:"101734131",redirect_uri:encodeURI(location.href.split("#")[0])};window.location.href="https://openmobile.qq.com/oauth2.0/m_authorize?response_type=".concat(e.response_type,"&client_id=").concat(e.client_id,"&redirect_uri=").concat(e.redirect_uri)}}},{key:"weatherCode",value:function(){var t=U.parseQuery(window.location.href).code;return console.log(t),!!t&&(localStorage.setItem("code",t),t)}},{key:"weiXinGetName",value:function(t){if(!localStorage.getItem("name")){console.log(e+"cd"+localStorage.getItem("code"));var e=localStorage.getItem("code").replace(/code=/,"").replace(/\&.+/,"");z.a.get(t+"/web/v1/wechat/user",{params:{code:e}}).then(function(t){var e=t.data;e.hasOwnProperty("data")&&(console.log(e,"weixin的"),console.log("设置session"),localStorage.setItem("avatar",e.data.headimgurl),localStorage.setItem("name",e.data.nickname),localStorage.setItem("openid","wx_"+e.data.openid),console.log(e.data.nickname))})}}},{key:"weiXinInit",value:function(t){var e=this.weatherCode();e?this.weiXinSDK(t,!1):this.weiXinSDK(t,!0)}},{key:"appInit",value:function(){this.appShare(),this.appGetName()}},{key:"rawWeiXinShare",value:function(t){var e=new XMLHttpRequest,a=this;e.open("GET",t+"/web/v1/wechat/config?debug=1&url="+encodeURIComponent(location.href.split("#")[0])),e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){console.log("sdk ok");var t=JSON.parse(e.response);console.log(t.data.wechat_config),t.data.wechat_config.debug=!1,wx.config(t.data.wechat_config),a.weiXinShare()}},e.send()}},{key:"rawGetName",value:function(){}}]),t}();console.log("production","experiment");var X="https://api.debug.psy-1.com",F=z.a.create({baseURL:X});i["a"].prototype.WJH=U,i["a"].prototype.$axios=F,i["a"].config.productionTip=!1,a("dc72"),i["a"].use(r.a),console.log(Object({NODE_ENV:"production",VUE_APP_TITLE:"experiment",BASE_URL:"https://webres.psy-1.com/sgy/dist/"})),new i["a"]({router:T,store:N,data:function(){return{url:X,share:"",showWarning:!1,showLoading:!0}},methods:{shareM:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"小睡眠",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0;this.share=new W({pic:a,url:window.location.href.split("#")[0],title:t,desc:e}),this.share.appShare(),this.share.rawWeiXinShare(this.url)},test:function(t){var e=navigator.userAgent.toLowerCase();if(E.is_cosleep())this.share.appGetName();else if(/micromessenger/.test(navigator.userAgent.toLowerCase()))this.share.weiXinInit(this.url),this.share.weatherCode(),this.share.weiXinGetName(this.url);else if("weibo"==e.match(/weibo/i)){if(t)return;var a=new W({pic:"asd",url:window.location.href.split("#")[0],title:"ads",desc:"asd",isWeiBo:!0});a.weiXinInit(this.url)}else{if("qq"==e.match(/qq/i))return void this.share.qqGetCode();this.showWarning=!0}}},create:function(){},mounted:function(){localStorage.getItem("openid")||(localStorage.removeItem("name"),localStorage.removeItem("avatar"))},render:function(t){return t(A)}}).$mount("#app")},"58d8":function(t,e,a){"use strict";var i=a("eea1"),s=a.n(i);s.a},"5c64":function(t,e,a){"use strict";var i=a("9e02"),s=a.n(i);s.a},6152:function(t,e,a){},"8f19":function(t,e,a){"use strict";var i=a("6152"),s=a.n(i);s.a},"984e":function(t,e,a){},"9e02":function(t,e,a){},b954:function(t,e,a){},be82:function(t,e,a){},cb57:function(t,e){t.exports="data:image/gif;base64,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"},d0cb:function(t,e,a){"use strict";var i=a("be82"),s=a.n(i);s.a},d977:function(t,e,a){t.exports=a.p+"img/0.8935569a.png"},dc72:function(t,e){function a(){var t=document.documentElement.clientWidth,e=document.querySelector("html");e.style.fontSize=t/10+"px"}a(),window.addEventListener("resize",a)},e389:function(t,e,a){t.exports=a.p+"img/top-mask.ac58f203.png"},eea1:function(t,e,a){},fdf0:function(t,e,a){"use strict";var i=a("984e"),s=a.n(i);s.a}});
//# sourceMappingURL=app.abee0871.js.map