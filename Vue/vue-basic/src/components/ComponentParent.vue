<template>
  <div>
    <h2>简单的组件引用</h2>
    <panda>12323</panda>
  </div>
</template>

<script>
var city = {
  template: `
    <div style="color:dark">SiChuan of China</div>
  `
}
var component = {
  template: `
    <div>
      <p>Panda from China!</p>
      <city></city>
    </div>

  `,
  components: {
    city: city
  }
}

export default {
  components: {
    panda: component
  }
}
</script>

<style>

</style>
