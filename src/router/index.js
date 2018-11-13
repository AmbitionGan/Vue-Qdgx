import Vue from 'vue'
import Router from 'vue-router'
import WebIndex from '@/components/WebIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WebIndex',
      component: WebIndex
    }
  ]
})
