let header = document.querySelector('.header');

window.onscroll = function() {
   if (window.pageYOffset > 200) {
      header.classList.add('header__fixed');
   } else {
      header.classList.remove('header__fixed');
   }
};