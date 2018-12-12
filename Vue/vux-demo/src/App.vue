<template>
  <div id="app">
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <router-view/>
  </div>
</template>

<script>
import {Group, Cell} from 'vux'
export default {
  name: 'App',
  components: {
    Group,
    Cell
  },
  mounted() {
    console.log(111)
    // Vue.$vux.toast.text('1~~~~')
    // Vue.$vux.toast.text('2~~~~')
    // Vue.$vux.toast.text('3~~~~')
    // Vue.$vux.toast.text('4~~~~')
    // Vue.$vux.toast.text('5~~~~')
    this.$vux.toast.text('678~~~~')
    // this.$vux.toast.show({
    //   type: 'text',
    //   width: '15em',
    //   text: '请输入回答内容'
    // })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
