<template>
	<div class="history-style">
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
		  position:fixed;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
	</x-header>
	<div></div>
	<group :title="'我的关注'">
      <cell
      :title="'特别关心'"
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"></cell>

      <template v-if="showContent001">
        <cell-box class="sub-item" >
        	<flexbox :gutter="0">
        			<flexbox-item :span="1/4">
        				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
        				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/aiji.jpg" />
        			</flexbox-item>  
        			<flexbox-item :span="5/16">
        				<div style="width: 4.25rem;float: left;font-weight: 550;
        				color:#000;font-size:0.5rem;">安达垣爱姬</div>
        				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
        				margin-top: 0.2rem; color:#999;">总是吃不饱</p>
        			</flexbox-item>
        			<flexbox-item :span="7/16">
        				<FocusButton></FocusButton>
        			</flexbox-item>
        	</flexbox>
        </cell-box>
        <cell-box :border-intent="false" class="sub-item" >
        	<flexbox :gutter="0">
         			<flexbox-item :span="1/4">
         				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
         				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island1.png" />
         			</flexbox-item>  
         			<flexbox-item :span="5/16">
         				<div style="width: 4.25rem;float: left;font-weight: 550;
         				color:#000;font-size:0.5rem;">故事岛土著</div>
         				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
         				margin-top: 0.2rem; color:#999;">白雪公主和奥特曼的爱好者</p>
         			</flexbox-item>
         			<flexbox-item :span="7/16">
         				<FocusButton></FocusButton>
         			</flexbox-item>
         	</flexbox>
        </cell-box>
        <cell-box :border-intent="false" class="sub-item" >
        	<flexbox :gutter="0">
         			<flexbox-item :span="1/4">
         				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
         				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar.png" />
         			</flexbox-item>  
         			<flexbox-item :span="5/16">
         				<div style="width: 4.25rem;float: left;font-weight: 550;
         				color:#000;font-size:0.5rem;">台词就很炫</div>
         				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
         				margin-top: 0.2rem; color:#999;">一个酷酷的人</p>
         			</flexbox-item>
         			<flexbox-item :span="7/16">
         				<FocusButton></FocusButton>
         			</flexbox-item>
         	</flexbox>
        </cell-box>
      </template>

      <cell
      :title="'第一分组'"
      is-link
      :border-intent="false"
      :arrow-direction="showContent002 ? 'up' : 'down'"
      @click.native="showContent002 = !showContent002"></cell>

      <template v-if="showContent002">
        <cell-box :border-intent="false" class="sub-item" >	
			<flexbox :gutter="0">
	 	 			<flexbox-item :span="1/4">
	 	 				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
	 	 				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar.png" />
	 	 			</flexbox-item>  
	 	 			<flexbox-item :span="5/16">
	 	 				<div style="width: 4.25rem;float: left;font-weight: 550;
	 	 				color:#000;font-size:0.5rem;">台词就很炫</div>
	 	 				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
	 	 				margin-top: 0.2rem; color:#999;">一个酷酷的人</p>
	 	 			</flexbox-item>
	 	 			<flexbox-item :span="7/16">
	 	 				<FocusButton></FocusButton>
	 	 			</flexbox-item>
	 	 	</flexbox>
		</cell-box>
        <cell-box class="sub-item" >
			<flexbox :gutter="0">
					<flexbox-item :span="1/4">
						<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
						background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/aiji.jpg" />
					</flexbox-item>  
					<flexbox-item :span="5/16">
						<div style="width: 4.25rem;float: left;font-weight: 550;
						color:#000;font-size:0.5rem;">安达垣爱姬</div>
						<p style="font-size:0.35rem;line-height:1.2;text-align: left;
						margin-top: 0.2rem; color:#999;">总是吃不饱</p>
					</flexbox-item>
					<flexbox-item :span="7/16">
						<FocusButton></FocusButton>
					</flexbox-item>
			</flexbox>
		</cell-box>
		<cell-box :border-intent="false" class="sub-item" >
			<flexbox :gutter="0">
		 			<flexbox-item :span="1/4">
		 				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
		 				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island1.png" />
		 			</flexbox-item>  
		 			<flexbox-item :span="5/16">
		 				<div style="width: 4.25rem;float: left;font-weight: 550;
		 				color:#000;font-size:0.5rem;">故事岛土著</div>
		 				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
		 				margin-top: 0.2rem; color:#999;">白雪公主和奥特曼的爱好者</p>
		 			</flexbox-item>
		 			<flexbox-item :span="7/16">
		 				<FocusButton></FocusButton>
		 			</flexbox-item>
		 	</flexbox>
		</cell-box>
		<cell-box :border-intent="false" class="sub-item" >
			<flexbox :gutter="0">
		 			<flexbox-item :span="1/4">
		 				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
		 				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island3.png" />
		 			</flexbox-item>  
		 			<flexbox-item :span="5/16">
		 				<div style="width: 4.25rem;float: left;font-weight: 550;
		 				color:#000;font-size:0.5rem;">秘密岛土著</div>
		 				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
		 				margin-top: 0.2rem; color:#999;">小朋友你是否有很多秘密</p>
		 			</flexbox-item>
		 			<flexbox-item :span="7/16">
		 				<FocusButton></FocusButton>
		 			</flexbox-item>
		 	</flexbox>
		</cell-box>
		<cell-box :border-intent="false" class="sub-item" >
			<flexbox :gutter="0">
		 			<flexbox-item :span="1/4">
		 				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
		 				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar.png" />
		 			</flexbox-item>  
		 			<flexbox-item :span="5/16">
		 				<div style="width: 4.25rem;float: left;font-weight: 550;
		 				color:#000;font-size:0.5rem;">台词就很炫</div>
		 				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
		 				margin-top: 0.2rem; color:#999;">一个酷酷的人</p>
		 			</flexbox-item>
		 			<flexbox-item :span="7/16">
		 				<FocusButton></FocusButton>
		 			</flexbox-item>
		 	</flexbox>
		</cell-box>
		<cell-box class="sub-item" >
			<flexbox :gutter="0">
					<flexbox-item :span="1/4">
						<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
						background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island2.png" />
					</flexbox-item>  
					<flexbox-item :span="5/16">
						<div style="width: 4.25rem;float: left;font-weight: 550;
						color:#000;font-size:0.5rem;">分享岛土著</div>
						<p style="font-size:0.35rem;line-height:1.2;text-align: left;
						margin-top: 0.2rem; color:#999;">热爱分享</p>
					</flexbox-item>
					<flexbox-item :span="7/16">
						<FocusButton></FocusButton>
					</flexbox-item>
			</flexbox>
		</cell-box>
        <cell-box class="sub-item" >
			<flexbox :gutter="0">
					<flexbox-item :span="1/4">
						<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
						background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar.png" />
					</flexbox-item>  
					<flexbox-item :span="5/16">
						<div style="width: 4.25rem;float: left;font-weight: 550;
						color:#000;font-size:0.5rem;">台词就很炫</div>
						<p style="font-size:0.35rem;line-height:1.2;text-align: left;
						margin-top: 0.2rem; color:#999;">一个酷酷的人</p>
					</flexbox-item>
					<flexbox-item :span="7/16">
						<FocusButton></FocusButton>
					</flexbox-item>
			</flexbox>
		</cell-box>
      </template>

     <cell
      :title="'第二分组'"
      is-link
      :border-intent="false"
      :arrow-direction="showContent003 ? 'up' : 'down'"
      @click.native="showContent003 = !showContent003"></cell>

      <template v-if="showContent003">
        <cell-box :border-intent="false" class="sub-item" >	
			<flexbox :gutter="0">
	 	 			<flexbox-item :span="1/4">
	 	 				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
	 	 				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island1.png" />
	 	 			</flexbox-item>  
	 	 			<flexbox-item :span="5/16">
	 	 				<div style="width: 4.25rem;float: left;font-weight: 550;
	 	 				color:#000;font-size:0.5rem;">故事岛土著</div>
	 	 				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
	 	 				margin-top: 0.2rem; color:#999;">白雪公主和奥特曼的爱好者</p>
	 	 			</flexbox-item>
	 	 			<flexbox-item :span="7/16">
	 	 				<FocusButton></FocusButton>
	 	 			</flexbox-item>
	 	 	</flexbox>
		</cell-box>
        <cell-box class="sub-item" >
			<flexbox :gutter="0">
					<flexbox-item :span="1/4">
						<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
						background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island2.png" />
					</flexbox-item>  
					<flexbox-item :span="5/16">
						<div style="width: 4.25rem;float: left;font-weight: 550;
						color:#000;font-size:0.5rem;">分享岛土著</div>
						<p style="font-size:0.35rem;line-height:1.2;text-align: left;
						margin-top: 0.2rem; color:#999;">热爱分享</p>
					</flexbox-item>
					<flexbox-item :span="7/16">
						<FocusButton></FocusButton>
					</flexbox-item>
			</flexbox>
		</cell-box>
        <cell-box class="sub-item" >
			<flexbox :gutter="0">
					<flexbox-item :span="1/4">
						<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
						background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar.png" />
					</flexbox-item>  
					<flexbox-item :span="5/16">
						<div style="width: 4.25rem;float: left;font-weight: 550;
						color:#000;font-size:0.5rem;">台词就很炫</div>
						<p style="font-size:0.35rem;line-height:1.2;text-align: left;
						margin-top: 0.2rem; color:#999;">一个酷酷的人</p>
					</flexbox-item>
					<flexbox-item :span="7/16">
						<FocusButton></FocusButton>
					</flexbox-item>
			</flexbox>
		</cell-box>
      </template>
      <cell
      :title="'默认分组'"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent004 = !showContent004"></cell>

      <template v-if="showContent004">
        <cell-box :border-intent="false" class="sub-item" >
        	<flexbox :gutter="0">
         			<flexbox-item :span="1/4">
         				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
         				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island1.png" />
         			</flexbox-item>  
         			<flexbox-item :span="5/16">
         				<div style="width: 4.25rem;float: left;font-weight: 550;
         				color:#000;font-size:0.5rem;">故事岛土著</div>
         				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
         				margin-top: 0.2rem; color:#999;">白雪公主和奥特曼的爱好者</p>
         			</flexbox-item>
         			<flexbox-item :span="7/16">
         				<FocusButton></FocusButton>
         			</flexbox-item>
         	</flexbox>
        </cell-box>
        <cell-box class="sub-item" >
        	<flexbox :gutter="0">
        			<flexbox-item :span="1/4">
        				<img style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
        				background-size: auto 100%;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island2.png" />
        			</flexbox-item>  
        			<flexbox-item :span="5/16">
        				<div style="width: 4.25rem;float: left;font-weight: 550;
        				color:#000;font-size:0.5rem;">分享岛土著</div>
        				<p style="font-size:0.35rem;line-height:1.2;text-align: left;
        				margin-top: 0.2rem; color:#999;">热爱分享</p>
        			</flexbox-item>
        			<flexbox-item :span="7/16">
        				<FocusButton></FocusButton>
        			</flexbox-item>
        	</flexbox>
        </cell-box>
      </template>
    </group>
	</div>
</template>

<script>
import { Cell, CellBox, CellFormPreview, Group, Badge, PopupRadio, Flexbox, FlexboxItem } from 'vux'
import FocusButton from '../../components/FocusButton.vue'

export default {
  mounted () {
    setTimeout(() => {
      this.money = -1024
    }, 2000)
  },
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,
	PopupRadio,
	Flexbox, 
	FlexboxItem,
	FocusButton
  },
  methods: {
    onClick () {
      console.log('on click')
    },
	handleBack() {
		this.$router.go(-1)
	},	
	handleFocus(){
		this.showFocus = !this.showFocus;
	}
  },
  data () {
    return {
	  showFocus:true,
      list: [{
       }],
      money: null,
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false
    }
  }
}
</script>

<style scoped>
.history-style{
  font-size: 0.5rem;
  font-family: zzgf, Arial;
  color:#393A31;
}
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
.join-btn-font{
	font-family: zzgf, Arial !important;
	width: 3rem;
/* 	height: 1rem; */
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
	font-size: 0.4rem;
}
</style>