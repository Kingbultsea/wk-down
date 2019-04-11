<template>
  <div class="home" :style="home_height">
    <img class="ig" src="../assets/po.jpg" />
    <div @click="oo" class="open-remeber"></div>
    <div @click="ooo" class="get-in"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      home_height: 0
    }
  },
  components: {
  },
  methods: {
    oo () {
      window.location = 'https://www.heartide.com/app/redirect?code=10017&goods_id=4'
    },
    ooo () {
      window.location = 'https://www.heartide.com/app/redirect?code=10025&goods_id=16'
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .home {
    position: relative;
    width: px2html(375px);
    >.ig {
      width: 100vw;
    }
    >.open-remeber {
      position: absolute;
      top: px2html(580px);
      width: px2html(140px);
      height: px2html(30px);
      right: 50%;
      transform: translateX(50%);
    }
    >.get-in {
      position: absolute;
      top: px2html(870px);
      width: px2html(140px);
      height: px2html(30px);
      right: 50%;
      transform: translateX(50%);
    }
  }
</style>
