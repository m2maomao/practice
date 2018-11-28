<template>
  <div>
    <h1>v-for实例</h1>
    <h2>{{messageA}}</h2>
    <ul>
      <li v-for="(a,index) in itemsA" :key="index">{{a}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="(a,index) in students" :key="index">{{a.name}}--{{a.age}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vfor',
  data () {
    return {
      numbers: [12, 1, 56, 13, 15],
      students: [
        { name: '毛毛', age: 31 },
        { name: 'Michael', age: 32 },
        { name: '小熊', age: 33 },
        { name: '书法家', age: 34 }
      ],
      message: 'Hello'
    }
  },
  computed: {
    itemsA () {
      // .slice从已有的数组中返回选定的元素.slice(slice,end)
      return this.numbers.slice(0).sort()
      // 以下为错误用法，computed不能修改data中的值
      // return this.numbers.sort()
    },
    messageA () {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {
    sortNum (a, b) {
      return a - b
    }
  }
}
</script>

<style>
</style>
