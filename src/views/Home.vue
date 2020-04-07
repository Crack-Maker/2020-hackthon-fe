<template>
  <div>
<!-- 	  设计目前不打算这个页面要搜索栏
	 <div class="normal-font-size">
		<search
		     @result-click="resultClick"
		     @on-change="getResult"
		     :results="results"
		     v-model="value"
		     position="absolute"
		     auto-scroll-to-top
		     top="1.5rem"
		     @on-focus="onFocus"
		     @on-cancel="onCancel"
		     @on-submit="onSubmit"
		     ref="search"></search>
	 </div> -->
	<x-header :left-options="{showBack: false}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
			  首页</x-header>
	<panel :header="'最近发布的内容'" :list="articleList" :type="'5'"></panel>
	<br />
	<TabBarDemo></TabBarDemo>
<!-- 		4.5日注释掉，暂时用panel替换掉它，可以作为有需要的时候的例子	 -->  
<!-- 	<div style="margin: 10px;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
         <router-link :to="{path: '/' + item.island}">{{item.title}}</router-link>
          <br/>
          <span class="m-time">2020-04-03</span>
        </div>
      </masker>
    </div> -->
  </div>
</template>
<script>
import { XHeader, Masker, Panel, Search } from 'vux'
import DrawerDemo from '../components/DrawerDemo.vue'

export default {
  name: "Islands",
  components: {
	  XHeader,
	  DrawerDemo,
	  Masker,
	  Panel,
	  Search
  },
	 methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  data () {
    return {
	  results: [],
	  value: 'test',
	  articleList: [{
	      src: 'https://gz-1301715442.cos.ap-guangzhou.myqcloud.com/01.jpg',
        title: '面朝大海，春暖花开',
        desc: '这里是内容',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '岛遇初代目',
          date: '2020-04-05',
          other: '日常'
        }
	  },{
	      src: 'https://gz-1301715442.cos.ap-guangzhou.myqcloud.com/01.jpg',
        title: '面朝大海，春暖花开',
        desc: '这里是内容',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '岛遇初代目',
          date: '2020-04-05',
          other: '日常'
        }
	  },{
	      src: 'https://gz-1301715442.cos.ap-guangzhou.myqcloud.com/01.jpg',
        title: '面朝大海，春暖花开',
        desc: '这里是内容',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '岛遇初代目',
          date: '2020-04-05',
          other: '日常'
        }
	  },{
	      src: 'https://gz-1301715442.cos.ap-guangzhou.myqcloud.com/01.jpg',
        title: '面朝大海，春暖花开',
        desc: '这里是内容',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '岛遇初代目',
          date: '2020-04-05',
          other: '日常'
        }
	  }],
      list: [{
        title: '故事之岛',
        img: 'https://gz-1301715442.cos.ap-guangzhou.myqcloud.com/01.jpg',
		island:"island1"
      }, {
        title: '分享之岛',
        img: 'https://gz-1301715442.cos.ap-guangzhou.myqcloud.com/02.jpg',
		island:"island2"
      }, {
        title: '回忆之岛',
        img: 'https://gz-1301715442.cos.ap-guangzhou.myqcloud.com/03.jpg',
		island:"island3"
      },{
        title: '故事之岛',
        img: 'https://gz-1301715442.cos.ap-guangzhou.myqcloud.com/01.jpg',
		island:"island1"
      }, {
        title: '分享之岛',
        img: 'https://gz-1301715442.cos.ap-guangzhou.myqcloud.com/02.jpg',
		island:"island2"
      }, {
        title: '回忆之岛',
        img: 'https://gz-1301715442.cos.ap-guangzhou.myqcloud.com/03.jpg',
		island:"island3"
      }]
    }
  }
}

// 官网抄下来的
function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style scoped lang="less">
.m-img {
  // padding-bottom: 33%;
  padding-bottom: 45%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 0.8rem;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}

.m-time {
  font-size: 0.6rem;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
.normal-font-size{
	font-size: 0.5rem;
}
</style>

