/* -------------------------
    banner slider
------------------------- */
jQuery(".banner-slider").owlCarousel({
	items: 1,
	loop: true,
	smartSpeed: 700,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	dots: false,
	nav: true,
	navText: [
		'<i class="fas fa-caret-left"></i>',
		'<i class="fas fa-caret-right"></i>',
	],
	callbacks: true,
	onInitialized: bannerMoveNav,
});
function bannerMoveNav() {
	jQuery(".banner-slider .owl-nav").appendTo(
		".banner-slider .text-block .texts"
	);
}

/* -------------------------
story slider
------------------------- */
jQuery(".story-slider").owlCarousel({
	items: 2,
	center: true,
	loop: true,
	smartSpeed: 500,
	autoplay: false,
	dots: false,
	nav: true,
	navText: [
		'<i class="fas fa-caret-left"></i>',
		'<i class="fas fa-caret-right"></i>',
	],
	responsive: {
		// breakpoint from 0 up
		0: {
			items: 1,
			center: false,
			loop: true,
			nav: true,
		},
		// breakpoint from 768 up
		768: {
			items: 1.5,
			center: true,
			loop: true,
			nav: true,
		},
		// breakpoint from 1200 up
		1200: {
			items: 4,
			center: true,
			loop: true,
			nav: true,
			autoWidth: true,
		},
	},
});

/* -------------------------
    news slider
------------------------- */
jQuery(".news-slider").owlCarousel({
	items: 1,
	loop: true,
	smartSpeed: 500,
	autoplay: false,
	dots: false,
	nav: true,
	navText: [
		'<i class="fas fa-caret-left"></i>',
		'<i class="fas fa-caret-right"></i>',
	],
	responsive: {
		// breakpoint from 0 up
		0: {
			items: 1,
			nav: false,
			center: false,
		},
		// breakpoint from 768 up
		768: {
			items: 2,
			nav: true,
			center: false,
		},
		// breakpoint from 992 up
		992: {
			items: 3,
			nav: true,
			center: false,
		},
		// breakpoint from 1200 up
		1200: {
			items: 7,
			nav: true,
			center: true,
			autoWidth: true,
		},
	},
	callbacks: true,
	onInitialized: newsMoveNav,
});
function newsMoveNav() {
	jQuery(".news-slider .owl-nav").appendTo(".news-section .section-header");
}

/* -------------------------
    gallery single item modal slider
    ------------------------- */
var $gsiSlider = jQuery(".gsi-slider");
$gsiSlider.owlCarousel({
	items: 1,
	loop: true,
	smartSpeed: 500,
	autoplay: false,
	dots: false,
	nav: true,
	navText: [
		'<i class="fas fa-caret-left"></i>',
		'<i class="fas fa-caret-right"></i>',
	],
});

// custom next slide button
jQuery(".slide-link").click(function () {
	$gsiSlider.trigger("next.owl.carousel");
});

/* -------------------------
    * gallery single items popup slide with fancybox js
    ------------------------- */
jQuery('[data-fancybox="gsi"]').fancybox({
	beforeShow: function () {
		$gsiSlider.trigger("to.owl.carousel", [0, 100]);
	},
});

/* -------------------------
    testimonial slider
    ------------------------- */
jQuery(".testi-slider").owlCarousel({
	items: 1,
	loop: true,
	smartSpeed: 500,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	dots: true,
	nav: false,
	autoHeight: true,
});

/* -------------------------
    Image mask js activation for Elementor image widget
------------------------- */
ScrollOut({
	targets: [".reveal-image-mask"],
	once: true,
});

// check course taxonomy in url
url = new URL(window.location.href);
if (
	url.searchParams.get("_location") ||
	url.searchParams.get("_length_of_course") ||
	url.searchParams.get("_course_type") ||
	url.searchParams.get("_course_level")
) {
	document.getElementById("course").scrollIntoView();
}
