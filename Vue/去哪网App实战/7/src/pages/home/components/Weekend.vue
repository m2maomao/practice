<template>
  <div class="title">
    <div>周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of recommendList" :key="index">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/tts8/1805/12/9db090b718016d02.jpg_r_240x160x90_bbe063d3.jpg',
        title: '畅游亲子乐园',
        desc: '提前10天报名立减300元✔新加坡+马来西亚乐高亲子游6天4晚 畅游亲子乐园'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/p/tts1/1805/19/ae84a738c9adf502.jpg_r_240x160x90_1faf33db.jpg',
        title: '大连圣亚海洋事件',
        desc: '浪漫大连首站...浪漫的海洋主题乐园浪漫的海洋主题乐园'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/p/tts9/1805/71/2e0d97a2c7f73f02.jpg_r_240x160x90_522f54e1.jpg',
        title: '飞跃喜马拉雅 3晚五星酒店',
        desc: '重庆直飞尼泊尔8天7晚探索秘境深度游 全程0购物 飞跃喜马拉雅 3晚五星酒店'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/p/tts4/1803/bf/2a2598709a9f4f02.jpg_r_240x160x90_fddacbdc.jpg',
        title: '重庆包机直飞俄罗斯9日游',
        desc: '重庆包机直飞俄罗斯9日游 莫斯科+圣彼得堡 全程入住星级酒店 可订世界杯球票'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/p/tts1/1512/b6/21d1a5ac39aa04f7.jpg_r_240x160x90_3d454c2a.jpg',
        title: '曼谷-芭提雅8日游',
        desc: '早定立减340 高品纯享泰国普吉岛-曼谷-芭提雅8日游 0自费 国五海边酒店'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title > div {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 66%;
}

.item-img {
  width: 100%;
}

.item-info {
  padding: 0.1rem;

  .item-title {
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  }

  .item-desc {
    line-height: 0.4rem;
    color: #ccc;
    ellipsis();
  }
}
</style>
