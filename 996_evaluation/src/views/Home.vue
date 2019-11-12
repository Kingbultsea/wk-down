<template>
  <div class="home">
    <img style="position: fixed; bottom: 0px;right: 0px; transform: translateY(100%) translateX(100%)" src="../assets/结果页_slices/wireframe@3x2.png" />
    <img class="img-title" src="../assets/首页/img_title@3x.png"/>
    <img class="img-pic" src="../assets/首页/img_pic@3x.png"/>
    <div class="btn-start" @click="start">
      <img src="../assets/btn_start@3x.png"/>
      <!-- <span>开始测试</span> -->
    </div>
    <a v-if="!isApp" target="view_window" href="https://www.heartide.com/statics/redirect?url=734">
      <img class="btn-tocosleep" src="../assets/首页/btn_tocosleep.gif">
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
/* eslint-disable */
import { Tool } from '../js/tool.js'

export default {
  name: 'home',
  data () {
    return {
      isApp: Tool.is_cosleep()
    }
  },
  components: {

  },
  methods: {
    start () {
      this.$parent.qqGetName()
      try {
        if (localStorage.getItem('name')) {  //又是上面的失误 看来这个情况挺严重的呀
          this.$router.push( {path:'/e'} )
        }

        if (!localStorage.getItem('name')) {
          setTimeout(() => {
            if (localStorage.getItem('name')) {  //又是上面的失误 看来这个情况挺严重的呀
              this.$router.push( {path:'/e'} )
            } else {
              this.$router.push( {path:'/input'} )
            }
          }, 1000)
        }
      } catch(e) {
        console.log(e)
      }
    }
  },
  mounted () {
    console.log('Home')
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
      width: px2html(149px);
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
        top: px2html(-8px);
        font-size: px2html(13px);
      }
    }
    .btn-tocosleep {
      padding-top: px2html(0px);
      width: px2html(100px);
      height: px2html(25px);
    }
  }
</style>
