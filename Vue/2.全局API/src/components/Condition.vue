<template>
  <div>
    <h1>v-if & v-else & v-show</h1>
    <div v-if="isLogin">您好，Michael!</div>
    <div v-else>不好意思，请先登录再查看!</div>
    <div v-show="isLogin">设置display的值显示v-show</div>
    <input type="checkbox" v-model="isLogin">
    <label for="isLogin">切换isLogin:{{isLogin}}</label>
    v-if 和v-show的区别：
    v-if:判断是否加载，可以减轻服务器的压力，在需要时加载
    v-show:调整css display属性，可以使客户端操作更加流畅
  </div>
</template>

<script>
export default {
  name: 'condition',
  data () {
    return {
      isLogin: true
    }
  }

}
</script>

<style>
</style>
