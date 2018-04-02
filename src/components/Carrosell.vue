<template>
<div class="carrosell">
	 <div class="menu-button" :class="{ 'cross': menuCross }" @click="toggleMenu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
          </div>
         <swiper :options="swiperOption" style="height: auto" ref="swiper">
      
       <div class="menu" style="display: none " >Menu slide</div>
        <swiper-slide >
         
          <foto/>
        </swiper-slide>
       
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        
      </swiper>
    
</div>


</template>

<script>
	 var $ = require('jquery')
	import Foto from './Foto.vue'
	import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

   
  export default {
	  name: "carrosell",
	  components: {
    swiper,
    swiperSlide,
		  Foto
  },
    data() {
		  const self = this
      return {
		  
		   menuCross: false,
      swiperOption: {
          direction: 'horizontal',
		  initialSlide: 0,
		   resistanceRatio: 1,
          slidesPerView: 'auto',
		   slideToClickedSlide: false,
		  on: {
            slideChange() {
				
              if (this.activeIndex === 0) {
				  		
                //self.menuCross = true
				  
              } else {
				
               // self.menuCross = false
				  
              }
            }
          },
          spaceBetween: 1,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
      }
    },
	  computed: {
		  
      swiper() {
		 
        return this.$refs.swiper.swiper
      }
    },
    methods: {
      toggleMenu() {
        if (this.menuCross  === true) {
			//$(".menu").hide();
			this.menuCross = false
			$(".menu").css('display','none')
         //this.swiper.slideTo(0)
        } else {
          this.menuCross = true
			
			$(".menu").css('display','block')
        //this.swiper.slideTo(0)
        }
      }
    }
  }
	
</script>

<style lang="scss">
	 html,body {
    position: relative;
    height: 100%;
  }
  body {
    background: #eee;
  }
  .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
	.swiper-container .swiper-slide {
    height: 600px;
    line-height: normal;
  }
  
  .swiper-slide {
	  background-color: cornsilk;
   
  
  
	 display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
	  align-items: center;}
	
	 .menu {
		 z-index: 0;
		 position: relative;
		 
    min-width: 100px;
    width: 70%;
    max-width: 320px;
    background-color: #000!important;
    color: #fff;
  }
 /* .content {
    width: 50%;
  }*/
  .menu-button {
    position: absolute;
    top: 0px; right: 0px;
    padding: 15px;
    cursor: pointer;
    -webkit-transition: .3s;
    transition: .3s;
    background-color: #fff;
    /*margin: 14px;
    border-radius: 5px;*/
  }
  .menu-button .bar:nth-of-type(1) {
    margin-top: 0px;
  }
  .menu-button .bar:nth-of-type(3) {
    margin-bottom: 0px;
  }
  .bar {
    position: relative;
    display: block;
    width: 50px;
    height: 5px;
    margin: 10px auto;
    background-color: #000;
    border-radius: 10px;
    -webkit-transition: .3s;
    transition: .3s;
  }
  .menu-button:hover .bar:nth-of-type(1) {
    -webkit-transform: translateY(1.5px) rotate(-4.5deg);
    -ms-transform: translateY(1.5px) rotate(-4.5deg);
    transform: translateY(1.5px) rotate(-4.5deg);
  }
  .menu-button:hover .bar:nth-of-type(2) {
    opacity: .9;
  }
  .menu-button:hover .bar:nth-of-type(3) {
    -webkit-transform: translateY(-1.5px) rotate(4.5deg);
    -ms-transform: translateY(-1.5px) rotate(4.5deg);
    transform: translateY(-1.5px) rotate(4.5deg);
  }
  .cross .bar:nth-of-type(1) {
    -webkit-transform: translateY(15px) rotate(-45deg);
    -ms-transform: translateY(15px) rotate(-45deg);
    transform: translateY(15px) rotate(-45deg);
  }
  .cross .bar:nth-of-type(2) {
    opacity: 0;
  }
  .cross .bar:nth-of-type(3) {
    -webkit-transform: translateY(-15px) rotate(45deg);
    -ms-transform: translateY(-15px) rotate(45deg);
    transform: translateY(-15px) rotate(45deg);
  }
  .cross:hover .bar:nth-of-type(1) {
    -webkit-transform: translateY(13.5px) rotate(-40.5deg);
    -ms-transform: translateY(13.5px) rotate(-40.5deg);
    transform: translateY(13.5px) rotate(-40.5deg);
  }
  .cross:hover .bar:nth-of-type(2) {
    opacity: .1;
  }
  .cross:hover .bar:nth-of-type(3) {
    -webkit-transform: translateY(-13.5px) rotate(40.5deg);
    -ms-transform: translateY(-13.5px) rotate(40.5deg);
    transform: translateY(-13.5px) rotate(40.5deg);
  }
</style>