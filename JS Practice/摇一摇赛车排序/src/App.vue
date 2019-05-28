<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) in a" :key="index" :style="{'padding-left': (100-item.rank * 10) + 'px'}">
        <b>{{index+1}}</b>{{item.name}}
      </li>
    </ul>
    <ul>
      <li v-for="(item, index) in c" :key="index" :style="{'padding-left': (100-item.rank * 10) + 'px'}">
        <b>{{index+1}}</b>{{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      a: [
        {'name': 'A', 'rank': 1},
        {'name': 'B', 'rank': 2},
        {'name': 'C', 'rank': 3},
        {'name': 'D', 'rank': 4},
        {'name': 'E', 'rank': 5},
        {'name': 'F', 'rank': 6},
        {'name': 'G', 'rank': 7},
        {'name': 'H', 'rank': 8},
        {'name': 'I', 'rank': 9},
        {'name': 'J', 'rank': 10}
      ],
      b: [
        {'name': 'C', 'rank': 1},
        {'name': 'B', 'rank': 2},
        {'name': 'E', 'rank': 3},
        {'name': 'D', 'rank': 4},
        {'name': 'I', 'rank': 5},
        {'name': 'J', 'rank': 6},
        {'name': 'X', 'rank': 7},
        {'name': 'Y', 'rank': 8},
        {'name': 'G', 'rank': 9},
        {'name': 'Z', 'rank': 10}
      ],
      // 临时数组
      c: [],
      // a数组索引
      indexArr: [],
      aIndexArr: [],
      bIndexArr: []
    }
  },
  mounted () {
    // 深复制
    this.c = JSON.parse(JSON.stringify(this.a))
    // 数据变化调用
    this.changeSecond()
  },
  methods: {
    changeSecond () {
      // 改变临时数组中，新数据传值[已有索引]
      this.b.map(y => {
        this.c.map((x, i) => {
          if (x.name === y.name) {
            x.rank = y.rank
            x.reset = true
          }
        })
      })
      // 保存A中值未被修改的索引
      this.c.map((item, index) => {
        if (!item.reset) {
          this.aIndexArr.push(index)
        }
      })
      // 获取A索引集合
      this.a.map((a, index) => {
        this.indexArr.push(a.name)
      })
      // 对比A,寻找B中新传入的值(索引)
      this.b.map((b, index) => {
        if (!this.indexArr.includes(b.name)) {
          this.bIndexArr.push(index)
        }
      })
      // 把B新值覆盖传入A中未被修改过的位置
      this.aIndexArr.map((a, index) => {
        this.c[a] = this.b[this.bIndexArr[index]]
      })
    }
  }
}
</script>

<style lang="less">
ul{
  margin:0;
  padding:0;
  li{
    padding: 0;
    list-style-type: none;
    border-bottom: 1px solid #ccc;
    &:nth-of-type(odd) {
      background:#ebebeb;
    }
    b{
      position: absolute;
      left:0;
    }
  }
}
</style>
