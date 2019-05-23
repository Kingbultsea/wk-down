<template>
  <transition enter-active-class="animated fadeIn">
    <div class="img-container">
      <div id="canvas" class="pic-block">
        <div class="img-bg">
          <img style="height: 100%" :src="background" />
        </div>
        <!-- <div class="title">小睡眠小测评</div> -->
        <div class="desc-block" :style="{backgroundColor: visiableFrame}">
          <div class="desc-block-title">{{ title }}</div>
          <div class="desc-block-desc">{{ desc }}</div> <!-- 夜色琉璃，浮生倥偬你凭栏垂眸，眼里荡漾开漫天灯火。你说星星拥抱月光，你说烟花亲吻沉云，你把深夜的钟声谱写成歌，温柔荡漾成眼底闪烁比秋天短，比世界长“为你，千千万万遍”晚安。 -->
          <div class="qrBlock">
            <img class="qrBlock-logo" src="../assets/cosleep_test_img_logo2@3x.png"/>
            <div class="qrBlock-img">
              <div class="img-outer">
                <img class="content-img" :src="qrUrl"/>
              </div>
              扫码马上测试
            </div>
          </div>
        </div>
      </div>
      <div class="share-template"> <!-- @click="this.$parent.actionWeixinShare" -->
        <a :href="this.$root.amountData.advertisementUrl">
          <img class="adPic" :src="this.$root.amountData.advertisementPic" />
        </a>
      </div>

      <div class="outer-img"></div>
    </div>
  </transition>
</template>

<script>
import html2canvas from 'html2canvas'
import Axios from 'axios'
const QRCode = require('qrcode')
// 结果页面 本来想套一个出来的...  结果发现没有这个必要。
export default {
  name: 'imgContainer',
  data () {
    return {
      background: require('../assets/cosleep_test_img_result-card@3x.png'),
      desc: '',
      qrUrl: '',
      visiableFrame: '',
      title: ''
    }
  },
  methods: {
    countResult () {
      this.visiableFrame = this.$root.amountData.visiableFrame ? 'rgba(0, 0, 0, 0.5)' : '' // rgba(10, 86, 131, 0.5)
      const score = parseFloat(sessionStorage.getItem('score'))
      const list = this.$root.amountData.itemList
      console.log(JSON.parse(list))
      for (let i of JSON.parse(list)) {
        if (score >= i.min && score <= i.max) {
          console.log(i.background)
          /* eslint-disable */
          i.background ? this.background = i.background : this.background = this.$root.style.resultBackground
          this.desc = i.desc.replace(/\$\{score\}/g, score).replace(/\$\{name\}/g, localStorage.getItem('name') || '') // 还有一个backgoround 没有设置好
          this.title = (i.title || '').replace(/\$\{score\}/g, score).replace(/\$\{name\}/g, localStorage.getItem('name') || '')
          console.log(i.hasOwnProperty('shareTitle') && i.hasOwnProperty('shareDesc'), '')
          if (i.hasOwnProperty('shareTitle') && i.hasOwnProperty('shareDesc')) {
            this.$root.shareM(i.shareTitle, i.shareDesc)
          }
          Axios.post(this.$root.url + '/evaluate-miniapp/question/increment/solve-count', { id: this.$root.id }).then(() => {})
          return
        }
      }
    },
    parseToPic () {
      const dom = document.querySelector('#canvas')
      const container = document.querySelector('.outer-img')
      html2canvas(dom, {
        useCORS: true,
        onclone: (document) => {
          document.querySelector('#canvas').style.visibility = 'initial'
        }
      }).then((canvas) => {
        const img = new Image()
        img.src = canvas.toDataURL()
        img.style.width = '101%'

        img.style.position = 'absolute'
        img.style.left = '50%'
        img.style.top = '50%'
        img.style.transform = 'translateX(-50%) translateY(-50%)'

        container.appendChild(img)
        // dom.innerHTML = ''
        // dom.appendChild(img)
        // dom.style.visibility = 'initial'
        // dom.classList.add('change-canvas-border-radius')
      })
    },
    init () {
      // this.$parent.bg_c = '#fff'
      QRCode.toDataURL((window.location.href.split('#')[0] + '&sharepic').replace(/&code.*?(?=\&)/, '').replace(/&state.*?(?=\&)/, ''))
        .then(url => {
          this.qrUrl = url
          console.log(url, 'asdasd')
          setTimeout(() => {
            this.parseToPic()
          }, 200)
        })
        .catch(err => {
          console.error(err, 'asderr')
        })
    }
  },
  mounted () {
    this.init()

    if (!this.$root.amountData) {
      this.$router.push('./')
      return
    }

    this.desc = this.$root.amountData.defaultDesc // 到时候要删除的 这个是
    this.countResult()
  }
}
</script>

<style lang="scss" scoped>
  .img-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.99);
    min-height: px2html(603px);
    height: 100vh;
    .pic-block {
      min-height: px2html(477px);
      .img-bg {
        overflow: hidden;
        position: absolute;
        left: 0px;
        top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: px2html(325px);
        height: px2html(477px);
      }
      position: relative;
      // visibility: collapse;
      width: px2html(325px);
      height: px2html(477px);
      // background: url("../assets/cosleep_test_img_result-card@3x.png");
      background-size: 100% 100%;
      margin-top: px2html(10px);
      font-size: px2html(35px);
      font-weight: 500;
      .title {
        position: relative;
        z-index: 10;
        text-align: left;
        padding-left: px2html(13px);
        padding-top: px2html(13px);
        color: #fff;
      }
      .desc-block {
        position: absolute;
        margin-left: px2html(13px);
        bottom: px2html(20px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: content-box;
        color: #fff;
        width: px2html(273px);
        padding: px2html(13px);
        // background-color: rgba(10, 86, 131, 1);
        border-radius: px2html(9px);
        .desc-block-title {
          text-align: justify;
          font-size: px2html(26px);
          font-weight: 500;
          padding-bottom: px2html(9px);
        }
        .desc-block-desc {
          font-size: px2html(10px);
          font-weight: 900;
          text-align: justify;
        }
        .qrBlock {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .qrBlock-logo {
            height: px2html(26px);
          }
          .qrBlock-img {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            font-size: px2html(6px);
            .img-outer {
              margin-top: px2html(3px);
              margin-bottom: px2html(2px);
              width: px2html(32px);
              height: px2html(32px);
              position: relative;
              .content-img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateY(-50%) translateX(-50%);
                height: 100%;
                width: 100%;
              }
            }
          }
        }
      }
    }

    .outer-img {
      width: 100%;
      opacity: 0;
      position: absolute;
      top: 0px;
      left: 0px;
      height: px2html(477px);
      z-index: 999;
    }

    .share-template {
      margin-bottom: px2html(10px);
      margin-top: px2html(10px);
      background-color: #fff;
      box-shadow: px2html(0px) px2html(0px) px2html(14px) px2html(2px) rgba(0, 0, 0, 0.1);
      height: max-content;
      width: px2html(340px);
      border-radius: px2html(10px);
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      a {
        margin-bottom: px2html(-5px);
      }
      .adPic {
        width: 100%;
      }
    }
  }
</style>
<style lang="scss">
  .change-canvas-border-radius {
    border-radius: px2html(10px);
    overflow: hidden;
  }
</style>
