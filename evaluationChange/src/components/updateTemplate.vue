<template>
  <transition name="fade">
    <div class="buy dingding" v-if="need_update">
      <div class="buy-template dingding-template">
        <div class="close dingding-close" @click="closeWebView">×</div>
        <img class="img myimg" src="../assets/fire.png"/>
        <p class="sentance">adsa</p>
        <p class="dingding-sentance">asdas</p>
        <div class="button" @click="toUpdate">马上升级</div>
      </div>
    </div>
  </transition>
</template>

<script>
import { callAppRouter } from '@/js/tool'

export default {
  name: 'updateTemplate',
  data () {
    return {
      need_update: true
    }
  },
  methods: {
    closeWebView () {
      callAppRouter('Redirect', {
        'code': 2000,
        'close': 1
      })
    },
    toUpdate () {
      callAppRouter('updateApp')
    }
  }
}
</script>

<style scoped lang="scss">
  .buy {
    position: fixed;
    top: px2html(0px);
    left: px2html(0px);
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99999;
  .buy-template {
    width: px2html(285px);
    height: px2html(340px);
    background-color: #FFFBEC;
    position: relative;
    border-radius: px2html(20px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  .img {
    width: 101%;
    position: relative;
    top: px2html(-1px);
    left: px2html(-1px);
  }
  .sentance {
    color: #4A4A4A;
    font-size: px2html(12px);
    position: relative;
    top: px2html(-140px);
    color: #fff;
  }
  .close {
    z-index: 9999;
    position: absolute;
    right: px2html(6px);
    top: px2html(-8px);
    font-size: px2html(40px);
  }
  .button {
    width: px2html(180px);
    height: px2html(30px);
    background-color: #3FA8F4;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: px2html(15px);
    color: #fff;
    font-family:NotoSansCJKsc-Medium;
    border-radius: px2html(18px);
    margin-bottom: px2html(18px);
  }
  }
  }

  .dingding {
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: px2html(12px);
    color: rgba(0, 0, 0, 0.8) !important;
    background-color: rgba(0, 0, 0, .5);
    z-index: 99999;
    .myimg {
      position: absolute !important;
    }
    .dingding-template {
      width: px2html(290px) !important;
      height: px2html(434px) !important;
    }
    .dingding-close {
      color: rgba(0, 0, 0, .2) !important;
      background-color: rgba(255, 255, 255, .5);
      height: px2html(20px);
      width: px2html(20px);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: px2html(20px) !important;
      margin-top: px2html(15px);
    }
    .button {
      position: relative;
      z-index: 3;
    }
    .dingding-sentance {
      text-align: center;
      position: relative ;
      z-index: 3 ;
      color: black ;
      top: px2html(100px);
    }
  }
</style>
