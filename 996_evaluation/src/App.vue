<template>
  <div id="app">
    <div class="app-template">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Share from '@/js/shareAndGetName'
import '../node_modules/animate.css/animate.css'
import Tool from './js/tool.js'

export default {
  data () {
    return {
      a: '',
      url: 'https://api.debug.psy-1.com',
      share: ''
    }
  },
  methods: {
    shareM (title, desc) {
      const share = new Share({ pic: 'http://wx1.sinaimg.cn/mw690/006Zdy2vgy1g2h0k0wl8jj30qo0qo765.jpg', url: window.location.href.split('#')[0], title: title, desc: desc })
      this.share = share
      share.appShare()
      share.rawWeiXinShare(this.url)
    },
    test () {
      if (Tool.is_cosleep()) {
        this.share.appGetName()
      }
      if (/micromessenger/.test(navigator.userAgent.toLowerCase())) {
        console.log('?????QQ')
        this.share.weiXinInit(this.url)
        this.share.weatherCode()
        this.share.weiXinGetName(this.url)
      }
    }
  },
  mounted () {
    this.shareM('有种工伤叫"熬夜"', '测一测你是几级工伤')
    this.test()
  }
}
</script>

<style lang="scss">
  html,body{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: fixed;
    overflow: hidden;
    width: 100vw;
    height:100vh;
    font-size: px2html(12px);
    background-image: url("./assets/bg.png");
    background-size: px2html(375px) auto;
    .app-template {
      width: 100vw;
      height: 100vh;
      overflow: scroll;
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
