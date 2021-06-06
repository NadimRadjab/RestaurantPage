/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// import { loadingPage, } from './LoadingPage'
// import { homePage } from './home'
// import { menu } from './menu'

homePage()

const homeButton = document.querySelector('#Home')

homeButton.addEventListener('click', (e) => {


    homePage()

})
const menuButton = document.querySelector('#Menu')
menuButton.addEventListener('click', (e) => {
    menu()

})

/******/ })()
;