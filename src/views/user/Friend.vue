<template>
  <div>
    <x-header
      :left-options="{showBack: true}"
      style="width:100%;background-color:#FFFFFF ;
		  position:fixed;left:0;top:0;z-index:100;"
    >
      <div slot="overwrite-left">
        <x-icon type="ios-arrow-back" size="30" @click="handleBack()"></x-icon>
      </div>
      <div class="serach-friend" slot="overwrite-title">
        <search
          @result-click="resultClick"
          :results="friendResults"
          v-model="value"
          placeholder="搜索你的好友"
          auto-scroll-to-top
          @on-focus="onFocus"
          @on-cancel="onCancel"
          @on-submit="onSubmit"
          ref="search"
          class="search-input"
        >
        <img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/search.png" style="width: 0.8rem;height: 0.8rem;margin-right: 0.2rem;margin-top: 0.05rem;" slot="right"></search>
      </div>
    </x-header>
    <div class="friend-container">
      <ul class="friend-list">
        <li v-for="(item) in friendList" :key="item.id">
          <div class="friend-avatar">
            <img v-bind:src="item.avatarSrc">
          </div>
          <div class="friend-title">{{item.nickname}}</div>
          <div class="friend-msg">{{item.lastMsg}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Search } from "vux";
export default {
  components: { Search },
  methods: {
    setFocus() {
      this.$refs.search.setFocus();
    },
    resultClick(item) {
      console.log("you click the result item: " + JSON.stringify(item));
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
    },
    //页面跳转方法
    handleBack() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      friendResults: [],
      value: "",
      friendList: [
        {
          nickname: '我不是前端',
          id: 0,
          avatarSrc: 'https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar-0.png',
          lastMsg: '何地之鲲 几时化鹏扶摇而上 为万里行'
        },
        {
          nickname: '我怀疑这情头是一个人',
          id: 1,
          avatarSrc: 'https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar-1.png',
          lastMsg: '情头就是一个人的情头哈哈哈'
        },
        {
          nickname: '小楠设计狗',
          id: 2,
          avatarSrc: 'https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar-2.png',
          lastMsg: '希望做完这个设计我还是小可爱'
        },
        {
          nickname: '咕咕咕咕组',
          id: 3,
          avatarSrc: 'https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/avatar-3.png',
          lastMsg: '我在我在你在你在加油加油！！'
        }
      ]
    };
  }
};
</script>

<style>
.weui-search-bar__cancel-btn {
  font-size: 0.4rem;
}
.vux-header-title-area {
  height: 1.3rem !important;
  width: 8.8rem !important;
  margin-top: 0.15rem !important;
  margin-left: 1.6rem !important;
}
.weui-search-bar__label {
  background-color:#f0f3f4 !important;
}
.weui-search-bar {
  height: 1.25rem;
  background-color: #f0f3f4 !important;
  border-radius: 1rem;
}
.weui-search-bar:before {
  display: none;
}
.weui-search-bar:after {
  display: none;
}
.weui-icon-search {
  display: none !important;
}
.weui-search-bar__label {
  height: 0.9rem;
  color: #bbbbbb
}
.weui-search-bar__label span {
  font-size: 0.42rem !important;
  display: block !important;
  text-align: left;
  padding-left: 0.5rem;
  margin-top: 0.2rem;
  border-left: solid 2px rgb(114, 114, 114);
  margin-left: 0.6rem;
  height: 0.42rem;
  line-height: 0.42rem;
}
.weui-search-bar__form:after {
  display: none;
}
.weui-search-bar__box .weui-search-bar__input {
  padding: 0 !important;
  font-size: 0.42rem !important;
  display: block !important;
  text-align: left;
  padding-left: 0.5rem;
  margin-top: 0.25rem;
  margin-left: 0.6rem;
  height: 0.42rem !important;
  line-height: 0.42rem;
}
.weui-search-bar__cancel-btn {
  margin-right: 0.3rem;
  margin-top: 0.1rem;
}
.weui-icon-clear {
  top: -6px !important;
}
</style>
<style>
.friend-container {
  margin-top: 3rem;
  text-align: left;
}
.friend-list li {
  border-bottom: solid 1px #ebebeb;
  height: 2.4rem;
}
.friend-avatar {
  position: absolute;
  display: inline-block;
  left: 0.3rem;
  margin-top: 0.5rem;
}
.friend-avatar img {
  height: 1.6rem;
}
.friend-title {
  width: 5rem;
  font-size: 0.43rem;
  font-weight: 600;
  margin-left: 2.3rem;
}
.friend-msg {
  font-size: 0.31rem;
  margin-left: 2.3rem;
  margin-top: 0.15rem;
  color: rgb(126, 126, 126);
}
</style>