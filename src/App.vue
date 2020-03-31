<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'PingFangSC', arial, sans-serif;
}

* {
  padding: 0;
  margin: 0;
}
</style>
<style lang="less">
  @import '~vux/src/styles/reset.less';
</style>
