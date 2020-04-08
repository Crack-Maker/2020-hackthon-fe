<template>
<div>
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
		  position:absolute;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
	</x-header>
	好友
</div>
</template>

<script>
export default {
  components: {
  },
  methods:{
  	//页面跳转方法
	handleBack() {
		this.$router.go(-1)
	}
  }
}
</script>

<style>
</style>
