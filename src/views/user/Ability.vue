<template>
  <div class="ability-style">
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
		  position:absolute;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
	</x-header>
	<div class="title-2">我的属性</div>
	<div class="img-style">
		<img  style="margin-left: -1rem;margin-top: -3rem;z-index: -100;
		  background-size: 100% auto" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/card1.png"/>
    	<img  style="margin-left: -1rem;margin-top: -0.5rem;z-index: -300;
		  background-size: 100% auto" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/card2.png"/>
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
.ability-style{
  font-size: 0.8rem;
  text-align: left;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  // background: #985148;
}
.img-style{
	margin-top: 2rem;
	z-index: -100;
	position:relative
}
.title-2 {
  letter-spacing: 0.1rem;
  margin-left: 0.8rem;
  margin-top: 0.5rem !important;
  font-size: 0.75rem;
  font-family: "Noto Sans CJK SC", "Source Han Sans CN";
  font-weight: 1000;
  text-align: left;
  color: #667d3e;
  z-index: 100;
  float: left;
  position:absolute
}
</style>
