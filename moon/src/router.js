import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PlayPage from './views/playpage.vue'
import Result from './views/result.vue'
import HJTY from './views/hjty.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/playpage',
      name: 'playpage',
      component: PlayPage
    },
    {
        path: '/result',
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
    },
    {
          path: '/hjty',
          name: 'hjty',
          component: HJTY
    },

  ]
})
