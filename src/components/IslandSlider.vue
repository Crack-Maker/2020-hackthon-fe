<template>
<!-- Make a div wrapped slider,set height and width -->
<div style="width:100%;margin:20px auto;height:9.5rem;">
   <!-- Using the slider component -->
<!--   原本用这个方式，为了解决页面跳转产生的bug我把一些函数去掉了 -->
<!--   <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'> -->
   <slider ref="slider" :options="options">
       <!-- slideritem wrapped package with the components you need -->
       <template slot-scope="coverflow">
           <slideritem v-for="(item,index) in someList" :pageLength="someList.length" :index="index" :key="index" :style="item.style">
		   {{item.html}}</slideritem>
       </template>
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
         html: '故事之岛',
         style: {
           'background': '#4abf8a',
           'width': '55.33333333%'
         }
       },
       {
         html: '分享之岛',
         style: {
           'background': '#4bbfc3',
           'width': '55.33333333%'
         }
       },
       {
         html: '回忆之岛',
         style: {
           'background': '#7baabe',
           'width': '55.33333333%'
         }
       }
     ],
     //Slider configuration [obj]
     options: {
       effect: 'coverflow',
       currentPage: 0,
	   // 隐藏底部小圆点
	   pagination: false,
       thresholdDistance: 100, 
       thresholdTime: 300, 
       deviation: 200, 
       widthScalingRatio: 0.8, 
       heightScalingRatio: 0.8, 
       slidesToScroll: 1, 
       loop: true
     }
   }
 },
 components: {
   slider,
   slideritem
 }
}
</script>


