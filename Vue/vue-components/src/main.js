// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { ToastPlugin } from 'vux'
import PromptPoints from '@/components/index'
Vue.use(PromptPoints)
Vue.use(ToastPlugin)

Vue.config.productionTip = false

Vue.component('mycomponent', {
  template: `
    <div>
      <p>This is a Component {{b}}</p>
      <p>myMessage:{{myMessage}}</p>
      <p>父data中的parentArray:{{childArray}}</p>
      <button @click="changeValue">通过执行事件改变父parentArray的值</button>
      <button @click="changeArray">通过改变绑定值</button>
    </div>
  `,
  props: ['myMessage', 'num', 'childArray'],
  data () {
    return {
      b: 'main.js模板值',
      counter: this.childArray
    }
  },
  methods: {
    changeValue () {
      // 通过执行父方法改变
      this.$emit('changeFatherValue', null)
    },
    changeArray () {
      // 通过传入值改变父值
      console.log(this.counter)
      this.$emit('update:childArray', this.counter++)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
