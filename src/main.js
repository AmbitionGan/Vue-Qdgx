import Vue from 'vue'
import Index from './Index'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/common.css'

require('./api/mock')

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {
    Index
  },
  render (h) {
    // return h('div',[h(App),h(App2)]) 渲染多个组件
    return h(Index)
  }
})
