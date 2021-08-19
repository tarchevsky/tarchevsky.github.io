let header = document.querySelector('.header');
let arrow = document.querySelector('.arrow');

window.onscroll = function() {
   if (window.pageYOffset > 200) {
      header.classList.add('header__fixed');
      arrow.classList.add('arrow__fixed');
   } else {
      header.classList.remove('header__fixed');
      arrow.classList.remove('arrow__fixed');
   }
};

arrow.onclick = function () {
   window.scrollTo(0, 0);
};