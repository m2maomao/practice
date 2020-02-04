<template>
  <div>
  </div>
</template>

<script>
export default{
  name: 'ShowPrompPage',
  components: {
    // PromptPoints
  },
  data () {
    return {
      // 远程数据
      fdata: {
        a: [
          'a1',
          `<a href="javascript:;" id="link">
            <span class="vux-close">X</span>
           </a>`,
          'a3',
          'a4',
          'a5'
        ],
        b: ['b1', 'b2', 'b3', 'b4', 'b5'],
        c: ['c1', 'c2', 'c3', 'c4', 'c5']
      },
      // fdata: {
      //   a: [],
      //   b: [],
      //   c: []
      // },
      // 本地组装数据
      perfectData: null,
      // 组件传值
      htmlData: null
    }
  },
  mounted () {
    // 组装本地数据
    this.perfectData = this.fdata.a.concat(this.fdata.b, this.fdata.c)
  },
  methods: {
    //
    showDialog () {
      // 判断本地数据是否有值
      if (this.perfectData.length > 0) {
        // 取数组第一个值传入组件
        this.htmlData = this.perfectData.slice(0, 1)
        // 执行全局组件propmtPoints
        this.$promptPoints({htmlContent: this.htmlData, onOK: this.dosomeDialog})
      } else {
        console.warn('远程传入数据为空')
      }
    },
    dosomeDialog () {
      // 改变本地数组，删除第一个元素
      this.perfectData.splice(0, 1)
    }
  },
  watch: {
    // 监听本地组装数据，变化则执行传值，调用弹出组件
    perfectData: {
      handler (curVal, oldVal) {
        this.showDialog()
      }
    }
  }
}
</script>

<style>

</style>
