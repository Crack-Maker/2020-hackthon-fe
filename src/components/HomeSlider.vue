<template>
<!-- Make a div wrapped slider,set height and width -->
<div style="width:100%;margin-top: -0.4rem; height:7rem">
   <!-- Using the slider component -->
   <slider ref="slider" :options="options" >
       <!-- slideritem wrapped package with the components you need -->
       <slideritem v-for="(item,index) in someList" :key="index" :style="item.style">
<!-- 	   {{item.html}} -->
	   </slideritem>
       <!-- Customizable loading -->
       <div slot="loading">loading...</div>
   </slider>
</div>
</template>
<script>
// import slider components
import { slider, slideritem } from 'vue-concise-slider'
export default {
data () {
   return {
     //data list [array]
     someList:[
       {
         html: 'slider1',
         style: {
           background: "url(../../static/img/mask.png)no-repeat",
           'background-size': '100% 100%',
         }
       },
       {
         html: 'slider2',
         style: {
           background: "url(../../static/img/fish1.png)no-repeat",
           'background-size': 'auto 100%',
         }
       },
       {
         html: 'slider3',
         style: {
           background: "url(../../static/img/people1.jpg)no-repeat",
           'background-size': 'auto 100%',
         }
       }
     ],
     //Slider configuration [obj]
     options: {
       currentPage: 0,
	   loop:true,
	   // effect: 'coverflow',
	   thresholdDistance: 50,
	   thresholdTime: 300
     }
   }
 },
 components: {
   slider,
   slideritem
 }
}
</script>