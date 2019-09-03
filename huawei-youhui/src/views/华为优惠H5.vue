<template>
  <div class="smbwz" :style="home_height">
    <img class="ig" src="../assets/华为-H5(1).jpg" />
    <div @click="oo" class="a a1"></div>
  </div>
</template>

<script>
// @ is an alias to /src

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
    oo () {
      let pre = {
        'code': 10017,
        'goods_id': 5
      }
      this.callAppRouter('Redirect', pre, function(err, result){})
      _hmt.push(['_trackEvent', 'nav', 'click', `click`, '558'])
    },
    ooo () {
      window.location = 'https://www.heartide.com/app/redirect?code=10025&goods_id=16'
    }
  },
  mounted () {
    document.title = '小睡眠&华为专属优惠活动'
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
      top: px2html(585px);
    }
    >.a2 {
      top: px2html(760px);
    }
    >.a3 {
      top: px2html(1085px);
    }
    >.a4 {
      top: px2html(1385px);
    }
  }
</style>
