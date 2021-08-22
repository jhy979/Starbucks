// 검색창 
const searchEl = document.querySelector('.search'); // input 요소랑 material-icons 전부 선택되겠죠
const searchInputEl = searchEl.querySelector('input'); //input요소만 선택되겠죠

searchEl.addEventListener('click', () => { //아무거나 눌러도
  searchInputEl.focus(); // input 요소가 포커스 됩니다.
})

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused'); // 클래스 내용을 추가하자
  searchInputEl.setAttribute('placeholder', '통합검색'); // HTML 속성을 지정하자
})

searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused'); // 클래스 내용을 추가하자
  searchInputEl.setAttribute('placeholder', ''); // HTML 속성을 지정하자
})


// 스크롤 시 배지 렌더링 조절
const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle(() => {
  // gsap.to(요소, 지속시간, 옵션)
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .4, {
      opacity: 0,
      display: 'none'
    })
  } else {
    //배지 보이기
    gsap.to(badgeEl, .4, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300))


// VISUAL section 이미지 시간 차 렌더링
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach((el, idx) => {
  gsap.to(el, 1, {
    delay: (idx + 1) * .7,
    opacity: 1,
  })
})