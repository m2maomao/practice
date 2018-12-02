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
    if (!Number.isFinite(n)) {
      // 如果没有传入n的值，那么默认n=100
      n = 100
    }
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}

// 相当于computed
const getters = {
  count (state) {
    return (state.count + 100)
  }
}

//
const actions = {
  addAction (context) {
    context.commit('add', 10)
    setTimeout(() => {
      context.commit('reduce')
    }, 3000)
    console.warn('我比reduce先执行了，说明我是异步执行的! 3秒后会执行reduce')
  },
  reduceAction ({commit}) {
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
