<template>
<div>
	<x-header :left-options="{showBack: true}" :right-options="{showMore: false}"style="width:100%;background-color:#FFFFFF ;
		  position:absolute;left:0;top:0;z-index:100;">
		  	<div slot="overwrite-left" @click="handleBack()">
		  		<x-icon type="ios-arrow-back" size="30"></x-icon>
		  	</div>
	</x-header>
	<panel :header="''" :list="articleList" :type="'5'"></panel>
</div>
</template>

<script>
import { Panel } from 'vux'
export default {
  components: {
	  Panel
  },
  methods:{
  	//页面跳转方法
	handleBack() {
		this.$router.go(-1)
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
    },{
        src: '../../static/img/card3.png',
        title: '二十年和五分钟',
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
    }]
    }
  }
}
</script>

<style>
</style>
