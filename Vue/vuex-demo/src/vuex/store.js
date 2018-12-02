import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 状态
const state = {
  count: 3
}

// 通过mutation改变state 突变
const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

// 相当于computed
const getters = {
  count (state) {
    return (state.count += 100)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
