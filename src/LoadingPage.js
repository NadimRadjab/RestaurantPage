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
            navButtons.setAttribute('id', buttonText[i])
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




// const homePage = () => {
//     const divClasses = ['mainPic', 'text', 'hours'];
//     const spanText = ['Mon-Friday: 8:00 - 19:00', ' Satarday: 8:00 - 15:00', 'Sunday : Closed'];
//     // const contentDiv = document.querySelector('#content')
//     const mainDiv = document.querySelector('.main');
//     const img = document.createElement('img');
//     const h2 = document.createElement('h2');
//     const p = document.createElement('p');
//     const h3 = document.createElement('h3');
//     const menuDiv = document.createElement('div')
//     menuDiv.setAttribute('id', 'remove')
//     menuDiv.classList.add('remove')
//     mainDiv.append(menuDiv);
//     const removeButton = document.querySelector('#Menu')
//     const stopButton = document.querySelector('#Home')
//     stopButton.disabled = true;

//     removeButton.addEventListener('click', () => {
//         stopButton.disabled = false;
//         menuDiv.remove()
//     })


//     const homePageFunc = () => {
//         img.src = "imgs/3.jpg";
//         img.setAttribute('id', 'img')
//         h2.textContent = 'The best Pizza in Germany since 1992';
//         p.textContent = 'Andrea`s Pizza provide variety of pizzas and pastas,  and also includes custom made Pizzas.'
//         h3.textContent = 'Hours'

//         for (let i = 0; i < divClasses.length; i++) {
//             const contentDivs = document.createElement('div');
//             contentDivs.classList.add(divClasses[i]);
//             menuDiv.append(contentDivs)

//             if (contentDivs.classList.contains('mainPic')) {
//                 contentDivs.append(img);
//             } else if (contentDivs.classList.contains('text')) {
//                 contentDivs.append(h2);
//                 contentDivs.append(p);
//             } else if (contentDivs.classList.contains('hours')) {
//                 contentDivs.append(h3)
//                 for (let j = 0; j < spanText.length; j++) {
//                     let spans = document.createElement('span')
//                     spans.classList.add('hoursspan')
//                     spans.textContent = spanText[j]
//                     contentDivs.append(spans)
//                 }


//             }

//         };
//     }
//     homePageFunc()

//     return {
//         homePageFunc
//     }

// };

export { loadingPage }