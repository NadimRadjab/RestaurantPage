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

export { contacts }