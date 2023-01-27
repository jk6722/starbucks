const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  //Logic..
  searchInputEl.focus();
  // 클릭을 하게 되면 input 요소를 focus하게 하는 함수
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});



const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //올해 년도