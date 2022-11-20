export const getAboutSection = () => {
    const aboutUsSection = document.createElement('section');
    const aboutTitle = document.createElement('h2');
    const contentWrapper = document.createElement('div');
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    const paragraph3 = document.createElement('p');
    const aboutImg = document.createElement('img');

    aboutImg.src = './image/Education-1.png'

    aboutUsSection.classList.add('about-us');
    aboutTitle.classList.add('main-title', 'about-title');
    contentWrapper.classList.add('content-wrapper');
    paragraph1.classList.add('paragraph');
    paragraph2.classList.add('paragraph');
    paragraph3.classList.add('paragraph');
    aboutImg.classList.add('about-img');

    aboutTitle.innerHTML = 'About Us';
    paragraph1.innerHTML = 'Our Book Store is an English-language used bookstore and cafe located a few minutes from Krakow old town center.';
    paragraph2.innerHTML = 'Most of our titles are either used books brought from the U.S., or new books that have been significantly discounted.';
    paragraph3.innerHTML = 'A large part of our stock is catalogued and available for searching, or browsing by subject category, on this website.';


    aboutUsSection.appendChild(aboutTitle);
    aboutUsSection.appendChild(contentWrapper);
    contentWrapper.appendChild(paragraph1);
    contentWrapper.appendChild(paragraph2);
    contentWrapper.appendChild(paragraph3);
    aboutUsSection.appendChild(aboutImg);

    return aboutUsSection;
}