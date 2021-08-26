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


// 연도 자동 계산
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear();
