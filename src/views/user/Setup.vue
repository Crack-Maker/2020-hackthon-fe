<template>
	<div class="main-body">
		<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
			  position:absolute;left:0;top:0;z-index:100;">
			  			<div slot="overwrite-left" @click="handleBack()">
			  				<x-icon type="ios-arrow-back" size="30"></x-icon>
			  			</div>
		</x-header>
		<div class="main-info">
		  <br />
		  <div>
			<img style="height: 3.3rem;margin-left: 1rem;
			background-size: auto 100%;border-radius: 2rem;" align="left" src="../../../static/img/aiji.jpg"/>
		  </div>
		  <!-- 显示用户昵称 -->
		  <div class="name-font-style"><p>Refuel Island</p>
		  <div @click="linkToChangeName()" style="position: relative;right: -2.5rem;top: -1rem;">
			  <img src="../../../static/img/modify.png" /></div>
		  </div>
		  <div class="normal-font-size">Refuel Island的个性签名</div>
		  <div style="position: relative;left: -2.8rem;top: -1rem;">
			  <font size="2" color="#888888">换头像</font>
		  </div>
		</div>
		<div class="normal-font-size">
			<group>
				<cell title="账号登陆" @click.native="linkToLogin"></cell>
				<br />
				<cell title="账号设置" @click.native="linkToChangePassword"></cell>
				<br />
				<cell title="问题与反馈" @click.native="linkToFeedback"></cell>
				<br /><br /><br />
				<box class="exit-box">
					<x-button @click.native="linkToUser" class="exit-btn">退出</x-button>
				</box>
			</group>
		</div>
	</div>
</template>

<script>
import { Group, Cell, CellBox, Divider, Card, Box, XButton} from 'vux'
import { Grid, GridItem, GroupTitle } from 'vux'

export default {
  components: {
    Group,
    Cell,
    CellBox,
	Grid,
    GridItem,
    GroupTitle,
	Card,
	Divider,
	Box,
	XButton
  },
  methods:{
  	//页面跳转方法
  	linkToLogin(){
  		this.$router.push({
  			path:'/Login'
  		})
	},
	linkToChangeName(){
		this.$router.push({
			path:'/ChangeName'
		})
	},
	linkToChangePassword(){
		this.$router.push({
			path:'/ChangePassword'
		})
	},
	linkToUser(){
		this.$router.push({
			path:'/User'
		})
	},
	linkToFeedback(){
		this.$router.push({
			path:'/Feedback'
		})
	},
	handleBack() {
		 this.$router.go(-1)
	}
  }
}
</script>

<style scoped lang="less">
.main-body{
	background: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/bg-island.png)no-repeat !important;
	background-size:100% auto;
	/* 禁止页面拖动 */
	touch-action: none;
}
.main-info{
/* 	background: url(../../static/img/frank.svg)no-repeat;
	background-size:100% auto; */
	margin-top: -1rem;
}
.name-font-style{
	font-size: 0.7rem;
	font-family: zzgf, Arial;
	margin-top: 1rem;
}
.exit-btn {
  border-radius: 0;
  background-color: #667d3e !important;
  color: #FFFFFF;
  height: 1.5rem;
  line-height: 0;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 400;
}
.exit-box {
  background: #008000 !important;
}
.normal-font-size{
  font-size: 0.5rem;
  font-family: zzgf, Arial;
  color:#393A31;
}
</style>
