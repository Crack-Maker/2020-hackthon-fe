<template>
<div>
	<div style="width: 3.75rem;text-align: right;
		font-size:0.2rem;color:#999;">
		<x-button mini type="primary" class="join-btn-font" v-show="!showFocus" 
		@click.native="handleFocus">关注</x-button>
		<x-button mini plain class="join-btn-font" v-show="showFocus"
		@click.native="handleFocus">已关注</x-button>
	</div>
</div>
</template>

<script>
import { Cell, CellBox, CellFormPreview, Group, Badge, PopupRadio, Flexbox, FlexboxItem } from 'vux'

export default {
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge,
	PopupRadio,
	Flexbox, 
	FlexboxItem,
  },
  methods: {
	handleFocus(){
		this.showFocus = !this.showFocus;
	}
  },
  data () {
    return {
	  showFocus:true,
    }
  }
}
</script>

<style>
.join-btn-font{
	font-family: zzgf, Arial !important;
	margin-left: 1rem;
/* 	height: 1rem; */
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
	font-size: 0.4rem;
}
</style>
