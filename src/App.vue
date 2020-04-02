<template>
  <div id="app" style="height:100%;">
<!-- 	 <DrawerDemo></DrawerDemo> -->
	 <div>
		 <router-view></router-view>
		 <TabBarDemo></TabBarDemo>
	 </div>
  </div>
</template>

<script>
import { Radio, Group, Cell, Badge, Drawer, Actionsheet, 
		 ButtonTab, ButtonTabItem, ViewBox, XHeader, Tabbar, 
		 TabbarItem, Loading, TransferDom} from 'vux'
import TabBarDemo from './components/TabBarDemo.vue'
import DrawerDemo from './components/DrawerDemo.vue'
export default {
  components: { 
	  TabBarDemo,
	  DrawerDemo,
	  Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet
	},
  data () {
      return {
        msg: 'Hello Vue!'
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<!-- 使用vux -->
<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>

<style scoped>
</style>



