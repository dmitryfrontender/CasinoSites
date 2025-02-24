
$(document).ready(function(){
	mobileMenu();
	closeSearch();
	toggleSearch();
	openFilterPopup();
	// closeFilterPopup();
	closeFilterPopup();
	toggleAccordeon();
	scrollToBenefitsContent();
	openSideBarFilter();
	closeSidebarFilter();
	displayLink();
	// showFilterAccordeon();
	roundSliderValue();
	showFullText();
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
		if ($('body').css('overflow') === 'hidden') {
            $('body').css('overflow', '');
        } else {
            $('body').css('overflow', 'hidden');
        }
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

	  }
	}
};

if ($('.swiper').length) {

	$('.swiper-pagination-bullet').css('border', '1px solid #87FE37');

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

const openFilterPopup = () => {
	$('.more-filters-btn').on('click', function() {
		$('body').css('overflow', 'hidden');
		$('.popup-category-filters').addClass('filters-popup-active');
	});
}

const openSideBarFilter = () => {
	$('.mobile-filters').on('click', function() {
		console.log('click filter')
		$('.mobile-filter').toggleClass('active-mobile-filter');
		if ($('body').css('overflow') === 'hidden') {
            $('body').css('overflow', '');
        } else {
            $('body').css('overflow', 'hidden');
        }
	})
}
const closeSidebarFilter = () => {
	$('#close-mobile-filter').on('click', function() {
		$('.mobile-filter').removeClass('active-mobile-filter');
		$('body').css('overflow', '');
	})
}

const closeFilterPopup = () => {
	$('.popup-category-filters').on('click', function(event) {
		if (!$(event.target).closest('.popup-wrapper').length) {
			$('.popup-category-filters').removeClass('filters-popup-active');
			$('body').css('overflow', 'auto');
		}
	});
	$('#close-filter-popup-btn').on('click', function(){
		$('.popup-category-filters').removeClass('filters-popup-active');
		$('body').css('overflow', 'auto');
	})
}

const toggleAccordeon = () => {
	$('#faq li').on('click', function() {
		$(this).find('.arrow').toggleClass('arrow-active');
		$(this).find('.answer').toggleClass('answer-active');

	})
}

const scrollToBenefitsContent = () => {
	$(".link-element a").on("click", (e) => {
		e.preventDefault();

		let targetElem = $($(e.currentTarget).attr("href"));

		$("html, body").animate(
			{ scrollTop: targetElem.offset().top -50 },
			600
		);
	});
};

function displayLink() {
    let debounceTimer;
    $(window).on("scroll", function () {
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(function () {
            let scrollPos = $(window).scrollTop();

            $(".content-section").each(function () {
                let top = $(this).offset().top - 120;
                let bottom = top + $(this).outerHeight();

                if (scrollPos >= top && scrollPos <= bottom) {
                    let id = $(this).attr("id");
                    $(".link-element a").removeClass("active-link");
                    $('.link-element a[href="#' + id + '"]').addClass("active-link");
                }
            });
        }, 50);
    });
}


// const showFilterAccordeon = () => {

// 	$('.icon-btn').on('click', function() {
// 		$('.head').toggleClass('active-head-btn');
// 		$('.checkbox-list').toggleClass('active-checkbox-list');
// 	})

// }

$('.filter-element .li-wrapper button').on('click', function() {
	const listItem = $(this).closest('.filter-element');

	$('.filter-element').not(listItem).removeClass('active');
	$('.filter-element .li-wrapper button').not(this).removeClass('active-btn');
	$('.checkbox-list').not(listItem.find('.checkbox-list')).removeClass('active-checkbox-list');

	listItem.toggleClass('active');
	$(this).toggleClass('active-btn');
	listItem.find('.checkbox-list').toggleClass('active-checkbox-list');
});


const roundSliderValue = () => {

	function updateProgress(container, value) {
		let circle = container.find(".progress-bar");
		let progressValue = container.find(".progress-value");

		let normalizedValue = Math.min(Math.max(value, 0), 10);

		let percent = (normalizedValue / 10) * 100;
		let offset;


		if (container.width() > 100) {

			offset = 75.4 - (75.4 * percent) / 100;
		} else {

			offset = 151 - (151 * percent) / 100;
		}

		circle.css("stroke-dashoffset", offset);

		if (normalizedValue <= 3.3) {
			circle.css("stroke", "red");
		} else if (normalizedValue <= 6.6) {
			circle.css("stroke", "yellow");
		} else {
			circle.css("stroke", "limegreen");
		}
		progressValue.text(value.toFixed(1).replace('.', ','));
	}

	$(".progress-wrapper").each(function () {
		let container = $(this);
		let input = container.find(".progress-input");

		updateProgress(container, parseFloat(input.val() || 0));

		input.on("input", function () {
			updateProgress(container, parseFloat($(this).val()));
		});
	});


};


const showFullText = () => {

	$('#show-full-text').on('click', () => {
		$('.hero-text-wrap').addClass('full-text');
		$('#show-full-text').hide();
		$('#show-less-text').show();

	})
	$('#show-less-text').on('click', () => {
		$('.hero-text-wrap').removeClass('full-text');
		$('#show-less-text').hide();
		$('#show-full-text').show();
	})
}
