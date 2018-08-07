<template>
  <div>
    <cube-radio-group v-model="selected" :options="options"></cube-radio-group>
    <div>{{selected}}</div>
    <cube-radio-group
      v-model="selected2"
      :options="option2"
      postion="right"
      :hollow-style="true"
      :horizontal="true"
    ></cube-radio-group>
    <cube-radio-group>
      <cube-radio
        v-for="(option,index) in option4"
        :key="index"
        :option="option"
        v-model="selected4"
      >
        <img :src="option.src" alt="">
      </cube-radio>
    </cube-radio-group>
  </div>
</template>

<script>
export default{
  name: 'Radio',
  data () {
    return {
      selected: '第一项内容',
      options: ['第一项内容', '第二项内容'],
      selected2: 3,
      option2: [
        {
          label: 'Option1',
          value: 1
        }, {
          label: 'Option2',
          value: 2
        }, {
          label: 'Option3',
          value: 3,
          disabled: true
        }
      ],
      selected4: '1',
      option4: [
        {
          label: '1',
          value: '1',
          src: 'http://cms-bucket.nosdn.127.net/2018/08/06/45edbc32b90a42aeb77e42d966280b06.jpeg'
        }, {
          label: '2',
          value: '2',
          src: 'http://cms-bucket.nosdn.127.net/2018/08/06/45edbc32b90a42aeb77e42d966280b06.jpeg'
        }, {
          label: '3',
          value: '3',
          src: 'http://cms-bucket.nosdn.127.net/2018/08/06/45edbc32b90a42aeb77e42d966280b06.jpeg',
          disabled: true
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
