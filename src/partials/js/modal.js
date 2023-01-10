const footerModal = () => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function onClick() {
    refs.modal.classList.toggle('is-hidden');
    refs.modal.removeEventListener('click', onClick);
  }
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    refs.modal.classList.add('is-hidden');
  });
  function toggleModal() {
    if (refs.modal.classList.contains('is-hidden')) {
      refs.modal.addEventListener('click', onClick);
      refs.modal.classList.toggle('is-hidden');
    }
  }
};
export { footerModal };
