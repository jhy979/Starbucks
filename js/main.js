// 스크롤 시 배지 렌더링 조절 
// To Top
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')
window.addEventListener('scroll', _.throttle(() => {
  // gsap.to(요소, 지속시간, 옵션)
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .4, {
      opacity: 0,
      display: 'none'
    })
    gsap.to(toTopEl, .2, {
      x: 0,
    })
  } else {
    //배지 보이기
    gsap.to(badgeEl, .4, {
      opacity: 1,
      display: 'block'
    })
    gsap.to(toTopEl, .2, {
      x: 100,
    })
  }
}, 300))

// To Top
toTopEl.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0,
  })
})

// VISUAL section 이미지 시간 차 렌더링
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach((el, idx) => {
  gsap.to(el, 1, {
    delay: (idx + 1) * .7,
    opacity: 1,
  })
})


//Notice SWIPER
// new Swiper(선택자, 옵션) 
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

// Promotion SWIPER
new Swiper('.promotion .swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 5000
  },
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});




//Toggle
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    promotionEl.classList.add('hide')
  } else {
    promotionEl.classList.remove('hide')
  }
})


//Random 함수
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min)).toFixed(2)
}

//Youtube 배경 animation
function floatingObject(selector, delay, size) {
  gsap.to(
    selector,
    .8, {
      y: size,
      repeat: -1, //무한 반복
      yoyo: true, //돌아오기
      ease: Power1.easeInOut,
      delay: random(0, delay)
    })
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


// Scroll Magic
// Scroll Magic
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach((el, idx) => {
  new ScrollMagic
    .Scene({
      triggerElement: el,
      triggerHook: .8, //뷰포트 시작0 끝1 사이의 지점을 의미
    })
    .setClassToggle(el, 'show')
    .addTo(new ScrollMagic.Controller())
})


// AWARDS Swiper Slides
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  slidesPerView: 5,
  spaceBetween: 30,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})
