<template>
  <div>
    <div id="todoItem"></div>
    <apple></apple>
  </div>
</template>

<script>
import Vue from 'vue'
/*
// 局部注册组件
let TodoItem = Vue.extend({
  data: function () {
    return {
      todoData: [
        { id: 0, text: '蔬菜1' },
        { id: 1, text: '奶酪1' },
        { id: 2, text: '随便其它什么人吃的东西1' }
      ]
    }
  },
  template: `
    <ul>
        <li v-for='(d, i) in todoData' :key="i">
            {{ d.text }}
        </li>
    </ul>
  `
})

export default {
  name: 'Extend',
  mounted () {
    new TodoItem({
      data () {
        return {
          todoData: [
            { id: 0, text: '蔬菜2' },
            { id: 1, text: '奶酪2' },
            { id: 2, text: '随便其它什么人吃的东西2' }
          ]
        }
      }
    }).$mount('#todoItem')
  }

}
*/

/*
// 注册为全局组件
let TodoItem = Vue.extend({
  data: function () {
    return {
      todoData: [
        { id: 0, text: '蔬菜1' },
        { id: 1, text: '奶酪1' },
        { id: 2, text: '随便其它什么人吃的东西1' }
      ]
    }
  },
  template: `
    <ul>
        <li v-for='(d, i) in todoData' :key="i">
            {{ d.text }}
        </li>
    </ul>
  `
})

Vue.component('apple', TodoItem)

export default {

}
*/
let TodoItem = Vue.extend({
  data: function () {
    return {
      todoData: [
        { id: 0, text: '蔬菜1' },
        { id: 1, text: '奶酪1' },
        { id: 2, text: '随便其它什么人吃的东西1' }
      ]
    }
  },
  template: `
    <ul>
        <li v-for='(d, i) in todoData' :key="i">
            {{ d.text }}
        </li>
    </ul>
  `
})

export default {
  name: 'someName',
  components: {
    apple: TodoItem
  }
}

</script>
<style>
</style>
