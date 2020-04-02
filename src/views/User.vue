<template>
	<div>
	  <div>
		  <img style="height: 1.5rem;margin-left: 1rem;" align="left" src="../assets/logo.png"/>
		  <!-- 显示用户昵称 -->
		  <div style="font-size: 0.7rem;">岛遇初代目</div>
		  <div class="normal-font-size">已来到岛遇XX天,累计发布X条内容</div>
		  <br/>
	  </div>
	<!-- 引入卡片组件 -->
<!-- <divider>{{ $t('Simple card with header and content') }}</divider>
	   <card :header="{title: $t('My wallet')}"> -->
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
			<div class="normal-font-size" @click="linkFriend()">
			  <span>1130</span>
			  <br/>好友
			</div>
        </div>
        <div class="vux-1px-r">
			<div class="normal-font-size">
			  <span>15</span>
			  <br/>关注
			</div>
        </div>
        <div class="vux-1px-r">
			<div class="normal-font-size">
			  <span>1</span>
			  <br/>收藏
			</div>
        </div>
      </div>
<!-- 	  暂时注释掉grid组件,以后根据设计需求再作调整 -->
<!-- 	      <grid class="grid-font-style">
			<div @click="linkFriend()">
				<grid-item>
					<img slot="icon" src="../assets/logo.png"><p>关注</p>
				</grid-item>
			</div>
			<div>
				<grid-item>
					<img slot="icon" src="../assets/logo.png">被关注
				</grid-item>
			</div>
	      </grid> -->
      <group>
		<cell-box is-link>我的属性</cell-box>
        <cell-box is-link @click.native="linkHistory">最近浏览</cell-box>
		<cell-box is-link @click.native="linkSetup">我的设置</cell-box>
      </group>
	</div>
</template>

<script>
import { Group, Cell, CellBox, Divider, Card} from 'vux'
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
	Divider
  },
  methods:{
  	//页面跳转方法
  	linkFriend(){
  		this.$router.push({
  			path:'/'
  		})
  	},
  	linkHistory(){
  		this.$router.push({
  			path:'/'
  		})
  	},
	linkSetup(){
		this.$router.push({
			path:'/Setup'
		})
	},
  }
}
</script>

<!-- 引入card组件的样式 -->
<style scoped lang="less">
@import '~vux/src/styles/1px.less';
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>

<style scoped>
.normal-font-size{
  font-size: 0.5rem;
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.grid-font-style{
	font-size: 0.48rem;
}
.weui-grids {
  background-color: #fff;
}
</style>