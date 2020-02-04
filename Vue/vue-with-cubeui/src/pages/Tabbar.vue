<template>
  <div>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler"
    ></cube-tab-bar>

    <cube-tab-bar
      v-model="selectedLabelSlots"
      showSlider
      inline
      @click="clickHandler"
    >
      <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index">
        <i slot="icon" :class="item.icon"></i>
        {{item.label}}
      </cube-tab>
    </cube-tab-bar>

    <cube-tab-bar v-model="selectedLabel" showSlider>
      <cube-tab v-for="(item, index) of tabs" :icon="item.icon" :label="item.label" :key="index"></cube-tab>
    </cube-tab-bar>
    <cube-tab-panels v-model="selectedLabel">
      <cube-tab-panel v-for="(item, index) of tabs" :label="item.label" :key="index">
        <ul>
          <li class="tab-panel-li" v-for="(hero,index) of item.heros" :key="index">
            {{hero}}
          </li>
        </ul>
      </cube-tab-panel>
    </cube-tab-panels>
  </div>
</template>

<script>
export default{
  data () {
    return {
      // selectedLabelDefault: 'Vip',
      // selectedLabelSlots: 'Like',
      // tabs: [{
      //   label: 'Home',
      //   icon: 'cubeic-home'
      // }, {
      //   label: 'Like',
      //   icon: 'cubeic-like'
      // }, {
      //   label: 'Vip',
      //   icon: 'cubeic-vip'
      // }, {
      //   label: 'Me',
      //   icon: 'cubeic-person'
      // }]
      selectedLabel: '天辉',
      tabs: [
        {
          label: '天辉',
          icon: 'cubeic-like',
          heros: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂']
        }, {
          label: '夜魔',
          icon: 'cubeic-star',
          heros: ['血魔', '敌法师', '影魔', '虚空假面', '卓尔游侠', '编织着', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂']
        }
      ]
    }
  },
  methods: {
    clickHandler (label) {
      console.log(label)
    },
    changeHandler (label) {

    }
  }
}
</script>

<style lang="stylus" scoped>
.tab-panel-li
  width 100%
  border-bottom 1px solid #ebebeb
  padding 15px 5px
</style>
