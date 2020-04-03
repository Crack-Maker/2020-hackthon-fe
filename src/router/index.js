import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/views/LogIn.vue'
import Home from '@/views/Home.vue'
import Regist from '@/views/Regist.vue'
import User from '@/views/User.vue'
import Islands from '@/views/Islands.vue'
import TabBarDemo from '@/components/TabBarDemo.vue'
import DrawerDemo from '@/components/DrawerDemo.vue'
import IsLand1 from '@/views/island/IsLand1.vue'
import IsLand2 from '@/views/island/IsLand2.vue'
import IsLand3 from '@/views/island/IsLand3.vue'
import Setup from '@/views/user/Setup.vue'
import Ability from '@/views/user/Ability.vue'
import History from '@/views/user/History.vue'
import Friend from '@/views/user/Friend.vue'
import MyFocus from '@/views/user/MyFocus.vue'
import Collect from '@/views/user/Collect.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/TabBarDemo',
      name: 'TabBarDemo',
      component: TabBarDemo
    },
    {
      path: '/DrawerDemo',
      name: 'DrawerDemo',
      component: DrawerDemo
    },
    {
      path: '/User',
      name: 'User',
      component: User
    },
    {
      path:'/Regist',
      name:'Regist',
      component:Regist
    },
    {
      path: '/IsLand1',
      name: 'IsLand1',
      component: IsLand1
    },
	{
      path: '/Islands',
      name: 'Islands',
      component: Islands
    },
    {
      path: '/IsLand2',
      name: 'IsLand2',
      component: IsLand2
    },
    {
      path: '/IsLand3',
      name: 'IsLand3',
      component: IsLand3
    },
	{
	  path: '/Setup',
	  name: 'Setup',
	  component: Setup
	},
	{
	  path: '/Ability',
	  name: 'Ability',
	  component: Ability
	},
	{
	  path: '/History',
	  name: 'History',
	  component: History
	},
	{
	  path: '/Friend',
	  name: 'Friend',
	  component: Friend
	},
	{
	  path: '/MyFocus',
	  name: 'MyFocus',
	  component: MyFocus 
	},
	{
	  path: '/Collect',
	  name: 'Collect',
	  component: Collect 
	}
	// {
	//   path: '/',
	//   name: '',
	//   component: 
	// },
  ]
})
