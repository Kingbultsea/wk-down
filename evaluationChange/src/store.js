import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadOnce: true
  },
  mutations: {
    loadOnce (state) {
      state.loadOnce = false
    }
  },
  actions: {

  }
})
