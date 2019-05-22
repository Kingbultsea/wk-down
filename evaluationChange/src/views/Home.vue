<template>
  <div class="home">
    <div class="title">{{ this.$root.amountData.title }}</div> <!-- 小睡眠官方测评小睡眠官方测评大反反复 -->
    <div class="desc">{{ this.$root.amountData.desc }}</div> <!-- 夜色琉璃，浮生倥偬你凭栏垂眸，眼里荡漾开漫天灯火。你说星星拥抱月光，你说烟花亲吻沉云，你把深夜的钟声谱写成歌，温柔荡漾成眼底闪烁比秋天短，比世界长“为你，千千万万遍”晚安。 -->
    <!-- <div class="start-button" :class="{buttonAnimation: button_animation}" @click.once="start">STAR</div> -->
    <div class="loading-outer">
      <div class="loading">
        <lottie :options="defaultOptions" v-on:animCreated="handleAnimation"/>
      </div>
      <div @click="start" class="loading-click-coverage"></div>
    </div>
    <img class="miao" :class="{miaoAnimation: button_animation}" src="../assets/cosleep_test_img_cat@3x.png">
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Lottie from 'vue-lottie'
import Trophy from '../assets/loding.json'

export default {
  name: 'home',
  data () {
    return {
      button_animation: false,
      button_can_click: false,
      defaultOptions: { animationData: Trophy, autoplay: false, loop: false },
      anim: null
    }
  },
  components: {
    Lottie
  },
  methods: {
    init () {
      this.$parent.bg_c = 'RGBA(74, 144, 226, 1)'
    },
    handleAnimation (anim) {
      this.anim = anim
      console.log(anim) // 这里可以看到 lottie 对象的全部属性
      this.anim.setSpeed(0.5)
      // this.anim.goToAndStop(900)
      if (!this.$store.state.loadOnce) {
        this.anim.goToAndStop(85, true)
        this.button_can_click = true
        return
      }
      if (sessionStorage.getItem('haveLoad')) {
        this.anim.goToAndStop(5500)
        this.$store.commit('loadOnce')
        this.button_can_click = true
        // this.anim.setSpeed(2)
      } else {
        this.anim.play()
        this.anim.onComplete = () => {
          this.$store.commit('loadOnce')
          this.button_can_click = true
        }
        // this.anim.setSpeed(0.5)
      }
      // this.anim.play()
    },
    start () {
      if (!this.button_can_click) {
        return
      }
      this.button_can_click = false // 把once去掉
      this.button_animation = true
      try {
        navigator.vibrate(10)
      } catch {
      }
      setTimeout(() => {
        this.$router.push('/subject')
      }, 300)
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log(this.$store.state.loadOnce)
    this.init()
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: px2html(375px);
    min-height: px2html(603px);
    height: 100%;
    z-index: 1;
    position: relative;
    @include centerContent;
    overflow: hidden;
    .title {
      width: px2html(318px);
      height: max-content;
      font-size: px2html(30px);
      font-weight: bold;
      text-align: left;
      position: absolute;
      left: px2html(41px);
      top: px2html(56px);
      color: #fff;
      @include centerAlign;
      &:before {
        content: '';
        position: absolute;
        height: 90%;
        width: px2html(10px);
        background-color: #fff;
        top: 50%;
        transform: translateY(-50%);
        left: px2html(-16px);
      }
    }
    .desc {
      width: px2html(325px);
      font-weight: 500;
      font-size: px2html(14px);
      position: absolute;
      top: px2html(156px);
      left: px2html(25px);
      color: rgba(255, 255, 255, 0.5);
      text-align: justify;
      line-height: px2html(23px);
    }
    .start-button {
      position: relative;
      width: px2html(85px);
      height: px2html(35px);
      @include centerAlign;
      color: rgba(10, 86, 130, 1);
      font-size: px2html(14px);
      font-weight: 900;
      background-color: rgba(255, 255, 255, 1);
      border-radius: px2html(18px);
      z-index: 2;
      box-shadow: px2html(0px) px2html(0px) px2html(3px) px2html(5px) rgba(10, 86, 130, 1);
      margin-top: px2html(353px);
      transition: 0.5s linear;
    }
    .loading-outer {
      margin-top: px2html(23px);
      width: 100%;
      height: px2html(85px);
      overflow: hidden;
      position: relative;
      .loading {
        width: 100%;
        @include absoluteCenter;
      }
      .loading-click-coverage {
        @include absoluteCenter;
        width: px2html(85px);
        height: px2html(35px);
        z-index: 999;
      }
    }
    .miao {
      z-index: -1;
      position: absolute;
      width: px2html(270px);
      bottom: px2html(-255px);
      left: 50%;
      transform: translateX(-50%);
      transition-duration: 0.5s;
    }
  }
</style>
<style lang="scss">
  .buttonAnimation {
    box-shadow: px2html(0px) px2html(0px) px2html(0px) px2html(5px) #fff !important;
    background-color: rgba(10, 86, 130, 1) !important;
    color: #fff!important;
  }
  .miaoAnimation {
    bottom: -25% !important;
  }
</style>
