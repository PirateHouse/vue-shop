<template>
	<scroll >
		<div class="category-list">
			<div v-for="(item,index) in categoryLeft" 
							class="list-item"
							@click="leftClick(index)"
							:class="{'active':index===leftIndex}"
							>
					{{item.title}}
			</div>
		</div>
	</scroll>
</template>

<script>
	import Scroll from 'common/scroll/Scroll'
	export default{
		name:'CategoryList',
		components:{
			Scroll
		},
		props:{
			categoryLeft:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return{
				leftIndex:0
			}
		},
		methods:{
			leftClick(index){
				this.leftIndex=index
				this.$emit('leftClick',index)
			}
		}
	}
</script>

<style scoped>
	.category-list{
		width:100px;
		height:100%;
		background-color: #F6F6F6;
		font-size:14px;
	}
	.list-item{
		height: 45px;
		line-height: 45px;
		text-align: center;
	}
	.active{
		color:var(--color-high-text);
		background-color:#fff;
		border-left:2px solid var(--color-tint);
		
	}
	
</style>