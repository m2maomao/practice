<template>
  <div id="app">
    <!-- 当前路由对应地址显示的内容 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
