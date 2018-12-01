<template>
  <div>
    <h2>{{msg}}</h2>
    <p>newsId:{{$route.params.newsId}}</p>
    <p>newsTitle:{{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'MSG Define by Michael'
    }
  },
  // beforeEnter: (to, from, next) => {
  //   console.log('to:', to, 'from:', from)
  //   next(true) // 开关，是否跳转
  // }
  beforeRouteEnter (to, from, next) {
    console.log('准备进入params路由模板')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('准备离开params路由模板')
    next()
  }
}
</script>
