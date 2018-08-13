<template>
  <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
  <cube-form-group>
    <cube-form-item :field="fields[0]"></cube-form-item>
    <cube-form-item :field="fields[1]"></cube-form-item>
    <cube-form-item :field="fields[2]">
      <cube-button @click="showDatePicker">{{model.dateValue || 'Please select date'}}</cube-button>
      <date-picker ref="datePicker" :min="[2008, 8, 8]" :max="[2020, 10, 20]" @select="dateSelectHandler"></date-picker>
    </cube-form-item>
  </cube-form-group>
  <cube-form-group>
    <cube-button type="submit">Submit</cube-button>
  </cube-form-group>
</cube-form>
</template>

<script>
// province, city, area
// select component
const PCA = {
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      selected: []
    }
  },
  render (createElement) {
    return createElement('cube-button', {
      on: {
        click: this.showPicker
      }
    }, this.selected.length ? this.selected.join(' ') : 'placeholder')
  },
  mounted () {
    this.picker = this.$createCascadePicker({
      title: 'PCA Select',
      data: cityData,
      selectedIndex: this.value,
      onSelect: this.selectHandler
    })
  },
  methods: {
    showPicker () {
      this.picker.show()
    },
    selectHandler (selectedVal, selectedIndex, selectedTxt) {
      this.selected = selectedTxt
      this.$emit('input', selectedVal)
    }
  }
}
export default {
  data () {
    return {
      validity: {},
      valid: undefined,
      model: {
        inputValue: '',
        pcaValue: [],
        dateValue: ''
      },
      fields: [
        {
          type: 'input',
          modelKey: 'inputValue',
          label: 'Input',
          props: {
            placeholder: '请输入'
          },
          rules: {
            required: true
          }
        },
        {
          component: PCA,
          modelKey: 'pcaValue',
          label: 'PCASelect',
          rules: {
            required: true
          },
          messages: {
            required: '请选择'
          }
        },
        {
          modelKey: 'dateValue',
          label: 'Date',
          rules: {
            required: true
          }
        }
      ]
    }
  },
  methods: {
    submitHandler (e) {
      console.log('submit')
    },
    validateHandler (result) {
      this.validity = result.validity
      this.valid = result.valid
      console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    },
    showDatePicker () {
      this.$refs.datePicker.show()
    },
    dateSelectHandler (selectedVal) {
      this.model.dateValue = new Date(selectedVal[0], selectedVal[1] - 1, selectedVal[2]).toDateString()
    }
  },
  components: {
    DatePicker
  }
}
</script>

<style lang="stylus" scoped>

</style>
