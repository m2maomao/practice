<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div class="range-single">
      <p class="title">男女比例</p>
      <div class="number">
        <span>{{singleRange.value}}%</span>
        <span>{{100 - singleRange.value}}%</span>
      </div>
      <vue-slider ref="slider" v-model="singleRange.value" v-bind="singleRange"></vue-slider>
      <div class="name">
        <span>男</span>
        <span>女</span>
      </div>
    </div>
    <div class="range-double" style="margin-top:20px;">
      <div class="stage">
        <span>年龄优先段</span>
        <span>{{doubleRange.value[0]}}-{{doubleRange.value[1]}}岁</span>
      </div>
      <vue-slider v-model="doubleRange.value" v-bind="doubleRange"></vue-slider>
    </div>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component'
export default {
  name: 'HelloWorld',
  components: {
    vueSlider
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      singleRange: {
        value: 0,
        tooltip: false
      },
      doubleRange: {
        value: [0, 100],
        tooltip: false
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="less">
// 单一range选择
.range-single{
  .title{
    font-size: 15px;
    color: #333333;
    text-align: left;
    font-weight: normal;
    padding: 0;
    margin:0;
    padding-bottom: 5px;
  }
  span{
    font-size: 12px;
  }
  .number,.name{
    display: flex;
    justify-content: space-between;
  }
  .vue-slider-component .vue-slider{
    background-color: #ff7f17;
  }
  .vue-slider-component .vue-slider-process{
    background-color: #1fb497;
  }
  .vue-slider-dot{
    width: 20px!important;
    height: 20px!important;
    top: -8px!important;
  }
}
// 双向range选择
.range-double{
  span{
    font-size: 15px;
    color: #333333;
  }
  .stage{
    display: flex;
    justify-content: space-between;
  }
  .vue-slider-component .vue-slider{
    background-color: #f8f8f8;
  }
  .vue-slider-component .vue-slider-process{
    background-color: #1fb497;
  }
  .vue-slider-dot{
    width: 20px!important;
    height: 20px!important;
    top: -8px!important;
  }
}
</style>
