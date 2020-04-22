<template>
	<div id="detail">
		<detail-nav-bar @detailClick="detailClick"
										:detail-nav-index='detailIndex'></detail-nav-bar>
		<scroll class="detail-scroll" 
						ref="detailScroll"
						:probe-type="3"
						@contentScroll="contentScroll">
			<detail-swiper :banners="detailImage"></detail-swiper>
			<detail-base-info :base-info="detailBase"></detail-base-info>
			<detail-shop-info :shop-info="detailShop"></detail-shop-info>
			<detail-goods-info :goods-info="detailGoodsImage"
													@goodsImageLoad="goodsImageLoad"></detail-goods-info>
			<detail-params :params-info='detailParamsInfo'
											ref="paramsTop"></detail-params>
			<detail-comment-info :comment-info="commentInfo"
														ref="commentTop"></detail-comment-info>
			<detail-recommend :recommend-info="recommendInfo"
												ref="recommendTop"></detail-recommend>
		</scroll>
		<back-top v-if="isShowBack" @click.native="detailBackTop"></back-top>
		<detail-buttom @toCart="toCart"></detail-buttom>
		
	</div>
</template>

<script>
	
	import DetailNavBar from './childComp/DetailNavBar'
	import DetailSwiper from './childComp/DetailSwiper'
	import DetailBaseInfo from './childComp/DetailBaseInfo'	
	import DetailShopInfo from './childComp/DetailShopInfo'
	import DetailGoodsInfo from './childComp/DetailGoodsInfo'
	import DetailParams from './childComp/DetailParams'
	import DetailCommentInfo from './childComp/DetailCommentInfo'
	import DetailRecommend from './childComp/DetailRecommend'
	import DetailButtom from './childComp/DetailButtom'
	import { getDetail, DetailTitles,DetailShop,DetailParamsInfo,GetRecommendItem}from 'network/detail'
	
	import Scroll from 'common/scroll/Scroll'
	
	import BackTop from 'content/backTop/BackTop'
	export default{
		name:'Detail',
		components:{
			DetailNavBar,
			Scroll,
			DetailSwiper,
			DetailBaseInfo,
			DetailShopInfo,
			DetailGoodsInfo,
			DetailParams,
			DetailCommentInfo,
			DetailRecommend,
			BackTop,
			DetailButtom
		},
		data(){
			return {
				iid:null,
				detailImage:[],
				detailBase:{},
				detailShop:{},
				detailGoodsImage:{},
				detailParamsInfo:{},
				commentInfo:{},
				recommendInfo:[],
				toDetail:[],
				detailIndex:0,
				isShowBack:false,
				
			}
		},
		created(){
			this.iid=this.$route.query.iid
			this._getDetail(this.iid);
			this._GetRecommendItem()
		},
		methods:{
			//创建detail函数
			_getDetail(iid){
				getDetail(iid).then(res=>{
				//获取detailswiper图片
					this.detailImage=res.result.itemInfo.topImages
				//获取产品标题价格等信息
				this.detailBase=new DetailTitles(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
				//获取商家logo信息等
				this.detailShop= new DetailShop(res.result.shopInfo)
				//获取商品图片
				this.detailGoodsImage=res.result.detailInfo
				//获取产品参数
				this.detailParamsInfo=new DetailParamsInfo(res.result.itemParams.info,res.result.itemParams.rule)
					//获取详情
					this.commentInfo=res.result.rate
				})
			},
			//获取推荐数据
			_GetRecommendItem(){
				GetRecommendItem().then(res=>{
					this.recommendInfo=res.data.list
				})
			},
			//当商品图片加载完毕后，统一更新高度
			goodsImageLoad(){
				this.$refs.detailScroll.refresh()
				this.toDetail.push(0);
				//获取参数、评价、推荐和最大值的高度，并且保存到数据中，
				this.toDetail.push(this.$refs.paramsTop.$el.offsetTop);
				this.toDetail.push(this.$refs.commentTop.$el.offsetTop);
				this.toDetail.push(this.$refs.recommendTop.$el.offsetTop);
				this.toDetail.push(Number.MAX_VALUE)
			},
			//点击navbar跳转到指定位置
			detailClick(index){
				this.$refs.detailScroll.scrollTo(0,-this.toDetail[index])
			},
			//当页面滚动到指定位置，对应的navbar更改颜色
				contentScroll(position){
				let positionY=-position.y
				for(let i=0;i<this.toDetail.length;i++){
					if(positionY>=this.toDetail[i]&&positionY<this.toDetail[i+1]){
						if(this.detailIndex!==i){
							this.detailIndex=i
						}
						break;
					}
				}
				this.isShowBack=positionY>1000
			},
			//点击返回顶部
			detailBackTop(){
				this.$refs.detailScroll.scrollTo(0,0)
			},
			//点击加入购物车
			toCart(){
				//调用toast插件显示toast
				this.$toast.show('已加入购物车',500)
				//将购物车要显示的信息，保存到这个cartInfo里边
				const cartInfo={}
				cartInfo.iid=this.iid
				cartInfo.title=this.detailBase.title
				cartInfo.image=this.detailImage[0]
				cartInfo.price=this.detailBase.price
				cartInfo.desc=this.detailGoodsImage.desc
				//将数据放入vuex中的cartlist中
				this.$store.dispatch('addToCart',cartInfo)
			
			}
		}
	}
</script>

<style scoped>
	#detail{
		height:100vh;
		position:relative;
		background-color: #fff;
		z-index:2;
	}
	.detail-scroll{
		position:absolute;
		left:0;
		right:0;
		top:44px;
		bottom: 58px;
		overflow: hidden;
	}
</style>