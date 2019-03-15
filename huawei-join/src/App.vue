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
    test () {
      console.log('?????')
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
