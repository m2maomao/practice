<template>
  <div>
    <cube-switch
      v-model="value"
      :disabled="disabled"
    >Switch</cube-switch>
    <div>{{value}}</div>
  </div>
</template>

<script>
export default{
  data () {
    return {
      value: true,
      disabled: false
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
