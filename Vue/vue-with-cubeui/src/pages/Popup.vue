<template>
  <div>
    <!-- 基本用法 -->
    <!-- <cube-popup type="my-popup" ref="myPopup">
      My Popup Content 1
    </cube-popup>
    <cube-button @click="showPopup('myPopup')">
      Show Popup
    </cube-button> -->
    <!-- 不要背景层 -->
    <!-- <cube-popup type="my-popup" :mask="false" ref="myPopup2">
      My Popup Content 2
    </cube-popup>
    <cube-button @click="showPopup('myPopup2')">
      Show Popup - no mask
    </cube-button> -->
    <!-- 显示内容HTML -->
    <!-- <cube-popup
      type="my-popup"
      :mask="false"
      content="<i>My Popup Content 3</i>"
      ref="myPopup3"
    />
    <cube-button @click="showPopup('myPopup3')">
      Show Popup - with content
    </cube-button> -->
    <!-- 控制位置&蒙层点击隐藏 -->
    <!-- <cube-popup type="my-popup" :position="position" :mask-closable="true" ref="myPopup4">
      My Popup Content 4
    </cube-popup>
    <cube-button @click="showPopup">top/right/bottom/left/center</cube-button> -->

    <!-- 上层封装 -->
    <cube-popup type="extend-popup" ref="popup">
      <div class="cube-extend-popup-content" @click="hide">
        <slot>{{content}}</slot>
      </div>
    </cube-popup>

    <cube-extend-popup content="click here hide" ref="extendPopup"></cube-extend-popup>
    <cube-button @click="$refs.extendPopup.show()">
      Show Extend Popup
    </cube-button>
  </div>
</template>

<script>
// const positions = ['top', 'right', 'bottom', 'left', 'center']
// let cur = 0
const COMPONENT_NAME = 'cube-extend-popup'
export default {
  name: COMPONENT_NAME,
  // data () {
  //   return {
  //     position: ''
  //   }
  // },
  props: {
    content: {
      type: String
    }
  },
  methods: {
    // showPopup (refId) {
    //   const component = this.$refs[refId]
    //   component.show()
    //   setTimeout(() => {
    //     component.hide()
    //   }, 1000)
    // },
    // showPopup () {
    //   this.position = positions[cur++]
    //   if (cur === positions.length) {
    //     cur = 0
    //   }
    //   const component = this.$refs.myPopup4
    //   component.show()
    //   setTimeout(() => {
    //     component.hide()
    //   }, 2000)
    // }
    show () {
      this.$refs.popup.show()
    },
    hide () {
      this.$refs.popup.hide()
      this.$emit('hide')
    }
  }
}
</script>

<style lang="stylus">
.cube-popup-content
  padding 20px
  color #ffffff
  background rgba(0,0,0,0.8)
.cube-extend-popup
    .cube-extend-popup-content
      padding: 20px
      color: #fff
      background-color: rgba(0, 0, 0, .8)
</style>
