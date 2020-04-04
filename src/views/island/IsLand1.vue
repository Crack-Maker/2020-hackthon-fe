<template>
  <div>
	  <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;" :right-options="{showMore: true}"
	   @on-click-more="showMenus = true">故事之岛</x-header>
	<group :title="'My story'">
      <x-input :placeholder="'标题'"></x-input>
      <x-textarea :max="200" name="description" :placeholder="'内容'"></x-textarea>
    </group>
	<x-button mini plain @click.native="showPlugin">提交</x-button>
  </div>
</template>

<script>
import { XTextarea, Group, XInput, XButton } from 'vux'
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
    XSwitch
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

<style>
</style>
