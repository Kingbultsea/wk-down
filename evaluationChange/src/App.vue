<template>
  <div id="app" style="background-size: 100% 100%" :style="{background: 'url(' + this.$root.style.bg + ') 0% 0% / 100% 100%'}"> <!-- :style="{backgroundColor: bg_c}" -->
    <!-- <img class="bg"> :src="this.$root.style.bg" -->
    <updateTemplate></updateTemplate>
    <div class="app-template">
      <router-view/>
    </div>
  </div>
</template>

<script>
import '../node_modules/animate.css/animate.css'
import Share from '@/js/shareAndGetName'
import updateTemplate from './components/updateTemplate.vue'

export default {
  data () {
    return {
      bg_c: '', // RGBA(0, 0, 0, 1)
      bg_img: require('./assets/bg.png'),
      url: 'https://api.debug.psy-1.com',
      share: ''
    }
  },
  components: {
    updateTemplate
  },
  methods: {
    actionWeixinShare () {
      Share.callAppRouter('Share')
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  #app {
    // height: 100vh;
    overflow: hidden;
    background-size: 100% 100%;
    .bg {
      width: 100%;
      height: 100%;
      position: fixed;
      top: px2html(0px);
      left: px2html(0px);
      opacity: 0.6;
      z-index: 1;
    }
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100vw;
    font-size: px2html(12px);
    // -webkit-overflow-scrolling: touch;
    // position: fixed;
    .app-template {
      // -webkit-overflow-scrolling: touch;
      overflow-y: scroll;
      width: 100vw;
      height: 100vh;
      z-index: 1;
    }
  }
</style>

<style lang="scss">
  body {
    height: 100vh;
  }
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
