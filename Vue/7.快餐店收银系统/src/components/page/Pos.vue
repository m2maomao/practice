<template>
  <div class="pos">
      <el-row>
        <el-col :span="7" class="post-order" id="order-list">
          <el-tabs>
            <el-tab-pane label="点餐">
<<<<<<< HEAD
              <el-table :data="tableData" border width="100%">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column label="操作" width="100" fixed="right">
                  <template slot-scope="props">
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
            </el-tab-pane>
            <el-tab-pane label="外卖">
=======
              <el-table :data="tableData" border style="width:100%">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column width="100" label="操作" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <div class="totalDiv">
                <small>数量：</small>{{totalCount}}  <small>金额：</small>{{totalMoney}}元
              </div>
              <div class="div-btn">
                <el-button type="warning">挂单</el-button>
                <el-button type="danger" @click="delAllGoods">删除</el-button>
                <el-button type="success" @click="checkout">结账</el-button>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单">
              挂单
            </el-tab-pane>
            <el-tab-pane label="外卖">
              外卖
>>>>>>> 4d22c85191ac198aaf3f549ec48a99472782ea0a
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :span="17">
          <div class="popular-goods">
            <div class="title">常用商品</div>
            <div class="popular-goods-list">
              <ul>
                <li v-for="(item,index) in popularGoods" :key="index" @click="addOrderList(item)">
                  <span>{{item.goodsName}}</span>
                  <span class="o-price">￥{{item.price}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div>
                  <ul class="cookList">
                    <li v-for="(goods,index) in type0Goods" :key="index" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <div>
                  <ul class="cookList">
                    <li v-for="(goods,index) in type1Goods" :key="index" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <div>
                  <ul class="cookList">
                    <li v-for="(goods,index) in type2Goods" :key="index" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <div>
                  <ul class="cookList">
                    <li v-for="(goods,index) in type3Goods" :key="index" @click="addOrderList(goods)">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Pos',
  data () {
    return {
      tableData: [
<<<<<<< HEAD
        {
          goodsName: '可口可乐',
          price: 8,
          count: 1
        },
        {
          goodsName: '香辣鸡腿堡',
          price: 12,
          count: 1
        },
        {
          goodsName: '汉堡',
          price: 18,
          count: 1
        },
        {
          goodsName: '薯条',
          price: 5,
          count: 1
        }
      ]
    }
  },
=======
      ],
      popularGoods: [
      ],
      type0Goods: [
      ],
      type1Goods: [
      ],
      type2Goods: [
      ],
      type3Goods: [
      ],
      totalMoney: 0,
      totalCount: 0
    }
  },
  created () {
    // axios获取popularGoods
    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods')
      .then((res) => {
        console.log('res', res)
        this.popularGoods = res.data
      })
      .catch((error) => {
        console.log('error', error)
      })
    // axios获取typeGoods
    axios.get('https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods')
      .then((res) => {
        console.log('res', res)
        this.type0Goods = res.data[0]
        this.type1Goods = res.data[1]
        this.type2Goods = res.data[2]
        this.type3Goods = res.data[3]
      })
      .catch((error) => {
        console.log(error)
      })
  },
>>>>>>> 4d22c85191ac198aaf3f549ec48a99472782ea0a
  mounted () {
    let orderHeight = document.body.clientHeight
    console.log(orderHeight)
    document.getElementById('order-list').style.height = orderHeight + 'px'
  },
  methods: {
    addOrderList (goods) {
      this.totalMoney = 0
      this.totalCount = 0

      // 商品是否已存在于订单列表中
      let isHave = false
      for (let i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].goodsId === goods.goodsId) {
          isHave = true
        }
      }

      // 根据判断的值编写业务逻辑
      if (isHave) {
        // 改变商品数量
        let arr = this.tableData.filter(a => a.goodsId === goods.goodsId)
        arr[0].count++
      } else {
        let newGoods = {goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1}
        this.tableData.push(newGoods)
      }
      this.getAllMoney()
    },
    // 删除单个商品
    delSingleGoods (goods) {
      this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId)
      this.getAllMoney()
    },
    delAllGoods () {
      this.tableData = []
      this.totalCount = 0
      this.totalMoney = 0
    },
    // 模拟结账
    checkout () {
      if (this.totalCount !== 0) {
        this.tableData = []
        this.totalCount = 0
        this.totalMoney = 0
        this.$message({
          message: '结账成功，感谢你又为店里出了一份力!',
          type: 'success'
        })
      } else {
        this.$message.error('不能空结，老板了解你急切的心情!')
      }
    },
    // 汇总数量金额
    getAllMoney () {
      this.totalCount = 0
      this.totalMoney = 0
      if (this.tableData) {
        // 计算汇总金额和数量
        this.tableData.forEach((e) => {
          this.totalCount += e.count
          this.totalMoney = this.totalMoney + (e.price * e.count)
        })
      }
    }
  }
}
</script>

<style>
body {
  background:#f1f1f1
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
<<<<<<< HEAD
  margin-top: 10px;
=======
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
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
}
.cookList li span{
  display: block;
  float: left;
}
.foodImg{
  width: 40%;
}
.foodName{
  font-size: 16px;
  padding-left: 10px;
  color: brown;
}
.foodPrice{
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.totalDiv{
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #d3dce6;
>>>>>>> 4d22c85191ac198aaf3f549ec48a99472782ea0a
}
</style>
