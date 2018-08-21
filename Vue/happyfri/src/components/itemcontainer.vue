<template>
  <section>
    <!-- 页头判断展示 -->
    <header class="top_tips">
      <span class="num_tip" v-if="fatherComponent == 'home'">{{level}}</span>
      <span class="num_tip" v-if="fatherComponent == 'item'">题目{{itemNum}}</span>
    </header>
    <!-- 判断是否为首页 -->
    <div v-if="fatherComponent == 'home'">
      <div class="home_logo item_container_style"></div>
      <router-link to="item" class="start button_style"></router-link>
    </div>
    <!-- 判断是否为答题页 -->
    <div v-if="fatherComponent == 'item'">
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="itemDetail.length > 0">
          <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
          <ul>
            <li v-for="(item,index) of itemDetail[itemNum-1].topic_answer" @click="choosed(index,item.topic_answer_id)" class="item_list" :key="item.index">
              <span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">{{chooseType(index)}}</span>
              <span class="option_detail">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'itemcontainer',
  data () {
    return {
      itemId: null, // 题目ID
      chooseNum: null, // 选中的答案索引
      chooseId: null// 选中答案ID
    }
  },
  props: ['fatherComponent'],
  computed: mapState([
    'itemNum', // 第几题
    'level', // 第几周
    'itemDetail', // 题目详情
    'timer'// 计时器
  ]),
  methods: {
    ...mapActions(['addNum', 'initializeData']),
    // 下一题
    nextItem () {
      if (this.choosedNum !== null) {
        this.chooseNum = null
        // 保存答案，题目索引加一，跳到下一题
      } else {
        alert('您还没有选择答案哦')
      }
    },
    // 索引0-3对应答案A-B
    chooseType: type => {
      switch (type) {
        case 0:return 'A'
        case 1:return 'B'
        case 2:return 'C'
        case 3:return 'D'
      }
    },
    // 选中的答案信息
    choosed (type, id) {
      this.chooseNum = type
      this.choosedId = id
    },
    // 到达最后一题，交卷，清空定时器，跳转分数页面
    submitAnswer () {
      if (this.choosedNum !== null) {
        this.addNum(this.choosedId)
        clearInterval(this.timer)
        this.$router.push('score')
      } else {
        alert('您还没有选择答案哦')
      }
    }
  },
  created () {
    // 初始化信息
    if (this.fatherComponent === 'home') {
      this.initializeData()
      document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)'
    }
  }
}
</script>
