$(document).ready(function(){
	mobileMenu();
	closeSearch();
	toggleSearch();
	// removeSwiperOverflow();
	// swiper()

	//calls functions
});

// $(window).on('load', function () {
// 	//calls functions
// });

// $(window).on('resize', function () {
// 	//calls functions
// });

// $(window).load(function() {
// 	//calls functions
// });

// $(window).scroll(function() {
// 	//calls functions
// });

//functions
const mobileMenu = () => {
	$('.mobile-menu').on('click', function(){
		$('.header-nav').toggleClass('active-mobile-menu');
		$('.mobile-menu').toggleClass('active-mobile-btn');
	})
}

const closeSearch = () => {
	$('#close-search').on('click', function(){
		$('.mobile-search').removeClass('active-mobile-search');
	})
}

const toggleSearch = () => {
	$('#toggle-search').on('click', function(){
		$('#toggle-search').toggleClass('active-search-btn');
		$('#mobile-search').toggleClass('active-mobile-search');
	})
}

const removeSwiperOverflow = () => {
	let swiperContainer = $("swiper-container").get(0);
	if (swiperContainer && swiperContainer.shadowRoot) {
	  let swiperElement = $(swiperContainer.shadowRoot).find(".swiper");
	  if (swiperElement.length) {
		swiperElement.css("overflow", "visible");
		// swiperElement.css("overflow-x", "hidden");
		// swiperElement.css("overflow-y", "visible");

	  }
	}
};

if ($('.swiper').length) {

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		direction: 'horizontal',
		loop: false,

		// Navigation arrows
		// navigation: {
		//   nextEl: '.swiper-button-next',
		//   prevEl: '.swiper-button-prev',
		// },

		// Responsive breakpoints
		breakpoints: {
			1200: {
				slidesPerView: 4,
				spaceBetween: 15
			},
			780: {
				slidesPerView: 3,
				spaceBetween: 15
			},
		475: {
			slidesPerView: 2,
			spaceBetween: 15
		}
		}
	});

}