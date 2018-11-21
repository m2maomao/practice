<template>
  <div class="PromptPoints">
    <x-dialog v-model="showFlagLocal" class="dialog-demo">
      <div v-html="htmlContent[0]"></div>
    </x-dialog>
  </div>
</template>

<script>
import {XDialog} from 'vux'
import { setTimeout } from 'timers'
export default {
  name: 'PromptPoints',
  props: ['showFlag', 'htmlContent', 'onOK'],
  components: {
    XDialog
  },
  data () {
    return {
      showFlagLocal: true
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      console.log(document.getElementById('link'))
      if (document.getElementById('link')) {
        console.log('有值')
        document.getElementById('link').addEventListener('click', this.showFlagFunc, false)
      }
    })

    let setArr = new Set(['a1', 'b1', 'c1'])
    if (setArr.has(this.htmlContent[0])) {
      console.log('%c 发布成功提示', 'color:blue')
      setTimeout(() => {
        this.showFlagLocal = false
        setTimeout(() => {
          this.onOK()
        }, 2000)
      }, 5000)
    } else {
      console.log('%c 非发布成功提示', 'color:pink')
    }
  },
  watch: {
  },
  methods: {
    showFlagFunc () {
      console.log('点击.......')
      this.showFlagLocal = false
      setTimeout(() => {
        this.onOK()
      }, 200)
    }
  }
}
</script>
