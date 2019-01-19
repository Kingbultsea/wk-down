<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    import Share from '@/js/shareAndGetName'
    export default {
        mounted() {
            console.log('?ss')
            const share = new Share({ pic: 'http://wx3.sinaimg.cn/mw690/006Zdy2vgy1fzb9ms2vx4j30dr0drtaf.jpg', url: document.URL, title: '七天睡眠瘦身', desc: '小睡眠'})
            share.appShare()
        }
    }
</script>

<style lang="scss">
  .dark {
    background-color: rgba(38, 28, 44, 1);
    font-color: rgba(255, 255, 255, 0.6) !important;
    h3 {
      font-color: rgba(255, 255, 255, 1) !important;
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
