import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Subject from './views/Subject'
import imgContainer from './views/imgContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/subject',
      name: 'subject',
      component: Subject
    },
    {
      path: '/rs',
      name: 'imgContainer',
      component: imgContainer
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
