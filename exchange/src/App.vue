<template>
  <div id="app" :class="{dark: darkMode}">
    <router-view/>
  </div>
</template>

<script>
    import Share from '@/js/shareAndGetName'
    export default {
        data() {
            return {
                darkMode: false,
                url: 'https://api.psy-1.com'
            }
        },
        mounted() {
            console.log('?ss')
            const share = new Share({ pic: 'http://wx2.sinaimg.cn/mw690/006Zdy2vgy1fxj17qoz6gj30ds0eawer.jpg', url: document.URL, title: '学霸测评', desc: '如何唤醒内在学霸能力？'})
            share.appShare()
            share.rawWeiXinShare(this.url)
        }
    }
</script>

<style lang="scss">
  .dark {
    background-color: rgba(38, 28, 44, 1);
    color: rgba(255, 255, 255, 0.6) !important;
    h3 {
      color: rgba(255, 255, 255, 1) !important;
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
