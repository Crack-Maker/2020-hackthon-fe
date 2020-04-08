<template>
  <div class="create-background">
	  <x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
	  position:absolute;left:0;top:0;z-index:100;">
	  			<div slot="overwrite-left" @click="handleBack()">
	  				<x-icon type="ios-arrow-back" size="30"></x-icon>
	  			</div>
	  </x-header>
			<group >
				<x-input title="标题 &nbsp;|"
					name="title"
					placeholder="今天来岛遇很开心"
					class="title border"
					keyboard="number"
				required></x-input>
<!-- 			</group>
			<group > -->
				<x-input title="话题 &nbsp;|"
					name="title"
					placeholder="今天来岛遇很开心"
					class="title border"
					keyboard="number"
				required></x-input>
<!-- 			</group>
			<group> -->
				<x-textarea :max="200" name="description" :placeholder="'  内容'"></x-textarea>
			</group>
			<br />
			<!-- <x-icon type="ios-ionic-outline" size="50"></x-icon> -->
			<img src="../../../../static/img/addPhoto.png"/>
			<box class="submit-btn-box">
			  <x-button @click.native="showPlugin" class="submit-btn">确认发布</x-button>
			</box>
<!-- 	<x-button mini plain @click.native="showPlugin">提交</x-button> -->
<!-- 	<TabBarDemoIsland></TabBarDemoIsland> -->
  </div>
</template>

<script>
import { XTextarea, Group, XInput, XButton, PopupRadio, Box  } from 'vux'
import { AlertModule, Alert, XSwitch, Cell, TransferDomDirective as TransferDom } from 'vux'
export default {
  name: "Home",
  directives: {
    TransferDom
  },
  components: {
		XTextarea,
		Group,
		XInput,
		XButton,
		Cell,
		Alert,
		XSwitch,
		PopupRadio,
		Box
  },
  data () {
    return {
	  // options3: ['日常', '情感', '励志'],
	  // option5: '日常',
	  options3: ['人物拟定型', '首句拟定型', '主题拟定型','自定义拟定'],
	  option5: '主题拟定型',
    }
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    },
	showPlugin () {
      AlertModule.show({
        title: '发布成功!',
        content: ('Publish successfully!'),
        onShow () {
          console.log('Module: I\'m showing')
        },
        onHide () {
          console.log('Module: I\'m hiding now')
        }
      })
    },
	handleBack() {
	  this.$router.go(-1)
	}
  }
}
</script>

<style scoped lang="less">
.create-background {
  // background-image: url(../../../assets/imgs/bg-island.png) !important;
  // background-repeat: no-repeat;
  // background-position: 4.5rem 0rem;
  // background-size: 8rem;
}
.left-font-position{
	text-align: left;
	text-indent: 0.2em;
	font-size: 0.5rem;
	font-family: zzgf, Arial;
	font-weight: 800;
	color: #008000;
	font-weight: 500;
}
.normal-font-size{
	font-size: 0.5rem !important;
	font-size: 0.5rem;
	font-family: zzgf, Arial;
	font-weight: 800;
	color: #008000;
	font-weight: 500;
}
.demo3-slot {
  text-align: center;
  padding: 8px 0;
  color: #888;
  font-size: 0.5rem;
  font-family: zzgf, Arial;
  font-weight: 800;
  color: #008000;
  font-weight: 500;
}
.no-border div:before {
  display: none;
}
.no-border div:after {
  display: none;
}
.border {
  padding: 0.4rem 0rem;
  text-indent: -2.5em;
  font-size: 0.5rem;
  font-family: zzgf, Arial;
  font-weight: 800;
  color: #008000;
  font-weight: 500;
}
.submit-btn-box {
  margin: 0 1rem;
  margin-top: 1.5rem;
}
.submit-btn {
  border-radius: 10px;
  background-color: #667d3e;
  color: white;
  height: 1.5rem;
  line-height: 0;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 400;
}
</style>

<style>
input::-webkit-input-placeholder{
  font-size: 0.5rem;
  font-family: zzgf, Arial !important;
  font-weight: 500;
/*  text-align: middle; */
}
</style>