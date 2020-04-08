<template>
<div class="message-style">
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
		  position:absolute;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
			<div>
				<font size="2" color="#888888">——已来到岛遇XX天——</font>
			</div>
			<div slot="right" @click="linkSetup()">
				<img src="../../static/img/settings.svg"/>
			</div>
	</x-header>
	
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
	},
	linkSetup(){
		this.$router.push({
			path:'/Setup'
		})
	}
  }
}
</script>

<style>
.message-style{
	font-family: zzgf, Arial;
}
</style>
