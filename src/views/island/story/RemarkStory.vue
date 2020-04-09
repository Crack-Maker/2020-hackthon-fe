<template>
<div class="article-style">
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#F1F1F1;
		  position:fixed;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
	</x-header>
	<div style="margin-top: -0.5rem;"><h1></h1></div>
	 <card><div slot="content" class="card-padding-top" >
	 	 		<flexbox :gutter="0">
	 	 			<flexbox-item :span="1/4">
	 	 				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
	 	 				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar.png" />
	 	 			</flexbox-item>  
	 	 			<flexbox-item :span="5/16">
	 	 				<div style="width: 4.25rem;float: left;
	 	 				color:#000;font-size:0.5rem;">台词就很炫</div>
	 	 				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
	 	 				margin-top: 0.2rem; color:#999;">2020-4-8</p>
	 	 			</flexbox-item>
	 	 			<flexbox-item :span="7/16">
	 <!-- 	 				<div style="float: left; width: 3.75rem;text-align: right;
	 	 					font-size:0.2rem;color:#999;">2020-4-8
	 	 					<div class="join-btn">
	 	 						<x-button mini type="primary" class="join-btn-font">关注</x-button>
	 	 					</div>
	 	 				</div> -->
	 					<div class="focus">
	 					  <img src="../../../../static/img/focus.png"/>
	 					</div>
	 					<TabBarDemoRemark></TabBarDemoRemark>
	 	 			</flexbox-item>
	 	 		</flexbox>
	 	 		<div class="remark-style-top">							
	 	 			历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。</div>
	 	 	</div></card><br />
	 <flexbox orient="vertical">
	     <flexbox-item><div class="flex-demo"><card>
	 	<div slot="content" class="card-padding" >
	 		<flexbox :gutter="0">
	 			<flexbox-item :span="1/4">
	 				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
	 				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar.png" />
	 			</flexbox-item>  
	 			<flexbox-item :span="3/8">
	 				<div style="width: 4.25rem;float: left;
	 				color:#000;font-size:0.5rem;">台词就很炫</div>
<!-- 	 				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
	 				margin-top: 0.2rem; color:#999;">来自分享岛&nbsp;&nbsp;#爱情电影</p> -->
	 			</flexbox-item>
	 			<flexbox-item :span="3/8">
	 				<div style="float: left; width: 3.75rem;text-align: right;
	 					font-size:0.4rem;color:#999;" >135
	 						<img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/like1.png"/>
	 				</div>
	 			</flexbox-item>
	 		</flexbox>
	 		<div class="remark-style">								
	 			白雪公主疯狂逃亡，遇到了奥特曼</div>
			<div style="float: left; width: 3.75rem;text-align: left;
				font-size:0.4rem;color:#999;margin-top: 0.2rem;">2020-4-8
			</div>
	 	</div></card>
	 </div></flexbox-item>
	     <flexbox-item><card>
	 	<div slot="content" class="card-padding" >
	 		<flexbox :gutter="0">
	 			<flexbox-item :span="1/4">
	 				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
	 				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/aiji.jpg" />
	 			</flexbox-item>  
	 			<flexbox-item :span="3/8">
	 				<div style="width: 4.25rem;float: left;
	 				color:#000;font-size:0.5rem;">白雪姬</div>
<!-- 	 				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
	 				margin-top: 0.2rem; color:#999;">来自分享岛&nbsp;&nbsp;#爱情电影</p> -->
	 			</flexbox-item>
	 			<flexbox-item :span="3/8">
	 				<div style="float: left; width: 3.75rem;text-align: right;
	 					font-size:0.4rem;color:#999;" >126
	 						<img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/like1.png"/>
	 				</div>
	 			</flexbox-item>
	 		</flexbox>
	 		<div class="remark-style">								
	 			他来了他来了，啊我看到了爱情！！！</div>
			<div style="float: left; width: 3.75rem;text-align: left;
				font-size:0.4rem;color:#999;margin-top: 0.2rem;">2020-4-8
			</div>
	 	</div></card>
	  </flexbox-item>
	  <flexbox-item><div class="flex-demo"><card>
	  	 	<div slot="content" class="card-padding" >
	  	 		<flexbox :gutter="0">
	  	 			<flexbox-item :span="1/4">
	  	 				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
	  	 				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar.png" />
	  	 			</flexbox-item>  
	  	 			<flexbox-item :span="3/8">
	  	 				<div style="width: 4.25rem;float: left;
	  	 				color:#000;font-size:0.5rem;">台词就很炫</div>
	  <!-- 	 				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
	  	 				margin-top: 0.2rem; color:#999;">来自分享岛&nbsp;&nbsp;#爱情电影</p> -->
	  	 			</flexbox-item>
	  	 			<flexbox-item :span="3/8">
	  	 				<div style="float: left; width: 3.75rem;text-align: right;
	  	 					font-size:0.4rem;color:#999;" >135
	  	 						<img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/like1.png"/>
	  	 				</div>
	  	 			</flexbox-item>
	  	 		</flexbox>
	  	 		<div class="remark-style">								
	  	 			奥特曼和白雪公主在一起了,小怪兽怎么办?</div>
	  			<div style="float: left; width: 3.75rem;text-align: left;
	  				font-size:0.4rem;color:#999;margin-top: 0.2rem;">2020-4-8
	  			</div>
	  	 	</div></card>
	  	 </div></flexbox-item>
	  	     <flexbox-item><card>
	  	 	<div slot="content" class="card-padding" >
	  	 		<flexbox :gutter="0">
	  	 			<flexbox-item :span="1/4">
	  	 				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
	  	 				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/aiji.jpg" />
	  	 			</flexbox-item>  
	  	 			<flexbox-item :span="3/8">
	  	 				<div style="width: 4.25rem;float: left;
	  	 				color:#000;font-size:0.5rem;">白雪姬</div>
	  <!-- 	 				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
	  	 				margin-top: 0.2rem; color:#999;">来自分享岛&nbsp;&nbsp;#爱情电影</p> -->
	  	 			</flexbox-item>
	  	 			<flexbox-item :span="3/8">
	  	 				<div style="float: left; width: 3.75rem;text-align: right;
	  	 					font-size:0.4rem;color:#999;" >126
	  	 						<img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/like1.png"/>
	  	 				</div>
	  	 			</flexbox-item>
	  	 		</flexbox>
	  	 		<div class="remark-style">							
	  	 			奥特曼和白雪公主才是真爱,小怪兽是个意外</div>
	  			<div style="float: left; width: 3.75rem;text-align: left;
	  				font-size:0.4rem;color:#999;margin-top: 0.2rem;">2020-4-8
	  			</div>
	  	 	</div></card>
	  	  </flexbox-item>
	 </flexbox>
	 <br />
	 <InputArea></InputArea>
</div>
</template>

<script>
import { PopupRadio, Flexbox, FlexboxItem, Search, Card, ViewBox } from 'vux'
export default {
  components: {
	  PopupRadio,
	  Flexbox, 
	  FlexboxItem,
	  Search,
	  Card,
	  ViewBox
  },
  methods:{
  	//页面跳转方法
	handleBack() {
		this.$router.go(-1)
	}
  }
}
</script>

<style scoped lang="less">
.article-style{
	font-family: zzgf, Arial;
	font-size: 0.5rem;
	background: #F1F1F1;
	width: 100%;
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
.card-padding{
/* 	background: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/frank.svg)no-repeat; */
	background-size: auto 100%;
	background: #FFFFFF;
	padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}
.card-padding-top{
/* 	background: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/frank.svg)no-repeat; */
	background-size: auto 100%;
	background: #FFFFFF;
	padding: 0.5rem 0.5rem 0.5rem 0.5rem;
}
.story-class{
	font-size:0.5rem;
	line-height:1.2;
	text-align: right;
	margin-right: 0.2rem; 
	color:#999;
}
.focus{
	text-align: right;
	margin-bottom: -0.2rem;
}
.remark-style{
	font-size:0.5rem;
	line-height:1.2;
	margin-top: 0.2rem;
	text-align: left;
	background: url(../../../../static/img/storyFrank.png) !important;
	background-size: auto 100%; 
}
.remark-style-top{
	font-size:0.5rem;
	line-height:1.2;
	margin-top: 0.2rem;
	text-align: left;
}
</style>
