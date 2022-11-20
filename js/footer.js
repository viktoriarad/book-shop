export const getFooter = () => {

    const footer = document.createElement('footer');
    const socialMediaWrapper = document.createElement('div');
    const fbLink = document.createElement('a');
    const fbIcon = document.createElement('i');
    const instagramLink = document.createElement('a');
    const instagramIcon = document.createElement('i');
    const twitterLink = document.createElement('a');
    const twitterIcon = document.createElement('i');
    const copyright = document.createElement('h2');

    fbLink.href = 'https://www.facebook.com/';
    instagramLink.href = 'https://www.instagram.com/';
    twitterLink.href = 'https://twitter.com/';

    fbLink.setAttribute('target', '_blank');
    instagramLink.setAttribute('target', '_blank');
    twitterLink.setAttribute('target', '_blank');

    footer.classList.add('footer');
    socialMediaWrapper.classList.add('social-wrapper');
    fbIcon.classList.add('fa-brands', 'fa-facebook-f');
    instagramIcon.classList.add('fa-brands', 'fa-instagram');
    twitterIcon.classList.add('fa-brands', 'fa-twitter');
    copyright.classList.add('copyright');

    copyright.innerHTML = "Viktoriia Radchenko • 2022";

    footer.appendChild(socialMediaWrapper);
    socialMediaWrapper.appendChild(fbLink);
    fbLink.appendChild(fbIcon);
    socialMediaWrapper.appendChild(instagramLink);
    instagramLink.appendChild(instagramIcon);
    socialMediaWrapper.appendChild(twitterLink);
    twitterLink.appendChild(twitterIcon);
    footer.appendChild(copyright);

    return footer;
}