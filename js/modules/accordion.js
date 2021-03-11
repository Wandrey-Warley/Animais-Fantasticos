// Essa função faz o FAQ funcionar em forma de accordeon
export default class Accordion {
  constructor(list) {
    this.accordionLista = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionLista.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.accordionLista.length) {
      this.addAccordionEvent();
    }
  }
}
