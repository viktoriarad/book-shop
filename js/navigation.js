export const getNavigation = () => {
    const header = document.createElement("header");
    const navigation = document.createElement('nav');
    const logoLink = document.createElement('a');
    const logo = document.createElement('h1');
    const logoSpan = document.createElement('span');
    const navList = document.createElement('ul');
    const navItemAbout = document.createElement('li');
    const linkAbout = document.createElement('a');
    const navItemCatalog = document.createElement('li');
    const linkCatalog = document.createElement('a');
    const navItemBlog = document.createElement('li');
    const linkBlog = document.createElement('a');
    const navItemFAQ = document.createElement('li');
    const linkFAQ = document.createElement('a');
    const bagIcon = document.createElement('i');

    header.classList.add('header');
    navigation.classList.add('navigation');
    logoLink.classList.add('logo-link');
    logo.classList.add('header-logo');
    logoSpan.classList.add('logo-sub');
    navList.classList.add('nav-list');
    navItemAbout.classList.add('nav-item');
    navItemCatalog.classList.add('nav-item');
    navItemBlog.classList.add('nav-item');
    navItemFAQ.classList.add('nav-item');
    bagIcon.classList.add('fa-solid', 'fa-bag-shopping', 'icon-color');


    logo.innerHTML = 'Book';
    logoSpan.innerHTML = 'store';
    linkAbout.innerHTML = 'About Us';
    linkCatalog.innerHTML = 'Catalog';
    linkBlog.innerHTML = 'Blog';
    linkFAQ.innerHTML = 'FAQ';


    //navigation
    header.appendChild(navigation);

    navigation.appendChild(logoLink);
    logoLink.appendChild(logo);

    logo.appendChild(logoSpan);
    navigation.appendChild(navList);
    //li>a structure
    navList.appendChild(navItemAbout);
    navItemAbout.appendChild(linkAbout);
    navList.appendChild(navItemCatalog);
    navItemCatalog.appendChild(linkCatalog);
    navList.appendChild(navItemBlog);
    navItemBlog.appendChild(linkBlog);
    navList.appendChild(navItemFAQ);
    navItemFAQ.appendChild(linkFAQ);
    //bag-icon
    navigation.appendChild(bagIcon);

    return header;
}