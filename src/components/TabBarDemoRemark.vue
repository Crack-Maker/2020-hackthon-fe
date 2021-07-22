<template>
  <div>
	 <ViewBox>
     <tabbar slot="bottom" class="footerGuide">
		<tabbar-item @on-item-click="changeImageHome" >
			<div slot="label">135
				<img slot="icon" v-if="!showImageHome" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/like1.png" />
				<img slot="icon" v-if="showImageHome" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/like2.png" />
			</div>
		  <!-- span slot="label">首页</span> -->
		</tabbar-item>
        <tabbar-item @on-item-click="changeImageIsland" >
			<div slot="label">135
				<img slot="icon" v-if="!showImageIsland" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/favorites1.png"/>
				<img slot="icon" v-if="showImageIsland" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/favorites2.png"/>
			</div>
        </tabbar-item>
        <tabbar-item @on-item-click="changeImageMine">
			<div slot="label">135
				<img slot="icon" v-if="!showImageMine" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/comments1.png" />
				<img slot="icon" v-if="showImageMine" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/comments1.png" />
			</div>
        </tabbar-item>
      </tabbar>
	  </ViewBox>
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
	width: 100%;
	background: #FFFFFF;
/* 	position: fixed; */
}
</style>