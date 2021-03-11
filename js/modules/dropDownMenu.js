// Essa função abre um menu ao passar o mouse por Sobre
import outsideClick from './outisideClick.js';

export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    // console.log(event.target.innerText)
    // console.log(event)
    // event.preventDefault();
    if (event.target.innerText === 'SOBRE'
        || event.target.innerText === 'EMPRESA'
        || event.target.innerText === 'EQUIPE'
        || event.target.innerText === 'SOCIOS'
        || event.target.innerText === 'INVESTIDORES') {
      event.preventDefault();
    }
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }
  dropDownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
