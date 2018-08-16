
<template>
  <cube-button @click="showCascadePicker">Cascade Picker</cube-button>
</template>

<script>
const cascadeData = [
  {
    value:'Fruit',
    text:'Fruit',
    children:[
      {
        value:'Apple'
      }
    ]
  }
]
  export default {
    mounted(){
      this.cascadePicker = this.$createCascadePicker({
        title:'Cascade Picker',
        data:cascadeData,
        selectIndex:[0,1,0],
        onSelect:this.selectHandle,
        onCancel:this.cancelHandle
      })
    },
    methods:{
      showCascadePicker(){
        this.cascadePicker.show()
      },
      selectHandle(selectedVal,selectedIndex,selectText){
        this.$createDialog({
          type:'warn',
          icon:'cubeic-alert',
          content:`
            Selected Item:<br />
            - selectedVal:${selectedVal} <br/>
            - selectedIndex:${selectedIndex} <br />
            - selectedText:${selectedText}
          `
        }).show()
      },
      cancelHandle(){
        this.$createToast({
          type:'correct',
          time:1000,
          txt:'picker canceled'
        }).show()
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
