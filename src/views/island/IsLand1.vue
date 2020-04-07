<template>
  <div>
	  <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;" :right-options="{showMore: true}"
	   @on-click-more="showMenus = true">故事之岛</x-header>
	   <div @click="linkToCreate()">
			<x-icon type="ios-plus-outline" size="30"></x-icon>
	   </div>
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
		
    }
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    },
	linkToCreate(){
		this.$router.push({
			path:'/Create'
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
.vux-x-icon {
  fill: #F70968;
}
.cell-x-icon {
  display: block;
  fill: green;
}
</style>