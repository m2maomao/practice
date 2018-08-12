<template>
<div class="validator-item">
  <p>Async validate: </p>
  <cube-validator
    v-model="valid"
    :model="captcha"
    :rules="rules"
    :messages="messages"
    @validating="validatingHandler"
    @validated="validatedHandler">
    <cube-input v-model="captcha" placeholder="Please input captcha"></cube-input>
  </cube-validator>
</div>
</template>

<script>
export default {
  data () {
    return {
      valid: undefined,
      captcha: '',
      rules: {
        type: 'number',
        required: true,
        len: 6,
        captchaCheck: (val) => {
          return (resolve) => {
            setTimeout(() => {
              resolve(val === '123456')
            }, 1000)
          }
          /** or return promise:
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve(val === '123456')
            }, 1000)
          })
          **/
        }
      },
      messages: {
        captchaCheck: 'Please input "123456"'
      }
    }
  },
  methods: {
    validatingHandler () {
      console.log('validating')
    },
    validatedHandler () {
      console.log('validated')
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
