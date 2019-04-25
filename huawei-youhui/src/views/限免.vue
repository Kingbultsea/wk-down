<template>
  <div class="xm" :style="home_height">
    <img class="ig" src="../assets/H5限时免费.jpg" />
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=521'"  class="open-remeber"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=522'"  class="get-in"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=523'" class="t"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=518'" class="f"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'xm',
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
    document.title = '小睡眠每周限免活动'
  }
}
</script>

<style lang="scss">
  .xm {
    position: relative;
    width: px2html(375px);
    background-color: #fff8ef;
    >.ig {
      width: 100vw;
    }
    >.open-remeber {
      position: absolute;
      top: px2html(385px);
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
    >.get-in {
      position: absolute;
      top: px2html(715px);
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
    >.t {
      position: absolute;
      top: px2html(1050px);
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
    >.f {
      position: absolute;
      top: px2html(1305px);
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
  }
</style>
