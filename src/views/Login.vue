<template>
	<div class="login" style="width: 100%;">
		<x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;" :right-options="{showMore: true}"
		 @on-click-more="showMenus = true">账号登陆</x-header>
		<group>
	      <x-input title="" name="phone" placeholder="请输入手机号码" 
		  v-model="phone" keyboard="number" is-type="china-mobile" required></x-input>
	      <x-input title="" type="text" placeholder="请输入密码" 
		  v-model="password" :min="6" :max="16" @on-change="change" required></x-input>
	    </group>
	    <box gap="10px 25px">
	    	<x-button type="primary" @click.native="handleLogin">登录</x-button>
	    	<x-button @click.native="handleRegist">注册</x-button>
<!-- 			<p><span class="to-regist">还没有账号？快去注册</span></p> -->
	    </box>
		<div class="forget-pass">忘记密码?</div>
	</div>
</template>

<script>
	import { XInput,Box, Group, XButton } from 'vux'
	export default {
		name: 'login',
		data() {
			return {
				phone:'',//用户手机号
				password:'',//用户密码
			}
		},
		components: {
		    XInput,
		    XButton,
		    Group,
		    Box
		},
		methods:{
			change (val) {
		      console.log('on change', val)
			},
			//暂时设置回到user.vue界面
			handleLogin(){
				this.$router.push({
					path:'/User'
				})
			},
			handleRegist(){
				this.$router.push({
					path:'/Regist'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	// @color666:#666666;
	// @color393a31:#393a31;
	.input-box{
		background-color: #FFFFFF;
	}
	// .login{
	// 	>p:first-of-type{
	// 		padding: 20px 15px 40px;
	// 		float: right;
	// 		color: @color666;
	// 		font-size:14px;
	// 	}
	// 	>p:last-of-type{
	// 		width: 100%;
	// 		text-align: center;
	// 		color: @color393a31;
	// 		font-size:14px;
	// 		position: absolute;
	// 		bottom: 25px;
	// 	}
  // }
  .forget-pass {
    font-size: 0.45rem;
    text-align: center;
  }
</style>