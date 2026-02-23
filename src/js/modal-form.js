const formOpenBtlEl = document.querySelector('.js-open-form');
const formCloseBtnEl = document.querySelector('.js-close-form');
const formBackdropEl = document.querySelector('.backdrop-form');
const bodyEl = document.body;

formOpenBtlEl.addEventListener('click', openModalForm);
formCloseBtnEl.addEventListener('click', closeModalForm);
formBackdropEl.addEventListener('click', closeModalFormOnBackdrop);

function openModalForm() {
  window.addEventListener('keydown', closeModalFormOnEsc);
  formBackdropEl.classList.add('show-modal');
  bodyEl.classList.add('no-scroll');
}

function closeModalForm() {
  window.removeEventListener('keydown', closeModalFormOnEsc);
  formBackdropEl.classList.remove('show-modal');
  bodyEl.classList.remove('no-scroll');
}

function closeModalFormOnBackdrop(e) {
  if (e.currentTarget === e.target) {
    closeModalForm();
  }
}

function closeModalFormOnEsc(e) {
  if (e.code === 'Escape') {
    closeModalForm();
  }
}
