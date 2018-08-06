<template>
  <cube-tab-bar
    v-model="selectedLabelDefault"
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler"
  ></cube-tab-bar>
</template>

<script>
export default{
  data () {
    return {
      selectedLabelDefault: 'Vip',
      tabs: [{
        label: 'Home',
        icon: 'cubeic-home'
      }, {
        label: 'Like',
        icon: 'cubeic-like'
      }, {
        label: 'Vip',
        icon: 'cubeic-vip'
      }, {
        label: 'Me',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      console.log(label)
    },
    changeHandler (label) {

    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
