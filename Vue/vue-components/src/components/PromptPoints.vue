<template>
  <div class="PromptPoints">
    <x-dialog v-model="showFlagCom" class="dialog-demo">
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
      showFlagCom: true
    }
  },
  mounted () {
    // console.log(document.getElementById('link'))
    this.$nextTick().then(() => {
      // console.log(document.getElementById('link'))
      if (document.getElementById('link')) {
        document.getElementById('link').addEventListener('click', this.showFlagFunc, false)
      }
    })

    let setArr = new Set(['a1', 'b1', 'c1'])
    if (setArr.has(this.htmlContent[0])) {
      console.log('%c 发布成功提示', 'color:blue')
      setTimeout(() => {
        this.showFlagCom = false
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
      this.showFlagCom = false
      setTimeout(() => {
        this.onOK()
      }, 200)
    }
  }
}
</script>
