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


export { homePage }