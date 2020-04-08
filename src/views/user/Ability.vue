<template>
  <div class="normal-font-size">
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
		  position:absolute;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
	</x-header>
	 <br />
	<div>
		<p>见识:{{someList[0].percent*2.5}}</p>
		<x-progress :percent="someList[0].percent"></x-progress>
		<x-progress :percent="someList[0].percent"></x-progress>
		<x-progress :percent="someList[0].percent"></x-progress>
		<x-progress :percent="someList[0].percent"></x-progress>
		<br />
	</div>
    <div>
    	<p>创造力:{{someList[1].percent*2.5}}</p>
    	<x-progress :percent="someList[1].percent"></x-progress>
    	<x-progress :percent="someList[1].percent"></x-progress>
    	<x-progress :percent="someList[1].percent"></x-progress>
    	<x-progress :percent="someList[1].percent"></x-progress>
		<br />
    </div>
	<div>
		<p>凝聚力:{{someList[2].percent*2.5}}</p>
		<x-progress :percent="someList[2].percent"></x-progress>
		<x-progress :percent="someList[2].percent"></x-progress>
		<x-progress :percent="someList[2].percent"></x-progress>
		<x-progress :percent="someList[2].percent"></x-progress>
		<br />
	</div>
  </div>
</template>

<script>
import { XProgress, Box } from 'vux'
import { XHeader } from 'vux'

export default {
  components: {
    XProgress,
    Box,
	XHeader
  },
  data () {
    return {
      someList:[{
			percent:45
		},{
			percent:65
		},{
		  	percent:50
		}]
    }
  },
  methods:{
	  handleBack() {
	  	this.$router.go(-1)
	}
  }
}
</script>

<style scoped lang="less">
.normal-font-size{
  font-size: 0.8rem;
  text-align: left;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>
