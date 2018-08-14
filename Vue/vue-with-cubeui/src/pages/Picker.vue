<template>
  <div>
    <cube-button @click="showPicker">Picker</cube-button>
    <cube-button @click="showMultiPicker">MultiPicker</cube-button>
    <cube-button @click="showAliasPicker">Use Alias</cube-button>
  </div>
</template>

<script>
const col1Data = [
  {
    text: '剧毒',
    value: 'one'
  },
  {
    text: '蚂蚁',
    value: 'two'
  },
  {
    text: '幽鬼',
    value: 'three'
  }
]
const col2Data = [{ text: '输出', value: '输出' }, { text: '控制', value: '控制' },
  { text: '核心', value: '核心' }, { text: '爆发', value: '爆发' }, { text: '辅助', value: '辅助' },
  { text: '打野', value: '打野' }, { text: '逃生', value: '逃生' }, { text: '先手', value: '先手' }]
const col3Data = [{ text: '梅肯', value: '梅肯' }, { text: '秘法鞋', value: '秘法鞋' },
  { text: '假腿', value: '假腿' }, { text: '飞鞋', value: '飞鞋' }, { text: '辉耀', value: '辉耀' },
  { text: '金箍棒', value: '金箍棒' }]
export default {
  mounted () {
    // 单列选择器
    this.picker = this.$createPicker({
      title: 'Picker',
      data: [col1Data],
      onSelect: (selectedVal, selectedIndex, selectedText) => {
        console.log(selectedVal)
        console.log(selectedIndex)
        console.log(selectedText)
        this.$createDialog({
          type: 'warn',
          content: `
            Selected Item <br/> - value:${selectedVal.join(',')}<br/> 
            - index:${selectedIndex.join(',')}<br/> - text:${selectedText.join('')}
          `
        }).show()
      },
      onCancel: () => {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    })
    // 多列选择器
    this.multiPick = this.$createPicker({
      title: 'multiPicker',
      data: [col1Data, col2Data, col3Data],
      onSelect: (selectedVal, selectedIndex, selectedText) => {
        console.log(selectedVal)
        console.log(selectedIndex)
        console.log(selectedText)
        this.$createDialog({
          type: 'warn',
          content: `
            selectItem:<br /> - value:${selectedVal.join(',')} <br />
                              - index:${selectedIndex.join(',')} <br />
                              - text:${selectedText.join('')}
          `,
          icon: 'cubeic-alert'
        }).show()
      },
      onCancel: () => {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    })
    // alias配置别名
    this.aliasPicker = this.$createPicker({
      title: 'aliasPicker',
      data: [[{'id': 1, name: 'A'}, {id: 2, name: 'B'}, {id: 3, name: 'C'}]],
      alias: {
        value: 'id',
        text: 'name'
      },
      onSelect: (selectedVal, selectedIndex, selectedText) => {
        this.$createDialog({
          type: 'warn',
          content: `
            SelectItem:<br />
            - selectedVal:${selectedVal} <br />
            - selectedIndex:${selectedIndex} <br />
            - selectedText:${selectedText} <br />
          `,
          icon: 'cubeic-alert'
        }).show()
      },
      onCancel: () => {
        this.$createToast({
          type: 'correct',
          txt: 'Picker canceled',
          time: 1000
        }).show()
      }
    })
  },
  methods: {
    showPicker () {
      this.picker.show()
    },
    showMultiPicker () {
      this.multiPick.show()
    },
    showAliasPicker () {
      this.aliasPicker.show()
    }
  }
}
</script>

<style lang="stylus" scoped>
button
  border 10px solid #ffffff
</style>
