<template>
  <div>
    <h1>这是App组件</h1>
    <!-- 为什么这里叫做 mt-button 的button直接就能使用？ -->
    <mt-button type="danger" icon="more" @click="show">default</mt-button>
    <mt-button type="danger" size="large" plain>default</mt-button>
    <mt-button type="danger" size="small" disabled>default</mt-button>

    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">GoodsList</router-link>
    <router-view></router-view>
    <span class="glyphicon glyphicon-headphones"></span>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
// 按需导入 Toast 组件
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      toastInstrance: null
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() { // 模拟获取列表的一个Ajax方法
      // 在获取数据之前，立即弹出Toast提示用户，正在加载数据
      this.show()
      setTimeout(() => {
        // 当3秒过后，数据获取回来后，要把Toast移除
        this.toastInstrance.close()
      }, 3000);
    },
    show() {
      this.toastInstrance = Toast({
        message:'提示信息哦',
        position:'bottom',
        duration:-1,
        iconClass:'glyphicon glyphicon-headphones', //设置图标的类
        className:'mytoast' // 自定义Toast的样式，需要自己提供一个类名
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>
