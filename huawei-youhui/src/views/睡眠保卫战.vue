<template>
  <div class="smbwz" :style="home_height">
    <img class="ig" src="../assets/H5考试专题(1).png" />
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=527'" class="a a1"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=528'" class="a a2"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=529'" class="a a3"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=530'" class="a a4"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=531'" class="a a5"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=538'" class="a a6"></div>
    <div onclick="window.location = 'https://www.heartide.com/statics/redirect?url=532'" class="a a7"></div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'smbwj',
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
    document.title = '小睡眠考生睡眠专题活动'
  }
}
</script>

<style lang="scss">
  .smbwz {
    position: relative;
    width: px2html(375px);
    background-color: #fff8ef;
    height: max-content;
    >.ig {
      width: 100vw;
      margin-bottom: px2html(-10px);
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
    >.a {
      position: absolute;
      width: px2html(170px);
      height: px2html(40px);
      right: 50%;
      transform: translateX(50%);
    }
    >.a1 {
      top: px2html(505px);
    }
    >.a2 {
      top: px2html(760px);
    }
    >.a3 {
      top: px2html(1025px);
    }
    >.a4 {
      top: px2html(1295px);
    }
    >.a5 {
      top: px2html(1555px);
    }
    >.a6 {
      top: px2html(1815px);
    }
    >.a7 {
      top: px2html(2119px);
    }
  }
</style>
