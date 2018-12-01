<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/">首页</router-link>
      <router-link to="/Hi">Hi</router-link>
      <router-link :to="{name:'Hi1',params:{username:'Michael Zhang'}}">Hi1</router-link>
      <router-link to="/Hi/Hi2">Hi2</router-link>
      <router-link to="/params/12323/michael's website is very good!">params</router-link>
      <router-link to="/goHome">goHome</router-link>
      <router-link to="/goParams/111111/2222222">goParams</router-link>
      <router-link to="/Hi/jspang">jspang</router-link>
    </p>
    <p>{{$route.name}}</p>
    <p>
      <button @click="goBack">后退</button>
      <button @click="goAhead">前进</button>
      <button @click="goHome">返回首页</button>
    </p>
    <router-view name="left" style="width:50%; background:pink; height:300px; float:left"></router-view>
    <router-view name="right" style="width:50%; background:darkgreen; height:300px; float:left;color:white"></router-view>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack () {
      this.$router.back(-1)
    },
    goAhead () {
      this.$router.go(1)
    },
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity:0;
  transition: opacity .5s ;
}
</style>
