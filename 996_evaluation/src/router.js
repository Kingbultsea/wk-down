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
      path: '*',
      name: 'home',
      component: Home
    }
  ]
})
