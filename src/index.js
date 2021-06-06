import { loadingPage, homePage } from './LoadingPage'
// import { homePage } from './home'
import { menu, } from './menu'


const homeButton = document.querySelector('#Home')

homeButton.addEventListener('click', (e) => {


    homePage()

})
const menuButton = document.querySelector('#Menu')
menuButton.addEventListener('click', (e) => {
    menu()

})
