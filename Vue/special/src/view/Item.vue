<template>
  <div id="app">
    <header>
      <span>题目{{subjectId}}</span>
    </header>
    <section>
      <h5>{{subjectWithId}}</h5>
      <ul v-for="item of currentData" :key="item.id">
        <li v-for="(innerItem, index) of item" :key="index" @click="changeClass(index)" v-bind:class="{active:index===isActive}">
          {{innerItem.answer}}
        </li>
      </ul>
    </section>
    <button @click="nextHandle" v-show="nextBtnShow"></button>
    <button @click="submitHandle" v-show="!nextBtnShow" class="submit"></button>
  </div>
</template>

<script>
const subject = [
  {
    id: 1,
    children: [
      {
        id: '1',
        answer: '第一题答案aaaa'
      },
      {
        id: '2',
        answer: '正确答案'
      },
      {
        id: '3',
        answer: '答案cccc'
      },
      {
        id: '4',
        answer: '答案dddd'
      }
    ]
  },
  {
    id: 2,
    children: [
      {
        id: '1',
        answer: '第二题答案A'
      },
      {
        id: '2',
        answer: '答案B'
      },
      {
        id: '3',
        answer: '正确答案'
      },
      {
        id: '4',
        answer: '答案D'
      }
    ]
  },
  {
    id: 3,
    children: [
      {
        id: '1',
        answer: '第三题测试A'
      },
      {
        id: '2',
        answer: 'BBBBBB'
      },
      {
        id: '3',
        answer: 'CCCCCC'
      },
      {
        id: '4',
        answer: '正确答案'
      }
    ]
  },
  {
    id: 4,
    children: [
      {
        id: '1',
        answer: '第四题正确答案'
      },
      {
        id: '2',
        answer: 'A是错的'
      },
      {
        id: '3',
        answer: 'D是对的'
      },
      {
        id: '4',
        answer: 'C说的不对'
      }
    ]
  },
  {
    id: 5,
    children: [
      {
        id: '1',
        answer: '第五题错误答案'
      },
      {
        id: '2',
        answer: '正确答案'
      },
      {
        id: '3',
        answer: '错误答案'
      },
      {
        id: '4',
        answer: '错误答案'
      }
    ]
  }
]
export default {
  name: 'Item',
  data () {
    return {
      isActive: -1,
      subjectId: 1,
      subject: subject,
      beginId: 1,
      currentData: [],
      nextBtnShow: true,
      answerArray: []
    }
  },
  computed: {
    subjectWithId: function () {
      return '题目-' + this.subjectId
    }
  },
  mounted () {
    this.currentData.push(subject[this.subjectId - 1].children)
  },
  methods: {
    changeClass (index) {
      this.isActive = index
    },
    nextHandle () {
      // 判断是否选择
      if (this.isActive === -1) {
        alert('您还没有选择答案哦')
        return
      } else {
        this.answerArray.push({ id: this.subjectId, answer: this.isActive })
        this.isActive = -1
        console.log(this.answerArray)
      }
      // 判断是否为最后一题
      if (this.subjectId < this.subject.length - 1) {
        this.currentData.splice(0, this.currentData.length)
        this.currentData.push(subject[this.subjectId].children)
        this.subjectId++
      } else {
        this.nextBtnShow = false
        this.currentData.splice(0, this.currentData.length)
        this.currentData.push(subject[this.subjectId].children)
        this.subjectId++
      }
    },
    submitHandle: function () {
      if (this.isActive === -1) {
        alert('您还没有选择答案哦')
        return
      } else {
        this.answerArray.push({ id: this.subjectId, answer: this.isActive })
        this.isActive = -1
        console.log(this.answerArray)
      }
      this.$router.push({
        path: '/scoreresult',
        name: 'scoreresult',
        params: {
          answerArray: this.answerArray
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../style/common.styl'

section
  background url('../images/2-1.png') left top / 100% auto
  h5
    color #ffffff
    margin-left 100px
    margin-top 100px
button
  background url('../images/2-2.png') left top / 100% auto
  &.submit
    background url('../images/3-1.png') left top / 100% auto
ul
  color #ffffff
  margin-left 40px
  font-size 28px
  line-height 50px
  li.active
    color yellow
</style>
