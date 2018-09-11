<template>
  <div>
    <h1>Vue.directive 自定义指令</h1>
    <hr>
    <div v-maomao="color">{{num}}</div>
    <button @click="add">ADD</button>
    <button onclick="unbind()">解绑</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 10,
      color: 'red'
    }
  },
  methods: {
    add () {
      this.num++
    }
  },
  directives: {
    maomao: {
      inserted: function (el, binding) {
        el.style = 'color:' + binding.value
        console.log(binding)
      }
    }
  }
}
</script>

<style>
</style>
