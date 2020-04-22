<template>
	<div id="profile">
		<nav-bar class="profile-nav"><div slot="center">个人中心</div></nav-bar>
			<div class="profile-image"> 
				<img src="~assets/img/profile/profile.jpg"/>
				</div>
       <div class="profile-dire"> 
       	写的第一个微信小程序，用云开发搭建的数据库，图片尽量压缩了，但是打开网页还是慢，
       	写vue-shop后，感觉这个小程序还可以在修改修改 规划一些页面
      	 后续在找办法修改。
      	 </div>
			
	</div>
</template>

<script>
		import NavBar from 'common/navBar/NavBar'
	export default{
		name:'Profile',
		components:{
			NavBar
			
		}
		
	}
</script>

<style scoped>
	.profile-nav{
		background-color:var(--color-high-text);
		color:#fff;
	}
	.profile-image{
		display: flex;
		justify-content: space-around;
		
		padding: 20px;
	}
.profile-image img{
		width:200px;
		height:200px;
}
 
 .profile-dire{
 	text-indent: 2em;
 	height:40px;
 	line-height: 40px;
 }
</style>