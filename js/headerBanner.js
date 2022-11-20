export const getHeaderBanner = () => {
    const headerMainPageWrapper = document.createElement('div');
    const headerTitle = document.createElement('h2');
    const headerSubTitle = document.createElement('span');
    const headerImg = document.createElement('img');

    headerImg.src = ("./image/main-picture.svg")

    headerMainPageWrapper.classList.add('header-main');
    headerTitle.classList.add('header-title');
    headerSubTitle.classList.add('color-gradient');
    headerImg.classList.add('bg-img');

    headerTitle.innerHTML = 'Reading make us ';
    headerSubTitle.innerHTML = 'kinder';


    headerMainPageWrapper.appendChild(headerTitle);
    headerTitle.appendChild(headerSubTitle);
    headerMainPageWrapper.appendChild(headerImg);

    return headerMainPageWrapper;
}