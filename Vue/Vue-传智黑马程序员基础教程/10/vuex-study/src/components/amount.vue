<template>
  <div>
    <!-- <h3>{{'当前的数量为:' + $store.state.count }}</h3> -->
    <h3>{{ $store.getters.optCount }}</h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // count: 0
    }
  }
}
</script>

<style>

</style>
