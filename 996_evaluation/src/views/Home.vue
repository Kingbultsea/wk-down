<template>
  <div class="home">
    <img class="img-title" src="../assets/首页/img_title@3x.png"/>
    <img class="img-pic" src="../assets/首页/img_pic@3x.png"/>
    <div class="btn-start" @click="start">
      <img src="../assets/03.gif"/>
      <span>开始测试</span>
    </div>
    <img class="btn-tocosleep" src="../assets/首页/btn_tocosleep.gif">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
/* eslint-disable */

export default {
  name: 'home',
  data () {
    return {

    }
  },
  components: {

  },
  methods: {
    start () {
      if (sessionStorage.getItem('name')) {  //又是上面的失误 看来这个情况挺严重的呀
        this.$router.push( {path:'/e'} )
      } else {
        alert('???缺没有' + sessionStorage.getItem('name'))
        this.$router.push( {path:'/input'} )
      }
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family: myFont;
    src: url("../assets/站酷庆科黄油体.ttf?#iefix") format('embedded-opentype');
  }
  .home {
    width: px2html(375px);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >.img-title {
      width: px2html(320px);
      height: px2html(140px);
      padding-top: px2html(8px);
    }
    >.img-pic {
      width: px2html(300px);
      height: px2html(300px);
      padding-top: px2html(6px);
    }
    >.btn-start {
      padding-top: px2html(20px);
      width: px2html(209px);
      height: px2html(39px);
      position: relative;
      img {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
      }
      span {
        font-weight: 900;
        position: relative;
        z-index: 100;
        top: px2html(-10px);
        font-size: px2html(13px);
      }
    }
    >.btn-tocosleep {
      padding-top: px2html(10px);
      width: px2html(100px);
      height: px2html(25px);
    }
  }
</style>
