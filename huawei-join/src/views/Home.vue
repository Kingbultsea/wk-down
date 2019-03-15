<template>
  <div class="home" :style="home_height">
    <img class="background" src="../assets/报名表_11_slices/图层 0@3x.jpg">
    <div class="content-block">
      <div class="title-content-block">睡眠日线下活动报名表</div>
      <img class="title-bg-content-block" src="../assets/报名表_11_slices/圆角矩形 2@2x.png">
      <img class="background-content-block" src="../assets/报名表_11_slices/图层 2@3x.png">
      <div class="user">
        <div class="item" :style="{ borderColor: user_style[0].borderColor }">
          <img class="icon" src="../assets/报名表_11_slices/我的 (1)@3x.png">
          <input class="input" placeholder="填写姓名" v-model="user.name">
          <div class="warn" :style="{ opacity: user_style[0].opacity }">请填写</div>
        </div>
        <div class="item" :style="{ borderColor: user_style[1].borderColor }">
          <img class="icon" src="../assets/报名表_11_slices/手机@3x.png">
          <input class="input" placeholder="填写手机号" v-model.lazy="user.phone">
          <div class="warn" :style="{ opacity: user_style[1].opacity }">{{phone}}</div>
        </div>
        <div class="item" :style="{ borderColor: user_style[2].borderColor }">
          <img class="icon" src="../assets/报名表_11_slices/微信@3x.png">
          <input class="input" placeholder="填写微信号" v-model="user.weixin">
          <div class="warn" :style="{ opacity: user_style[2].opacity }">请填写</div>
        </div>
        <div class="item" :style="{ borderColor: user_style[3].borderColor }">
          <img class="icon" src="../assets/报名表_11_slices/矩形 2 拷贝 3@3x.png">
          <input class="input" placeholder="填写所在城市" v-model="user.place">
          <div class="warn" :style="{ opacity: user_style[3].opacity }">请填写</div>
        </div>
        <div class="last" :style="{ borderColor: user_style[4].borderColor }">
          <img class="icon" src="../assets/报名表_11_slices/编辑@2x.png">
          <textarea class="input" placeholder="说几点我们招募您的理由~" v-model="user.desc"></textarea>
          <div class="warn" :style="{ opacity: user_style[4].opacity }">请填写</div>
        </div>
      </div>
      <div class="submit" @click="checkNull" :style="{backgroundColor: submit_color}"><p :style="{opacity: submit_font}">立即提交</p></div>
    </div>
    <div class="bottom-desc">注意事项：本次报名信息仅限本次活动报名使用</div>
    <div class="alert-outer" v-show="warning_show">
      <div class="alert">
        <div class="close" @click="warning_show = false">×</div>
        <div class="title">{{warning_title}}</div>
        <div class="desc">{{warning_desc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      warning_show: false,
      warning_title: '重复报名',
      warning_desc: '你已经参与过报名了请耐心等待审核通知',
      home_height: 0,
      submit_color: 'rgba(156, 156, 156, 1)', // rgba(247, 163, 64, 1)
      submit_font: '0.5', // 1,
      user: {
        name: '',
        phone: '',
        weixin: '',
        place: '',
        desc: ''
      },
      phone: 'desc',
      user_style: [
        { opacity: 0, borderColor: '' }, // rgba(247, 163, 64, 1)
        { opacity: 0, borderColor: '' },
        { opacity: 0, borderColor: '' },
        { opacity: 0, borderColor: '' },
        { opacity: 0, borderColor: '' }
      ]
    }
  },
  watch: {
    'user.phone' (e) {
      const reg = /^1[34578]\d{9}$/
      reg.test(e)
      if (!reg.test(e)) {
        this.phone = '请填写正确的手机号'
        this.user_style[1].opacity = 1
        this.user_style[1].borderColor = 'rgba(247, 163, 64, 1)'
      } else {
        this.phone = '请填写'
        this.user_style[1].opacity = 0
        this.user_style[1].borderColor = ''
      }
    },
    user: {
      handler (e) {
        let canThought = true
        for (let i in e) {
          if (!e[i]) {
            canThought = false
          }
        }
        if (canThought) {
          this.submit_color = 'rgba(247, 163, 64, 1)'
          this.submit_font = 1
        } else {
          this.submit_color = 'rgba(156, 156, 156, 1)'
          this.submit_font = 0.5
        }
      },
      deep: true
    }
  },
  components: {
  },
  methods: {
    checkNull () {
      let canThough = true
      for (let i in this.user) {
        let index = Object.keys(this.user).indexOf(i)
        if (!this.user[i]) {
          if (i === 'phone') {
            this.phone = '请填写'
          }
          this.user_style[index].opacity = 1
          this.user_style[index].borderColor = 'rgba(247, 163, 64, 1)'
        } else {
          if (index === 1) {
          } else {
            this.user_style[index].opacity = 0
            this.user_style[index].borderColor = ''
          }
        }
      }
      for (let i in this.user) {
        let index = Object.keys(this.user).indexOf(i)
        if (this.user_style[index].opacity === 1) {
          canThough = false
        }
      }
      if (canThough) {
        this.dispatchData()
        // this.submit_color = 'rgba(247, 163, 64, 1)'
        // this.submit_font = 1
      } else {
        // this.submit_color = 'rgba(156, 156, 156, 1)'
        // this.submit_font = 0.5
      }
    },
    dispatchData () {
      this.$router.push('./success')
    },
    checkPhone (e) {
    }
  },
  mounted () {
    // this.$router.push('./success')
  }
}
</script>

<style lang="scss" scoped>
  .home {
    width: px2html(375px);
    height: px2html(693px);
    position: relative;
    .background {
      width: px2html(375px);
      position: absolute;
      top: px2html(-59px);
      left: 0;
    }
    .content-block {
      width: px2html(375px);
      height: px2html(505px);
      position: relative;
      top: px2html(182px);
      .title-content-block {
        position: absolute;
        left: 50%;
        top: px2html(-17px);
        transform: translateX(-50%);
        z-index: 2;
        font-size: px2html(17px);
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        height: px2html(35px);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title-bg-content-block {
        position: absolute;
        left: 50%;
        top: px2html(-17px);
        transform: translateX(-50%);
        height: px2html(35px);
        z-index: 1;
      }
      .background-content-block {
        width: 100%;
        position: absolute;
        top: 0;
        left: 50%;
        z-index: 0;
        transform: translateX(-50%);
      }
      .user {
        position: relative;
        z-index: 3;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        top: px2html(52px);
        .item {
          border-radius: px2html(5px);
          height: px2html(33px);
          width: px2html(253px);
          background: rgba(55, 59, 99, 1);
          position: relative;
          border: px2html(1px) rgba(0, 0, 0, 0) solid;
          box-sizing: border-box;
          transition: 0.3s linear;
          .warn {
            color: rgba(243, 169, 81, 1);
            font-size: px2html(10px);
            font-weight: 500;
            position: absolute;
            top: 101%;
            right: px2html(1px);
            opacity: 1;
            transition: 0.3s linear;
            // transform: translateY(-50%);
          }
          .icon {
            width: px2html(15px);
            height: px2html(15px);
            position: absolute;
            top: 50%;
            left: px2html(10px);
            transform: translateY(-50%);
            opacity: .5;
          }
          .input {
            width: px2html(203px);
            position: absolute;
            top: 50%;
            left: px2html(33px);
            transform: translateY(-50%);
            background-color: inherit;
            border: 0;
            outline:none;
            font-size: px2html(15px);
            color: #fff;
            line-height: normal;
          }
          .input::-webkit-input-placeholder {
            // font-size: px2html(15px);
            position: absolute;
            top: px2html(1px);
          }
          margin-bottom: px2html(23px);
        }
        .last {
          border-radius: px2html(5px);
          height: px2html(90px);
          width: px2html(253px);
          background: rgba(55, 59, 99, 1);
          position: relative;
          border: px2html(1px) rgba(0, 0, 0, 0) solid;
          box-sizing: border-box;
          transition: 0.3s linear;
          .icon {
            width: px2html(15px);
            height: px2html(15px);
            position: absolute;
            top: px2html(9px);
            left: px2html(10px);
            opacity: .5;
          }
          .input {
            width: px2html(203px);
            position: absolute;
            height: px2html(70px);
            top: px2html(5px);
            left: px2html(33px);
            background-color: inherit;
            border: 0;
            outline:none;
            font-size: px2html(15px);
            color: #fff;
          }
          .input::-webkit-input-placeholder {
            font-size: px2html(15px);
          }
          .warn {
            color: rgba(243, 169, 81, 1);
            font-size: px2html(10px);
            font-weight: 500;
            position: absolute;
            top: 101%;
            right: px2html(1px);
            opacity: 1;
            transition: 0.3s linear;
          }
        }
      }
      .submit {
        transition: 0.3s linear;
        position: absolute;
        top: px2html(393px);
        width: px2html(146px);
        height: px2html(35px);
        border-radius: px2html(18px);
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        left: 50%;
        transform: translateX(-50%);
        font-size: px2html(18px);
        background-color: rgba(156, 156, 156, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          transition: 0.3s linear;
          text-align: center;
          opacity: .5;
          letter-spacing: px2html(2px);
        }
      }
    }
    .bottom-desc {
      position: absolute;
      color: rgba(255, 255, 255, 1);
      font-size: px2html(12px);
      font-weight: 500;
      bottom: px2html(12px);
      left: 50%;
      width: px2html(375px);
      text-align: center;
      transform: translateX(-50%);
    }
    .alert-outer {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.5);
      .alert {
        border-radius: px2html(10px);
        width: px2html(253px);
        height: px2html(267px);
        position: fixed;
        z-index: 999;
        top: 50%;
        right: 50%;
        transform: translateX(50%) translateY(-50%);
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: rgba(72, 74, 122, 1);
        .close {
          position: absolute;
          right: px2html(10px);
          top: px2html(5px);
          color: #fff;
          font-weight: 800;
          font-size: px2html(20px);
        }
        .title {
          padding-top: px2html(75px);
          color: rgba(255, 219, 25, 1);
          font-weight: 900;
          font-size: px2html(23px);
          width: px2html(92px);
          height: px2html(23px);
        }
        .desc {
          padding-top: px2html(26px);
          font-size: px2html(15px);
          color: #fff;
          font-weight: 500;
          height: px2html(38px);
          width: px2html(139px);
        }
      }
    }
  }
</style>
