<template>
  <div class="home-style">
	<x-header :left-options="{showBack: false}" :right-options="{showMore: false}" style="width:100%;background-color:#FFFFFF ;
	position:fixed;left:0;top:0;z-index:100;">
		<div slot="overwrite-left" @click="linkMessage()">
			<img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/message.png"/>
		</div>
	</x-header>
	<HomeSlider></HomeSlider>
	<div class="island2-content">
		<flexbox orient="vertical">
			<flexbox-item>
				<div class="flex-demo"><card>
					<div slot="content" class="card-padding">
						<flexbox :gutter="0">
							<flexbox-item :span="1/4">
								<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
								background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar.png" />
							</flexbox-item>  
							<flexbox-item :span="3/8">
								<div style="width: 4.25rem;float: left;
								color:#000;font-size:0.5rem;">台词就很炫</div>
								<p style="font-size:0.35rem;line-height:1.2;text-align: left;
								margin-top: 0.2rem; color:#999;">来自分享岛&nbsp;&nbsp;#爱情电影</p>
							</flexbox-item>
							<flexbox-item :span="3/8">
								<div style="float: left; width: 3.75rem;text-align: right;
									font-size:0.2rem;color:#999;">2020-4-8
									<div class="join-btn">
										<FocusButton></FocusButton>
										<!-- <x-button mini type="primary" class="join-btn-font">关注</x-button> -->
									</div>
								</div>
							</flexbox-item>
						</flexbox>
						<div class="article-content" @click="linkArticle()">
							<p>
								历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。
							</p>
							<img style="height: 3rem;margin-left: 0rem;background-size: auto 100%;"
							 align="middle" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/photo1.png" />
						</div>					
						<TabBarDemoRemark></TabBarDemoRemark>
					</div></card>
				</div>
			</flexbox-item>
			<flexbox-item>
				<div class="flex-demo"><card>
					<div slot="content" class="card-padding" >
						<flexbox :gutter="0">
							<flexbox-item :span="1/4">
								<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
								background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/aiji.jpg" />
							</flexbox-item>  
							<flexbox-item :span="3/8">
								<div style="width: 4.25rem;float: left;
								color:#000;font-size:0.5rem;">安达垣爱姬</div>
								<p style="font-size:0.35rem;line-height:1.2;text-align: left;
								margin-top: 0.2rem; color:#999;">来自分享岛&nbsp;&nbsp;#爱情电影</p>
							</flexbox-item>
							<flexbox-item :span="3/8">
								<div style="float: left; width: 3.75rem;text-align: right;
									font-size:0.2rem;color:#999;">2020-4-8
									<div class="join-btn">
										<!-- <x-button mini type="primary" class="join-btn-font">关注</x-button> -->
										<FocusButton></FocusButton>
									</div>
								</div>
							</flexbox-item>
						</flexbox>
						<div class="article-content" @click="linkArticle()">
							<p>
								历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。
							</p>
							<img style="height: 3rem;margin-left: 0rem;background-size: auto 100%;"
							 align="middle" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/photo1.png" />
						</div>	
						<TabBarDemoRemark></TabBarDemoRemark>
					</div></card>
				</div>
			</flexbox-item>
	   	</flexbox>			
	</div>
	<br />
	<TabBarDemo></TabBarDemo>
  </div>
</template>
<script>
import { PopupRadio, Flexbox, FlexboxItem, Search, Card, ViewBox } from 'vux'
import DrawerDemo from '../components/DrawerDemo.vue'
import HomeSlider from '../components/HomeSlider.vue'

export default {
	name: "Islands",
	components: {
		DrawerDemo,
		HomeSlider,
		PopupRadio,
		Flexbox, 
		FlexboxItem,
		Search,
		Card,
		ViewBox
	},
	methods: {
		 linkMessage(){
		 	this.$router.push({
		 		path:'/Message'
		 	})
		},
		linkArticle(){
		 	this.$router.push({
		 		path:'/Article'
		 	})
		}
	},
	data () {
		return {
		}
	}
}

</script>

<style scoped lang="less">
.home-style{
	font-family: zzgf, Arial !important;
	width: 100%;
}
.m-img {
  // padding-bottom: 33%;
  padding-bottom: 45%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 0.8rem;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 0.6rem;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
.normal-font-size{
	font-size: 0.5rem;
}
.island2-content{
	position: relative;
/* 	left: -2.5rem; */
	top: 0rem;
	color: #393A31;
	font-size: 1.2rem;
	letter-spacing: 0.1rem;
	font-family: zzgf, Arial;
	font-weight: 800;
}
.create-icon{
/* 	position: absolute;
	right: -0.2rem;
	z-index: 1rem; */
/* 	position: absolute; */
	width: 50px;
	height: 50px;
	border-radius: 50%;
	z-index: 500;
	float: right;
/* 	right: -5rem !important; */
}
.join-btn{
	position: relative;
/* 	left: 1rem;
	bottom: 0.6rem; */
}
.join-btn-font{
	letter-spacing: 0.1rem;
	font-family: zzgf, Arial;
	font-weight: 800;
}
.card-padding{
/* 	background: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/frank.svg)no-repeat; */
	background-size: auto 100%;
	height: 7rem;
	padding: 0.5rem 0.5rem 0.6rem 0.5rem;
}
.article-content{
	font-size:0.2rem;
	line-height:1.2;
	margin-top: 0.2rem;
}
</style>

