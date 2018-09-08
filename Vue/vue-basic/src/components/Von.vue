<template>
  <div>
    <h1>v-on实例</h1>
    <hr>
    <div>本场比赛得分:{{fenshu}}</div>

    <p>
      <button v-on:click="jiafen">加分</button>
      <button @click="jianfen">减分</button>
      <input type="text" v-on:keyup.enter="onEnter" v-model="fenshu2">
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fenshu: 0,
      fenshu2: 1
    }
  },
  methods: {
    jiafen () {
      this.fenshu++
    },
    jianfen () {
      this.fenshu--
    },
    onEnter () {
      this.fenshu = this.fenshu + parseInt(this.fenshu2)
    }
  }
}
</script>

<style>
</style>
