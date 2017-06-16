import 'jquery';

const fixedPageHeader = () => {
  const pageHeader = document.querySelector('.js-pageHeader');
  document.body.style.paddingTop = pageHeader.offsetHeight + 'px';
}

$(function () {
  fixedPageHeader();
  
});
