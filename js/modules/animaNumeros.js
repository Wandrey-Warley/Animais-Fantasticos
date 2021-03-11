export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }
  let observer = '';
  // A função ira executar a animação dos numeros, somente se existir a class ativo
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      // observer.disconnect();
      animaNumeros();
    }
  }
  // Seleciona a section numeros
  const observetarget = document.querySelector('.numeros');
  // cria um objeto observador com 'new MutationObserver(função callback);
  observer = new MutationObserver(handleMutation);
  // Observer vai observar os atributos do target, que é a section
  observer.observe(observetarget, { attributes: true });
}
