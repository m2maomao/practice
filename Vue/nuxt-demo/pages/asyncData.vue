<template>
  <div v-cloak>
    <h1>姓名:{{info.name}}</h1>
    <h2>年龄:{{info.age}}</h2>
    <h2>兴趣:{{info.interest}}</h2>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        name:'hello, world!',
        info:null
      }
    },
    // asyncData(){
    //   return axios.get('https://api.myjson.com/bins/p82gq')
    //   .then((res) => {
    //     console.log(res)
    //     return {info:res.data}
    //   })
    // },
    async asyncData() {
      let {data} = await axios.get('https://api.myjson.com/bins/p82gq')
      return {info:data}
    }
  }
</script>

<style scoped>
h1,h2{
  text-indent:20px;
  line-height: 1.5em;
  font-size: 20px;
}
[v-cloak]{display:none}
</style>
