<template>
  <div class="PromptPoints">
    <x-dialog v-model="showFlagCom" class="dialog-demo">
      <h1>{{htmlContent}}</h1>
      <div @click="showFlagFunc">
        <span class="vux-close">X</span>
      </div>
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
      // showFlagCom: this.showFlag
      showFlagCom: true
    }
  },
  mounted () {
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
      this.showFlagCom = false
      setTimeout(() => {
        this.onOK()
      }, 200)
    }
  }
}
</script>
