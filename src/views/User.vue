<template>
  <div class="user-style">
    <x-header
      :left-options="{showBack: false}"
      :right-options="{showMore: false}"
      style="width:100%;background-color:#FFFFFF ;
	  position:absolute;left:0;top:0;z-index:100;"
    >
      <div slot="overwrite-left" @click="linkMessage()">
        <img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/message.png" />
      </div>
      <!-- 下面这个div用来触发特效 -->
      <div>
        <font size="2" color="#888888">——已来到岛遇15天——</font>
      </div>
      <div slot="right" @click="linkSetup()">
        <img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/settings.svg" />
      </div>
    </x-header>
    <div class="main-info">
      <br />
      <img
        style="height: 3.5rem;margin-left: 1rem;margin-top: -1rem;border-radius: 2rem;
		  background-size: auto 100%;"
        align="left"
        src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/aiji.jpg"
      />
      <!-- 显示用户昵称 -->
      <div class="name-font-style">{{nickname}}</div>
      <div class="normal-font-size">{{nickname}}的个性签名</div>
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <div class="normal-font-size" @click="linkHistory()">
            120
            <br />最近发布
          </div>
        </div>
        <div class="vux-1px-r">
          <div class="normal-font-size" @click="linkMyFocus()">
            <!-- <span>15</span> -->
            15
            <br />关注
          </div>
        </div>
        <div class="vux-1px-r">
          <div class="normal-font-size" @click="linkCollect()">
            <!-- <span>10</span> -->
            8
            <br />收藏
          </div>
        </div>
      </div>
      <br />
    </div>
    <!-- 引入卡片组件 -->
    <!-- <divider>{{ $t('Simple card with header and content') }}</divider>
    <card :header="{title: $t('My wallet')}">-->

    <!-- 	  暂时注释掉grid组件,以后根据设计需求再作调整 -->
    <!-- 	      <grid class="grid-font-style">
			<div @click="linkFriend()">
				<grid-item>
					<img slot="icon" src="../assets/logo.png"><p>关注</p>
				</grid-item>
			</div>
			<div>
				<grid-item>
					<img slot="icon" src="../assets/logo.png">被关注
				</grid-item>
			</div>
    </grid>-->
    <group>
      <cell-box is-link @click.native="linkFriend" style="margin-left: 1rem;">
        <img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/user1.png" />&nbsp;&nbsp;我的好友
      </cell-box>
      <cell-box is-link @click.native="linkAbility" style="margin-left: 1rem;">
        <img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/user2.png" />&nbsp;&nbsp;我的属性
      </cell-box>
      <cell-box is-link @click.native="linkIsland" style="margin-left: 1rem;">
        <img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/user3.png" />&nbsp;&nbsp;秘密の岛
      </cell-box>
      <cell-box is-link @click.native="linkTopic" style="margin-left: 1rem;">
        <img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/user4.png" />&nbsp;&nbsp;内容发布
      </cell-box>
    </group>
    <!--  <divider><font size="4">我的秘密岛</font></divider> -->
    <card>
      <img
        slot="header"
        src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island3.png"
        style="width:25%;"
      />
    </card>
    <!-- 之后再去用这个组件，具体方法还没写 -->
    <br />
    <TabBarDemoUser></TabBarDemoUser>
  </div>
</template>

<script>
import { Group, Cell, CellBox, Divider, Card } from "vux";
import { Grid, GridItem, GroupTitle, Panel } from "vux";

export default {
  components: {
    Group,
    Cell,
    CellBox,
    Grid,
    GridItem,
    GroupTitle,
    Card,
    Divider,
    Panel
	},
	mounted(){
		this.phone = localStorage.getItem("phone")
		this.token = localStorage.getItem("token")
		this.userid = localStorage.getItem("userid")
		this.nickname = localStorage.getItem("nickname")
		this.isLogin = localStorage.getItem("isLogin")
	},
  methods: {
    //页面跳转方法
    linkFriend() {
      this.$router.push({
        path: "/Friend"
      });
    },
    linkMyFocus() {
      this.$router.push({
        path: "/MyFocus"
      });
    },
    linkCollect() {
      this.$router.push({
        path: "/Collect"
      });
    },
    linkHistory() {
      this.$router.push({
        path: "/History"
      });
    },
    linkSetup() {
      this.$router.push({
        path: "/Setup"
      });
    },
    linkMessage() {
      this.$router.push({
        path: "/Message"
      });
    },
    linkAbility() {
      this.$router.push({
        path: "/Ability"
      });
    },
    linkIsland() {
      this.$router.push({
        path: "/Island3"
      });
    },
    linkTopic() {
      this.$router.push({
        path: "/CreateTopic"
      });
    }
  },
  data() {
    return {
      list: [
        {
          src: "../assets/logo.png",
          title: "星球",
          desc:
            "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。",
          url: "/"
        }
      ],
      phone: "",
      token: "",
      userid: "",
      nickname: "",
      isLogin: null
    };
  }
};
</script>

<!-- 引入card组件的样式 -->
<style scoped lang="less">
@import "~vux/src/styles/1px.less";
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>

<style scoped>
.user-style {
  font-family: zzgf, Arial !important;
}
.main-info {
  background: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/frank.svg)
    no-repeat;
  background-size: 100% auto;
}
.name-font-style {
  font-size: 0.7rem;
  font-family: zzgf, Arial;
  margin-top: -1rem;
}
.normal-font-size {
  font-size: 0.5rem;
  font-family: zzgf, Arial;
  color: #393a31;
  /*  margin-top: -1rem; */
}
.grid-center {
  display: block;
  text-align: center;
  color: #666;
}
.grid-font-style {
  font-size: 0.48rem;
}
.weui-grids {
  background-color: #fff;
}
</style>