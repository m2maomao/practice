<template>
  <cube-validator :model="text" :rules="rules" v-model="valid">
    <cube-input v-model="text"></cube-input>
  </cube-validator>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      valid: undefined,
      rules: {
        required: true,
        type: 'email',
        min: 6
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
// add warning style to input
.cube-validator_warn
  input
    border: solid 1px yellow
</style>
