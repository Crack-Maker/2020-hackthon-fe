<template>
  <div class="island1-background">
    <x-header
      :left-options="{showBack: false}"
      :right-options="{showMore: false}"
      style="width:100%;background-color:#FFFFFF ;
	  position:absolute;left:0;top:0;z-index:100;"
    >
      <div slot="overwrite-left" @click="linkToIslands()">
        <x-icon type="ios-arrow-back" size="30"></x-icon>
      </div>
    </x-header>
    <div class="island1-title">
      故事岛
      <div>
        <img
          style="width: 5rem;margin-right: -4.5rem;margin-top: -3.2rem;z-index: -100;
		  background-size:100% auto;"
          align="right"
          src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/island1.png"
        />
      </div>
    </div>
    <!-- 搜索栏 -->
    <div class="search-style">
      <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="value"
        position="absolute"
        auto-scroll-to-top
        top="1.5rem"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search"
      ></search>
    </div>
    <div class="island1-content">
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <card>
              <div slot="content" class="card-padding">
                <p style="color:#999;font-size:0.5rem;">白雪公主</p>
                <p
                  style="font-size:0.2rem;line-height:1.2;margin-top: 0.2rem;"
                >历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。</p>
                <div class="join-btn">
                  <x-button mini type="primary" class="join-btn-font">加入</x-button>
                </div>
              </div>
            </card>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <card>
              <div slot="content" class="card-padding">
                <p style="color:#999;font-size:0.5rem;">白雪公主</p>
                <p
                  style="font-size:0.2rem;line-height:1.2;margin-top: 0.2rem;"
                >历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。</p>
                <div class="join-btn">
                  <x-button mini type="primary" class="join-btn-font">加入</x-button>
                </div>
              </div>
            </card>
          </div>
        </flexbox-item>
      </flexbox>
      <flexbox>
        <flexbox-item>
          <div class="flex-demo">
            <card>
              <div slot="content" class="card-padding">
                <p style="color:#999;font-size:0.5rem;">白雪公主</p>
                <p
                  style="font-size:0.2rem;line-height:1.2;margin-top: 0.2rem;"
                >历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。</p>
                <div class="join-btn">
                  <x-button mini type="primary" class="join-btn-font">加入</x-button>
                </div>
              </div>
            </card>
          </div>
        </flexbox-item>
        <flexbox-item>
          <div class="flex-demo">
            <card>
              <div slot="content" class="card-padding">
                <p style="color:#999;font-size:0.5rem;">白雪公主</p>
                <p
                  style="font-size:0.2rem;line-height:1.2;margin-top: 0.2rem;"
                >历史学家巴特尔思据称白雪公主的历史原型是1725年生于德国西部美茵河畔洛尔城的玛利亚·索菲亚·冯·埃尔塔尔。</p>
                <div class="join-btn">
                  <x-button mini type="primary" class="join-btn-font">加入</x-button>
                </div>
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
        path: "/Create"
      });
    },
    linkToIslands() {
      this.$router.push({
        path: "/Islands"
      });
    },
    setFocus() {
      // this.$refs.search.setFocus()
    },
    resultClick(item) {
      // window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult(val) {
      console.log("on-change", val);
      this.results = val ? getResult(this.value) : [];
    },
    onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: "text",
        position: "top",
        text: "on submit"
      });
    },
    onFocus() {
      console.log("on focus");
    },
    onCancel() {
      console.log("on cancel");
    }
  }
};

// 官网抄下来的
function getResult(val) {
  let rs = [];
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    });
  }
  return rs;
}
</script>

<style scoped>
.island1-background {
  /*  background-image: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/bg-island.png) !important;
  background-repeat: no-repeat;
  background-position: 4.5rem 0rem;
  background-size: 8rem; */
  width: 100%;
}
.island1-title {
  position: relative;
  left: -0.5rem;
  top: 1rem;
  color: #985148;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 800;
  width: 6.5rem;
}
.island1-content {
  /* 	left: -2.5rem; */
  margin-top: 4.9rem;
	width: 11.2rem;
  color: #393a31;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 800;
}
.create-icon {
  position: relative;
  /* 	right: -0.2rem; */
  bottom: 2rem;
  z-index: 1rem;
  /* 	position: absolute; */
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 100;
  float: right;
  /* 	right: -5rem !important; */
}
.join-btn {
  position: relative;
  left: 1rem;
  bottom: 0.6rem;
}
.join-btn-font {
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 800;
}
.card-padding {
  background: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/frank.svg)
    no-repeat;
  background-size: auto 100%;
  height: 4rem;
  padding: 1rem 0rem 0.6rem 1rem;
}
.vux-x-icon {
  fill: #985148;
}
.cell-x-icon {
  display: block;
  fill: green;
}
.search-style {
  margin-top: 0rem;
  font-size: 0.6rem;
  width: 100%;
  float: right;
  z-index: 100;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 800;
}
</style>