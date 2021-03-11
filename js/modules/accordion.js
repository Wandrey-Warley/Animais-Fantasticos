// Essa função faz o FAQ funcionar em forma de accordeon
export default function initAccordion() {
  const activeClass = 'ativo';
  const accordionLista = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (accordionLista.length) {
    accordionLista.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
