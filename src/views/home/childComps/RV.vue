<template>
	<div class="rec">
		<div v-for="item in recommends" class="rec-item">
			<a :href="item.link">
				<img :src="item.image" />
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	// import{Swiper,SwiperItem} from '@/components/common/swiper'
	export default {
	  name: '',
	  props:{
		  recommends:{
			  type:Array,
			  default(){
				  return []
			  }
		  }
	  },
	  components:{},
	}
</script>

<style>
	.rec{display: flex;width: 100%;text-align: center;font-size: 12px;padding: 10px 0 20px;border-bottom:10px solid #eee;}
	.rec-item{flex: 1;}
	.rec-item img{width: 65px;height: 65px;margin-bottom: 10px;}
</style>
