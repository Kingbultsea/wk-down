import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Xm from './views/限免.vue'
import Xm2 from './views/限免2.vue'
import Xm3 from './views/限免3.vue'
import Xm4 from './views/限免4.vue'
import smbwz from './views/睡眠保卫战'
import atp from './views/AutoPhase'

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
      path: '/xm2',
      name: 'xm2',
      component: Xm2
    },
    {
      path: '/xm3',
      name: 'xm3',
      component: Xm3
    },
    {
      path: '/xm4',
      name: 'xm4',
      component: Xm4
    },
    {
      path: '/smbwz',
      name: 'smbwz',
      component: smbwz
    },
    {
      path: '/atp',
      name: 'atp',
      component: atp
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
