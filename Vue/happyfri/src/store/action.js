import ajax from '../config/ajax'

export default {
  addNum ({ commit, state }, id) {
    // 执行答案存储
    commit('REMBER_ANSWER', id)
    if (state.itemNum < state.itemDetail.length) {
      // 执行itemNum+1
      commit('ADD_ITEMNUM', 1)
      // mutations
      // [ADD_ITEMNUM](state, num) {
      //   state.itemNum += num
      // }
    } else {
      console.log('答题时间为：', state.allTime)
    }
  },
  initializeData ({ commit }) {
    commit('INITIALIZE_DATA')
  }
}
