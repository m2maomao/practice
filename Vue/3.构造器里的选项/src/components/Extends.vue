<template>
  <div>
    <h3>Extends Option 扩展选项</h3>
    <p>{{num}}</p>
    <button @click="add">ADD</button>
  </div>
</template>

<script>
export default {
  name: 'Extends',
  data () {
    return {
      num: 1
    }
  },
  methods: {
    add () {
      this.num += 1
    }
  },
  extends: {
    updated () {
      console.log('执行了extends中的updated钩子')
    }
  }
  // 2.0中只有在独立构建时才能使用delimiters
  // delimiters: ['${', '}']
}
</script>

<style scoped>
h3{
  color: brown
}
button{
  padding: 10px 20px;
  border-radius: 15px;
  background: seagreen;
  color: #ffffff;
  border: 1px solid green;
  outline: none;
}
</style>
