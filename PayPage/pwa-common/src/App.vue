<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Share from '@/js/shareAndGetName'
export default {
  data () {
    return {
      a: ''
    }
  },
  methods: {
  },
  mounted () {
    const share = new Share({ pic: 'http://wx3.sinaimg.cn/mw690/006Zdy2vgy1fxj0dtbn29j302o02nmx1.jpg', url: 'https://sleep.heartide.com/', title: '小睡眠', desc: '给你婴儿般好小睡眠' })
    share.appShare()
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
    font-size: px2html(12px);
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
