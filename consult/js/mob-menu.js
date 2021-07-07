window.addEventListener('DOMContentLoaded', () => {
   const headerFlex = document.querySelector('.header_flex'),
   headerItem = document.querySelectorAll('.header_item'),
   hamburger = document.querySelector('.hamburger');

   hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      headerFlex.classList.toggle('header_flex_active');
   });

   headerItem.forEach(item => {
      item.addEventListener('click', () => {
         hamburger.classList.toggle('hamburger_active');
         headerFlex.classList.toggle('header_flex_active');
      });
   });
});