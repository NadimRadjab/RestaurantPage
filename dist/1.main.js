(self["webpackChunkrestaurantpage"] = self["webpackChunkrestaurantpage"] || []).push([[1],{

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = (() => {
    const divClasses = ['Menu', 'beverages', 'pizzas', 'pastas', 'desserts'];
    const aTagText = ['Beverages', 'Pizzas', 'Pastas', 'Desserts'];
    const pizzaPics = ['imgs/pizza-margherita.jpg', 'imgs/pizza-fontina.jpg', 'imgs/pizza-siciliana.jpg',
        'imgs/pizza-padellino.jpg'];
    const beveragesPics = ['imgs/cola.jpg', 'imgs/sprite.jpg']
    const spanB = ['Coca Cola 2,20$', 'Sprite 2,20$']
    const spanP = ['Pizza Margherita 9,25$', 'Pizza Fontina 11,55$', 'Pizza Siciliana 14,20$', 'Pizza Padellino 16,30$']
    const spanI = ['Ingredients: Dough, tomato sauce, cheese.', 'Ingredients: Eggs, dough, fontina cheese, parsley.', 'Ingredients: Dough, tomato sause, sausages , Basil leaves.',
        'Ingredients: Dough, Mozzarella, plum tomato,Olive oil,fresh basil leaves.'
    ];
    const mainDiv = document.querySelector('.main')
    const h2 = document.createElement('h2')
    const menuDiv = document.createElement('div')
    menuDiv.setAttribute('id', 'remove')
    menuDiv.classList.add('remove')
    mainDiv.append(menuDiv);
    const removeButton = document.querySelector('#Home')

    removeButton.addEventListener('click', () => {
        menuDiv.remove()
    })



    const menuFunc = () => {

        h2.textContent = 'Menu'
        for (let i = 0; i < divClasses.length; i++) {
            const menuDivs = document.createElement('div');
            menuDivs.classList.add(divClasses[i])
            menuDiv.append(menuDivs)

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

    const test = () => {
        if (menuDiv.classList.contains('remove')) {
            menuDiv.remove()
        }

    }

    return {
        menuFunc
    }
})();








/***/ })

}]);