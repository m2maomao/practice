<template>
  <div>
    <h1>v-text,v-html实例</h1>
    <span>{{message}}</span> = <span v-text="message"></span>
    <hr>
    <span>{{dodo}}</span> = <span v-html="dodo">尽量少使用，容易造成xss攻击</span>
    <hr>
    <h2>v-pre v-cloak v-once实例</h2>
    <div>{{message}}</div>
    vue不对v-pre进行渲染，原样输出
    <div v-pre>{{message}}</div>
    <div v-cloak>只有页面渲染完成后才显示</div>
    <div v-once>{{message}}</div><!--只进行一次渲染-->
    <div><input type="text" v-model="message"></div>
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello world!',
      dodo: '<h2>Hello world!</h2>'
    }
  }
}
</script>

<style>
</style>
