<template>
  <div class="changePassword">
		<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
			  position:absolute;left:0;top:0;z-index:100;">
			  	<div slot="overwrite-left" @click="handleBack()">
			  		<x-icon type="ios-arrow-back" size="30"></x-icon>
			  	</div>
		</x-header>
	<div class="title-2">账号设置</div>
	<div class="login-box">
      <group class="no-border">
        <x-input
          title="头像 |"
          name="phone"
          placeholder="请输入新的手机号码"
          class="phone border"
          v-model="phone"
          keyboard="number"
          is-type="china-mobile"
          required
        >
          <img slot="label" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/me.svg" class="logo" />
        </x-input>
      </group>
	  <group class="no-border">
		<x-input 
		title="验证码 |"
		type="text" class="confirm border" placeholder="" v-model="code" required>
        <x-button
          slot="right"
          type="primary"
          mini
          :disabled="getCode.disabled"
          @click.native="handleGetCode"
          style="width: 100px;"
        >{{getCode.txt}}</x-button>
		<img slot="label" src="../../../../static/img/confirm.png" class="logo" />
		</x-input>
	  </group>
      <group class="no-border">
        <x-input
          title="锁头 |"
          type="text"
          placeholder="请输入新密码"
          class="passwd border"
          v-model="password"
          :min="6"
          :max="16"
          @on-change="change"
          @on-click-clear-icon="password = null"
          required
        >
          <img slot="label" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/lock.svg" class="logo" />
        </x-input>
      </group>
	  <group class="no-border">
      <x-input
        title
        type="password"
        placeholder="再次输入新密码"
		class="passwdC border"
        v-model="passwordC"
        :min="6"
        :max="16"
        required
      >
	  <img slot="label" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/lock.svg" class="logo" />
	  </x-input>
    </group>
	</div>
    <box class="login-btn-box">
      <x-button @click.native="handleConfirm" class="login-btn">确认</x-button>
    </box>
  </div>
</template>

<script>
import { XInput, Box, Group, XButton } from "vux";

export default {
  name: "regist",
  data() {
    return {
      phone: "", //手机号
      code: "", //验证码
      password: "", //密码
      passwordC: "", //确认密码
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
    handleConfirm() {
      if (!this.phone || !this.code || !this.password || !this.passwordC) {
        this.$vux.toast.text("您有未填项，不能注册");
      } else if (this.password != this.passwordC) {
        this.$vux.toast.text("两次输入的密码不一致");
      } else {
        this.$vux.toast.text("修改成功");
		this.$router.push({
		  path: "/Setup"
		});
      }
    },
	handleBack() {
		this.$router.go(-1)
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
.changePassword {
  // background-image: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/bg-island.png);
  // background-repeat: no-repeat;
  // background-position: 4.5rem 0rem;
  // background-size: 8rem;
  font-family: zzgf, Arial;
}
.normal-font-size{
  font-size: 0.48rem;
}
.title-2 {
  letter-spacing: 0.1rem;
  margin-left: 0.8rem;
  margin-top: 3rem !important;
  font-size: 0.75rem;
  font-family: "Noto Sans CJK SC", "Source Han Sans CN";
  font-weight: 1000;
  text-align: left;
  color: #667d3e;
}
.border {
  border: 1px solid #fdfdfd;
  border-radius: 45px;
  -webkit-box-shadow: 1px 4px 5px #c3c3c3;
  box-shadow: 1px 4px 5px #c3c3c3;
  margin: 0.2rem;
  padding: 0.2rem 0.6rem;
  text-indent: 0.5em;
  font-size: 0.45rem;
}

.logo {
  padding-right: 0.6rem;
  display: block;
  width: 0.65rem;
  border-right: 0.02rem solid #afb3b5;
}
.login-box {
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.login-btn-box {
  margin: 0 1rem;
  margin-top: 3rem;
}
.login-btn {
  border-radius: 10px;
  background-color: #667d3e;
  color: white;
  height: 1.5rem;
  line-height: 0;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 400;
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
	font-family: zzgf, Arial;
	letter-spacing: 0.02rem;
}
</style>