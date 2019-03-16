import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Success from './views/Success.vue'
import Detail from './views/Detail.vue'
import Invite from './views/Invite.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/invite',
      name: 'invite',
      component: Invite
    },
    {
      path: '/success',
      name: 'success',
      component: Success
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
