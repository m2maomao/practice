<template>
  <div class="photoinfo-container">
    <h3>{{photoinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{photoinfo.add_time | dateFormat}}</span>
      <span>点击：{{photoinfo.click}}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
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
      slide1: [
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
          msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
          alt: 'picture2',
          title: 'Image Caption 2',
          w: 1200,
          h: 900
        }
      ]
    }
  },
  components:{
    'cmt-box': comment
  },
  created() {
    this.getPhotoInfo()
  },
  methods: {
    getPhotoInfo() {
      // 获取图片的详情
      this.$http.get('getimageInfo/0').then(res => {
        if (res.body.status === 0) {
          this.photoinfo = res.body.message[0]
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
