<template> 
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea name="" id="" cols="30" rows="10" placeholder="请输入要输入的内容(最多吐槽120字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="i">
        <div class="cmt-title">
          第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time|dateFormat}}
        </div>
        <div class="cmt-body">
          {{item.content === 'undefined'? '此用户很懒，什么都没说' : item.content}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
  data() {
    return {
      pageIndex:1, //，默认展示第一页数据
      comments: [] //所有的评论数据
    }
  },
  created() {
    this.getComments()
  },
  methods: {
    // 获取评论
    getComments() {
      this.$http.get('getcomments/' + this.id + '?pageindex=' + this.pageIndex).then(res => {
        console.log('res', res)
        if(res.body.status === 0) {
          this.comments.push(...res.body.message)
        } else {
          Toast('获取评论失败!')
        }
      })
    },
    // 加载更多
    getMore() {
      this.pageIndex++
      this.getComments()
    }
  },
  props:['id']
}
</script>

<style lang="less" scoped>
.cmt-container{
  h3{font-size: 18px;}
  textarea{
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list{
    margin:5px 0;
    .cmt-item{
      font-size:13px;
      .cmt-title{
        line-height: 30px;
        background: #ccc;
      }
      .cmt-body{
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>


