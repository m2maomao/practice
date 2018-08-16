<template>
<div id="app">
  <div class="score">
    <p>{{computedScore}}分!</p>
    <span>{{scoreText}}</span>
  </div>
  <div class="share-btn"></div>
</div>
</template>

<script>
export default {
  name: 'score',
  data () {
    return {
      scoreText: '',
      answerArray: this.$route.params.answerArray,
      rightAnswer: [
        {
          id: 1,
          answer: 1
        },
        {
          id: 2,
          answer: 2
        },
        {
          id: 3,
          answer: 3
        },
        {
          id: 4,
          answer: 0
        },
        {
          id: 5,
          answer: 1
        }
      ],
      computedScore: 0
    }
  },
  mounted: function () {
    console.log(this.rightAnswer[0])
    this.totalCount(this.answerArray)
  },
  methods: {
    totalCount (arr) {
      if (arr.length === this.rightAnswer.length) {
        for (let i = 0; i < arr.length; i++) {
          if (this.answerArray[i].answer === this.rightAnswer[i].answer) {
            console.log('相等')
            console.log(this.answerArray[i], this.rightAnswer[i])
            this.computedScore += 20
          } else {
            console.log('不相等')
            console.log(this.answerArray[i], this.rightAnswer[i])
          }
        }
      } else {

      }

      if (this.computedScore < 60) {
        this.scoreText = '不及格'
      } else if (this.computedScore >= 60 && this.computedScore < 100) {
        this.scoreText = '终于及格啦!'
      } else {
        this.scoreText = '满分我的哥，牛逼了!'
      }
      console.log('总成绩为：' + this.computedScore, typeof (this.computedScore))
      console.log(this.scoreText)
    }
  }
}
</script>

<style lang="stylus" scope>
#app
  position absolute
  width 100%
  height 100%
  left 0
  top 0
  bottom 0
  right 0
  background url('../images/4-1.jpg') left top / 100% auto
  .score
    width 388px
    height 364px
    position absolute
    left 50%
    margin-left -194px
    top 300px
    background url('../images/4-2.png') left top / 100% auto
    p
      font-size 100px
      width 100%
      position absolute
      top 50px
      text-align center
      color red
    span
      font-size 24px
      position absolute
      top 300px
      color brown
      text-align center
      width 100%
  .share-btn
    width 233px
    height 96px
    position absolute
    left 50%
    margin-left -117px
    top 700px
    background url('../images/4-3.png') left top / 100% auto
</style>
