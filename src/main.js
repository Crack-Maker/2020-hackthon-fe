// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { XHeader } from 'vux'
import { XButton } from 'vux'
import '../static/font/font.css'
import TabBarDemo from './components/TabBarDemo.vue'
import TabBarDemoIsland from './components/TabBarDemoIsland.vue'
import TabBarDemoUser from './components/TabBarDemoUser.vue'
import TabBarDemoRemark from './components/TabBarDemoRemark.vue'
import InputArea from './components/InputArea.vue'
import VueI18n from 'vue-i18n'

Vue.config.productionTip = false
//全局注册
Vue.component("XHeader", XHeader);
Vue.component("XButton", XButton);
Vue.component("TabBarDemo", TabBarDemo);
Vue.component("TabBarDemoIsland", TabBarDemoIsland);
Vue.component("TabBarDemoUser", TabBarDemoUser);
Vue.component("TabBarDemoRemark", TabBarDemoRemark);
Vue.component("InputArea", InputArea);

Vue.use(VueI18n) // 通过插件的形式挂载
 
const i18n = new VueI18n({
    locale: 'zh-CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
      // 'zh-CN': require('./common/lang/zh'),   // 中文语言包
      // 'en-US': require('./common/lang/en')    // 英文语言包
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
