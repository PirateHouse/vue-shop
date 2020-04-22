<template>
	<div class="cart-info">
		<cart-list-item v-for="item in cartList":cart-list="item"></cart-list-item>
	</div>
</template>

<script>

	import CartListItem from './CartListItem'
	import {mapGetters} from 'vuex'
	export default{
		name:'CartInfo',
		components:{
			CartListItem
		},
		computed:{
			...mapGetters(['cartList'])
		}
		
	}
</script>

<style scoped>

</style>