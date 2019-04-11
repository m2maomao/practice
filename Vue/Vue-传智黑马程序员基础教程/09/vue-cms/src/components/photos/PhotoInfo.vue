<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <div class="photo-wrap">
      <vue-preview :slides="list" class="img"></vue-preview>
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
// 1.导入评论子组件
import comment from '../subcomponents/comment.vue'
export default {
  data () {
    return {
      id:this.$route.params.id,
      photoinfo:{}, //图片详情
      list: []
    }
  },
  components:{
    'cmt-box': comment
  },
  created() {
    this.getPhotoInfo()
    this.getThumbs()
  },
  methods: {
    getPhotoInfo() {
      // 获取图片的详情
      this.$http.get('getimageInfo/0').then(res => {
        if (res.body.status === 0) {
          this.photoinfo = res.body.message[0]
        }
      })
    },
    getThumbs () {
      // 获取缩略图
      this.$http.get('getthumimages/0').then(res => {
        if (res.body.status === 0) {
          // 循环每个图片数据，补全图片的宽和高
          res.body.message.forEach(item => {
            item.w = 1000
            item.h = 1800
          })
          // 把完整的数据保存到 list 中
          this.list = res.body.message
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.photoinfo-container{
  padding: 5px;
  h3{
    color:#26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15 0px;
  }
  .subtitle{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content{
    font-size: 13px;
    line-height: 30px;
  }
}
</style>
<style lang="less">
.photo-wrap{
  .img{
    .my-gallery{
      display: flex;
      flex-direction:row;
      flex-wrap: wrap;
      figure{
        margin:10px;
      }
    }
    img{
      width: 100px;
      box-shadow: 0 0 10px #666;
    }
  }
}
</style>

