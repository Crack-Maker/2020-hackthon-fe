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
				<img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/settings.svg"/>
			</div>
	</x-header>
	<group>
			<cell-box is-link @click.native="showMessage" style="margin-left: 1rem;height: 2rem;">
				<img src="../../static/img/message1.png"/>&nbsp;&nbsp;&nbsp;我的好友		
			</cell-box>
			<cell-box is-link @click.native="showMessage" style="margin-left: 1rem;height: 2rem;">
				<img src="../../static/img/message2.png"/>&nbsp;&nbsp;&nbsp;我的属性
			</cell-box>
			<cell-box is-link @click.native="showMessage" style="margin-left: 1rem;height: 2rem;">
				<img src="../../static/img/message3.png"/>&nbsp;&nbsp;&nbsp;秘密の岛
			</cell-box>
	</group>
</div>
</template>

<script>
import { Group, Cell, CellBox, ToastPlugin, Toast } from 'vux'
export default {
  components: {
	  Group,
	  Cell,
	  CellBox,
	  ToastPlugin,
	  Toast
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
	},
	showMessage(){
		// this.$vux.toast.show({
		//  text: '1'
		// })
	}
  }
}
</script>

<style>
.message-style{
	font-family: zzgf, Arial;
}
</style>
