<template>
  <div class="drawer">
    <drawer
      width="200px;"
      :show.sync="isShow"
      show-mode="push"
      placement="left"
      :drawer-style="{'background-color':'#35495e', width: '7rem',height:'25rem'}">
      <!-- drawer content -->
      <div slot="drawer">
          <group title="侧边菜单demo" style="margin-top:20px;">
          <cell title="Buy me a coffee" link="/user" @click.native="isShow = false"></cell>
          <cell
            title="Github"
            link="http://github.com/airyland/vux"
            value="Star me"
            @click.native="isShow = false"
          ></cell>
          <cell title="Demo" link="/user" value="用户2" @click.native="isShow = false"></cell>
          <cell title="Buy me a coffee" link="/user" @click.native="isShow = false"></cell>
          <cell
            title="Github"
            link="http://github.com/airyland/vux"
            value="Star me"
            @click.native="isShow = false"
          ></cell>
        </group>
      </div>
      <div slot="drawer">
        <group title="信息" style="margin-top:20px;">
          <cell title="Buy me a coffee" link="/user" @click.native="isShow = false"></cell>
          <cell
            title="Github"
            link="http://github.com/airyland/vux"
            value="Star me"
            @click.native="isShow = false"
          ></cell>
          <cell title="Demo" link="/user" value="用户2" @click.native="isShow = false"></cell>
          <cell title="Buy me a coffee" link="/user" @click.native="isShow = false"></cell>
          <cell
            title="Github"
            link="http://github.com/airyland/vux"
            value="Star me"
            @click.native="isShow = false"
          ></cell>
        </group>
      </div>
      <div class="btn2">
        <x-button @click.native="isShow=!isShow" type="primary" plain>{{this.isShow?'-':'+'}}</x-button>
      </div>
      <div>
        <router-view>22222</router-view>
      </div>
    </drawer>
  </div>
</template>

<script>
  import { XButton,Drawer, Group, Cell } from 'vux'
  export default {
    name: "drawerDemo",
    components: {
       XButton,Drawer,Group,Cell
    },
    data () {
      return {
        isShow:false,
      }
    }
  }
</script>
<style lang="less">
  .btn2{
    width: 60px;
    height: 60px;
  }
  .drawer {
    position: fixed;
  }
</style>