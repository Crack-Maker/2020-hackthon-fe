<template>
  <div>
	  <island-slider></island-slider>
  </div>
</template>
<script>
import { XHeader, Masker } from 'vux'
import DrawerDemo from '../components/DrawerDemo.vue'
import IslandSlider from '../components/IslandSlider.vue'

export default {
  name: "Islands",
  components: {
	  XHeader,
	  DrawerDemo,
	  Masker,
	  IslandSlider
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