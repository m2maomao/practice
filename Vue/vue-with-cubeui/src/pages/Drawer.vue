<template>
  <div>
    <cube-button @click="showDrawer">Show Drawer</cube-button>
    <cube-drawer
      ref="drawer"
      title="请选择"
      :data="data"
      :selected-index="selectedIndex"
      @change="changeHandle"
      @select="selectHandle"
      @cancel="cancelHandle"
    ></cube-drawer>
  </div>
</template>

<script>
import {provinceList, cityList, areaList} from 'static/data/area2'
export default {
  data () {
    return {
      selectedIndex: [],
      data: [
        provinceList,
        [],
        []
      ]
    }
  },
  methods: {
    showDrawer () {
      this.$refs.drawer.show()
    },
    changeHandle (index, item, selectedVal, selectedIndex, selectedText) {
      // fake request
      setTimeout(() => {
        let data
        if (index === 0) {
          data = cityList[item.value]
        } else {
          data = areaList[item.value]
        }
        this.$refs.drawer.refill(index + 1, data)
      }, 200)
    },
    selectHandle (selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `
          Selected Item:<br />
          - value:${selectedVal.join(', ')}<br />
          - index:${selectedIndex.join(', ')}<br />
          - text:${selectedText.join('-')}
        `,
        icon: 'cubeic-alert'
      }).show()
    },
    cancelHandle () {
      console.log('cancel')
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
