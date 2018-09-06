<template>
  <div>
    <h1>v-for实例</h1>
    <ul>
      <li v-for="(a,index) in itemsA" :key="index">{{a}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for="(a,index) in students" :key="index">{{a.name}}--{{a.age}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'vfor',
  data () {
    return {
      items: [12, 1, 56, 13, 15],
      students: [
        { name: '毛毛', age: 31 },
        { name: 'Michael', age: 32 },
        { name: '小熊', age: 33 },
        { name: '书法家', age: 34 }
      ]
    }
  },
  computed: {
    itemsA () {
      let a = this.items.concat()
      return a.sort()
    }

    // itemA: function () {
    //   return this.items.sort()
    // }
  }
}
</script>

<style>
</style>
