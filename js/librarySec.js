import {createBook} from "./createBook.js";
import {bestsellerIds, latestIds} from "./books.js";
import {getBooks} from "./bookBlock.js";

export const getLibrary = (books, orderList) => {
    const librarySection = document.createElement('main');
    const bestsellerTitle = document.createElement('h2');
    const bestsellerWrapper = document.createElement('div');
    const latestTitle = document.createElement('h2');
    const latestWrapper = document.createElement('div');

    librarySection.classList.add('main');
    bestsellerTitle.classList.add('main-title');
    bestsellerWrapper.classList.add('books-wrapper', 'bestseller-wrapper');
    latestTitle.classList.add('main-title');
    latestWrapper.classList.add('books-wrapper', 'latest-wrapper');

    bestsellerTitle.innerHTML = 'Bestseller';
    latestTitle.innerHTML = 'Latest';


    librarySection.appendChild(bestsellerTitle);
    librarySection.appendChild(bestsellerWrapper);
    librarySection.appendChild(latestTitle);
    librarySection.appendChild(latestWrapper);

    getBooks().then(data => {
        books.push(...data)
        data.forEach((book) => {
            if (bestsellerIds.includes(book.id)) {
                bestsellerWrapper.appendChild(createBook(book, orderList))
            }
        })

        data.forEach((book) => {
            if (latestIds.includes(book.id)) {
                latestWrapper.appendChild(createBook(book, orderList))
            }
        })
    })

    return librarySection;

}



