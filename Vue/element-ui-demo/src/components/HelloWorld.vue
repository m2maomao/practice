<template>
  <div>
    <h5>Element UI</h5>
    <p>输入:<el-input v-model="ipt" /></p>
    <p>
      <el-button>按钮</el-button>
    </p>
    <div>
      <el-select v-model="value5" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="value11" multiple collapse-tags style="margin-left: 20px;" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      ipt: '',
      value5: [],
      value11: [],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  },
  components: {
    // [Button.name]: Button,
    // [Select.name]: Select,
    // [Input.name]: Input,
    // [Option.name]: Option
  }
}
</script>

<style>
/* @import url("//unpkg.com/element-ui@2.4.11/lib/theme-chalk/index.css"); */
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
