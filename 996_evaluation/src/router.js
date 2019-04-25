import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Evaluation from './views/Evaluation.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
