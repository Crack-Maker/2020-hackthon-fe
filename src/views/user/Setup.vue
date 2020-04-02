<template>
	<div>
		<group>
			<br /><br /><br /><br /><br />
			<cell title="账号登陆" @click.native="handleLogin"></cell>
			<br />
			<cell title="退出" ></cell>
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
  	handleLogin(){
  		this.$router.push({
  			path:'/Login'
  		})
	}
  }
}
</script>

<style>
</style>
