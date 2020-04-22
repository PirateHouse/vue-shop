<template>
	<div class="detail-recommend">
		<div class="recommend-title">推荐数据</div>
		<goods :goods="recommendInfo"></goods>
	</div>
</template>

<script>
	import Goods from 'content/goods/Goods'
	export default{
	name:'DetailRecommend',
	components:{
		Goods
	},
	props:{
		recommendInfo:{
			type:Array,
			default(){
				return []
			}
		}
	}
	}
</script>

<style scoped>
	.recommend-title{
		padding:8px; 
		font-size:14px;
	}
</style>