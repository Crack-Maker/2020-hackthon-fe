<template>
  <div>
	  <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;" :right-options="{showMore: true}"
		@on-click-more="showMenus = true">回忆之岛</x-header>
	  <h1>这里是第三座岛</h1>
  </div>
</template>

<script>
import { XHeader } from 'vux'
export default {
  name: "Home",
  components: {
	  XHeader
  }
}
</script>

<style>
</style>
