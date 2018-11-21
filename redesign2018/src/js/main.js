const buttonSignIn = document.querySelector('.header-auth__signin');
buttonSignIn.addEventListener('click', modalEvent);

function modalEvent() {
  const modal = document.querySelector('.popup--reg');
  const contentWrapper = modal.querySelector('.popup-wrapper');
  const close = modal.querySelector('.popup-title__close');
  close.addEventListener('click', () => modal.classList.remove('open'));
  modal.classList.toggle('open');
};