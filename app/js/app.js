// Header background change

function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// services modal
const modalViews = document.querySelectorAll('.services_modal'),
  modalBtn = document.querySelectorAll('.services_button'),
  modalClose = document.querySelectorAll('.services_modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};

modalBtn.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener('click', () => {
    modalViews.forEach((mv) => {
      mv.classList.remove('active-modal');
    });
  });
});
