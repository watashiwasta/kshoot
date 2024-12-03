const sim_slidesL = document.querySelector('.simple_slidesL'); //전체 슬라이드 컨테이너
const sim_slideImgL = document.querySelectorAll('.simple_slidesL li'); //모든 슬라이드들

const sim_slidesR = document.querySelector('.simple_slidesR'); //전체 슬라이드 컨테이너
const sim_slideImgR = document.querySelectorAll('.simple_slidesR li'); //모든 슬라이드들

let sim_currentIdx = 0; //현재 슬라이드 index

const sim_slideCount = sim_slideImgL.length; // 슬라이드 개수
const sim_prev = document.querySelector('.simple_prev'); //이전 버튼
const sim_next = document.querySelector('.simple_next'); //다음 버튼
const sim_slideWidth = 549; //한개의 슬라이드 넓이
const sim_slideMargin = 0; //슬라이드간의 margin 값

//전체 슬라이드 컨테이너 넓이 설정
sim_slidesL.style.width = (sim_slideWidth + sim_slideMargin) * sim_slideCount + 'px';
sim_slidesR.style.width = (sim_slideWidth + sim_slideMargin) * sim_slideCount + 'px';

function moveSlide(num) {
  sim_slidesL.style.left = -num * (sim_slideWidth + sim_slideMargin) + 'px';
  sim_slidesR.style.left = -num * (sim_slideWidth + sim_slideMargin)  + 'px';
  sim_currentIdx = num;
}

sim_prev.addEventListener('click', function () {
  if (sim_currentIdx !== 0) moveSlide(sim_currentIdx - 1);
});

sim_next.addEventListener('click', function () {
  if (sim_currentIdx !== sim_slideCount - 1) {
    moveSlide(sim_currentIdx + 1);
  }
});
