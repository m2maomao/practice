<template>
  <div>
    <form action="">
      <cube-button @click="showToastTime">Toast - time 1s</cube-button>
      <cube-button @click="showToastTime0">Toast - time 0s</cube-button>
      <cube-button @click="showToastMask">Toast - with mask</cube-button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    showToastTime () {
      const toast = this.$createToast({
        // time 字段决定了Toast显示的时间，如果设置为0，则不会消失，需要手动调用组件的hide方法
        time: 1000,
        txt: 'Toast time 1s'
      })
      toast.show()
    },
    showToastTime0 () {
      const toast = this.$createToast({
        time: 0,
        txt: 'Toast time 0'
      })
      toast.show()
      setTimeout(() => {
        toast.hide()
      }, 2000)
    },
    // 显示有遮罩Loading
    showToastMask () {
      const toast = this.$createToast({
        txt: 'Loading',
        mask: true
      })
      toast.show()
    }
  }
}
</script>

<style lang="stylus">

</style>
