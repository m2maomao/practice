<template>
  <div>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
    <ul>
      <li v-for="(item,key,index) of obj" :key="index">{{item}}</li>
    </ul>
    <p>
      <button @click="change">原始方法直接修改数组下标</button>
      <button @click="changeBySet">用Vue.set方法修改</button>
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
export default {

  name: 'Set',
  data () {
    return {
      arr: [1, 2, 3, 4],
      obj: {
        a: 1,
        b: 2,
        c: 3
      }
    }
  },
  methods: {
    change () {
      this.arr[0] = 999
      console.log('this.arr', this.arr)
    },
    changeBySet () {
      // Vue.set(this.arr, 4, 999)
      // Vue.set(this.obj, 'd', 12313123131313)
      this.$data.obj.c = 3333333// 依赖属性，所以会重新渲染
      this.$data.obj.d = 666666// 非依赖属性，所以不会重新渲染
      console.log(this.obj)
    }
  }
}
</script>

<style>
</style>
