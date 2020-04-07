<template>
  <div class="login">
    <x-header
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      :right-options="{showMore: true}"
      @on-click-more="showMenus = true"
    >账号登陆</x-header>
    <div class="title-container">
      <div class="title-1">Welcome to the</div>
      <div class="title-2">ISLAND</div>
    </div>
    <div class="login-box">
      <group class="no-border">
        <x-input
          title="头像 |"
          name="phone"
          placeholder="请输入手机号码"
          class="phone border"
          v-model="phone"
          keyboard="number"
          is-type="china-mobile"
          required
        >
          <img slot="label" src="../assets/imgs/me.svg" class="logo" />
        </x-input>
      </group>
      <group class="no-border">
        <x-input
          title="锁头 |"
          type="text"
          placeholder="请输入密码"
          class="passwd border"
          v-model="password"
          :min="6"
          :max="16"
          @on-change="change"
          @on-click-clear-icon="password = null"
          required
        >
          <img slot="label" src="../assets/imgs/lock.svg" class="logo" />
        </x-input>
      </group>
    </div>
    <div class="forget-pass">忘记密码?</div>
    <box class="login-btn-box">
      <x-button @click.native="handleLogin" class="login-btn">登陆</x-button>
    </box>
    <div @click="handleRegist()" class="regist">还没有账号？快去注册</div>
  </div>
</template>

<script>
import { XInput, Box, Group, XButton } from "vux";
export default {
  name: "login",
  data() {
    return {
      phone: "", //用户手机号
      password: "" //用户密码
    };
  },
  components: {
    XInput,
    XButton,
    Group,
    Box
  },
  methods: {
    change(val) {
      console.log("on change", val);
    },
    //暂时设置回到user.vue界面
    handleLogin() {
      this.$router.push({
        path: "/User"
      });
    },
    handleRegist() {
      this.$router.push({
        path: "/Regist"
      });
    }
  }
};
</script>

<style scoped lang="less">
.input-box {
  background-color: #ffffff;
}

.login {
  background-image: url(../assets/imgs/bg-island.png);
  background-repeat: no-repeat;
  background-position: 4.5rem 0rem;
  background-size: 8rem;
  height: 19rem;
}

.forget-pass {
  font-size: 0.45rem;
  text-align: center;
}

.title-container {
  padding-top: 1rem;
  margin-left: 0.7rem;
}

.title-1 {
  letter-spacing: 0.05rem;
  font-size: 0.51rem;
  font-family: "Noto Sans CJK SC", "Source Han Sans CN";
  font-weight: 400;
  text-align: left;
  color: #93b04a;
}

.title-2 {
  letter-spacing: 0.15rem;
  font-size: 1.2rem;
  font-family: "Noto Sans CJK SC", "Source Han Sans CN";
  font-weight: 500;
  text-align: left;
  color: #667d3e;
}

.login-box {
  width: 10.1rem;
  margin-top: 3.5rem;
  margin-left: 0.4rem;
}

.forget-pass {
  text-align: right;
  font-size: 0.39rem;
  margin: 0.55rem;
  color: #707070;
}

.border {
  border: 1px solid #fdfdfd;
  border-radius: 45px;
  -webkit-box-shadow: 1px 4px 5px #c3c3c3;
  box-shadow: 1px 4px 5px #c3c3c3;
  margin: 0.2rem;
  padding: 0.4rem 0.8rem;
  text-indent: 0.5em;
  font-size: 0.45rem;
}

.logo {
  padding-right: 0.6rem;
  display: block;
  width: 0.65rem;
  border-right: 0.02rem solid #afb3b5;
}
.login-btn-box {
  margin: 0 1rem;
}
.login-btn {
  border-radius: 0;
  background-color: #667d3e;
  color: white;
  height: 1.5rem;
  line-height: 0;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 400;
}
.regist {
  font-size: 0.35rem;
  color: #5cc2b6;
  margin-top: 0.35rem;
}
</style>
<style>
.no-border div:before {
  display: none;
}
.no-border div:after {
  display: none;
}
.no-border div {
  margin-top: 0.1rem;
}
input::-webkit-input-placeholder {
  color: #afb3b5;
  letter-spacing: 0.1rem;
}

input::placeholder {
  color: #afb3b5;
  letter-spacing: 0.02rem;
}

.vux-input-icon.weui-icon-warn:before {
  font-size: 0.5rem !important;
}

.weui-icon-warn {
  font-size: 0.5rem !important;
}
</style>