<template>
  <div id="app">
    <div class="app-template">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: ''
    }
  },
  methods: {
  },
  mounted () {
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
    overflow: hidden;
    width: 100vw;
    height:100vh;
    font-size: px2html(12px);
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
