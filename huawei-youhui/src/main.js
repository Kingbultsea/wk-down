import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import WJH from '@/js/wjhJS.js'
import Axios from 'axios'
require('@/js/setSize')

Vue.prototype.WJH = WJH
Vue.config.productionTip = false
const myAxios = Axios.create({
  baseURL: 'https://api.psy-1.com' // https://api.psy-1.com/'
})
Vue.prototype.$axios = myAxios

new Vue({
  data () {
    return {
      url: ''
    }
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
