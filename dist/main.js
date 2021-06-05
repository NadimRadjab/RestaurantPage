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
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
const homePage = (() => {
    const divClasses = ['mainPic', 'text', 'hours'];
    const spanText = ['Mon-Friday: 8:00 - 19:00', ' Satarday: 8:00 - 15:00', 'Sunday : Closed'];
    // const contentDiv = document.querySelector('#content')
    const mainDiv = document.querySelector('.main');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const h3 = document.createElement('h3');


    const homePageFunc = () => {
        img.src = "imgs/3.jpg";
        h2.textContent = 'The best Pizza in Germany since 1992';
        p.textContent = 'Andrea`s Pizza provide variety of pizzas and pastas,  and also includes custom made Pizzas.'
        h3.textContent = 'Hours'

        for (let i = 0; i < divClasses.length; i++) {
            const contentDivs = document.createElement('div');
            contentDivs.classList.add(divClasses[i]);
            mainDiv.append(contentDivs)

            if (contentDivs.classList.contains('mainPic')) {
                contentDivs.append(img);
            } else if (contentDivs.classList.contains('text')) {
                contentDivs.append(h2);
                contentDivs.append(p);
            } else if (contentDivs.classList.contains('hours')) {
                contentDivs.append(h3)
                for (let j = 0; j < spanText.length; j++) {
                    let spans = document.createElement('span')
                    spans.classList.add('hoursspan')
                    spans.textContent = spanText[j]
                    contentDivs.append(spans)
                    console.log([j])
                }


            }

        };
    }
    homePageFunc();

    return {
        homePageFunc
    }

})()



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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


})();

/******/ })()
;