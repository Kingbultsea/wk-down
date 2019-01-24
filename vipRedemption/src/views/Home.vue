<template>
  <div class="home" :style="home_height">
    <img class="img-title" src="../assets/title@3x.png">
    <img class="img-desc" src="../assets/gift1@3x.png">
    <img class="img-button" @click="submit()" src="../assets/buttn@3x.png">
    <transition name="fade"><Notice ref="Notice"/></transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Notice from '../components/notice'
import axios from 'axios'
import { callAppRouter, Tool } from '@/js/tool'
import WJH from '@/js/wjhJS'

export default {
  name: 'home',
  data () {
    return {
      home_height: 0,
      source_id: null,
      openid: null,
      activity_id: null
    }
  },
  components: {
    Notice
  },
  methods: {
    refleash () {
      callAppRouter('Redirect', {
        'code': 10019
      }, (res, ed) => {
      })
    },
    postData () {
      console.log(`查看sourceid${this.source_id}  查看openid ${this.openid}  查看activity_id ${this.activity_id}`)
      axios({
        url: this.$parent.rootUrl + '/web/v1/cosleep/vip/source/activity/record',
        method: 'post',
        data: {
          openid: this.openid,
          activity_id: this.activity_id || 1
        },
        transformRequest: [function (data) {
          // Do whatever you want to transform the data
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
        headers: {
          'sourceid': this.source_id
        }
      }).then((res) => {
        console.log(res.data)
        this.$children[0].close = true
        if (res.data.msg.indexOf('重复') !== -1 || res.data.msg.indexOf('该会员资格你已') !== -1) {
          console.log(res.data.msg.indexOf('重复'))
          console.log('重复了')
          this.$children[0].changeRepeat(res.data.msg)
          return
        }
        parseInt(res.data.status) === 1 ? this.$children[0].changeSuccess(res.data.msg) : this.$children[0].changeFail(res.data.msg)
        this.refleash()
      })
    },
    configData () {
      callAppRouter('getEnv', {}, (res, ed) => {
        let mesg = null
        if (typeof ed === 'string') {
          mesg = JSON.parse(ed)
        } else {
          mesg = ed
        }
        this.source_id = mesg.data.sourceid
      })
      callAppRouter('Login', {}, (res, ed) => {
        let mesg = null
        if (typeof ed === 'string') {
          mesg = JSON.parse(ed)
        } else {
          mesg = ed
        }
        this.openid = mesg.data.openid
      })
    },
    submit () {
      if (Tool.is_cosleep()) {
        callAppRouter('isLogin', {}, (res, ed) => {
          let mesg = null
          if (typeof ed === 'string') {
            mesg = JSON.parse(ed)
          } else {
            mesg = ed
          }
          console.log(mesg)
          console.log(ed)
          if (mesg.msg === '已登录') {
            this.configData()
            if (this.source_id && this.openid && this.activity_id) { // 因为这个并不是响应式的 就有点问题了
              this.postData()
            } else {
              setTimeout(() => {
                this.postData()
              }, 500)
            }
          } else {
            callAppRouter('Login', {}, (res, ed) => {
            })
          }
        })
      } else {
      }
    }
  },
  mounted () {
    const urlParams = WJH.parseQuery(window.location.href)
    this.activity_id = urlParams.activity_id
    callAppRouter('isLogin', {}, (res, ed) => {
      let mesg = null
      if (typeof ed === 'string') {
        mesg = JSON.parse(ed)
      } else {
        mesg = ed
      }
      console.log(mesg)
      console.log(ed)
      if (mesg.msg === '已登录') {
        this.configData()
      } else {
      }
    })
  }
}
</script>

<style lang="scss">
  .home {
    width: px2html(375px);
    display: flex;
    min-height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img-title {
      width: px2html(375px);
      height: px2html(304px);
    }
    .img-desc {
      width: px2html(335px);
      height: px2html(307px);
      position: relative;
      top: px2html(-49px);
    }
    .img-button {
      width: px2html(170px);
      height: px2html(41px);
      position: relative;
      top: px2html(-80px);
    }
  }
</style>
