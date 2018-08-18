<template>
  <div>
    <cube-button @click="showDateSegmentPicker">StartDate - EndDate</cube-button>
  </div>
</template>

<script>

const dateSegmentData = [
  {
    is: 'cube-date-picker',
    title: '入学时间',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 7, 8)
  },
  {
    is: 'cube-date-picker',
    title: '毕业时间',
    min: new Date(2000, 0, 1),
    max: new Date(2030, 7, 8)
  }
]
export default {
  mounted () {
    this.dateSegmentPicker = this.$createSegmentPicker({
      data: dateSegmentData,
      onSelect: (selectDates, slectedVals, selectedTexts) => {
        this.$createDialog({
          type: 'warn',
          content: `Selected Items:<br /> - 入学时间:${selectedTexts[0].join('')} <br /> - 毕业时间:${selectedTexts[1].join('')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      onNext: (i, selectedDate, selectedValue, selectedText) => {
        dateSegmentData[1].min = selectedDate
        if (i === 0) {
          this.dateSegmentPicker.$updateProps({
            data: dateSegmentData
          })
        }
      }
    })
  },
  methods: {
    showDateSegmentPicker () {
      this.dateSegmentPicker.show()
    }
  }
}
</script>

<style lang="stylus">
</style>
