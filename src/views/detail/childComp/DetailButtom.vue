<template>
	<div class="detail-buttom">
		<div class="detail-left">
			<div>
					<i class="icon service"></i>
       		<span class="text">客服</span>
			</div>
			<div>
					<i class="icon shop"></i>
       		<span class="text">店铺</span>
			</div>
			<div>
					<i class="icon select"></i>
       		<span class="text">收藏</span>
			</div>
		</div>
		<div class="detail-right">
				<div class="goods-cart" @click="toCart">
						<div>加入购物车</div>
				</div>
				<div class="buy">购买</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'DetailButtom',
		methods:{
			toCart(){
				this.$emit('toCart')
			}
		}
	}
</script>

<style scoped>
	.detail-buttom{
		background-color:#fff;
		display:flex;
		position:fixed;
		left:0;
		right:0;
		bottom: 0;
		height:58px;
		text-align:center;
		align-items: center;
		justify-content: space-around;
	}
	.detail-left, .detail-right{
		flex:1;
		display: flex;
	}
	.detail-left>div, .detail-right>div{
		flex:1;
	}
	
	.detail-buttom .icon{
		display:block;
		width:22px;
		height:22px;
		 margin: 10px auto 3px;
		background:url('~assets/img/detail/detail_bottom.png') 0 0/100%;
		
	}
	.text{
		font-size:13px;
	}
	.detail-buttom	.service {
    background-position:0 -54px;
  }
  .detail-buttom	.shop {
    background-position:0 -98px;
  }
  .detail-right{
  	height:58px;
  	line-height:58px;
  }
  .goods-cart, .buy{
  	font-size:14px;
  	white-space: nowrap;
  }
  .goods-cart{
 
  	background-color:#ffe817;
  	color:#333;
  }
  .buy{
  	background-color:var(--color-tint);
  	color:#fff;
  }
</style> 