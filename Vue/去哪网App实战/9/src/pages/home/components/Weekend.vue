<template>
  <div class="title">
    <div>周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="(item,index) of list" :key="index">
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
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title > div {
  line-height: 0.8rem;
  background: #eeeeee;
  text-indent: 0.2rem;
}

.item-img-wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 38%;
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
