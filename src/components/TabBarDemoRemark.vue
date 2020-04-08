<template>
  <div>
     <tabbar slot="bottom" class="footerGuide">
		<tabbar-item @on-item-click="changeImageHome" >
			<div slot="label">{{admire}}
				<img slot="icon" v-if="!showImageHome" src="../../static/img/点赞1.png" />
				<img slot="icon" v-if="showImageHome" src="../../static/img/点赞2.png" />
			</div>
		  <<!-- span slot="label">首页</span> -->
		</tabbar-item>
        <tabbar-item @on-item-click="changeImageIsland" >
			<div slot="label">135
				<img slot="icon" v-if="!showImageIsland" src="../../static/img/收藏2.png"/>
				<img slot="icon" v-if="showImageIsland" src="../../static/img/收藏2.png"/>
			</div>
        </tabbar-item>
        <tabbar-item @on-item-click="changeImageMine"  badge="1">
			<div slot="label">135
				<img slot="icon" v-if="!showImageMine" src="../../static/img/评论1.png" />
				<img slot="icon" v-if="showImageMine" src="../../static/img/评论1.png" />
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