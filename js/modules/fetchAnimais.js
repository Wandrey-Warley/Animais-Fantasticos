import AnimaNumeros from './animaNumeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  // Somente para navegadores mais atualizadosa
  // Cria a div contendo informaçoes
  // com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.Especie}</h3>
    <span data-numero>${animal.Total}</span>`;
    return div;
  }

  // Preenche cada animal no DOM
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  // Puxa os animais de um JSON
  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumero();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
  fetchAnimais('animaisapi.json');
}
