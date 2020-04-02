<template>
  <div>
	  <panel :header="最近文章展示" :list="list" :type="type"></panel>
  </div>
</template>
<script>
import { XHeader, Masker } from 'vux'
import DrawerDemo from '../components/DrawerDemo.vue'
import { Panel, Group, Radio } from 'vux'

export default {
  name: "Home",
  components: {
	  XHeader,
	  DrawerDemo,
	  Masker,
	  Panel,
	  Group,
	  Radio
  },
  data () {
    return {
      list: [{
        src: '../assets/logo.png',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/'
      }, {
        src: '../assets/logo.png',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/'
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