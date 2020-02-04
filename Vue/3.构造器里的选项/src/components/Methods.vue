<template>
  <div>
    <p>a:{{a}}</p>
    <button @click="add(2)">ADD</button>
    <button @click="add()">ADD MORE</button>
    <!-- <btn @addByComponent="add(10000)"></btn> -->

    <!-- 自定义组件调用父方法 -->
    <btn @click.native="add(20000)"></btn>
  </div>
</template>

<script>
export default{
  name: 'Methods',
  data () {
    return {
      a: 1
    }
  },
  components: {
    btn: {
      template: `
        <div>
          <button >添加</button>
          <button >添加</button>
          <button >添加</button>
          <button >添加</button>
          <a href="javascript:;">我是链接</a>
        </div>

      `,
      methods: {
        addByComponent () {
          this.$emit('addByComponent')
        }
      }
    }
  },
  methods: {
    add (num, $event) {
      console.log(arguments)
      // 判断是否有值传入
      if (arguments.length) {
        this.a += num
      } else {
        this.a += 20
      }
      console.log(event)
    }
  }
}
</script>

<style scoped>
  button{
    padding: 10px 20px;
    background: pink;
    border: 1px solid #992211;
    outline:none;
    display: block;
    margin-bottom: 20px;
  }
</style>
