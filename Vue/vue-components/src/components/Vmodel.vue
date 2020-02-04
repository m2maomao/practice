<template>
  <div>
    <p>Vmodel 组件</p>
    <input type="text" v-bind:value="text" v-on:input="changeValue($event.target.value)" />
    <h5>{{text}}</h5>
  </div>
</template>

<script>
export default {
  name: 'Vmodel',
  data () {
    return {
      text: '111'
    }
  },
  methods: {
    changeValue (txt) {
      this.text = txt
      console.log(this.text)
    }
  }
}
</script>
