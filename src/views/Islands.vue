<template>
  <div>
	  <x-header :left-options="{showBack: false}" style="width:100%;
	  position:absolute;left:0;top:0;z-index:100;">岛屿</x-header>
	  <br />
	  <island-slider></island-slider>
	  <br />
	  <div class="normal-font-size">
		<p>滑动选择小岛</p>
	  </div>
  </div>
</template>
<script>
import { XHeader, Masker } from 'vux'
import DrawerDemo from '../components/DrawerDemo.vue'
import IslandSlider from '../components/IslandSlider.vue'

export default {
  name: "Islands",
  components: {
	  XHeader,
	  DrawerDemo,
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
.normal-font-size{
  font-size: 0.65rem;
}
</style>

