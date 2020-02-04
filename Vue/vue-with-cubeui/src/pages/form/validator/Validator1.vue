<template>
<div>
  <cube-input v-model="text" placeholder="E-mail"></cube-input>
  <cube-validator v-model="valid" :model="text" :rules="rules" :messages="messages"></cube-validator>
</div>
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
        pattern: /didi.com$/,
        custom: (val) => {
          return val.length >= 12
        }
      },
      messages: {
        pattern: 'The E-mail suffix need to be didi.com.',
        custom: 'The E-mail need contain at least 12 characters.'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
