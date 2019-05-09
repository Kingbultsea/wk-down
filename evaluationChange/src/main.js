import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import WJH from '@/js/wjhJS.js'
import Axios from 'axios'
import Share from '@/js/shareAndGetName'

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
    appShare (title = '', desc = '', picUrl = 'https://res.psy-1.com/FqFCiruUYEg-3f4T8aXuV4LqcC7X') {
      const share = new Share({ pic: 'https://res.psy-1.com/FqFCiruUYEg-3f4T8aXuV4LqcC7X', url: window.location.href.split('#')[0], title: title, desc })
      share.appShare()
      share.rawWeiXinShare(this.url)
    },
    getData () {
      const id = this.parseQuery(document.URL)
      Axios.get(this.url + '/evaluate-miniapp/question/find', { params: { id: id.article_id } }).then((res) => {
        // res.data.data
        const reg = /\"(https.+?)\"/g
        const jsonString = JSON.stringify(res.data.data)
        let vancant = ''
        while (vancant = reg.exec(jsonString)) {
          const myImage = new Image(100, 200)
          console.log(vancant[1].replace(/\\$/, ''))
          myImage.src = vancant[1].replace(/\\$/, '')
        }
        sessionStorage.setItem('haveLoad', 'true')
        this.amountData = res.data.data
        this.appShare(this.amountData.weixinTitle, this.amountData .weixinDesc)
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
