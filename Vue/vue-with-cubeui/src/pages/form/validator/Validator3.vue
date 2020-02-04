<template>
<cube-validator v-model="valid" :model="text" :rules="rules" :messages="messages">
  <cube-input v-model="text" placeholder="component name"></cube-input>
  <div slot="message" class="custom-msg" slot-scope="props">
    <div v-if="(props.dirty || props.validated) && !valid">
      <i class="dd-cubeic-important"></i> {{ props.message }}
      <div>
        <span v-for="(item, index) in Object.values(props.result)"
          :key="index" v-if="item.inValid">
          {{ item.message + ' ' }}
        </span>
      </div>
    </div>
  </div>
</cube-validator>
</template>

<script>
export default {
  data () {
    return {
      valid: undefined,
      text: '',
      rules: {
        type: 'string',
        pattern: /^cube-/,
        min: 8,
        max: 10
      },
      messages: {
        pattern: 'The component name need start with "cube-"'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.custom-msg
  color: orange
</style>
