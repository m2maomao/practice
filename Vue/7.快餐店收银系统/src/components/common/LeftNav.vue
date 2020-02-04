<template>
  <div class="nav">
    <ul>
      <li>
        <i class="icon iconfont icon-goumai"></i>
        <div>收银</div>
      </li>
      <li>
        <i class="icon iconfont icon-hanbao"></i>
        <div>商品</div>
      </li>
      <li>
        <i class="icon iconfont icon-dianpu"></i>
        <div>店铺</div>
      </li>
      <li>
        <i class="icon iconfont icon-huiyuanqia"></i>
        <div>会员</div>
      </li>
      <li>
        <i class="icon iconfont icon-gongnengjianyi"></i>
        <div>设置</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LeftNav'
}
</script>

<style>
.nav{
  width: 5%;
  float: left;
  height: 100%;
  background: deepskyblue;
}
.nav ul{
  margin: 0;
  padding: 0;
}
.nav ul li{
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  font-size: 12px;
  color: #ffffff;
  border-bottom: 1px solid lightblue;
  padding: 10px 0;
  font-weight: bold;
}
.nav ul li .icon{
  font-size: 30px;
  font-weight: normal;
}
</style>
