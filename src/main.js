// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { XHeader } from 'vux'
import '../static/font/font.css'
import TabBarDemo from './components/TabBarDemo.vue'
import TabBarDemoIsland from './components/TabBarDemoIsland.vue'
import TabBarDemoUser from './components/TabBarDemoUser.vue'

Vue.config.productionTip = false
//全局注册
Vue.component("XHeader", XHeader);
Vue.component("TabBarDemo", TabBarDemo);
Vue.component("TabBarDemoIsland", TabBarDemoIsland);
Vue.component("TabBarDemoUser", TabBarDemoUser);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
