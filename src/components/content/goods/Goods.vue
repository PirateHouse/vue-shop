<template>
	<div class="goods">
				<goods-item v-for="item in goods" :item-info="item"></goods-item>
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem'
	export default{
		name:'Goods',
		components:{
			GoodsItem
		},
		props:{
			goods:{
				type:Array,
				 default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.goods{
		display: flex;
		padding:4px;
		flex-wrap: wrap;
		justify-content: space-around;
	}
</style>