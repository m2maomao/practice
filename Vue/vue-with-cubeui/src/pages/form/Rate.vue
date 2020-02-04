<template>
  <div>
    <div class="wrap">
      <cube-rate
        v-model="value"
        :disabled="disabled"
        :max="max"
        :justify="justify"
      ></cube-rate>
    </div>
    <div class="wrap">
      <cube-rate v-model="value">
        <cube-rate-item v-for="n in max" :key="n" :value="value" :index="n">
          <div class="rate-item"></div>
        </cube-rate-item>
      </cube-rate>
    </div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      value: 3,
      disabled: true,
      max: 4,
      justify: true
    }
  }
}
</script>

<style lang="stylus" scoped>
div.wrap
  margin 20px
  border 1px solid #ccc
.rate-item
  width 100%
  height 100%
  background-size 100%
  background-color grey
.cube-rate-item_active
  .rate-item
    background-color orange
</style>
