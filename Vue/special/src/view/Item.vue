<template>
  <div id="app">
    <header>
      <span>题目{{subjectId}}</span>
    </header>
    <section>
      <h5>{{subjectWithId}}</h5>
      <ul v-for="item of currentData" :key="item.id">
        <li v-for="innerItem of item" :key="innerItem.id">
          {{innerItem.answer}}
        </li>
      </ul>
    </section>
    <button></button>
  </div>
</template>

<script>
const subject = [
  {
    id: 1,
    children: [
      {
        id: '1',
        answer: '答案aaaa'
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
        answer: '答案A'
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
        answer: '测试A'
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
        answer: '正确答案'
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
    id: 2,
    children: [
      {
        id: '1',
        answer: '错误答案'
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
      subjectId: 1,
      subject: subject,
      beginId: 1,
      currentData: []
    }
  },
  computed: {
    subjectWithId: function () {
      return '题目-' + this.subjectId
    }
  },
  mounted () {
    this.currentData.push(subject[this.subjectId].children)
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
ul
  color #ffffff
  margin-left 40px
  font-size 28px
  line-height 50px
</style>
