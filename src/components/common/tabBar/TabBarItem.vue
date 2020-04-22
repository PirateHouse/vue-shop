<template>
	<div class="tab-bar-item" @click="itemClick">
		<div class="item-icon" v-if="!isShow"><slot name="item-icon"></slot></div>
		<div class="item-icon-active" v-if="isShow"><slot name="item-icon-active"></slot></div>
		<div class="item-title" :class="{'active':isShow}"><slot name="item-title"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		data(){
			return{
//				isShow:false
			}
		},
		props:{
			path:null
		},
		methods:{
			itemClick(){
				this.$router.push(this.path)
			}
		},
		computed:{
			isShow(){
				return this.$route.path.indexOf(this.path)!==-1
			}
		}
	}
</script>

<style scoped>
.tab-bar-item{
	flex:1;
	font-size:12px;
	color:#333;
}
.tab-bar-item img{
	width:24px;
	height:24px;
	margin-top:3px;
}
.item-title{
	margin-top:3px;
}
	.active{
		color:var(--color-high-text);
	}
</style>