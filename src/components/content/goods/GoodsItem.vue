<template>
	<div class="goods-item" @click="toDetail">
		<img :src="isShowImage" alt="" @load="homeGoodsItem" />
		
		<div class="goods-info">
			<div class="goods-title">{{itemInfo.title}}</div>
			<span class="goods-price">{{itemInfo.price| newPrice}}</span>
			<span class='goods-cfav'>{{itemInfo.cfav}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name:'GoodsItem',
		props:{
			itemInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		filters:{
			newPrice(value){
				return'￥'+ value
			}
		},
		computed:{
			isShowImage(){
				return this.itemInfo.img  || this.itemInfo.image || this.itemInfo.show.img
			}
		},
		methods:{
			homeGoodsItem(){
				this.$bus.$emit('homeGoodsItem')
			},
			toDetail(){
			let iid =this.itemInfo.iid
				this.$router.push({path:'/detail',query:{iid}})
			}
		}
	}
</script>

<style scoped>
	.goods-item{
		width:48%;
		position:relative;
		padding-bottom: 40px;
	}
	.goods-item img{
		width:100%;
		border-radius: 5px;
	}
	.goods-info{
		position: absolute;
		left:0;
		right: 0;
		bottom: 10px;
		font-size:12px;
		text-align: center;
		
	}
	.goods-title{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
		margin-bottom: 3px;
	}
	.goods-price{
		color:var(--color-high-text);
	margin-right:20px;
	}
	.goods-info .goods-cfav{
		position:relative;
			padding-top:3px;
	}
	.goods-info .goods-cfav::before{
	position:absolute;
		left:-15px;
		top:2px;
		content:'';
		width:14px;
		height:14px;
		background: url('~assets/img/common/collect.svg') 0 0/14px 14px;
	}
</style>