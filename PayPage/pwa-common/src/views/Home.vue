<template>
  <div class="home" :style="home_height">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      home_height: 0
    }
  },
  components: {
    HelloWorld
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .home {
    width: px2html(375px);
  }
</style>
