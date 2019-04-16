<template>
  <div>
    {{ count }}
  </div>
</template>

<script>
// 引入store
import store from '../vuex/store'
import { mapState } from 'vuex'

export default {
  name: 'Practice',
  data () {
    return {}
  },
  store,
  computed: {
    ...mapState({
      count: state => state.count
    })
  }
}
</script>
