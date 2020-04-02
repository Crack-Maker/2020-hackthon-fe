<template>
  <div>
      <tabbar slot="bottom" class="footerGuide">
        <tabbar-item :link="{path:'/User'}" :selected="isLogin" badge="9">
          <img slot="icon" src="../assets/logo.png" />
          <span slot="label">推荐</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/'}" selected>
          <img slot="icon" src="../assets/logo.png"/>
          <span slot="label">岛屿</span>
        </tabbar-item>
        <tabbar-item :link="{path:'/User'}" :selected="isLogin" badge="1">
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
      isLogin: false
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