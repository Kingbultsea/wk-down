<template>
  <div id="app">
    <div class="app-template">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Share from '@/js/shareAndGetName'

export default {
  data () {
    return {
      a: '',
      url: 'https://api.psy-1.com/'
    }
  },
  methods: {
    test () {
      const share = new Share({ pic: 'http://wx2.sinaimg.cn/mw690/006Zdy2vgy1fxj17qoz6gj30ds0eawer.jpg', url: window.location.href.split('#')[0], title: '小睡眠线下交流会 招募邀请', desc: '' })
      share.appShare()
      share.rawWeiXinShare(this.url)
    }
  },
  mounted () {
    this.test()
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
    overflow: hidden;
    width: 100vw;
    height:100vh;
    font-size: px2html(12px);
    background-color: RGBA(71, 75, 121, 1);
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
