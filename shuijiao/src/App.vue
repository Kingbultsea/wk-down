<template>
  <div id="app">
    <router-view/>
  </div>
</template>




<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff;
  position: fixed;
  overflow-y:scroll;
  height:100%;
  width:100%;

}
</style>
<style>
  a,a:link,a:visited,a:hover,a:active{
    text-decoration: none;
    color:inherit;
  }
  body{
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  *{
    padding: 0px;
    margin: 0px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
</style>
