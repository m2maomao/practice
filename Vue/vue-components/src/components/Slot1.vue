<template>
  <div>
    <h2>Parent Title</h2>
    <ss></ss>
  </div>
</template>

<script>
export default {
  name: 'Slot1',
  data () {
    return {

    }
  },
  mounted () {
    console.log('computed hook')
  },
  components: {
    ss: {
      template: `
        <div>
          <h2>Child Title</h2>
          <slot>暂无内容</slot>
        </div>
      `
    }
  }
}
</script>
