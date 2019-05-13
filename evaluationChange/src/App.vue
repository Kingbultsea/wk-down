<template>
  <div id="app" :style="{backgroundColor: bg_c}">
    <img class="bg" :src="bg_img">
    <div class="app-template">
      <router-view/>
    </div>
  </div>
</template>

<script>
import '../node_modules/animate.css/animate.css'
import Share from '@/js/shareAndGetName'

export default {
  data () {
    return {
      bg_c: 'RGBA(0, 0, 0, 1)',
      bg_img: require('./assets/bg.png'),
      url: 'https://api.debug.psy-1.com',
      share: ''
    }
  },
  methods: {
    actionWeixinShare () {
      Share.callAppRouter('Share')
    },
    shareM (title = '小睡眠官方测评', desc = '小睡眠', picUrl = 'https://res.psy-1.com/FqFCiruUYEg-3f4T8aXuV4LqcC7X') {
      const share = new Share({ pic: picUrl, url: window.location.href.split('#')[0], title: title, desc: desc })
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
  }
}
</script>

<style lang="scss">
  #app {
    .bg {
      width: 100%;
      height: 100%;
      position: fixed;
      top: px2html(0px);
      left: px2html(0px);
      opacity: 0.6;
      z-index: 1;
    }
    position: fixed;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
    width: 100vw;
    height:100vh;
    font-size: px2html(12px);
    .app-template {
      width: 100vw;
      height: 100vh;
      overflow: scroll;
      position: fixed;
      z-index: 1;
    }
  }
</style>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color:transparent;
  }
  a,a:link,a:visited,a:hover,a:active{
    text-decoration: none;
    color:inherit;
  }
</style>
