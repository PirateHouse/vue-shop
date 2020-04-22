<template>
	<div class="detail-nav">
		<nav-bar>
			<div class="detail-back" slot="left" @click="toBack">
				<img src="~assets/img/common/back.svg" alt="" />
			</div>
			<div class="detail-titles" slot="center" >
				<div
					v-for="(item,index) in detailTitles" 
					:key="index"
					:class="{'active':index===detailNavIndex}"
					@click="detailClick(index)">
						{{item}}
				</div>
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'common/navBar/NavBar'
	export default{
		name:'DetailNavBar',
		data(){
			return{
				detailTitles:['商品','参数','评价','推荐']
			}
		},
			props:{
			detailNavIndex:{
				type:Number,
				default:0
			}
		},
		components:{
			NavBar
		},
		methods:{
			toBack(){
				this.$router.back()
			},
			detailClick(index){
				this.$emit('detailClick',index)
			}
		}
	}
</script>

<style scoped>
	.detail-back{
		text-align: center;
		
	}
	.detail-back img{
		padding-top:10px;
	}
	.detail-titles{
	display: flex;
	justify-content: space-around;
	text-align: center;
	font-size:12px;
	}
	.active{
		color:var(--color-high-text);
	}
</style>