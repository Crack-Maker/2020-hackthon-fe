<template>
  <div class="background-color">
	  <x-header :left-options="{showBack: false}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
	  position:absolute;left:0;top:0;z-index:100;">
	  			<div slot="overwrite-left">
	  				<img src="../../static/img/消息.png"/>
	  			</div>
	  </x-header>
	  <br />
	  <island-slider></island-slider>
	  <br />
	  <div class="normal-font-size">
		<p>滑动选择小岛</p>
	  </div>
	  <TabBarDemoIsland></TabBarDemoIsland>
  </div>
</template>
<script>
import { XHeader, Masker } from 'vux'
import IslandSlider from '../components/IslandSlider.vue'

export default {
  name: "Islands",
  components: {
	  XHeader,
	  Masker,
	  IslandSlider
  },
  // 接受App.vue传递过来的reload方法
  inject:	['reload'],
  // 将方法提供给下层组件
  provide(){
  	  return{
  		  reload: this.reload
  	  }
  },
  data () {
    return {
      list: [{
        
      }]
    }
  }
}
</script>

<style scoped lang="less">
.background-color{
  // background-color: #7EEA19;
  // height: 100%;
}
.normal-font-size{
  color: #888888;
  font-size: 0.5rem;
	font-family: zzgf, Arial !important;
}
</style>

