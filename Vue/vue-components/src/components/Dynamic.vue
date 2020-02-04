<template>
  <div>
    <select v-model="currentComponent">
      <option value="home">Home</option>
      <option value="post">Post</option>
      <option value="about">About</option>
    </select>
    <keep-alive>
      <component :is="currentComponent"><p>SLOT内容~~~</p></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Dynamic',
  data () {
    return {
      currentComponent: 'home'
    }
  },
  components: {
    home: {
      template: `
        <div>
          <p>This is Home Component</p>
          <slot>如果没有内容</slot>
        </div>
      `
    },
    post: {
      template: `<p>This is Post Component</p>`
    },
    about: {
      template: `<p>This is About Component</p>`
    }
  }
}
</script>

<style>

</style>
