const formOpenBtlEl = document.querySelector('.js-open-form');
const formCloseBtnEl = document.querySelector('.js-close-form');
const formBackdropEl = document.querySelector('.backdrop-form');
const bodyEl = document.body;
const formEl = document.querySelector('.form');
const btnSubmitEl = document.querySelector('.form-btn');
const toastEl = document.querySelector('.form-toast');

formOpenBtlEl.addEventListener('click', openModalForm);
formCloseBtnEl.addEventListener('click', closeModalForm);
formBackdropEl.addEventListener('click', closeModalFormOnBackdrop);
formEl.addEventListener('submit', handleSubmitForm);

async function handleSubmitForm(e) {
  e.preventDefault();
  const formObject = e.currentTarget;

  if (!formObject.checkValidity()) {
    formObject.reportValidity();
    return;
  }

  const formData = new FormData(formObject);
  const inputData = Object.fromEntries(formData);

  try {
    btnSubmitEl.classList.add('loading');
    btnSubmitEl.disabled = true;

    const response = await fetch('https://formspree.io/f/xrearnzd', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(inputData),
    });

    if (response.ok) {
      toastEl.classList.add('success');
      toastEl.textContent = 'Дякуємо! Лист успішно надіслано!';

      formObject.reset();
    } else {
      toastEl.classList.add('error');
      toastEl.textContent = 'Сталася помилка. Спробуйте знову.';
    }
  } catch (error) {
    alert(error);
  } finally {
    btnSubmitEl.classList.remove('loading');
    btnSubmitEl.disabled = false;
  }
}

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
