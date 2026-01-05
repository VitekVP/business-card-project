const menuOpenBtnEl = document.querySelector('.js-open-menu');
const menuCloseBtnEl = document.querySelector('.js-close-menu');
const mobileMenuEl = document.querySelector('.burger-container');
const bodyEl = document.body;

// console.log(menuOpenBtnEl);
// console.log(menuCloseBtnEl);
// console.log(mobileMenuEl);

function toggleMenu() {
  mobileMenuEl.classList.toggle('is-open');
  bodyEl.classList.toggle('no-scroll');
}

menuOpenBtnEl.addEventListener('click', toggleMenu);
menuCloseBtnEl.addEventListener('click', toggleMenu);
