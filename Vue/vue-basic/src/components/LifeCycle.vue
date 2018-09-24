<template>
  <div>
    <h1>生命周期</h1>
    <hr>
    <div id="app">
      {{count}}
      <p>
        <button @click="add">Add</button>
      </p>
      <p>
        <button @click="destroy">Destroy</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1
    }
  },
  methods: {
    add () {
      this.count++
    },
    destroy () {
      this.$destroy()
    }
  },
  beforeCreate () {
    console.log('1-beforeCreate 初始化之前')
  },
  created () {
    console.log('2-created 创建完成')
  },
  beforeMount () {
    console.log('3-beforeMount 挂载之前')
  },
  mounted () {
    console.log('4-mounted 被挂载之后')
  },
  beforeUpdate () {
    console.log('5-beforeUpdate 数据更新前')
  },
  updated () {
    console.log('6-updated 数据更新后')
  },
  beforeDestroy () {
    console.log('9-beforeUpdated 销毁之前')
  },
  destroyed () {
    console.log('10-destroyed 销毁之后')
  }
}
</script>

<style>
</style>
