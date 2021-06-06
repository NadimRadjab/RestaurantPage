import { loadingPage, } from './LoadingPage'
import { homePage } from './home'
import { menu } from './menu'
import { contacts } from './contacts'


homePage()

const homeButton = document.querySelector('#Home')

homeButton.addEventListener('click', (e) => {


    homePage()

})
const menuButton = document.querySelector('#Menu')
menuButton.addEventListener('click', (e) => {
    menu()

})

const contactButton = document.querySelector('#Contact');

contactButton.addEventListener('click', () => {
    contacts()
})
