<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide"  v-for="item in banners">
       <a :href="item.link">
       	 <img :src="item.image" @load="swiperImage">
       </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  export default {
  	name:'Swiper',
  	props:{
  		banners:{
  			type:Array,
  			default(){
  				return[]
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
	.swiper-slide img{
		width:100%;
	}
</style>