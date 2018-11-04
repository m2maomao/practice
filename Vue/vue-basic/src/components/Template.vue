<template>
    <div>
        <h1>Template三种写法</h1>
        <hr>
        <div>{{message}}</div>
    </div>
</template>

<script>
// 1.标签模板 2.选项模板 3.script标签模板
export default {
  data () {
    return {
      message: 'some words!!!'
    }
  }
}
</script>

<style>

</style>
