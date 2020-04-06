<template>
  <!-- Make a div wrapped slider,set height and width -->
  <div style="width:100%;margin:20px auto;height:10.5rem;">
    <!-- Using the slider component -->
    <!--   原本用这个方式，为了解决页面跳转产生的bug我把一些函数去掉了 -->
    <!--   <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'> -->
    <slider ref="slider" :options="options" @tap="onTap">
      <!-- slideritem wrapped package with the components you need -->
      <template slot-scope="coverflow">
        <slideritem
          v-for="(item,index) in someList"
          :pageLength="someList.length"
          :index="index"
          :key="index"
          :style="item.style"
        ><div class="font-style">{{item.html}}</div></slideritem>
      </template>
      <!-- Customizable loading -->
      <div slot="loading">loading...</div>
    </slider>
  </div>
</template>
<script>
// import slider components
import { slider, slideritem } from "vue-concise-slider";
export default {
  // 接受Islands.vue传递过来的reload方法
  inject: ["reload"],
  data() {
    return {
      //data list [array]
      someList: [
        {
          html: "故事之岛",
          style: {
            background: "url(../../static/img/island1.png)no-repeat",
			'background-size': '100% auto',
            width: "65.33333333%"
          },
          LinkTo: "/Island1"
        },
        {
          html: "分享之岛",
          style: {
            background: "url(../../static/img/island2.png)no-repeat",
			'background-size': '100% auto',
            width: "65.33333333%"
          },
          LinkTo: "/Island2"
        },
        {
          html: "回忆之岛",
          style: {
            background: "url(../../static/img/island3.png)no-repeat",
			'background-size': '100% auto',
            width: "65.33333333%"
          },
          LinkTo: "/Island3"
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
		//相隔距离
          deviation: 127, 
          widthScalingRatio: 0.3, 
          heightScalingRatio: 0.3, 
          slidesToScroll: 1, 
          loop: true
      }
    };
  },
  components: {
    slider,
    slideritem
  },
  methods: {
  onTap (data) {
      // console.log(this.list[data.currentPage])
      // this.$router.push({
      //  path:'/'+ this.someList[data.currentPage].LinkTo
      // }),
      this.linkIsland(data);
      //强制刷新页面实现内容加载
      this.$router.go(0)
    },
    linkIsland(data){
      this.$router.push({
          path:'/'+ this.someList[data.currentPage].LinkTo
      })
    }
  }
};
</script>

<style scoped lang="less">
.font-style{
	margin-top: 9.5rem;
	font-size: 0.65rem;
	color:#000000;
}
</style>
