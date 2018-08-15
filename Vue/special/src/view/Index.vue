<template>
<div id="app">
  <header>
    <span>第一周</span>
  </header>
  <section></section>
  <router-link to="/Item" tag="button"></router-link>
</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../style/common.styl'

section
  background url('../images/1-2.png') left top / 100% auto
button
  background url('../images/1-4.png') left top / 100% auto
</style>
