<template>
  <div>
    <tabbar>
      <tabbar-item>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Wechat</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Message</span>
      </tabbar-item>
      <tabbar-item selected>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">Explore</span>
      </tabbar-item>
      <tabbar-item>
        <img slot="icon" src="../assets/logo.png">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  name: "tabBarDemo",
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style scoped>
  .weui-tabbar {
    position: fixed;
  }
</style>