import { buttons, modal, closeBtn, fixBlocks } from '../constants'

export function modalActions() {
   let widthWindow = window.innerWidth;// полная ширина окна
   let bodyWidth = document.body.offsetWidth;
   let paddingOffset = widthWindow - bodyWidth + 'px';// ширина скролла


   function disableScroll() {
      document.body.classList.add('lock');
      fixBlocks.forEach(element => {
         element.style.paddingRight = paddingOffset;
      });
      document.body.style.paddingRight = paddingOffset
   }

   function enableScroll() {
      document.body.classList.remove('lock');
      fixBlocks.forEach(element => {
         element.style.paddingRight = '0px';
      });
      document.body.style.paddingRight = 0;
   }

   function openModal() {
      if (!modal.classList.contains('open')) {
         modal.classList.add('open');
         disableScroll();
      }
   }

   function closeModal() {
      if (modal.classList.contains('open')) {
         modal.classList.remove('open');
         enableScroll();
      }
   }

   buttons.forEach(btn => {
      btn.addEventListener('click', openModal);
   });

   window.addEventListener('click', (event) => {
      if (event.target == modal || event.target === closeBtn) {
         closeModal();
      }
   });
}
