<template>
  <div>
    <h1>Vue.directive 自定义指令</h1>
    <hr>
    <div v-maomao="color">{{num}}</div>
    <input type="text" v-focus>
    <button @click="add">ADD</button>
    <button onclick="unbind()">解绑</button>
    <h3>水果：</h3>
    <span>{{items}}</span>
    <select multiple v-model="selecteds">
      <option v-for="(option,index) in options" :key="index" :value="option.text">{{option.value}}</option>
    </select>
    <span>选中的值：{{selecteds}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 10,
      color: 'red',
      items: [
        { _uid: '001', message: '香蕉' },
        { _uid: '002', message: '苹果' }
      ],
      options: [
        { text: '南京', value: '南京' },
        { text: '苏州', value: '苏州' },
        { text: '无锡', value: '无锡' }
      ],
      selecteds: []
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
    },
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  mounted () {
    this.items.push({ message: '橘子' }, { message: '橙子' })
  }
}
</script>

<style>
</style>
