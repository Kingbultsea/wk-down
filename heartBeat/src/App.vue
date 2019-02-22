<template>
  <div id="app">
      <router-view/>
      <transition name="fade">
        <div class="outer-tips" v-if="tips_toggle" @click="tips_toggle = false">
          <img src="./assets/jt.png" class="outer-tips-png"/>
          <div  class="tips">点击右上角用<span style="color: #FFCA72">「浏览器」</span>打开</div>
        </div>
      </transition>
      <div class="bottom">
        <a   target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic" >
          <div class="bottom-img">
            <img  class='bottom-hehe' src="./assets/a.png"/>
            <!--<img src="./assets/dd1.png">
            <img src="./assets/dd2.jpg">-->
          </div>
        </a>
        <a   target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic" >
          <div class="bottom-center">下载小睡眠App，感受心动时刻</div>
        </a>
        <a class="dl"  target="view_window" href="https://a.app.qq.com/o/simple.jsp?pkgname=com.psyone.brainmusic" >
          <div class="bottom-dl">下&nbsp;&nbsp;载</div>
        </a>
      </div>
  </div>
</template>

<script>
import Share from '@/js/shareAndGetName'

export default {
  data () {
    return {
      a: '',
      url: 'https://api.debug.psy-1.com',
      tips_toggle: false,
      password: ''
    }
  },
  methods: {
    test (desc) {
      const share = new Share({ pic: 'http://wx1.sinaimg.cn/large/006Zdy2vgy1g0fd9no3cyj305f05fmwz.jpg', url: window.location.href.split('#')[0], title: '嘘~悄悄把心告诉你', desc: desc })
      share.appShare()
      share.rawWeiXinShare(this.url)
    },
    judgeWeiXin () {
      let z = null
      if (window.navigator.userAgent.toLowerCase().match(/QQ/i)) {
        z = window.navigator.userAgent.toLowerCase().match(/QQ/i)[0]
      }
      if (!/micromessenger/.test(navigator.userAgent.toLowerCase()) && z !== 'qq') {
        this.toCenter()
      } else {
        this.tips_toggle = true
      }
    },
    toDownLoad (z) {
      setTimeout(function () {
        if (z) {
          console.log(z)
        }
        window.location.href = 'https://www.heartide.com/download/smallsleep'
      }, 500)
    },
    toCenter () {
      const myCode = 10021

      const that = this
      let createIframe = (function () {
        let iframe
        return function () {
          if (iframe) {
            return iframe
          } else {
            iframe = document.createElement('iframe')
            iframe.style.display = 'none'
            document.body.appendChild(iframe)
            return iframe
          }
        }
      })()

      let baseScheme = 'cosleep://'
      let createScheme = function (options) {
        let urlScheme = baseScheme
        for (let item in options) {
          urlScheme = urlScheme + item + '=' + encodeURIComponent(options[item]) + '&'
        }
        urlScheme = urlScheme.substring(0, urlScheme.length - 1)
        return encodeURIComponent(urlScheme)
      }

      let openApp = function () {
        var localUrl = createScheme()
        var openIframe = createIframe()
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          // 判断是否是ios,具体的判断函数自行百度
          // alert("cosleep://deeplink?code=10010&music_detail_code="+that.code)

          window.location.href = 'cosleep://deeplink?code=' + myCode + '&password=' + that.password
          that.toDownLoad()

          var loadDateTime = Date.now()
          setTimeout(function () {
            var timeOutDateTime = Date.now()
            if (timeOutDateTime - loadDateTime < 1000) {
              // window.location.href = "cosleep://deeplink?code=10010&music_detail_code="+that.code
              // window.location.href = 'cosleep://deeplink?code=10010&music_detail_code=kZkCCukLd3CHWMWZ'
              // console.log(decodeURI("cosleep://deeplink?code=10010&music_detail_code="+that.code +"&"+ encodeURI( that.musicDetail() )))

              window.location.href = 'cosleep://deeplink?code=' + myCode + '&password=' + that.password
              that.toDownLoad('cosleep://deeplink?code=' + myCode + '&password=' + that.password)
            }
          }, 25)
        } else if (!/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          // 判断是否是android，具体的判断函数自行百度
          /* if (false) {
            // chrome浏览器用iframe打不开得直接去打开，算一个坑
            window.location.href = localUrl
          } else {
            // 抛出你的scheme
            openIframe.src = localUrl
          } */
          // 抛出你的scheme
          openIframe.src = localUrl
          setTimeout(function () {
            // alert("cosleep://deeplink?code=10010&music_detail_code="+this.code)

            window.location.href = 'cosleep://deeplink?code=' + myCode + '&password=' + that.password
            that.toDownLoad('cosleep://deeplink?code=' + myCode + '&password=' + that.password)

            // window.location.href = 'cosleep://deeplink?code=10010&music_detail_code=kZkCCukLd3CHWMWZ'
          }, 500)
        } else {
          // 主要是给winphone的用户准备的,实际都没测过，现在winphone不好找啊
          openIframe.src = localUrl
          setTimeout(function () {
            window.location.href = 'https://www.heartide.com/download/smallsleep'
          }, 500)
        }
      }
      openApp()
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-size: px2html(12px);
    background-color: #261C2C;
    .outer-tips {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      z-index: 999999;
      background-color: rgba(0,0,0,0.5);
      font-family:NotoSansCJKsc-Bold;
      font-size:px2html(18px);
      font-weight:bold;
      .outer-tips-png {
        position: absolute;
        top:px2html(10px);
        right:px2html(22px);
        width: px2html(62px);
        height: px2html(47px);
      }
      .tips{
        position:fixed;
        top: px2html(60px);
        right:px2html(10px);
        color:#fff;
        padding:px2html(8px);
        border-radius:px2html(10px);
        padding-left:px2html(15px);
        padding-right:px2html(15px);
        z-index:99999;
        //width:px2html(375px);
      }
    }
  }
  .bottom{
    height:px2html(40px);
    //overflow:hidden;
    z-index: 999;
    background:#312736;
    width: 100%;
    position:fixed;
    bottom:0%;
    left:0px;

    font-size:px2html(15px);
    color:#fff;
    .bottom-img{
      width:px2html(60px);
      position:relative;
      position:absolute;
      height:px2html(61px);
      left:px2html(-3px);
      top:px2html(-16px);
      .bottom-hehe{
        position:absolute;
        height:px2html(60px);
        width: px2html(60px);
        left:px2html(9px);
        top:px2html(-6px);
        z-index:999;
      }
    }

    .bottom-center{
      position:absolute;
      right:52%;
      top:50%;
      width:100%;
      transform: translateX(50%) translateY(-50%);
      color: #837D86;
      font-family: PingFangSC;
    }
    .bottom-dl{
      position:absolute;
      right:px2html(40px);
      top:50%;
      background-color: #5A525E;
      padding:px2html(10px);
      color: #fff;
      padding-top:px2html(1px);
      padding-bottom:px2html(1px);
      border-radius:px2html(18px);
      transform: translateX(50%) translateY(-50%);
    }
  }
</style>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }
  a,a:link,a:visited,a:hover,a:active{
    text-decoration: none;
    color:inherit;
  }
</style>
