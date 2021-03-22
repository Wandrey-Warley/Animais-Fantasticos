(()=>{"use strict";function t(t,e,i){const s=document.documentElement,n="data-outside";function o(a){t.contains(a.target)||(t.removeAttribute(n),e.forEach((t=>{s.removeEventListener(t,o)})),i())}t.hasAttribute(n)||(e.forEach((t=>{setTimeout((()=>s.addEventListener(t,o)))})),t.setAttribute(n,""))}class e{constructor(t,e,i){this.numeros=document.querySelectorAll(t),this.observertarget=document.querySelector(e),this.observerClass=i,this.handleMutation=this.handleMutation.bind(this)}static incremetarNumero(t){const e=+t.innerText,i=Math.floor(e/100);let s=0;const n=setInterval((()=>{s+=i,t.innerText=s,s>e&&(t.innerText=e,clearInterval(n))}),25*Math.random())}animaNumeros(){this.numeros.forEach((t=>this.constructor.incremetarNumero(t)))}handleMutation(t){t[0].target.classList.contains(this.observerClass)&&(this.observer.disconnect(),this.animaNumeros())}addMutationObserver(){this.observer=new MutationObserver(this.handleMutation),this.observer.observe(this.observertarget,{attributes:!0})}init(){return this.numeros.length&&this.observertarget&&this.addMutationObserver(),this}}new class{constructor(t,e){this.linksInternos=document.querySelectorAll(t),this.options=void 0===e?{behavior:"smooth",block:"start"}:e,this.scrollToSection=this.scrollToSection.bind(this)}scrollToSection(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView(this.options)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('[data-menu="suave"] a[href^="#"]').init(),new class{constructor(t){this.accordionLista=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionLista.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionLista.length&&this.addAccordionEvent(),this}}('[data-anime="accordion"] dt').init(),new class{constructor(t,e){this.tabMenu=document.querySelectorAll(t),this.tabContent=document.querySelectorAll(e),this.activeClass="ativo"}activeTab(t){this.tabContent.forEach((t=>{t.classList.remove(this.activeClass)}));const e=this.tabContent[t].dataset.anime;this.tabContent[t].classList.add(this.activeClass,e)}addTabNavEvent(){this.tabMenu.forEach(((t,e)=>{t.addEventListener("click",(()=>this.activeTab(e)))}))}init(){return this.tabMenu.length&&this.tabContent.length&&(this.activeTab(0),this.addTabNavEvent()),this}}('[data-tab="menu"] li','[data-tab="content"] section').init(),new class{constructor(t,e,i){this.botaoAbrir=document.querySelector(t),this.botaoFechar=document.querySelector(e),this.containerModal=document.querySelector(i),this.eventToggleModal=this.eventToggleModal.bind(this),this.clickFora=this.clickFora.bind(this)}toggleModal(){this.containerModal.classList.toggle("ativo")}eventToggleModal(t){t.preventDefault(),this.toggleModal()}clickFora(t){t.target===this.containerModal&&this.toggleModal()}addModalEvent(){this.botaoAbrir.addEventListener("click",this.eventToggleModal),this.botaoFechar.addEventListener("click",this.eventToggleModal),this.containerModal.addEventListener("click",this.clickFora)}init(){return this.botaoAbrir&&this.botaoFechar&&this.containerModal&&this.addModalEvent(),this}}('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]').init(),new class{constructor(t){this.tooltips=document.querySelectorAll(t),this.onMouseLeave=this.onMouseLeave.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseOver=this.onMouseOver.bind(this)}onMouseMove(t){this.tooltipBox.style.top=`${t.pageY+20}px`,window.innerWidth-t.pageX<210?this.tooltipBox.style.left=t.pageX-185+"px":this.tooltipBox.style.left=`${t.pageX+20}px`}onMouseLeave({currentTarget:t}){this.tooltipBox.remove(),t.removeEventListener("mouseleave",this.onMouseLeave),t.removeEventListener("mousemove",this.onMouseMove)}criarTooltipBox(t){const e=document.createElement("div"),i=t.getAttribute("aria-label");e.classList.add("tooltip"),e.innerText=i,document.body.appendChild(e),this.tooltipBox=e}onMouseOver({currentTarget:t}){this.criarTooltipBox(t),t.addEventListener("mousemove",this.onMouseMove),t.addEventListener("mouseleave",this.onMouseLeave)}addTooltipEvents(){this.tooltips.forEach((t=>{t.addEventListener("mouseover",this.onMouseOver)}))}init(){return this.tooltips.length&&this.addTooltipEvents(),this}}("[data-tooltip]").init(),new class{constructor(t,e){this.dropdownMenus=document.querySelectorAll(t),this.events=void 0===e?["touchstart","click"]:e,this.activeClass="active",this.activeDropdownMenu=this.activeDropdownMenu.bind(this)}activeDropdownMenu(e){e.preventDefault();const i=e.currentTarget;i.classList.add(this.activeClass),t(i,this.events,(()=>{i.classList.remove("active")}))}addDropdownMenusEvent(){this.dropdownMenus.forEach((t=>{this.events.forEach((e=>{t.addEventListener(e,this.activeDropdownMenu)}))}))}init(){return this.dropdownMenus.length&&this.addDropdownMenusEvent(),this}}("[data-dropdown]").init(),new class{constructor(t){this.sections=document.querySelectorAll(t),this.activeClass="ativo",this.halfWindow=.7*window.innerHeight,this.checkDistance=function(t,e){let i;return(...e)=>{i&&clearTimeout(i),i=setTimeout((()=>{t(...e),i=null}),10)}}(this.checkDistance.bind(this))}getDistance(){this.distance=[...this.sections].map((t=>{const e=t.offsetTop;return{element:t,offset:Math.floor(e-this.halfWindow)}}))}checkDistance(){this.distance.forEach((t=>{window.pageYOffset>t.offset?t.element.classList.add(this.activeClass):t.element.classList.contains(this.activeClass)&&t.element.classList.remove(this.activeClass)}))}init(){return this.sections.length&&(this.getDistance(),this.checkDistance(),window.addEventListener("scroll",this.checkDistance)),this}stop(){window.removeEventListener("scroll",this.checkDistance)}}('[data-anime="scroll"]').init(),new class{constructor(t,e,i){this.menuButton=document.querySelector(t),this.menuList=document.querySelector(e),this.activeClass="active",this.events=void 0===i?["touchstart","click"]:i,this.openMenu=this.openMenu.bind(this)}openMenu(e){e.preventDefault(),this.menuList.classList.toggle(this.activeClass),this.menuButton.classList.toggle(this.activeClass),t(this.menuList,this.events,(()=>{this.menuList.classList.remove(this.activeClass),this.menuButton.classList.remove(this.activeClass)}))}addMenuMobileEvents(){this.events.forEach((t=>this.menuButton.addEventListener(t,this.openMenu)))}init(){return this.menuButton&&this.menuList&&this.addMenuMobileEvents(),this}}('[data-menu = "button"]','[data-menu = "list"]').init(),new class{constructor(t,e){this.funcionamento=document.querySelector(t),this.activeClass=e}dadosFuncionamento(){this.diasSemana=this.funcionamento.dataset.semana.split(",").map(Number),this.horarioSemana=this.funcionamento.dataset.horario.split(",").map(Number)}dadosAgora(){this.dataAgora=new Date,this.diaAgora=this.dataAgora.getDay(),this.horarioAgora=this.dataAgora.getUTCHours()-3}estaAberto(){const t=-1!==this.diasSemana.indexOf(this.diaAgora),e=this.horarioAgora>=this.horarioSemana[0]&&this.horarioAgora<this.horarioSemana[1];return t&&e}ativaAberto(){this.estaAberto()&&this.funcionamento.classList.add(this.activeClass)}init(){return this.funcionamento&&(this.dadosFuncionamento(),this.dadosAgora(),this.ativaAberto()),this}}("[data-semana]").init(),function(t,i){const s=document.querySelector(".numeros-grid");!async function(){try{const t=await fetch("./animaisapi.json");(await t.json()).forEach((t=>function(t){const e=function(t){const e=document.createElement("div");return e.classList.add("numero-animal"),e.innerHTML=`<h3>${t.Especie}</h3>\n    <span data-numero>${t.Total}</span>`,e}(t);s.appendChild(e)}(t))),new e("[data-numero]",".numeros","ativo").init()}catch(t){console.log(t)}}()}(),function(t,e){const i="https://blockchain.info/ticker",s=document.querySelector(".btc-preco");s&&async function(){try{const t=await fetch(i),e=await t.json();s.innerText=`${e.BRL.symbol} ${(200/e.BRL.buy).toFixed(6)}`}catch(t){console.log(t)}}()}();const i=new class extends class{constructor(t,e){this.slide=document.querySelector(t),this.wrapper=document.querySelector(e),this.dist={finalPosition:0,startX:0,movement:0},this.activeClass="active"}transition(t){this.slide.style.transition=t?"transform .3s":""}moveSlide(t){this.dist.movePosition=t,this.slide.style.transform=`translate3d(${t}px, 0px, 0px)`}updatePosition(t){return this.dist.movement=1.6*(this.dist.startX-t),this.dist.finalPosition-this.dist.movement}onStart(t){let e="";"mousedown"===t.type?(t.preventDefault(),this.dist.startX=t.clientX,e="mousemove"):(this.dist.startX=t.changedTouches[0].clientX,e="touchmove"),this.wrapper.addEventListener(e,this.onMove),this.transition(!1)}onMove(t){const e="mousemove"===t.type?t.clientX:t.changedTouches[0].clientX,i=this.updatePosition(e);this.moveSlide(i)}onEnd(t){const e="mouseup"===t.type?"mousemove":"touchmove";this.wrapper.removeEventListener(e,this.onMove),this.dist.finalPosition=this.dist.movePosition,this.transition(!0),this.changeSlideOnEnd()}changeSlideOnEnd(){this.dist.movement>120&&void 0!==this.index.next?this.activeNextSlide():this.dist.movement<-120&&void 0!==this.index.prev?this.activePrevSlide():this.changeSlide(this.index.active)}addSlideEvents(){this.wrapper.addEventListener("mousedown",this.onStart),this.wrapper.addEventListener("touchstart",this.onStart),this.wrapper.addEventListener("mouseup",this.onEnd),this.wrapper.addEventListener("touchend",this.onEnd)}slidePosition(t){const e=(this.wrapper.offsetWidth-t.offsetWidth)/2;return-(t.offsetLeft-e)}slidesConfig(){this.slideArray=[...this.slide.children].map((t=>({position:this.slidePosition(t),element:t})))}slidesIndexNav(t){const e=this.slideArray.length-1;this.index={prev:t?t-1:void 0,active:t,next:t===e?void 0:t+1}}changeSlide(t){const e=this.slideArray[t];this.moveSlide(this.slideArray[t].position),this.slidesIndexNav(t),this.dist.finalPosition=e.position,this.changeActiveClass(),this.wrapper.dispatchEvent(this.changeEvent)}changeActiveClass(){this.slideArray.forEach((t=>t.element.classList.remove(this.activeClass))),this.slideArray[this.index.active].element.classList.add(this.activeClass)}activePrevSlide(){void 0!==this.index.prev&&this.changeSlide(this.index.prev)}activeNextSlide(){void 0!==this.index.next&&this.changeSlide(this.index.next)}onResize(){setTimeout((()=>{this.slidesConfig(),this.changeSlide(this.index.active)}),500)}addResizeEvent(){window.addEventListener("resize",this.onResize)}bindEvents(){this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.onResize=this.onResize.bind(this),this.activePrevSlide=this.activePrevSlide.bind(this),this.activeNextSlide=this.activeNextSlide.bind(this)}init(){this.slide&&this.wrapper&&(this.bindEvents(),this.transition(!0),this.addSlideEvents(),this.slidesConfig(),this.changeSlide(0),this.addResizeEvent())}}{constructor(t,e){super(t,e),this.bindControlEvents(),this.changeEvent=new Event("changeEvent")}addArrow(t,e){this.prevElement=document.querySelector(t),this.nextElement=document.querySelector(e),this.addArrowEvents()}addArrowEvents(){this.prevElement.addEventListener("click",this.activePrevSlide),this.nextElement.addEventListener("click",this.activeNextSlide)}createControl(){const t=document.createElement("ul");return t.dataset.control="slide",this.slideArray.forEach(((e,i)=>{t.innerHTML+=`<li><a href="#slide${i+1}">${i+1}</a></li>`})),this.wrapper.appendChild(t),t}eventControl(t,e){t.addEventListener("click",(t=>{t.preventDefault(),this.changeSlide(e),this.activeControlItem()})),this.wrapper.addEventListener("changeEvent",this.activeControlItem)}activeControlItem(){this.controlArray.forEach((t=>t.classList.remove(this.activeClass))),this.controlArray[this.index.active].classList.add(this.activeClass)}addControl(t){this.control=document.querySelector(t)||this.createControl(),this.controlArray=[...this.control.children],this.controlArray.forEach(this.eventControl),this.activeControlItem()}bindControlEvents(){this.eventControl=this.eventControl.bind(this),this.activeControlItem=this.activeControlItem.bind(this)}}(".slide",".wrapper");i.init(),i.addArrow(".prev",".next"),i.addControl(".custom-controls")})();