<template>
  <div id="app">
    <h1>这是App组件</h1>
    <hr>
    <counter></counter>
    <hr>
    <amount></amount>
  </div>
</template>

<script>
import counter from './components/counter.vue'
import amount from './components/amount.vue'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    counter,
    amount
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
