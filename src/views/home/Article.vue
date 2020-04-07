<template>
<div>
	<x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;" :right-options="{showMore: false}"
	 @on-click-more="showMenus = true">文章</x-header>
	 <div class="feedback-font-size">
		<p>这里是未完成前后端交互的文章界面</p>
	 </div>
	 <TabBarDemoUser></TabBarDemoUser>
</div>
</template>

<script>
</script>

<style scoped lang="less">
.login {
  background-image: url(../../assets/imgs/bg-island.png);
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

