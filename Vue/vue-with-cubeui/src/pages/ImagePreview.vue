<template>
  <div>
    <cube-button @click="showImagePreview">Show ImagePreview</cube-button>
    <cube-button @click="showCustomImagePreview">Show Custom ImagePreview</cube-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      customIndex: 1,
      imgs: [
        '//img.hb.aicdn.com/e391394e6e2bf17a30df5f68af090b409138850423277-gm9Xfm_fw658',
        '//img.hb.aicdn.com/c8b28fc01b7104f326f6f6e58593242fbe5afd5918360-X6qd8Y_/fw/480',
        '//img.hb.aicdn.com/0003338bae3945f6bcecaf01a746ae056d2ce1351a8f9-w235tx_/fw/480',
        '//img.hb.aicdn.com/464776891c653aa5211b2111b2856b53e85867055d61a-cTK23T_/fw/480'
      ]
    }
  },
  methods: {
    showImagePreview () {
      this.$createImagePreview({
        imgs: this.imgs
      }).show()
    },
    showCustomImagePreview () {
      this.$createImagePreview({
        imgs: this.imgs,
        initialIndex: this.customIndex,
        loop: false,
        speed: 500,
        onChange: (i) => {
          this.customIndex = i
        },
        onHide: () => {
          console.log('hide')
        }
      }, (h) => {
        return h('div', {
          class: {
            'image-preview-custom-header': true
          },
          slot: 'header'
        }, this.customIndex + 1)
      }).show()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
