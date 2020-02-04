import PromptPoints from './PromptPoints.vue'
import Vue from 'vue'
let PromptPointsConstructor = Vue.extend(PromptPoints)
let instance
const install = () => {
  Object.defineProperty(Vue.prototype, '$promptPoints', {
    get () {
      const pp = options => {
        instance = new PromptPointsConstructor({
          propsData: options
        })
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el)
        return instance.vm
      }
      return pp
    }
  })
}
export default install
