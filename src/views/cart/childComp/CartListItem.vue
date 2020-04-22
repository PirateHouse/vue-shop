<template>
	<div class='cart-list-item'>
		<cart-checked @checkedClick="checkedClick" :is-checked="cartList.checked"></cart-checked>
			<div class="list-image">
				<img :src="cartList.image"/>
			</div>
			<div class="list-info"> 
				<div class="list-title">{{cartList.title}}</div>
				<div class="list-desc">{{cartList.desc}}</div>
				<div class="list-item">
					<span class="list-price">{{cartList.price | newPrice}}</span>
					<span>×{{cartList.count}}</span>
				</div>
			</div>
	</div>
</template>

<script>
		import CartChecked from './CartChecked'
	export default{
		name:'CartListItem',
		components:{
				CartChecked
		},
		props:{
			cartList:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		filters:{
			newPrice(value){
				return '￥'+value
			}
		},
		methods:{
			checkedClick(){
				//点击按钮时，修改checked
				this.cartList.checked=!this.cartList.checked
			}
		}
	}
</script>

<style scoped>
	.cart-list-item{
		padding:8px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #ccc;
	}
	.list-image img{
		width:80px;
		height:100px;
		border-radius:5px;
	}
	.list-info{
		margin-left:5px;
		overflow: hidden;
	}
	.list-title{
		font-size:17px;
		height:20px;
		line-height: 20px;
	}
	.list-title, .list-desc{
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		height:20px;
		line-height: 20px;
	}
	.list-desc{
		margin:10px 0;
		font-size:14px;
	}
	.list-item{
		padding-top:5px;
		display: flex;
		justify-content:space-between;
	}
	.list-price{
		color:var(--color-tint);
	}
</style>