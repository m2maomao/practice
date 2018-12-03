<template>
  <div v-cloak>
    <h1>姓名:{{info.name}}</h1>
    <h2>年龄:{{info.age}}</h2>
    <h2>兴趣:{{info.interest}}</h2>
    <img src="~static/transformer.jpg" />
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

<style>
body,html{
  height: 100%;
  margin: 0;
  padding: 0;
}
h1,h2{
  text-indent:20px;
  line-height: 1.5em;
  font-size: 20px;
}
img{
  width: 100%;
}
body{
  background:lightgoldenrodyellow url('~static/transformer.jpg') center bottom / 100% auto no-repeat;
  /* background-image: url('~static/transformer.jpg') */
}
</style>
