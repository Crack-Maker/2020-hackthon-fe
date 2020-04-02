<template>
  <div>
<!-- 测边框先注释掉不要 -->
	<!-- <DrawerDemo></DrawerDemo> -->
	<x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;":title="Home":transition="headerTransition">
    <span @click="drawerVisibility = !drawerVisibility">岛遇</span>
      <x-icon slot="overwrite-left" type="navicon" size="25" style="fill:#fff;
	  position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
<!--   <h1>island</h1> -->
	<div style="margin: 10px;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          <router-link :to="{path: '/' + item.island}">{{item.title}}</router-link>
          <br/>
          <span class="m-time">2020-04-01</span>
        </div>
      </masker>
    </div>
<!-- 	4.1日注释掉，暂时不需要第四个模块,可以作为有需要时候的例子 -->
<!--    <div style="margin: 10px;overflow: hidden;">
      <masker style="border-radius: 2px;" color="F9C90C" :opacity="0.8">
        <div class="m-img" style="background-image:url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)"></div>
        <div slot="content" class="m-title">
          <router-link to="/Login">VUX</router-link>
          <br/>
          <span class="m-time">2020-04-01</span>
        </div>
      </masker>
    </div> -->
  </div>
</template>
<script>
import { XHeader, Masker } from 'vux'
import DrawerDemo from '../components/DrawerDemo.vue'

export default {
  name: "Islands",
  components: {
	  XHeader,
	  DrawerDemo,
	  Masker
  },
  computed: {
	// leftOptions () {
 //      return {
 //        showBack: this.route.path !== '/'
 //      }
 //    },
 //    rightOptions () {
 //      return {
 //        showMore: true
 //      }
 //    },
	// title () {
 //      if (this.route.path === '/') return 'Home'
	// }
  },
  data () {
    return {
      list: [{
        title: '故事之岛',
        img: 'http://pic.5tu.cn/uploads/allimg/1601/201008103200.jpg',
		island:"island1"
      }, {
        title: '分享之岛',
        img: 'http://pic.5tu.cn/uploads/allimg/1512/241458078300.jpg',
		island:"island2"
      }, {
        title: '回忆之岛',
        img: 'http://pic.5tu.cn/uploads/allimg/1603/111016232050.jpg',
		island:"island3"
      }]
    }
  }
}
</script>

<style lang="less">
.m-img {
  // padding-bottom: 33%;
  padding-bottom: 45%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>

<style scoped>

</style>