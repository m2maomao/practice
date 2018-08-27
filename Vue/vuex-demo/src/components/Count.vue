<template>
  <div>
    <h3>{{$store.state.count}} - {{count}}</h3>
    <p>
      <button @click="$store.commit('add',10)">+</button>
      <button @click="reduce">-</button>
    </p>
    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
  </div>

</template>

<script>
import store from '@/store/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  // 通过mapState的对象来赋值
  // computed: mapState({
  //   count: state => state.count
  // }),
  // 通过mapState的数组来赋值
  // computed: mapState(['count']),
  computed: {
    ...mapState(['count'])
    // ...mapGetters(['count'])
    // count () {
    //   return this.$store.getters.count
    // }
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  },
  store
}
</script>
<style>
button{
  border: 1px;
  padding: 20px;
}
</style>
