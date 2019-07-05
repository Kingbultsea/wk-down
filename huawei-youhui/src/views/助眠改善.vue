<template>
  <div class="smbwz" :style="home_height">
    <img class="ig" src="../assets/H5助眠冥想新品.png" />
    <div @click="toLink(1, 10150)" class="a a1"></div>
    <div @click="toLink(1, 10151)"  class="a a2"></div>
    <div @click="toLink(1, 10153)" class="a a3"></div>
    <div @click="toMember" class="a a4"></div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */

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
    callAppRouter (method, params={}, callback) {
      let req = {
        'Method': method,
        'Data': params
      }, cbName = `CB_${Date.now()}_${Math.ceil(Math.random() * 10)}`
      req = JSON.stringify(req)
      Xinchao.Web[cbName] = (err, result) => {
        if (callback) {
          callback(err, result)
        }
        delete Xinchao.Web[cbName]
      }
      if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
        window.webkit.messageHandlers.XinchaoApp.postMessage({
          req,
          cbName
        })
      } else {
        XinchaoApp.callRouter(req, cbName)
      }
    },
    toLink (id, vid) {
      let pre = {
        "code": 1052,
        'category_id': id,
        'voice_id': vid
      }
      this.callAppRouter('Redirect', pre, function(err, result){})
      // window.location = 'https://www.heartide.com/statics/redirect?url=' + id
    },
    oo () {
      window.location = 'https://www.heartide.com/app/redirect?code=10017&goods_id=4'
    },
    ooo () {
      window.location = 'https://www.heartide.com/app/redirect?code=10025&goods_id=16'
    },
    toMember () {
      let pre = {
        'code': 10017,
        'goods_id': 5
      }
      this.callAppRouter('Redirect', pre, function(err, result){})
    },
  },
  mounted () {
    document.title = '小睡眠-助眠冥想新品专题'
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
      top: px2html(380px);
    }
    >.a2 {
      top: px2html(690px);
    }
    >.a3 {
      top: px2html(1000px);
    }
    >.a4 {
      top: px2html(1360px);
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
