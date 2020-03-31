import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Tabbardemo from '@/components/Tabbar-demo.vue'
import Drawerdemo from '@/components/Drawer-demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
      // children: [
      //   {
      //     path: '/',
      //     component: UserProfile
      //   },
      // ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/tabbar',
      name: 'tabbar-demo',
      component: Tabbardemo
    },
    {
      path: '/drawer',
      name: 'drawer-demo',
      component: Drawerdemo
    }
  ]
})
