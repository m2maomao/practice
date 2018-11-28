<template>
  <div>
    <p>{{num}}</p>
    <button @click="add">ADD</button>
  </div>
</template>
<script>
// 全局的最先执行，然后混入的先执行，原生的最后执行
let addConsole = {
  updated () {
    console.log('数据发生变化，变成了' + this.num)
  }
}
export default {
  name: 'Mixins',
  data () {
    return {
      num: 1
    }
  },
  methods: {
    add () {
      this.num++
    }
  },
  updated () {
    console.log('我是原生的updated')
  },
  mixins: [addConsole]
}
</script>
<style scoped>
button{
  padding: 10px 20px;
  border: 1px solid #dddddd;
  border-radius: 15px;
  outline: none;
  background: #fff;
  color: #666666;
}
</style>
