// Essa função faz a section aparecerem da esquerda para a direita animadas
export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.activeClass = 'ativo';

    this.animaScroll = this.animaScroll.bind(this);
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - (window.innerHeight * 0.8);
      if (sectionTop < 0) {
        if (!section.classList.contains(this.activeClass)) {
          section.classList.add(this.activeClass);
        }
      } else if (section.classList.contains(this.activeClass)) {
        section.classList.remove(this.activeClass);
      }
    });
  }

  init() {
    this.animaScroll();
    if (this.sections.length) {
      window.addEventListener('scroll', this.animaScroll);
    }
    return this;
  }
}
