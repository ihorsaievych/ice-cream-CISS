(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-shop-loc-open]'),
    closeModalBtn: document.querySelector('[data-modal-shop-loc-close]'),
    modal: document.querySelector('[data-modal-shop-loc]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-franchise-open]'),
    closeModalBtn: document.querySelector('[data-modal-franchise-close]'),
    modal: document.querySelector('[data-modal-franchise]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
