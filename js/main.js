import {getMainPage} from "./mainPage.js";
import {getNavigation} from "./navigation.js";
import {getFooter} from "./footer.js";
import {getShoppingCart} from "./shoppingCart.js";


const books = [];
const orderList = [];
window.orderList = orderList;

document.body.appendChild(getNavigation());
const pageContent = document.createElement('div');

document.body.appendChild(pageContent);

// const shoppingCartPage = getShoppingCart(books, orderList);
const mainPage = getMainPage(books, orderList);
pageContent.appendChild(mainPage);

document.body.appendChild(getFooter());


const showPage = (page) => {
    pageContent.innerHTML = "";
    pageContent.appendChild(page);
}


document.querySelector(".fa-bag-shopping").addEventListener('click', () => showPage(getShoppingCart(books, orderList)));
document.querySelector(".logo-link").addEventListener('click', () => showPage(mainPage));




