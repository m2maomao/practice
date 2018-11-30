<template>
  <div>
    <h2>HOME - Page</h2>
    <ul>
      <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
      <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
      <li><nuxt-link :to="{name:'news', params:{newsId:3306}}">NEWS</nuxt-link></li>
    </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
import $ from 'jquery'

Vue.directive('focus', {
  inserted:function(el) {
    el.focus()
  }
})


// import { Button, Cell } from 'vant';
import AppLogo from '~/components/AppLogo.vue'
export default {
  components: {
    AppLogo
  },
  data () {
    return {
      showBox:false
    }
  },
  mounted() {
  },
  methods: {
    showInput () {
      this.showBox = true
      this.$refs.ipt.focus()
      $('.search-ipt').trigger('click').focus()
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.btn-search{
  background: #35495e;
  color: #fff;
  outline: none;
  border: none;
  border-radius:10px;
  display: inline-block;
  width: 120px;
}
h1,h2,li{
  text-indent: 20px;
  margin-top: 10px;
}
[v-cloak]{
  display:none;
}
.box{
  position: relative;
  margin-left: 20px;
  margin-top: 40px;
  input{
    position: absolute;
    left: 0;
    top: 0;
  }
  p{
    position: absolute;
    left: 0;
    top: 0;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #fff;
  }
}
.show-box{
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right:0;
  bottom:0;
  position: fixed;
  background:rgba(0,0,0,.5);
  z-index: 2;
}
.show{
  display: block;
}
.hide{
  display: none;
}
.search-ipt{
  background: darkcyan;
  margin: 20px;
  z-index: 2;
  border: 1px solid #35495e;
}
</style>

