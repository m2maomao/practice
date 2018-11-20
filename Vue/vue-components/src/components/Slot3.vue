<template>
  <div>
    <demo>
      <template slot-scope="props">
        <span>{{props.text}}</span>
        <span>{{props.message}}</span>
      </template>
    </demo>
  </div>
</template>

<script>
export default {
  name: 'Slot3',
  data () {
    return {

    }
  },
  components: {
    demo: {
      template: `
        <div>
          <slot :text="hello" message="world"></slot>
        </div>
      `,
      data () {
        return {
          hello: [1, '2']
        }
      }
    }
  }
}
</script>

<style>

</style>
