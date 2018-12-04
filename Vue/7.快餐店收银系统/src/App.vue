<template>
  <div id="app">
    <left-nav />
    <div class="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import LeftNav from '@/components/common/LeftNav'
export default {
  name: 'App',
  components: {
    LeftNav
  }
}
</script>

<style>
.main{
  width: 95%;
  float: left;
}
</style>
