<template>
	<div id="cart">
		<nav-bar class="cart-nav"><div slot="center">购物车({{cartLength}})</div></nav-bar>
		<scroll class="cart-scroll">
			<cart-info></cart-info>
		</scroll>
		<cart-bottom></cart-bottom>
	</div>
</template>

<script>
	import NavBar from 'common/navBar/NavBar'
	import Scroll from 'common/scroll/Scroll'
	import {mapGetters} from 'vuex'
	
	
	import CartInfo from './childComp/CartInfo'
	import CartBottom from './childComp/CartBottom'
	export default{
		name:'Cart',
		components:{
			NavBar,
			CartInfo,
			CartBottom,
			Scroll
		},
		computed:{
			...mapGetters(['cartLength'])
		}
	}
</script>

<style scoped>
	.cart-nav{
		background-color:var(--color-high-text);
		color:#fff;
	}
	#cart{
		height:100vh;
		position:relative;
	}
	.cart-scroll{
		position:absolute;
		right:0;
		left:0;
		top:44px;
		bottom:93px;
		overflow: hidden;
	}
</style>