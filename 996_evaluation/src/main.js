import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import WJH from '@/js/wjhJS.js'
import animated from 'animate.css'

Vue.prototype.WJH = WJH
Vue.config.productionTip = false
Vue.use(animated)
require('@/js/setSize')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
