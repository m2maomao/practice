<template>
<!-- 问题：我们不知道什么时候能够拿到 max 值，但是，总归有一刻，会得到一个真正的 max 值 -->
<!-- 我们可以使用 watch 属性监听，来监听 父组件传递过来的 max 值，不管 watch 会被触发几次，但是，最后一次，肯定是一个合法的 max 数值 -->
  <div class="mui-numbox" data-numbox-min='1' style="height:25px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
  <!-- 分析：什么时候把数据传递给父组件 -->
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
  mounted() {
    // 初始化数字选择框组件
    mui('.mui-numbox').numbox()
  },
  methods: {
    // 每当文本框的数据被修改的时候，立即把最新的数据，通过事件调用，传递给父组件
    countChanged () {
      // 数量改变了
    }
  }
}
</script>

<style lang="less" scoped>

</style>
