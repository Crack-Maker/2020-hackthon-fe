<template>
  <div class="home-style">
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
	<x-header :left-options="{showBack: false}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
	position:absolute;left:0;top:0;z-index:100;">
				<div slot="overwrite-left">
					<img src="../../static/img/消息.svg"/>
				</div>
	</x-header>
	<HomeSlider></HomeSlider>
	<panel :header="''" :list="articleList" :type="'5'"></panel>
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
import HomeSlider from '../components/HomeSlider.vue'

export default {
  name: "Islands",
  components: {
	  XHeader,
	  DrawerDemo,
	  Masker,
	  Panel,
	  Search,
	  HomeSlider
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
	      src: '../../static/img/plane1.jpg',
        title: '五分钟和二十年',
        desc: '冬天的风吹到哪里都是刺骨的冷。正午时分，当我出差乘坐的列车缓缓到达这个名叫“紫霞”的小站时，尽管车厢里沉闷依旧，却仍然没有人打开车窗换换空气。',
        url: {
          path: '/Article',
          replace: false
        },
        meta: {
          source: '岛遇初代目',
          date: '2020-04-05',
          other: '日常'
        }
	  },{
	      src: '../../static/img/fish1.png',
        title: '钓竿',
        desc: '有个老人在河边钓鱼，一个小孩走过去看他钓鱼。老人技巧纯熟，所以没多久就钓上了满篓的鱼，老人见小孩很可爱，要把整篓的鱼送给他，小孩摇摇头，老人惊异的问道：“你为何不要？”',
        url: {
          path: '/Article',
          replace: false
        },
        meta: {
          source: '岛遇初代目',
          date: '2020-04-05',
          other: '日常'
        }
	  },{
	      src: '../../static/img/franxx2.png',
        title: '令尊',
        desc: '有个轿夫不会说客套话，有一次，他和另外几个轿夫把一位秀才抬上山后，轿夫问道：“相公，‘令尊’是什么意思？”秀才捉弄他说：“这‘令尊’二字字么，是称呼人家儿子的。”说完偷偷地掩嘴而笑。',
        url: {
          path: '/Article',
          replace: false
        },
        meta: {
          source: '岛遇初代目',
          date: '2020-04-05',
          other: '日常'
        }
	  },{
	      src: '../../static/img/people1.jpg',
        title: '阿房宫是谁烧的',
        desc: '督学的文学底子很厚，看到杜牧的诗句，油然想起《阿房宫赋》，于是顺口问起了学生： “你们知道阿房宫是谁烧的？”学生们一脸惶恐，不住地摇头：“不是我烧的，不是我烧的！”',
        url: {
          path: '/Article',
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
.home-style{
	font-family: zzgf, Arial !important;
}
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

