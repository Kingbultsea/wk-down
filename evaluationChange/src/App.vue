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
      url: 'https://api.debug.psy-1.com'
    }
  },
  methods: {
    actionWeixinShare () {
      Share.callAppRouter('Share')
    },
    appShare () {
      const share = new Share({ pic: 'https://res.psy-1.com/FqFCiruUYEg-3f4T8aXuV4LqcC7X', url: window.location.href.split('#')[0], title: '小测评大测评超级测评', desc: '测评' })
      share.appShare()
      share.rawWeiXinShare(this.url)
    }
  },
  mounted () {
    this.appShare()
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
