<template>
  <div class="island3-background">
    <x-header
      :left-options="{showBack: false}"
      :right-options="{showMore: false}"
      style="width:100%;background-color:#FFFFFF ;
	  position:fixed;left:0;top:0;z-index:100;"
    >
      <div slot="overwrite-left" @click="linkToIslands()">
        <x-icon type="ios-arrow-back" size="30"></x-icon>
      </div>
    </x-header>
    <div class="island3-title">
      秘密岛
      <div>
        <img
          style="width: 5rem;margin-right: -4.5rem;margin-top: -3.2rem;z-index: -100;
		  background-size:100% auto;"
          align="right"
          src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island3.png"
        />
      </div>
    </div>
    <div class="island3-content">
      <flexbox orient="vertical">
        <flexbox-item>
          <div class="flex-demo">
            <card>
              <div slot="content" class="card-padding">
                <flexbox :gutter="0">
                  <flexbox-item :span="1/4">
                    <img
                      style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
									background-size: auto 100%;"
                      align="left"
                      src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/aiji.jpg"
                    />
                  </flexbox-item>
                  <flexbox-item :span="3/8">
                    <div
                      style="width: 4.25rem;float: left;
									color:#000;font-size:0.5rem;"
                    >安达垣爱姬</div>
                    <p
                      style="font-size:0.35rem;line-height:1.2;text-align: left;
									margin-top: 0.2rem; color:#999;"
                    >#熬夜我想喝咖啡</p>
                  </flexbox-item>
                  <flexbox-item :span="3/8">
                    <div
                      style="float: left; width: 3.75rem;text-align: right;
										font-size:0.2rem;color:#999;"
                    >
                      2020-4-8
                      <!-- 										<div class="join-btn">
											<x-button mini type="primary" class="join-btn-font">关注</x-button>
                      </div>-->
                    </div>
                  </flexbox-item>
                </flexbox>
				<div class="article-content" @click="remarkSecret()">
					<p
					  style="font-size:0.2rem;line-height:1.2;margin-top: 0.2rem;"
					>历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。</p>
					<img
					  style="height: 3rem;margin-left: 0rem;background-size: auto 100%;"
					  align="middle"
					  src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/people1.jpg"
					/>
				</div>
                <TabBarDemoRemark></TabBarDemoRemark>
              </div>
            </card>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <card>
              <div slot="content" class="card-padding">
                <flexbox :gutter="0">
                  <flexbox-item :span="1/4">
                    <img
                      style="height: 1.5rem;margin-left: 0rem;border-radius: 2rem;
									background-size: auto 100%;"
                      align="left"
                      src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/aiji.jpg"
                    />
                  </flexbox-item>
                  <flexbox-item :span="3/8">
                    <div
                      style="width: 4.25rem;float: left;
									color:#000;font-size:0.5rem;"
                    >安达垣爱姬</div>
                    <p
                      style="font-size:0.35rem;line-height:1.2;text-align: left;
									margin-top: 0.2rem; color:#999;"
                    >#熬夜我想喝咖啡</p>
                  </flexbox-item>
                  <flexbox-item :span="3/8">
                    <div
                      style="float: left; width: 3.75rem;text-align: right;
										font-size:0.2rem;color:#999;"
                    >
                      2020-4-8
                      <!-- 										<div class="join-btn">
											<x-button mini type="primary" class="join-btn-font">关注</x-button>
                      </div>-->
                    </div>
                  </flexbox-item>
                </flexbox>
				<div class="article-content" @click="remarkSecret()">
					<p
					  style="font-size:0.2rem;line-height:1.2;margin-top: 0.2rem;"
					>历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。</p>
					<img
					  style="height: 3rem;margin-left: 0rem;background-size: auto 100%;"
					  align="middle"
					  src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/people1.jpg"
					/>
				</div>
                <TabBarDemoRemark></TabBarDemoRemark>
              </div>
            </card>
          </div>
        </flexbox-item>
      </flexbox>
      <div @click="linkToCreate()" class="create-icon">
        <x-icon type="ios-plus" size="50"></x-icon>
      </div>
    </div>
  </div>
</template>

<script>
import {
  XTextarea,
  Group,
  XInput,
  XButton,
  PopupRadio,
  Flexbox,
  FlexboxItem,
  Search,
  Card
} from "vux";
import {
  AlertModule,
  Alert,
  XSwitch,
  Cell,
  TransferDomDirective as TransferDom
} from "vux";
export default {
  name: "Home",
  directives: {
    TransferDom
  },
  components: {
    XTextarea,
    Group,
    XInput,
    XButton,
    Cell,
    Alert,
    XSwitch,
    PopupRadio,
    Flexbox,
    FlexboxItem,
    Search,
    Card
  },
  data() {
    return {
      results: [],
      value: ""
    };
  },
  methods: {
    onEvent(event) {
      console.log("on", event);
    },
    linkToCreate() {
      this.$router.push({
        path: "/CreateTopic"
      });
    },
    linkToIslands() {
      this.$router.go(-1);
    },
	remarkSecret(){
		this.$router.push({
		  path: "/RemarkSecret"
		});
	}
  }
};
</script>

<style scoped>
/* .island3-background {
	background-image: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/bg-island.png) !important;
  background-repeat: no-repeat;
  background-position: 4.5rem 0rem;
  background-size: 8rem;
} */
.island3-title {
  position: relative;
  left: -0.5rem;
  top: 1rem;
  color: #7dbfb7;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 800;
  width: 6.5rem;
}
.island3-content {
  position: relative;
  /* 	left: -2.5rem; */
  top: 0rem;
  color: #393a31;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 800;
}
.create-icon {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 1rem;
  right: 1rem;
  border-radius: 50%;
  z-index: 500;
  float: right;
}
.join-btn {
  position: relative;
  /* 	left: 1rem;
	bottom: 0.6rem; */
}
.join-btn-font {
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 800;
}
.card-padding {
  /* 	background: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/frank.svg)no-repeat; */
  background-size: auto 100%;
  height: 7rem;
  padding: 0.5rem 0.5rem 0.6rem 0.5rem;
}
.vux-x-icon {
  fill: #7dbfb7;
}
.cell-x-icon {
  display: block;
  fill: #75b67d !important;
}
</style>