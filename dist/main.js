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
    const buttonText = ['Home', 'Menu', 'Contact'];
    const spanText = ['Andreea`s Pizza and Pasta © 2021 / All Rights Reserved', 'Created by Nadim Radjab'];
    const contentDiv = document.querySelector('#content');
    const mainDiv = document.createElement('div');
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

            navButtons.setAttribute('id', buttonText[i])
            navButtons.textContent = buttonText[i];
            navDiv.append(navButtons)
        }

        for (let i = 0; i < spanText.length; i++) {
            let footerSpans = document.createElement('span');
            footerSpans.classList.add('footerspan');
            footerSpans.textContent = spanText[i];
            footerDiv.append(footerSpans);

        };
        const atag = document.createElement('a');
        atag.href = 'https://github.com/NadimRadjab';
        atag.innerHTML = "<i class = 'fab fa-github'></i>";
        footerDiv.append(atag);

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
const homePage = () => {
    const divClasses = ['mainPic', 'text', 'hours'];
    const spanText = ['Mon-Friday: 8:00 - 19:00', ' Satarday: 8:00 - 15:00', 'Sunday : Closed'];
    const mainDiv = document.querySelector('.main');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const h3 = document.createElement('h3');
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('homeD');
    mainDiv.append(homeDiv);


    const homeButton = document.querySelector('#Home');
    homeButton.disabled = true;
    homeButton.classList.add('active')

    const menuButton = document.querySelector('#Menu');
    menuButton.addEventListener('click', () => {
        homeButton.disabled = false;
        homeDiv.remove();
    })
    menuButton.classList.remove('active')

    const contactsButton = document.querySelector('#Contact');
    contactsButton.addEventListener('click', () => {
        homeButton.disabled = false;
        homeDiv.remove();
    });
    contactsButton.classList.remove('active')


    const homePageFunc = () => {
        img.src = "imgs/3.jpg";
        img.setAttribute('id', 'img')
        h2.textContent = 'The best Pizza in Germany since 1992';
        p.textContent = 'Andrea`s Pizza provide variety of pizzas and pastas,  and also includes custom made Pizzas.'
        h3.textContent = 'Hours'

        for (let i = 0; i < divClasses.length; i++) {
            const contentDivs = document.createElement('div');
            contentDivs.classList.add(divClasses[i]);
            homeDiv.append(contentDivs)

            if (contentDivs.classList.contains('mainPic')) {
                contentDivs.append(img);
            } else if (contentDivs.classList.contains('text')) {
                contentDivs.append(h2);
                contentDivs.append(p);
            } else if (contentDivs.classList.contains('hours')) {
                contentDivs.append(h3);
                for (let j = 0; j < spanText.length; j++) {
                    let spans = document.createElement('span');
                    spans.classList.add('hoursspan');
                    spans.textContent = spanText[j];
                    contentDivs.append(spans);
                }


            }

        };
    }
    homePageFunc();

    return {
        homePageFunc
    }

};




/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });

const menu = () => {
    const divClasses = ['Menu', 'beverages', 'pizzas', 'pastas', 'desserts'];
    const aTagText = ['Beverages', 'Pizzas', 'Pastas', 'Desserts'];
    const aTagHref = ['#beverages', '#pizzas', '#pastas', '#desserts'];
    const pizzaPics = ['imgs/pizza-margherita.jpg', 'imgs/pizza-fontina.jpg', 'imgs/pizza-siciliana.jpg',
        'imgs/pizza-padellino.jpg'];
    const beveragesPics = ['imgs/cola.jpg', 'imgs/sprite.jpg']
    const spanB = ['Coca Cola 2,20$', 'Sprite 2,20$']
    const spanP = ['Pizza Margherita 9,25$', 'Pizza Fontina 11,55$', 'Pizza Siciliana 14,20$', 'Pizza Padellino 16,30$']
    const spanI = ['Ingredients: Dough, tomato sauce, cheese.', 'Ingredients: Eggs, dough, fontina cheese, parsley.', 'Ingredients: Dough, tomato sause, sausages , Basil leaves.',
        'Ingredients: Dough, Mozzarella, plum tomato,Olive oil,fresh basil leaves.'
    ];


    const mainDiv = document.querySelector('.main');
    const h2 = document.createElement('h2');
    const menuDiv = document.createElement('div');

    menuDiv.classList.add('remove');
    mainDiv.append(menuDiv);

    const menuB = document.querySelector('#Menu');
    menuB.disabled = true;
    menuB.classList.add('active')

    const contactsB = document.querySelector("#Contact");
    contactsB.addEventListener('click', () => {
        menuB.disabled = false;
        menuDiv.remove()
    })
    contactsB.classList.remove('active');


    const homeB = document.querySelector('#Home');
    homeB.addEventListener('click', () => {
        menuB.disabled = false;
        menuDiv.remove()
    })
    homeB.classList.remove('active');



    const menuFunc = () => {

        h2.textContent = 'Menu'
        for (let i = 0; i < divClasses.length; i++) {
            const menuDivs = document.createElement('div');
            menuDivs.classList.add(divClasses[i]);
            menuDivs.setAttribute('id', divClasses[i]);
            menuDiv.append(menuDivs)

            if (menuDivs.classList.contains('Menu')) {
                menuDivs.append(h2);
                for (let j = 0; j < aTagText.length; j++) {
                    const aTags = document.createElement('a');
                    aTags.textContent = aTagText[j];
                    aTags.href = aTagHref[j]
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
                menuDivs.append(h3B);
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

            } else if (menuDivs.classList.contains('pastas')) {
                let h3B = document.createElement('h3');
                h3B.textContent = 'Pastas';
                h3B.classList.add('h3Menu');
                menuDivs.append(h3B);

                const pastaImg = document.createElement('img');
                pastaImg.classList.add('menuPics');
                pastaImg.src = 'imgs/pasta-cannelloni.jpg'
                menuDivs.append(pastaImg);

                const spanPasta = document.createElement('span');
                spanPasta.classList.add('menuspan');
                spanPasta.textContent = 'Pasta Cannelloni 9,25$';
                menuDivs.append(spanPasta);

                const spanPastaIn = document.createElement('span');
                spanPastaIn.classList.add('ingredients');
                spanPastaIn.textContent = 'Ingredients: Cannelloni, onions, ricotta, Parmesan.'
                menuDivs.append(spanPastaIn);


            } else if (menuDivs.classList.contains('desserts')) {
                let h3B = document.createElement('h3');
                h3B.textContent = 'Deserts';
                h3B.classList.add('h3Menu');
                menuDivs.append(h3B);

                const dessertImg = document.createElement('img');
                dessertImg.classList.add('menuPics');
                dessertImg.src = 'imgs/tiramisu.jpg'
                menuDivs.append(dessertImg);

                const spanDessert = document.createElement('span');
                spanDessert.classList.add('menuspan');
                spanDessert.textContent = 'Tiramisù 7,25$';
                menuDivs.append(spanDessert);

                const spanDessertIn = document.createElement('span');
                spanDessertIn.classList.add('ingredients');
                spanDessertIn.textContent = 'Ingredients: Eggs, sugar, cocoa powder, coffe.'
                menuDivs.append(spanDessertIn);


            }


        }

    }
    menuFunc()


    return {
        menuFunc
    }
};





/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contacts": () => (/* binding */ contacts)
/* harmony export */ });
const contacts = () => {
    const pText = ['Phone Number: 017713546795', 'Adresss: Chausseestraße 16-18, 10115 Berlin'
        , 'Email Address: andreeapizza@.gmail.com ']
    const mainDiv = document.querySelector('.main');
    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('contacts');
    mainDiv.append(contactsDiv);
    const h2 = document.createElement('h2');
    const contactsButton = document.querySelector('#Contact');

    contactsButton.disabled = true;
    contactsButton.classList.add('active');

    const homeButton = document.querySelector('#Home');
    homeButton.disabled = false;
    homeButton.classList.remove('active');

    const menuButton = document.querySelector('#Menu');
    menuButton.addEventListener('click', () => {

        contactsButton.disabled = false;
        contactsDiv.remove();
    });
    menuButton.classList.remove('active');

    homeButton.addEventListener('click', () => {
        contactsButton.disabled = false;
        contactsDiv.remove();
    });



    const contactsStuff = () => {
        h2.textContent = 'Contacts'
        contactsDiv.append(h2);
        for (let i = 0; i < pText.length; i++) {
            const p = document.createElement('p');
            p.textContent = pText[i];
            contactsDiv.append(p);
        }
        const pframe = document.createElement('p')
        const iframe = document.createElement('iframe')
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d606.8011273315389!2d13.383577929267778!3d52.529733914599085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851ec7d6c1529%3A0xf2e032eb70d1ba42!2sChausseestra%C3%9Fe%2016-18%2C%2010115%20Berlin!5e0!3m2!1sen!2sde!4v1622975842942!5m2!1sen!2sde"
        iframe.width = "400";
        iframe.height = "300";
        iframe.style = "border:0;";
        iframe.allowfullscreen = '';
        iframe.loading = "laze";
        contactsDiv.append(pframe);
        pframe.append(iframe);

        const fSpan = document.createElement('span');
        fSpan.classList.add('fSpan');
        fSpan.textContent = 'Follow us on';
        contactsDiv.append(fSpan);
        const aF = document.createElement('a');
        aF.innerHTML = '<i class="fab fa-facebook"></i>';
        contactsDiv.append(aF);




    }
    contactsStuff()
    return {
        contactsStuff
    }

}



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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _contacts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);






(0,_home__WEBPACK_IMPORTED_MODULE_1__.homePage)();

const homeButton = document.querySelector('#Home')

homeButton.addEventListener('click', (e) => {


    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__.homePage)();

});
const menuButton = document.querySelector('#Menu')
menuButton.addEventListener('click', (e) => {
    ;(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)();

});

const contactButton = document.querySelector('#Contact');

contactButton.addEventListener('click', () => {
    (0,_contacts__WEBPACK_IMPORTED_MODULE_3__.contacts)();
});

})();

/******/ })()
;