$(document).ready(function(){
	mobileMenu();
	closeSearch();
	toggleSearch();
	
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
