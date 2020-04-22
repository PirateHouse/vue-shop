<template>
	<div id="category">
		<nav-bar class="category-nav"><div slot="center">商品分类</div></nav-bar>
		<div class="content">
			<category-list :category-left="categoryList" @leftClick="leftClick"></category-list>
			<sup-category-list :category-right="categoryRight"></sup-category-list>
		</div>
	</div>
</template>

<script>
	import {getCategory,getSubCategory} from 'network/category'
	
	import NavBar from 'common/navBar/NavBar'
	
	import CategoryList from './childComp/CategoryList'
	import SupCategoryList from './childComp/SupCategoryList'
	export default{
		name:'Category',
		components:{
			NavBar,
			CategoryList,
			SupCategoryList
		},
		data(){
			return{
				categoryList:[],
				categoryRight:[]
			}
		},
		created(){
			//调用函数
			this._getCategory()
		},
		methods:{
			//创建获取左边分类函数
			_getCategory(){
				getCategory().then(res=>{
					this.categoryList=res.data.category.list
					//调用右边数据
					this._getSubCategory(0);
				})
			},
			//点击左边titles获取右边的数据
			leftClick(index){
				this._getSubCategory(index);
			},
			//创建右边请求函数，
			_getSubCategory(index){
				let maitKeys =this.categoryList[index].maitKey
				getSubCategory(maitKeys).then(res=>{
					this.categoryRight=res.data.list
				})
			}
		}
	}
</script>

<style scoped>
	.category-nav{
		background-color:var(--color-high-text);
		color:#fff;
	}
	#category{
		position: relative;
		height:100vh;
	}
	.content{
		width:100%;
		display: flex;
		position:absolute;
		left:0;
		right:0;
		top:44px;
		bottom: 49px;
		overflow: hidden;
	}
</style>