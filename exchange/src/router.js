import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WangEditor from './components/WangEditor.vue'
import ApplyCation from './views/ApplyCation.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/a',
            name: 'home',
            component: Home
        },
        {
            path: '/editor',
            name: 'wangeditor',
            component: WangEditor
        },
        {
            path: '/a',
            name: 'applycation',
            component: ApplyCation
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
