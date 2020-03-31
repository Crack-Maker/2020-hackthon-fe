<template>
  <div class="drawer">
    <drawer
      width="200px;"
      :show.sync="isshow"
      show-mode="push"
      placement="left"
      :drawer-style="{'background-color':'#35495e', width: '200px',height:'100px'}">
      <!-- drawer content -->
      <div slot="drawer">
        1111111
      </div>
      <div slot="drawer">
        222222
      </div>
      <div class="btn2">
        <x-button @click.native="isshow=!isshow" type="primary" plain>{{this.isshow?'-':'+'}}</x-button>
      </div>
      <div>
        <router-view>22222</router-view>
      </div>
    </drawer>
  </div>
</template>

<script>
  import { XButton,Drawer } from 'vux'
  export default {
    name: "drawerDemo",
    components: {
       XButton,Drawer
    },
    data () {
      return {
        isshow:false,
      }
    }
  }
</script>
<style lang="less">
  * { touch-action: none;touch-action: pan-y;touch-action: pan-x; }
  .btn2{
    width: 60px;
    height: 60px;
  }
  .drawer {
    position: fixed;
  }
</style>