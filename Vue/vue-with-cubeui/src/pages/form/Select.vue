<template>
  <div>
    <cube-select
      v-model="value"
      :title="title"
      :options="options"
      :placeholder="placeholder"
      :auto-pop="autoPop"
      :disabled="disabled"
      @change="change"
    ></cube-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '选择年份',
      options: [2013, 2014, 2015, 2016, 2017, 2018],
      value: '',
      placeholder: '我是placeholder的内容',
      autoPop: true,
      disabled: false
    }
  },
  methods: {
    change (value, index, text) {
      console.log('change', value, index, text)
    }
  }
}
</script>

<style lang="stylus" scoped>
div
  margin 20px
</style>
