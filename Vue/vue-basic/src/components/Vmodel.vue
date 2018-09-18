<template>
  <div>
    <h3>{{message}}</h3>
    文本框
    <p>
      <input type="text" v-model="message">
      <label for="v-model">v-model</label>
    </p>
    <p>
      <input type="text" v-model.lazy="message">
      <label for="v-model.lazy">v-model.lazy</label>
    </p>
    <p>
      <input type="text" v-model.number="message">
      <label for="v-model.number">v-model.number</label>
    </p>
    <p>
      <input type="text" v-model.trim="message">
      <label for="v-model.trim">v-model.trim</label>
    </p>
    文本域
    <textarea cols="30" rows="10" v-model="message"></textarea>
    <br />
    复选框
    <input type="checkbox" v-model="isTrue">
    <label for="isTrue">{{isTrue}}</label>
    <br />
    复选框绑定数组
    <p>
      <input type="checkbox" v-model="char" value="a">
      <input type="checkbox" v-model="char" value="b">
      <input type="checkbox" v-model="char" value="c">
    </p>
    <p>{{char}}</p>
    单选框的绑定
    <p>
      <input type="radio" v-model="sex" value="男">
      <label for="">男</label>
      <input type="radio" v-model="sex" value="女">
      <label for="">女</label>
      <em>您选择的性别是：{{sex}}</em>
    </p>

  </div>
</template>

<script>
export default {
  name: 'vmodel',
  data () {
    return {
      message: null,
      isTrue: true,
      char: [],
      sex: '男'
    }
  }
}
</script>

<style>
</style>
