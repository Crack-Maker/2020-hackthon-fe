<template>
  <div>
  <DrawerDemo></DrawerDemo>
  <TabBarDemo></TabBarDemo>
  </div>
</template>
<script>
// import {  } from 'vux'
import TabBarDemo from '@/components/TabBarDemo.vue'
import DrawerDemo from '@/components/DrawerDemo.vue'
export default {
  name: "home",
  components: {
    TabBarDemo,
    DrawerDemo
  }
}
</script>
<style scoped>

</style>