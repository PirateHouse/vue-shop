<template>
	<div class="comment-info" v-if="Object.keys(commentInfo).length!==0">
		<div class="info-header">
			<div>用户评论</div>
			<div>更多
				<i class="arrow-right"></i>
			</div>	
		</div>
		
		<div class="comment-user">
			<img :src="commentInfo.list[0].user.avatar" alt="" />
			<span>{{commentInfo.list[0].user.uname}}</span>
		</div>
		<div class="comment-content">
			{{commentInfo.list[0].content}}
		</div>
		<div class="comment-created">
				<span>{{commentInfo.list[0].created | showDate}}</span>
				<span>{{commentInfo.list[0].style}}</span>
		</div>
		<div class="comment-img">
			<img :src="item" v-for="item in commentInfo.list[0].images" alt="" />
		</div>
	</div>
</template>

<script>
		import {formatDate } from '@/common/utils'
	
	export default{
		name:'DetailCommentInfo',
		props:{
			commentInfo:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		filters:{
			showDate(value){
				let date =new Date(value*1000)
				return formatDate(date,'yyyy-MM-dd')
			}
		}
	}
</script>

<style scoped>
	.info-header{
		margin:15px 8px 0 8px;
		display: flex;
		height:50px;
		line-height: 50px;
		justify-content:space-between;
		border-bottom: 1px solid #eee;
		font-size:14px;
	}
	.comment-user{
		margin:15px 8px;
		display: flex;
		align-items: center;
	}
	
	.comment-user img{
		width:45px;
		height:45px;
		border-radius: 50%;
		margin-right:10px;
	}
	.comment-content{
		margin:15px 8px;
		font-size:14px;
		
	}
	.comment-created{
		font-size:14px;
		margin:15px 8px;
	}
	.comment-created span{
		margin-right: 10px;
	}
	.comment-img{
		margin:15px 8px;
	}
	.comment-img img{
		 width: 70px;
    height: 70px;
    margin-right: 5px;
	}
</style>