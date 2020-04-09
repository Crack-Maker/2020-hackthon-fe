<template>
<div class="article-style">
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#F1F1F1
 ;
		  position:absolute;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
			<div slot="right" @click="linkToIslands()" style="margin-top: 0.25rem;">
			  <img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island2.svg"/>
			</div>
	</x-header>
	<div style="margin-top: -0.5rem;"><h1>{{storyName}}</h1>
	  <div style="text-align: center;">岛主&nbsp;&nbsp;{{storyBeginner}}</div>
	  <Divider>{{storyClass}}</Divider>
	  <div class="story-padding">
		历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。
		<br />白雪公主（Snow White）是广泛流行于欧洲的一个童话故事中的人物，其中最著名的故事版本见于德国1812年的《格林童话》。
		讲述了白雪公主受到继母皇后（格林兄弟最初手稿中为生母）的虐待，逃到森林里，遇到七个小矮人的故事。
		历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。 [1] 
		<br />美丽的白雪公主受继母的嫉妒而被多次置于死地，最后在七个小矮人和王子的帮助下获得新生。
		爱慕虚荣、贪恋美貌的王后总是爱问镜子：“魔镜魔镜，谁是这个世界上最美的女人？”
		当镜子说是白雪公主时，王后就伪装成巫婆，骗白雪公主吃下毒苹果。吃下毒苹果的白雪公主被随后出现的王子救了，
		最终王子和公主幸福地生活在一起，王后得到了应有的惩罚。
	  </div>
	</div>
</div>
</template>

<script>
import { PopupRadio, Flexbox, FlexboxItem, Search, Card, ViewBox, Divider } from 'vux'
export default {
  components: {
	  PopupRadio,
	  Flexbox, 
	  FlexboxItem,
	  Search,
	  Card,
	  ViewBox,
	  Divider
  },
  methods:{
  	//页面跳转方法
	handleBack() {
		this.$router.go(-1)
	},
	linkToIslands() {
	  this.$router.push({
	    path: "/Islands"
	  });
	}
  },
  data () {
    return {
		storyName:'白雪公主',
  		storyBeginner:'别了吧',
		storyClass:'首句拟定型'
  	}
  }
}
</script>

<style scoped lang="less">
.article-style{
	font-family: zzgf, Arial;
	font-size: 0.5rem;
	background-size: 100% 100%;
	background: #F1F1F1 !important;
	width: 100%;
}
.story-padding{
/* 	background: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/frank.svg)no-repeat; */
	// background-size: auto 100%;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	text-align: left;
	font-size: 0.5rem;
}
</style>
