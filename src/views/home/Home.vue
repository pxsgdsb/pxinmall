<template>
	<div id="home">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<rv :recommends="recommends"></rv>
		<feature></feature>
		<tab-control :titles="['流行','新款','精选']" class="tab-control"></tab-control>
		
		<ul><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li><li>1</li></ul>
	</div>
	
</template>

<script>
	import NavBar from '@/components/common/navbar/NavBar.vue'
	import HomeSwiper from './childComps/HomeSwiper.vue'
	import Rv from './childComps/RV.vue'
	import Feature from './childComps/Feature.vue'
	import TabControl from '@/components/content/tabControl/TabControl.vue'
	
	import {getHomeMultidata,getHomeGoods} from '@/network/home.js'

	export default {
	  name: '',
	  components:{NavBar,HomeSwiper,Rv,Feature,TabControl},
	  data(){
		  return{
			  banners:[],
			  recommends:[],
			  goods:{
				'pop':{page:0,list:[]},
				'news':{page:0,list:[]},
				'sell':{page:0,list:[]},
			  }
		  }
	  },
	  created(){
			this.getHomeMultidata(),
            this.getHomeGoods()
	  },
	  methods:{
		  getHomeMultidata(){
			getHomeMultidata().then(res=>{
				// console.log(res)
				this.banners=res.data.banner.list
				this.recommends=res.data.recommend.list
			})
		  },
		  getHomeGoods(){
			 getHomeGoods('pop',1).then(res=>{
			 	console.log(res)
			 }) 
		   }
	  }
	}
</script>

<style>
	.home-nav{background-color: var(--color-tint);color: white;position: fixed;left: 0;right: 0;top: 0;z-index: 999;}
   #home{padding-top: 44px;width: 100%;}
   .tab-control{position: sticky;top: 44px;}
</style>
