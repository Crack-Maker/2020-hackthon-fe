<template>
  <div class="create-background">
	  <x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
	  position:absolute;left:0;top:0;z-index:100;">
	  			<div slot="overwrite-left" @click="handleBack()">
	  				<x-icon type="ios-arrow-back" size="30"></x-icon>
	  			</div>
	  </x-header>
			<group>
				<x-input title="故事名称 &nbsp;|"
					name="title"
					placeholder="今天来岛遇很开心"
					class="border"
					keyboard="number"
				required></x-input>
			</group>
<!-- 				<x-input :placeholder="'标题'"></x-input> -->
			<div class="left-font-position">
<!-- 				<group>
				  <popup-radio title="分类" :options="options3" v-model="option5">
					<p slot="popup-header" class="vux-1px-b demo3-slot">请选择你的故事类别</p>
				    <template slot-scope="props" slot="each-item">
				      <div class="normal-font-size">
						 <p>{{ props.label }}</p> 
					  </div>					  					
				    </template>
				  </popup-radio>
				</group> -->
			    <group label-width="5rem">			  
			      <popup-picker :popup-title="'请选择你的故事类别'" :title="'分类'" :data="list1" 
				  v-model="value1" :placeholder="$t('')">
			        <template slot="title" slot-scope="props">
			          <span :class="props.labelClass" :style="props.labelStyle" style="height:24px;">			            
			            <span style="vertical-align:middle;">故事类别</span>
			          </span>
			        </template>
			      </popup-picker>
			    </group>
			</div>
			<group>
				<x-textarea :max="200" name="description" :placeholder="'  内容'"></x-textarea>
			</group>
			<br />
			<box class="submit-btn-box">
			  <x-button @click.native="showPlugin" class="submit-btn">提交</x-button>
			</box>
<!-- 	<x-button mini plain @click.native="showPlugin">提交</x-button> -->
<!-- 	<TabBarDemoIsland></TabBarDemoIsland> -->
  </div>
</template>

<script>
import { XTextarea, Group, XInput, XButton, PopupRadio, Box, PopupPicker } from 'vux'
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
		Box,
		PopupPicker
  },
  data () {
    return {
	  // options3: ['日常', '情感', '励志'],
	  // option5: '日常',
	  value1: ['主题拟定型'],
	  list1: [['人物拟定型', '首句拟定型', '主题拟定型','自定义拟定']],
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
        title: '提交成功!',
        content: ('Submit successfully!'),
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
	// text-indent: 0.2em; //点击选择样式的css样式
	text-indent: 0.7em;
	font-size: 0.5rem !important;
	font-family: zzgf, Arial !important;
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
  padding: 0.2rem 0rem;
  text-indent: 1.4em;
  font-size: 0.5rem;
  font-family: zzgf, Arial !important;
  font-weight: 800;
  color: #008000;
  font-weight: 500;
}
.submit-btn-box {
  margin: 0 1rem;
  margin-top: 5rem;
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
input::-webkit-input-placeholder{
  font-size: 0.5rem;
  font-family: zzgf, Arial !important;
  font-weight: 800;
  color: #008000;
  font-weight: 500;
  text-align: right;
}
</style>