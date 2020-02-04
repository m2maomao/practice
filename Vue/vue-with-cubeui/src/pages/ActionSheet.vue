<template>
  <cube-button-group>
    <cube-button @click="showActionSheet">操作列表</cube-button>
    <cube-button @click="showActive">ActionSheet - active</cube-button>
    <cube-button @click="showPickerStyle">ActionSheet - picker style</cube-button>
  </cube-button-group>
</template>

<script>
import CubeButtonGroup from '@/components/cubeButtonGroup.vue'
export default {
  data () {
    return {
      act: 0
    }
  },
  components: {
    CubeButtonGroup
  },
  methods: {
    showActionSheet () {
      this.$createActionSheet({
        title: '我是标题~~~~',
        data: [
          {
            content: `<em>align-center</em>`,
            class: 'cube-foo'
          },
          {
            content: 'align - left',
            align: 'left'
          },
          {
            content: 'align - right',
            align: 'right'
          }
        ],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            time: 1000
          }).show()
        }
      }).show()
    },
    showActive () {
      this.$createActionSheet({
        title: '我是标题爸爸',
        active: this.act,
        data: [
          { content: '舒适型' },
          { content: '七座商务' },
          { content: '豪华型' }
        ],
        onSelect: (item, index) => {
          this.act = index
          this.$createToast({
            txt: `Clicked ${item.content} ${index}`,
            type: 'correct',
            time: 1000
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            txt: 'Clicked canceled',
            type: 'warn',
            time: 1000
          }).show()
        }
      }).show()
    },
    showPickerStyle () {
      this.$createActionSheet({
        title: '我是标题老三',
        pickerStyle: true,
        data: [
          { content: '树形' },
          { content: '心型' },
          { content: '三角形' }
        ],
        onSelect: (item, index) => {
          this.$createToast({
            txt: `Clicked ${item.content}`,
            type: 'correct',
            time: 1000
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            txt: `Clicked canceled`,
            type: 'warn',
            time: 1000
          }).show()
        }
      }).show()
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
