// eslint-disable-next-line import/no-duplicates
import Vue from 'vue'
import App from './App'

import Axios from 'axios'
import './mock.js'
Vue.prototype.$axios = Axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
