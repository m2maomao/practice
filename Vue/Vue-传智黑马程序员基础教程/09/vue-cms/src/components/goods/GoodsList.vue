<template>
  <div class="goods-list">
    <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag="div">
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
    </router-link> -->


    <!-- 在网页中有两种跳转方式： -->
    <!-- 方式1：使用 a 标签的形式，叫做标签跳转 -->
    <!-- 方式2：使用window.location.href的形式，叫做编程式导航 -->
    <div class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/' + item.id" tag="div" @click="goDetail(item.id)">
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
    },
    goDetail (id) {
      // 使用JS的形式进行路由导航
      // 注意：一定要区分 this.$route 和 this.$router 这两个对象
      // 其中：this.$route 是路由【参数对象】，所有路由中的参数，params query都属于它
      // 其中：this.$router 是一个路由【导航对象】，用它可以方便的使用 JS 代码实现路由的前进，后退，跳转到新的 URL 地址
      // 1.最简单的
      // this.$router.push('/home/goodsinfo/' + id)
      // 2.传递对象
      // this.$router.push({path: '/home/goodsinfo/' + id})
      // 3.传递一个命名的路由
      console.log(this)
      this.$router.push({name:'goodsinfo', params:{id:id}})
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
