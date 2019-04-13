<template>
  <div class="hello">
    <h2>Page-H</h2>
    <hr>
    <h3>{{count}}</h3>
    <p>
      <button @click="add">+</button>
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>

  </div>
</template>

<script>
// 引入store
import store from '../vuex/store'
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // // 第一种形式访问state
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   }
  // },

  // // 第二种形式访问state
  // computed: {
  //   ...mapState({
  //     count: state => state.count
  //   })
  // },

  // 第三种形式访问state
  computed: {
    ...mapState(['count']), // 注意：此时count引入的是vuex中的count，默认值为3
    count () {
      return this.$store.getters.count
    }
  },
  // 使用store
  store,
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{font-weight: normal}
i{color:darkgoldenrod; font-weight: bold}
</style>
