import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Xm from './views/限免.vue'
import smbwz from './views/睡眠保卫战'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/xm',
      name: 'xm',
      component: Xm
    },
    {
      path: '/smbwz',
      name: 'smbwz',
      component: smbwz
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
