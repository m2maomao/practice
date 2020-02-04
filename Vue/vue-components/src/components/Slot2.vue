<template>
  <div>
    <app-layout>
      <h1 slot="header">Important Title</h1>
      <p>This is paragraph</p>
      <p>This another paragraph</p>
      <h2 slot="footer">Footer Content</h2>
      <p>This is third Content</p>
    </app-layout>
  </div>
</template>

<script>
export default {
  name: 'Slot2',
  data () {
    return {

    }
  },
  components: {
    AppLayout: {
      template:
      `
        <div>
          <header>
            <slot name="header"></slot>
          </header>
          <main>
            <slot></slot>
          </main>
          <footer>
            <slot name="footer"></slot>
          </footer>
        </div>
      `
    }
  }
}
</script>

<style>

</style>
