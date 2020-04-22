<template>
	<div class="main-tab-bar">
		<tab-bar>
			<tab-bar-item path="/home">
				<div slot="item-icon"><img src="~assets/img/tabbar/home.svg" alt="" /></div>
				<div slot="item-icon-active"><img src="~assets/img/tabbar/home_active.svg" alt="" /></div>
				<div slot="item-title">首页</div>
			</tab-bar-item>
			<tab-bar-item path="/category">
				<div slot="item-icon"><img src="~assets/img/tabbar/category.svg" alt="" /></div>
				<div slot="item-icon-active"><img src="~assets/img/tabbar/category_active.svg" alt="" /></div>
				<div slot="item-title">分类</div>
			</tab-bar-item>
			<tab-bar-item path="/cart">
				<div slot="item-icon"><img src="~assets/img/tabbar/cart.svg" alt="" /></div>
				<div slot="item-icon-active"><img src="~assets/img/tabbar/cart_active.svg" alt="" /></div>
				<div slot="item-title">购物车</div>
			</tab-bar-item>
			<tab-bar-item path="/profile">
				<div slot="item-icon"><img src="~assets/img/tabbar/profile.svg" alt="" /></div>
				<div slot="item-icon-active"><img src="~assets/img/tabbar/profile_active.svg" alt="" /></div>
				<div slot="item-title">我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'common/tabBar/TabBar'
	import tabBarItem from 'common/tabBar/TabBarItem'
	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			tabBarItem
		}
	}
</script>

<style scoped>
</style>