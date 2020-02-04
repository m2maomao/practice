<template>
  <div>
    <h3>Example 3</h3>
    {{num}}
    <p>
      <button @click="add">add</button>
    </p>
    <p>
      <button onclick="reduce">reduce</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Example3',
  data () {
    return {
      num: 1
    }
  },
  methods: {
    add () {
      this.num += 1
    },
    reduce () {
      alert(1222)
    }
  }
}
</script>

<style scoped>

</style>
