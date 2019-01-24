<template>
  <div id="app">
    <!-- <router-view/> -->
    <Home />
  </div>
</template>

<script>
import Share from '@/js/shareAndGetName'
import Home from './views/Home.vue'

export default {
  data () {
    return {
      rootUrl: 'https://api.debug.psy-1.com'
    }
  },
  components: {
    Home
  },
  methods: {
    test () {
      const share = new Share({ pic: 'http://wx3.sinaimg.cn/large/006Zdy2vgy1fxj0dtbn29j302o02nmx1.jpg', url: 'http://psy-1.com/'/* document.URL */, title: '小睡眠', desc: '小睡眠-app，给你一个婴儿般的好睡眠' })
      share.appShare()
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
    position: fixed;
    overflow: scroll;
    width: 100vw;
    height:100vh;
    font-size: px2html(12px);
    background: url("./assets/bg@3x.png") RGBA(24, 22, 44, 1);
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
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
