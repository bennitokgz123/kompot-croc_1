'use strict';
import { globalElement, globalEasing, isMobile } from '/global/global.js';
import { BASE_LIST_URL } from '/global/global.js';
import { BASE_BOT_URL } from '/global/global.js';

//
const { bodyTag, pageWrapper, mainWrapper } = globalElement;
const { EASE_EASE, EASE_EXPO, EASE_POWER, EASE_NONE } = globalEasing;

function finalSection() {
  const sectionFinal = document.querySelector('.section_final');
  const finalBackground = document.querySelector('.final-background');
  const finalClose = document.querySelector('.final_close');

  function hideSectionFinal() {
    sectionFinal.classList.add('hidden');
    setTimeout(() => {
      sectionFinal.style.display = 'none';
    }, 500);
  }

  finalBackground.addEventListener('click', hideSectionFinal);
  finalClose.addEventListener('click', hideSectionFinal);

  sectionFinal.style.display = 'block';
  sectionFinal.classList.remove('hidden');
}

// Аккордион в FAQ
function accordion() {
  var accordion = (function () {
    var $accordion = $('.add-ons_js-accordion');
    var $accordion_header = $accordion.find('.add-ons_js-accordion-header');
    var $accordion_item = $('.add-ons_js-accordion-item');
    var $iconArrow = $('.add-ons_title-icon-wrapper');

    var settings = {
      speed: 100,
      oneOpen: false,
    };

    return {
      init: function ($settings) {
        $accordion_header.on('click', function () {
          accordion.toggle($(this));
        });

        $.extend(settings, $settings);

        if (settings.oneOpen && $('.add-ons_js-accordion-item.active').length > 1) {
          $('.add-ons_js-accordion-item.active:not(:first)')
            .removeClass('active')
            .find($iconArrow)
            .removeClass('active');
        }

        $('.add-ons_js-accordion-item.active').find('> .add-ons_js-accordion-body').show();
      },
      toggle: function ($this) {
        if (
          settings.oneOpen &&
          $this[0] !=
            $this
              .closest('.add-ons_js-accordion')
              .find('> .add-ons_js-accordion-item.active > .add-ons_js-accordion-header')[0]
        ) {
          $this
            .closest('.add-ons_js-accordion')
            .find('> .add-ons_js-accordion-item')
            .removeClass('active')
            .find('.add-ons_js-accordion-body')
            .slideUp()
            .end()
            .find($iconArrow)
            .removeClass('active');
        }

        $this
          .closest('.add-ons_js-accordion-item')
          .toggleClass('active')
          .find($iconArrow)
          .toggleClass('active');
        $this.next().stop().slideToggle(settings.speed);
      },
    };
  })();

  $(document).ready(function () {
    accordion.init({ speed: 400, oneOpen: true });
  });
}

// Слайдер "Как отправить заявку"
function swiperBidAnimation() {
  const swiperBit = new Swiper('.bid-swiper', {
    slidesPerGroup: 1,
    observer: true,
    observeParents: true,

    grabCursor: false,
    a11y: false,
    allowTouchMove: true,

    loop: true,

    navigation: {
      nextEl: '[swiper-right-button=bid]',
      prevEl: '[swiper-left-button=bid]',
    },

    breakpoints: {
      992: {
        spaceBetween: 20,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 1,
      },
      480: {
        spaceBetween: 8,
        slidesPerView: 1,
      },
      0: {
        spaceBetween: 8,
        slidesPerView: 1,
      },
    },
  });
}

// Слайдер "Эксперты"
function swiperExpertAnimation() {
  //
  const swiperExpert = new Swiper('.expert-swiper', {
    spaceBetween: 40,
    slidesPerGroup: 1,
    observer: true,
    observeParents: true,

    loop: true,

    navigation: {
      nextEl: '[swiper-right-button=expert]',
      prevEl: '[swiper-left-button=expert]',
    },

    breakpoints: {
      0: {
        spaceBetween: 40,
        slidesPerView: 1,
      },
    },
  });
}

// Карточки Номинант
function nominantCardDropdownAndHover() {
  const cards = document.querySelectorAll('.nominant_card');

  cards.forEach((card) => {
    const dropdownBody = card.querySelector('.nominant_dropdown-body');
    const arrow = card.querySelector('.nominant_circle-arrow');

    card.addEventListener('click', function () {
      card.classList.toggle('active');

      if (dropdownBody.style.height === '0px' || dropdownBody.style.height === '') {
        dropdownBody.style.height = '0px';
        setTimeout(() => {
          dropdownBody.style.height = dropdownBody.scrollHeight + 'px';
        }, 10);
      } else {
        dropdownBody.style.height = '0px';
      }
    });
  });
}

// Первая карточка Bid
function bidCardFirstAnimation() {
  const card = document.querySelector('.bid-card_dropdown-1');
  const dropdownBody = card.querySelector('.bid-card_body-1');
  const arrow = card.querySelector('.bid_circle-arrow-1');
  const cardHead = card.querySelector('.bid-card_head-1');

  cardHead.addEventListener('click', function () {
    card.classList.toggle('active');

    if (dropdownBody.style.height === '0px' || dropdownBody.style.height === '') {
      dropdownBody.style.height = '0px';
      setTimeout(() => {
        dropdownBody.style.height = dropdownBody.scrollHeight + 'px';
      }, 10);
    } else {
      dropdownBody.style.height = '0px';
    }
  });
}

// Вторая карточка Bid
function bidCardSecondAnimation() {
  const card = document.querySelector('.bid-card_dropdown-2');
  const dropdownBody = card.querySelector('.bid-card_body-2');
  const arrow = card.querySelector('.bid_circle-arrow-2');
  const cardHead = card.querySelector('.bid-card_head-2');

  cardHead.addEventListener('click', function () {
    card.classList.toggle('active');

    if (dropdownBody.style.height === '0px' || dropdownBody.style.height === '') {
      dropdownBody.style.height = '0px';
      setTimeout(() => {
        dropdownBody.style.height = dropdownBody.scrollHeight + 'px';
      }, 10);
    } else {
      dropdownBody.style.height = '0px';
    }
  });
}

function expertDropdownAnimation() {
  const expertDropdowns = document.querySelectorAll('.expert_dropdown');
  expertDropdowns.forEach((dropdown) => {
    const expertHead = dropdown.querySelector('.expert-head');
    const expertBody = dropdown.querySelector('.expert-body');
    const expertArrow = dropdown.querySelector('.expert_circle-arrow');

    expertHead.addEventListener('click', function () {
      dropdown.classList.toggle('active');

      if (expertBody.style.height === '0px' || expertBody.style.height === '') {
        expertBody.style.height = '0px';
        setTimeout(() => {
          expertBody.style.height = expertBody.scrollHeight + 'px';
        }, 10);

        expertArrow.style.transform = 'rotate(90deg)';
      } else {
        expertBody.style.height = '0px';
        expertArrow.style.transform = 'rotate(0deg)';
      }
    });
  });
  //
}

// Код для бота
//async function telegramBotInit() {
//  const urlParams = new URLSearchParams(window.location.search);
//  const pcParam = urlParams.get('pc');

//  if (pcParam !== null) {
//    location.href = '/template?pc=' + pcParam;
//  }

//  const botlinks = document.querySelectorAll('.botlink');

//  const utmSource = urlParams.get('utm_source') || 'null';
//  const utmMedium = urlParams.get('utm_medium') || 'null';
//  const utmCampaign = urlParams.get('utm_campaign') || 'null';

//  if (utmSource !== 'null' || utmMedium !== 'null' || utmCampaign !== 'null') {
//    const queryString = `?start=${utmSource}-${utmMedium}-${utmCampaign}`;

//    botlinks.forEach((link) => {
//      link.href += queryString;
//    });
//  }

//  const pctemplate = document.querySelector('#pcitem');

  //const mobtemplate = document.querySelector("#mobitem");
  //const mobcontainer = document.querySelector("#moblist");

  //const modal = document.querySelector("#modal");

//  const reqraw = await fetch(`${BASE_LIST_URL}/api/pc_list`);
  //const voteel = document.querySelector("#vote");
  //let voteh = 1130;

  // const req = await reqraw.json();
//  const req = await reqraw.json();

//  const filler = (prefix, template, container, item, mvp_click = false) => {
//    const newItem = template.cloneNode(true);
//    newItem.querySelector('#likes').innerText = item.likes;
//    if (mvp_click) {
//      newItem.querySelector('#likestag').style.display = 'none';
  //  }
//    newItem.querySelector('#num').innerText = item.id;
//    newItem.querySelector('#price').innerText = item.price ? '>100' : '<100';
//    newItem.querySelector('#bg').style.backgroundImage = `url(${BASE_LIST_URL}/images/${item.photos[0]})`;
 //   newItem.addEventListener('click', () => {
  //    modal.style.display = 'block';
 //     modal.querySelector(`#${prefix}num`).innerText = item.id;
////      modal.querySelector(`#${prefix}votebtn`).style.display = mvp_click ? 'none' : 'flex';
////      modal.querySelector(`#${prefix}votebtn`).href = `${BASE_BOT_URL}?start=${item.id}`;
//      Object.values(item.spec).forEach((spec, i) => {
//        modal.querySelector(`#${prefix}spec${i + 1}`).innerText = spec;
//      });
 //     modal.querySelector(`#${prefix}photos`).innerHTML = '';
 //     item.photos.forEach((photo) => {
//        const img = document.createElement('img');
  //      img.src = `${BASE_LIST_URL}/images/${photo}`;
  //      img.width = prefix === 'mob' ? 246 : 500;
 //       img.height = prefix === 'mob' ? 246 : 500;
 //       img.style.objectFit = 'cover';
  //      modal.querySelector(`#${prefix}photos`).appendChild(img);
//      });
//    });
//    container.appendChild(newItem);
//  };

//  const nom1 = Object.values(req.list)
//    .filter((e) => e.cat === 1)
//    .sort((a, b) => b.likes - a.likes)
//    .slice(0, 4);

//  if (!nom1.length) {
    //document.querySelector("#nom1cont").style.display = "none";
//    document.querySelector('#mobnom1btn').style.display = 'none';
//  } else {
//    nom1.forEach((e) => filler('', pctemplate, document.querySelector('#nom1list'), e));
//  }

//  const nom2 = Object.values(req.list)
//    .filter((e) => e.cat === 2)
//    .sort((a, b) => b.likes - a.likes)
//    .slice(0, 4);

//  if (!nom2.length) {
//    //document.querySelector("#nom2cont").style.display = "none";
//    document.querySelector('#mobnom2btn').style.display = 'none';
//  } else {
//    nom2.forEach((e) => filler('', pctemplate, document.querySelector('#nom2list'), e));
//  }

//  const nom3 = Object.values(req.list)
//    .filter((e) => e.cat === 3)
//    .sort((a, b) => b.likes - a.likes)
//    .slice(0, 4);

//  if (!nom3.length) {
//    //document.querySelector("#nom3cont").style.display = "none";
//    document.querySelector('#mobnom3btn').style.display = 'none';
//  } else {
//    nom3.forEach((e) => filler('', pctemplate, document.querySelector('#nom3list'), e));
//  }

//  const nom4 = Object.values(req.list)
 //   .filter((e) => e.mvp === true)
//    .sort((a, b) => b.likes - a.likes)
 //   .slice(0, 4);
//
//  if (!nom4.length) {
    //document.querySelector("#nom4cont").style.display = "none";
//    document.querySelector('#mobnom4btn').style.display = 'none';
//  } else {
//    nom4.forEach((e) => filler('', pctemplate, document.querySelector('#nom4list'), e, true));
//  }
//было скрыто до
  // if (pcParam) {
  //   if (!req.list[pcParam]) return;

  //   const fillerMod = (prefix, template, container, item) => {
  //     modal.style.display = "block";
  //     modal.querySelector(`#${prefix}num`).innerText = item.id;
  //     modal.querySelector(
  //       `#${prefix}votebtn`
  //     ).href = `https://t.me/KompOtCROC_vote_bot?start=${item.id}`;
  //     Object.values(item.spec).forEach((spec, i) => {
  //       modal.querySelector(`#${prefix}spec${i + 1}`).innerText = spec;
  //     });
  //     modal.querySelector(`#${prefix}photos`).innerHTML = "";
  //     item.photos.forEach((photo) => {
  //       const img = document.createElement("img");
  //       img.src = `https://kompot-bot.croc.ru/images/${photo}`;
  //       img.width = prefix === "mob" ? 246 : 500;
  //       img.height = prefix === "mob" ? 246 : 500;
  //       img.style.objectFit = "cover";
  //       modal.querySelector(`#${prefix}photos`).appendChild(img);
  //     });
  //   };

  //   fillerMod("", pctemplate, pccontainer, req.list[pcParam]);
  //   fillerMod("mob", mobtemplate, mobcontainer, req.list[pcParam]);
  // }
  //
  //
  //
}

///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// ADAPTIVES /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// НА ВСЕХ АДАПТИВАХ
window.addEventListener('DOMContentLoaded', async () => {
  telegramBotInit();
});

document.addEventListener('DOMContentLoaded', async () => {
  finalSection();
  bidCardFirstAnimation();
  bidCardSecondAnimation();
  nominantCardDropdownAndHover();
  expertDropdownAnimation();
  swiperBidAnimation();
  accordion();
});

// DESKTOP FUNCTIONS
if (!isMobile() && window.innerWidth > 991) {
};

// Запускается на мобилках
if (isMobile() && window.innerWidth < 479) {
  swiperExpertAnimation();
};
