<template>
  <div>
    <cube-button @click="showAsyncPicker">Async Load Data</cube-button>
  </div>
</template>

<script>
import { provinceList, cityList, areaList } from 'static/data/area'

const asyncData = provinceList
const asyncSelectedIndex = [0, 0, 0]
asyncData[0].children = cityList[asyncData[0].value]
asyncData[0].children[0].children = areaList[asyncData[0].children[0].value]

export default {
  mounted () {
    this.asyncPicker = this.$createCascadePicker({
      title: 'Async Load Data',
      async: true,
      data: asyncData,
      selectedIndex: asyncSelectedIndex.slice(),
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle,
      onChange: this.asyncChangeHandle
    })
  },
  methods: {
    showAsyncPicker () {
      this.asyncPicker.show()
    },
    asyncChangeHandle (i, newIndex) {
      if (newIndex !== asyncSelectedIndex[i]) {
        asyncSelectedIndex[i] = newIndex
        // If the first two column is changed, request the data for rest columns.
        if (i < 2) {
          // Mock async load.
          setTimeout(() => {
            if (i === 0) {
              const current = asyncData[newIndex]
              current.children = current.children || cityList[current.value]
              current.children[0].children = current.children[0].children || areaList[current.children[0].value]
              asyncSelectedIndex[1] = 0
              asyncSelectedIndex[2] = 0
            }

            if (i === 1) {
              const current = asyncData[asyncSelectedIndex[0]].children[newIndex]
              current.children = current.children || areaList[current.value]
              asyncSelectedIndex[2] = 0
            }
            this.asyncPicker.setData(asyncData, asyncSelectedIndex)
          }, 500)
        }
      }
    },
    selectHandle (selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
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
</style>
