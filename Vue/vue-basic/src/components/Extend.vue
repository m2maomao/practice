<template>
  <div>
    <div id="todoItem"></div>
  </div>
</template>

<script>
import Vue from 'vue'

// var AuthorURL = Vue.extend({
//   template: "<p><a :href='authorUrl'>{{authorName}}</a></p>",
//   data () {
//     return {
//       authorName: '百度',
//       authorUrl: 'http://www.baidu.com'
//     }
//   }
// })

// new AuthorURL().$mount('#a')

// 局部注册组件
var TodoItem = Vue.extend({
  data: function () {
    return {
      todoData: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
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
  extend: TodoItem,
  mounted () {
    new TodoItem({
      propsData: {
        todoData: [
          { id: 0, text: '蔬菜' },
          { id: 1, text: '奶酪' },
          { id: 2, text: '随便其他什么东西' }
        ]
      }
    }).$mount('#todoItem')
  }

}
</script>
<style>
</style>
