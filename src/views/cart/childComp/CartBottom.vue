<template>
	<div class="cart-bottom">
		<cart-checked 
				class="bottom-checked" 
				:is-checked="isAllChecked"
				@checkedClick="allChecked"></cart-checked>
		<div class="checked-all">全选</div>
		<div class="total">合计：{{totalPrice}}</div>
		<div class="go-shop">去计算({{cartIsChecked}})</div>
	</div>
</template>

<script>
	import CartChecked from './CartChecked'
	import {mapGetters} from 'vuex'
	export default{
		name:'CartBottom',
		components:{
			CartChecked
		},
		computed:{
			...mapGetters(['cartList','cartLength']),
			//查找vuex中所有的checked 只要有一个false和undefined 全选按钮不能是true
			isAllChecked(){
				//如果vuex中的cartLength 为空，就直接返回false
			 if(this.cartLength==0) return false
			 //因为vuex中的checked定义为false，find查找只能查找true，所以先取反，返回true时证明有false，在取反返回的是false
			 return !this.cartList.find(item =>!item.checked)
			},
			//查找vuex中checked为true的价格与数量
			totalPrice(){
					return 	this.cartList.filter(item =>item.checked).reduce((proValue,item)=>{
						return proValue+item.price*item.count
					},0).toFixed(2)
				},
			//去结算的个数
			cartIsChecked(){
				return this.cartList.filter(item =>item.checked).length
			}
			},
			methods:{
				allChecked(){
					//如果购物车有值
					if(this.cartLength){
						//如果购物车的商品checked都是为false，
						if(this.cartList.find(item =>!item.checked)){
						//将所有的checked都该为true
							this.cartList.forEach( item =>{
								item.checked=true
							})
						}else{
								this.cartList.forEach(item =>{
									item.checked=false
								})
						}
						
					}
					
						
				}
			}
			
	
	}
</script>

<style scoped>
.cart-bottom{
	position:fixed;
	left:0;
	right:0;
	bottom: 49px;
	height:44px;
	background-color:#eee;
	box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
	display: flex;
	align-items: center;
	justify-content: space-between;

}
.bottom-checked{
	margin-left:20px;
}
.checked-all, .total{
	margin-right:20px;
}
.go-shop{
	background-color: orangered;
	color:#fff;
	width:100px;
	text-align: center;
	height:44px;
	line-height:44px;
	float:right;
	
}
	
</style>