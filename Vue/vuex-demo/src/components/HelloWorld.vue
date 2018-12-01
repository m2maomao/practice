<template>
  <div class="hello">
    <h2>Page-H</h2>
    <hr>
    <h3>{{$store.state.count}}</h3>
  </div>
</template>

<script>
// 引入store
import store from '../vuex/store'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 使用store
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
