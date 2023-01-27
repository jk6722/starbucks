
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간(s), 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기 !
    gsap.to(toTopEl, .2, {
      x: 0,
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기 !
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));
// _.throttle(실행할 함수, 함수가 몇 초에 한 번 실행되면 되는지 시간)

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0 //이걸 쓰기 위해 scrollTo plugin을 가져옴
  })
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7, 1.4, 2.1, 2.8
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', 디폴트가 horizontal 이기 때문에 생략 가능
  slidesPerView: 3, //한번에 보여줄 슬라이드 수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 3개 중에 가운데에 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의페이지번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  if(!isHidePromotion){
    //숨김 처리!
    promotionEl.classList.add('hide');
  }
  else {
    //숨김 해제!
    promotionEl.classList.remove('hide');
  }
  isHidePromotion = !isHidePromotion
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, //애니메이션을 반복할 횟수. -1을 넣으면 무한 재생
    yoyo: true, //한 번 재생된 애니메이션은 반대로 재생되도록 하는 기능
    ease: "power1.inOut",
    delay: random(0, delay),
  })
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  // method chaining
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show') //요소, 토글할 클래스
    .addTo(new ScrollMagic.Controller());
});