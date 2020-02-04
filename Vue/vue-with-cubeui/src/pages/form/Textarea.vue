<template>
  <div>
    <cube-textarea
      v-model="value"
      :placeholder="placeholder"
      :maxlength="maxlength"
      :readonly="readonly"
      :disabled="disabled"
      :autofous="autofous"
    ></cube-textarea>
    <div>{{value}}</div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      value: '',
      placeholder: '请输入文字',
      maxlength: 20,
      readonly: false,
      disabled: false,
      autofocus: true

    }
  }
}
</script>

<style lang="stylus" scoped>
div
  background pink
</style>
