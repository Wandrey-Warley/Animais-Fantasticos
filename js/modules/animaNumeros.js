export default class AnimaNumeros {
  constructor(numeros, observertarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observertarget = document.querySelector(observertarget);
    this.observerClass = observerClass;

    this.handleMutation = this.handleMutation.bind(this);
  }

  // Recebe um elemento do dom com numero em seu texto e incrementa para dar a animação
  static incremetarNumero(numero) {
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
  }

  // Ativa incrementar número para cada
  // número selecionado do dom
  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incremetarNumero(numero));
  }

  // A função ira executar a animação dos numeros, somente se existir a class ativo
  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    // cria um objeto observador com 'new MutationObserver(função callback);
    this.observer = new MutationObserver(this.handleMutation);
    // Observer vai observar os atributos do target, que é a section
    this.observer.observe(this.observertarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observertarget) {
      this.addMutationObserver();
    }
    return this;
  }
}
