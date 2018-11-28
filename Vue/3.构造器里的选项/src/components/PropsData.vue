<template>
  <div class="hello">
    <h1>构造器里的选项</h1>
    <p>propsData Option</p>
    <header-my :num = "'岳云鹏'"></header-my>
    <h2></h2>
    <div id="footer"></div>
    <div class="last"></div>
  </div>
</template>

<script>
import Vue from 'vue'

let FooterA = Vue.extend({
  template: `
    <footer>This is Footer {{organization}} -- {{a}}</footer>
  `,
  data () {
    return {
      organization: '德云社'
    }
  },
  props: ['a']
})

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'THIS iS HEADER'
    }
  },
  components: {
    headerMy: {
      template: `
        <p>{{message}}--{{num}}</p>
      `,
      props: ['num'],
      data () {
        return {
          message: 'THIS IS HEADER COMPONENT'
        }
      }
    }
  },

  mounted () {
    // $mount挂载'HTML标签'，'.class','#id'均可，类似Jquery
    new FooterA({propsData: {a: '我是第一个值'}}).$mount('h2')
    new FooterA({propsData: {a: 'ok啦'}}).$mount('#footer')
    new FooterA().$mount('.last')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
