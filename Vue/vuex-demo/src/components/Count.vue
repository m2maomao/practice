<template>
  <div>
    <h3>{{count}}</h3>
    <!-- <h3>{{count1}}</h3> -->
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
import { mapMutations, mapActions, mapGetters } from 'vuex'
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
    // 第三种方式
    // ...mapState(['count'])

    // ...mapGetters(['count'])

    // 第四种方式
    // count () {
    //   return this.$store.getters.count
    // }

    // ...mapState({
    //   // 第一种方式
    //   count: state => state.count
    //   // 第二种方式
    //   // count: 'count'
    // }),
    // 对获取到的全局state.count进行二次运算
    // count1 () {
    //   return this.count + 22
    // }

    ...mapGetters(['count'])
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
