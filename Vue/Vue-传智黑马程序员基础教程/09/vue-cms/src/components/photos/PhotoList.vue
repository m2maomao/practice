<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a 
            :class="['mui-control-item', item.id === 0 ? 'mui-active' : '']" 
            :href="item.id"
            data-wid="#"
            v-for="(item, index) in cates"
            :key="index"
            @click="getPhotoListByCateId(item.id)">
            {{item.title}}
          </a>
        </div>
      </div>

    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="(item, index) in list" :key="index" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-body">{{item.zhaiyao}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
// 1.导入 mui 的js文件
import mui from '../../lib/mui/js/mui.min.js'

export default {
  data () {
    return {
      cates: [], //所有分类的列表
      list: [] //图片列表的数组
    }
  },
  created() {
    this.getAllCategory()
    // 默认进入页面，就主动请求所有图片列表的数据
    this.getPhotoListByCateId(0)
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      // 获取所有的图片分类
      this.$http.get('getimgcategory').then(res => {
        if (res.body.status === 0) {
          // 手动拼接出一个最完整的分类列表
          res.body.message.unshift({title:'全部', id: 0})
          this.cates = res.body.message
        }
      })
    },
    getPhotoListByCateId(cateId) {
      this.$http.get('getimages/' + cateId).then(res => {
        if (res.body.status === 0) {
          console.log(res)
          this.list = res.body.message
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.photo-list{
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  list-style-type: none;
  li{
    margin-bottom: 10px;
    background-color: #ccc;
    text-align: center;
    box-shadow: 0 0 6px #999;
    position: relative;
    img{
      width: 100%;
      vertical-align: top;
    }
    img[lazy=loading] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info{
      position: absolute;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, .1);
      color:white;
      text-align: left;
      max-height: 84px;
      padding: 10px;
      .info-title{
        font-size:14px;
      }
      .info-body{
        font-size: 13px;
      }
    }
  }
}

</style>


