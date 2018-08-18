<template>
  <div>
    <cube-button @click="showTimePicker">TimePicker</cube-button>
    <cube-button @click="showTimePicker2">TimePicker - day options</cube-button>
  </div>
</template>

<script>
export default {
  methods: {
    showTimePicker () {
      this.$createTimePicker({
        showNow: true,
        minuteStep: 5,
        delay: 15,
        onSelect: (slectedTime, selectedText, formatedTime) => {
          this.$createDialog({
            type: 'warn',
            title: `selected time:${slectedTime}`,
            content: `selected text:${selectedText}<br/>format time:${formatedTime}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker Canceled',
            time: 1000
          }).show()
        }
      }).show()
    },
    showTimePicker2 () {
      this.$createTimePicker({
        showNow: true,
        minuteStep: 10,
        delay: 10,
        day: {
          len: 5,
          filter: ['今天', '明天', '后天'],
          format: 'M-d'
        },
        onSelect: (selectedTime, selectedText, formatedTime) => {
          this.$createDialog({
            type: 'warn',
            title: `selected time:${selectedTime}`,
            content: `selected text:${selectedText} <br /> format time:${formatedTime}`,
            icon: 'cubeic-alert'
          }).show()
        },
        onCancel: () => {
          this.$createToast({
            type: 'correct',
            txt: 'Picker canceled',
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
