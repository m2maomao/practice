<template>
  <div class="goods-list">
    <div class="goods-item">
      <img src="https://hbimg.huabanimg.com/b61784622eb6af1191efaa94b0a420595c4983a349307f-IiLH89_fw236" alt="">
      <h1 class="title">盖伦超级牛逼 就是我了</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://hbimg.huabanimg.com/b61784622eb6af1191efaa94b0a420595c4983a349307f-IiLH89_fw236" alt="">
      <h1 class="title">盖伦超级牛逼 就是我了</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://hbimg.huabanimg.com/b61784622eb6af1191efaa94b0a420595c4983a349307f-IiLH89_fw236" alt="">
      <h1 class="title">盖伦超级牛逼 就是我了</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 4px 8px;
  justify-content: space-between;
  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 200px;
    img{
      width:100%;
    }
    .title{
      font-size: 14px;
    }
    .info{
      background-color: #ebebeb;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color:red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
