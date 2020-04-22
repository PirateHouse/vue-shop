<template>
	<div class="home-recommend">
		<div v-for="item in recommends" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt=""/>
				<div class="recommend-title">{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:'HomeRecommend',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.home-recommend{
		display: flex;
		text-align: center;
		margin-top:15px;
		font-size:14px;
		border-bottom:8px solid #eee;
	}
	.recommend-item{
		flex:1;
	}
		.recommend-item img{
		width:70px;
		height:70px;
	}
	.recommend-title{
		padding:10px 5px;
	}
</style>