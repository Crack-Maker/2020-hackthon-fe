<template>
	 <div class="input-story">
		 <x-input title type="text" placeholder="继续编写故事"  required>
		   <x-button
		     slot="right"
		     type="primary"
		     mini><font font-family="zzgf, Arial">发送</font></x-button>
		 </x-input>
	 </div>
</template>

<script>
import {  XButton, XInput } from 'vux'
export default {
  components: {
	  XButton,
	  XInput,
  }  
}
</script>

<style>
.input-story{
	font-family: zzgf, Arial !important;
	background: #FFFFFF !important;
}
input::-webkit-input-placeholder {
  font-family: zzgf, Arial !important;
  color: #afb3b5;
  letter-spacing: 0.02rem;
}
</style>
