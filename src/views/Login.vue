<template>
  <div class="login" style="width: 100%;">
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
      <group>
        <x-input
          title="头像 |"
          name="phone"
          placeholder="请输入手机号码"
          class="phone"
          v-model="phone"
          keyboard="number"
          is-type="china-mobile"
          required
        >
          <img
            slot="label"
            style="padding-right:10px;display:block;"
            src="../assets/imgs/me.svg"
            width="24"
            height="24"
          />
        </x-input>
      </group>
      <group>
        <x-input
          title="锁头 |"
          type="text"
          placeholder="请输入密码"
          class="passwd"
          v-model="password"
          :min="6"
          :max="16"
          @on-change="change"
          required
        >
          <img
            slot="label"
            style="padding-right:10px;display:block;"
            src="../assets/imgs/lock.svg"
            width="24"
            height="24"
          />
        </x-input>
      </group>
    </div>
    <div class="forget-pass">忘记密码?</div>
    <box gap="10px 25px">
      <x-button type="primary" @click.native="handleLogin">登陆</x-button>
      <x-button @click.native="handleRegist">注册</x-button>
      <!-- 			<p><span class="to-regist">还没有账号？快去注册</span></p> -->
    </box>
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
// @color666:#666666;
// @color393a31:#393a31;
.input-box {
  background-color: #ffffff;
}
// .login{
// 	>p:first-of-type{
// 		padding: 20px 15px 40px;
// 		float: right;
// 		color: @color666;
// 		font-size:14px;
// 	}
// 	>p:last-of-type{
// 		width: 100%;
// 		text-align: center;
// 		color: @color393a31;
// 		font-size:14px;
// 		position: absolute;
// 		bottom: 25px;
// 	}
// }

.login {
  background-image: url(../assets/imgs/bg-island.png);
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
  width: 10rem;
  margin-top: 3.5rem;
  margin-left: 0.5rem;
}

.forget-pass {
  text-align: right;
  font-size: 0.39rem;
  margin: 0.55rem;
  color: #707070;
}

.phone {
}
</style>