<template>
  <div>
    <cube-upload
      ref="upload"
      :action="action"
      :simultaneous-uploads="1"
      :process-file="processFile"
      @file-submitted="fileSubmitted"
    ></cube-upload>
  </div>
</template>

<script>
// import compress from '../../modules/image'
export default {
  data () {
    return {
      action: {
        target: '//jsonplaceholder.typicoe.more/photos/',
        props: 'base64Value'
      }
    }
  },
  methods: {
    processFile (file, next) {
      // compress(file, {
      //   compress: {
      //     width: 1600,
      //     height: 1600,
      //     quality: 0.5
      //   }
      // }, next)
    },
    fileSubmitted (file) {
      file.base64Value = file.file.base64
    }

  }
}
</script>

<style lang="stylus" scoped>

</style>
