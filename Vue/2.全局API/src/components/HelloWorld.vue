<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h3></h3>
  </div>
</template>

<script>
// import { mixin } from './_base'
import mixin from './_base2'
export default {
  name: 'HelloWorld',
  mixins: [mixin],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'World!',
      boo: 'oh,my god!'
    }
  },
  created: function () {
    console.log(this.$data)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
