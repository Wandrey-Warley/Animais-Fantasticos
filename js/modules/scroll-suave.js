// Essa função cria um scroll suave ao clicar nos links do cabeçalho
export default function initScroolSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // Forma alternativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    // top: topo,
    // behavior: 'smooth',
    // });
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
