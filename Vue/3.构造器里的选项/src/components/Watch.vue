<template>
  <div>
    <h1>Watch Option</h1>
    <p>今日的温度：{{temperature}}°</p>
    <p>穿衣建议：{{clothes}}</p>
    <p>
      <button @click="increase">Increase Temperature</button>
      <button @click="decrease">Decrease Temperature</button>
    </p>
  </div>
</template>
<script>
export default {
  name: 'Watch',
  data () {
    return {
      temperature: 14,
      clothes: '夹克长裙'
    }
  },
  methods: {
    increase () {
      this.temperature += 2
    },
    decrease () {
      this.temperature -= 2
    }
  },
  watch: {// 第一种写在构造器里
    temperature (val, oldVal) {
      if (val > 18 && val < 26) {
        this.clothes = '衬衫牛仔裤'
      } else if (val > 26 && val < 30) {
        this.clothes = '半袖短裤'
      } else if (val > 30) {
        this.clothes = '什么都不用穿啦'
      }
    }
  },
  mounted () {
    // 监听watch的第二种方式，写在实例里
    // this.$watch('temperature', (val, oldVal) => {
    //   if (val > 18 && val < 26) {
    //     this.clothes = '衬衫牛仔裤'
    //   } else if (val > 26 && val < 30) {
    //     this.clothes = '半袖短裤'
    //   } else if (val > 30) {
    //     this.clothes = '什么都不用穿啦'
    //   }
    // })
  }
}
</script>
<style scoped>
h1{
  color: cadetblue
}
p{
  color:chocolate
}
button{
  border: 1px solid salmon;
  padding: 10px 20px;
  border-radius: 15px;
  background: sandybrown;
  outline: none;
}
</style>
