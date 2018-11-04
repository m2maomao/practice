<template>
    <div>
        <jspang here="China"></jspang>
        <jspang here="USA"></jspang>
        <jspang here="Tokyo"></jspang>
    </div>
</template>

<script>

export default {
  name: '',
  components: {
    jspang: {
      template: `<div style="color:red">Panda from {{here}}</div>`,
      props: ['here']
    }
  }
}
</script>

<style>

</style>
