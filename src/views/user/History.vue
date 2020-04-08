<template>
	<div class="history-style">
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
		  position:absolute;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
	</x-header>
	<group :title="'最近发布'">
      <cell
      :title="'4月4日'"
      is-link
      :border-intent="false"
      :arrow-direction="showContent001 ? 'up' : 'down'"
      @click.native="showContent001 = !showContent001"></cell>

      <template v-if="showContent001">
        <cell-box :border-intent="false" class="sub-item" >content 001</cell-box>
        <cell-box class="sub-item" >content 001</cell-box>
        <cell-box class="sub-item" >content 001</cell-box>
      </template>

      <cell
      :title="'4月3日'"
      is-link
      :border-intent="false"
      :arrow-direction="showContent002 ? 'up' : 'down'"
      @click.native="showContent002 = !showContent002"></cell>

      <template v-if="showContent002">
        <cell-box :border-intent="false" class="sub-item" >content 002</cell-box>
        <cell-box class="sub-item" >content 002</cell-box>
        <cell-box class="sub-item" >content 002</cell-box>
      </template>

      <cell
      :title="'4月2日'"
      is-link
      :border-intent="false"
      :arrow-direction="showContent003 ? 'up' : 'down'"
      @click.native="showContent003 = !showContent003"></cell>

      <template v-if="showContent003">
        <cell-box :border-intent="false" class="sub-item" >content 001</cell-box>
        <cell-box class="sub-item" >content 001</cell-box>
        <cell-box class="sub-item" >content 001</cell-box>
      </template>

      <cell
      :title="'4月1日'"
      is-link
      :border-intent="false"
      :arrow-direction="showContent004 ? 'up' : 'down'"
      @click.native="showContent004 = !showContent004"></cell>

      <template v-if="showContent004">
        <cell-box :border-intent="false" class="sub-item" >content 004</cell-box>
        <cell-box class="sub-item" >content 004</cell-box>
        <cell-box class="sub-item" >content 004</cell-box>
      </template>

    </group>
	</div>
</template>

<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from 'vux'

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
    Badge
  },
  methods: {
    onClick () {
      console.log('on click')
    },
	handleBack() {
		this.$router.go(-1)
	}	
  },
  data () {
    return {
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
</style>