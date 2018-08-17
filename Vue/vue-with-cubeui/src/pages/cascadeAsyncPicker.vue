<template>
  <div>
    cascadeAysncPicker
  </div>
</template>

<script>
import {provinceList, cityList, areaList} from 'static/data/area'

const asyncData = provinceList
// const asyncSelectedIndex = [0, 0, 0]

// asyncData[0].children = cityList[asyncData[0].value]
// asyncData[0].children[0].children = areaList[asyncData[0].children[0].value]

console.log(asyncData)
export default {
  name: 'cascadeAysncPicker'
}
</script>

<style lang="stylus" scoped>

</style>
