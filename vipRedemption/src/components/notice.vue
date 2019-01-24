<template>
  <div class="notice" v-if="close">
    <div class="template">
      <img class="img-close" @click="close = false" src="../assets/close_btn@3x.png" />
      <img class="img-success" :src="imgSuccess">
      <img class="img-vip-logo" :src="imgLogo">
      <div class="font-desc">{{desc}}</div>
      <img class="img-getin" src="../assets/getIn.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data () {
    return {
      imgSuccess: null,
      imgLogo: null,
      desc: '.',
      close: true
    }
  },
  methods: {
    changeFail (msg) {
      this.imgSuccess = require('../assets/fail.png')
      this.imgLogo = require('../assets/img@3x.png')
      this.desc = msg
    },
    changeRepeat (msg) {
      this.imgSuccess = require('../assets/repeat.png')
      this.imgLogo = require('../assets/img@3x.png')
      this.desc = msg
    },
    changeSuccess (msg) {
      this.imgSuccess = require('../assets/success.png')
      this.imgLogo = require('../assets/vip@3x.png')
      this.desc = msg
    }
  },
  mounted () {
    this.changeFail()
  }
}
</script>

<style scoped lang="scss">
@mixin Column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.notice {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);
  @include Column;
  font-family: Noto Sans CJK SC Regular;
  .template {
    width: px2html(268px);
    // min-height: px2html(342px);
    padding-bottom: px2html(99px);
    // height: px2html(342px);
    background-color: #fff;
    position: relative;
    border-radius: px2html(10px);
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-close {
      position: absolute;
      right: px2html(10px);
      top: px2html(10px);
      width: px2html(25px);
      height: px2html(25px);
    }
    .img-success {
      width: px2html(109px);
      height: px2html(37px);
      position: relative;
      top: px2html(37px);
    }
    .img-vip-logo {
      width: px2html(134px);
      height: px2html(134px);
      position: relative;
      top: px2html(63px);
    }
    .font-desc {
      position: relative;
      top: px2html(78px);
      width: px2html(235px);
      line-height: px2html(27px);
      color: rgba(63, 168, 244, 1);
      font-size: px2html(18px);
    }
    .img-getin {
      height: px2html(33px);
      width: px2html(175px);
      position: relative;
      top: px2html(99px);
      padding-bottom: px2html(19px);
    }
  }
}
</style>
