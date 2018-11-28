<template>
  <div>
    <span>V-BIND 实例</span>
    <hr>
    <img v-bind:src="imgSrc" alt="">
    <img :src="imgSrc" alt="">
    绑定属性不能用双括号直接赋值，必须使用v-bind / :
    <h2>{{imgSrc}}</h2>
    <p :class="className">1、绑定Class</p>
    <p :class="{classA:isOk}">2、绑定Class中的判断</p>
    <p :class="[classA,classB]">3、绑定Class中的数组</p>
    <p :class="isOk?classA:classB">4、绑定Class中的三元运算符</p>
    <hr>
    <input type="checkbox" v-model="isOk">
    <label for="isOk">isOk:{{isOk}}</label>
    <hr>
    <p :style="{color:green,fontSize:size}">5、绑定Style</p>
    <p :style="styleObj">6、绑定Style对象</p>
  </div>
</template>

<script>
export default {
  name: 'Bind',
  data () {
    return {
      imgSrc: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4031426883,4075118656&fm=26&gp=0.jpg',
      className: 'classA',
      isOk: false,
      classA: 'classA',
      classB: 'classB',
      green: 'green',
      size: '50px',
      styleObj: {
        fontSize: '10px',
        color: 'pink'
      }
    }
  }
}
</script>

<style>
.classA {
  color: red;
}
.classB {
  font-size: 30px;
}
</style>
