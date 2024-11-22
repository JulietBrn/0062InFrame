"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

function eventHandler() {
	// const $ = jQuery;
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

	new Swiper(".breadcrumb-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const swiper4 = new Swiper(".sBanners__slider--js", {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: "auto",
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
	});

  const cardsFlip = document.querySelectorAll('.item-nomin--js')
  if (cardsFlip.length) {
    cardsFlip.forEach(card => {
      card.addEventListener('click', () => card.classList.toggle('active'))
    })
  }

  
	new Swiper(".auto-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});
  
	new Swiper(".sFrameSlider__slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
    speed: 600,
    parallax: true,
	});

  const firstSectionHeight = document.querySelector('.headerBlock')

  if(firstSectionHeight) {
    const headerBlockHeight = firstSectionHeight.offsetHeight;
    let btnElements = document.querySelectorAll('.btn--js');

    document.addEventListener('scroll', () => {
      if(btnElements.length < 2) {
        btnElements = document.querySelectorAll('.btn--js');
      }
      btnElements.forEach(btnElement => {
        if (window.scrollY >= headerBlockHeight) {
          btnElement.classList.add('show-btn');
        } else {
          btnElement.classList.remove('show-btn');
        }
      });
    });
  }


}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
