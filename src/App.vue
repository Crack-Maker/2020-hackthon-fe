<template>
  <div id="app" style="height:100%;">
	 <div>
		 <router-view v-if="isRouterAlive"></router-view>
<!-- 		 <TabBarDemo></TabBarDemo> -->
	 </div>
  </div>
</template>

<script>
import TabBarDemo from './components/TabBarDemo.vue'
import DrawerDemo from './components/DrawerDemo.vue'

export default {
  provide(){
	  return{
		  reload: this.reload
	  }
  },
  components: { 
	TabBarDemo,
	DrawerDemo
	},
  data () {
      return {
        isRouterAlive:true
      }
    },
  methods:{
	  reload(){
		  this.isRouterAlive = false
		  this.$nextTick(function(){
			  this.isRouterAlive = true
		  })
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



