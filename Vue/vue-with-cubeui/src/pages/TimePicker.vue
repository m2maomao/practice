<template>
  <div>
    <cube-button @click="showTimePicker">TimePicker</cube-button>
    <cube-button @click="showTimePicker2">TimePicker - day options</cube-button>
    <cube-button @click="showTimePicker3">Config format</cube-button>
    <cube-button @click="showMinuteStepPicker">Config minute step</cube-button>
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
          len: 5, // len属性可以设置第一列需要展示的日期长度
          filter: ['今天', '明天', '后天'], // filter属性设置第一列日期展示的文案
          format: 'M-d' // format属性用以格式化日期显示的方式，当len的数量大于fileter的数组长度时，会以M月d日的格式显示文案
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
    },
    showTimePicker3 () {
      if (!this.formatPicker) {
        this.formatPicker = this.$createTimePicker({
          format: 'hh:mm',
          day: {
            len: 300,
            filter: [],
            format: 'YYYY-MM-d'
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.formatPicker.show()
    },
    showMinuteStepPicker () {
      if (!this.minutePicker) {
        this.minutePicker = this.$createTimePicker({
          minuteStep: {
            rule: 'ceil',
            step: 15
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.minutePicker.show()
    },
    selectHandle (selectedTime, selectedText, formatedTime) {
      this.$createDialog({
        type: 'warn',
        title: `selected time:${selectedTime}`,
        content: `selected text:${selectedText} <br /> format time:${formatedTime}`,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle () {
      this.$createToast({
        type: 'correct',
        txt: 'Picker canceled',
        time: 1000
      }).show()
    }
  }
}
</script>

<style lang="stylus" scoped>
button
  border 10px solid #ffffff
</style>
