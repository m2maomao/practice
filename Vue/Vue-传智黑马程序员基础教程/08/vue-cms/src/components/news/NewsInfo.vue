<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newsinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.add_time | dateFormat}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content">

    </div>
    <!-- 评论子组件 -->
    <comment-box :id="id"></comment-box>
  </div>
</template>

<script>
// 1.导入评论子组件
import comment from '../subcomponents/comment.vue'

export default {
  data () {
    return {
      id: this.$route.params.id, // 将 URL 地址中传递过来的ID值挂载到data上，方便以后调用
      newsinfo:{}
    }
  },
  components: { // 用来注册子组件
    'comment-box': comment
  },
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() { //获取新闻详情
      this.$http.get('getnew/'+ this.id).then(res=>{
        console.log('res',res)
        if(res.body.status === 0) {
          this.newsinfo = res.body.message[0]
        } else {
          Toast('获取新闻失败!')
        }
      })
    }
  },

}
</script>

<style lang="less" scoped>
.newsinfo-container{
  padding: 0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    line-height: 1.5em;
    margin: 15px 0;
    color:red;
  }
  .subtitle{
    font-size: 13px;
    color:#226aff;
    display: flex;
    justify-content: space-between;
  }
  .content{
    font-size:13px;
    color:#666;
    line-height: 1.8em;
    img{
      width: 100%;
    }
  }
}
</style>


