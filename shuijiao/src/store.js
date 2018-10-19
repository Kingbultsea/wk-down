import Vue from 'vue'
import Vuex from 'vuex'
import Tool from '@/components/tool.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    getters: {
        isWeiXin(){
            return /micromessenger/.test(navigator.userAgent.toLowerCase())
        },
        isApp(){
            return Tool.is_cosleep()
        }
    },
    mutations: {

    },
    actions: {

    }
})

