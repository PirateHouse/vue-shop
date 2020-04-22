<template>
	<div class="tab-control">
		<div class="control-item" 
				 v-for="(item,index) in titles" 
				 :key="index" 
				 @click="btnClick(index)"
				 :class="{'active':tabIndex===index}">
			<div>
				<span>{{item}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabControl',
		props:{
			titles:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				tabIndex:0
			}
		},
		methods:{
			btnClick(index){
				this.tabIndex=index
				this.$emit('tabControlClick',index)
			}
		}
	}
</script>

<style scoped>
	.tab-control{
		display: flex;
		justify-content: space-around;
		text-align:center;
		height:40px;
		line-height:40px;
		font-size:15px;
	}
	.control-item{
		flex:1;
	}
	.active span{
		padding:8px 5px;
		color:var(--color-high-text);
		border-bottom:2px solid var(--color-tint);
	}
</style>