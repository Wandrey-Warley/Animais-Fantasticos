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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\n// Essa função faz o FAQ funcionar em forma de accordeon\r\nclass Accordion {\r\n  constructor(list) {\r\n    this.accordionLista = document.querySelectorAll(list);\r\n    this.activeClass = 'ativo';\r\n  }\r\n\r\n  toggleAccordion(item) {\r\n    item.classList.toggle(this.activeClass);\r\n    item.nextElementSibling.classList.toggle(this.activeClass);\r\n  }\r\n\r\n  addAccordionEvent() {\r\n    this.accordionLista.forEach((item) => {\r\n      item.addEventListener('click', () => this.toggleAccordion(item));\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.accordionLista.length) {\r\n      this.addAccordionEvent();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/animaNumeros.js":
/*!************************************!*\
  !*** ./js/modules/animaNumeros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaNumeros)\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll('[data-numero]');\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n\n      let start = 0;\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n  let observer = '';\n  // A função ira executar a animação dos numeros, somente se existir a class ativo\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains('ativo')) {\n      // observer.disconnect();\n      animaNumeros();\n    }\n  }\n  // Seleciona a section numeros\n  const observetarget = document.querySelector('.numeros');\n  // cria um objeto observador com 'new MutationObserver(função callback);\n  observer = new MutationObserver(handleMutation);\n  // Observer vai observar os atributos do target, que é a section\n  observer.observe(observetarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/animaNumeros.js?");

/***/ }),

/***/ "./js/modules/dropDownMenu.js":
/*!************************************!*\
  !*** ./js/modules/dropDownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _outisideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outisideClick.js */ \"./js/modules/outisideClick.js\");\n// Essa função abre um menu ao passar o mouse por Sobre\n\n\nfunction initDropDownMenu() {\n  const dropDownMenus = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    // console.log(event.target.innerText)\n    // console.log(event)\n    // event.preventDefault();\n    if (event.target.innerText === 'SOBRE'\n        || event.target.innerText === 'EMPRESA'\n        || event.target.innerText === 'EQUIPE'\n        || event.target.innerText === 'SOCIOS'\n        || event.target.innerText === 'INVESTIDORES') {\n      event.preventDefault();\n    }\n    this.classList.add('active');\n    (0,_outisideClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, ['touchstart', 'click'], () => {\n      this.classList.remove('active');\n    });\n  }\n  dropDownMenus.forEach((menu) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/dropDownMenu.js?");

/***/ }),

/***/ "./js/modules/fetchAnimais.js":
/*!************************************!*\
  !*** ./js/modules/fetchAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animaNumeros.js */ \"./js/modules/animaNumeros.js\");\n\n\nfunction initFetchAnimais() {\n  // Somente para navegadores mais atualizados\n  function createAnimal(animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${animal.Especie}</h3>\n    <span data-numero>${animal.Total}</span>`;\n    return div;\n  }\n  async function fetchAnimais(url) {\n    try {\n      const animaisResponse = await fetch(url);\n      const animaisJson = await animaisResponse.json();\n      const numerosGrid = document.querySelector('.numeros-grid');\n\n      animaisJson.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.appendChild(divAnimal);\n      });\n      (0,_animaNumeros_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n  fetchAnimais('animaisApi.json');\n\n  // Para navegadores mais antigos\n  // fetch(url)\n  // .then((response) => response.json())\n  // .then(responseJson => {\n  //     // console.log(responseJson);\n  // });\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/fetchAnimais.js?");

/***/ }),

/***/ "./js/modules/fetchBtc.js":
/*!********************************!*\
  !*** ./js/modules/fetchBtc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchBtc)\n/* harmony export */ });\nfunction initFetchBtc() {\n  const url = 'https://blockchain.info/ticker';\n  const btcPreco = document.querySelector('.btc-preco');\n\n  async function fetchBtc() {\n    try {\n      const promisse = await fetch(url);\n      const btc = await promisse.json();\n      btcPreco.innerText = `${btc.BRL.symbol} ${(200 / btc.BRL.buy).toFixed(6)}`;\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n  if (url && btcPreco){\n    fetchBtc();\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/fetchBtc.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\n// Essa função coloca um check no horario indicando se esta aberto\nfunction initFuncionamento(){\n  const funcionamento = document.querySelector('[data-semana]');\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n\n  const dataAtual = new Date();\n  const diaAtual = dataAtual.getDay();\n  const horarioAtual = dataAtual.getHours();\n\n  const diaAberto = diasSemana.indexOf(diaAtual) !== -1;\n  const horarioAberto = (horarioAtual >= horarioSemana[0]) && (horarioAtual < horarioSemana[1]);\n\n  if (diaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menuMobile.js":
/*!**********************************!*\
  !*** ./js/modules/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outisideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outisideClick.js */ \"./js/modules/outisideClick.js\");\n// Essa função cria um menu para tela touch ao clicar em SOBRE\n\n\nfunction initMenuMobile() {\n  const menuButton = document.querySelector('[data-menu = \"button\"]');\n  const menuList = document.querySelector('[data-menu = \"list\"]');\n  const events = ['click', 'touchstart'];\n\n  function openMenu() {\n    menuList.classList.toggle('active');\n    menuButton.classList.toggle('active');\n    (0,_outisideClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(menuList, events, () => {\n      menuList.classList.remove('active');\n      menuButton.classList.remove('active');\n    });\n  }\n\n  if (menuButton){\n    events.forEach((userEvent) => menuButton.addEventListener(userEvent, openMenu));\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/menuMobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModal)\n/* harmony export */ });\n// Essa função cria um menu de login em formato modal ao clicar em Login\nfunction initModal() {\n  const botaoAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const botaoFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n\n  function toggleModal(event) {\n    event.preventDefault();\n    containerModal.classList.toggle('ativo');\n  }\n\n  function clickFora(event) {\n    if (event.target === this) {\n      toggleModal(event);\n    }\n  }\n  if (botaoAbrir && botaoFechar && containerModal) {\n    botaoAbrir.addEventListener('click', toggleModal);\n    botaoFechar.addEventListener('click', toggleModal);\n    containerModal.addEventListener('click', clickFora);\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outisideClick.js":
/*!*************************************!*\
  !*** ./js/modules/outisideClick.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\n// Essa função fecha o menu de SOBRE ao clicar fora do menu que abriu\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  function handleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      });\n      callback();\n    }\n  }\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/outisideClick.js?");

/***/ }),

/***/ "./js/modules/scroll-animation.js":
/*!****************************************!*\
  !*** ./js/modules/scroll-animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollAnimated)\n/* harmony export */ });\n// Essa função faz a section aparecerem da esquerda para a direita animadas\nfunction initScrollAnimated() {\n  const activeClass = 'ativo';\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top - (window.innerHeight * 0.8);\n      if (sectionTop < 0) {\n        if (!section.classList.contains(activeClass)) {\n          section.classList.add(activeClass);\n        }\n      } else if (section.classList.contains(activeClass)) {\n        section.classList.remove(activeClass);\n      }\n    });\n  }\n  if (sections) {\n    window.addEventListener('scroll', animaScroll);\n    // function animaScroll() {\n    //   sections.forEach((section) => {\n    //       const sectionTop = section.getBoundingClientRect().top - (window.innerHeight * 0.8);\n    //       // console.log(sectionTop);\n    //       if(sectionTop < 0) {\n    //         if(!section.classList.contains(activeClass))\n    //         section.classList.add(activeClass);\n    //       } else if(section.classList.contains(activeClass)){\n    //         section.classList.remove(activeClass);\n    //       }\n    //   });\n    // }\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/scroll-animation.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\n// Essa função cria um scroll suave ao clicar nos links do cabeçalho\nclass ScrollSuave {\n  constructor(links, options) {\n    this.linksInternos = document.querySelectorAll(links);\n\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' };\n    } else {\n      this.options = options;\n    }\n\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection(event) {\n    event.preventDefault();\n    const href = event.currentTarget.getAttribute('href');\n    const section = document.querySelector(href);\n    section.scrollIntoView(this.options);\n  }\n\n  addLinkEvent() {\n    this.linksInternos.forEach((link) => {\n      link.addEventListener('click', this.scrollToSection);\n    });\n  }\n\n  init() {\n    if (this.linksInternos.length) {\n      this.addLinkEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabNav.js":
/*!******************************!*\
  !*** ./js/modules/tabNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\n// import initAnimaNumeros from \"./animaNumeros\";\n\n// Essa função alterna os textos da section ao clicar nas imagens\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  activeTab(index) {\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent.forEach((section) => {\n      section.classList.remove(this.activeClass, direcao);\n    });\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => this.activeTab(index));\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/tabNav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\n// Essa função cria uma caixa que segue o mouse enquanto ele esta sobre o mapa*/\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll('[data-tooltip]');\n\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20}px`;\n      this.tooltipBox.style.left = `${event.pageX + 20}px`;\n    },\n  };\n\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    },\n  };\n\n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement('div');\n    const text = element.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  function onMouseOver() {\n    const tooltipBox = criarTooltipBox(this);\n\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener('mousemove', onMouseMove);\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener('mouseleave', onMouseLeave);\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n\n//# sourceURL=webpack://animais-webpack/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabNav.js */ \"./js/modules/tabNav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropDownMenu.js */ \"./js/modules/dropDownMenu.js\");\n/* harmony import */ var _modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menuMobile.js */ \"./js/modules/menuMobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetchAnimais.js */ \"./js/modules/fetchAnimais.js\");\n/* harmony import */ var _modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetchBtc.js */ \"./js/modules/fetchBtc.js\");\n/* harmony import */ var _modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll-animation.js */ \"./js/modules/scroll-animation.js\");\n// Script principal que importa todos os modulos e os inicializa\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\n\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__.default('[data-anime=\"accordion\"] dt');\naccordion.init();\n\nconst tabNav = new _modules_tabNav_js__WEBPACK_IMPORTED_MODULE_2__.default('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabNav.init();\n\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_dropDownMenu_js__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_menuMobile_js__WEBPACK_IMPORTED_MODULE_6__.default)();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__.default)();\n(0,_modules_fetchAnimais_js__WEBPACK_IMPORTED_MODULE_8__.default)();\n(0,_modules_fetchBtc_js__WEBPACK_IMPORTED_MODULE_9__.default)();\n(0,_modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n\n//# sourceURL=webpack://animais-webpack/./js/script.js?");

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