<template>
	<div class="tab-control">
		<div v-for="(item,index) in titles" class="tab-control-item" :class="{active:index===cuIndex}"
		@click="open(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
	  name: '',
	  components:{},
	  data(){
		  return{
			 cuIndex:0
		  }
	  },
	   props:['titles'],
	   methods:{
		   open(index){
			   this.cuIndex=index
		   }
	   },
	
	}
</script>

<style>
	.tab-control{display: flex;text-align: center;font-size: 15px;background-color: #fff;}
	.tab-control-item{flex: 1;height: 40px;line-height: 40px;}
	.tab-control-item span{padding: 5px;}
	.active{color: #FF5777;}
	.active span{border-bottom: 3px solid #FF5777;}
</style>
