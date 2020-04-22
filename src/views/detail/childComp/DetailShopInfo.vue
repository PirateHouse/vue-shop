<template>
	<div class="shop-info" v-if="Object.keys(shopInfo).length!==0">
		<div class="shop-name">
			<img :src="shopInfo.shopLogo" alt="" />
		<div>{{shopInfo.name}}</div>
		</div>
		<div class="detail-shop">
			<div class="shop-cSells">
				<div>{{shopInfo.cSells | newcSells}}</div>
				<span>总销量</span>
			</div>
			<div class="shop-cGoods">
				<div>{{shopInfo.cGoods}}</div>
				<span>全部宝贝</span>
			</div>
			<table class="shop-score">
				<tr v-for="item in shopInfo.score">
					<td>{{item.name}}</td>
					<td :class="{'item-score':item.isBetter}" class="score">{{item.score}}</td>
					<td :class="{'item-better':item.isBetter}" class="better">{{item.isBetter?'高':'低'}}</td>
				</tr>
			</table>	
		</div>
		<div class="detail-bottom">
			<div class="enter-shop">近店逛逛</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'DetailShopInfo',
		props:{
			shopInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		filters:{
			newcSells(value){
			 if(value<10000){
			 		return value
			 }else{
			 	return (value/10000).toFixed(1)+'万'
			 }
			 
			}
		}
	}
</script>

<style scoped>
	.shop-info{
		padding: 20px;
		border-bottom:8px solid #eee;
	}
	.shop-name img{
		width:40px;
		height:40px;
		border-radius:50%;
		margin-right: 10px;
	}
	.shop-name{
		display: flex;
		align-items: center;
		font-size:18px;
	}
	.detail-shop{
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: center;
	}
	.detail-shop span ,.shop-cGoods span{
		font-size:12px;
		margin-top:10px;
	}
		.shop-score{
			font-size:14px;
		}
	.shop-score .item-score{
	color:#f13e3a;
	}
	.score{
		color:#5ea732;
	}
	
	.better{
		background-color:#5ea732;
		color:#fff;
	}
	.shop-score .item-better{
		background-color:#f13e3a;
		color:#fff;
	}
	.detail-bottom{
		display: flex;
		justify-content: space-around;
		margin-top:20px;
	}
	.enter-shop{
		background-color:#eee;
		border-radius: 7px;
		height:30px;
		line-height: 30px;
		width:150px;
		text-align: center;
		font-size:14px;
	}
</style>