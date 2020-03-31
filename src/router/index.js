import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/views/LogIn.vue'
import Home from '@/views/Home.vue'
import TabBarDemo from '@/components/TabBarDemo.vue'
import DrawerDemo from '@/components/DrawerDemo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      name: 'logIn',
      component: LogIn
    },
    {
      path: '/tabbar',
      name: 'tabBarDemo',
      component: TabBarDemo
    },
    {
      path: '/drawer',
      name: 'drawerDemo',
      component: DrawerDemo
    }
  ]
})
