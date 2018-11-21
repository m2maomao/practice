<template>
  <div>
    <!-- <prompt-points :showFlag="showFlag" :htmlContent="htmlData" @delete="dosomeDialog" >
    </prompt-points> -->
  </div>
</template>

<script>
import PromptPoints from '@/components/PromptPoints'

export default{
  name: 'ShowPrompPage',
  components: {
    PromptPoints
  },
  data () {
    return {
      showFlag: true,
      data: {
        code: 0,
        msg: 'success',
        data: {
          'bonus': [// 这是额外奖励提示（为空不提示）
            {
              'id': 119150,
              'rule_name': '帖子综合排名奖励（第1）新', // 文案
              'points': '10.00'// 积分
            }
          ],
          'level': [// 这是等级提示（为空不提示）
            1,
            2,
            3
          ],
          'first_login': [
            {
              'type': 1, // 是否有头像 1没有2有
              'points': 20
            }
          ]
        }
      },
      dialogArray: [
        {
          html: '1111',
          showFlag: false
        },
        {
          html: '2222',
          showFlag: false
        },
        {
          html: '3333',
          showFlag: false
        },
        {
          html: '4444',
          showFlag: false
        }
      ],
      fdata: {
        a: ['a1', 'a2', 'a3', 'a4', 'a5'],
        b: ['b1', 'b2', 'b3', 'b4', 'b5'],
        c: ['c1', 'c2', 'c3', 'c4', 'c5']
      },
      perfectData: null,
      htmlData: null,
      dialogTimer: null
    }
  },
  mounted () {
    // console.log(this.dialogArray)
    this.perfectData = this.perfectData = this.fdata.a.concat(this.fdata.b, this.fdata.c)
  },
  methods: {
    showDialog () {
      if (this.perfectData.length > 0) {
        console.log('this.perfectData', this.perfectData)
        this.htmlData = this.perfectData.slice(0, 1)
        this.$promptPoints({htmlContent: this.htmlData, onOK: this.dosomeDialog})
        // this.showFlag = true
        // this.$vux.toast.text(this.htmlData)
        // setTimeout(() => {
        //   this.perfectData.splice(0, 1)
        // }, 3000)
      }
    },
    dosomeDialog () {
      this.perfectData.splice(0, 1)
    }
  },
  watch: {
    perfectData: {
      handler (curVal, oldVal) {
        // console.log(this.a[0])
        this.showFlag = true
        this.showDialog()
      }
    }
  }
}
</script>

<style>

</style>
