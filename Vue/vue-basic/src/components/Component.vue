<template>
    <div>
        <jspang here="China" born-from="Chongqing"></jspang>
        <jspang here="USA" born-from="Los Angeles"></jspang>
        <jspang here="Tokyo" v-bind:born-from="bornFromLocation"></jspang>
        <!-- 'v-bind:'可以简写成':' -->
    </div>
</template>

<script>

export default {
  name: '',
  data () {
    return {
      bornFromLocation: '日本'
    }
  },
  components: {
    jspang: {
      template: `<div style="color:red">Panda from {{here}},now in {{bornFrom}}</div>`,
      // 如果属性有中划线，那么用小驼峰形式代替
      props: ['here', 'bornFrom']
    }
  }
}
</script>

<style>

</style>
