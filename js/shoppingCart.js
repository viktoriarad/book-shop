export const getShoppingCart = (books, orderList) => {
    const shoppingCardWrapper = document.createElement('div');
    const userBag = document.createElement('div');
    const bagTitle = document.createElement('h2');
    //item

    //total section
    const summarise = document.createElement('div');
    const totalAmountWrapper = document.createElement('div');
    const totalTitle = document.createElement('span')
    const totalAmount = document.createElement('span');
    const confirmButton = document.createElement('button');

    shoppingCardWrapper.classList.add('shopping-cart-wrapper');
    userBag.classList.add('user-bag');
    bagTitle.classList.add('user-bag-title');
    //item

    //total section
    summarise.classList.add('summarise');
    totalAmountWrapper.classList.add('total-amount-wrapper')
    totalTitle.classList.add('total-title');
    totalAmount.classList.add('total-amount');
    confirmButton.classList.add('summarise-confirm');

    bagTitle.innerHTML = "My bag";


    totalTitle.innerHTML = "Total:";

    confirmButton.innerHTML = "Confirm";


    shoppingCardWrapper.appendChild(userBag);
    userBag.appendChild(bagTitle);

    let totalPrice = 0;

    orderList.forEach((itemId) => {
        const foundBook = books.find((book) => {
            return book.id === itemId;
        })

        const itemWrapper = document.createElement('div');
        const bookTitle = document.createElement('h3');
        const author = document.createElement('h4');
        const price = document.createElement('span');
        const trashIcon = document.createElement('i');

        itemWrapper.classList.add('item-wrapper');
        bookTitle.classList.add('book-title');
        author.classList.add('author');
        price.classList.add('price');
        trashIcon.classList.add('fa-solid', 'fa-trash');

        bookTitle.innerHTML = foundBook.title;
        author.innerHTML = foundBook.author;
        price.innerHTML = foundBook.price;

        totalPrice += foundBook.price;

        itemWrapper.appendChild(bookTitle);
        itemWrapper.appendChild(author);
        itemWrapper.appendChild(price);
        itemWrapper.appendChild(trashIcon);

        userBag.appendChild(itemWrapper);

        trashIcon.addEventListener('click', () => {
            itemWrapper.remove();
            orderList.splice(orderList.findIndex((item) => item.id === itemId), 1);
            const updatedTotal = parseInt(totalAmount.innerHTML) - foundBook.price;
            totalAmount.innerHTML = updatedTotal;
            confirmButton.disabled = updatedTotal === 0;
        })
    })

    totalAmount.innerHTML = totalPrice;

    confirmButton.disabled = totalPrice === 0;

    confirmButton.addEventListener('click', () => {
        window.location.href = "./pages/form.html";
    })

    shoppingCardWrapper.appendChild(summarise);
    summarise.appendChild(totalAmountWrapper);
    totalAmountWrapper.appendChild(totalTitle);
    totalAmountWrapper.appendChild(totalAmount);
    summarise.appendChild(confirmButton);

    return shoppingCardWrapper;
}