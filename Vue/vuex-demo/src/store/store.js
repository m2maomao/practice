import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add (state, step) {
    state.count += step
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  count: (state) => {
    return state.count + 100
  }
}
// context 上下文对象
const actions = {
  addAction (context) {
    context.commit('add', 10)
    setTimeout(() => {
      context.commit('reduce')
    }, 5000)
    console.log('我比reduce先执行了')
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
