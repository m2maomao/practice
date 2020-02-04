<template>
  <div>
    <form action="">
      <cube-button @click="showToastTime">Toast - time 1s</cube-button>
      <cube-button @click="showToastTime0">Toast - time 0s</cube-button>
      <cube-button @click="showToastMask">Toast - with mask</cube-button>
      <cube-button @click="showToastType">Toast - type</cube-button>
      <cube-button @click="showToastCallback">Toast -callback</cube-button>
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
    },
    // 显示type
    showToastType () {
      const toast = this.$createToast({
        type: 'correct',
        txt: 'Correct'
      })
      toast.show()
    },
    // 显示回调
    // showToastCallback () {
    //   const toast = this.$createToast({
    //     txt: 'Timeout',
    //     time: 1000,
    //     onTimeout: () => {
    //       console.log('Timeout')
    //     }
    //   })
    //   toast.show()
    // },
    // $event传入事件回调
    showToastCallback () {
      const toast = this.$createToast({
        txt: 'Timeout',
        time: 1000,
        $events: {
          timeout: () => {
            console.log('Timeout')
          }
        }
      })
      toast.show()
    }
  }
}
</script>

<style lang="stylus" scoped>
.cube-btn
  border 10px solid #ffffff
</style>
