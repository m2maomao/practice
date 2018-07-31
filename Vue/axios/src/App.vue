<template>
  <div id="app">
    axios案例:<br /><br />
    <button type="button" @click="doRequest">发送请求</button>
    <br /><br />
    <ul>
      <li>{{list}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
      return{
        list:undefined
      }
    },
    methods: {
      doRequest(){
        var url = 'https://www.easy-mock.com/mock/5b5889ab79a0b71429dea33a/test/example';
        this.$axios.get(url).then((response)=>{
          console.log(response.data)
          this.list=response.data.address.city
          console.log(this.list)
        }).catch(error=>{
          console.log('发送失败')
          console.log(error)
        })
      }
    }
  }
</script>
