import { isMobile } from "./functions.js";
import Swiper from "swiper";

window.onload = function(){
	const swiperImage = new Swiper('.slider', {
		loop: false,
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		
		speed: 2000,
		preloadImages: false,
		parallax: true,
		breakpoints: {
			// when window width is >= 320px
			310:{
				slidesPerView: 1,
			},
			// 420: {
			//   slidesPerView: 3,
			// },
			// // // when window width is >= 480px
			540: {
			  slidesPerView: 2,
			},
			// when window width is >= 640px
			760: {
			  slidesPerView: 3
			}
		 }
	 });

	 const swiperTex = new Swiper('.main__nav', {
		loop: false,
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		speed: 2000,
		preloadImages: false,
		parallax: true,
		breakpoints: {
			// when window width is >= 320px
			310:{
				slidesPerView: 2,
			},
			420: {
			  slidesPerView: 3,
			},
			// // when window width is >= 480px
			570: {
			  slidesPerView: 4,
			},
			// when window width is >= 640px
			760: {
			  slidesPerView: 5
			}
		 }
	 });

	 const swiperWatched = new Swiper('.watched__body', {
		loop: true,
		loopedSlides: 4,
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		freeMode: true,
		speed: 2000,
		preloadImages: true,
		parallax: true,
		autoplay:{
			delay: 0,
			stopOnLastSlide: false,
			disableOnInteraction: false,
		}
	 });
	 const titleTub =document.querySelectorAll('.nav__item');
	 const slideTub = document.querySelectorAll('.slider__slide');

	 for(let item of titleTub){
		item.addEventListener("click", function(e) {
			titleTub.forEach(el => el.classList.remove('active-tab'))
			item.classList.add('active-tab')
		});
	}
	
	//  for (const item of titleTub) {
	// 	item.addEventListener("click", function(e) {
	// 		titleTub.forEach(element => {
	// 			element.classList.remove('active-tab')
	// 		});
	// 		for (let el of slideTub) {
	// 			el.classList.add('hidden-tab')
	// 		}
	// 		const content = item.querySelector('#' + item.dataset.slide)
	// 		content.classList.remove('hidden-tab')
	// 		item.classList.add('active-tab')
	// 	});
	//  }

	 for(let i = 0, lgt = titleTub.length; i < lgt; i++) { 
		titleTub[i].onclick = function(e) { 
			e.preventDefault()
			 var titleTubGetData = titleTub[i].getAttribute('data-slide');
			 swiperImage.slideTo(titleTubGetData, 2000);   
		}
  }
	 
}