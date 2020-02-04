<template>
  <div>
    <h1>这是登录组件，使用.vue文件定义的组件 --- {{ msg }}</h1>
  </div>  
</template>

<script>
export default {
  data() { // 组件中的data必须是 function
    return {
      msg: 123
    }
  },
  methods: {
    show () {
      console.log('调用了 login.vue中的show方法')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
