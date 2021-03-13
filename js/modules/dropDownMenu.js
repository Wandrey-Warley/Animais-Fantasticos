// Essa função abre um menu ao passar o mouse por Sobre
import outsideClick from './outisideClick.js';

export default class DropDownMenu {
  constructor(dropdownmenu) {
    this.dropDownMenus = document.querySelectorAll(dropdownmenu);
  }

  handleClick(event) {
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

  init() {
    if (this.dropDownMenus) {
      this.dropDownMenus.forEach((menu) => {
        ['touchstart', 'click'].forEach((userEvent) => {
          menu.addEventListener(userEvent, this.handleClick);
        });
      });
    }
    return this;
  }
}
