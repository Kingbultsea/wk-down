import Vue from 'vue'
import Router from 'vue-router'
import ali from './views/ali.vue'
import vx from './views/vx.vue'
import unionpay from './views/unionpay.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ali',
      name: 'ali',
      component: ali
    },
    {
      path: '/vx',
      name: 'vx',
      component: vx
    },
    {
      path: '/unionpay',
      name: 'unionpay',
      component: unionpay
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
