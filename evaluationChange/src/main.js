import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import WJH from '@/js/wjhJS.js'
import Axios from 'axios'
import Share from '@/js/shareAndGetName'
import Tool from './js/tool.js'

Vue.prototype.WJH = WJH
Vue.config.productionTip = false
require('@/js/setSize')

new Vue({
  data () {
    return {
      url: 'https://api.debug.psy-1.com',
      amountData: '' // 从服务器拉取的 总数据
    }
  },
  methods: {
    shareM (title = '小睡眠官方测评', desc = '小睡眠', picUrl = 'https://res.psy-1.com/FqFCiruUYEg-3f4T8aXuV4LqcC7X') {
      const share = new Share({ pic: picUrl, url: window.location.href.split('#')[0], title: title, desc: desc })
      this.share = share
      share.appShare()
      share.rawWeiXinShare(this.url)
    },
    test () {
      if (Tool.is_cosleep()) {
        this.share.appGetName()
      }
      if (/micromessenger/.test(navigator.userAgent.toLowerCase())) {
        console.log('?????QQ')
        this.share.weiXinInit(this.url)
        this.share.weatherCode()
        this.share.weiXinGetName(this.url)
      }
    },
    appShare (title = '', desc = '', picUrl = 'https://res.psy-1.com/FqFCiruUYEg-3f4T8aXuV4LqcC7X') {
      const share = new Share({ pic: 'https://res.psy-1.com/FqFCiruUYEg-3f4T8aXuV4LqcC7X', url: window.location.href.split('#')[0], title: title, desc })
      share.appShare()
      share.rawWeiXinShare(this.url)
    },
    loadImage (url) {
      return new Promise((resolve) => {
        const myImage = new Image(100, 200)
        myImage.src = url.replace(/\\$/, '')
        myImage.onload = () => {
          resolve()
        }
      })
    },
    getData () {
      const id = this.parseQuery(document.URL)
      Axios.get(this.url + '/evaluate-miniapp/question/find', { params: { id: id.article_id } }).then((res) => {
        // res.data.data
        const reg = /"(https.+?)"/g
        const jsonString = JSON.stringify(res.data.data)
        let vancant = ''
        let pr = []
        /* eslint-disable */
        while (vancant = reg.exec(jsonString)) {
          const myImage = new Image(100, 200)
          // console.log(vancant[1].replace(/\\$/, ''))
          pr.push(this.loadImage(vancant[1]))
          // myImage.src = vancant[1].replace(/\\$/, '')
        }
        Promise.all(pr).then(() => {
          sessionStorage.setItem('haveLoad', 'true')
        })
        this.amountData = res.data.data

        this.shareM(this.amountData.weixinTitle, this.amountData.weixinDesc)
        this.test() // 获取微信名称
        // this.appShare(this.amountData.weixinTitle, this.amountData.weixinDesc)
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
    }
  },
  created () {
    this.getData()
  },
  mounted () {
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
