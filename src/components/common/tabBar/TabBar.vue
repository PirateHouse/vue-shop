<template>
	<div class="tab-bar">
	<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'TabBar'
	}
</script>

<style scoped>
.tab-bar{
	position:fixed;
	left:0;
	right:0;
	bottom:0;
	height:49px;
	background-color: #f6f6f6;
	display:flex;
	justify-content: space-around;
	text-align: center;
}
</style>