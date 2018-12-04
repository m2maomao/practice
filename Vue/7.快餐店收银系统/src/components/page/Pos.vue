<template>
  <div class="pos">
      <el-row>
        <el-col :span="7" class="post-order" id="order-list">
          我是订单栏
        </el-col>
        <el-col :span="7">
          我是产品栏
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Pos',
  mounted () {
    let orderHeight = document.body.clientHeight
    console.log(orderHeight)
    document.getElementById('order-list').style.height = orderHeight + 'px'
  }
}
</script>

<style>
body {
  background:lavender
}
h2{
  font-weight: normal;
  text-align: center;
  color: dodgerblue;
}
.post-order{
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
</style>
