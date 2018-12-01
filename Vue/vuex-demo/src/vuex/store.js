import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 状态
const state = {
  count: 3
}

// 通过mutation改变state
const mutations = {
  add (state) {
    state.count++
  },
  reduce (state) {
    state.count--
  }
}

export default new Vuex.Store({
  state,
  mutations
})
