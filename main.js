/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadingPage": () => (/* binding */ loadingPage)
/* harmony export */ });
const loadingPage = (() => {
    const buttonText = ['Home', 'Menu', 'Contact']
    const spanText = ['Andreea`s Pizza and Pasta &copy; 2021 / All Rights Reserved', 'Created by Nadim Radjab']
    const contentDiv = document.querySelector('#content');
    const mainDiv = document.createElement('div')
    const titleDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    const navDiv = document.createElement('div');
    const navSpan = document.createElement('span');
    const footerDiv = document.createElement('div');





    const lPage = () => {
        titleDiv.classList.add('title');
        navDiv.classList.add('nav')
        mainDiv.classList.add('main')
        footerDiv.classList.add('footer');
        navSpan.classList.add('spantitle')
        h1.textContent = "Andreea's Pizza and Pasta";
        navSpan.textContent = 'A Slice of Heaven';
        contentDiv.append(titleDiv);
        titleDiv.append(h1);
        titleDiv.append(navDiv);
        navDiv.append(navSpan);
        contentDiv.append(mainDiv);
        contentDiv.append(footerDiv);



        for (let i = 0; i < buttonText.length; i++) {
            let navButtons = document.createElement('button');
            navButtons.textContent = buttonText[i];
            navDiv.append(navButtons)
        }
    };
    for (let i = 0; i < spanText.length; i++) {
        let footerSpans = document.createElement('span');
        footerSpans.classList.add('footerspan')
        footerSpans.textContent = spanText[i];
        footerDiv.append(footerSpans)

    };
    lPage();

    return {
        lPage
    }

})();



/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = (() => {
    const divClasses = ['Menu', 'beverages', 'pizzas', 'pastas', 'desserts'];
    const aTagText = ['Beverages', 'Pizzas', 'Pastas', 'Desserts'];
    const pizzaPics = ['imgs/pizza-margherita.jpg', 'imgs/pizza-fontina.jpg', 'imgs/pizza-siciliana.jpg', 'imgs/pizza-padellino.jpg'];
    const beveragesPics = ['imgs/cola.jpg', 'imgs/sprite.jpg']
    const spanB = ['Coca Cola 2,20$', 'Sprite 2,20$']
    const spanP = ['Pizza Margherita 9,25&euro;', 'Pizza Fontina 11,55&euro;', 'Pizza Siciliana 14,20&euro', 'Pizza Padellino 16,30&euro;']
    const spanI = ['Ingredients: Dough, tomato sauce, cheese.', 'Ingredients: Eggs, dough, fontina cheese, parsley.', 'Ingredients: Dough, tomato sause, sausages , Basil leaves.',
        'Ingredients: Dough, Mozzarella, plum tomato,Olive oil,fresh basil leaves.'
    ];
    const h2 = document.createElement('h2')
    const mainDiv = document.querySelector('.main')


    const menuFunc = () => {
        h2.textContent = 'Menu'
        for (let i = 0; i < divClasses.length; i++) {
            const menuDivs = document.createElement('div');
            menuDivs.classList.add(divClasses[i])
            mainDiv.append(menuDivs)

            if (menuDivs.classList.contains('Menu')) {
                menuDivs.append(h2);
                for (let j = 0; j < aTagText.length; j++) {
                    const aTags = document.createElement('a');
                    aTags.textContent = aTagText[j];
                    menuDivs.append(aTags);
                }

            } else if (menuDivs.classList.contains('beverages')) {
                let h3B = document.createElement('h3')
                h3B.textContent = 'Beverages'
                h3B.classList.add('beveragesh3')
                menuDivs.append(h3B);
                for (let k = 0; k < beveragesPics.length; k++) {
                    const bImgs = document.createElement('img');
                    bImgs.classList.add('menuPics');
                    bImgs.src = beveragesPics[k];
                    menuDivs.append(bImgs);
                    const bSpans = document.createElement('span');
                    bSpans.classList.add('menuspan');
                    menuDivs.append(bSpans);
                    bSpans.textContent = spanB[k];
                }


            } else if (menuDivs.classList.contains('pizzas')) {
                let h3B = document.createElement('h3');
                h3B.textContent = 'Pizzas';
                h3B.classList.add('h3Menu');
                for (let i = 0; i < pizzaPics.length; i++) {
                    const pImgs = document.createElement('img');
                    pImgs.classList.add('menuPics');
                    pImgs.src = pizzaPics[i];
                    menuDivs.append(pImgs);
                    const pSpan = document.createElement('span')
                    pSpan.classList.add('menuspan');
                    pSpan.textContent = spanP[i];
                    menuDivs.append(pSpan)
                    const iSpan = document.createElement('span');
                    iSpan.classList.add('ingredients');
                    iSpan.textContent = spanI[i];
                    menuDivs.append(iSpan);


                }

            }

        }

    }
    menuFunc()

    return {
        menuFunc
    }
})();



/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


// import { homePage } from './home'
})();

/******/ })()
;