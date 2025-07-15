'use strict';
gsap.registerPlugin(ScrollTrigger);

export const globalElement = {
  bodyTag: document.querySelector('body'),
  pageWrapper: document.querySelector('.page-wrapper'),
  mainWrapper: document.querySelector('.main-wrapper'),
};

export const globalEasing = {
  EASE_EASE: 'power2.out',
  EASE_EXPO: 'expo.inOut',
  EASE_POWER: 'power2.out',
  EASE_NONE: 'none',
};

// IS MOBILE CONDITION
export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

export const BASE_LIST_URL = 'https://kompot-bot.pav.studio';
export const BASE_BOT_URL = 'https://t.me/KompOtCROC_vote_dev_bot';

//
// FUNCTIONS
//

function miniOpacityPreloader() {
  const pageWrapper = globalElement.pageWrapper;

  gsap.set(pageWrapper, { autoAlpha: 0 });

  gsap.to(pageWrapper, {
    autoAlpha: 1,
    delay: 0.3,
  });
}

// Скролл наверх по нажатаю стрелки в футере
function smoothScrollTopAnimation() {
  //
  function smoothScrollToTop(duration) {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(currentTime) {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startPosition * (1 - ease));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    }

    requestAnimationFrame(scrollStep);
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  document
    .querySelector(".footer_up-arrow")
    .addEventListener("click", function () {
      smoothScrollToTop(2000);
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// ADAPTIVES /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener('load', () => {
  miniOpacityPreloader();
});

smoothScrollTopAnimation();

// ONLY DESKTOP FUNCTIONS
if (!isMobile() && window.innerWidth > 992) {
}

// ONLY MOBILE FUNCTIONS
if (isMobile() && window.innerWidth < 479) {
}
