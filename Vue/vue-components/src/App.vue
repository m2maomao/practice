<template>
  <div id="app">
    <hello-world></hello-world>
    <mycomponent my-message="属性传值" :child-array.sync="parentArray" @changeFatherValue="addParentArray"></mycomponent>
    <p>{{a}}</p>
    <hello v-model="hello"></hello>
    {{hello}}
    <p>-------以下是router-view--------</p>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
export default {
  name: 'App',
  data () {
    return {
      a: 'hello,data',
      num: 1,
      parentArray: 1,
      hello: ''
    }
  },
  components: {
    HelloWorld,
    Hello
  },
  methods: {
    addParentArray () {
      this.parentArray++
    }
  }
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
</style>

<style>
input{
  border: 1px solid #ebebeb;
  padding: 10px;
}
</style>
