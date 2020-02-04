<template>
  <div>
    <cube-extend-popup content="click here hide" ref="extendPopup"></cube-extend-popup>
    <cube-button @click="$refs.extendPopup.show()">
      Show Extend Popup
    </cube-button>
  </div>
</template>

<script>
import cubeExtendPopup from '@/components/CubeExtendPopup'
export default {
  components: {
    cubeExtendPopup
  }
}
</script>

<style lang="stylus" scoped>

</style>
