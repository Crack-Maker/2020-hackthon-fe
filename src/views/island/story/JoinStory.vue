<template>
<div class="article-style">
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#F5F5F5 ;
		  position:absolute;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
			<div slot="right" @click="linkAllStory()">
				<img style="margin-top: -1rem;" src="../../../../static/img/seeAll.png"/>
			</div>
	</x-header>
	<div style="margin-top: -0.5rem;"><h1>白雪公主</h1></div>
	 <flexbox :gutter="0">
	      <flexbox-item :span="1/3"><div class="flex-demo"></div></flexbox-item>
		  <flexbox-item :span="1/3"><div style="text-align: center;">岛主&nbsp;&nbsp;{{StoryBeginner}}</div></flexbox-item>
		  <flexbox-item :span="1/3"><div class="story-class">#首句拟定</div></flexbox-item>
	    </flexbox>
		<flexbox orient="vertical">
		      <flexbox-item>
				  <card><div slot="content" class="card-padding" >
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
				  	 		<div class="remark-style" @click="linkRemarkStory()">							
				  	 			历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。</div>
				  	 	</div></card>
			  </flexbox-item>
		      <flexbox-item>
				  <card><div slot="content" class="card-padding" >
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
				  	 		<div class="remark-style" @click="linkRemarkStory()">							
				  	 			白雪公主（Snow White）是广泛流行于欧洲的一个童话故事中的人物，其中最著名的故事版本见于德国1812年的《格林童话》。
							</div>
				  	 	</div></card>
			  </flexbox-item>
			  <flexbox-item>
				  <card><div slot="content" class="card-padding" >
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
				  	 		<div class="remark-style" @click="linkRemarkStory()">							
				  	 			讲述了白雪公主受到继母皇后（格林兄弟最初手稿中为生母）的虐待，逃到森林里，遇到七个小矮人的故事。历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。 [1] 
							</div>
				  	 	</div></card>
			  </flexbox-item>
		    </flexbox>
	 <br />
	 <InputArea></InputArea>
<!-- 	 <div class="input-story">
		 <x-input title type="text" placeholder="继续编写故事"  required>
		   <x-button
		     slot="right"
		     type="primary"
		     mini><font font-family="zzgf, Arial">发送</font></x-button>
		 </x-input>
	 </div> -->
</div>
</template>

<script>
import { PopupRadio, Flexbox, FlexboxItem, Search, Card, ViewBox, XButton, XInput } from 'vux'
export default {
  components: {
	  PopupRadio,
	  Flexbox, 
	  FlexboxItem,
	  Search,
	  Card,
	  ViewBox,
	  XButton,
	  XInput
  },
  methods:{
  	//页面跳转方法
	handleBack() {
		this.$router.go(-1)
	},
	linkAllStory(){
		this.$router.push({
			path:'/AllStory'
		})
	},
	linkRemarkStory(){
		this.$router.push({
			path:'/RemarkStory'
		})
	}
  },
  data () {
    return {
		StoryBeginner:'别了吧'
	}
  }
}
</script>

<style scoped lang="less">
.article-style{
	font-family: zzgf, Arial;
	font-size: 0.5rem;
	background: #F5F5F5;
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
	background: url(../../../../static/img/storyFrank.png)no-repeat !important;
}
.input-story{
	font-family: zzgf, Arial !important;
	// position: fixed;
}
</style>

<style>
input::-webkit-input-placeholder {
  font-family: zzgf, Arial !important;
  color: #afb3b5;
  letter-spacing: 0.02rem;
}
</style>