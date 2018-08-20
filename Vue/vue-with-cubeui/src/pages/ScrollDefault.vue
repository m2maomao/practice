<template>
  <div class="scroll-list-wrap">
    <cube-scroll ref="scroll" :data="items" :options="options"></cube-scroll>
  </div>
</template>

<script>
const _data = [
  '😀 😁 😂 🤣 😃 😄 ',
  '🙂 🤗 🤩 🤔 🤨 😐 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '😔 😕 🙃 🤑 😲 ☹️ ',
  '🐣 🐣 🐣 🐣 🐣 🐣 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🐥 🐥 🐥 🐥 🐥 🐥 ',
  '🤓 🤓 🤓 🤓 🤓 🤓 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🦔 🦔 🦔 🦔 🦔 🦔 ',
  '🙈 🙈 🙈 🙈 🙈 🙈 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🚖 🚖 🚖 🚖 🚖 🚖 ',
  '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
]
export default {
  data () {
    return {
      scrollbar: true,
      scrollbarFade: true,
      items: _data,
      startY: 0
    }
  },
  computed: {
    options () {
      return {
        scrollbar: this.scrollbarObj,
        startY: this.startY
      }
    },
    scrollbarObj: function () {
      return this.scrollbar ? { fade: this.scrollbarFade } : false
    }
  }
}
</script>

<style lang="stylus" scoped>
.scroll-list-wrap
  height 350px
</style>
