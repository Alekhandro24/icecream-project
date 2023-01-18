(() => {
  const refs = {
    openMenuBtn: document.querySelector('.products__button--third'),
    menu: document.querySelector('.products-overlay--third '),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.menu.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
  }
})();
