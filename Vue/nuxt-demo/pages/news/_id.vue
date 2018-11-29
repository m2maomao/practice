<template>
  <div>
    <h2>News-Content [{{$route.params.id}}]</h2>
    <ul>
      <li>
        <nuxt-link :to="{name:'index'}">Home</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  }
}
</script>
