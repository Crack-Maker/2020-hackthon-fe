<template>
  <div>
     <tabbar slot="bottom" class="footerGuide">
		<tabbar-item @on-item-click="changeImageHome" >
			<div slot="label">{{admire}}
				<img slot="icon" v-if="!showImageHome" src="../../static/img/home1.svg" />
				<img slot="icon" v-if="showImageHome" src="../../static/img/home2.svg" />
			</div>
		  <<!-- span slot="label">首页</span> -->
		</tabbar-item>
        <tabbar-item @on-item-click="changeImageIsland" >
			<div slot="label">135
				<img slot="icon" v-if="!showImageIsland" src="../../static/img/island1.svg"/>
				<img slot="icon" v-if="showImageIsland" src="../../static/img/island2.svg"/>
			</div>
        </tabbar-item>
        <tabbar-item @on-item-click="changeImageMine"  badge="1">
			<div slot="label">135
				<img slot="icon" v-if="!showImageMine" src="../../static/img/mine1.svg" />
				<img slot="icon" v-if="showImageMine" src="../../static/img/mine2.svg" />
			</div>
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
	  showImageIsland:false,
	  showImageMine:false,
      isLogin: false,
	  admire:135
    }
  },
  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  },
  methods: {
    changeImageHome () {
		if(this.showImageHome === false)
		{
			// admire = admire + 1;
			this.showImageHome = !this.showImageHome;
		}else{
			this.showImageHome = !this.showImageHome;
			admire = admire - 1;
		}
    },
	changeImageIsland () {
	    this.showImageIsland = !this.showImageIsland;
	},
	changeImageMine () {
	    this.showImageMine = !this.showImageMine;
	}
  }
};
</script>
<style scoped>
.footerGuide {
	width: 86%;
/* 	position: fixed; */
}
</style>