<template>
  <div class="island1-background">
	  <x-header :left-options="{showBack: false}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
	  position:absolute;left:0;top:0;z-index:100;">
	  			<div slot="overwrite-left" @click="linkToIslands()">
	  				<img src="../../../static/img/设置.svg"/>
	  			</div>
	  </x-header>
	   <div class="island1-title">
		   故事岛
	   </div>
	   <div @click="linkToCreate()" class="create-icon">
			<x-icon type="ios-plus" size="50"></x-icon>
	   </div>
	  <TabBarDemoIsland></TabBarDemoIsland>
  </div>
</template>

<script>
import { XTextarea, Group, XInput, XButton, PopupRadio  } from 'vux'
import { AlertModule, Alert, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'
export default {
  name: "Home",
  directives: {
    TransferDom
  },
  components: {
		XTextarea,
		Group,
		XInput,
		XButton,
		Cell,
		Alert,
		XSwitch,
		PopupRadio
  },
  data () {
    return {
		
    }
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    },
	linkToCreate(){
		this.$router.push({
			path:'/Create'
		})
	},
	linkToIslands(){
		this.$router.push({
			path:'/Islands'
		})
	}
  }
}
</script>

<style scoped>
.island1-background {
  background-image: url(../../assets/imgs/bg-island.png) !important;
  background-repeat: no-repeat;
  background-position: 4.5rem 0rem;
  background-size: 8rem;
}
.island1-title{
	position: relative;
	left: -2.5rem;
	top: 1rem;
	color: #393A31;
	font-size: 1.2rem;
	letter-spacing: 0.1rem;
	font-family: zzgf, Arial;
	font-weight: 800;
}
.create-icon{
	position: relative;
	top: 1rem;
	left: -2.6rem;
}
.vux-x-icon {
  fill: #F70968;
}
.cell-x-icon {
  display: block;
  fill: green;
}
</style>