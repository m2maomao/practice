<template>
  <div>
    <div id="a"></div>
  </div>
</template>

<script>
import Vue from 'vue'

var authorURL = Vue.extend({
  template: "<p><a :href='authorUrl'>{{authorName}}</a></p>",
  data () {
    return {
      authorName: '百度',
      authorUrl: 'http://www.baidu.com'
    }
  }
})

new authorURL().$mount('#a')
</script>
<style>
</style>
