<template>
<div>
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
		  position:absolute;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
	</x-header>
	 <div class="feedback-font-size">
		<p>欢迎致电10086，联通客服为您服务</p>
	 </div>
	 <TabBarDemoUser></TabBarDemoUser>
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

<style scoped lang="less">
.login {
  background-image: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/bg-island.png);
  background-repeat: no-repeat;
  background-position: 4.5rem 0rem;
  background-size: 8rem;
}
.feedback-font-size{
  margin-top: 7.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 400;
}
</style>
