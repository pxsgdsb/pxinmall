<template>
	<div class="tab-bar-item" @click="itemClick">
		<div v-if="!isActive"><slot name="item-icon"></slot></div>
		<div v-else><slot name="item-icon-m"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
	</div>
</template>

<script>
	export default {
	  name: 'TabBarItem',
	  props:{
		  path:String,
		  activeColor:{
			  type:String,
			  default:'red'
		  }
	  },
	  data(){
		 return{
			 // isActive:true
	 	 }
	  },
	  computed:{
		  isActive(){
			   return this.$route.path.indexOf(this.path) != -1 
		  },
		  activeStyle(){
			  return this.isActive ? {color:this.activeColor}:{}
		  }
	  },
	  methods:{
		  itemClick(){
			  this.$router.replace(this.path)
		  }
	  }
	}
</script>

<style>
	.tab-bar-item{flex: 1;text-align: center;height: 49px;font-size: 14px;}
	.tab-bar-item img{width: 24px;height: 24px;padding-top: 3px;margin-bottom: 1px;vertical-align: middle;}
	/* .active{color: #FF0000;} */
</style>
