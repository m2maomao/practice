<template>
  <div class="goodsinfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span>市场价：<del>￥{{ goodsinfo.market_price }}</del></span>
            <span>销售价：<em class="now_price">￥{{ goodsinfo.sell_price }}</em></span>
          </p>
          <p>
            购买数量:<numbox></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{ goodsinfo.goods_no }}</p>
          <p>库存情况:{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间:{{ goodsinfo.add_time | dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
// 导入轮播图组件
import swiper from '../subcomponents/swiper.vue'
// 导入数字选择框组件
import numbox from '../subcomponents/goodsinfo_numbox.vue'

export default {
  data() {
    return {
      id: this.$route.params.id, //将路由参数对象中的id挂载到data上，方便后期调用
      lunbotu: [], // 轮播图的数据
      goodsinfo:{} // 获取到的商品的信息
    }
  },
  components: {
    swiper,
    numbox
  },
  created() {
    this.getLunbotu()
    this.getGoodsInfo()
  },
  methods: {
    getLunbotu () {
      this.$http.get('getthumimages/0').then(res => {
        if (res.body.status === 0) {
          // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为轮播图组件中，只认识item.img，不认识 item.src
          res.body.message.map(item => {
            item.img = item.src
          })
          this.lunbotu = res.body.message
        }
      })
    },
    getGoodsInfo () {
      // 获取商品的信息
      this.$http.get('goods/getinfo/0').then(res => {
        if (res.body.status === 0) {
          console.log(res)
          this.goodsinfo = res.body.message[0]
        }
      })
    },
    goDesc(id) {
      // 点击使用编程时导航跳转到图文介绍页面
      this.$router.push({name:'goodsdesc',params:{id}})
    },
    goComment(id) {
      // 点击跳转到评论页面
      this.$router.push({name:'goodscomment',params:{id}})
    }
  }
}
</script>

<style lang="less" scoped>
.goodsinfo-container{
  background-color: #eee;
  overflow: hidden;
  .price{
    span{
      .now_price{
        color: red;
        font-size: 16px;
        font-style: normal;
        font-weight: bold;
      }
    }
  }
  .mui-card-footer{
    display: block;
    button{
      margin:15px 0;
    }
  }
}
</style>
