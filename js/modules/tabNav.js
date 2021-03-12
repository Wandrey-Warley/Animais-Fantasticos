// import initAnimaNumeros from "./animaNumeros";

// Essa função alterna os textos da section ao clicar nas imagens
export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass, direcao);
    });
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  addTabNavEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0);
      this.addTabNavEvent();
    }
  }
}
