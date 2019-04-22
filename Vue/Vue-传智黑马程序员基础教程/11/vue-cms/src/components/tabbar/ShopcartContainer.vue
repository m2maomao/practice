<template>
  <div class="shopcar-container">
    <div class="goods-list">

      <!-- 商品列表项区域 -->
      <div class="mui-card" v-for="item in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            
            <mt-switch ></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h2>{{item.title}}</h2>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox></numbox>
                <a href="#">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- 结算区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          结算区域的文案
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
export default {
  data(){
    return{
      goodslist: [] // 购物车中所有商品的数据
    }
  },
  components:{
    numbox
  },
  created() {
    this.getGoodsList()
  },
  methods:{
    getGoodsList() {
      // 1.获取到 store 中所有商品的Id，然后拼接出一个用逗号分隔的字符串
      var idArr = []
      this.$store.state.car.forEach(item => {
        idArr.push(item.id)
      })
      // 如果购物车中没有商品，则直接返回，不需要请求接口数据，否则会报错
      if (idArr.length <= 0) {
        return;
      }
      // 获取购物车商品列表
      // this.$http.get('getshopcarlist/'+idArr.join(',')).then(res => {
      this.$http.get('getshopcarlist/1').then(res => {
        if(res.body.status === 0) {
          this.goodslist = res.body.message
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.shopcar-container{
  background-color: #eee;
  overflow: hidden;
  .goods-list{
    .mui-card-content-inner{
      display: flex;
      align-items: center;
    }
    img{
      width:50px;
      height: 60px;
    }
    h2{
      font-size: 13px;
    }
    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price{
        color:red;
        font-weight: bold;
      }
    }
  }
}
</style>
