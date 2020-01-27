import Vue from 'vue'
import Router from 'vue-router'
// import live from '@/views/live'
// import playback from '@/views/playback'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/views/home')
  }]
})