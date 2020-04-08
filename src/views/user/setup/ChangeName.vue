<template>
  <div class="changePassword">
		<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
			  position:absolute;left:0;top:0;z-index:100;">
			  	<div slot="overwrite-left" @click="handleBack()">
			  		<x-icon type="ios-arrow-back" size="30"></x-icon>
			  	</div>
		</x-header>
	<div class="title-2">编辑个人信息</div>
	<div class="login-box">
      <group class="no-border">
        <x-input
          title="修改昵称 &nbsp;|"
          name="phone"
          placeholder="请输入新的昵称"
          class="phone border"
          v-model="phone"
          keyboard="number"
          is-type="china-mobile"
          required
        >
        </x-input>
      </group>
      <group class="no-border">
        <x-input
          title="修改个签 &nbsp;|"
          name="phone"
          placeholder="请输入新的个签"
          class="phone border"
          v-model="phone"
          keyboard="number"
          is-type="china-mobile"
          required
        >
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

    },
    handleConfirm() {
		this.$router.push({
		  path: "/Setup"
		});
    },
	handleBack() {
		this.$router.go(-1)
	}
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
  background-image: url(../../../../static/img/leaf.png);
  background-repeat: no-repeat;
  // background-position: 4.5rem 0rem;
  background-size: auto 100%; 
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
.no-border div:before {
  display: none;
}
.no-border div:after {
  display: none;
}
.no-border div {
  margin-top: 0.1rem;
}
.border {
  border: 1px solid #fdfdfd;
  border-radius: 45px;
  -webkit-box-shadow: 1px 4px 5px #c3c3c3;
  box-shadow: 1px 4px 5px #c3c3c3;
  margin: 0.2rem;
  padding: 0.4rem 0.1rem;
  text-indent: 0.5em;
  font-size: 0.5rem;
  font-family: zzgf, Arial;
  font-weight: 400;
  color: #008000;
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
  margin-top: 5rem;
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
</style>