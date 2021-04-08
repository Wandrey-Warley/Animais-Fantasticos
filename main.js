/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n// Essa função faz o FAQ funcionar em forma de accordeon\nclass Accordion {\n  constructor(list) {\n    this.accordionLista = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  addAccordionEvent() {\n    this.accordionLista.forEach((item) => {\n      item.addEventListener('click', () => this.toggleAccordion(item));\n    });\n  }\n\n  init() {\n    if (this.accordionLista.length) {\n      this.addAccordionEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/animaNumeros.js":
/*!************************************!*\
  !*** ./js/modules/animaNumeros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observertarget, observerClass) {\n    this.numeros = document.querySelectorAll(numeros);\n    this.observertarget = document.querySelector(observertarget);\n    this.observerClass = observerClass;\n\n    this.handleMutation = this.handleMutation.bind(this);\n  }\n\n  // Recebe um elemento do dom com numero em seu texto e incrementa para dar a animação\n  static incremetarNumero(numero) {\n    const total = +numero.innerText;\n    const incremento = Math.floor(total / 100);\n    let start = 0;\n\n    const timer = setInterval(() => {\n      start += incremento;\n      numero.innerText = start;\n      if (start > total) {\n        numero.innerText = total;\n        clearInterval(timer);\n      }\n    }, 25 * Math.random());\n  }\n\n  // Ativa incrementar número para cada\n  // número selecionado do dom\n  animaNumeros() {\n    this.numeros.forEach((numero) => this.constructor.incremetarNumero(numero));\n  }\n\n  // A função ira executar a animação dos numeros, somente se existir a class ativo\n  handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(this.observerClass)) {\n      this.observer.disconnect();\n      this.animaNumeros();\n    }\n  }\n\n  addMutationObserver() {\n    // cria um objeto observador com 'new MutationObserver(função callback);\n    this.observer = new MutationObserver(this.handleMutation);\n    // Observer vai observar os atributos do target, que é a section\n    this.observer.observe(this.observertarget, { attributes: true });\n  }\n\n  init() {\n    if (this.numeros.length && this.observertarget) {\n      this.addMutationObserver();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/animaNumeros.js?");

/***/ }),

/***/ "./js/modules/debounce.js":
/*!********************************!*\
  !*** ./js/modules/debounce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/debounce.js?");

/***/ }),

/***/ "./js/modules/dropDownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropDownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsiseClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsiseClick.js */ \"./js/modules/outsiseClick.js\");\n\n\nclass DropdownMenu {\n  constructor(dropdownMenus, events) {\n    this.dropdownMenus = document.querySelectorAll(dropdownMenus);\n\n    // define touchstart e click como argumento padrão\n    // de events caso o usuário não define\n    if (events === undefined) this.events = ['touchstart', 'click'];\n    else this.events = events;\n\n    this.activeClass = 'active';\n    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);\n  }\n\n  // Ativa o dropdownmenu e adiciona\n  // a função que observa o clique fora dele\n  activeDropdownMenu(event) {\n    event.preventDefault();\n    const element = event.currentTarget;\n    element.classList.add(this.activeClass);\n    (0,_outsiseClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(element, this.events, () => {\n      element.classList.remove('active');\n    });\n  }\n\n  // adiciona os eventos ao dropdownmenu\n  addDropdownMenusEvent() {\n    this.dropdownMenus.forEach((menu) => {\n      this.events.forEach((userEvent) => {\n        menu.addEventListener(userEvent, this.activeDropdownMenu);\n      });\n    });\n  }\n\n  init() {\n    if (this.dropdownMenus.length) {\n      this.addDropdownMenusEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/dropDownMenu.js?");

/***/ }),

/***/ "./js/modules/fetchAnimais.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animaNumeros.js */ \"./js/modules/animaNumeros.js\");\n\n\nfunction fetchAnimais(url, target) {\n  // Somente para navegadores mais atualizadosa\n  // Cria a div contendo informaçoes\n  // com o total de animais\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${animal.Especie}</h3>\n    <span data-numero>${animal.Total}</span>`;\n    return div;\n  }\n\n  const numerosGrid = document.querySelector(target);\n  function preencherAnimais(animal) {\n    const divAnimal = createAnimal(animal);\n    numerosGrid.appendChild(divAnimal);\n  }\n\n  function animaAnimaisNumero() {\n    const animaNumeros = new _animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-numero]', '.numeros', 'ativo');\n    animaNumeros.init();\n  }\n\n  // Puxa os animais de um JSON\n  async function criarAnimais() {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJson = await animaisResponse.json();\n\n      animaisJson.forEach((animal) => preencherAnimais(animal));\n      animaAnimaisNumero();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n\n  return criarAnimais();\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/fetchAnimais.js?");

/***/ }),

/***/ "./js/modules/fetchBtc.js":
/*!********************************!*\
  !*** ./js/modules/fetchBtc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBtc)\n/* harmony export */ });\nfunction fetchBtc(linkUrl, target) {\n  const url = linkUrl;\n  const btcPreco = document.querySelector(target);\n\n  async function initfetchBtc() {\n    try {\n      const promisse = await fetch(url);\n      const btc = await promisse.json();\n      btcPreco.innerText = `${btc.BRL.symbol} ${(200 / btc.BRL.buy).toFixed(6)}`;\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n  if (url && btcPreco) {\n    initfetchBtc();\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/fetchBtc.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\n  constructor(funcionamento, activeClass) {\n    this.funcionamento = document.querySelector(funcionamento);\n    this.activeClass = activeClass;\n  }\n\n  dadosFuncionamento() {\n    this.diasSemana = this.funcionamento.dataset.semana.split(',').map(Number);\n    this.horarioSemana = this.funcionamento.dataset.horario.split(',').map(Number);\n  }\n\n  dadosAgora() {\n    this.dataAgora = new Date();\n    this.diaAgora = this.dataAgora.getDay();\n    this.horarioAgora = this.dataAgora.getUTCHours() - 3;\n  }\n\n  estaAberto() {\n    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;\n    const horarioAberto = ((this.horarioAgora >= this.horarioSemana[0])\n      && (this.horarioAgora < this.horarioSemana[1]));\n    return semanaAberto && horarioAberto;\n  }\n\n  ativaAberto() {\n    if (this.estaAberto()) {\n      this.funcionamento.classList.add(this.activeClass);\n    }\n  }\n\n  init() {\n    if (this.funcionamento) {\n      this.dadosFuncionamento();\n      this.dadosAgora();\n      this.ativaAberto();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsiseClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsiseClick.js */ \"./js/modules/outsiseClick.js\");\n// Essa função cria um menu para tela touch ao clicar em SOBRE\r\n\r\n\r\nclass initMenuMobile {\r\n  constructor(menuButton, menuList, events) {\r\n    this.menuButton = document.querySelector(menuButton);\r\n    this.menuList = document.querySelector(menuList);\r\n    this.activeClass = 'active';\r\n\r\n    // define touchstart e click como argumento padrão\r\n    // de events caso o usuário não define\r\n    if (events === undefined) this.events = ['touchstart', 'click'];\r\n    else this.events = events;\r\n\r\n    this.openMenu = this.openMenu.bind(this);\r\n  }\r\n\r\n  openMenu(event) {\r\n    event.preventDefault();\r\n    this.menuList.classList.toggle(this.activeClass);\r\n    this.menuButton.classList.toggle(this.activeClass);\r\n    (0,_outsiseClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.menuList, this.events, () => {\r\n      this.menuList.classList.remove(this.activeClass);\r\n      this.menuButton.classList.remove(this.activeClass);\r\n    });\r\n  }\r\n\r\n  addMenuMobileEvents() {\r\n    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));\r\n  }\r\n\r\n  init() {\r\n    if (this.menuButton && this.menuList) {\r\n      this.addMenuMobileEvents();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n// Essa função cria um menu de login em formato modal ao clicar em Login\nclass Modal {\n  constructor(botaoAbrir, botaoFechar, containerModal) {\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n\n    // bind diz ao callback para\n    // fazer referencia ao objeto da class\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.clickFora = this.clickFora.bind(this);\n  }\n\n  toggleModal() {\n    this.containerModal.classList.toggle('ativo');\n  }\n\n  eventToggleModal(event) {\n    event.preventDefault();\n    this.toggleModal();\n  }\n\n  clickFora(event) {\n    if (event.target === this.containerModal) {\n      this.toggleModal();\n    }\n  }\n\n  addModalEvent() {\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal);\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\n    this.containerModal.addEventListener('click', this.clickFora);\n  }\n\n  init() {\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n      this.addModalEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsiseClick.js":
/*!************************************!*\
  !*** ./js/modules/outsiseClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\n// Essa função fecha o menu de SOBRE ao clicar fora do menu que abriu\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/outsiseClick.js?");

/***/ }),

/***/ "./js/modules/scroll-anima.js":
/*!************************************!*\
  !*** ./js/modules/scroll-anima.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debounce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce.js */ \"./js/modules/debounce.js\");\n\n\n// Essa função faz a section aparecerem da esquerda para a direita animadas\nclass ScrollAnima {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.activeClass = 'ativo';\n    this.halfWindow = window.innerHeight * 0.7;\n\n    this.checkDistance = (0,_debounce_js__WEBPACK_IMPORTED_MODULE_0__.default)(this.checkDistance.bind(this), 10);\n  }\n\n  // Pega a distância de cada item em relação\n  // ao topo do site\n  getDistance() {\n    this.distance = [...this.sections].map((section) => {\n      const offset = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offset - this.halfWindow),\n      };\n    });\n  }\n\n  // Verifica a distância em cada objeto\n  // em relação ao scroll do site\n  checkDistance() {\n    this.distance.forEach((item) => {\n      if (window.pageYOffset > item.offset) {\n        item.element.classList.add(this.activeClass);\n      } else if (item.element.classList.contains(this.activeClass)) {\n        item.element.classList.remove(this.activeClass);\n      }\n    });\n  }\n\n  init() {\n    if (this.sections.length) {\n      this.getDistance();\n      this.checkDistance();\n      window.addEventListener('scroll', this.checkDistance);\n    }\n    return this;\n  }\n\n  // Remove o event de scroll\n  stop() {\n    window.removeEventListener('scroll', this.checkDistance);\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/scroll-anima.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n// Essa função cria um scroll suave ao clicar nos links do cabeçalho\nclass ScrollSuave {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener('click', this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/slide.js":
/*!*****************************!*\
  !*** ./js/modules/slide.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slide\": () => (/* binding */ Slide),\n/* harmony export */   \"SlideNav\": () => (/* binding */ SlideNav)\n/* harmony export */ });\nclass Slide {\n  constructor(slide, wrapper) {\n    this.slide = document.querySelector(slide);\n    this.wrapper = document.querySelector(wrapper);\n    this.dist = { finalPosition: 0, startX: 0, movement: 0 };\n    this.activeClass = 'active';\n  }\n\n  transition(active) {\n    this.slide.style.transition = active ? 'transform .3s' : '';\n  }\n\n  moveSlide(distX) {\n    this.dist.movePosition = distX;\n    this.slide.style.transform = `translate3d(${distX}px, 0px, 0px)`;\n  }\n\n  updatePosition(clientX) {\n    this.dist.movement = (this.dist.startX - clientX) * 1.6;\n    return this.dist.finalPosition - this.dist.movement;\n  }\n\n  onStart(event) {\n    let moveType = '';\n    if (event.type === 'mousedown') {\n      event.preventDefault();\n      this.dist.startX = event.clientX;\n      moveType = 'mousemove';\n    } else {\n      this.dist.startX = event.changedTouches[0].clientX;\n      moveType = 'touchmove';\n    }\n\n    this.wrapper.addEventListener(moveType, this.onMove);\n    this.transition(false);\n  }\n\n  onMove(event) {\n    const pointerPosition = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;\n    const finalPosition = this.updatePosition(pointerPosition);\n    this.moveSlide(finalPosition);\n  }\n\n  onEnd(event) {\n    const movetype = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';\n    this.wrapper.removeEventListener(movetype, this.onMove);\n    this.dist.finalPosition = this.dist.movePosition;\n    this.transition(true);\n    this.changeSlideOnEnd();\n  }\n\n  changeSlideOnEnd() {\n    if (this.dist.movement > 120 && this.index.next !== undefined) {\n      this.activeNextSlide();\n    } else if (this.dist.movement < -120 && this.index.prev !== undefined) {\n      this.activePrevSlide();\n    } else {\n      this.changeSlide(this.index.active);\n    }\n  }\n\n  addSlideEvents() {\n    this.wrapper.addEventListener('mousedown', this.onStart);\n    this.wrapper.addEventListener('touchstart', this.onStart);\n    this.wrapper.addEventListener('mouseup', this.onEnd);\n    this.wrapper.addEventListener('touchend', this.onEnd);\n  }\n\n  slidePosition(slide) {\n    const margin = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;\n    return -(slide.offsetLeft - margin);\n  }\n\n  slidesConfig() {\n    this.slideArray = [...this.slide.children].map((element) => {\n      const position = this.slidePosition(element);\n      return { position, element };\n    });\n  }\n\n  slidesIndexNav(index) {\n    const last = this.slideArray.length - 1;\n    this.index = {\n      prev: index ? index - 1 : undefined,\n      active: index,\n      next: index === last ? undefined : index + 1,\n    };\n  }\n\n  changeSlide(index) {\n    const activeSlide = this.slideArray[index];\n    this.moveSlide(this.slideArray[index].position);\n    this.slidesIndexNav(index);\n    this.dist.finalPosition = activeSlide.position;\n    this.changeActiveClass();\n    this.wrapper.dispatchEvent(this.changeEvent);\n  }\n\n  changeActiveClass() {\n    this.slideArray.forEach((item) => item.element.classList.remove(this.activeClass));\n    this.slideArray[this.index.active].element.classList.add(this.activeClass);\n  }\n\n  activePrevSlide() {\n    if (this.index.prev !== undefined) {\n      this.changeSlide(this.index.prev);\n    }\n  }\n\n  activeNextSlide() {\n    if (this.index.next !== undefined) {\n      this.changeSlide(this.index.next);\n    }\n  }\n\n  onResize() {\n    setTimeout(() => {\n      this.slidesConfig();\n      this.changeSlide(this.index.active);\n    }, 500);\n  }\n\n  addResizeEvent() {\n    window.addEventListener('resize', this.onResize);\n  }\n\n  bindEvents() {\n    this.onStart = this.onStart.bind(this);\n    this.onMove = this.onMove.bind(this);\n    this.onEnd = this.onEnd.bind(this);\n    this.onResize = this.onResize.bind(this);\n    this.activePrevSlide = this.activePrevSlide.bind(this);\n    this.activeNextSlide = this.activeNextSlide.bind(this);\n  }\n\n  init() {\n    if (this.slide && this.wrapper) {\n      this.bindEvents();\n      this.transition(true);\n      this.addSlideEvents();\n      this.slidesConfig();\n      this.changeSlide(0);\n      this.addResizeEvent();\n    }\n  }\n}\nclass SlideNav extends Slide {\n  constructor(slide, wrapper) {\n    super(slide, wrapper);\n    this.bindControlEvents();\n    this.changeEvent = new Event('changeEvent');\n  }\n\n  addArrow(prev, next) {\n    this.prevElement = document.querySelector(prev);\n    this.nextElement = document.querySelector(next);\n    this.addArrowEvents();\n  }\n\n  addArrowEvents() {\n    this.prevElement.addEventListener('click', this.activePrevSlide);\n    this.nextElement.addEventListener('click', this.activeNextSlide);\n  }\n\n  createControl() {\n    const control = document.createElement('ul');\n    control.dataset.control = 'slide';\n\n    this.slideArray.forEach((item, index) => {\n      control.innerHTML += `<li><a href=\"#slide${index + 1}\">${index + 1}</a></li>`;\n    });\n    this.wrapper.appendChild(control);\n\n    return control;\n  }\n\n  eventControl(item, index) {\n    item.addEventListener('click', (event) => {\n      event.preventDefault();\n      this.changeSlide(index);\n      this.activeControlItem();\n    });\n    this.wrapper.addEventListener('changeEvent', this.activeControlItem);\n  }\n\n  activeControlItem() {\n    this.controlArray.forEach((item) => item.classList.remove(this.activeClass));\n    this.controlArray[this.index.active].classList.add(this.activeClass);\n  }\n\n  addControl(customControl) {\n    this.control = document.querySelector(customControl) || this.createControl();\n    this.controlArray = [...this.control.children];\n    this.controlArray.forEach(this.eventControl);\n    this.activeControlItem();\n  }\n\n  bindControlEvents() {\n    this.eventControl = this.eventControl.bind(this);\n    this.activeControlItem = this.activeControlItem.bind(this);\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/slide.js?");

/***/ }),

/***/ "./js/modules/tabNav.js":
/*!******************************!*\
  !*** ./js/modules/tabNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n// import initAnimaNumeros from \"./animaNumeros\";\n\n// Essa função alterna os textos da section ao clicar nas imagens\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => this.activeTab(index));\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/tabNav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\n// Essa função cria uma caixa que segue o mouse enquanto ele esta sobre o mapa*/\nclass initTooltip {\n  constructor(tooltip) {\n    this.tooltips = document.querySelectorAll(tooltip);\n\n    // Bind do objeto da classe aos objetos\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseOver = this.onMouseOver.bind(this);\n  }\n\n  onMouseMove(event) {\n    this.tooltipBox.style.top = `${event.pageY + 20}px`;\n    if ((window.innerWidth - event.pageX) < 210) {\n      this.tooltipBox.style.left = `${event.pageX - 185}px`;\n    } else {\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    }\n  }\n\n  onMouseLeave({ currentTarget }) {\n    this.tooltipBox.remove();\n    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\n    currentTarget.removeEventListener('mousemove', this.onMouseMove);\n  }\n\n  // Cria a tooltipbox e coloca no body\n  criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    this.tooltipBox = tooltipBox;\n  }\n\n  onMouseOver({ currentTarget }) {\n    this.criarTooltipBox(currentTarget);\n    currentTarget.addEventListener('mousemove', this.onMouseMove);\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n  }\n\n  addTooltipEvents() {\n    this.tooltips.forEach((item) => {\n      item.addEventListener('mouseover', this.onMouseOver);\n    });\n  }\n\n  init() {\n    if (this.tooltips.length) {\n      this.addTooltipEvents();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabNav.js */ \"./js/modules/tabNav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropDownMenu.js */ \"./js/modules/dropDownMenu.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./js/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchBtc.js */ \"./js/modules/fetchBtc.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./js/modules/scroll-anima.js\");\n/* harmony import */ var _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/slide.js */ \"./js/modules/slide.js\");\n// Script principal que importa todos os modulos e os inicializa\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\n\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__.default('[data-anime=\"accordion\"] dt');\naccordion.init();\n\nconst tabNav = new _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_2__.default('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\n\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__.default('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\n\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__.default('[data-tooltip]');\ntooltip.init();\n\nconst dropdown = new _modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_5__.default('[data-dropdown]');\ndropdown.init();\n\nconst scrollAnima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__.default('[data-anime=\"scroll\"]');\nscrollAnima.init();\n\nconst menuMobile = new _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__.default('[data-menu = \"button\"]', '[data-menu = \"list\"]');\nmenuMobile.init();\n\nconst funcionamento = new _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__.default('[data-semana]', 'aberto');\nfuncionamento.init();\n\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_6__.default)('./animaisapi.json', '.numeros-grid');\n(0,_modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__.default)('https://blockchain.info/ticker', '.btc-preco');\n\nconst slide = new _modules_slide_js__WEBPACK_IMPORTED_MODULE_11__.SlideNav('.slide', '.wrapper');\nslide.init();\nslide.addArrow('.prev', '.next');\nslide.addControl('.custom-controls');\n\n\n//# sourceURL=webpack://animais-webpack/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;