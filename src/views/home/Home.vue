<template>
	<div id="home">
			<nav-bar class="home-nav">
				<div slot="center">购物街</div>
			</nav-bar>
			<tab-control :titles="['流行','新款','精选']"
											@tabControlClick="tabControlClick"
											ref="tabControl1"
											v-show="showTabControl"
											class="tabControl1"></tab-control>
			<scroll class="home-scroll"
							:probe-type="3"
							:pull-up-load="true"
							@scrollPullingUp="scrollPullingUp"
							ref="homeScroll"
							@contentScroll='contentScroll'>
				<swiper :banners="banners" @swiperImage="swiperImage"></swiper>
				<home-recommend :recommends="recommend"></home-recommend>
				<home-feature></home-feature>
				<tab-control :titles="['流行','新款','精选']"
											@tabControlClick="tabControlClick"
											ref="tabControl2"></tab-control>
				
				<goods :goods="goods[this.currentType].list"></goods>
			</scroll>
			<back-top v-if="showBackTop" @click.native="backTopClick"></back-top>
	</div>
</template>

<script>
	import NavBar from 'common/navBar/NavBar'
	import TabControl from 'common/tabControl/TabControl'
	import Scroll from 'common/scroll/Scroll'
	
	import {getHomeMultidata,getHomeGoods} from 'network/home'
	
	
	import Swiper from './childComp/Swiper'
	import HomeRecommend from './childComp/HomeRecommend'
	import HomeFeature from './childComp/HomeFeature'
	import Goods from 'content/goods/Goods'
	import BackTop from 'content/backTop/BackTop'
	export default{
		name:'Home',
		components:{
			NavBar,
			Scroll,
			Swiper,
			HomeRecommend,
			HomeFeature,
			TabControl,
			Goods,
			BackTop
		},
		data(){
			return{
				banners:[],
				recommend:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{page:0,list:[]},
				},
				currentType:'pop',
				showBackTop:false,
				saveY:0,
				showTabControl:false,
				tabControl2Top:null
			}
		},
		created(){
			//调用函数，请求banner和recommend数据
			this._getHomeMultidata()
			//调用函数，请求商品图片信息等数据
			this._getHomeGoods('pop')
			this._getHomeGoods('new')
			this._getHomeGoods('sell')
		
		},
		mounted(){
			let refresh=this.debounce(this.$refs.homeScroll.refresh,500)
			this.$bus.$on('homeGoodsItem',()=>{
				refresh()
			})
		},
		//activated 与deactivated 配合App中的keep-alive使用才有效果
		activated(){
			//页面活跃时，跳转到上一次的saveY，并重新计算高度
			this.$refs.homeScroll.scrollTo(0,this.saveY,0)
			this.$refs.homeScroll.refresh()
		},
		//页面不活跃时，将当前位置赋值给saveY
		deactivated(){
			this.saveY=this.$refs.homeScroll.scroll.y
		},
		methods:{
			//创建banner和recommend请求函数
			_getHomeMultidata(){
				getHomeMultidata().then(res=>{
					this.banners=res.data.banner.list
					this.recommend=res.data.recommend.list
	
				})
			},
			//创建商品图片信息请求函数
			_getHomeGoods(type){
				//先获取type中的page信息
				let page=this.goods[type].page+1
				getHomeGoods(type,page).then(res=>{
					//将数据存放在goods[type].list中
					this.goods[type].list.push(...res.data.list)
					//在修改goods[type].page 
					this.goods[type].page=page
				})
			},
			//点击tabcontrol 切换商品信息
			tabControlClick(index){
				switch(index){
					case 0:
						this.currentType='pop'
						break;
					case 1:
						this.currentType='new'
						break;
					case 2:
						this.currentType='sell'
						break;
				}
				this.$refs.tabControl1.tabIndex=index
				this.$refs.tabControl2.tabIndex=index
			},
			//上拉加载更多数据
			scrollPullingUp(){
				//调用函数，请求更多的数据
				this._getHomeGoods(this.currentType)
				//告知scroll已完成加载更多操作
				this.$refs.homeScroll.finishPullUp()
			},
			//监听页面滚动
			contentScroll(position){
				//当页面滚动到1000时，显示返回顶部按钮
				this.showBackTop =-position.y>1000
				//页面滚动大于tabcontrol2时，显示tabcontrol1
				this.showTabControl=-position.y>this.tabControl2Top
			},
			//点击返回顶部
			backTopClick(){
				this.$refs.homeScroll.scrollTo(0,0)
			},
			 //防抖函数
			 debounce(func,delay){
			 	let timer=null
			 	return function(...args){
			 		if(timer)clearTimeout(timer)
			 		timer=setTimeout(()=>{
			 			func.apply(this,args)
			 		},delay)
			 	}
			 	
			 },
			 //当轮播图片加载完毕后，获取tabcontrol2的offsetTop
			 swiperImage(){
			 	this.tabControl2Top=this.$refs.tabControl2.$el.offsetTop
			 }
		}
		
	}
</script>

<style scoped>
	.home{
		height:100vh;
		position:relative;
	}
	.home-nav{
		background-color:var(--color-tint);
		color:#fff;
	}
	.home-scroll{
		position:absolute;
		left:0;
		right:0;
		top:44px;
		bottom:49px;
		overflow: hidden;
	}
	.tabControl1{
		position: relative;
		z-index: 1;
		background-color: #fff;
	}
</style>