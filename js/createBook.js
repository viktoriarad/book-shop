export function createBook(bookData, orderList) {
    const {id, imageLink, author, title, description, price} = bookData
    const bookWrapper = document.createElement('div');
    const bookImg = document.createElement('img');
    const authorTitle = document.createElement('h4');
    const bookTitleEl = document.createElement('h3');
    const descriptionBtn = document.createElement('span');
    const descriptionWrapper = document.createElement('div');
    const descriptionText = document.createElement('p');
    const descriptionCloseBtn = document.createElement('button');
    const descriptionCloseIcon = document.createElement('i');
    const priceBuyBtnWrapper = document.createElement('div');
    const priceEl = document.createElement('span');
    const buyBtn = document.createElement('button');
    const modalWindow = document.createElement('div');

    bookWrapper.classList.add('book-wrapper');
    bookImg.classList.add('book-img');
    authorTitle.classList.add('author-name');
    bookTitleEl.classList.add('book-tile');
    descriptionBtn.classList.add('description-btn');
    descriptionWrapper.classList.add('description-wrapper');
    descriptionText.classList.add('description-text');
    descriptionCloseBtn.classList.add('close-btn');
    descriptionCloseIcon.classList.add("fa-solid", "fa-xmark" ,"close-icon");
    priceBuyBtnWrapper.classList.add('price-buy-btn-container');
    priceEl.classList.add('price');
    buyBtn.classList.add('buy-btn', 'btn');
    modalWindow.classList.add('modal-window');

    descriptionCloseIcon.setAttribute('title', 'Close the description')


    bookImg.src = imageLink
    authorTitle.innerHTML = author;
    bookTitleEl.innerHTML = title;
    descriptionBtn.innerHTML = "see more";
    descriptionText.innerHTML = description;

    priceEl.innerHTML = price;
    buyBtn.innerHTML = 'Buy';

    bookWrapper.appendChild(bookImg);
    bookWrapper.appendChild(authorTitle);
    bookWrapper.appendChild(bookTitleEl);
    bookWrapper.appendChild(descriptionBtn);
    bookWrapper.appendChild(descriptionWrapper);
    descriptionWrapper.appendChild(descriptionText);
    descriptionWrapper.appendChild(descriptionCloseBtn);
    descriptionCloseBtn.appendChild(descriptionCloseIcon);
    bookWrapper.appendChild(priceBuyBtnWrapper);
    priceBuyBtnWrapper.appendChild(priceEl);
    priceBuyBtnWrapper.appendChild(buyBtn);
    document.body.appendChild(modalWindow);


    descriptionBtn.addEventListener('click', function (e) {
        descriptionWrapper.classList.add('active-description');
        modalWindow.classList.add('modal-window-active');
    });

    descriptionCloseIcon.addEventListener('click', function (e) {
        descriptionWrapper.classList.remove('active-description');
        modalWindow.classList.remove('modal-window-active')
    })

    buyBtn.addEventListener('click', () => {
        orderList.push(id);
    })


    return bookWrapper;
}
