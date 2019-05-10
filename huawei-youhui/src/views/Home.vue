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
    document.title = '小睡眠&华为返利活动'
  }
}
</script>

<style lang="scss">
  .home {
    position: relative;
    width: px2html(375px);
    display: flex;
    justify-content: center;
    align-items: center;
    >.ig {
      width: 100vw;
    }
    >.open-remeber {
      position: absolute;
      top: px2html(585px);
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
    >.get-in {
      position: absolute;
      top: px2html(890px);
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
  }
</style>
