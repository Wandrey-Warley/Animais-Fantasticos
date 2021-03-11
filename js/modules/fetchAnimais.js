import initAnimaNumeros from './animaNumeros.js';

export default function initFetchAnimais() {
  // Somente para navegadores mais atualizados
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.Especie}</h3>
    <span data-numero>${animal.Total}</span>`;
    return div;
  }
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');

      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  fetchAnimais('animaisApi.json');

  // Para navegadores mais antigos
  // fetch(url)
  // .then((response) => response.json())
  // .then(responseJson => {
  //     // console.log(responseJson);
  // });
}
