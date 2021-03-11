// Essa função alterna os textos da section ao clicar nas imagens
export default function initTabNav() {
  const activeClass = 'ativo';
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index) {
    const direcao = tabContent[index].dataset.anime;
    tabContent.forEach((section) => {
      section.classList.remove(activeClass, direcao);
    });
    tabContent[index].classList.add(activeClass, direcao);
  }
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
