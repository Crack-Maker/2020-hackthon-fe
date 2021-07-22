import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Regist from '@/views/Regist.vue'
import User from '@/views/User.vue'
import Islands from '@/views/Islands.vue'
import TabBarDemo from '@/components/TabBarDemo.vue'
import DrawerDemo from '@/components/DrawerDemo.vue'
import Island1 from '@/views/island/Island1.vue'
import Island2 from '@/views/island/Island2.vue'
import Island3 from '@/views/island/Island3.vue'
import Setup from '@/views/user/Setup.vue'
import Ability from '@/views/user/Ability.vue'
import History from '@/views/user/History.vue'
import Friend from '@/views/user/Friend.vue'
import MyFocus from '@/views/user/MyFocus.vue'
import Collect from '@/views/user/Collect.vue'
import Create from '@/views/island/story/Create.vue'
import ChangeName from '@/views/user/setup/ChangeName.vue'
import ChangePassword from '@/views/user/setup/ChangePassword.vue'
import Feedback from '@/views/user/setup/Feedback.vue'
import CreateTopic from '@/views/island/shareAndSecret/CreateTopic.vue'
import Article from '@/views/home/Article.vue'
import Message from '@/views/Message.vue'
import AllStory from '@/views/island/story/AllStory.vue'
import JoinStory from '@/views/island/story/JoinStory.vue'
import RemarkStory from '@/views/island/story/RemarkStory.vue'
import RemarkShare from '@/views/island/shareAndSecret/RemarkShare.vue'
import RemarkSecret from '@/views/island/shareAndSecret/RemarkSecret.vue'
import Opening from '@/views/Opening.vue'

Vue.use(Router)

// 解决重复点击url报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
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
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/Island1',
      name: 'Island1',
      component: Island1
    },
    {
      path: '/Islands',
      name: 'Islands',
      component: Islands
    },
    {
      path: '/Island2',
      name: 'Island2',
      component: Island2
    },
    {
      path: '/Island3',
      name: 'Island3',
      component: Island3
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
    },
	{
	  path: '/Create',
	  name: 'Create',
	  component: Create
	},
	{
	  path: '/ChangeName',
	  name: 'ChangeName',
	  component: ChangeName
	},
	{
	  path: '/ChangePassword',
	  name: 'ChangePassword',
	  component: ChangePassword
	},
	{
	  path: '/Feedback',
	  name: 'Feedback',
	  component: Feedback
	},
	{
	  path: '/CreateTopic',
	  name: 'CreateTopic',
	  component: CreateTopic
	},
	{
	  path: '/Article',
	  name: 'Article',
	  component: Article 
	},
	{
	  path: '/Message',
	  name: 'Message',
	  component: Message
	},
	{
	  path: '/AllStory',
	  name: 'AllStory',
	  component: AllStory 
	},
	{
	  path: '/JoinStory',
	  name: 'JoinStory',
	  component: JoinStory
	},
	{
	  path: '/RemarkStory',
	  name: 'RemarkStory',
	  component: RemarkStory
	},
	{
	  path: '/RemarkShare',
	  name: 'RemarkShare',
	  component: RemarkShare
	},
	{
	  path: '/RemarkSecret',
	  name: 'RemarkSecret',
	  component: RemarkSecret
	},
	{
	  path: '/Opening',
	  name: 'Opening',
	  component: Opening
	}
    // {
    //   path: '/',
    //   name: '',
    //   component: 
    // },
  ]
})
