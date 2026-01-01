const menuBtnEl = document.querySelector('.menu-btn');
const burgerMenuEl = document.querySelector('.menu-container');

menuBtnEl.addEventListener('click', () => {
  const expanded = menuBtnEl.getAttribute('aria-expanded') === 'true' || false;

  menuBtnEl.classList.toggle('is-open');
  menuBtnEl.setAttribute('aria-expanded', !expanded);
  burgerMenuEl.classList.toggle('is-open');
});
