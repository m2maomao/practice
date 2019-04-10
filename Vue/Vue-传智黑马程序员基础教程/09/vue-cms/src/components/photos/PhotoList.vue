<template>
  <div>
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a 
            :class="['mui-control-item', item.id === 0 ? 'mui-active' : '']" 
            :href="item.id"
            data-wid="#"
            v-for="(item, index) in cates"
            :key="index">
            {{item.title}}
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// 1.导入 mui 的js文件
import mui from '../../lib/mui/js/mui.min.js'

export default {
  data () {
    return {
      cates: [] //所有分类的列表
    }
  },
  created() {
    this.getAllCategory()
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getAllCategory() {
      // 获取所有的图片分类
      this.$http.get('getimgcategory').then(res => {
        if (res.body.status === 0) {
          // 手动拼接出一个最完整的分类列表
          res.body.message.unshift({title:'全部', id: 0})
          this.cates = res.body.message
        }
      })
    }
  },
}
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y;
}
</style>


