<template>
  <div class="hello">
    <h2>Page-H</h2>
    <hr>
    <h3>{{$store.state.count}}<i> - </i>{{count}}</h3>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>

  </div>
</template>

<script>
// 引入store
import store from '../vuex/store'
import {mapState} from 'vuex'

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
    ...mapState(['count'])
  },
  // 使用store
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{font-weight: normal}
i{color:darkgoldenrod; font-weight: bold}
</style>
