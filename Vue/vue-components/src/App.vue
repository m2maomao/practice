<template>
  <div id="app">
    <hello-world></hello-world>
    <mycomponent my-message="属性传值" :child-array.sync="parentArray" @changeFatherValue="addParentArray"></mycomponent>
    <p>{{a}}</p>
    <p>-------以下是router-view--------</p>
    <router-view />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
  data () {
    return {
      a: 'hello,data',
      num: 1,
      parentArray: 1
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    addParentArray () {
      this.parentArray++
    }
  }
}
</script>

<style>
</style>
