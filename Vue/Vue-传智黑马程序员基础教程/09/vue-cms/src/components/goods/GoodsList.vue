<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" :key="item.id">
      <img :src="item.img_url" alt="">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist:[]
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      this.$http.get('getgoods?pageindex=1').then(res => {
        console.log(res)
        if(res.body.status === 0) {
          this.goodslist = this.goodslist.concat(res.body.message)
          console.log(this.goodslist)
        }
      })
    }
  }
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
