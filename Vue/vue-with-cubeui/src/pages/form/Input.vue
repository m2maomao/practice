<template>
  <div class="wrap">
    <cube-input
      v-model="value"
      :placeholder="placeholder"
      :type="type"
      :maxlength = "maxlength"
      :readonly="readonly"
      :disabled="disabled"
      :autofocus="autofocus"
      :autocomplete="autocomplete"
      :clearable="clearable"
      :eye="eye"
    ></cube-input>
  </div>
</template>

<script>
export default{
  data () {
    return {
      value: '',
      placeholder: '请输入内容',
      type: 'password',
      readonly: false,
      maxlength: 100,
      disabled: false,
      autofocus: true,
      autocomplete: true,
      clearable: true,
      eye: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrap
  margin 20px
</style>
