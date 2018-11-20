<template>
  <div>
    <input ref="input" type="text" :value="value" @input="checkInput($event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'hello',
  props: ['value'],
  methods: {
    checkInput (value) {
      var hello = 'hello'
      if (!hello.includes(value)) {
        // this.$emit('input', hello) // 给父传值
        this.$refs.input.value = hello // 给当前组件传值
      } else {
        this.$emit('input', value)
      }
    }
  }
}
</script>
