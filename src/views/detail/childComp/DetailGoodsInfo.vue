<template>
	<div class="goods-info" v-if="Object.keys(goodsInfo).length!==0">
		<div class="goods-desc">
			{{goodsInfo.desc}}
		</div>
		<div class="goods-key">{{goodsInfo.detailImage[0].key}}</div>
		<div v-for="item in goodsInfo.detailImage[0].list" class="goods-image">
			<img :src="item" alt="" @load="goodsImage" />
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailGoodsInfo',
		props:{
			goodsInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data(){
			return{
				goodsCount:0
			}
		},
		methods:{
			goodsImage(){
				if(++this.goodsCount===this.goodsInfo.detailImage[0].list.length){
					this.$emit('goodsImageLoad')
				}
			}
		}
	}
</script>

<style scoped>
	.goods-info{
		margin-top:20px;
		
	}
	.goods-desc{
		font-size:14px;
		padding:8px;
	}
	.goods-key{
		margin:10px 0;
		padding:8px;
		
	}
	.goods-image img{
		width:100%;
	}
</style>