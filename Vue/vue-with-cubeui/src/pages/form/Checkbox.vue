<template>
  <div>
    <cube-checkbox v-model="checked">Checkbox</cube-checkbox>
    <cube-checkbox v-model="checked" position="right" shape="square" :hollow-style="true">Styled Checkbox</cube-checkbox>
    <cube-checkbox v-model="checked" :option="option" ref="ref1"></cube-checkbox>
    <div>{{getChecked}}</div>
  </div>
</template>

<script>
export default{
  name: 'Checkbox',
  data () {
    return {
      checked: false,
      option: {
        label: 'Option Checkbox',
        value: 'optionValue',
        disabled: false
      }
    }
  },
  computed: {
    getChecked () {
      if (this.checked) {
        return this.option.value
      } else {
        return this.checked
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
