<template>
  <div>
    <cube-button @click="showDatePicker">Date Picker</cube-button>
    <cube-button @click="showDatePicker2">Time Picker</cube-button>
    <cube-button @click="showDatePicker3">Date Time Picker</cube-button>
    <cube-button @click="showDatePicker4">Use format</cube-button>
    <cube-button @click="showUpdatePropsPicker">Use $updateProps</cube-button>
  </div>
</template>

<script>
export default {
  methods: {
    // 普通DatePicker
    showDatePicker () {
      if (!this.datePicker1) {
        this.datePicker1 = this.$createDatePicker({
          title: 'Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 7, 6),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.datePicker1.show()
    },
    // 列的配置
    showDatePicker2 () {
      if (!this.datePicker2) {
        this.datePicker2 = this.$createDatePicker({
          title: 'Timer Picker',
          min: [0, 0, 0],
          max: [20, 59, 59],
          value: new Date(),
          startColumn: 'hour',
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.datePicker2.show()
    },
    // 年月日时分秒选择器
    showDatePicker3 () {
      if (!this.datePicker3) {
        this.datePicker3 = this.$createDatePicker({
          title: 'Date Time Picker',
          min: new Date(2008, 7, 8, 0, 0),
          max: new Date(2020, 7, 8, 20, 59, 59),
          value: new Date(),
          columnCount: 6,
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.datePicker3.show()
    },
    // 配置格式
    showDatePicker4 () {
      if (!this.datePicker4) {
        this.datePicker4 = this.$createDatePicker({
          title: 'format Date Picker',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 7, 7),
          value: new Date(),
          format: {
            year: 'YY年',
            month: 'MM月',
            date: '第 DD 日'
          },
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.datePicker4.show()
    },
    // $updateProps
    showUpdatePropsPicker () {
      if (!this.updatePropsPicker) {
        this.updatePropsPicker = this.$createDatePicker({
          title: 'Use $updateProps',
          min: new Date(2008, 7, 8),
          max: new Date(2020, 9, 10),
          value: new Date(),
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.updatePropsPicker.show()

      setTimeout(() => {
        this.updatePropsPicker.$updateProps({
          title: 'updated',
          value: new Date(2010, 9, 1)
        })
      }, 2000)
    },
    selectHandle (date, selectedVal, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `
          seleted Date:<br />
          - date:${date} <br />
          - value:${selectedVal.join(',')} <br />
          - text:${selectedText.join('')}
        `,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle () {
      this.$createToast({
        type: 'correct',
        txt: 'Picker Canceled',
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
