<template>
  <div>
    <cube-toolbar
      :actions="actions"
      :more-actions="moreActions"
      @click="clickHandler"
    ></cube-toolbar>
  </div>
</template>

<script>
export default{
  name: 'Toolbar',
  data () {
    return {
      money: 10,
      actions: [
        {
          text: '完成订单',
          action: 'showText'
        },
        {
          text: '打车来接',
          checked: false,
          type: 'checkbox'
        },
        {
          text: '一口价<span class="orange">10元</span>',
          action: 'moreMoney'
        }
      ],
      moreActions: [
        {
          text: '操作a',
          action: 'showText'
        },
        {
          text: '<span style="color:red">操作b</span>',
          action: 'showText'
        },
        {
          text: '<span>操作c</span>',
          icon: 'cubeic-right',
          action: 'showText'
        }
      ]
    }
  },
  methods: {
    showText (item) {
      this.$createToast({
        type: 'correct',
        txt: 'clicked ' + item.text,
        time: 1000
      }).show()
    },
    moreMoney (item) {
      this.money += 10
      item.text = '一口价<span class="orange">' + this.money + '元</span>'
    },
    clickHandler (item) {
      if (item.action) {
        this[item.action](item)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
>>> .orange
  color #fc9153
</style>
