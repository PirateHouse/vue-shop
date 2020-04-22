<template>
	<div ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
	
	export default{
		name:'Scroll',
		data(){
			return{
				scroll:{}
			}
		},
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				dafault:false
			}
		},
		mounted(){
			this.scroll=new BScroll(this.$refs.wrapper,{
				probeType:this.probeType,
				click:true,
				pullUpLoad:this.pullUpLoad
			})
			//上拉加载更多
			if(this.pullUpLoad){
				this.scroll.on('pullingUp',()=>{
					this.$emit('scrollPullingUp')
				})		
			}
			//监听页面的滚动
			if(this.probeType===2 ||this.probeType===3){
				this.scroll.on('scroll',(position)=>{
					this.$emit('contentScroll',position)
				})
			}
		},
		methods:{
			//配合上拉加载更多使用，当加载完毕数据后，告知scroll已加载完毕，可执行下次加载数据
			finishPullUp(){
				this.scroll.finishPullUp()
			},
			//点击跳转到指定位置
			scrollTo(x,y){
				this.scroll.scrollTo(x,y,500)
			},
			//重新计算高度
			refresh(){
				this.scroll.refresh()
			
			}
		}
	}
</script>

<style>
</style>