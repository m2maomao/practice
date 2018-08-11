<template>
  <div>
    <cube-input v-model="text0" placeholder="Required" />
    <cube-validator ref="validator0" v-model="result[0]" :model="text0" :rules="rules0" />
    <cube-input v-model="text1" placeholder="E-mail" />
    <cube-validator ref="validator1" v-model="result[1]" :model="text1" :rules="rules1" />
    <cube-input v-model="text2" placeholder="TEL" />
    <cube-validator ref="validator2" v-model="result[2]" :model="text2" :rules="rules2" />
    <cube-button @click="submit">Submit</cube-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      result: [undefined, undefined, undefined],
      text0: '',
      rules0: {
        required: true
      },
      text1: '',
      rules1: {
        type: 'email'
      },
      text2: '',
      rules2: {
        type: 'tel'
      },
      trigger: false
    }
  },
  methods: {
    submit () {
      const p1 = this.$refs.validator0.validate()
      const p2 = this.$refs.validator1.validate()
      const p3 = this.$refs.validator2.validate()
      Promise.all([p1, p2, p3]).then(() => {
        if (this.result.every(item => item)) {
          this.$createToast({
            type: 'correct',
            txt: 'Submited',
            time: 1000
          }).show()
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
