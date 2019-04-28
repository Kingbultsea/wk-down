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

export default {
  data () {
    return {
      a: '',
      url: 'https://api.debug.psy-1.com'
    }
  },
  methods: {
    test (desc) {
      // const share = new Share({ pic: 'http://wx1.sinaimg.cn/large/006Zdy2vgy1g0fd9no3cyj305f05fmwz.jpg', url: window.location.href.split('#')[0], title: '嘘~悄悄把心告诉你', desc: desc })
      // share.appShare()
      // share.rawWeiXinShare(this.url)
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
    font-size: px2html(12px);
    background-color: #2642c6;
    .app-template {
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
