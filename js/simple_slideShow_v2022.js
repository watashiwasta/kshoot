const sim_slidesL = document.querySelector('.simple_slidesL'); //��ü �����̵� �����̳�
const sim_slideImgL = document.querySelectorAll('.simple_slidesL li'); //��� �����̵��

const sim_slidesR = document.querySelector('.simple_slidesR'); //��ü �����̵� �����̳�
const sim_slideImgR = document.querySelectorAll('.simple_slidesR li'); //��� �����̵��

let sim_currentIdx = 0; //���� �����̵� index

const sim_slideCount = sim_slideImgL.length; // �����̵� ����
const sim_prev = document.querySelector('.simple_prev'); //���� ��ư
const sim_next = document.querySelector('.simple_next'); //���� ��ư
const sim_slideWidth = 549; //�Ѱ��� �����̵� ����
const sim_slideMargin = 0; //�����̵尣�� margin ��

//��ü �����̵� �����̳� ���� ����
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
