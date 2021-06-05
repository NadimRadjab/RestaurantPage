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

export {
    menu
}