import 'jquery';

const fixedPageHeader = () => {
  const pageHeader = document.querySelector('.js-pageHeader');
  document.body.style.paddingTop = pageHeader.offsetHeight + 'px';
}

const setupMobileMenu = () => {
  const mobileMemu = $('.js-mobileMenu');
  mobileMemu.click((e) => {
    e.preventDefault();
    mobileMemu.toggleClass('s-showMenu');
  });
}

$(function () {
  fixedPageHeader();
  setupMobileMenu();
});
