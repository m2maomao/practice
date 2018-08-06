<template>
  <div id="app">

    <!-- Button -->
    <div class="cube-btn-group">
      <cube-button>Button</cube-button>
    </div>
    <div class="cube-btn-group">
      <cube-button type="submit" @click="handleBtnClick">Submit Button</cube-button>
    </div>
    <div class="cube-btn-group">
      <cube-button :active="true">Active Button</cube-button>
    </div>
    <div class="cube-btn-group">
      <cube-button :disabled="true">Disabled Button</cube-button>
    </div>
    <div class="cube-btn-group">
      <cube-button icon="cubeic-right">Button With Icon</cube-button>
    </div>
    <div class="cube-btn-group">
      <cube-button :light="true">Light Button</cube-button>
    </div>
    <div class="cube-btn-group">
      <cube-button :inline="true">Inline Button</cube-button>
    </div>
    <div class="cube-btn-group">
      <cube-button :outline="true">Outline Button</cube-button>
    </div>
    <div class="cube-btn-group">
      <cube-button :primary="true">Primary Button</cube-button>
    </div>

    <!-- Loading -->
    <cube-loading></cube-loading>
    <cube-loading :size=28></cube-loading>
    <cube-loading :size=40></cube-loading>

    <!-- Tip -->
    <div class="tip-eg">
      <cube-button
        :inline="true"
        :outline="true"
        :primary="true"
        @click="$refs.tip.show()"
      >
        Show up
      </cube-button>
      <cube-tip ref="tip" direction="bottom" style="top:-50px" >Tip</cube-tip>
    </div>
    <p class="tip-eg">
      <span>cube-ui</span>
      <cube-tip
          ref="tip2"
          :direction="direction"
          :style="tipStyle"
          @close="close"
          @click="clickHandler">
        <div>Awesome!</div>
      </cube-tip>
    </p>
    <cube-button @click="showTip('bottom')">top</cube-button>
    <cube-button @click="showTip('top')">bottom</cube-button>
    <cube-button @click="showTip('right')">left</cube-button>
    <cube-button @click="showTip('left')">right</cube-button>
  </div>

</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
      direction: '',
      tipStyle: ''
    }
  },
  methods: {
    showTip (direction) {
      this.direction = direction
      this.$refs.tip2.show()

      switch (direction) {
        case 'top':
          this.tipStyle = 'left:100px;top:30px'
          break
        case 'bottom':
          this.tipStyle = 'left:100px;top:-50px'
          break
        case 'left':
          this.tipStyle = 'left:200px;top:-10px'
          break
        case 'right':
          this.tipStyle = 'left:2px;top:-10px'
          break
      }
    },
    close () {
      console.log('click close button')
    },
    clickHandler () {
      console.log('click tip area')
    },
    handleBtnClick () {
      alert('点击submit按钮')
    }
  }
}
</script>

<style lang="stylus" scoped>
#app
  background #ebebeb
.cube-btn-group
  margin 10px 10px 0
.tip-eg
  position relative
  width 300px
  margin 70px auto
  text-align center
</style>
