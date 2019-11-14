import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/components/lm-rank.vue'
import Index from '@/pages/index.vue'
import Home from '@/pages/home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/home',
      name: '个人中心',
      component: Home
    }
  ]
})
