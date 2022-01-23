// Call AOS function
AOS.init();

const elMenuOpen = findElement('.js-menu-open');
const elMenuClose = findElement('.js-menu-close');
const menu = findElement('.js-menu');

const elContactBtn = findElement('.js-toggle-contact');

elMenuOpen.addEventListener('click', () => {
  menu.classList.add('header__toggle-open');
});

elMenuClose.addEventListener('click', () => {
  menu.classList.remove('header__toggle-open');
});

elContactBtn.addEventListener('click', () => {
  menu.classList.remove('header__toggle-open');
});
