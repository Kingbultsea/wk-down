import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Evaluation from './views/Evaluation.vue'
import Result from './views/Result.vue'
import Input from './views/input.vue'
import DownLoad from './views/DownLoadPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/e',
      name: 'evaluation',
      component: Evaluation
    },
    {
      path: '/r',
      name: 'result',
      component: Result
    },
    {
      path: '/download',
      name: 'download',
      component: DownLoad
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
