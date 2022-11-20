import {getHeaderBanner} from "./headerBanner.js";
import {getLibrary} from "./librarySec.js";
import {getAboutSection} from "./about.js";

export const getMainPage = (books, orderList) => {
    const container = document.createElement('div');

    container.appendChild(getHeaderBanner());
    container.appendChild(getLibrary(books, orderList));
    container.appendChild(getAboutSection());

    return container;
}
