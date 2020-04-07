<template>
  <div class="regist">
    <x-header
      style="width:100%;position:absolute;left:0;top:0;z-index:100;"
      :right-options="{showMore: false}"
      @on-click-more="showMenus = false"
    >账号注册</x-header>
    <div class="title-container">
      <div class="title-1">Welcome to the</div>
      <div class="title-2">ISLAND</div>
    </div>
    <div class="regist-box">
    <group class="no-border">
      <x-input
        title="昵称 |"
        name="nickname"
        placeholder="给自己取个昵称吧"
        v-model="nickname"
        keyboard="number"
        is-type="china-mobile"
        class="border"
        required
      >
        <img slot="label" src="../assets/imgs/me.svg" class="logo" />
      </x-input>
    </group>
    <group class="no-border">
      <x-input
        title="手机 |"
        name="phone"
        placeholder="请输入手机号码"
        v-model="phone"
        keyboard="number"
        is-type="china-mobile"
        class="border"
        required
      >
        <img slot="label" src="../assets/imgs/phone.svg" class="logo" />
      </x-input>
    </group>
    <group class="no-border">
      <x-input title type="text" placeholder="请输入验证码" v-model="code" class="border" required>
        <img slot="label" src="../assets/imgs/code.svg" class="logo" />
        <x-button
          slot="right"
          type="primary"
          mini
          :disabled="getCode.disabled"
          @click.native="handleGetCode"
        >{{getCode.txt}}</x-button>
      </x-input>
    </group>
    <group class="no-border">
      <x-input
        title
        type="password"
        class="border"
        placeholder="请设置登录密码"
        v-model="password"
        :min="6"
        :max="16"
        required
      >
        <img slot="label" src="../assets/imgs/lock.svg" class="logo" />
      </x-input>
    </group>
    </div>
    <div class="normal-font-size">
      <span>注册后，您的微信账号和手机号都可以登录</span>
    </div>
    <!--    <p>
      <span>注册后，您的微信账号和手机号都可以登录</span>
    </p>-->
    <box gap="10px 25px">
      <x-button type="primary" @click.native="handleRegist">注册</x-button>
    </box>
    <div class="normal-font-size">
      <router-link to="/Login">已有账号？去登录</router-link>
    </div>
  </div>
</template>

<script>
import { XInput, Box, Group, XButton } from "vux";

export default {
  name: "regist",
  data() {
    return {
      nickname: "", //昵称
      phone: "", //手机号
      code: "", //验证码
      password: "", //密码
      // passwordC: "", //确认密码
      getCode: {
        txt: "获取验证码",
        disabled: false
      }
    };
  },
  methods: {
    handleGetCode() {
      if (this.phone) {
        this.getCode.disabled = true;
        this.getCode.txt = "获取中...";
        let seconds = 60;
        let self = this;
        let time = setInterval(function() {
          --seconds;
          self.getCode.txt = seconds + "s";
          if (seconds <= 0) {
            clearInterval(time);
            self.getCode.disabled = false;
            self.getCode.txt = "获取验证码";
          }
        }, 1000);
      } else {
        this.$vux.toast.text("请先填写手机号");
      }
    },
    handleRegist() {
      if (!this.phone || !this.code || !this.password || !this.passwordC) {
        this.$vux.toast.text("您有未填项，不能注册");
      } else if (this.password != this.passwordC) {
        this.$vux.toast.text("两次输入的密码不一致");
      } else {
        this.$vux.toast.text("注册成功");
      }
    }
  },
  created() {
    window.document.title = "注册";
  },
  components: {
    XInput,
    XButton,
    Group,
    Box
  }
};
</script>

<style scoped lang="less">
.regist-box {
  width: 10.2rem;
  margin-top: 0;
  margin-left: 0.4rem;
}

.normal-font-size {
  font-size: 0.48rem;
}

.title-container {
  padding-top: 1rem;
  margin-left: 0.7rem;
  background-image: url(../assets/imgs/pen.svg);
  background-repeat: no-repeat;
  background-position: 6.4rem 1rem;
  background-size: 3.1rem;
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

.border {
  border: 1px solid #fdfdfd;
  border-radius: 45px;
  -webkit-box-shadow: 1px 3px 5px #d1cece;
  box-shadow: 1px 3px 5px #d1cece;
  margin: 0.3rem;
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
</style>

<style>
.weui-cells {
  margin-top: 0 !important;
}
input::-webkit-input-placeholder {
  color: #afb3b5;
  letter-spacing: 0.02rem;
}

input::placeholder {
  color: #afb3b5;
  letter-spacing: 0.02rem;
}
</style>