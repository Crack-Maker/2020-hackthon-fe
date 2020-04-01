import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/views/LogIn.vue'
import Home from '@/views/Home.vue'
import Regist from '@/views/Regist.vue'
import User from '@/views/User.vue'
import TabBarDemo from '@/components/TabBarDemo.vue'
import DrawerDemo from '@/components/DrawerDemo.vue'
import IsLand1 from '@/views/island/IsLand1.vue'
import IsLand2 from '@/views/island/IsLand2.vue'
import IsLand3 from '@/views/island/IsLand3.vue'

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
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path:'/regist',
      name:'regist',
      component:Regist
    },
    {
      path: '/island1',
      name: 'isLand1',
      component: IsLand1
    },
    {
      path: '/island2',
      name: 'isLand2',
      component: IsLand2
    },
    {
      path: '/island3',
      name: 'isLand3',
      component: IsLand3
    }
  ]
})
