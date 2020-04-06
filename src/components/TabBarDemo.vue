<template>
  <div>
      <tabbar slot="bottom" class="footerGuide">
        <tabbar-item :link="{path:'/'}" selected>
          <img slot="icon" src="../assets/logo.png" />
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/Islands'}">
          <img slot="icon" src="../assets/logo.png"/>
          <span slot="label">岛屿</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/User'}" badge="1">
          <img slot="icon" src="../assets/logo.png" />
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, ViewBox } from "vux";

export default {
  name: "TabBarDemo",
  data() {
    return {
      isLogin: false,
	  // list:[{
		 //  img: require("../../assets/image/homePage-1.png"),
		 //  active: require("../../assets/image/homePage.png")
	  // },{
		 //  img: require("../../assets/image/homePage-1.png"),
		 //  active: require("../../assets/image/homePage.png")
	  // },{
		 //  img: require("../../assets/image/homePage-1.png"),
		 //  active: require("../../assets/image/homePage.png")
	  // }]
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  }
};
</script>
<style scoped>
.footerGuide {
  position: fixed;
}
</style>