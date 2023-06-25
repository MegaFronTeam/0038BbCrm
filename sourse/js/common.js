"use strict";

const $ = jQuery;

function eventHandler() { 


	var swiper = new Swiper(".mySwiper", {
		direction: "vertical",
		slidesPerView: "auto",
		freeMode: true,
		scrollbar: {
			el: ".swiper-scrollbar",
		},
		mousewheel: true,
	});
	$(".toggle-aside-js").on("click", function(){
		$(".aside-dropdown").toggleClass("d-none")
	})
};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }