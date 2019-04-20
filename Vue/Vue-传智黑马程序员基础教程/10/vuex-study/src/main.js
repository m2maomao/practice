import Vue from 'vue'
import App from './App'
import router from './router'
// 配置vuex的步骤
// 1.运行 cnpm i vuex -S
// 2.导入包
import Vuex from 'vuex'
// 3.注册vuex到vue中
Vue.use(Vuex)
// 4.new Vuex.Store()实例，得到一个数据仓储对象

var store = new Vuex.Store({
  state: {
    // 可以把state想象成组件中的data，专门用来存储数据的
    // 如果在组件中，想要访问store中的数据，只能通过 this.$store.state.***来访问
    count: 0
  },
  mutations: {
    // 注意：如果要操作 store 中的 state 值，只能通过调用 mutations 提供的方法，才能操作对应的数据，不推荐直接操作 state 中的数据，因为万一导致了数据的紊乱，不能快速定位到错误原因，因为，每个组件都可能有操作数据的方法；
    increment (state) { // 【注意】这里的state相当于上下文对象，可以任意起名字，不一定叫state
      state.count++
      console.log('执行了$store.commit("increment")方法')
    },
    // 注意：如果组件想要调用mutations中的方法，只能使用 this.$store.commit('方法名')
    // 这种调用mutations方法的格式，和this.$emit('父组件中的方法名')
    // 注意：mutations 的函数参数列表中，最多支持两个参数，其中，参数1：是 state状态；参数2：通过commit提交过来的参数；
    subtract (state, obj) {
      console.log(obj)
      state.count -= obj.c + obj.d
    }
  },
  getters: {
    // 注意：这里的getters，只负责对外提供数据，不负责修改数据，如果想要修改 state 中的数据，请去找 mutations
    optCount: function (state) {
      return '当前最新的count值是:：' + state.count
    }
    // 经过回顾对比，发现 getters 中的方法，和组件中的过滤器比较类似，因为过滤器和getters 都没有修改原数据，都是把原数据做了一层包装，提供给了调用者；
    // 其次，getters也和computed比较像，只要 state 中的数据发生变化了，那么，如果getters正好也引用了这个数据，那么就会立即触发 getters 重新求值；
  }
})

// 总结：
// 1.state中的数据，不能直接修改，如果想要修改，必须通过 mutations
// 2.如果组件想要直接从state上获取数据：需要 this.$store.state.***
// 3.如果组件想要修改数据，必须使用 mutations提供的方法，需要通过 this.$store.commit('方法名',唯一的一个参数)
// 4.如果store中 state 上的数据，在对外提供的时候，需要做一层包装，那么，推荐使用 getters，如果需要使用getters，则用 this.$store.getters.***

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store // 将vuex创建的store挂载到 VM 实例上，只要挂载到了vm上，任何组件都能使用store来存取数据
})
