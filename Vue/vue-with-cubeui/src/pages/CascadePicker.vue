
<template>
<div>
  <cube-button @click="showCascadePicker">Cascade Picker</cube-button>
  <cube-button @click="showAddressPicker">Address Picker</cube-button>
  <cube-button @click="showSetDataPicker">SetData Picker</cube-button>
</div>
</template>

<script>
import { provinceList, cityList, areaList } from 'static/data/area'
const addressData = provinceList

addressData.forEach(province => {
  province.children = cityList[province.value]
  province.children.forEach(city => {
    city.children = areaList[city.value]
  })
})

const cascadeData = [
  {
    value: 'Fruit',
    text: 'Fruit',
    children: [
      {
        value: 'Apple',
        text: 'Apple',
        children: [{ value: 1, text: 'One' }, { value: 2, text: 'Two' }]
      },
      {
        value: 'Banana',
        text: 'Banana',
        children: [
          { value: 1, text: 'One' },
          { value: 2, text: 'Two' },
          { value: 3, text: 'Three' },
          { value: 4, text: 'Four' },
          { value: 5, text: 'Five' },
          { value: 6, text: 'Six' }
        ]
      }
    ]
  },
  {
    value: 'Drink',
    text: 'Drink',
    children: [
      {
        value: 'Coffee',
        text: 'Coffee',
        children: [
          { value: 1, text: 'One' },
          { value: 2, text: 'Two' },
          { value: 3, text: 'Three' }
        ]
      },
      {
        value: 'Cola',
        text: 'Cola',
        children: [
          { value: 1, text: 'One Cup' }
        ]
      }
    ]
  }
]
export default {
  mounted () {
    this.cascadePicker = this.$createCascadePicker({
      title: 'Cascade Picker',
      data: cascadeData,
      selectedIndex: [0, 1, 0],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
    // 级联选择器与普通选择器不同，需要传一个树形结构，一维数组
    this.addressPicker = this.$createCascadePicker({
      title: 'Address Picker',
      data: addressData,
      selectIndex: [0, 0, 0],
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
    this.setDataPicker = this.$createCascadePicker({
      title: 'Set Data',
      onSelect: this.selectHandle,
      onCancel: this.cancelHandle
    })
  },
  methods: {
    showCascadePicker () {
      this.cascadePicker.show()
    },
    showAddressPicker () {
      this.addressPicker.show()
    },
    showSetDataPicker () {
      this.setDataPicker.setData(cascadeData)
      this.setDataPicker.show()
      setTimeout(() => {
        this.setDataPicker.setData(addressData, [1, 1, 0])
      }, 5000)
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

button
  border 10px solid #ffffff
</style>
