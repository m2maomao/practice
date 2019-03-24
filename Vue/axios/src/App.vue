<template>
  <div id="app">
    <h3>axios案例:</h3>
    <ul>
      <li v-for="(item,index) in data" :key="index">
        {{item.author_name}}
        {{item.date}}
        {{item.email}}
        <a href="" @click.prevent="removeData(item.id)">删除</a>
      </li>
    </ul>
    <div>
      <input type="text" v-model="obj.id" placeholder="ID">
      <input type="text" v-model="obj.author_name" placeholder="Author Name">
      <input type="text" v-model="obj.email" placeholder="Email">
      <button @click="addData">添加</button>
      <button @click="updateData">修改</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      obj: {
        id: 0,
        author_name: null,
        email: null
      }
    }
  },
  created () {
    this.getData()
  },
  mounted () {},
  methods: {
    // 获取数据列表
    getData () {
      this.$axios.get('/user').then((res) => {
        console.log(res)
        this.data = res.data
      })
    },
    // 删除某条数据
    removeData (id) {
      this.$axios.post('/remove', {params: {id: id}}).then((res) => {
        console.log(res)
        this.data = res.data
      })
    },
    // 添加数据
    addData () {
      this.$axios.post('/listAdd', {params: {obj: this.obj}}).then((res) => {
        console.log(res)
        this.data = res.data
      })
    },
    // 修改数据
    updateData () {
      this.$axios.post('listUpdate', {params: {obj: this.obj}}).then(res => {
        this.data = res.data
      })
    }
  }
}
</script>
