<template>
  <div class="login">
    <x-header
      :left-options="{showBack: true}"
      :right-options="{showMore: false}"
      style="width:100%;background-color:#FFFFFF ;
    	  position:absolute;left:0;top:0;z-index:100;"
    >
      <div slot="overwrite-left" @click="handleBack()">
        <x-icon type="ios-arrow-back" size="30"></x-icon>
      </div>
    </x-header>
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
          <img
            slot="label"
            src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/me.svg"
            class="logo"
          />
        </x-input>
      </group>
      <group class="no-border">
        <x-input
          title="锁头 |"
          type="password"
          placeholder="请输入密码"
          class="passwd border"
          v-model="password"
          :min="6"
          :max="16"
          @on-change="change"
          @on-click-clear-icon="password = null"
          required
        >
          <img
            slot="label"
            src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/lock.svg"
            class="logo"
          />
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
      phone: "",
      password: "",
      token: "",
      userid: "",
      nickname: ""
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
    },
    //暂时设置回到user.vue界面
    handleLogin() {
      if (this.$refs.phone.valid) {
        this.getCode.disabled = true;
        this.getCode.txt = "获取中...";
        let that = this;
        axios
          .post("http://47.99.58.131:8080/api/login", {
            phone: that.phone, password: that.password
          })
          .then(function(response) {
            if (response.data.status === "success") {
              that.$vux.toast.text("登录成功~");
              that.phone = "response.data.phone",
              that.password = "response.data.password",
              that.token = "response.data.token",
              that.userid = "response.data.userid",
              that.nickname = "response.data.nickname"
            }
            if (response.data.status === "wname") {
              that.$vux.toast.text(
                "还没有注册哦~"
              );
            }
            if (response.data.status === "wpaswd") {
              that.$vux.toast.text(
                "密码错误哦~"
              );
            }
          })
          .catch(function(error) {
            that.$vux.toast.text("网络异常，请稍后重试");
            console.log(error);
          });
      } else if (this.phone && !this.$refs.phone.valid) {
        this.$vux.toast.text("手机号码格式不对哦~");
      } else if (!this.phone) {
        this.$vux.toast.text("请先填写手机号哦~");
      }
    },
    handleRegist() {
      this.$router.push({
        path: "/Regist"
      });
    },
    handleBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped lang="less">
.input-box {
  background-color: #ffffff;
}

.login {
  background-image: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/bg-island.png);
  background-repeat: no-repeat;
  background-position: 4.5rem 0rem;
  background-size: 8rem;
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
  width: 10.2rem;
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

.no-border div {
  margin-top: 0.1rem;
}

.vux-input-icon.weui-icon-warn:before {
  font-size: 0.5rem !important;
}

.weui-icon-warn {
  font-size: 0.5rem !important;
}
</style>
<style>
input::-webkit-input-placeholder {
  font-family: zzgf, Arial;
  color: #afb3b5;
  letter-spacing: 0.02rem;
}

input::placeholder {
  color: #afb3b5;
  letter-spacing: 0.02rem;
}
</style>