<template>
  <div class="smbwz" :style="home_height">
    <img class="ig" src="../assets/日历-H5(1).jpg" />
    <div @click="o3" class="a a1"></div>
    <div @click="o1" class="a a2"></div>
    <div @click="o3" class="a a3"></div>
    <div @click="o2" class="a a4"></div>
    <div @click="o3" class="a a5"></div>
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
    o1 () {
      _hmt.push(['_trackEvent', '2019-11-22', '日历', `772`])
      let pre = {
        'code': 10017,
        'goods_id': 5
      }
      this.callAppRouter('Redirect', pre, function(err, result){})
    },
    o3 () {
      _hmt.push(['_trackEvent', '2019-11-22', '日历', `773`])
      let pre = {
        'code': 10017,
        'goods_id': 4
      }
      this.callAppRouter('Redirect', pre, function(err, result){})
    },
    o3 () {
      _hmt.push(['_trackEvent', '2019-11-22', '日历', `774`])
      window.location.href = 'https://www.heartide.com/statics/redirect?url=774'
    }
  },
  mounted () {
    document.title = '开会员送199月有声日历'
  }
}
</script>

<style lang="scss" scoped>
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
      top: px2html(425px);
    }
    >.a2 {
      top: px2html(500px);
    }
    >.a3 {
      top: px2html(740px);
    }
    >.a4 {
      top: px2html(810px);
    }
    >.a5 {
      top: px2html(1360px);
    }
  }
</style>
