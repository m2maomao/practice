<template>
  <div>
    <cube-upload
      action="//jsonplaceholder.typicode.com/photos/"
      :simultaneous-uploads="1"
      @files-added="filesAdded"
    ></cube-upload>
  </div>
</template>

<script>
export default{
  methods: {
    filesAdded (files) {
      let hasIgnore = false
      const maxSize = 1 * 1024 * 1024
      for (let k in files) {
        const file = files[k]
        if (file.size > maxSize) {
          file.ignore = true
          hasIgnore = true
        }
      }
      hasIgnore && this.$createTost({
        type: 'warn',
        time: 1000,
        txt: 'You selected > 1M files'
      }).show()
    }
  }
}
</script>

<style lang="stylus" scoped>
div
  margin 20px
</style>
