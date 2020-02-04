<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="https://img1.qunarzz.com/p/tts8/1803/16/0e638f00b1af6602.jpg_r_640x420x90_069fa3df.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
      </div>
    </div>
    <common-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'

export default{
  name: 'DetailBanner',
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery
  },
  data () {
    return {
      imgs: [
        'https://img1.qunarzz.com/p/tts8/1803/16/0e638f00b1af6602.jpg_r_640x420x90_069fa3df.jpg',
        'https://img1.qunarzz.com/p/tts8/1803/16/0e638f00b1af6602.jpg_r_640x420x90_069fa3df.jpg'
      ],
      showGallery: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #ffffff;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  }

  .banner-title {
    flex: 1;
    font-size: 0.32rem;
    padding: 0 0.2rem;
  }

  .banner-number {
    margin-top: 0.14rem;
    padding: 0 0.4rem;
    line-height: 0.32rem;
    height: 0.32rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.8);
    font-size: 0.24rem;

    .banner-icon {
      font-size: 0.24rem;
    }
  }
}
</style>
