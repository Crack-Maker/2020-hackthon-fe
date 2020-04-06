<template>
  <div>
	  <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;" :right-options="{showMore: true}"
	   @on-click-more="showMenus = true">写故事</x-header>
		<group :title="'My story'">
			<div class="left-font-position">
				<group>
				  <popup-radio title="文章类别" :options="options3" v-model="option5">
					<p slot="popup-header" class="vux-1px-b demo3-slot">请选择你的文章类别</p>
				    <template slot-scope="props" slot="each-item"><!-- use scope="props" when vue < 2.5.0 -->
				      <div class="normal-font-size">
						 <p>{{ props.label }}</p> 
					  </div>					  					
				    </template>
				  </popup-radio>
				</group>
			</div>
			<x-input :placeholder="'标题'"></x-input>
			<x-textarea :max="200" name="description" :placeholder="'内容'"></x-textarea>
		</group>
	<x-button mini plain @click.native="showPlugin">提交</x-button>
	<TabBarDemoIsland></TabBarDemoIsland>
  </div>
</template>

<script>
import { XTextarea, Group, XInput, XButton, PopupRadio  } from 'vux'
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
		PopupRadio
  },
  data () {
    return {
      option3: '日常',
      options3: ['日常', '情感', '励志'],
	  option5: '日常',
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
    }
  }
}
</script>

<style scoped>
.left-font-position{
	text-align: left;
}
.normal-font-size{
	font-size: 0.5rem !important;
}
.demo3-slot {
  text-align: center;
  padding: 8px 0;
  color: #888;
  font-size: 0.5rem;
}
</style>