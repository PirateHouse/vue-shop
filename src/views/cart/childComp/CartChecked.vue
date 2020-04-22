<template>
	<div class="cart-checked" @click="checkedClick" :class="{'acitive':isChecked}">
		<img src="~assets/img/cart/tick.svg" alt="" />
	</div>
</template>

<script>
	export default{
		name:'CartChecked',
		methods:{
			checkedClick(){
				this.$emit('checkedClick')
			}
		},
		props:{
			isChecked:{
				type:Boolean,
				default:false
			}
		}
		
	}
</script>

<style scoped>
	.cart-checked{
		margin-right:5px;
		width:18px;
		height:18px;
		border:1px solid #ccc;
		border-radius:50%;
	}
	
	.acitive{
		background-color:var(--color-high-text);
	
	}
</style>