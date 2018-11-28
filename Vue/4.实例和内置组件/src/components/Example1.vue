<template>
  <div>
    <h1>Example-1</h1>
    <div id="d">我是初始内容</div>
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  name: 'Example1',
  data () {
    return {

    }
  },
  mounted () {
    // 使用Jquery必须得在DOM渲染完中使用，即在mounted,updated中使用.
    $('#d').html('This is Content By Jquery')
  }
}
</script>

<style scoped>

</style>
