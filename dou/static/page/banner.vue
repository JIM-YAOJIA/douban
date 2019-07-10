<template>
   <div class="banner">
	   <div class="swiper-container" :class="swiperid"> 
			<div class="swiper-wrapper">
				<slot name="swiper-con"></slot>
			</div>
	        <div :class='{"swiper-pagination":paginationshow}' :style='{"text-align":paginationdestination}'>
				
			</div> 
	   </div>
	   
   </div>

    
</template>
  
<script>
     import '../../libs/swiper/js/swiper.js'
		export default{
			props:{
				swiperid:{
					type:String,
					default:''
				},
				direction:{
					type:String,
					default:'horizontal'
				},
				effect:{
					type:String,
					default:'slide'
				},
				loop:{
					type:Boolean,
					default:true
				},
				autoplay:{
					type: Number,
				    default: 2000
				},
				paginationType:{
					type: String,
					default:'bullets'
				},
				paginationdestination:{
					type:String,
					default:'center'
				},
				paginationshow:{
					type:Boolean,
					default:true
				}
				
			},
		mounted: function(){
			var That=this;
			new Swiper('.'+That.swiperid,{
				direction: That.direction,
				loop: That.loop,
				pagination:'.swiper-pagination',
				paginationType:That.paginationType,
				autoplay:That.autoplay,
				effect:That.effect
			})
			}	
		}
		
</script>
<style>
	@import '../../libs/swiper/css/swiper.css';
	.banner {width:100%; height:128px; }
	.banner .swiper-container .swiper-wrapper .swiper-slide img {width:100%}
</style>