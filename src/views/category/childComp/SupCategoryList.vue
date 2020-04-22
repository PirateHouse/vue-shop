<template>
	<scroll class="sub-scroll">
		<div class='sub-category'>
			<div class="category-item" v-for="item in categoryRight">
				<a :href="item.link">
					<img :src="item.image" alt="" />
					<div class="item-title">{{item.title}}</div>
				</a>
			</div>
		</div>
	</scroll>
</template>

<script>
	import Scroll from'common/scroll/Scroll'
	export default{
		name:'SupCategoryList',
		components:{
			Scroll
		},
		props:{
			categoryRight:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.sub-scroll{
		width:100%;
		margin-top:10px;
	}
	.sub-category{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		
	}
	.category-item{
		width:30%;
		text-align: center;
		font-size:12px;
	}
	.category-item img{
		width:50px;
		height:50px;
		border-radius: 50%;
	}
	.item-title{
		
		height:30px;
		line-height: 30px;
	}
</style>