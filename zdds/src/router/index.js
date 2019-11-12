import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Main from '@/page/index'
import Center from '@/page/center'
import Centerxc from '@/page/centerxc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    },
    {
      path: '/centerxc',
      name: 'centerxc',
      component: Centerxc
    }
  ]
})
