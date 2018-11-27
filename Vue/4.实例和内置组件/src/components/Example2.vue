<template>
  <div>
    <h2 id="maomao"></h2>
  </div>
</template>
<script>
import Vue from 'vue'

let Michael = Vue.extend({
  template: `
    <div>This is International ClassRoom By {{name}}</div>
  `,
  data () {
    return {
      name: '毛毛'
    }
  }
})

export default {
  name: 'Example2',
  data () {
    return {

    }
  },
  mounted () {
    // 必须在mounted中挂载，以免找不到DOM报错
    new Michael().$mount('#maomao')
  }
}
</script>

<style scoped>

</style>
