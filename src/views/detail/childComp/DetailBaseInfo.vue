<template>
	<div class="base-info" v-if="Object.keys(baseInfo).length!==0">
		<div  class="info">
			<div class="base-title">
				{{baseInfo.title}}
			</div>
			<div class="base-price">
				<span class="new-price">{{baseInfo.price | getPrice}}</span>
				<span class="old-price">{{baseInfo.oldPrice}}</span>
				<span class="discountDesc" v-if="baseInfo.discountDesc">{{baseInfo.discountDesc}}</span>
			</div>
		</div>
		<div class="base-columns" >
			<div >{{baseInfo.columns[0]}}</div>
			<div >{{baseInfo.columns[1]}}</div>
			<div >{{baseInfo.services[baseInfo.services.length-1].name}}</div>
		</div>
		<div class="base-services">
			<div v-for="index in baseInfo.services.length-1" :key="index" >
				<img :src="baseInfo.services[index-1].icon" alt="" />
				<span>{{baseInfo.services[index-1].name}}</span>
		</div>
		</div>
	
	</div>
</template>

<script>
	export default{
		name:'DetailBaseInfo',
		props:{
			baseInfo:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		filters:{
			getPrice(value){
				return '￥'+value
			}
		}
	}
</script>

<style scoped>
	.base-info{
			border-bottom: 8px solid #eee;
	}
	.info{
		padding:8px;
	
	}
	.base-title{
		font-size:14px;
	}
	.base-price{
		margin-top:10px;
	}
	.new-price{
		color: var(--color-high-text);
		font-size:20px;
		margin-right:10px;
	}
	.old-price{
		font-size:15px;
		text-decoration: line-through;
		margin-right:10px;
	}
	.discountDesc{
		color:#fff;
		background-color:var(--color-tint);
		padding:4px;
		border-radius: 8px;
		font-size:12px;
		text-align: center;
	}
	.base-columns{
		display: flex;
		justify-content: space-between;
		font-size: 12px;
		margin-top:10px;
		padding-bottom: 10px;
		border-bottom:1px solid #eee;
	}
	.base-services{
		display: flex;
		font-size:12px;
		justify-content: space-around;
		height:40px;
		line-height: 40px;
		
	}
	.base-services img{
		width:10px;
		height:10px;
	}
</style>