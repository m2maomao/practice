<template>
  <div>
    <div>价格：{{priceComputed}}</div>
    <ul>
      <li v-for="(item,index) in reverveNews" :key="index">{{item.title}} - {{item.date}}</li>
    </ul>
  </div>
</template>

<script>
let newsList1 = [
  {
    title: '第一个内容的标题',
    date: '2018/09/08'
  },
  {
    title: '第二个内容的标题',
    date: '2018/10/12'
  },
  {
    title: '第三个内容的标题',
    date: '2018/11/20'
  },
  {
    title: '第四个内容的标题',
    date: '2018/11/27'
  }
]
export default {
  name: 'computed',
  data () {
    return {
      price: 100,
      newsList: newsList1
    }
  },
  computed: {
    priceComputed () {
      return '￥' + this.price + '元'
    },
    reverveNews () {
      // 赋给临时数据，不允许在computed中更改原始data中的数据
      let d = this.newsList
      return d.reverse()
    }
  }
}

</script>
