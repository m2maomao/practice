<template>
  <div class="pos">
      <el-row>
        <el-col :span="7" class="post-order" id="order-list">
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border style="width:100%">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column width="100" label="操作" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="div-btn">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger">删除</el-button>
                <el-button type="success">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="17">
          <div class="popular-goods">
            <div class="title">常用商品</div>
            <div class="popular-goods-list">
              <ul>
                <li v-for="(item,index) in popularGoods" :key="index">
                  <span>{{item.goodsName}}</span>
                  <span class="o-price">￥{{item.price}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tabs-pane label="汉堡">
                汉堡
              </el-tabs-pane>
              <el-tabs-pane label="小食">
                小食
              </el-tabs-pane>
              <el-tabs-pane label="饮料">
                饮料
              </el-tabs-pane>
              <el-tabs-pane label="套餐">
                套餐
              </el-tabs-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name: 'Pos',
  data () {
    return {
      tableData: [
        {
          goodsName: '可口可乐',
          price: 5,
          count: 1
        },
        {
          goodsName: '香辣鸡腿堡',
          price: 15,
          count: 1
        },
        {
          goodsName: '爱心薯条',
          price: 8,
          count: 1
        },
        {
          goodsName: '甜筒',
          price: 8,
          count: 1
        }
      ],
      popularGoods: [
        {
          goodsId: 1,
          goodsName: '香辣鸡腿堡',
          price: '18元'
        }, {
          goodsId: 1,
          goodsName: '田园鸡腿堡',
          price: '16元'
        }, {
          goodsId: 1,
          goodsName: '脆皮炸鸡腿',
          price: '14元'
        }, {
          goodsId: 1,
          goodsName: '大块鸡米花',
          price: '12元'
        }, {
          goodsId: 1,
          goodsName: '雪顶咖啡',
          price: '10元'
        }, {
          goodsId: 1,
          goodsName: '魔法鸡块',
          price: '8元'
        }
      ]
    }
  },
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
.div-btn{
  margin-top: 15px;
}
.title{
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
  text-align: left;
}
.popular-goods-list ul li{
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
}
.o-price{
  color: #5887ff;
}
.goods-type{
  clear: both;
}
</style>
