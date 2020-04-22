<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide"  v-for="item in banners">
       <img :src="item" @load="swiperImage">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>

  export default {
  	name:'DetailSwiper',
  	props:{
  		banners:{
  			type:Array,
  			default(){
  				return []
  			}
  			
  		}
  	},
    data () {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination', 
            clickable: true,
          },
          //自动播放
         autoplay:{
            delay:2000,
            disableOnInteraction:false
          },
   
          //循环
          loop:true
        }
      }
    },
    mounted() {
      this.mySwiper.slideTo(3, 1000, false)
    },
    methods:{
    	swiperImage(){
    		this.$emit('swiperImage')
    	}
    }
  }
</script>
<style scoped>
	.swiper-slide{
		height:300px;
	}
	.swiper-slide img{
		width:100%;
	}
</style>