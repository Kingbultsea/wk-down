<template>
  <div class="xm" :style="home_height">
    <img class="ig" src="../assets/限免-第五期.png" />
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=580'"  class="open-remeber"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=581'"  class="get-in"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=582'" class="t"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=558'" class="f"></div>
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
      top: px2html(408px);
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
    >.get-in {
      position: absolute;
      top: px2html(755px);
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
    >.t {
      position: absolute;
      top: px2html(1100px);
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
    >.f {
      position: absolute;
      top: px2html(1365px);
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
  }
</style>
