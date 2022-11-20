export const getBooks = () => {

    return fetch('./assets/books.json').then(response => {
        return response.json();
    })
}
