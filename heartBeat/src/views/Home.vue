<template>
  <div class="home" :style="home_height">
    <audio  :src="music_path" ref="zz" id="myaudio" controls hidden>
      <source  :src="music_path" type="audio/mpeg" >
    </audio>
    <img class="bg" src="../assets/cosleep_lab-heart_bg_bedroom@3x.png">
    <!-- <img class="img-heart-beat" src="../assets/cosleep_lab-heart_img_heart@3x.png" /> -->
    <div class="img-heart-beat">
      <lottie class="animation" :width="300" :height="300" :options="defaultOptions" v-on:animCreated="handleAnimation"/>
    </div>
    <div class="template-password">
      <p class="title">· 我的专属心动密码 ·</p>
      <div class="template-number">
        <div class="number none-bg">-</div>
        <div class="number" v-for="(li, index) in number_list" :key="index">{{li}}</div>
        <div class="number none-bg">-</div>
      </div>
    </div>
    <div class="content">
      {{heart.heart_content}}
      <!-- 夜色琉璃，浮生倥偬你凭栏垂眸，眼里荡漾开漫天灯火。你说星星拥抱月光，你说烟花亲吻沉云，你把深夜的钟声谱写成歌，温柔荡漾成眼底闪烁比秋天短，比世界长“为你，千千万万遍”晚安。哈哈哈哈哈哈哈哈哈哈哈哈哈哈 -->
    </div>
    <div class="template-asign">
      <p class="asign">——— {{heart.name}}</p>
      <p class="asign2">{{date}}</p>
    </div>
    <div @click="toCenter" class="openToCenter">打开小睡眠体验</div>
  </div>
</template>

<script>
// @ is an alias to /src
import BScroll from 'better-scroll'
import WJH from '@/js/wjhJS'
import axios from 'axios'
import Lottie from 'vue-lottie'
import Trophy from './heart2.json'

export default {
  name: 'home',
  data () {
    return {
      better_scroll: null,
      home_height: 0,
      music_path: require('../assets/Heart.mp3'),
      number_list: ['', '', '', '', '', '', '', ''],
      date: WJH.dateFormat(new Date().getTime(), 'yyyy-MM-dd'),
      heart: { heart_content: '', heart_audio: '', heart_password: '', name: '' },
      init_touch: false,
      rate: [60, 60, 60, 60, 120],
      defaultOptions: { animationData: Trophy, autoplay: false, loop: true },
      animationSpeed: 1,
      anim: null,
      heart_width: 200,
      heart_height: 200
    }
  },
  components: {
    'lottie': Lottie
  },
  methods: {
    handleAnimation (anim) {
      this.anim = anim
      console.log(anim) // 这里可以看到 lottie 对象的全部属性
    },
    heartBeat () {
      this.rate = JSON.parse(this.heart.heart_audio) // 正式服的时候可以开启
      let i = 0
      setInterval(() => {
        const speed = 1 * (this.rate[i] / 60)
        document.getElementById('myaudio').playbackRate = speed
        i++
        if (i === this.rate.length) {
          i = 0
        }
        document.getElementById('myaudio').play()
        if (document.getElementById('myaudio').paused) {
          return
        }
        this.anim.setSpeed(speed)
        this.anim.play()
      }, 1500)
      this.anim.addEventListener('loopComplete', () => {
        this.anim.stop()
      })
      document.addEventListener('WeixinJSBridgeReady', () => {
        document.getElementById('myaudio').play()
        if (!document.getElementById('myaudio').paused) {
          this.anim.play()
        }
      }, false)
      document.addEventListener('touchstart', () => {
        if (this.init_touch) return
        document.getElementById('myaudio').play()
        if (!document.getElementById('myaudio').paused) {
          this.anim.play()
        }
        this.init_touch = true
      })
    },
    parseQuery (url) {
      let queryObj = {}
      let reg = /[?&]([^=&#]+)=([^&#]*)/g
      let querys = url.match(reg)
      if (querys) {
        for (let i in querys) {
          let query = querys[i].split('=')
          let key = query[0].substr(1)
          let value = query[1]
          queryObj[key] ? queryObj[key] = [].concat(queryObj[key], value) : queryObj[key] = value
        }
      }
      return queryObj
    },
    bScroll () {
      const wrapper = document.querySelector('#app')
      this.better_scroll = new BScroll(wrapper, {
        click: true,
        bounce: {
          top: false,
          bottom: false,
          left: false,
          right: false
        }
      })
    },
    toCenter () {
      this.$parent.judgeWeiXin()
    },
    getData () {
      this.$parent.password = this.parseQuery(document.URL).password
      axios.get(this.$parent.url + '/web/v1/cosleep/lab/heart/detail', {
        params: {
          password: this.parseQuery(document.URL).password || 88243482
        }
      })
        .then((response) => {
          console.log(response.data.data)
          this.heart = response.data.data
          this.heart.name = response.data.data.heart_user_info.name
          this.number_list = ('' + this.heart.heart_password).split('')
          this.heartBeat()
          this.$parent.test(this.heart.heart_content)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  mounted () {
    this.bScroll()
    this.getData()
  }
}
</script>

<style lang="scss">
  .home {
    height: px2html(857px);
    padding-bottom: px2html(20px);
    width: px2html(375px);
    position: relative;
    display: flex;
    align-items: center;
    z-index: 1;
    flex-direction: column;
    .bg {
      position: absolute;
      width: px2html(375px);
      top: px2html(-64px);
      left: 0px;
      z-index: -1;
    }
    .img-heart-beat {
      padding-top: px2html(91px);
      padding-left: px2html(4px);
      width: px2html(120px);
      height: px2html(120px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .template-password {
      border-radius: px2html(10px);
      margin-top: px2html(234px);
      width: px2html(274px);
      height: px2html(103px);
      background-color: #331E3D;
      display: flex;
      align-items: center;
      flex-direction: column;
      .title {
        width: px2html(200px);
        font-family: "Noto Serif CJK SC";
        color: rgba(255, 255, 255, .6);
        padding-top: px2html(20px);
        font-weight: bold;
        font-size: px2html(15px);
      }
      .template-number {
        width: px2html(260px);
        display: flex;
        margin-top: px2html(16px);
        .number {
          width: px2html(23px);
          height: px2html(25px);
          background-color: rgba(255, 255, 255, 0.1);
          font-family: "Courier New";
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          line-height: px2html(10px);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin-right: px2html(5px);
          font-size: px2html(20px);
          font-weight: 100;
        }
        .none-bg {
          background-color: initial;
        }
        .number:last-child {
          margin-right: px2html(0px);
        }
      }
    }
    .content {
      margin-top: px2html(25px);
      width: px2html(295px);
      text-align: justify;
      font-family: "Noto Sans CJK SC";
      color: rgba(255, 255, 255, 0.6);
      font-size: px2html(12px);
      word-wrap: break-word;
    }
    .template-asign {
      margin-top: px2html(15px);
      font-family: "Noto Sans CJK SC";
      color: rgba(255, 255, 255, 0.4);
      text-align: right;
      font-size: px2html(12px);
      width: px2html(295px);
    }
    .openToCenter {
      opacity: 0.5;
      margin-top: px2html(30px);
      width: px2html(90px);
      height: px2html(20px);
      border: px2html(1px) solid #fff;
      border-radius: px2html(15px);
      font-family: "Noto Sans CJK SC";
      font-size: px2html(10px);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(255, 255, 255, 1);
    }
  }
</style>
