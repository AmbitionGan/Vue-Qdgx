import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import news from '../components/news'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
        {
            path: '/news',
            name: 'news',
            component: news
        }
    ]
})
