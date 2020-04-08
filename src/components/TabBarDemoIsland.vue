<template>
  <div>
     <tabbar slot="bottom" class="footerGuide">
		<tabbar-item @on-item-click="changeImageHome" :link="{path:'/'}">
		  <img slot="icon" v-if="!showImageHome" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/home1.svg" />
		  <img slot="icon" v-if="showImageHome" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/home2.svg" />
		  <span slot="label">首页</span>
		</tabbar-item>
        <tabbar-item @on-item-click="changeImageIsland" :link="{path:'/Islands'}">
          <img slot="icon" v-if="!showImageIsland" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island1.svg"/>
		  <img slot="icon" v-if="showImageIsland" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island2.svg"/>
          <span slot="label">岛屿</span>
        </tabbar-item>
        <tabbar-item @on-item-click="changeImageMine" :link="{path:'/User'}" badge="1">
          <img slot="icon" v-if="!showImageMine" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/mine1.svg" />
		  <img slot="icon" v-if="showImageMine" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/mine2.svg" />
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem, ViewBox } from "vux";

export default {
  name: "TabBarDemo",
  data() {
    return {
	  showImageHome:false,
	  showImageIsland:true,
	  showImageMine:false,
      isLogin: false,
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  },
  methods: {
    changeImageHome () {
		this.showImageHome = true;
		this.showImageIsland = false;
		this.showImageMine = false;
    },
	changeImageIsland () {
	    this.showImageIsland = true;
		this.showImageHome = false;
		this.showImageMine = false;
	},
	changeImageMine () {
	    this.showImageMine = true;
		this.showImageHome = false;
		this.showImageIsland = false;
	}
  }
};
</script>
<style scoped>
.footerGuide {
	width: 100%;
	position: fixed;
}
</style>