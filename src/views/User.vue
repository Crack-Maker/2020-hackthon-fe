<template>
	<div>
<!-- 	  <h1>这里是User界面</h1> -->
	  <span>
	  	<router-link to="/Login">登陆</router-link>
	  </span>
<!-- 	  <group-title>2 columns</group-title> -->
	      <grid>
			<div @click="linkFriend()">
				<grid-item>
					<img slot="icon" src="../assets/logo.png">关注
				</grid-item>
			</div>
			<div>
				<grid-item>
					<img slot="icon" src="../assets/logo.png">被关注
				</grid-item>
			</div>
	      </grid>
      <group>
		<cell-box is-link>属性</cell-box>
		<cell-box is-link>收藏夹</cell-box>
		<cell-box is-link @click.native="linkFriend">好友列表</cell-box>
        <cell-box is-link @click.native="linkHistory">最近浏览</cell-box>
		<cell-box is-link>统计数据</cell-box>
<!-- 		<cell title="统计数据" value="来岛时间,写下的故事" is-link @click.native="linkFriend"></cell> -->
      </group>
	</div>
</template>

<!-- <i18n>
Grid:
  zh-CN: 九宫格
Go to Cell:
  zh-CN: 跳转到Cell
Custom content:
  zh-CN: 自定义内容
Custom col:
  zh-CN: 自定义列
</i18n> -->

<script>
import { Group, Cell, CellBox } from 'vux'
import { Grid, GridItem, GroupTitle } from 'vux'


export default {
  components: {
    Group,
    Cell,
    CellBox,
	Grid,
    GridItem,
    GroupTitle	
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
  	}
  }
}
</script>

<style>
</style>

<style scoped>
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.weui-grids {
  background-color: #fff;
}
</style>