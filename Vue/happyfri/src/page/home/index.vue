<template>
  <div class="home_container">
    <itemcontainer father-component="home"></itemcontainer>
  </div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'
export default {
  name: 'home',
  components: {
    itemcontainer
  }
}
</script>

<style lang="stylus">
  // .home_container
</style>
