import Vue from 'vue'
import Index from './Index'
import router from './router'
import Axios from 'axios'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/common.css'

require('./api/mock')

// Vue.use(VueJsonp)

Vue.prototype.$axios = Axios
// Axios.defaults.baseURL = '/api'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: {
    Index
  },
  render (h) {
    // return h('div',[h(App),h(App2)]) 渲染多个组件
    return h(Index)
  }
})
