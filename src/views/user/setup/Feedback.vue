<template>
<div>
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
		  position:absolute;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
	</x-header>
	<div class="main-info">
	  <br />
	  <flexbox>
	        <flexbox-item :span="5/12">
			  <div class="upload-btn common mb_10" v-if="!isShow">
				<label>
					<input type="file" @change="uploadImg">
				</label>
				<!-- <img style="height: 3.3rem;margin-left: 1rem;
				background-size: auto 100%;border-radius: 2rem;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/aiji.jpg"/> -->
			  </div>
			  <div class="img-list-item common mb_10" v-if="isShow">
			     <img :src="src" class="common">
			     <i class="del-img" @click="forkImage"></i>
			  </div>			  			  
			</flexbox-item>
	        <flexbox-item :span="11/24"><div>
				<div class="name-font-style"><p>Refuel Island</p></div>
				<div class="normal-font-size">Refuel Island的个性签名</div>
			</div></flexbox-item>
			<flexbox-item :span="3/24">
				<div @click="linkToChangeName()">
					<img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/modify.png" />
				</div>
			</flexbox-item>
	      </flexbox>
		  <div style="position: relative;left: -3rem;top: -0.5rem;">
		  		  <font size="2" color="#888888">点击图片可换头像</font>
		  </div>
<!-- 		  <img src="../../../../static/img/aiji.jpg"/> -->
<!-- 	  <div>
		<img style="height: 3.3rem;margin-left: 1rem;
		background-size: auto 100%;border-radius: 2rem;" align="left" src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/aiji.jpg"/>
	  </div> -->
	  <!-- 显示用户昵称 -->
<!-- 	  <div class="name-font-style"><p>Refuel Island</p>
	  <div @click="linkToChangeName()" style="position: relative;right: -2.5rem;top: -1rem;">
		  <img src="https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/modify.png" /></div>
	  </div>
	  <div class="normal-font-size">Refuel Island的个性签名</div>
	  <div style="position: relative;left: -2.8rem;top: -1rem;">
		  <font size="2" color="#888888">换头像</font>
	  </div> -->
	</div>
<!-- 	 <div class="feedback-font-size">
		<p>欢迎致电10086，联通客服为您服务</p>
	 </div> -->
	 
	 <TabBarDemoUser></TabBarDemoUser>
</div>
</template>

<script>
import { Flexbox, FlexboxItem, Divider } from 'vux'
export default {
  components: {
	Flexbox,
	FlexboxItem
  },
  data(){
	  return{
		 src: '',
		 isShow:false,
	  }
  },
  methods:{
  	//页面跳转方法
	handleBack() {
		this.$router.go(-1)
	},
	uploadImg (e) {
	    let _this = this;
	    let files = e.target.files[0];
	    if (!e || !window.FileReader) return; // 看支持不支持FileReader
	    let reader = new FileReader();
	    reader.readAsDataURL(files); // 这里是最关键的一步，转换就在这里
	    reader.onloadend = function () {
	        _this.src = this.result;
	        _this.isShow = true;
	    }
	},
	        
	forkImage () {
	    this.src = '';
	    this.isShow = false;
	}
  }
}
</script>

<style scoped lang="less">
.login {
  background-image: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/bg-island.png);
  background-repeat: no-repeat;
  background-position: 4.5rem 0rem;
  background-size: 8rem;
}
.feedback-font-size{
  margin-top: 7.5rem;
  font-size: 0.75rem;
  letter-spacing: 0.1rem;
  font-family: zzgf, Arial;
  font-weight: 400;
}
.main-body{
	background: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/assets/imgs/bg-island.png)no-repeat !important;
	background-size:100% auto;
	/* 禁止页面拖动 */
	touch-action: none;
}
.main-info{
/* 	background: url(https://is-1254441798.cos.ap-shanghai.myqcloud.com/static/img/frank.svg)no-repeat;
	background-size:100% auto; */
	margin-top: -1rem;
}
.name-font-style{
	font-size: 0.7rem;
	font-family: zzgf, Arial;
	margin-top: 1rem;
}
.normal-font-size{
  font-size: 0.5rem;
  font-family: zzgf, Arial;
  color:#393A31;
}
.common {
            // width: 148px;
            // height: 148px;
			width: 4.5rem;
			height: 4.5rem;
            // border: 1px solid #d8d8d9;
			border-radius: 3rem;
        }
        .img-list-item {
            position: relative;
            margin: auto;
        }
        .img-list-item img {
            box-sizing: border-box;
            vertical-align: middle;
            border: 0;       
        }
        .img-list-item i.del-img {
            // width: 15px;
            // height: 15px;
			height: 3.3rem;
			// margin-left: 1rem;
			background-size: auto 100%;
            display: inline-block;
            background: rgba(0,0,0,.6);
            background-image: url(../../../../static/img/aiji.jpg);
            background-size: auto 100%;
            background-repeat: no-repeat;
            background-position: 50%;
            position: absolute;
            top: 0;
            right: 0;
			border-radius: 2rem !important;
        }
        .upload-btn {
            background: url('../../../../static/img/aiji.jpg') no-repeat 50%;
			background-size: auto 100%;
            margin: auto;
        }
        input[type="file"] {
            color: transparent;
            opacity: 0;
            width: 100%;
            height: 100%;
			border-radius: 2rem;
        }
        #wrapper:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }
        .mb_10 {
            margin-bottom: 10px; 
			border-radius: 3rem;
        }
</style>
