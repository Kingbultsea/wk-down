<template>
  <div class="auto-phase" :style="home_height">
    <img class="ig" src="../assets/xm/矩形@3x.png" />
    <div class="img-title">
      <div>{{ this.startTime }}-{{this.endTime}}</div>
    </div>
    <div class="template" v-for="(li, index) in list" :key="index">
      <div class="title">{{ li.detail.musicdesc }}</div>
      <div class="center">
        <img class="c-img" :src="li.cover_free" />
        <div class="desc" v-html="parseBR(li.detail.resdesc)"></div>
      </div>
      <div class="button" @click="toLink(li.detail.category_id)">
        <div class="price">原价{{ li.detail.price }}元</div>
      </div>
    </div>
    <div class="desc">
      启禀陛下娘娘<br/>限免内容每周更换<br/>开通会员无限畅享
    </div>
    <img class="logo" src="../assets/logo@3x.png" />
    <img class="btn" @click="toMember" src="../assets/xm/btn.png" />
  </div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import WJH from '../js/wjhJS.js'

export default {
  name: 'home',
  data () {
    return {
      home_height: 0,
      timeDate: '',
      list: [],
      startTime: '',
      endTime: ''
    }
  },
  components: {
  },
  methods: {
    toMember () {
      let pre = {
        "code": 10017
      }
      this.callAppRouter('Redirect', pre, function(err, result){})
    },
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
    toLink (id) {
      let pre = {
        "code": 1052,
        'category_id': id
      }
      this.callAppRouter('Redirect', pre, function(err, result){})
      window.location = 'https://www.heartide.com/statics/redirect?url=' + id
    },
    parseBR (data) {
      return data.replace(/\n/g, '<br/>')
    },
    getData () {
      const params = this.parseQuery(document.URL)
      this.$axios.get('/web/v1/cosleep/week/free', { params: { free_id: params.free_id } }).then((res) => {
        if (parseInt(res.data.status) !== 5) {
          const data = res.data.data
          this.startTime = WJH.dateFormat(+(data.free_start + '000'), 'yyyy年MM月dd日')
          this.endTime = WJH.dateFormat(+(data.free_end + '000'), 'MM月dd日')
          this.list = data.free_list
          console.log(res.data.data)
        }
      })
    }
  },
  mounted () {
    document.title = '小睡眠每周限免活动'
    this.getData()
  }
}
</script>

<style lang="scss">
.auto-phase {
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: url("../assets/xm/矩形@3x.png");
  background-size: 100% 100%;
  .ig {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }
  .img-title {
    margin-top: px2html(34px);
    position: relative;
    width: px2html(235px);
    height: px2html(79px);
    background: url("../assets/xm/矩形@3x(1).png");
    border-top: px2html(34px);
    background-size: auto 100%;
    div {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: px2html(0px);
      height: px2html(10px);
      line-height: px2html(10px);
      font-size: px2html(9px);
    }
  }

  .template {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: px2html(304px);
    height: px2html(327px);
    font-size: px2html(15px);
    font-weight: 700;
    background: url("../assets/xm/矩形@3x(4).png");
    background-size: 100% 100%;
    margin-top: px2html(17px);
    .title {
      padding-left: px2html(10px);
      padding-right: px2html(10px);
      height: px2html(27px);
      width: max-content;
      font-size: px2html(15px);
      margin-top: px2html(25px);
      background: url("../assets/xm/题目底部背景.png");
      background-size: 100% 100%;
    }
    .center {
      width: px2html(212px);
      height: px2html(179px);
      background: url("../assets/xm/矩形@3x(5).png");
      background-size: 100% 100%;
      margin-top: px2html(9px);
      .c-img {
        width: px2html(186px);
        height: px2html(89px);
        border-radius: px2html(10px);
        margin-top: px2html(12px);
      }
      .desc {
        color: rgba(0, 0, 0, 1);
        height: px2html(65px);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-weight: 500;
        font-size: px2html(9px);
      }
    }
    .button {
      width: px2html(203px);
      height: px2html(43px);
      margin-top: px2html(14px);
      background: url("../assets/xm/矩形复制61@3x.png");
      background-size: 100% 100%;
      position: relative;
      .price {
        position: absolute;
        left: 76%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: max-content;
        margin-right: px2html(19px);
        position:relative;
        height: max-content;
        font-size: px2html(10px);
        color: #fff;
        line-height: px2html(13px);
      }
      .price::before {
        position: absolute;
        left: 0px;
        top: 0px;
        content: '';
        width: 100%;
        height: 100%;
        background: url("../assets/xm/diagonal@3x.png");
        background-size: 100% 100%;
      }
    }
  }

  >.desc {
    line-height: px2html(21px);
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
    font-size: px2html(15px);
    margin-top: px2html(4px);
    position: relative;
    z-index: 1;
  }
  >.btn {
    margin-top: px2html(13px);
    position: relative;
    z-index: 1;
    width: px2html(129px);
  }
  >.logo {
    margin-top: px2html(16px);
    position: relative;
    z-index: 1;
    width: px2html(57px);
  }
}
</style>
