<template>
  <div>
    <cube-checkbox-group
      v-model="checkList"
      :options="options"
      :horizontal="true"
      shape="square"
    >
    </cube-checkbox-group>
    <div>{{getValue}}</div>

    <cube-checkbox-group v-model="checkList">
      <cube-checkbox option="1"><i>Checkbox 1</i></cube-checkbox>
      <cube-checkbox option="2"><i>Checkbox 2</i></cube-checkbox>
      <cube-checkbox :option="{value:3,disabled:true}"><i>Disabled Checkbox</i></cube-checkbox>
      <cube-checkbox :option="{value:4,disabled:true}"><i>Disabled && Checked Checkbox</i></cube-checkbox>
    </cube-checkbox-group>
    <div>{{checkList}}</div>
  </div>
</template>

<script>
export default{
  name: 'Checkboxgroup',
  data () {
    return {
      checkList: ['1', '4'],
      options: [
        '1',
        '2',
        {
          label: '3',
          value: '3',
          disabled: true
        },
        {
          label: '4',
          value: '4',
          disabled: false
        }
      ]
    }
  },
  computed: {
    getValue () {
      return this.checkList
    }
  }

}
</script>

<style lang="stylus" scoped>
</style>
