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

export { loadingPage }