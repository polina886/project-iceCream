(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const openMenuBtn = document.querySelector('[data-menu-open]');
  const closeMenuBtn = document.querySelector('[data-menu-close]');
  const menu = document.querySelector('[data-menu]');
  const body = document.querySelector('body');

  console.log('Кнопка открытия:', openMenuBtn);
  console.log('Кнопка закрытия:', closeMenuBtn);
  console.log('Само меню:', menu);

  if (!openMenuBtn || !closeMenuBtn || !menu) {
    console.error('Ошибка: Один или несколько элементов не найдены в HTML! Проверь дата-атрибуты.');
    return;
  }

  function toggleMenu() {
    console.log('Клик сработал! Переключаю класс is-open');
    menu.classList.toggle('is-open');
    body.classList.toggle('no-scroll');
  }

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
});

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-buyNow]"),
    closeModalBtn: document.querySelector("[data-modal-close-buyNow]"),
    modal: document.querySelector("[data-modal-buyNow]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
})();