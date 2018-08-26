import ajax from '../config/ajax'

export default {
  addNum ({ commit, state }, id) {
    commit('REMBER_ANSWER', id)
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1)
      // mutations
      // [ADD_ITEMNUM](state, num) {
      //   state.itemNum += num
      // }
    }
  },
  initializeData ({ commit }) {
    commit('INITIALIZE_DATA')
  }
}
